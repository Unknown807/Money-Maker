
class PlayerSprite extends Sprite {
	constructor(resource, pos, imgPos, size, speed, frames, dir) {
		super(resource, pos, imgPos, size, speed, frames, dir);
		this.inventory = new Map();
		this.movementSpeed = 200;
	}
}