
class PlayerSprite extends Sprite {
	constructor(resource, pos, imgPos, size, speed, frames, dir) {
		super(resource, imgPos, size, speed, frames, dir);
		this.movementSpeed = 200;
		this.pos = pos;
	}
}