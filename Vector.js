function Vector (x,y,z){
	if(!_isNumber(x) || !_isNumber(y) || !_isNumber(z)) {
		throw "x, y and z have to be numbers!"
	} else {
		this._x = x;
		this._y = y;
		this._z = z;
		this._h = 1;	
	}
}

function add (vec){
	var x = this._x + vec.getX();
	var y = this._y + vec.getY();
	var z = this._z + vec.getZ();
	return new Vector(x,y,z);
}

function sub (vec){
	var x = this._x - vec.getX();
	var y = this._y - vec.getY();
	var z = this._z - vec.getZ();
	return new Vector(x,y,z);
}

Vector.prototype.sub = sub;
Vector.prototype.add = add;

function getX() {
	return this._x+0;
}
Vertex.prototype.getX = getX;

function getY() {
	return this._y+0;
}
Vertex.prototype.getY = getY;

function getZ() {
	return this._z+0;
}
Vertex.prototype.getZ = getZ;

function getH() {
	return this._h+0;
}

function _isNumber(i) {
	if (isNaN(Number(i))) {
		return false;
	} else {
		return true;
	}
	
	return false;
}