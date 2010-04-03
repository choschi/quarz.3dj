function Matrix(init){
	if (init.length == 4){
		var goForGood = true;
		for (var col in init){
			if (init[col].lenght != 4){
				
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