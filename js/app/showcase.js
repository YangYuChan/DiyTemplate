define(["common"], function(common) {
    var add_module = {
        showCaseBox: function() {
            var showcase_box = '<div class="navTemp showcaseBox">' + '<div class="showcase-box">' + '<h4 class="showcase-title">连衣裙</h4>' + '<div class="showcase-body big-left clearfix">' + '<ul class="showcase-list clearfix">' + '<li class="item-big"><a href="#"><img src="images/1.jpg" alt=""></a></li>' + '<li class="item-small"><a href="#"><img src="images/1.jpg" alt=""></a></li>' + '<li class="item-small"><a href="#"><img src="images/1.jpg" alt=""></a></li>' + '</ul>' + '<div class="showcase-intro-tit">' + '理解MVC，MVP和MVVM设计模式' + '</div>' + '<p class="showcase-intro-content">有3个非常受欢迎的MV-*系列设计模式：MVC，MVP，MVVM。他们被广泛应用于不多种结束。这篇文章我回阐述我自己对这3个设计模式的看法。</p>' + '</div>' + '</div>' + '<div class="shade"></div>' + '<div class="diy-actions">' + '<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>' + '<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>' + '</div>' + '</div>';
            return showcase_box;
        }　　
    };
    /* 编辑模块
      noticeEdit  编辑公告
      titleEdit   编辑标题
    */
    var edit_module = {
            showCaseEdit: function() {
                var showcase_edit = '<div class="showcase-edit">' 
                + '<div class="edit-box">' 
                + '<h4 class="edit-title">橱窗</h4>' 
                + '<ul class="edit-type">' 
                + '<li class="edit-content-font  edit-type-acitve">内容</li>' 
                + '<li class="edit-style-font">样式</li>' 
                + '</ul>' 
                + '<div class="edit-info">' 
                + '<div class="edit-content-info clearfix edit-info-container">' 
                + '<fieldset class="form-group edit-content-tit">' 
                + '<label class="form-font mt8">橱窗标题：</label>' 
                + '<input type="text" class="form-control form-text showcase-tit-text" placeholder="连衣裙">' 
                + '</fieldset>' 
                + '<fieldset class="form-group edit-content-content">' 
                + '<label class="form-font" for="align-left">显示方式：</label>' 
                + '<span class="left mr20 picShow">' 
                + '<input type="radio" name="show" class="left-one left" checked id="left-one">' 
                + '<label class="form-font left" for="left-one">&nbsp;左1右2</label>' 
                + '</span>' 
                + '<span class="left mr20 picShow">' 
                + '<input type="radio" name="show" class="right-one left" id="right-one">' 
                + '<label class="form-font left" for="right-one">&nbsp;左2右1</label>' 
                + '</span>' 
                + '<span class="left mr20 picShow">' 
                + '<input type="radio" name="show" class="three-col left" id="three-col">' 
                + '<label class="form-font left" for="three-col">&nbsp;3列</label>' 
                + '</span>' 
                + '</fieldset>' 
                + '<fieldset class="form-group">' 
                + '<label class="form-font">图片间隙：</label>' 
                + '<span class="left mr20 marginStyle">' 
                + '<input type="radio" class="margin-yes left" name="style" checked="checked" id="margin-yes">' 
                + '<label class="form-font left" for="margin-yes">&nbsp;保留</label>' 
                + '</span>' 
                + '<span class="left mr20 marginStyle">' 
                + '<input type="radio" class="margin-no left" name="style" id="margin-no">' 
                + '<label class="form-font left" for="margin-no">&nbsp;消除</label>' 
                + '</span>' 
                + '</fieldset>' 
                + '<fieldset class="form-group edit-content-tit">' 
                + '<label class="form-font mt8">内容标题：</label>' 
                + '<input type="text" class="form-control form-text showcase-c-tit" placeholder="请输入标题内容">' 
                + '</fieldset>' 
                + '<fieldset class="form-group edit-content-content">' 
                + '<label class="form-font">内容说明：</label>' 
                + '<textarea class="form-control form-textarea showcase-c-content" rows="5" placeholder="请添加橱窗说明"></textarea>' 
                + '</fieldset>' 
                + '<div class="upload-image">' 
                + '<ul class="upload-success">' 
                + '<li class="imagesList clearfix">' 
                + '<span class="pic left">' 
                + '<div class="modify-images"><input type="file" class="update-pic"></div>' 
                + '<span class="update-image">+</span>' 
                + '<img src="images/small_images01.jpg" alt="">' 
                + '</span>' 
                + '<fieldset class="form-group u-imginfor">' 
                + '<label class="form-font left">链接地址：</label>' 
                + '<select class="form-control form-select left">' 
                + '<option value="">无链接</option>' 
                + '<option value="">店铺首页</option>' 
                + '</select>' 
                + '<input type="text" class="form-control form-text linkweb left">' 
                + '</fieldset>' 
                + '<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>' 
                + '</li>' 
                + '<li class="imagesList clearfix">' 
                + '<span class="pic left">' 
                + '<div class="modify-images"><input type="file" class="update-pic"></div>' 
                + '<span class="update-image">+</span>' 
                + '<img src="images/small_images01.jpg" alt="">' 
                + '</span>' 
                + '<fieldset class="form-group u-imginfor">' 
                + '<label class="form-font left">链接地址：</label>' 
                + '<select class="form-control form-select left">' 
                + '<option value="">无链接</option>' 
                + '<option value="">店铺首页</option>' 
                + '</select>' 
                + '<input type="text" class="form-control form-text linkweb left">' 
                + '</fieldset>' 
                + '<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>' 
                + '</li>' 
                + '</ul>' 
                + '</div>' 
                + '</div>' 
                + '<div class="edit-style-info clearfix edit-info-container" style="display:none">' 
                + '<span class="left">调整间距：</span>' 
                + '<div class="space-box">'

                +'<div class="adjust-space">' 
                + '<div class="mg-top">' 
                + '<div class="margin-top clearfix">' + '<input type="text" class="form-control space-num left mgTop" value="5"><span class="left unit">PX</span>' + '</div>' + '<i class="icon iconfont font-gcolor">&#xe613;</i>' + '</div>' + '<div class="mg-middle clearfix">' + '<div class="mg-left left clearfix">' + '<div class="margin-left left">' + '<span>0</span><span class="unit">PX</span>' + '</div>' + '<i class="icon iconfont left">&#xe614;</i>' + '</div>' + '<div class="mg-box left">'

                + '</div>' + '<div class="mg-right left clearfix">' + '<i class="icon iconfont left">&#xe615;</i>' + '<div class="margin-right left">' + '<span>0</span><span class="unit">PX</span>' + '</div>'

                + '</div>' + '</div>' + '<div class="mg-top">' + '<i class="icon iconfont font-gcolor">&#xe616;</i>' + '<div class="margin-top clearfix">' + '<input type="text" class="form-control space-num left mgBottom" value="5"><span class="left unit">PX</span>' + '</div>' + '</div>' + '</div>' + '<div class="default-space clearfix">' + '<input type="checkbox" class="left DefaultSpace" id="TDefaultSpace">&nbsp;<label class="font left" for="TDefaultSpace">默认边距</label>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>';
                return showcase_edit;
            }
        }
        //鼠标移到图片上，修改图片
    function imgMouseOver() {
        $(".temp-edit").on('mouseover', '.pic', function() {
            $(this).find(".update-image").show();
        });
        $(".temp-edit").on('mouseout', '.pic', function() {
            $(this).find(".update-image").hide();
        });
    }
    imgMouseOver();
    // 添加标题模块
    function addFirstShowCase() {
        $(".nav-showcase").click(function() {
            $(".temp-box").append(add_module.showCaseBox());
            if ($(".temp-box").has('.showcaseBox').length > 0) {
                addShowCaseBox();
            } else {
                return false;
            }
        });
    }


    function addNextShowCase() {

        $(".temp-edit").on('click', '.nav-showcase', function() {
            $(".temp-box .temp-active").after(add_module.showCaseBox());
            $(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
            $(".temp-edit").empty();
            $(".temp-edit").append(edit_module.showCaseEdit());
            var c1_h = $('.temp-box .temp-active').position().top;
            $(".temp-edit").css('top', c1_h + 145);
            saveShowCaseStyle();
            setShowCaseStyle();
            common.setSpace();
            common.addContent();
            common.mouseMove();

        });
    }


    // 点击标题
    function clickShowCase() {
        $(".temp-box").on('click', '.showcaseBox .shade', function() {
            $(this).closest(".showcaseBox").each(function() {
                $(this).siblings().removeClass('temp-active');
                $(this).addClass('temp-active');
                $(".temp-edit").empty();
                $(".temp-edit").append(edit_module.showCaseEdit());
                var c1_h = $(this).closest(".showcaseBox").position().top;
                $(".temp-edit").css('top', c1_h + 145);

                // 保存内容
                $(".temp-edit .showcase-tit-text").val($('.temp-active .showcase-box').find(".showcase-title").text());
                $(".temp-edit .showcase-c-tit").val($('.temp-active .showcase-box').find(".showcase-intro-tit").text());
                $(".temp-edit .showcase-c-content").val($('.temp-active .showcase-box').find(".showcase-intro-content").text());
                  var left = $(".temp-box .temp-active .big-left");
                  var right = $(".temp-box .temp-active .big-right");
                  var list = $(".temp-box .temp-active .small-list");
                    if(left.css('display') == 'block'){
                        $(".temp-edit .showcase-edit .left-one").attr("checked","checked");
                        var space = $(".temp-box .temp-active .big-left .item-big").css("margin-right");
                        if(space=='1px'){
                           $(".temp-box .temp-active .big-left .item-big").css({
                              "float":"left",
                              "width": "66.6%",
                              "margin-right":"1px",
                              "margin-left":"0"
                            });
                            $(".temp-box .temp-active .big-left .item-small").css({
                              "float": "left",
                              "width": "33%",
                              "margin-left":"0"
                            });
                           $(".temp-edit .showcase-edit .margin-yes").attr("checked","checked");
                         }else if(space=="0px"){
                            $(".temp-box .temp-active .big-left .item-big").css({
                              "width": "66.66%",
                              "margin-right": "0",
                              "float": "left"
                            });
                            $(".temp-box .temp-active .big-left .item-small").css({
                              "float": "left",
                              "width": "33.33%"
                            });
                           $(".temp-edit .showcase-edit .margin-no").attr("checked","checked");
                         }
                         
                    }else if(right.css('display') == 'block'){
                        $(".temp-edit .showcase-edit .right-one").attr("checked","checked");
                        var space = $(".temp-box .temp-active .big-right .item-big").css("margin-left");
                        if(space=='1px'){
                          $(".temp-box .temp-active .big-right .item-big").css({
                          "float": "right",
                          "width": "66.66%",
                          "margin-left":"1px",
                          "margin-right":"0"
                        });
                        $(".temp-box .temp-active .big-right .item-small").css({
                          "float": "right",
                          "width": "33%",
                          "margin-left":"0"
                        });
                           $(".temp-edit .showcase-edit .margin-yes").attr("checked","checked");
                         }else if(space=="0px"){
                            $(".temp-box .temp-active .big-right .item-big").css({
                              "float": "right",
                              "width": "66.66%",
                              "margin-left":"0",
                              "margin-right":"0"
                            });
                            $(".temp-box .temp-active .big-right .item-small").css({
                              "float": "right",
                              "width": "33%",
                              "margin-left":"0"
                            });
                            $(".temp-edit .showcase-edit .margin-no").attr("checked","checked");
                         }
                    }else if(list.css('display') == 'block'){
                        $(".temp-edit .showcase-edit .three-col").attr("checked","checked");
                        var space = $(".temp-box .temp-active .small-list .item-small").css("margin-left");
                         if(space=='1px'){
                            $(".temp-box .temp-active .small-list li").css("width","33%");
                            $(".temp-box .temp-active .small-list .item-small").css({
                              "margin-left":"1px"
                            });
                           $(".temp-edit .showcase-edit .margin-yes").attr("checked","checked");
                         }else if(space=="0px"){
                            
                            $(".temp-box .temp-active .small-list li").css({
                              "float": "left",
                              "width": "33.33%",
                              "margin-left": "0"
                            });
                            $(".temp-edit .showcase-edit .margin-no").attr("checked","checked");
                         }
                    }
                   
                saveShowCaseStyle();
                setShowCaseStyle();
                common.setSpace();
                common.addContent();
                common.mouseMove();
            });
        });
    }


    // 添加标题模块
    function addShowCaseBox() {
        $(".temp-box .showcaseBox").each(function() {
            $(this).siblings().removeClass('temp-active');
            $(this).addClass('temp-active');
            $(".temp-edit").empty();
            $(".temp-edit").append(edit_module.showCaseEdit());
            var c1_h = $(this).position().top;
            $(".temp-edit").css('top', c1_h + 145);
            saveShowCaseStyle();
            setShowCaseStyle();
            common.setSpace();
            common.addContent();
            common.mouseMove();

        })
    }
    //设置样式
  function setShowCaseStyle() {
  $(".picShow").bind('click',
  function() {
    $(".temp-box .temp-active .showcase-body li").css("margin-top", "1px");
    if ($(".left-one").prop("checked") == true) {
      $(".temp-box .temp-active .showcase-body").removeClass().addClass("showcase-body big-left clearfix");
      var height = $(".temp-box .temp-active .showcase-body .big-left .item-big img").height();
      $(".temp-box .temp-active .big-left .showcase-list").height(height);
      if ($(".margin-yes").prop("checked") == true) {

        $(".temp-box .temp-active .big-left .item-big").css({
          "float":"left",
          "width": "66.6%",
          "margin-right":"1px",
          "margin-left":"0"
        });
        $(".temp-box .temp-active .big-left .item-small").css({
          "float": "left",
          "width": "33%",
          "margin-left":"0"

        });
      } else if ($(".margin-no").prop("checked") == true) {

         $(".temp-box .temp-active .big-left .item-big").css({
          "width": "66.66%",
          "margin-right": "0",
          "float": "left"
        });
        $(".temp-box .temp-active .big-left .item-small").css({
          "float": "left",
          "width": "33.33%"
        });
        $(".temp-box .temp-active .big-left .item-small").eq(1).css("margin-top", "0");
      }
    } else if ($(".right-one").prop("checked") == true) {
      $(".temp-box .temp-active .showcase-body").removeClass().addClass("showcase-body big-right clearfix");
      var height = $(".temp-box .temp-active .showcase-body .big-right .item-big img").height();
      $(".temp-box .temp-active .big-right .showcase-list").height(height);
      if ($(".margin-yes").prop("checked") == true) {

        $(".temp-box .temp-active .big-right .item-big").css({
          "float": "right",
          "width": "66.66%",
          "margin-left":"1px",
          "margin-right":"0"
        });
        $(".temp-box .temp-active .big-right .item-small").css({
          "float": "right",
          "width": "33%",
          "margin-left":"0"
        });

      } else if ($(".margin-no").prop("checked") == true) {

       $(".temp-box .temp-active .big-right .item-big").css({
            "float": "right",
          "width": "66.66%",
          "margin-left": "0"
        });
        $(".temp-box .temp-active .big-right .item-small").css({
          "float": "right",
          "width": "33.33%"
        });
        $(".temp-box .temp-active .big-right .item-small").eq(1).css("margin-top", "0");

      }
    } else if ($(".three-col").prop("checked") == true) {
      $(".temp-box .temp-active .showcase-body").removeClass().addClass("showcase-body small-list clearfix");
      var height = $(".temp-box .temp-active .showcase-body .small-list .item-big img").height();
      $(".temp-box .temp-active .small-list .showcase-list").height(height);
      if ($(".margin-yes").prop("checked") == true) {

        $(".temp-box .temp-active .small-list li").css("width","33%");
        $(".temp-box .temp-active .small-list .item-small").css({
          "margin-left":"1px"
        });

      } else if ($(".margin-no").prop("checked") == true) {

       $(".temp-box .temp-active .small-list li").css({
          "float": "left",
          "width": "33.33%",
          "margin-left": "0"
        });
      }
    }
  });
  $(".marginStyle").bind('click',
  function() {
    if ($(".margin-yes").prop("checked") == true) {

      $(".temp-box .temp-active .showcase-body li").css("margin-top", "1px");
      if ($(".left-one").prop("checked") == true) {
        $(".temp-box .temp-active .big-left .item-big").css({
          "float":"left",
          "width": "66.6%",
          "margin-right":"1px"
        });
        $(".temp-box .temp-active .big-left .item-small").css({
          "float": "left",
          "width": "33%"
        });

      } else if ($(".right-one").prop("checked") == true) {
        $(".temp-box .temp-active .big-right .item-big").css({
          "float": "right",
          "width": "66.66%",
          "margin-left":"1px"
        });
        $(".temp-box .temp-active .big-right .item-small").css({
          "float": "right",
          "width": "33%"
        });

      } else if ($(".three-col").prop("checked") == true) {
        $(".temp-box .temp-active .small-list .item-big").css("margin-left", "0");
        $(".temp-box .temp-active .small-list .item-small").css({
          "width": "33%",
          "margin-left":"1px"
        });
      }
    } else if ($(".margin-no").prop("checked") == true) {

      if ($(".left-one").prop("checked") == true) {
        $(".temp-box .temp-active .big-left .item-big").css({
          "width": "66.66%",
          "margin-right": "0",
          "float": "left"
        });
        $(".temp-box .temp-active .big-left .item-small").css({
          "float": "right",
          "width": "33.33%"
        });
        $(".temp-box .temp-active .big-left .item-small").eq(1).css("margin-top", "0");

      } else if ($(".right-one").prop("checked") == true) {
        $(".temp-box .temp-active .big-right .item-big").css({
          "width": "66.66%",
          "margin-left": "0"
        });
        $(".temp-box .temp-active .big-right .item-small").css({
          "float": "left",
          "width": "33.33%"
        });
        $(".temp-box .temp-active .big-right .item-small").eq(1).css("margin-top", "0");

      } else if ($(".three-col").prop("checked") == true) {
        $(".temp-box .temp-active .small-list li").css({
          "float": "left",
          "width": "33.33%",
          "margin-left": "0"
        });

      }
    }
  })

  // 鼠标离开橱窗标题编辑框把内容添加到模块中
  $(".temp-edit .showcase-tit-text").bind('blur',
  function() {
    var val = $(this).val();
    if (!val == '') {
      // 添加标题内容
      $('.temp-active .showcase-box').find(".showcase-title").text(val);

    }
  });
  // 鼠标离开橱窗内容标题编辑框把内容添加到模块中
  $(".temp-edit .showcase-c-tit").bind('blur',
  function() {
    var val = $(this).val();
    if (!val == '') {
      // 添加标题内容
      $('.temp-active .showcase-box').find(".showcase-intro-tit").text(val);

    }
  });
  // 鼠标离开橱窗内容编辑框把内容添加到模块中
  $(".temp-edit .showcase-c-content").bind('blur',
  function() {
    var val = $(this).val();
    if (!val == '') {
      // 添加标题内容
      $('.temp-active .showcase-box').find(".showcase-intro-content").text(val);

    }
  });
}
// 保存样式
function saveShowCaseStyle() {
  //保存间距
  var mt = $(".temp-box .temp-active").css("padding-top");
  var mb = $(".temp-box .temp-active").css("padding-bottom");
  var mtn = parseFloat(mt, 10);
  var mbn = parseFloat(mb, 10);
  $(".temp-edit .showcase-edit .mgTop").val(mtn);
  $(".temp-edit .showcase-edit .mgBottom").val(mbn);

}
return {
  addFirstShowCase: addFirstShowCase,
  addNextShowCase: addNextShowCase,
  clickShowCase: clickShowCase
}

});
