//变量初始化
var columns = 100
var rows = 90
var grid = new Array()
var i = 0
var j = 0
for(;i < rows; i++)
{
	grid[i] = new Array()
}
//待测函数
function generateCell(columns,rows){
	for(i = 0; i < rows; i++)
	{
		for(j = 0; j < columns; j++)
		{
			grid[i][j] = Math.floor(Math.random()+0.5)
		}
	}
}

//测试函数，测试generateCell函数是否会赋给某个grid[i][j]不为0或1的值
function test1(times){
	var i = 0, j = 0;
	for(var t = 0; t<times; t++)
	{
		generateCell(columns,rows)
		for(; i<rows; i++)
		{
			for(; j<columns; j++)
			{
				if(Math.abs(grid[i][j] - 0.5) * 2 != 1)
				{
					alert("测试失败！")
					return
				}
			}
		}
	}
	alert("测试成功！")
}

//待测函数
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

//测试函数，测试countNeighbors函数是否会出现范围超过0~8的情况
function test2(times){
	var i = 0, j = 0;
	for(var t=0; t<times; t++)
	{
		generateCell(columns,rows)
		for(; i<rows; i++)
		{
			for(; j<columns; j++)
			{
				var m = countNeighbors(columns,rows,grid,i,j)
				if(m < 0 || m > 8)
				{
					alert("测试失败!")
					return
				}
			}
		}
	}
	alert("测试成功！")
}

//测试函数，测试countNeighbors函数在grid中的值全为0和全为1的情况下是否正确
function test3()
{
	var i=0, j=0
	for(i=0; i<rows; i++)
		for(j=0; j<columns; j++)
			grid[i][j] = 1;
	for(i=0; i<rows; i++)
		for(j=0; j<columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != 8)
			{
				alert("计算错误！")
				return
			}
		}
	for(i=0; i<rows; i++)
		for(j=0; j<columns; j++)
			grid[i][j] = 0;
	for(i=0; i<rows; i++)
		for(j=0; j<columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != 0)
			{
				alert("计算错误！")
				return
			}
		}
	alert("测试成功")
}

//测试函数，同过构造一个辅助函数对比判断countNeighbors是否正确
//辅助函数
function newCountNeighbors(columns,rows,grid,x,y){
	var count = 0
	if(x == 0)
	{
		if(y == 0)
		{
			count += grid[rows-1][columns-1]
			count += grid[rows-1][0]
			count += grid[rows-1][1]
			count += grid[0][columns-1]
			count += grid[1][columns-1]
			count += grid[0][1];
			count += grid[1][0];
			count += grid[1][1];
		}
		else if(y == columns-1)
		{
			count += grid[rows-1][columns-2]
			count += grid[rows-1][columns-1]
			count += grid[rows-1][0]
			count += grid[0][columns-2]
			count += grid[0][0]
			count += grid[1][columns-2];
			count += grid[1][columns-1];
			count += grid[1][0];
		}
		else
		{
			count += grid[rows-1][y-1]
			count += grid[rows-1][y]
			count += grid[rows-1][y+1]
			count += grid[0][y-1]
			count += grid[0][y+1]
			count += grid[1][y-1];
			count += grid[1][y];
			count += grid[1][y+1];
		}
	}
	else if(x == rows-1)
	{
		if(y == 0)
		{
			count += grid[rows-2][columns-1]
			count += grid[rows-2][0]
			count += grid[rows-2][1]
			count += grid[rows-1][columns-1]
			count += grid[rows-1][2]
			count += grid[0][columns-1];
			count += grid[0][0];
			count += grid[0][1];
		}
		else if(y == columns-1)
		{
			count += grid[rows-2][columns-2]
			count += grid[rows-2][columns-1]
			count += grid[rows-2][0]
			count += grid[rows-1][columns-2]
			count += grid[rows-1][0]
			count += grid[0][columns-2];
			count += grid[0][columns-1];
			count += grid[0][0];
		}
		else
		{
			count += grid[rows-2][y-1]
			count += grid[rows-2][y]
			count += grid[rows-2][y+1]
			count += grid[rows-1][y-1]
			count += grid[rows-1][y+1]
			count += grid[0][y-1];
			count += grid[0][y];
			count += grid[0][y+1];
		}
	}
	else
	{
		count += grid[x-1][y-1]
		count += grid[x-1][y]
		count += grid[x-1][y+1]
		count += grid[x][y-1]
		count += grid[x][y+1]
		count += grid[x+1][y-1];
		count += grid[x+1][y];
		count += grid[x+1][y+1];
	}
	return count
}
//测试函数
function test4(times){
	var i = 0, j = 0;
	for(var t=0; t<times; t++)
	{
		generateCell(columns,rows)
		for(; i<rows; i++)
		{
			for(; j<columns; j++)
			{
				if(countNeighbors(columns,rows,grid,i,j) != newCountNeighbors(columns,rows,grid,i,j))
				{
					alert("测试失败!")
					return
				}
			}
		}
	}
	alert("测试成功！")
}

//待测函数
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

//测试函数,通过反向验证测试nextRound函数是否正确
function test5(times){
	generateCell(columns,rows)
	var i=0, j=0
	var formerGrid = new Array()
	for(var i = 0; i < rows; i++)
		formerGrid[i] = new Array()
	for(var t=0; t<times; t++)
	{
		for(var i=0; i < rows; i++)
			for(var j=0; j < columns; j++)
				formerGrid[i][j] = grid[i][j]
		nextRound(columns,rows,grid)
		for(; i<rows; i++)
		{
			for(; j<columns; j++)
			{
				if(grid[i][j]==1)
				{
					if(!((countNeighbors(columns,rows,formerGrid,i,j) == 3) || (countNeighbors(columns,rows,formerGrid,i,j) == 2 && formerGrid[i][j] == 1)))
					{
						alert("计算错误！")
						return 
					}
				}
				else
				{
					if((countNeighbors(columns,rows,formerGrid,i,j) == 3) || (countNeighbors(columns,rows,formerGrid,i,j) == 2 && formerGrid[i][j] == 1))
					{
						alert("计算错误！")
						return
					}	
				}
			}
		}
	}
	alert("测试成功！")
}
