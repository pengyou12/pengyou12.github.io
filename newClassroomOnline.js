//添加ico图标
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
unread = $('<script src="http://learn.cic.tsinghua.edu.cn:80/res/common/ui/charisma/js/jquery-1.7.2.min.js"></script> <div class="narrow-top narrow-bg-blue" style="background-color:white;color:black;"><p id="sidebar_semesterName1">最新公告</p></div><script src="http://learn.cic.tsinghua.edu.cn:80/res/common/ui/charisma/js/jquery-1.7.2.min.js"></script><div class="narrow-top narrow-bg-blue" style="background-color:white;color:black;"><p href="http://www.baidu.com">ajax拿到的数据不会用>< </a></div><div class="narrow-top narrow-bg-blue" style="background-color:white;color:black;"><a href="http://www.baidu.com">只能当做demo了>< </p></div><form name="courseNoticeForm" id="courseNoticeForm" class="courseNoticeForm" action="http://learn.cic.tsinghua.edu.cn/f/student/coursehome/2013-2014-3-44100343-0/b/myCourse/notice/list/2013-2014-3-44100343-0" method="post"><ul class="grid hw-notice-list"><li class="template hidden"><span class="regDate"></span><a class="title" href="javascript:;"></a> <a class="ml5 red newFile fb arial status" style="text-decoration: none; color: red"></a><div class="clearfix"></div></li><li class=""><span class="regDate">2014-07-06</span><a class="title" href="javascript:;" style="color: red;">忍不住想对大家说几句</a> <a class="ml5 red newFile fb arial status" style="text-decoration: none; color: red"></a><div class="clearfix"></div></li><li class=""><span class="regDate">2014-07-05</span><a class="title" href="javascript:;">第一次作业批改情况</a> <a class="ml5 red newFile fb arial status" style="text-decoration: none; color: red"></a><div class="clearfix"></div></li><li class=""><span class="regDate">2014-06-30</span><a class="title" href="javascript:;">更改上课教室通知</a> <a class="ml5 red newFile fb arial status" style="text-decoration: none; color: red"></a><div class="clearfix"></div></li></ul></form><div style="left: 0px; top: 0px; position: fixed; visibility: hidden;" class=""><div class="d-outer" role="dialog" tabindex="-1" aria-labelledby="d-title-artDialog14047413424940" aria-describedby="d-content-artDialog14047413424940"><table class="d-border"><tbody><tr><td class="d-nw"></td><td class="d-n"></td><td class="d-ne"></td></tr><tr><td class="d-w"></td><td class="d-c"><div class="d-inner"><table class="d-dialog"><tbody><tr><td class="d-header"><div class="d-titleBar"><div id="d-title-artDialog14047413424940" class="d-title" style="display: block;"></div><a class="d-close" href="javascript:;" title="取消" style="display: block;">×</a></div></td></tr><tr><td class="d-main" style="width: auto; height: auto;"><div id="d-content-artDialog14047413424940" class="d-content" style="padding: 20px 25px;"></div></td></tr><tr><td class="d-footer"><div class="d-buttons"></div></td></tr></tbody></table></div></td><td class="d-e"></td></tr><tr><td class="d-sw"></td><td class="d-s"></td><td class="d-se"></td></tr></tbody></table></div></div>');
messeage.append(unread)

var a =$.ajax({
        url: "http://learn.cic.tsinghua.edu.cn/f/student/coursehome/2013-2014-3-44100343-0", //这里是静态页的地址
        type: "GET", //静态页用get方法，否则服务器会抛出405错误
		dataType:"string",
        success: function(data){
            result = $(data).find('#courseNoticeForm');

        }
});
