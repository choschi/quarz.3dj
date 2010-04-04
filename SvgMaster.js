function SvgMaster (domID){
	this._container = document.getElementById(domID);
	this._keeper = new GateKeeper();
	this._ns = "http://www.w3.org/2000/svg";
}

function updateVertex (vtx){
	var id = vtx.getId(this._keeper);
	var tgt = document.getElementById(id);
	if (tgt != null){
	
	}else{
		var vertex = document.createElementNS(this._ns,'circle');
		vertex.setAttributeNS(null,'id',id);
		vertex.setAttributeNS(null,'fill',vtx.getHexColor());
		vertex.setAttributeNS(null,'r',2);
		vertex.setAttributeNS(null,'cx',(vtx.getPx()*20)+250);
		vertex.setAttributeNS(null,'cy',(vtx.getPy()*20)+250);
		this._container.appendChild(vertex);
	}
}

SvgMaster.prototype.updateVertex = updateVertex;