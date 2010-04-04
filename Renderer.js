function Renderer (camPos,angles){
	this._cameraPosition = camPos;
	//this._cameraAngles = camAngles;
	var rotationX = new Matrix (new Array(new Array(1,0,0,0),new Array(0,Math.cos(angles.getX()),Math.sin(angles.getX()),0),new Array(0,-Math.sin(angles.getX()),Math.cos(angles.getX()),0),new Array(0,0,0,1)));
	var rotationY = new Matrix (
		new Array(
			new Array(Math.cos(angles.getY()),0,-Math.sin(angles.getY()),0),
			new Array(0,1,0,0),
			new Array(Math.sin(angles.getY()),0,Math.cos(angles.getY()),0),
			new Array(0,0,0,1)
		)
	);
	var rotationZ = new Matrix (new Array(new Array(Math.cos(angles.getZ()),Math.sin(angles.getZ()),0,0),new Array(-Math.sin(angles.getZ()),Math.cos(angles.getZ()),0,0),new Array(0,0,1,0),new Array(0,0,0,1)));
	try{
		var step1= rotationY.mtrxMult(rotationZ);
		this._camera = rotationX.mtrxMult(step1);
		this._projection = new Matrix(new Array(new Array(1,0,0,0),new Array(0,1,0,0),new Array(0,0,1,0.3),new Array(0,0,0,0)));
	}catch(e){
		window.alert("fehler in projection "+e);
	}
}

function vertex2Plain (vtx){
	try{
		var sub = this._cameraPosition.sub(vtx.getVector());
	}catch(e){
		throw 'error in Vector.sub: '+e;
	}
	try{
		var newPoint = this._camera.vecMult(sub);
	}catch(e){
		throw "error in Matrix.vecMult";
	}
	try{
		var fs = this._projection.vecMult(vtx.getVector());
		vtx.setCoord(fs.getX()/fs.getH(),fs.getY()/fs.getZ());
	}catch(e){
		throw "error in Matrix.vecMult or Vertex.setCoord";
	}
}

Renderer.prototype.vertex2Plain = vertex2Plain;