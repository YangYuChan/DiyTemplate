define(["common"], function(common) {
/*添加模块
	noticeBox 添加公告
	titleBox  添加标题
*/
	var add_module = {
    	titleBox:function(){
    		var title_box = '<div class="navTemp title-box ">'
        +'<div class="title-container">'
        +'<h4 class="title-content">请添加标题文字</h4>'
        +'<div class="shade"></div>'
        +'<div class="diy-actions">'
    	+'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
    	+'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
    	+'</div>'
      +'</div>'
        +'</div>';
        return title_box;
    	}
	　　};
	/* 编辑模块
		noticeEdit  编辑公告
		titleEdit   编辑标题
	*/
	var edit_module = {
		titleEdit:function(){
			var title_edit = '<div class="title-edit">'
			+'<div class="edit-box">'
				+'<h4 class="edit-title">标题</h4>'
				+'<ul class="edit-type">'
					+'<li class="edit-content-font  edit-type-acitve">内容</li>'
					+'<li class="edit-style-font">样式</li>'
				+'</ul>'
				+'<div class="edit-info">'
					+'<div class="edit-content-info clearfix edit-info-container">'
								+'<fieldset class="form-group edit-content-content">'
    +'<label class="form-font">文字：</label>'
    +'<textarea class="form-control form-textarea edit-title-font" rows="5" placeholder="请添加标题文字"></textarea>'
  +'</fieldset>'
  	+'<fieldset class="form-group edit-content-content">'
  	+'<label class="form-font" for="align-left">对齐：</label>'
  	+'<span class="left mr20 tPosition">'
  	+'<input type="radio" name="align" id="align-left" class="left tAlignLeft" checked>'
    +'<label class="form-font left" for="align-left">&nbsp;居左</label>'
    +'</span>'
    +'<span class="left mr20 tPosition">'
    	+'<input type="radio" name="align" id="align-center" class="left tAlignCenter">'
    +'<label class="form-font left" for="align-center">&nbsp;居中</label>'
    +'</span>'
    +'<span class="left mr20 tPosition">'
    	+'<input type="radio" name="align" id="align-right" class="left tAlignRight">'
    +'<label class="form-font left" for="align-right">&nbsp;居右</label>'
    +'</span>'
  +'</fieldset>'
  	+'<fieldset class="form-group edit-content-content">'
    +'<label class="form-font mt8">链接：</label>'
    +'<select class="form-control form-select">'
    	+'<option value="">无链接</option>'
    	+'<option value="">店铺首页</option>'
    +'</select>'
  +'</fieldset>'
				
					+'</div>'
					+'<div class="edit-style-info clearfix edit-info-container" style="display:none">'
					+'<fieldset class="form-group edit-content-content form-group-color">'
    +'<label class="form-font">文字颜色：</label>'
    +'<input type="color" class="form-control form-color left setFontColor">'
  +'</fieldset>'
  +'<fieldset class="form-group edit-content-content form-group-color">'
    +'<label class="form-font">背景颜色：</label>'
    +'<input type="color" class="form-control form-color left setBgColor">'
  +'</fieldset>'
						+'<span class="left">调整间距：</span>'
						+'<div class="space-box">'
						
						+'<div class="adjust-space">'
								+'<div class="mg-top">'
									+'<div class="margin-top clearfix">'
										+'<input type="text" class="form-control space-num left mgTop" value="5"><span class="left unit">PX</span>'
									+'</div>'
									+'<i class="icon iconfont font-gcolor">&#xe613;</i>'
								+'</div>'
								+'<div class="mg-middle clearfix">'
									+'<div class="mg-left left clearfix">'
										+'<div class="margin-left left">'
											+'<span>0</span><span class="unit">PX</span>'
										+'</div>'
										+'<i class="icon iconfont left">&#xe614;</i>'
									+'</div>'
									+'<div class="mg-box left">'
										
									+'</div>'
									+'<div class="mg-right left clearfix">'
									+'<i class="icon iconfont left">&#xe615;</i>'
										+'<div class="margin-right left">'
											+'<span>0</span><span class="unit">PX</span>'
										+'</div>'
										
									+'</div>'
								+'</div>'
								+'<div class="mg-top">'
								+'<i class="icon iconfont font-gcolor">&#xe616;</i>'
									+'<div class="margin-top clearfix">'
											+'<input type="text" class="form-control space-num left mgBottom" value="5"><span class="left unit">PX</span>'
										+'</div>'		
								+'</div>'
						+'</div>'
						+'<div class="default-space clearfix">'
							+'<input type="checkbox" class="left DefaultSpace" id="TDefaultSpace">&nbsp;<label class="font left" for="TDefaultSpace">默认边距</label>'
						+'</div>'
						+'</div>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>';
			return title_edit;
		}
	}


// 添加标题模块
function addFirstTitle() {
$(".nav-title").click(function() {
    $(".temp-box").append(add_module.titleBox());
    if($(".temp-box").has('.title-box').length>0){
 		addTitleBox();
    }else{
    	return false;
    }
  });
}

function addNextTitle(){

 $(".temp-edit").on('click','.nav-title',function(){
  	$(".temp-box .temp-active").after(add_module.titleBox());
  	$(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
  	$(".temp-edit").empty();
  	$(".temp-edit").append(edit_module.titleEdit());
    var c1_h = $('.temp-box .temp-active').position().top;
    $(".temp-edit").css('top', c1_h+145);
  	 setTitleContent();
    setTitleAlign();
    setFontColor();
    setBgColor();
    saveTitleStyle();
    common.setSpace();
    common.addContent();
    common.mouseMove();

  });
}


// 点击标题
function clickTitle() {
 $(".temp-box").on('click','.title-box .shade',function(){
  $(this).closest(".title-box").each(function(){
    $(this).siblings().removeClass('temp-active');
    $(this).addClass('temp-active');
    $(".temp-edit").empty();
    $(".temp-edit").append(edit_module.titleEdit());
    var c1_h = $(this).closest(".title-box").position().top;
    $(".temp-edit").css('top', c1_h+145);   
    setTitleContent();
    setTitleAlign();
    setFontColor();
    setBgColor();
    saveTitleStyle();
    common.setSpace();
    common.addContent();
    common.mouseMove();
  });
 });
}


 // 添加标题模块
 function addTitleBox(){
 	$(".temp-box .title-box").each(function(){
       $(this).siblings().removeClass('temp-active');
       $(this).addClass('temp-active');
        $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.titleEdit());
        var c1_h = $(this).position().top;
        $(".temp-edit").css('top', c1_h+145);
	      setTitleContent();
	      setTitleAlign();
	      setFontColor();
	      setBgColor();
        saveTitleStyle();
        common.setSpace();
        common.addContent();
        common.mouseMove();

			 })    
 }

 // 保存标题样式
 function saveTitleStyle(){
 	   $(".temp-edit .edit-title-font").val($('.temp-active').find(".title-content").text());
          var mt = $(".temp-box .temp-active").css("padding-top");
   	    var mb =$(".temp-box .temp-active").css("padding-bottom");
   	    var mtn = parseFloat(mt,10);  
   	    var mbn = parseFloat(mb,10); 
   	     $(".temp-edit .title-edit .mgTop").val(mtn);
   	     $(".temp-edit .title-edit .mgBottom").val(mbn);
   	      var textAlign = $(".temp-box .temp-active").css("text-align");
         	if(textAlign=='left'){
         		$(".temp-edit .title-edit .tAlignLeft").attr("checked","checked");
         	}else if(textAlign=='center'){
         		$(".temp-edit .title-edit .tAlignCenter").attr("checked","checked");
         	}else if(textAlign=='right'){
         		$(".temp-edit .title-edit .tAlignRight").attr("checked","checked");
         	}

   	var Tcolor = $(".temp-box .temp-active .title-container").css("color");

   	$(".temp-edit .title-edit .setFontColor").val(Tcolor.colorHex());
   		var Tbg = $(".temp-box .temp-active .title-container").css("background-color");
   	$(".temp-edit .title-edit .setBgColor").val(Tbg.colorHex());
 }


 // 将颜色的rgb格式转换为16进制

String.prototype.colorHex = function(){
     var that = this;
     if(/^(rgb|RGB)/.test(that)){
          var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");
          var strHex = "#";
          for(var i=0; i<aColor.length; i++){
               var hex = Number(aColor[i]).toString(16);
               if(hex === "0"){
                    hex += hex;    
               }
               strHex += hex;
          }
          if(strHex.length !== 7){
               strHex = that;    
          }
          return strHex;
     }else if(reg.test(that)){
          var aNum = that.replace(/#/,"").split("");
          if(aNum.length === 6){
               return that;    
          }else if(aNum.length === 3){
               var numHex = "#";
               for(var i=0; i<aNum.length; i+=1){
                    numHex += (aNum[i]+aNum[i]);
               }
               return numHex;
          }
     }else{
          return that;    
     }
};  

 function setTitleAlign(){
 	// 设置标题左右居中显示
		 // 设置默认间距
    $(".tPosition").bind('click',function(){
    if($(".tAlignLeft").prop("checked")==true){
    	$('.temp-active').css('text-align','left');
    }else if($(".tAlignCenter").prop("checked")==true){
    	$('.temp-active').css('text-align','center');
    }else if($(".tAlignRight").prop("checked")==true){
    	$('.temp-active').css('text-align','right');
    }else{
    	$('.temp-active').css('text-align','left');
    }
    });
 }
  function setFontColor(){
 	//设置文本颜色
   $(".setFontColor").on('change',function(){
   	var val = $(this).val();
			$('.temp-active .title-container').css("color",val);
   });
 }
   function setBgColor(){
 	//设置背景颜色
   $(".setBgColor").on('change',function(){
   	var val = $(this).val();
			$('.temp-active .title-container').css("background-color",val);
   });
 }

 function setTitleContent(){
 	 // 鼠标离开编辑框把内容添加到模块中
       $(".edit-title-font").bind('blur',function(){
    var val = $(this).val();
    if(!val==''){
    // 添加标题内容
     $('.temp-active').find(".title-content").text(val);

    }else{
    $('.temp-active').find(".title-content").text('请添加标题文字');

    }	
    });
 }
return {
    addFirstTitle:addFirstTitle,
    addNextTitle:addNextTitle,
    clickTitle:clickTitle
    }
})
