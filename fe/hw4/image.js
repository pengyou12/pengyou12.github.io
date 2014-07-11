currentImage = 1;
if(localStorage.currentImage)
{

	currentImage = parseInt(localStorage.currentImage);
	if(currentImage > 10 || currentImage <0)
	{
		currentImage = 1;
		localStorage.currentImage = currentImage;
	}
}
else
{
	currentImage = 1;//下标从1开始
	localStorage.currentImage = currentImage;
}
pageDiv = 5;
totalComments = 27;
pageCount = Math.floor(totalComments / pageDiv);
if(totalComments%pageDiv)
pageCount++;
if(!localStorage.currentPage)
{
	currentPage = 1;
	localStorage.currentPage=1;
}
else
{
	currentPage = parseInt(localStorage.currentPage);
	if(currentPage > 6 || currentPage <=0)
	{
		currentPage = 1;
		localStorage.currentPage = 1;
	}
}
function changeImageOnFocus(changeToImage)
{
	var tempLi = $('li');
	if(changeToImage == 0)
		return;
	else if(changeToImage == 10)
		return;
	//$(tempLi[currentImage-1]).fadeOut();
	//document.tempLi[currentImage-1].style.left = 1000;
		//$(tempLi[currentImage-1]).css("opacity","0");
	//tempLi[currentImage-1].-webkit-translate(100px,100px);

	//temp1 = currentImage - 1;
	//temp2 = changeToImage-1;
	//tempLi[temp1].style.position = 'absolute';
	//tempLi[temp1].style.left = '-1000px';
	//tempLi[temp1].style.position = 'relative';
	//tempLi[temp1].style.visibility = 'hidden';
	//tempLi[temp1].opacity = 1;	
	//setTimeout(function(){
	///	tempLi[temp1].style.display = 'none';
//		tempLi[temp2].style.display= "block";
//	},2000);
	//tempLi[temp1].style = "-webkit-transform: translateX(-400px);";
	tempLi[currentImage-1].style.display = 'none';
	tempLi[changeToImage-1].style.display= "block";
//	tempLi[changeToImage-1].css("opacity","1");
	//$(tempLi[changeToImage-1]).fadeIn();
	currentImage = changeToImage;
	localStorage.currentImage = currentImage;
}
coverState = false;
function cover(){
	if(!coverState)
	{
		var cover = document.getElementById("cover");
    	cover.style.display = "block";
    	coverState = true;
    }
    //setTimeout("uncover1()",500);
}

function uncover1()
{
	var cover = document.getElementById("cover");
	cover.style.display = "none";
}
function covertrue()
{
	for(var j =0; j<=20;j++)
	{
		coverState = true;
	}
}
function uncover()
{
	coverState = false;
	setTimeout("if(!coverState)uncover1()",750);
}
function returnICO(num1)
{
	var preICO = $('.imgbutton');
	preICO[num1-1].src = "http://i2.sinaimg.cn/dy/photo/2013/images/0809/photo_zxa_0809_dot.gif";
}

function changeICO(num)
{
	var preICO = $('.imgbutton');
	preICO[num-1].src = "http://i3.sinaimg.cn/dy/photo/2013/images/0809/photo_zxa_0809_dot_f.gif";
}
function timeChange(){
	if(currentImage == preImage)
	{
		changeImageOnFocus(preImage+1);
		preImage = currentImage;
	}
	else preImage = currentImage;
}

function PageTo(aimPage)
{
	if(aimPage == 0 || aimPage > pageCount)
		return;
	if(aimPage == -1)//跳转到末页
		aimPage = pageCount;
	currentPage = aimPage;
	localStorage.currentPage = currentPage;
	document.getElementById("currentPage").innerHTML = currentPage;
	$(".imgclass").remove();
	$(".userID").remove();
	for(var i = (currentPage-1)*pageDiv+1; i <= pageDiv*currentPage && i <= totalComments;i++)
	{
	 	eval('d = image.comment'+i);
	  	eval('e = image.ID'+i);
	 	eval('userimg = image.userimg'+i);
	 	myCommemt.append($('<div class="imgclass" style="margin-left:100px"><img src="'+userimg+'" style="float:left"></div> <div class="userID"><div class="usercomment"><p style="font-size:12px;color:#06a7e1">'+e+'</p><p>'+d+'</p></div><hr class="imgclass" align=center width = 1140px /></div>'));
	 }
	 $(".userID").css("font-family",'"Microsoft YaHei",SimHei,arial');
}
function myjs(){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		eval('image = '+ xmlhttp.responseText);
		var myDiv1 = $('#myDiv');
		for(var i = 1; i <= 9;i++)
		{
			eval('b = image.image'+i);
			eval('c = image.text'+i);
			if(i == currentImage)
			myDiv1.append($('<li class= "myli" onclick="changeImageOnFocus('+(i+1)+');" style="display:block"><img onMouseOver="cover()" onMouseMove="covertrue()"  onMouseOut="uncover()"class="myimg" src="'+b+'" ><p class="text">'+c+'</p></li>'));
			else if(i != 9)myDiv1.append($('<li class= "myli" onclick="changeImageOnFocus('+(i+1)+');" style="display:none"><img onmouseover="cover()" onmouseout="uncover()" onMouseMove="covertrue()" class="myimg" src="'+b+'" "><p class="text">'+c+'</p></li>'));
			else myDiv1.append($('<li class="myli" style="display:none"><img  onmouseover="cover()" onmouseout="uncover()" onMouseMove="covertrue()" class="myimg" src="'+b+'"><p class="text">'+c+'</p></li>'));
		}
		 $('img').css('margin-left','15%');
		 $('img').css('margin-right','15%');
		 $('.imgbutton').css('margin-left','0px');
		 $('.imgbutton').css('margin-right','0px');
		 $('.imgbutton').css('margin-right','5px');

		 $('.imgbutton').css('border-width','0px');
		 $('.imgbutton').css('background-position','center');
		 $('#imgbutton1').css('margin-left','45%');
		 $('.imgbutton').css('float','left');
		 $('.text').css('margin-left','15%');
		 $('.text').css('margin-right','15%');
		 myDiv1.append($('<img id ="moveRight" class="moveArrow" src="http://i3.sinaimg.cn/dy/photo/2013/images/0626/photo_zxa_0616_cover_r.png" onclick="changeImageOnFocus(currentImage+1)" style="  position: absolute;left: 1200px;top:400px;">'));
		 myDiv1.append($('<img id ="moveLeft" class="moveArrow" src=" http://i1.sinaimg.cn/dy/photo/2013/images/0626/photo_zxa_0616_cover_l.png" onclick="changeImageOnFocus(currentImage-1)" style="  position: absolute;left: 100px;top: 400px;">'));
		 myCommemt = $('#comments');
		 for(var i = 1; i <= pageDiv;i++)
		 {
		 	eval('d = image.comment'+i);
		 	eval('e = image.ID'+i);
		 	eval('userimg = image.userimg'+i);
		 	myCommemt.append($('<div class="imgclass" style="margin-left:100px"><img src="'+userimg+'" style="float:left"><div class="userID"><div class="usercomment"><p style="font-size:12px;color:#06a7e1">'+e+'</p><p>'+d+'</p></div><hr class="imgclass" align=center width = 1140px /></div>'));
		 }

	}		 
	else if(xmlhttp.readyState == 4){alert('failed to get the data');}
  }
	xmlhttp.open("GET","http://pengyou12.github.io/fe/hw4/imageList2.json",true);
	document.getElementById("totalcommentsID").innerHTML = totalComments;
	document.getElementById("currentPage").innerHTML = currentPage;
	//xmlhttp.open("GET","imageList2.js",true);
	xmlhttp.send();
	preImage = currentImage;
	t2 = window.setInterval("timeChange();",10000);//定时器跳转

}