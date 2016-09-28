define(function() {

   var edit_module = {
        navTemp:function(){
            var nav_temp = '<div class="aside-addNav">'
                +'<div class="temp-nav">'
        +'<div class="temp-nav-box clearfix">'
            +'<ul>'
                +'<li class="nav-li nav-images">'
                    +'<i class="icon iconfont">&#xe602;</i>'
                    +'<span class="nav-font">图片</span>'
                +'</li>'
                +'<li class="nav-li nav-good">'
                    +'<i class="icon iconfont">&#xe605;</i>'
                    +'<span class="nav-font">商品</span>'
                +'</li>'
                +'<li class="nav-li nav-good-list">'
                    +'<i class="icon iconfont">&#xe603;</i>'
                    +'<span class="nav-font">商品列表</span>'
                +'</li>'
                // +'<li class="nav-li nav-rich-text">'
                //     +'<i class="icon iconfont">&#xe600;</i>'
                //     +'<span class="nav-font">富文本</span>'
                // +'</li>'
                +'<li class="nav-li nav-phone"> '
                +'<i class="icon iconfont">&#xe624;</i> '
                +'<span class="nav-font">电话</span> '
                +'</li> '
            +'</ul>'
            +'<ul class="last_nav">'
                +'<li class="nav-li nav-notice">'
                    +'<i class="icon iconfont">&#xe604;</i>'
                    +'<span class="nav-font">公告</span>'
                +'</li>'
                +'<li class="nav-li nav-title">'
                    +'<i class="icon iconfont">&#xe606;</i>'
                    +'<span class="nav-font">标题</span>'
                +'</li>'
                // +'<li class="nav-li nav-text">'
                //     +'<i class="icon iconfont">&#xe601;</i>'
                //     +'<span class="nav-font">文本</span>'
                // +'</li>'
                +'<li class="nav-li nav-underline">'
                    +'<i class="icon iconfont">&#xe607;</i>'
                    +'<span class="nav-font">分割线</span>'
                +'</li>'
                +'<li class="nav-li nav-textNav">' 
                    +'<i class="icon iconfont">&#xe617;</i>' 
                    +'<span class="nav-font">文本导航</span>' 
                +'</li>'
                +'<li class="nav-li nav-imgNav" style="border-bottom:0">' 
                    +'<i class="icon iconfont">&#xe618;</i>' 
                    +'<span class="nav-font">图片导航</span>' 
                +'</li>' 
                +'<li class="nav-li nav-showcase" style="border-bottom:0">' 
                +'<i class="icon iconfont">&#xe626;</i> '
                +'<span class="nav-font">橱窗</span>' 
                +'</li>' 
                +'<li class="nav-li nav-search" style="border-bottom:0;border-right:1px solid #ddd">' 
                    +'<i class="icon iconfont">&#xe608;</i>' 
                    +'<span class="nav-font">商品搜索</span>' 
                +'</li>' 
            +'</ul>'
        +'</div>'
        +'</div>';
        return nav_temp;
        }
    }
 // 鼠标拖动编辑模块位置跟着变化
  function mouseMove(){
 $(".temp-box").on('mouseup','.navTemp',function(){
	var c1_h = $('.temp-active').position().top;
  $(".temp-edit").css('top', c1_h+175);
})
}
// 设置模块间距
 function setSpace(){
    // 设置模块上间距
    $(".mgTop").bind('blur',function(){
    	var mt = $(this).val();
    	$('.temp-active').css('padding-top',mt+'px');
    	$(".DefaultSpace").prop("checked",false);
    });
     $(".mgTop").bind('keydown',function(event){
     	if(event.keyCode=='13'){    		
    	var mt = $(this).val();
    	$('.temp-active').css('padding-top',mt+'px');
    	$(".DefaultSpace").prop("checked",false);
     	}
    });
    // 设置模块下间距
    $(".mgBottom").bind('blur',function(){
    	var mb = $(this).val();
    	$('.temp-active').css('padding-bottom',mb+'px');
    	$(".DefaultSpace").prop("checked",false);
    });
    $(".mgBottom").bind('keydown',function(event){
     	if(event.keyCode=='13'){    		
    	var mt = $(this).val();
    	$('.temp-active').css('padding-bottom',mt+'px');
    	$(".DefaultSpace").prop("checked",false);
     	}
    });
    // 设置默认间距
    $(".default-space").bind('click',function(){
    if($(".DefaultSpace").prop("checked")==true){
    	$(".mgTop").val(5);
    	 $(".mgBottom").val(5);
    	$('.temp-active').css({'padding-top':'5px','padding-bottom':"5px"});
    }
    });
 }

 // 添加内容
 function addContent(){
 $(".temp-box").on('click','.add-content',function(){
  $(".temp-edit").empty();
	$(".temp-edit").append(edit_module.navTemp());
	var c2_h = $('.temp-box .temp-active').position().top;
    $(".temp-edit").css('top', c2_h+175);
    });
 }
 function deleteBoxEdit() {
        var prediv = $(".temp-active").prev(".navTemp");
        var predivnexst = $(".temp-active").next(".navTemp");
        if (prediv.text() != "") {
            prediv.addClass('temp-active');
            $(".temp-edit").empty();
            prediv.next(".temp-active").remove();
        } else if (predivnexst.text() != "") {
            predivnexst.addClass('temp-active');
            $(".temp-edit").empty();
            predivnexst.prev(".temp-active").remove();
        } else {
            $(".temp-active").remove();
            $(".temp-edit").empty();
        }
    }
     function deleteBox() {
        $(".temp-box").on('click', '.delete-content', function () {
            deleteBoxEdit();
        });
    }
  return {
      mouseMove:mouseMove,
      setSpace:setSpace,
      addContent:addContent,
      deleteBox: deleteBox
    }
})
