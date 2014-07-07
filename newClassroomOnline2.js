//添加ico图标
var result;
var ico = $('<link rel="shortcut icon" href="http://pengyou12.github.io/loge2.png" type="image/x-icon">');
$('head').prepend(ico);
//修改排版
$('#semester_title').css("paddingLeft",10);//把2012-2014-夏季学期的位置调整，使得它与下面的字对齐
$('.left&.narrow-sidebar').css("width",140);//左边框调大
var leftSide = $('.left&.narrow-sidebar')[0].nextSibling.nextSibling;
$(leftSide).css("marginLeft",140);
$('.narrow-bottom&.narrow-bg-student').css("background-position","50%30%");//把背景图片的位置对整齐

//加入最新公告直接链接的功能
var messeage = $('.left&.narrow-sidebar');
unread = $('<script src="http://learn.cic.tsinghua.edu.cn:80/res/common/ui/charisma/js/jquery-1.7.2.min.js"></script> <div class="narrow-top narrow-bg-blue" style="background-color:white;color:black;"><p">最新讨论 </p></div>');
messeage.append(unread)

var a =$.ajax({
        url: "http://learn.cic.tsinghua.edu.cn/f/student/coursehome/2013-2014-3-44100343-0", //这里是静态页的地址
        type: "GET", //静态页用get方法，否则服务器会抛出405错误
        success: function(data){
            result = $(data).find('.h-list&.discuss-list .lh22');
		for( i = 0; i <result.length;i++)
		{
			var hr = $('<hr style="border:0;background-color:lightblue;height:1px;">');
			var tempNode = $('<li></li>');
			tempNode.append(result[i]);
			$(result[i]).css("height",40);
			tempNode.append(hr);
			messeage.append(tempNode);
		}
			
	//		result.css("color","black");
		//	messeage.append(result);
			//a = data;
        }
});

