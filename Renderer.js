function Renderer (camPos,angles){
	this._cameraPosition = camPos;
	//this._cameraAngles = camAngles;
	var rotationX = new Matrix (new Array(new Array(1,0,0,0),new Array(0,Math.cos(angles.getX()),Math.sin(angles.getX()),0),new Array(0,-Math.sin(angles.getX()),Math.cos(angles.getX()),0),new Array(0,0,0,1)));
	///window.alert (rotationX);
}

function vertex2Plain (vtx){

}

Renderer.prototype.vertex2Plain = vertex2Plain;