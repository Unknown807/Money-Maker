
class PlayerSprite extends Sprite {
	constructor(resource, pos, imgPos, size, speed, frames, dir) {
		super(resource, pos, imgPos, size, speed, frames, dir);
		this.inventory = new Map();
		this.movementSpeed = 150;
		this.lastFootStep = Date.now();
		this.footStepSoundID = "footstep_grass";
	}
	
	playFootStep() {
		if (Date.now() - this.lastFootStep > 500) {
			sounds.playSound(this.footStepSoundID);
			this.lastFootStep = Date.now();
		}
	}
}