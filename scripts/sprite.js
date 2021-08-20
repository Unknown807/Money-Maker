
// down = 0, right = 1, up = 2, left = 3
// ^ for non player can be anything

class Sprite {
	constructor(resource, pos, imgPos, size, speed, frames, dir) {
		this.resource = resource;
		this.imgPos = imgPos;
		this.pos = pos;
		this.size = size;
		this.speed = speed || 0;
		this.frames = frames || [[0,],];
		this.dir = dir || "horizontal";
		this.moving = false;
		this.hide = false;
		
		this._index = 0;
		this._framesDir = 0;
	}
	
	update(dt) {
		this._index += this.speed*dt;
	}
	
	setFramesDir(framesDir) {
		this._framesDir = framesDir;
	}
	
	render(ctx) {
		if (this.hide) {
			return
		}
		
		let frame;
		
		if (this.speed > 0 && this.moving) {
			let max = this.frames[this._framesDir].length;
			let idx = Math.floor(this._index);
			frame = this.frames[this._framesDir][idx % max];
		} else {
			frame = this.frames[this._framesDir][0];
		}
		
		let x = this.imgPos[0];
		let y = this.imgPos[1];
		
		if (this.dir == "vertical") {
			y += frame * this.size[1];
		} else {
			x += frame * this.size[0];
		}
		
		ctx.drawImage(resources.get(this.resource),
			x, y,
			this.size[0], this.size[1],
			0, 0,
			this.size[0], this.size[1]);
	}
	
	
}