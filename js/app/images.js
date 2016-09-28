define(["common"], function(common) {
var add_module = {
    	imagesBox:function(){
    		var images_box = '<div class="navTemp imagesBox">'
			+'<div class="images-box big-images clearfix">'
				+'<ul class="images-list">'
					+'<li class="item"><a href=""><img src="images/big_images01.jpg" alt=""></a></li>'
					+'<li class="item"><a href=""><img src="images/big_images02.jpg" alt=""></a></li>'
				+'</ul>'
		  +'</div> '
		  +'<div class="shade"></div>'
        +'<div class="diy-actions">'
        +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
        +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
        +'</div>'
		+'</div>' ;
        return images_box;
    	},
      imagesBox1:function(){
        var images_box1 = '<div class="images-box big-images clearfix">'
        +'<ul class="images-list">'
          +'<li class="item"><a href=""><img src="images/big_images01.jpg" alt=""></a></li>'
          +'<li class="item"><a href=""><img src="images/big_images02.jpg" alt=""></a></li>'
        +'</ul>'
      +'</div> '
      +'<div class="shade"></div>'
        +'<div class="diy-actions">'
        +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
        +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
        +'</div>';
        return images_box1;
      },
          imagesBox2:function(){
        var images_box2 = '<div class="images-box small-images clearfix">'
    +'<ul class="images-list">'
      +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""></a></li>'
      +'<li class="item"><a href=""><img src="images/small_images02.jpg" alt=""></a></li>'
      +'<li class="item"><a href=""><img src="images/small_images03.jpg" alt=""></a></li>'
      +'<li class="item"><a href=""><img src="images/small_images04.jpg" alt=""></a></li>'
      +'</ul>'
    +'</div>'
     +'<div class="shade"></div>'
        +'<div class="diy-actions">'
        +'<a href="#" class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
        +'<a href="#" class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
        +'</div>';
        return images_box2;
      },
          imagesBox3:function(){
        var images_box3 ='<div class="images-box carousel-images clearfix">'
        +'<ul class="images-list">'
          +'<li class="item"><a href=""><img src="images/big_images01.jpg" alt=""></a></li>'
          +'<li class="item"><a href=""><img src="images/big_images02.jpg" alt=""></a></li>'
        +'</ul>'
        +'<div class="images-num">'
          +'<span class="num cur"></span>'
          +'<span class="num"></span>'
        +'</div>'
      +'</div>'
       +'<div class="shade"></div>'
        +'<div class="diy-actions">'
        +'<a href="#" class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
        +'<a href="#" class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
        +'</div>';
        return images_box3;
      }
	　　};
	/* 编辑模块
		noticeEdit  编辑公告
		titleEdit   编辑标题
	*/
	var edit_module = {
		imagesEdit:function(){
			var images_edit = '<div class="images-edit">'
			+'<div class="edit-box">'
				+'<h4 class="edit-title">图片</h4>'
				+'<ul class="edit-type">'
					+'<li class="edit-content-font  edit-type-acitve">内容</li>'
					+'<li class="edit-style-font">样式</li>'
				+'</ul>'
				+'<div class="edit-info">'
					+'<div class="edit-content-info clearfix edit-info-container">'
  	+'<fieldset class="form-group edit-content-content">'
  	+'<label class="form-font" for="align-left">图片样式：</label>'
  	+'<span class="left mr20 showStyle">'
  	+'<input type="radio" name="show" class="show-big left" id="showBig" checked>'
    +'<label class="form-font left" for="showBig">&nbsp;分开显示-大图</label>'
    +'</span>'
    +'<span class="left mr20 showStyle">'
    	+'<input type="radio" name="show" class="show-small left" id="showSmall">'
    +'<label class="form-font left" for="showSmall">&nbsp;分开显示-小图</label>'
    +'</span>'
    +'<span class="left mr20 pCarousel showStyle">'
    	+'<input type="radio" name="show" class="show-carousel left" id="showCarousel">'
    +'<label class="form-font left" for="showCarousel">&nbsp;轮播显示-大图</label>'
    +'</span>'
  +'</fieldset>'
  +'<div class="upload-image">'
  +'<ul class="upload-success">'
  +'<li class="imagesList clearfix">'
		+'<span class="pic left">'
		 +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
		+'<img src="images/small_images01.jpg" alt="">'
		+'</span>'
			+'<fieldset class="form-group u-imginfor">'
  	+'<label class="form-font left">链接地址：</label>'
  	+'<select class="form-control form-select left">'
    	+'<option value="">无链接</option>'
    	+'<option value="">店铺首页</option>'
    +'</select>'
  	+'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
    +'<li class="imagesList clearfix">'
		+'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
		+'<img src="images/small_images01.jpg" alt="">'
		+'</span>'
			+'<fieldset class="form-group u-imginfor">'
  	+'<label class="form-font left">链接地址：</label>'
  	+'<select class="form-control form-select left">'
    	+'<option value="">无链接</option>'
    	+'<option value="">店铺首页</option>'
    +'</select>'
  	+'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'</ul>'
  +'<div class="upload-image-file">'
                    +'<div class="uploadFile"><input type="file" class="uploadpic"></div>'
                    + '<span class="choice-img-btn"><b>+</b>上传图片</span>'
                    +'</div>'
  +'<p class="remark"><b class="red">*</b>最多可添加6张图片，建议图片宽度 640px</p>'
  +'</div>'
				
					+'</div>'
					+'<div class="edit-style-info clearfix edit-info-container" style="display:none">'
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
			return images_edit;
		}
	}
	//鼠标移到图片上，修改图片
	function imgMouseOver(){
	 $(".temp-edit").on('mouseover','.pic',function(){
		$(this).find(".update-image").show();
	});
	 $(".temp-edit").on('mouseout','.pic',function(){
		$(this).find(".update-image").hide();
	});
}
imgMouseOver();
	// 添加标题模块
function addFirstImages() {
$(".nav-images").click(function() {
    $(".temp-box").append(add_module.imagesBox());
    if($(".temp-box").has('.imagesBox').length>0){
 		addImagesBox();
    }else{
    	return false;
    }
  });
}


function addNextImages(){

 $(".temp-edit").on('click','.nav-images',function(){
  	$(".temp-box .temp-active").after(add_module.imagesBox());
  	$(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
  	$(".temp-edit").empty();
  	$(".temp-edit").append(edit_module.imagesEdit());
  	var c1_h = $('.temp-box .temp-active').position().top;
    $(".temp-edit").css('top', c1_h+145);
     saveImagesStyle();
     setImagesStyle();
    common.setSpace();
    common.addContent();
    common.mouseMove();

  });
}


// 点击标题
function clickImages() {
 $(".temp-box").on('click','.imagesBox .shade',function(){
  $(this).closest(".imagesBox").each(function(){
    $(this).siblings().removeClass('temp-active');
    $(this).addClass('temp-active');
    $(".temp-edit").empty();
    $(".temp-edit").append(edit_module.imagesEdit());
    var c1_h = $(this).closest(".imagesBox").position().top;
    $(".temp-edit").css('top', c1_h+145);   
     saveImagesStyle();
        setImagesStyle();
    common.setSpace();
    common.addContent();
    common.mouseMove();
  });
 });
}


 // 添加标题模块
 function addImagesBox(){
 	$(".temp-box .imagesBox").each(function(){
       $(this).siblings().removeClass('temp-active');
       $(this).addClass('temp-active');
        $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.imagesEdit());
        var c1_h = $(this).position().top;
        $(".temp-edit").css('top', c1_h+145);
        saveImagesStyle();
        setImagesStyle();
        common.setSpace();
        common.addContent();
        common.mouseMove();

			 })    
 }
//设置样式
function setImagesStyle(){
	  $(".showStyle").bind('click',function(){
    if($(".show-big").prop("checked")==true){
      $(".temp-box .temp-active").empty();
      $(".temp-box .temp-active").append(add_module.imagesBox1());
    }else if($(".show-small").prop("checked")==true){
    	  $(".temp-box .temp-active").empty();
      $(".temp-box .temp-active").append(add_module.imagesBox2());
    }else if($(".show-carousel").prop("checked")==true){
      $(".temp-box .temp-active").empty();
      $(".temp-box .temp-active").append(add_module.imagesBox3());
    }
    });
}
 // 保存样式
 function saveImagesStyle(){
 	//保存间距

        var mt = $(".temp-box .temp-active").css("padding-top");
   	    var mb =$(".temp-box .temp-active").css("padding-bottom");
   	    var mtn = parseFloat(mt,10);  
   	    var mbn = parseFloat(mb,10); 
   	     $(".temp-edit .images-edit .mgTop").val(mtn);
   	     $(".temp-edit .images-edit .mgBottom").val(mbn);
//保存图片显示方式
   	      var big = $(".temp-box .temp-active .big-images");
   	      var small = $(".temp-box .temp-active .small-images");
   	      var carouse = $(".temp-box .temp-active .carousel-images");
   	if(big.css('display') == 'block'){
   		$(".temp-edit .images-edit .show-big").attr("checked","checked");
   	}else if(small.css('display') == 'block'){
   		$(".temp-edit .images-edit .show-small").attr("checked","checked");
   	}else if(carouse.css('display') == 'block'){
   		$(".temp-edit .images-edit .show-carousel").attr("checked","checked");
   	}
 }
return {
    addFirstImages:addFirstImages,
    addNextImages:addNextImages,
    clickImages:clickImages
    }

});