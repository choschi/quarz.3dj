/**
 * @author sosterwalder
 */

function Vertex(x, y, z) {
	if(!_isNumber(x) || !_isNumber(y) || !_isNumber(z)) {
		throw "x, y and z have to be numbers!"
	} else {
		this.x = x;
		this.y = y;
		this.z = z;
		this.h = 1;	
	}
}

function setX(x) {
	if (!_isNumber(x)) {
		throw "x has to be a number!";
	} else {
		this.x = x;
	}
}
Vertex.prototype.setX = setX;

function setY(y) {
	if (!_isNumber(y)) {
		throw "y has to be a number!";
	} else {
		this.y = y;
	}
}
Vertex.prototype.setY = setY;

function setZ(z) {
	if (!_isNumber(z)) {
		throw "z has to be a number!";
	} else {
		this.z = z;
	}
}
Vertex.prototype.setZ = setZ;

function setVector(x, y, z) {
	if(!_isNumber(x) || !_isNumber(y) || !_isNumber(z)) {
		throw "x, y and z have to be numbers!"
	} else {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}
Vertex.prototype.setVector = setVector;


function getX() {
	return this.x;
}
Vertex.prototype.getX = getX;

function getY() {
	return this.y;
}
Vertex.prototype.getY = getY;

function getZ() {
	return this.z;
}
Vertex.prototype.getZ = getZ;

function getH() {
	return this.h;
}
Vertex.prototype.getH = getH;

function getVector() {
	return new Array(this.x, this.y, this.z, this.h);
}
Vertex.prototype.getVector = getVector;

function _isNumber(i) {
	if (isNaN(Number(i))) {
		return false;
	} else {
		return true;
	}
	
	return false;
}