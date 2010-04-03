/**
 * @author sosterwalder
 */

function Vector(x, y, z, h) {
	this.x = x;
	this.y = y;
	this.z = z; 
}

function setX(x) {
	this.x = x;
}
Vector.prototype.setX = setX;

function setY(y) {
	this.y = y;
}
Vector.prototype.setY = setY;

function setZ(z) {
	this.z = z;
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