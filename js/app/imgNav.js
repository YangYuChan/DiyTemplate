define(["common"], function(common) {
var add_module = {
    	imgNavBox:function(){
    		var imgNav_box = '<div class="navTemp imgNavBox">'
    +'<div class="imgNav-container">'
      +'<div class="imgNav-box clearfix">'
        +'<ul class="imgNav-list three-list clearfix">'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>9.9包邮</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>夏装大促</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>鲜果当然达</span></a></li>'
        +'</ul>'
      +'</div>' 
      +'<div class="shade"></div>'
        +'<div class="diy-actions">'
        +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
        +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
        +'</div>'
        +'</div>'
    +'</div>'  ;
        return imgNav_box;
    	},
      imgNavBox1:function(){
        var imgNav_box1 = '<div class="imgNav-container">'
      +'<div class="imgNav-box clearfix">'
        +'<ul class="imgNav-list three-list clearfix">'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>9.9包邮</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>夏装大促</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>鲜果当然达</span></a></li>'
        +'</ul>'
      +'</div>' 
      +'<div class="shade"></div>'
        +'<div class="diy-actions">'
        +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
        +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
        +'</div>'
        +'</div>' ;
        return imgNav_box1;
      },
      imgNavBox2:function(){
        var imgNav_box2 = '<div class="imgNav-container">'
      +'<div class="imgNav-box clearfix">'
        +'<ul class="imgNav-list four-list clearfix">'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>9.9包邮</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>夏装大促</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>鲜果当然达</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>下午茶</span></a></li>'
        +'</ul>'
      +'</div>' 
      +'<div class="shade"></div>'
        +'<div class="diy-actions">'
        +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
        +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
        +'</div>'
        +'</div>' ;
        return imgNav_box2;
      },
      imgNavBox3:function(){
        var imgNav_box3 ='<div class="imgNav-container">'
      +'<div class="imgNav-box clearfix">'
        +'<ul class="imgNav-list five-list clearfix">'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>9.9包邮</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>夏装大促</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>鲜果当然达</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>下午茶</span></a></li>'
          +'<li class="item"><a href=""><img src="images/small_images01.jpg" alt=""><span>新品新品</span></a></li>'
        +'</ul>'
      +'</div>' 
      +'<div class="shade"></div>'
        +'<div class="diy-actions">'
        +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
        +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
        +'</div>'
        +'</div>' ;
        return imgNav_box3;
      }
	　　};
	/* 编辑模块
		noticeEdit  编辑公告
		titleEdit   编辑标题
	*/
	var edit_module = {
		imgNavEdit:function(){
			var imgNav_edit = '<div class="imgNav-edit">'
			+'<div class="edit-box">'
				+'<h4 class="edit-title">图片导航</h4>'
				+'<ul class="edit-type">'
					+'<li class="edit-content-font  edit-type-acitve">内容</li>'
					+'<li class="edit-style-font">样式</li>'
				+'</ul>'
				+'<div class="edit-info">'
					+'<div class="edit-content-info clearfix edit-info-container">'
  	+'<fieldset class="form-group edit-content-content">'
  	+'<label class="form-font">显示样式：</label>'
  	+'<span class="left mr20 showStyle">'
  	+'<input type="radio" name="show" class="show-three left" id="showThree" checked>'
    +'<label class="form-font left" for="showThree">&nbsp;3列</label>'
    +'</span>'
    +'<span class="left mr20 showStyle">'
    	+'<input type="radio" name="show" class="show-four left" id="showFour">'
    +'<label class="form-font left" for="showFour">&nbsp;4列</label>'
    +'</span>'
    +'<span class="left mr20 showStyle">'
    	+'<input type="radio" name="show" class="show-five left" id="showFive">'
    +'<label class="form-font left" for="showFive">&nbsp;5列</label>'
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
			+'<fieldset class="form-group u-imginfor imgnav-info">'
  	+'<label class="form-font left">链接地址：</label>'
  	+'<select class="form-control form-select left">'
    	+'<option value="">无链接</option>'
    	+'<option value="">店铺首页</option>'
    +'</select>'
  	+'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
    +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
    +'<li class="imagesList clearfix">'
		+'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
		+'<img src="images/small_images01.jpg" alt="">'
		+'</span>'
			+'<fieldset class="form-group u-imginfor imgnav-info">'
  	+'<label class="form-font left">链接地址：</label>'
  	+'<select class="form-control form-select left">'
    	+'<option value="">无链接</option>'
    	+'<option value="">店铺首页</option>'
    +'</select>'
  	+'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'</ul>'
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
			return imgNav_edit;
		},
    imgNavEdit1:function(){
      var imgNav_edit1 = '<ul class="upload-success upload-three">'
      +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
     +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
    +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
    +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'</ul>';
    return imgNav_edit1;
    },
    imgNavEdit2:function(){
      var imgNav_edit2 = '<ul class="upload-success upload-four">'
      +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
     +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
    +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
    +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'</ul>';
  return imgNav_edit2;
    },
    imgNavEdit3:function(){
      var imgNav_edit3 = '<ul class="upload-success upload-five">'
      +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
     +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
    +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
    +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'<li class="imagesList clearfix">'
    +'<span class="pic left">'
    +'<div class="modify-images"><input type="file" class="update-pic"></div>'
    +'<span class="update-image">+</span>'
    +'<img src="images/small_images01.jpg" alt="">'
    +'</span>'
      +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">链接地址：</label>'
    +'<select class="form-control form-select left">'
      +'<option value="">无链接</option>'
      +'<option value="">店铺首页</option>'
    +'</select>'
    +'<input type="text" class="form-control form-text linkweb left">'
  +'</fieldset>'
   +'<fieldset class="form-group u-imginfor imgnav-info">'
    +'<label class="form-font left">文字描述：</label>'
    +'<input type="text" class="form-control form-text left text-describe">'
    +'<span class="remark"><b class="red">*</b>不得超过5个字</span>'
  +'</fieldset>'
  +'<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>'
  +'</li>'
  +'</ul>';
  return imgNav_edit3;
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
function addFirstImgNav() {
$(".nav-imgNav").click(function() {
    $(".temp-box").append(add_module.imgNavBox());
    if($(".temp-box").has('.imgNavBox').length>0){
 		addImgNavBox();
    }else{
    	return false;
    }
  });
}


function addNextImgNav(){

 $(".temp-edit").on('click','.nav-imgNav',function(){
  	$(".temp-box .temp-active").after(add_module.imgNavBox());
  	$(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
  	$(".temp-edit").empty();
  	$(".temp-edit").append(edit_module.imgNavEdit());
  	var c1_h = $('.temp-box .temp-active').position().top;
    $(".temp-edit").css('top', c1_h+145);
     saveImgNavStyle();
     setImgNavStyle();
    common.setSpace();
    common.addContent();
    common.mouseMove();

  });
}


// 点击标题
function clickImgNav() {
 $(".temp-box").on('click','.imgNavBox .shade',function(){
  $(this).closest(".imgNavBox").each(function(){
    $(this).siblings().removeClass('temp-active');
    $(this).addClass('temp-active');
    $(".temp-edit").empty();
    $(".temp-edit").append(edit_module.imgNavEdit());
    var c1_h = $(this).closest(".imgNavBox").position().top;
    $(".temp-edit").css('top', c1_h+145);   
    saveImgNavStyle();
    setImgNavStyle();
    common.setSpace();
    common.addContent();
    common.mouseMove();
  });
 });
}


 // 添加标题模块
 function addImgNavBox(){
 	$(".temp-box .imgNavBox").each(function(){
       $(this).siblings().removeClass('temp-active');
       $(this).addClass('temp-active');
        $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.imgNavEdit());
        var c1_h = $(this).position().top;
        $(".temp-edit").css('top', c1_h+145);
        saveImgNavStyle();
        setImgNavStyle();
        common.setSpace();
        common.addContent();
        common.mouseMove();

			 })    
 }
//设置样式
function setImgNavStyle(){
	  $(".showStyle").bind('click',function(){
    if($(".show-three").prop("checked")==true){
      $(".temp-box .temp-active").empty();
      $(".temp-box .temp-active").append(add_module.imgNavBox1());
      $(".imgNav-edit .upload-image").empty();
      $(".imgNav-edit .upload-image").append(edit_module.imgNavEdit1());
    }else if($(".show-four").prop("checked")==true){
    	  $(".temp-box .temp-active").empty();
      $(".temp-box .temp-active").append(add_module.imgNavBox2());
      $(".imgNav-edit .upload-image").empty();
      $(".imgNav-edit .upload-image").append(edit_module.imgNavEdit2());
    }else if($(".show-five").prop("checked")==true){
      $(".temp-box .temp-active").empty();
      $(".temp-box .temp-active").append(add_module.imgNavBox3());
      $(".imgNav-edit .upload-image").empty();
      $(".imgNav-edit .upload-image").append(edit_module.imgNavEdit3());
    }
    });
}
 // 保存样式
 function saveImgNavStyle(){
 	//保存间距

        var mt = $(".temp-box .temp-active").css("padding-top");
   	    var mb =$(".temp-box .temp-active").css("padding-bottom");
   	    var mtn = parseFloat(mt,10);  
   	    var mbn = parseFloat(mb,10); 
   	     $(".temp-edit .images-edit .mgTop").val(mtn);
   	     $(".temp-edit .images-edit .mgBottom").val(mbn);
//保存图片显示方式
   	      var three = $(".temp-box .temp-active .three-list");
   	      var four = $(".temp-box .temp-active .four-list");
   	      var five = $(".temp-box .temp-active .five-list");
   	if(three.css('display') == 'block'){
   		$(".temp-edit .imgNav-edit .show-three").attr("checked","checked");
      $(".imgNav-edit .upload-image").empty();
      $(".imgNav-edit .upload-image").append(edit_module.imgNavEdit1());
   	}else if(four.css('display') == 'block'){
   		$(".temp-edit .imgNav-edit .show-four").attr("checked","checked");
      $(".imgNav-edit .upload-image").empty();
      $(".imgNav-edit .upload-image").append(edit_module.imgNavEdit2());

   	}else if(five.css('display') == 'block'){
   		$(".temp-edit .imgNav-edit .show-five").attr("checked","checked");
      $(".imgNav-edit .upload-image").empty();
      $(".imgNav-edit .upload-image").append(edit_module.imgNavEdit3());

   	}
 }
return {
    addFirstImgNav:addFirstImgNav,
    addNextImgNav:addNextImgNav,
    clickImgNav:clickImgNav
    }

});