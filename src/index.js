module.exports = function solveSudoku(matrix){
	
	seacrh(0,0);
 
	function seacrh(i, j) 
	{
		j++; 
		if (j > matrix.length-1)
		{
			j = 0;
			i++;

			if (i > matrix.length-1)
			{
				return true;
			}
		}

		if (matrix[i][j] != 0) 
		{ 
			if (!(lineSeacrh(i, j) && columnSeacrh(i,j) && squareSeacrh(i, j))) 
			{
				return false;
			}
			return seacrh(i, j);
		} 
		else 
		{
			for (var num = 1; num <=9; num++)
			{
				matrix[i][j] = num;

				if (lineSeacrh(i, j) &&  columnSeacrh(i,j) &&  squareSeacrh(i, j))
				{
					if (seacrh(i, j)) return true;
				}
			}
		matrix[i][j] = 0;
		return false;
		}
	}
  	  
	function lineSeacrh(i,j) 
	{
		for (var b=0; b<9; b++) 
		{
			if (b != j && matrix[i][b] == matrix[i][j])
			{
				return false;
			}
		}
		return true;
	}
	  
	function columnSeacrh(i,j)
	{
		for (var a=0; a<9; a++) 
		{
			if (a != i && matrix[a][j] == matrix[i][j]) 
			{
				return false;
			}
		}
		return true;
	}
	  
	function squareSeacrh(i, j) 
	{
		a = i/3>>0;
		b = j/3>>0;
		       
		for (var lines = a*3; lines < a*3+3; lines++) 
		{
			for (var columns = b*3; columns < b*3+3; columns++) 
			{
				if (lines != i && columns != j && matrix[lines][columns] == matrix[i][j])
				{
					return false;
				}
			}
		}
		return true;
	}
	return matrix;
 
}
