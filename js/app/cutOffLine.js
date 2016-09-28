define(["common"], function(common) {
/*添加模块
	noticeBox 添加公告
	titleBox  添加标题
*/
	var add_module = {
    	cutOffRule:function(){
    		var cutOff_rule = '<div class="navTemp cutOffLine-box">'
    		+'<hr class="line" />'
         +'<div class="shade"></div>'
        +'<div class="diy-actions">'
      +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
      +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
      +'</div>'
    			+'</div>';
    			
    		return cutOff_rule;
    	}
	　　};
	/* 编辑模块
		noticeEdit  编辑公告
		titleEdit   编辑标题
	*/
	var edit_module = {
		cutOffLineEdit:function(){
      var cutoffline_edit = '<div class="cutoffline-edit">'
      +'<div class="edit-box">'
        +'<h4 class="edit-title">分割线</h4>'
        +'<ul class="edit-type">'
          +'<li class="edit-style-font edit-type-acitve">样式</li>'
        +'</ul>'
        +'<div class="edit-info">'
          +'<div class="edit-style-info clearfix edit-info-container">'
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
      return cutoffline_edit;
    }
	}
	//添加分割线
	function addFirstLine() {
  $('.nav-underline').click(function() {
    $(".temp-box").append(add_module.cutOffRule());
    if($(".temp-box").has('.cutOffLine-box').length>0){
    addCutOffline();
    }else{
      return false;
    }
  });
}

 function addCutOffline(){
   $(".temp-box .cutOffLine-box").each(function(){
       $(this).siblings().removeClass('temp-active');
       $(this).addClass('temp-active');
        $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.cutOffLineEdit());
        var c1_h = $(this).position().top;
        $(".temp-edit").css('top', c1_h+145);
        common.setSpace();
        common.addContent();
        common.mouseMove();
        saveLineStyle();
      });
}
//添加内容---分割线
function addNextLine(){

 $(".temp-edit").on('click','.nav-underline',function(){
  var timestamp = new Date().getTime();
  	$(".temp-box .temp-active").after(add_module.cutOffRule(timestamp));
  	$(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
  	$(".temp-edit").empty();
  	$(".temp-edit").append(edit_module.cutOffLineEdit());
    var c1_h = $('.temp-box .temp-active').position().top;
    $(".temp-edit").css('top', c1_h+145);
  	  common.setSpace();
      common.addContent();
      common.mouseMove();
      saveLineStyle();

  });
}


// 点击分割线
function clickLine() {
 $(".temp-box").on('click','.cutOffLine-box .shade',function(){
  $(this).closest(".cutOffLine-box").each(function(){
    $(this).siblings().removeClass('temp-active');
    $(this).addClass('temp-active');
    $(".temp-edit").empty();
    $(".temp-edit").append(edit_module.cutOffLineEdit());
    var c1_h = $(this).closest(".cutOffLine-box").position().top;
    $(".temp-edit").css('top', c1_h+145);   
    common.setSpace();
    common.addContent();
    common.mouseMove();
    saveLineStyle();
  });
 });
}
 function saveLineStyle(){
  //保存间距
        var mt = $(".temp-box .temp-active").css("padding-top");
        var mb =$(".temp-box .temp-active").css("padding-bottom");
        var mtn = parseFloat(mt,10);  
        var mbn = parseFloat(mb,10); 
         $(".temp-edit .cutoffline-edit .mgTop").val(mtn);
         $(".temp-edit .cutoffline-edit .mgBottom").val(mbn);
         };
return {
    addFirstLine:addFirstLine,
    addNextLine:addNextLine,
    clickLine:clickLine
    }
});