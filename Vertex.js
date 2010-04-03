/**
 * @author sosterwalder
 */

function Vertex(x, y, z, strHexColor) {
	if (!_isNumber(x) || !_isNumber(y) || !_isNumber(z)) {
		throw "x, y and z have to be numbers!"
	} else if (!_isHex(strHexColor)) {
		throw "strHexCol has to be a hexadecimal value!";
	} else {
		this.x = x;
		this.y = y;
		this.z = z;
		this.color = strHexColor;	
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

function setHexColor(strHexCol) {
	if (_isHex(strHexCol)) {
		this.color = strHexCol;
	} else {
		throw "strHexCol has to be a hexadecimal value!";
	}
}
Vertex.prototype.setHexColor = setHexColor;

function setVector(vector) {
	this.x = vector.x;
	this.y = vector.y;
	this.z = vector.z;
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

function getHexColor() {
	return this.color;
}
Vertex.prototype.getHexColor = getHexColor;

function getVector() {
	return new Vector(this.x, this.y, this.z);
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

function _isHex(strHex) {
	if (strHex.match("(#)([A-Fa-f0-9]{2}){3}")) {
		//([A-Fa-f0-9]{2}){8,9}
		return true;
	} else {
		return false;
	}
	
	return false;
}