function GateKeeper (){
	this._vertexId = 0;
}

function getVertexId(){
	out = this._vertexId+1;
	this._vertexId++;
	return out;
}
GateKeeper.prototype.getVertexId = getVertexId;