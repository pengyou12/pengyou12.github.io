var maxColumns = 80
var minColumns = 1
var maxRows = 38
var minRows = 1
var columns = 20
var rows = 25
var runState = 0//0表示没有运行，1表示运行
var keyState = 0//0表示没有键按下，1表示有键按下
var timeInterval = 100
var maxInterval = 1000
var minInterval = 5
var timeStepLength = 23
var timer1
var grid = new Array()
var i = 0
var j = 0
var r = 8
for(i = 0;i < maxRows; i++)
{
	grid[i] = new Array()
}

function generateCellRandom(columns,rows){//随机初始化
	for(i = 0; i < rows; i++)
	{
		for(j = 0; j < columns; j++)
		{
			grid[i][j] = Math.floor(Math.random()+0.5)
		}
	}
};
function generateCell(columns,rows){//把所有的细胞初始化为死
	for(i = 0; i < rows; i++)
	{
		for(j = 0; j < columns; j++)
		{
			grid[i][j] = 0
		}
	}
};

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

function drawGrid(columns,rows,grid){
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        //if (w < 2 * r) r = w / 2;
        //if (h < 2 * r) r = h / 2;
        this.beginPath();
        this.moveTo(x+r, y);
        this.arcTo(x+w, y, x+w, y+h, r);
        this.arcTo(x+w, y+h, x, y+h, r);
        this.arcTo(x, y+h, x, y, r);
        this.arcTo(x, y, x+w, y, r);
        // this.arcTo(x+r, y);
        this.closePath();
        return this;
    }
	var canvas = document.getElementById("myCanvas")
	canvas.width = 2 * r * columns
	canvas.height = 2 * r * rows
	var ctx = canvas.getContext("2d")
	for(var i = 0; i < rows; i++)
	{
		for(var j=0; j < columns; j++)
		{
			ctx.fillStyle = "#F32323"
			if(grid[i][j] == 0)
				ctx.fillStyle = "#BEAA7B"
			ctx.beginPath()
			ctx.roundRect(2*j * r + 1.5,2 * i * r + 1, 2 * r - 3,2 * r - 3,2).stroke();
			//ctx.fillRect(2*j * r + 1.5,2 * i * r + 1 , 2 * r - 3,2 * r - 3)
			//ctx.arc((2 * j + 1) * r,(2 * i + 1) * r, r - 1, 0, 2*Math.PI)
			ctx.closePath()
			ctx.fill()
		}
	}
}

function keyDown(e){
	var keychar
	if(window.event) // IE
	{
		keychar = e.keyCode
	}
	else if(e.which) // Netscape/Firefox/Opera
	{
		keychar = e.which
	}
	switch(keychar)
	{
	case 13://ENTER
		if(runState == 0)
		{
			generateCellRandom(columns,rows)
		}
		break;
	case 32://空格
		if(runState != 1)
		{
			runState = 1
			timer1 = setInterval("drawGrid(columns,rows,grid);nextRound(columns,rows,grid)", timeInterval)
		}
		else 
		{
			runState = 2
			clearInterval(timer1)
		}
		break;
	case 37://←
		if(runState === 0 && columns > minColumns)
		{
			columns --;
			for(var i = 0;i < rows;i++)
				grid[i][columns] = 0
		}
		break;
	case 38://↑
		if(runState === 0 && rows > minRows)
		{
			rows --;
			for(var i = 0;i < columns;i++)
				grid[rows][i] = 0
		}
		else if(runState == 1 && timeInterval > minInterval)
		{
			timeInterval -= timeStepLength
			clearInterval(timer1)
			timer1 = setInterval("drawGrid(columns,rows,grid);nextRound(columns,rows,grid)", timeInterval)
		}
		break;
	case 39://→
		if(runState === 0 && columns < maxColumns)
		{
			columns ++;
		}
		break;
	case 40://↓
		if(runState === 0 && rows < maxRows)
		{
			rows ++;
		}
		else if(runState == 1 && timeInterval < maxInterval)
		{
			timeInterval += timeStepLength
			clearInterval(timer1)
			timer1 = setInterval("drawGrid(columns,rows,grid);nextRound(columns,rows,grid)", timeInterval)
		}
		break;
	}
	if(runState == 0)
		drawGrid(columns,rows,grid)
}
function beClicked(event)
{
	var top
	var left
	if (document.body && document.body.scrollTop && document.body.scrollLeft)
	{
		top=document.body.scrollTop;
		left=document.body.scrollleft;    
	}
	if (document.documentElement && document.documentElement.scrollTop && document.documentElement.scrollLeft)
	{
		top=document.documentElement.scrollTop;
		left=document.documentElement.scrollLeft;
	}
//	grid[Math.floor((event.y + top)/2/r )-1][Math.floor((event.x+left)/2/r)-1] = 1 - grid[Math.floor((event.y + top)/2/r )-1][Math.floor((event.x+left)/2/r)-1]
	grid[Math.floor((event.y-8)/(2*r) )][Math.floor((event.x-8)/(2*r))] = 1 - grid[Math.floor((event.y-8)/(2*r) )][Math.floor((event.x-8)/(2*r))]
	drawGrid(columns,rows,grid)
}
generateCell(maxColumns,maxRows)
generateCellRandom(columns,rows)
drawGrid(columns,rows,grid)

function autorun()
{
	generateCellRandom(columns,rows)
	setInterval("drawGrid(columns,rows,grid);nextRound(columns,rows,grid)", 10)
}



