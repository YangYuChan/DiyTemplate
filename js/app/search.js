define(["common"], function(common) {
/*添加模块
	noticeBox 添加公告
	titleBox  添加标题
*/
	var add_module = {
    	searchBox:function(){
    		var search_box = '<div class="navTemp search-box ">'
        +'<div class="search-container">'
        +'<div class="default-style clearfix">'
        +'<i class="icon iconfont">&#xe608;</i>'
        +'<input type="text" placeholder="商品搜索：请输入关键词" class="diy-search">'
        +'<input type="button" class="search-btn right" value="搜索">'
        +'</div>'
        +'<div class="shade"></div>'
        +'<div class="diy-actions">'
      +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
      +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
      +'</div>'
      +'</div>'
        +'</div>';
    			
    		return search_box;
    	}
	　　};
	/* 编辑模块
		noticeEdit  编辑公告
		titleEdit   编辑标题
	*/
	var edit_module = {
		searchEdit:function(){
      var search_edit = '<div class="search-edit">'
      +'<div class="edit-box">'
        +'<h4 class="edit-title">商品搜索</h4>'
        +'<ul class="edit-type">'
          +'<li class="edit-style-font edit-type-acitve">样式</li>'
        +'</ul>'
        +'<div class="edit-info">'
          +'<div class="edit-style-info clearfix edit-info-container">'
          +'<fieldset class="form-group edit-content-content">'
    +'<label class="form-font" for="align-left">搜索样式：</label>'
    +'<span class="left mr20 sStyle">'
    +'<input type="radio" name="sStyle" id="sDefault" class="left sDefault" checked>'
    +'<label class="form-font left" for="sDefault">&nbsp;默认</label>'
    +'</span>'
    +'<span class="left mr20 sStyle">'
      +'<input type="radio" name="sStyle" id="sLess" class="left sLess">'
    +'<label class="form-font left" for="sLess">&nbsp;极简</label>'
    +'</span>'
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
              +'<input type="checkbox" class="left DefaultSpace" id="nDefaultSpace">&nbsp;<label class="font left" for="nDefaultSpace">默认边距</label>'
            +'</div>'
            +'</div>'
          +'</div>'
        +'</div>'
      +'</div>'
    +'</div>';
      return search_edit;
    }
	}
	//添加搜索模块
	function addFirstSearch() {
  $('.nav-search').click(function() {
    $(".temp-box").append(add_module.searchBox());
    if($(".temp-box").has('.search-box').length>0){
    addSearchBox();
    }else{
      return false;
    }
  });
}

 function addSearchBox(){
   $(".temp-box .search-box").each(function(){
       $(this).siblings().removeClass('temp-active');
       $(this).addClass('temp-active');
        $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.searchEdit());
        var c1_h = $(this).position().top;
        $(".temp-edit").css('top', c1_h+145);
        common.setSpace();
        common.mouseMove();
        common.addContent();
        setSearchStyle();
        saveSearchStyle();

      });
}
//添加内容---搜索模块
function addNextSearchBox(){

 $(".temp-edit").on('click','.nav-search',function(){
  	$(".temp-box .temp-active").after(add_module.searchBox());
  	$(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
  	$(".temp-edit").empty();
  	$(".temp-edit").append(edit_module.searchEdit());
    var c1_h = $('.temp-box .temp-active').position().top;
    $(".temp-edit").css('top', c1_h+145);
  	    common.setSpace();
        common.mouseMove();
        common.addContent();
        setSearchStyle();
        saveSearchStyle();

  });
}

// 点击搜索模块
function clickSearchBox() {
 $(".temp-box").on('click','.search-box .shade',function(){
  $(this).closest(".search-box").each(function(){
    $(this).siblings().removeClass('temp-active');
    $(this).addClass('temp-active');
    $(".temp-edit").empty();
    $(".temp-edit").append(edit_module.searchEdit());
    var c1_h = $(this).closest(".search-box").position().top;
    $(".temp-edit").css('top', c1_h+145);   
        common.setSpace();
        common.mouseMove();
        common.addContent();
        setSearchStyle();
        saveSearchStyle();
  });
 });
}
function setSearchStyle(){
 $(".sStyle").bind('click',function(){
    if($(".sDefault").prop("checked")==true){
      $('.temp-active .search-btn').css('display','block');
    }else if($(".sLess").prop("checked")==true){
      $('.temp-active .search-btn').css('display','none');
    }else{
      $('.temp-active .search-btn').css('display','block');
    }
  });
}
 function saveSearchStyle(){
      var s = $(".search-btn");
      if(s.is(":visible")){
          $(".temp-edit .sDefault").attr("checked","checked");
      }else {
         $(".temp-edit .sLess").attr("checked","checked");
    }
    // 间距
       var mt = $(".temp-box .temp-active").css("padding-top");
        var mb =$(".temp-box .temp-active").css("padding-bottom");
        var mtn = parseFloat(mt,10);  
        var mbn = parseFloat(mb,10); 
         $(".temp-edit .search-edit .mgTop").val(mtn);
         $(".temp-edit .search-edit .mgBottom").val(mbn);
  };
return {
    addFirstSearch:addFirstSearch,
    addNextSearchBox:addNextSearchBox,
    clickSearchBox:clickSearchBox
    }
});