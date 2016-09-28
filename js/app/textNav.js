define(["common"], function(common) {
/*添加模块
	noticeBox 添加公告
	titleBox  添加标题
*/
	var add_module = {
    	textNavBox:function(){
    		var textNav_box = '<div class="navTemp textNav-box ">'
        +'<div class="textNav-container">'
        +'<a href="" class="textNav-link">'
        +'<h4 class="textNav-content clearfix">'
        +'<span class="left tn-content">点此添加一个【文本导航】</span>'
        +'<i class="icon iconfont right">&#xe61b;</i>'
        +'</h4>'
        +'</a>'
        +'<div class="shade"></div>'
        +'<div class="diy-actions">'
    	+'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
    	+'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
    	+'</div>'
      +'</div>'
        +'</div>';
        return textNav_box;
    	},
        textNavNewBox:function(){
        var textNavNew_box ='<a href="" class="textNav-link">'
        +'<h4 class="textNav-content clearfix">'
        +'<span class="left tn-content">点此添加一个【文本导航】</span>'
        +'<i class="icon iconfont right">&#xe61b;</i>'
        +'</h4>'
        +'</a>';
        return textNavNew_box;
      }
	　　};
	/* 编辑模块
		noticeEdit  编辑公告
		titleEdit   编辑标题
	*/
	var edit_module = {
		textNavEdit:function(){
			var textNav_edit = '<div class="textNav-edit">'
			+'<div class="edit-box">'
				+'<h4 class="edit-title">文本导航</h4>'
				+'<ul class="edit-type">'
					+'<li class="edit-content-font  edit-type-acitve">内容</li>'
					+'<li class="edit-style-font">样式</li>'
				+'</ul>'
				+'<div class="edit-info">'
					+'<div class="edit-content-info clearfix edit-info-container">'
					 +'<div class="upload-image">'
  +'<ul class="upload-success textNavLinkBox">'
  +'<li class="imagesList clearfix">'
       +'<fieldset class="form-group">'
    +'<label class="form-font left mt5"><b class="red">*</b>导航名称：</label>'
    +'<input type="text" class="form-control form-text left tn-name">'
  +'</fieldset>'
      +'<fieldset class="form-group">'
    +'<label class="form-font left mt5"><b class="red">*</b>链接地址：</label>'
    +'<select class="form-control form-select left pagelink">'
      +'<option value="">无链接</option>'
      +'<option value="www.index.com">店铺首页</option>'
      +'<option value="www.all.com">全部商品</option>'
      +'<option value="www.detail.com">商品详情</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'</ul>'
  +'<div class="addNewTextNav">'
                    + '<span><b>+</b>添加一个文本导航</span>'
                    +'</div>'
  +'</div>'
				
					+'</div>'
					+'<div class="edit-style-info clearfix edit-info-container" style="display:none">'
					+'<fieldset class="form-group edit-content-content form-group-color">'
    +'<label class="form-font">文字颜色：</label>'
    +'<input type="color" class="form-control form-color left setFontColor">'
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
			return textNav_edit;
		},
      textNavNewLink:function(){
      var textNavNew_edit ='<li class="imagesList clearfix">'
       +'<fieldset class="form-group">'
    +'<label class="form-font left mt5"><b class="red">*</b>导航名称：</label>'
    +'<input type="text" class="form-control form-text left tn-name">'
  +'</fieldset>'
      +'<fieldset class="form-group">'
    +'<label class="form-font left mt5"><b class="red">*</b>链接地址：</label>'
    +'<select class="form-control form-select left pagelink">'
      +'<option value="">无链接</option>'
       +'<option value="www.index.com">店铺首页</option>'
      +'<option value="www.all.com">全部商品</option>'
      +'<option value="www.detail.com">商品详情</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>';
        return textNavNew_edit;
    }
	}


// 添加文本导航模块
function addFirstTextNav() {
$(".nav-textNav").click(function() {
    $(".temp-box").append(add_module.textNavBox());
    if($(".temp-box").has('.textNav-box').length>0){
 		addTextNavBox();
    addNewTextNav();
    }else{
    	return false;
    }
  });
}

function addNextTextNav(){

 $(".temp-edit").on('click','.nav-textNav',function(){
  	$(".temp-box .temp-active").after(add_module.textNavBox());
  	$(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
  	$(".temp-edit").empty();
  	$(".temp-edit").append(edit_module.textNavEdit());
    var c1_h = $('.temp-box .temp-active').position().top;
    $(".temp-edit").css('top', c1_h+145);
    setFontColor();
    common.setSpace();
    common.addContent();
    common.mouseMove();
    saveTextNavStyle();
    setTextNavContent()
  });
}
function addNewTextNav(){
  $(".temp-edit .addNewTextNav").each(function(){
    $(this).on('click',function(){
    $(".temp-box .temp-active .textNav-container").append(add_module.textNavNewBox());
    $(this).closest(".temp-edit").find(".textNavLinkBox").append(edit_module.textNavNewLink());
    setFontColor();
    common.setSpace();
    common.addContent();
    common.mouseMove();
    saveTextNavStyle();
    setTextNavContent()
  });
  })
}

// 点击文本导航
function clickTextNav() {
 $(".temp-box").on('click','.textNav-box .shade',function(){
  $(this).closest(".textNav-box").each(function(){
    $(this).siblings().removeClass('temp-active');
    $(this).addClass('temp-active');
    $(".temp-edit").empty();
    $(".temp-edit").append(edit_module.textNavEdit());
    var c1_h = $(this).closest(".textNav-box").position().top;
    $(".temp-edit").css('top', c1_h+145);   
  
    setFontColor();
    common.setSpace();
    common.addContent();
    common.mouseMove();
    saveTextNavStyle();
    setTextNavContent()
  });
 });
}


 // 添加标题模块
 function addTextNavBox(){
 	$(".temp-box .textNav-box").each(function(){
       $(this).siblings().removeClass('temp-active');
       $(this).addClass('temp-active');
        $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.textNavEdit());
        var c1_h = $(this).position().top;
        $(".temp-edit").css('top', c1_h+145);
	      setFontColor();
        common.setSpace();
        common.addContent();
        common.mouseMove();
        saveTextNavStyle();
        setTextNavContent()
			 })    
 }

 // 保存文本导航的样式
 function saveTextNavStyle(){
//保存间距
     var mt = $(".temp-box .temp-active").css("padding-top");
        var mb =$(".temp-box .temp-active").css("padding-bottom");
        var mtn = parseFloat(mt,10);  
        var mbn = parseFloat(mb,10); 
         $(".temp-edit .textNav-edit .mgTop").val(mtn);
         $(".temp-edit .textNav-edit .mgBottom").val(mbn);
// 保存内容信息

    var Tcolor = $(".temp-box .temp-active .tn-content").css("color");
   $(".temp-edit .textNav-edit .setFontColor").val(Tcolor.colorHex());


        // var tl = $(".temp-active .textNav-link").length;
 	  //  $(".temp-edit .tn-name").eq(index).val($(this).find(".tn-content").text());
    // $(".temp-edit .linkweb").eq(index).val($(this).attr("href"));
    // var v1=$(".pagelink option").val();
    // var v2=$(".linkweb").val();
    // if(v1!==v2){
    //   $(".pagelink option").attr("selected",true);
    // }else{
    //   $(".pagelink option").attr("selected",false);
    // }


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

  function setFontColor(){
 	//设置文本颜色
   $(".setFontColor").on('change',function(){
   	var val = $(this).val();
			$('.temp-active .tn-content').css("color",val);
   });
 }


 function setTextNavContent(){
 	 // 鼠标离开编辑框把内容添加到模块中
       $(".tn-name").bind('blur',function(){
    var val = $(this).val();
    var indexEdit = $(this).closest(".imagesList").index();

    if(!val==''){
     $('.temp-active .textNav-link').eq(indexEdit).find(".tn-content").text(val);
    }else{
    $('.temp-active .textNav-link').eq(indexEdit).find(".tn-content").text('点此添加一个【文本导航】');
    }	
    });

    $(".pagelink").bind('change',function(){
    var link = $(this).val();
    var indexEdit = $(this).closest(".imagesList").index();
    $(".temp-active .textNav-link").eq(indexEdit).attr("href",link);
    $(".linkweb").eq(indexEdit).val(link);
    })
    $(".imagesList .delete").click(function(){
      var index = $(this).closest(".imagesList").index();
      if($(this).closest(".imagesList").length>1){
        $(".textNav-box").remove();
        $(".textNav-edit").remove();
      }else{
         $(this).closest(".imagesList").remove();
      $('.temp-active .textNav-link').eq(index).remove();
      }
    })
 }
return {
    addFirstTextNav:addFirstTextNav,
    addNextTextNav:addNextTextNav,
    clickTextNav:clickTextNav
    }
})
