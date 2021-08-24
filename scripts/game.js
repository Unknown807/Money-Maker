
// Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 512;

document.body.appendChild(canvas);

// Entities

var map = new GameMap();
var camera = new Camera();
var player = new PlayerSprite("assets/images/tilesets/npcs1.png", [50, canvas.height/2], [0, 0], [32, 32], 6, [[0,1], [2,3], [4,5], [6,7]])
var EKeySprite = new Sprite("assets/images/ekeys.png", [0,0], [0, 0], [32, 32], 2, [[0,1],]);
EKeySprite.hide = true;
EKeySprite.moving = true;

sounds.load([
	{id: "footstep_grass", src: "assets/sounds/footstep_grass.wav"},
	{id: "footstep_wood", src: "assets/sounds/footstep_wood.wav"},
	{id: "jazz_bg", src: "assets/sounds/jazz_bg.wav"},
	{id: "flute_bg", src: "assets/sounds/flute_bg.wav"},
	{id: "elevator_bg", src: "assets/sounds/elevator_bg.wav"},
	{id: "menu_click", src: "assets/sounds/menu_click.wav"},
	{id: "item_pick_up", src: "assets/sounds/item_pick_up.wav"},
	{id: "special_item_pick_up", src: "assets/sounds/special_item_pick_up.wav"},
	{id: "start_convo", src: "assets/sounds/start_convo.wav"},
]);

sounds.onReady(init_resources);


function init_resources() {
	resources.load([
		"assets/images/tilesets/birds.png",
		"assets/images/tilesets/chicken_eat.png",
		"assets/images/tilesets/clocks.png",
		"assets/images/tilesets/cow_eat.png",
		"assets/images/tilesets/npcs1.png",
		"assets/images/tilesets/exteriors1.png",
		"assets/images/tilesets/exteriors2.png",
		"assets/images/tilesets/exteriors3.png",
		"assets/images/tilesets/exteriors4.png",
		"assets/images/tilesets/farm_misc.png",
		"assets/images/tilesets/gems.png",
		"assets/images/tilesets/items.png",
		"assets/images/tilesets/interiors1.png",
		"assets/images/tilesets/interiors2.png",
		"assets/images/tilesets/interiors3.png",
		"assets/images/tilesets/llama_eat.png",
		"assets/images/tilesets/monsters.png",
		"assets/images/tilesets/pig_eat.png",
		"assets/images/tilesets/sheep_eat.png",
		"assets/images/tilesets/signs.png",
		"assets/images/tilesets/slimes.png",
		"assets/images/tilesets/wateranimate.png",
		"assets/images/ekeys.png",
	]);

	resources.onReady(init);
}

// The game loop

var lastTime;

function main() {
	let now = Date.now();
	let dt = (now - lastTime) / 1000.0;
	
	update(dt);
	render();
	
	lastTime = now;
	requestAnimFrame(main);
}

function init() {	
	try {
		fs.writeFileSync("removed_items.json", JSON.stringify({
			"main_island_lounge": [],
		}));
		
		fs.writeFileSync("speech_counters.json", JSON.stringify({
			"main_island_lounge": {},
		}));
	} catch (err) {
		console.error(err);
	}
	
	map.updateData(player, "main_island_lounge");
	map.createAnimatedTiles();
	map.createItemSprites();
	map.createNPCSprites();
	lastTime = Date.now();
	
	// Show title screen first
	document.getElementById("menu-area").style.backgroundImage = "url("+"'./assets/images/title_bg.png'"+")";
	document.getElementById("back-button").style.display = "none";
	document.getElementById("cross-button").style.display = "none";
	toggleMenus("block");
	
	updateInventoryMenu(player.inventory);
	
	main();
}

function update(dt) {
	handleMovementInput(player, dt);
	handleInteractionInput(player, EKeySprite, map);
	
	player.update(dt);
	
	EKeySprite.pos = [player.pos[0], player.pos[1]-32];
	EKeySprite.update(dt);
	
	updateEntities(dt, map.animated_tile_sprites);
	updateEntities(dt, map.item_sprites);
	updateEntities(dt, map.npc_sprites);
	
	checkObstacleCollisions(player);
	checkDoorCollisions(player);
	
	if (!checkItemCollisions(player, EKeySprite)) {
		checkNPCCollisions(player, EKeySprite);
	}
}

function updateEntities(dt, entities) {
	entities.forEach((entity) => entity.update(dt));
}

function render() {
	camera.render(ctx, canvas.width, canvas.height, player);
	
	map.renderLayer(ctx, map.background);
	map.renderLayer(ctx, map.underlay);
	
	renderEntities(map.item_sprites);
	renderEntities(map.npc_sprites);
	renderEntity(player);
	renderEntities(map.animated_tile_sprites);
	
	map.renderLayer(ctx, map.overlay);
	renderEntity(EKeySprite);
}

function renderEntities(entities) {
	entities.forEach(renderEntity);
}

function renderEntity(entity) {
	ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.render(ctx);
    ctx.restore();
}