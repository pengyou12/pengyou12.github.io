//´ý²âº¯Êý1
function countNeighbors(columns,rows,grid,x,y){
	var count = 0
	for(var i = x-1;i <= x + 1;i++)
	{
		for(var j = y -1 ; j <= y + 1;j++ )
		{
			count += grid[(i+rows)%rows][(j+columns)%columns]
		}
	}
	count -= grid[x][y]
	return count
}
//´ý²âº¯Êý2
function nextRound(columns,rows,grid){
	var newGrid = new Array()
	for(i = 0; i < rows; i++)
	{
		newGrid[i] = new Array()
		for(j = 0; j < columns; j++)
		{
			 switch(countNeighbors(columns,rows,grid,i,j))
			 {
				case 2:
				newGrid[i][j] = grid[i][j]
				break
				case 3:
				newGrid[i][j] = 1
				break
				default:
				newGrid[i][j] = 0
			 }
		}
	}
	for(i = 0; i < rows;i++)
	{
		for(j = 0; j < columns;j++)
		{
			grid[i][j] = newGrid[i][j]
		}
	}
}

function test1()
{
	var columns = 1
	var rows = 1
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1;
	Canswer[0][0] = 8;
	Nanswer[0][0] = 0;
	if(countNeighbors(columns,rows,grid,0,0) == Canswer[0][0])
	{
		nextRound(columns,rows,grid)
		if(grid[0][0] == Nanswer[0][0])
		{
			alert("test1²âÊÔÍ¨¹ý£¡")
			return
		}
	}
	alert("test2²âÊÔÊ§°Ü£¡")
}

function test2()
{
	var columns = 1
	var rows = 1
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 0;
	Canswer[0][0] = 0;
	Nanswer[0][0] = 0;
	if(countNeighbors(columns,rows,grid,0,0) == Canswer[0][0])
	{
		nextRound(columns,rows,grid)
		if(grid[0][0] == Nanswer[0][0])
		{
			alert("test2²âÊÔÍ¨¹ý£¡")
			return
		}
	}
	alert("test2²âÊÔÊ§°Ü£¡")
}

function test3()//²âÊÔÓÐ1ÐÐ2ÁÐµÄÇé¿ö
{
	var columns = 2
	var rows = 1
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[0][1] = 0
	Canswer[0][0] = 2
	Canswer[0][1] = 6
	Nanswer[0][0] = 1
	Nanswer[0][1] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test3²âÊÔÊ§°Ü£¡")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j]!= Nanswer[i][j])
			{
				alert("test3²âÊÔÊ§°Ü£¡")
				return
			}
		}
	alert("test3²âÊÔÍ¨¹ý£¡")
}

function test4()//²âÊÔÓÐ2ÐÐ1ÁÐµÄÇé¿ö
{
	var columns = 1
	var rows = 2
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[1][0] = 1
	Canswer[0][0] = 8
	Canswer[1][0] = 8
	Nanswer[0][0] = 0
	Nanswer[1][0] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test4²âÊÔÊ§°Ü£¡")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test4²âÊÔÊ§°Ü£¡")
				return
			}
		}
	alert("test4²âÊÔÍ¨¹ý£¡")
}

function test5()//²âÊÔÓÐ2ÐÐ2ÁÐµÄÇé¿ö
{
	var columns = 2
	var rows = 2
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[1][0] = 0
	grid[0][1] = 1
	grid[1][1] = 0
	Canswer[0][0] = 2
	Canswer[1][0] = 6
	Canswer[0][1] = 2
	Canswer[1][1] = 6
	Nanswer[0][0] = 1
	Nanswer[1][0] = 0
	Nanswer[0][1] = 1
	Nanswer[1][1] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test5²âÊÔÊ§°Ü£¡")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test5²âÊÔÊ§°Ü£¡")
				return
			}
		}
	alert("test5²âÊÔÍ¨¹ý£¡")
}

function test6()//²âÊÔÓÐ1ÐÐ3ÁÐµÄÇé¿ö
{
	var columns = 3
	var rows = 1
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 0
	grid[0][1] = 1
	grid[0][2] = 0
	Canswer[0][0] = 3
	Canswer[0][1] = 2
	Canswer[0][2] = 3
	Nanswer[0][0] = 1
	Nanswer[0][1] = 1
	Nanswer[0][2] = 1
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test6²âÊÔÊ§°Ü£¡")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test6²âÊÔÊ§°Ü£¡")
				return
			}
		}
	alert("test6²âÊÔÍ¨¹ý£¡")
}

function test7()//²âÊÔÓÐ3ÐÐ1ÁÐµÄÇé¿ö
{
	var columns = 1
	var rows = 3
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[1][0] = 1
	grid[2][0] = 0
	Canswer[0][0] = 5
	Canswer[1][0] = 5
	Canswer[2][0] = 6
	Nanswer[0][0] = 0
	Nanswer[1][0] = 0
	Nanswer[2][0] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test7²âÊÔÊ§°Ü£¡")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test7²âÊÔÊ§°Ü£¡")
				return
			}
		}
	alert("test7²âÊÔÍ¨¹ý£¡")
}

function test8()//²âÊÔÓÐ3ÐÐ2ÁÐµÄÇé¿ö
{
	var columns = 2
	var rows = 3
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[1][0] = 1
	grid[2][0] = 0
	grid[0][1] = 0
	grid[1][1] = 1
	grid[2][1] = 0
	Canswer[0][0] = 3
	Canswer[1][0] = 3
	Canswer[2][0] = 4
	Canswer[0][1] = 5
	Canswer[1][1] = 4
	Canswer[2][1] = 5
	Nanswer[0][0] = 1
	Nanswer[1][0] = 1
	Nanswer[2][0] = 0
	Nanswer[0][1] = 0
	Nanswer[1][1] = 0
	Nanswer[2][1] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test8²âÊÔÊ§°Ü£¡")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test8²âÊÔÊ§°Ü£¡")
				return
			}
		}
	alert("test8²âÊÔÍ¨¹ý£¡")
}

function test9()//²âÊÔÓÐ2ÐÐ3ÁÐµÄÇé¿ö
{
	var columns = 3
	var rows = 2
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 0
	grid[0][1] = 1
	grid[0][2] = 0
	grid[1][0] = 1
	grid[1][1] = 1
	grid[1][2] = 1
	Canswer[0][0] = 7
	Canswer[0][1] = 6
	Canswer[0][2] = 7
	Canswer[1][0] = 4
	Canswer[1][1] = 4
	Canswer[1][2] = 4
	Nanswer[0][0] = 0
	Nanswer[0][1] = 0
	Nanswer[0][2] = 0
	Nanswer[1][0] = 0
	Nanswer[1][1] = 0
	Nanswer[1][2] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test9²âÊÔÊ§°Ü£¡")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test9²âÊÔÊ§°Ü£¡")
				return
			}
		}
	alert("test9²âÊÔÍ¨¹ý£¡")
}

function test10()//²âÊÔÒ»°ãÇé¿ö
{
	var columns = 3
	var rows = 3
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 0
	grid[0][1] = 1
	grid[0][2] = 0
	grid[1][0] = 0
	grid[1][1] = 1
	grid[1][2] = 0
	grid[2][0] = 1
	grid[2][1] = 1
	grid[2][2] = 0
	Canswer[0][0] = 4
	Canswer[0][1] = 3
	Canswer[0][2] = 4
	Canswer[1][0] = 4
	Canswer[1][1] = 3
	Canswer[1][2] = 4
	Canswer[2][0] = 3
	Canswer[2][1] = 3
	Canswer[2][2] = 4
	Nanswer[0][0] = 0
	Nanswer[0][1] = 1
	Nanswer[0][2] = 0
	Nanswer[1][0] = 0
	Nanswer[1][1] = 1
	Nanswer[1][2] = 0
	Nanswer[2][0] = 1
	Nanswer[2][1] = 1
	Nanswer[2][2] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test10²âÊÔÊ§°Ü£¡")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test10²âÊÔÊ§°Ü£¡")
				return
			}
		}
	alert("test10²âÊÔÍ¨¹ý£¡")
}
test10()