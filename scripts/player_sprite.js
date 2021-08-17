
class PlayerSprite extends Sprite {
	constructor(resource, pos, imgPos, size, speed, frames, dir) {
		super(resource, imgPos, size, speed, frames, dir);
		this.thisSpeed = 200;
		this.pos = pos;
	}
	
	handleInput(dt) {
		
		this.moving = false;
		
		if (input.isDown("DOWN") || input.isDown("s")) {
			this.pos[1] += this.thisSpeed * dt;
			this.setFramesDir(0);
			this.moving = true;
		}
		
		if (input.isDown("UP") || input.isDown("w")) {
			this.pos[1] -= this.thisSpeed * dt;
			this.setFramesDir(2);
			this.moving = true;
		}
		
		if (input.isDown("LEFT") || input.isDown("a")) {
			this.pos[0] -= this.thisSpeed * dt;
			this.setFramesDir(3);
			this.moving = true;
		}
		
		if (input.isDown("RIGHT") || input.isDown("d")) {
			this.pos[0] += this.thisSpeed * dt;
			this.setFramesDir(1);
			this.moving = true;
		}
	}
}