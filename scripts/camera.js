
class Camera {
	static camX = 0;
	static camY = 0;
	static lastCamX = 0;
	static lastCamY = 0;
	
	static render(ctx, canvasWidth, canvasHeight, player) {
		
		ctx.setTransform(1,0,0,1,0,0);
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		let mapImageWidth = Map.width*32;
		let mapImageHeight = Map.height*32;
		
		Camera.camX = clamp(-player.pos[0] + canvasWidth/2, -mapImageWidth, mapImageWidth);
		Camera.camY = clamp(-player.pos[1] + canvasHeight/2, -mapImageHeight, mapImageHeight);
		
		let camBorderX = (mapImageWidth+(canvasWidth/2)-player.pos[0] < canvasWidth || player.pos[0] < canvasWidth/2);
		let camBorderY = (mapImageHeight+(canvasHeight/2)-player.pos[1] < canvasHeight || player.pos[1] < canvasHeight/2);
		
		if (camBorderX && camBorderY) {
			ctx.translate(Camera.lastCamX, Camera.lastCamY);
			
		} else if (camBorderX) {
			ctx.translate(Camera.lastCamX, Camera.camY);
			Camera.lastCamY = Camera.camY;
			
		} else if (camBorderY) {
			ctx.translate(Camera.camX, Camera.lastCamY);
			Camera.lastCamX = Camera.camX;
			
		} else {
			ctx.translate( Camera.camX, Camera.camY );
			Camera.lastCamX = Camera.camX;
			Camera.lastCamY = Camera.camY;
		}
	
	}
}