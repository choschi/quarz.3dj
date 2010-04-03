/**
 * @author sosterwalder
 */

function Vertex(x, y, z) {
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
Vertex.prototype.setX = setX;

function setY(y) {
	try {
		this.y = y;
	}
	catch (!_isInt(y)) {
		throw "y has to be a number!";
	}
}
Vertex.prototype.setY = setY;

function setZ(z) {
	try {
		this.z = z;
	}
	catch (!_isInt(z)) {
		throw "z has to be a number!";
	}
}
Vertex.prototype.setZ = setZ;

function setVector(x, y, z) {
	try {
		this.x = x;
		this.y = y;
		this.z = z; 
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

function _isInt(i) {
	var j = parseInt(i);
	if (isNaN(j)) return false;
	return i == j && i.toString() == j.toString();
}