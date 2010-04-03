/**
 * @author sosterwalder
 */

function Triangle(vertP1, vertP2, vertP3, strHexColor) {
	if (!_isHex(strHexColor)) {
		throw "strHexColor has to be a hexadecimal value!";
	} else {
		this.point1 = vertP1;
		this.point2 = vertP2;
		this.point3 = vertP3;
		this.color = strHexColor;
	}
}

function setP1(vertP1) {
	this.point1 = vertP1;
}
Triangle.prototype.setP1 = setP1;

function setP2(vertP2) {
	this.point2 = vertP2;
}
Triangle.prototype.setP2 = setP2;

function setP3(vertP3) {
	this.point3 = vertP3;
}
Triangle.prototype.setP3 = setP3;

function setHexColor(strHexCol) {
	if (_isHex(strHexCol)) {
		this.color = strHexCol;
	} else {
		throw "strHexCol has to be a hexadecimal value!";
	}
}
Triangle.prototype.setHexColor = setHexColor;

function getP1() {
	return this.point1;
}
Triangle.prototype.getP1 = getP1;

function getP2() {
	return this.point2;
}
Triangle.prototype.getP2 = getP2;

function getP3() {
	return this.point3;
}
Triangle.prototype.getP3 = getP3;

function getHexColor() {
	return this.color;
}
Vertex.prototype.getHexColor = getHexColor;

function _isHex(strHex) {
	if (strHex.match("(#)([A-Fa-f0-9]{2}){3}")) {
		//([A-Fa-f0-9]{2}){8,9}
		return true;
	} else {
		return false;
	}
	
	return false;
}