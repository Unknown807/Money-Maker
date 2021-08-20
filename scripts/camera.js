
class Camera {
	constructor() {
		this.camX = 0;
		this.camY = 0;
		this.lastCamX = 0;
		this.lastCamY = 0;
	}
	
	render(ctx, canvasWidth, canvasHeight, player) {
		
		ctx.setTransform(1,0,0,1,0,0);
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		let mapImageWidth = map.width*32;
		let mapImageHeight = map.height*32;
		
		this.camX = Math.round(clamp(-player.pos[0] + canvasWidth/2, -mapImageWidth, mapImageWidth));
		this.camY = Math.round(clamp(-player.pos[1] + canvasHeight/2, -mapImageHeight, mapImageHeight));
		
		let camBorderX = (mapImageWidth+(canvasWidth/2)-player.pos[0] < canvasWidth || player.pos[0] < canvasWidth/2);
		let camBorderY = (mapImageHeight+(canvasHeight/2)-player.pos[1] < canvasHeight || player.pos[1] < canvasHeight/2);
		
		if (camBorderX && camBorderY) {
			ctx.translate(this.lastCamX, this.lastCamY);
			
		} else if (camBorderX) {
			ctx.translate(this.lastCamX, this.camY);
			this.lastCamY = this.camY;
			
		} else if (camBorderY) {
			ctx.translate(this.camX, this.lastCamY);
			this.lastCamX = this.camX;
			
		} else {
			ctx.translate( this.camX, this.camY );
			this.lastCamX = this.camX;
			this.lastCamY = this.camY;
		}
	
	}
}