/**
 * @author sosterwalder
 */

function Vector(x, y, z) {
	try {
		this.x = x;
		this.y = y;
		this.z = z; 
		this.h = 1;
	}
	catch (!_isInt(x)) {
		throw "x has to be a number!";
	}
	catch (!_isInt(y)) {
		throw "y has to be a number!";
	}
	catch (!_isInt(z)) {
		throw "z has to be a number!";
	}
}

function setX(x) {
	try {
		this.x = x;
	}
	catch (!_isInt(x)) {
		throw "x has to be a number!";
	}
		
}
Vector.prototype.setX = setX;

function setY(y) {
	try {
		this.y = y;
	}
	catch (!_isInt(y)) {
		throw "y has to be a number!";
	}
}
Vector.prototype.setY = setY;

function setZ(z) {
	try {
		this.z = z;
	}
	catch (!_isInt(z)) {
		throw "z has to be a number!";
	}
}
Vector.prototype.setZ = setZ;

function getX() {
	return this.x;
}
Vector.prototype.getX = getX;

function getY() {
	return this.y;
}
Vector.prototype.getY = getY;

function getZ() {
	return this.z;
}
Vector.prototype.getZ = getZ;

function getH() {
	return this.h;
}
Vector.prototype.getH = getH;

function _isInt(i) {
	var j = parseInt(i);
	if (isNaN(j)) return false;
	return i == j && i.toString() == j.toString();
}