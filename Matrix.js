function Matrix(init){
	if (init.length == 4){
		if (debug){
			console.innertHTML = console.innerHTML+"inits length is 4";
		}
		var goForGood = true;
		for (var col in init){
			if(debug){
				console.innerHTML = console.innerHTML +init[col].toString();
			}
			if (init[col].length != 4){
				goForGood = false;
			}
		}
		if (goForGood){
			this._matrix = init;
		}else{
			throw "a Matrix column has to have for 4 rows";
		}
	}else{
		throw "Matrix has to have 4 columns";
	}
}

function multiplyVertex(vtx){
	var vec = vtx.getVector();
	return vecMult(vec);
}

function vecMult(v){
	vec = new Array(v.getX(),v.getY(),v.getZ(),v.getH());
	var out = new Array(0,0,0,0);
	for (var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			out[j] += this._matrix[i][j] * vec[j];
		}
	}
	return new Vector(out[0],out[1],out[2],out[3]);
}

Matrix.prototype.vecMult = vecMult;

function mtrxMult(mtrx){
	var other = mtrx.getMatrix();
	var newMtrx = new Array(new Array(0,0,0,0),new Array(0,0,0,0), new Array(0,0,0,0), new Array(0,0,0,0));
	for (var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			for (var k=0;k<4;k++){
				newMtrx[j][i] +=other[k][j] *  this._matrix[k][i] ;
			}
		}
	}
	return new Matrix(newMtrx);
}


Matrix.prototype.mtrxMult = mtrxMult;
Matrix.prototype.multiplyVertex = multiplyVertex;

function toString(){
	var out = "";
	for (var col in this._matrix){
		for(var j=0;j<4;j++){
			out += " "+this._matrix[col][j];
		}
		out += "\n";
	}
	return out;
}

Matrix.prototype.toString = toString;

function getMatrix(){
	return this._matrix;
}

Matrix.prototype.getMatrix = getMatrix;