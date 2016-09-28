define(["common"],
function(common) {
  /*添加模块
    titleBox  添加标题
*/
  var add_module = {
    noticeBox: function() {
      var notice_box = '<div class="navTemp notice-box temp-active">' 
      + '<div class="notice-container">' 
      + '<div class="notice-change-box">'
      + '<div class="general-show">' 
      + '<h4 class="notice-tit">' 
      + '<i class="icon iconfont">&#xe604;</i>' 
      + '<span class="n-tit-font">请添加公告标题</span>' 
      + '</h4>' 
      + '<div class="notice-content">请添加公告内容</div>' 
      + '</div>' 
      + '</div>' 
      + '<div class="shade"></div>' 
      + '<div class="diy-actions">' 
      + '<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>' 
      + '<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>' 
      + '</div>' 
      + '</div>' 
      + '</div>';
      return notice_box;
    }　　
  };
  /* 编辑模块
        titleEdit   编辑标题
    */
  var edit_module = {
    noticeEdit: function() {
      var notice_edit = '<div class="notice-edit">' 
      + '<div class="edit-box">' 
      + '<h4 class="edit-title">公告</h4>' 
      + '<ul class="edit-type">' 
      + '<li class="edit-content-font edit-type-acitve">内容</li>' 
      + '<li class="edit-style-font">样式</li>' 
      + '</ul>' 
      + '<div class="edit-info">' 
      + '<div class="edit-content-info clearfix edit-info-container">' 
      + '<fieldset class="form-group show-style">' 
      + '<label class="form-font">样式：</label>' 
      + '<span class="left mr20 noticeStyle">' 
      + '<input type="radio" class="left" name="style" checked="checked" id="generalStyle">' 
      + '<label class="form-font left" for="generalStyle">&nbsp;普通</label>' 
      + '</span>' 
      + '<span class="left mr20 noticeStyle">' 
      + '<input type="radio" class="left" name="style" id="lessStyle">' 
      + '<label class="form-font left" for="lessStyle">&nbsp;极简</label>' 
      + '</span>' 
      + '</fieldset>' 
      +'<div class="edit-notice-style">'
      + '<div class="general-box">' 
      + '<fieldset class="form-group edit-content-tit">' 
      + '<label class="form-font mt8">标题：</label>' 
      + '<input type="text" class="form-control form-text notice-tit-text" placeholder="请添加公告标题">' 
      + '</fieldset>' 
      + '<fieldset class="form-group edit-content-content">' 
      + '<label class="form-font">内容：</label>' 
      + '<textarea class="form-control form-textarea notice-content-text" rows="5" placeholder="请添加公告内容"></textarea>' 
      + '</fieldset>' 
      + '</div>'
      + '</div>'
      + '</div>' 
      + '<div class="edit-style-info clearfix edit-info-container" style="display:none">' 
      + '<span class="left">调整间距：</span>' 
      + '<div class="space-box">'
      + '<div class="adjust-space">' 
      + '<div class="mg-top">' 
      + '<div class="margin-top clearfix">' 
      + '<input type="text" class="form-control space-num left mgTop" value="5"><span class="left unit">PX</span>' 
      + '</div>' 
      + '<i class="icon iconfont font-gcolor">&#xe613;</i>' 
      + '</div>' 
      + '<div class="mg-middle clearfix">' 
      + '<div class="mg-left left clearfix">' 
      + '<div class="margin-left left">' 
      + '<span>0</span><span class="unit">PX</span>' 
      + '</div>' 
      + '<i class="icon iconfont left">&#xe614;</i>' 
      + '</div>' 
      + '<div class="mg-box left">'
      + '</div>' 
      + '<div class="mg-right left clearfix">' 
      + '<i class="icon iconfont left">&#xe615;</i>' 
      + '<div class="margin-right left">' 
      + '<span>0</span><span class="unit">PX</span>' 
      + '</div>'
      + '</div>' 
      + '</div>' 
      + '<div class="mg-top">' 
      + '<i class="icon iconfont font-gcolor">&#xe616;</i>' 
      + '<div class="margin-top clearfix">' 
      + '<input type="text" class="form-control space-num left mgBottom" value="5"><span class="left unit">PX</span>' 
      + '</div>' 
      + '</div>' 
      + '</div>'
      + '<div class="default-space clearfix">' 
      + '<input type="checkbox" class="left DefaultSpace" id="nDefaultSpace">&nbsp;<label class="font left" for="nDefaultSpace">默认边距</label>' 
      + '</div>' 
      + '</div>' 
      + '</div>' 
      + '</div>' 
      + '</div>' 
      + '</div>';
      return notice_edit;
    }
  }

  // 添加公告模块
  function addFirstNotice() {
    $('.nav-notice').click(function() {
      $(".temp-box").append(add_module.noticeBox());
      if ($(".temp-box").has('.notice-box').length > 0) {
        addNoticeBox();
      } else {
        return false;
      }
    });
  }

  function addNextNotice() {
    $(".temp-edit").on('click', '.nav-notice',
    function() {
      $(".temp-box .temp-active").after(add_module.noticeBox());
      $(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
      $(".temp-edit").empty();
      $(".temp-edit").append(edit_module.noticeEdit());
      var c1_h = $('.temp-box .temp-active').position().top;
      $(".temp-edit").css('top', c1_h + 145);
      setNoticeContent();
      common.setSpace();
      common.addContent();
      common.mouseMove();
      saveNoticeStyle();
    });
  }

  // 点击选中公告模块
  function clickNotice() {
    $(".temp-box").on('click', ' .notice-box .shade',
    function() {
      $(this).closest(".notice-box").each(function() {
        $(this).siblings().removeClass('temp-active');
        $(this).addClass('temp-active');
         $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.noticeEdit());
        var c1_h = $(this).closest(".notice-box").position().top;
        $(".temp-edit").css('top', c1_h + 145);
      if($(this).find(".general-show").length==1){
        $(".edit-notice-style").empty();
        $(".edit-notice-style").append('<div class="general-box">' + '<fieldset class="form-group edit-content-tit">' + '<label class="form-font mt8">标题：</label>' + '<input type="text" class="form-control form-text notice-tit-text" placeholder="请添加公告标题">' + '</fieldset>' + '<fieldset class="form-group edit-content-content">' + '<label class="form-font">内容：</label>' + '<textarea class="form-control form-textarea notice-content-text" rows="5" placeholder="请添加公告内容"></textarea>' + '</fieldset>' + '</div>')
      
        $(".temp-edit .notice-tit-text").val($(this).find(".notice-tit .n-tit-font").text());
        $(".temp-edit .notice-content-text").val($(this).find(".notice-content").text());
        $(".temp-edit #generalStyle").attr("checked","checked");
      
       }else if($(this).find(".moreless-show").length==1){
        $(".edit-notice-style").empty();
        $(".edit-notice-style").append('<div class="moreless-box">' + '<fieldset class="form-group edit-content-content">' + '<label class="form-font mt8">内容：</label>' + '<input class="form-control form-text notice-less-text" placeholder="请添加公告内容，如果内容过长，将自动滚动显示">' + '</fieldset>' + '</div>')
    
        $(".temp-edit .notice-less-text").val($(this).find(".n-cont-less").text());
        $(".temp-edit #lessStyle").attr("checked","checked");
       
        }
        setNoticeContent();
        common.setSpace();
        common.addContent();
        common.mouseMove();
        saveNoticeStyle();
      });
    });
  }

  // 添加公告模块
  function addNoticeBox() {
    $(".temp-box .notice-box").each(function() {
      $(this).siblings().removeClass('temp-active');
      $(this).addClass('temp-active');
      $(".temp-edit").empty();
      $(".temp-edit").append(edit_module.noticeEdit());
      var c1_h = $(this).position().top;
      $(".temp-edit").css('top', c1_h + 145);
      setNoticeContent();
      common.setSpace();
      common.addContent();
      common.mouseMove();
      saveNoticeStyle();
    });
  }

  // 保存公告的样式
  function saveNoticeStyle() {
    
    var mt = $(".temp-box .temp-active").css("padding-top");
    var mb = $(".temp-box .temp-active").css("padding-bottom");
    var mtn = parseFloat(mt, 10);
    var mbn = parseFloat(mb, 10);
    $(".temp-edit .notice-edit .mgTop").val(mtn);
    $(".temp-edit .notice-edit .mgBottom").val(mbn);

  }

  function setNoticeContent() {
    // 鼠标离开公告标题编辑框把内容添加到模块中
    $(".notice-tit-text").bind('blur',function() {
      var val = $(this).val();
      if (!val == '') {
        // 添加标题内容
        $('.temp-active').find(".notice-tit .n-tit-font").text(val);

      }
    });
    // 鼠标离开公告内容编辑框把内容添加到模块中
    $(".notice-content-text").bind('blur',function() {
      var val = $(this).val();
      if (!val == '') {
        // 添加标题内容
        $('.temp-active').find(".notice-content").text(val);

      }
    });
 
    //选择显示样式
    $(".noticeStyle").bind("click",function() {
      if ($("#generalStyle").prop("checked") == true) {
        $(".temp-active .notice-change-box").empty();
        $(".temp-active .notice-change-box").append('<div class="general-show">' + '<h4 class="notice-tit">' + '<i class="icon iconfont">&#xe604;</i>' + '<span class="n-tit-font">请添加公告标题</span>' + '</h4>' + '<div class="notice-content">' + '请添加公告内容' + '</div>' + '</div>');
        $(".edit-notice-style").empty();
        $(".edit-notice-style").append('<div class="general-box">' + '<fieldset class="form-group edit-content-tit">' + '<label class="form-font mt8">标题：</label>' + '<input type="text" class="form-control form-text notice-tit-text" placeholder="请添加公告标题">' + '</fieldset>' + '<fieldset class="form-group edit-content-content">' + '<label class="form-font">内容：</label>' + '<textarea class="form-control form-textarea notice-content-text" rows="5" placeholder="请添加公告内容"></textarea>' + '</fieldset>' + '</div>')
        $(".notice-tit-text").bind('blur',function() {
        var val = $(this).val();
        if (!val == '') {
          // 添加标题内容
          $('.temp-active').find(".notice-tit .n-tit-font").text(val);
        }
        });
        // 鼠标离开公告内容编辑框把内容添加到模块中
        $(".notice-content-text").bind('blur',function() {
          var val = $(this).val();
          if (!val == '') {
            // 添加标题内容
            $('.temp-active').find(".notice-content").text(val);
          }
        });
      } else if($("#lessStyle").prop("checked") == true){
        $(".temp-active .notice-change-box").empty();
        $(".temp-active .notice-change-box").append('<div class="moreless-show">' + '<h4 class="notice-tit-less">' + '<span class="n-tit-less">公告：</span>'+ '<span class="n-cont-less"></span>' + '</h4>' + '</div>');
        $(".edit-notice-style").empty();
        $(".edit-notice-style").append('<div class="moreless-box">' + '<fieldset class="form-group edit-content-content">' + '<label class="form-font mt8">内容：</label>' + '<input class="form-control form-text notice-less-text" rows="5" placeholder="请添加公告内容，如果内容过长，将自动滚动显示">' + '</fieldset>' + '</div>')
        $(".notice-less-text").bind('blur',function(){
        var val = $(this).val();
        if (!val == '') {
        // 添加标题内容
        $('.temp-active').find(".n-cont-less").text(val);

      } 
    });
      }
    })
  }

  return {
    addFirstNotice: addFirstNotice,
    addNextNotice: addNextNotice,
    clickNotice: clickNotice
  }
})