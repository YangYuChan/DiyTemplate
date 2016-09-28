define(["common"],function(common) {
  var add_module = {
    goodsBox: function() {
      var goods_box = '<div class="navTemp goods-box">' 
      + '<div class="goods-container">' 
      + '<div class="goodsBox goods-big-box clearfix">' 
      + '<ul class="clearfix">' 
      + '<li class="goods-style card-goods-style">' 
      + '<div class="goods-list clearfix">' 
      + '<a href="#" class="goods-img"><img src="images/goods_04.jpg" alt=""></a>' 
      + '<div class="goods-info">' 
      + '<a href="">' 
      + '<h4 class="goods-name">剃毛机剃毛球修剪器</h4>' 
      + '<h5 class="goods-intro">这里是商品简介，新款夏季防晒衫宽松舒适...</h5>' 
      + '</a>' 
      + '<div class="other-info clearfix">' 
      + '<span class="goods-price">￥9999.00</span>' 
      + '<a href="#" class="buy-btn buy-btn1"></a>' 
      + '</div>' 
      + '</div>' 
      + '</div>' 
      + '</li>' 
      + '<li class="goods-style card-goods-style">' 
      + '<div class="goods-list clearfix">' 
      + '<a href="#" class="goods-img"><img src="images/goods_04.jpg" alt=""></a>' 
      + '<div class="goods-info">' 
      + '<a href="">' 
      + '<h4 class="goods-name">剃毛机剃毛球修剪器</h4>' 
      + '<h5 class="goods-intro">这里是商品简介，新款夏季防晒衫宽松舒适...</h5>' 
      + '</a>' 
      + '<div class="other-info clearfix">' 
      + '<span class="goods-price">￥9999.00</span>' 
      + '<a href="#" class="buy-btn buy-btn1"></a>' 
      + '</div>' 
      + '</div>' 
      + '</div>' 
      + '</li>' 
      + '<li class="goods-style card-goods-style">' 
      + '<div class="goods-list clearfix">' 
      + '<a href="#" class="goods-img"><img src="images/goods_04.jpg" alt=""></a>' 
      + '<div class="goods-info">' 
      + '<a href="">' 
      + '<h4 class="goods-name">剃毛机剃毛球修剪器</h4>' 
      + '<h5 class="goods-intro">这里是商品简介，新款夏季防晒衫宽松舒适...</h5>' 
      + '</a>' 
      + '<div class="other-info clearfix">' 
      + '<span class="goods-price">￥9999.00</span>' 
      + '<a href="#" class="buy-btn buy-btn1"></a>' 
      + '</div>' 
      + '</div>' 
      + '</div>' 
      + '</li>' 
      + '</ul>' 
      + '</div>' 
      + '<div class="shade"></div>' 
      + '<div class="diy-actions">' 
      + '<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>' 
      + '<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>' 
      + '</div>' 
      + '</div>' 
      + '</div>';
      return goods_box;
    },
    goodsList: function() {
      var goods_list = '<div class="popup-box">' 
      + '<div class="black"></div> ' 
      + '<div class="choice-goods"> ' 
      + '<h5 class="popup-title clearfix"> <span class="tit-font left">选择商品</span> <a href="#" class="popup-close right"><i class="icon iconfont"></i> </a> </h5>' 
      + '<div class="filtrate-box clearfix"> ' 
      + '<div class="filtrate-tags left"> ' 
      + '<span class="font">热门标签：</span> ' 
      + '<a href="" class="tags-info current">新品</a> ' 
      + '<a href="" class="tags-info">全部</a>' 
      + '</div> ' 
      + '<form action=""> ' 
      + ' <div class="filtrate-condition right">' 
      + '<fieldset class="form-group edit-content-content"> ' 
      + '<select class="form-control form-select left"> <option value="">商品名称</option> <option value="">商品编号</option> </select> ' 
      + '<input type="text" class="form-control form-text left" /> ' 
      + '<input type="button" value="搜索" class="btn btn-primary release" /> ' 
      + '</fieldset> ' 
      + '</div> ' 
      + ' </form> ' 
      + '</div> ' 
      + '<div class="goods-list-box clearfix">' 

      + '<div class="no-goods" style="display:none">' 
      + '<i class="icon iconfont">&#xe61a;</i>' 
      + '<span>您还未添加任何商品，请去添加商品</span>' 
      + '</div>' 
      + '<div class="goods-lists"> ' 
      + '<table> ' 
      + '<tbody>' 
      + '<tr> ' 
      + '<th width="10%"><input type="checkbox" /></th>' 
      + '<th width="50%">商品名称</th>' 
      + '<th width="15%">商品编号</th> ' 
      + '<th width="10%">售价</th> ' 
      + '<th width="15%">创建时间</th>' 
      + '</tr> ' 
      + '<tr> ' 
      + '<td><input type="checkbox" /></td>' 
      + '<td><img src="images/small_images01.jpg" width="50" height="50" alt="" /> <span>新款夏季格子文艺中长款连衣裙</span></td> ' 
      + '<td>CNDMGFK-201</td> ' 
      + '<td>89.00</td>' 
      + '<td>2016-07-20</td> ' 
      + '</tr> ' 
      + '<tr> ' 
      + '<td><input type="checkbox" /></td>' 
      + '<td><img src="images/small_images01.jpg" width="50" height="50" alt="" /> <span>新款夏季格子文艺中长款连衣裙</span></td> ' 
      + '<td>CNDMGFK-201</td> ' 
      + '<td>89.00</td> ' 
      + '<td>2016-07-20</td> ' 
      + '</tr>' 
      + '<tr> ' 
      + '<td><input type="checkbox" /></td> ' 
      + '<td><img src="images/small_images01.jpg" width="50" height="50" alt="" /> <span>新款夏季格子文艺中长款连衣裙</span></td> ' 
      + '<td>CNDMGFK-201</td> ' 
      + '<td>89.00</td> ' 
      + '<td>2016-07-20</td>' 
      + '</tr>' 
      + '<tr>' 
      + '<td><input type="checkbox" /></td>' 
      + '<td><img src="images/small_images01.jpg" width="50" height="50" alt="" /> <span>新款夏季格子文艺中长款连衣裙</span></td>' 
      + '<td>CNDMGFK-201</td> ' 
      + '<td>89.00</td> ' 
      + '<td>2016-07-20</td> ' 
      + '</tr> ' 
      + '</tbody>' 
      + '</table> ' 
      + '</div> ' 
      + '<div class="choice-num left">' 
      + ' 您已选择了0个商品' 
      + '</div>' 
      + '<div class="Pagination right">' 
      + ' <a href="" class="prev">&lt;</a>' 
      + '<span class="num">&nbsp;1/14&nbsp;</span>' 
      + '<a href="" class="next">&gt;</a>' 
      + '</div> ' 
      + '</div>' 
      + '<div class="pro-btn-box clearfix">' 
      + '<span> <input type="button" value="确定" class="btn btn-primary preview" /> </span> ' 
      + '<span> <input type="button" value="取消" class="btn btn-primary cancel" /> </span> ' 
      + '</div> ' 
      + ' </div>' 
      + '</div>';
      return goods_list;
    }　　
  };
  /* 编辑模块
    noticeEdit  编辑公告
    titleEdit   编辑标题
  */
  var edit_module = {
    goodsEdit: function() {
      var goods_edit = '<div class="goods-edit">' 
      + '<div class="edit-box">' 
      + '<h4 class="edit-title">商品</h4> ' 
      + '<ul class="edit-type">' 
      + '<li class="edit-content-font  edit-type-acitve">内容</li>' 
      + '<li class="edit-style-font">样式</li>' 
      + '</ul> ' 
      + '<div class="edit-info">' 
      + '<div class="edit-content-info clearfix edit-info-container">' 
      + '<fieldset class="form-group edit-content-content goodsFirstShow">' 
      + '<label class="form-font" for="align-left">商品样式：</label>' 
      + '<span class="left mr20 showStyle"> <input type="radio" name="goods" class="goods-big left" id="goodsBig" checked="" /> <label class="form-font left" for="goodsBig">&nbsp;大图</label> </span>' 
      + '<span class="left mr20 showStyle"> <input type="radio" name="goods" class="goods-small left" id="goodsSmall" /> <label class="form-font left" for="goodsSmall">&nbsp;小图</label> </span>' 
      + '<span class="left mr20 showStyle"> <input type="radio" name="goods" class="goods-lists left" id="goodsList" /> <label class="form-font left" for="goodsList">&nbsp;列表</label> </span>' 
      + '<span class="left mr20 showStyle"> <input type="radio" name="goods" class="goods-other left" id="goodsOther" /> <label class="form-font left" for="goodsOther">&nbsp;一大两小</label> </span>' 
      + '</fieldset> ' 
      + '<div class="edit-controls-card">' 
      + '<fieldset class="form-group card-minimal-box">' 
      + '<div class="cardMinimalStyle clearfix left"> ' 
      + '<input type="radio" name="goodsShowStyle" class="cardStyle left" id="cardStyle" checked />' 
      + '<label class="form-font left" for="cardStyle">&nbsp;卡片样式</label>' 
      + '</div> ' 
      + '<div class="cardMinimalStyle clearfix left">' 
      + '<input type="radio" name="goodsShowStyle" class="minimalStyle left" id="minimalStyle"/> ' 
      + '<label class="form-font left" for="minimalStyle">&nbsp;极简样式</label>' 
      + '</div> ' 
      + '</fieldset> ' 
      + '<fieldset class="form-group edit-content-content goodsSecondShow">' 
      + '<div class="goodsContentStyle goodsContentStyle1 clearfix"> ' 
      + '<input type="checkbox" class="goodsPrice left" id="goodsPrice" checked="" />' 
      + '<label class="form-font left" for="goodsPrice">&nbsp;显示价格</label>' 
      + '</div> ' 
      + '<div class="goodsContentStyle goodsContentStyle2 clearfix">' 
      + '<input type="checkbox" class="goodsName left" id="goodsName" checked="" /> ' 
      + '<label class="form-font left" for="goodsName">&nbsp;显示商品名称</label>' 
      + '</div> ' 
      + '<div class="goodsContentStyle goodsContentStyle3 clearfix"> ' 
      + '<input type="checkbox" class="introShow left" id="introShow" checked="" /> ' 
      + '<label class="form-font left" for="introShow">&nbsp;显示商品简介</label>' 
      + '</div> ' 
      + '<div class="goodsContentStyle goodsContentStyle4 clearfix"> ' 
      + '<input type="checkbox" class="buyBtn left" id="buyBtn" checked="" /> ' 
      + '<label class="form-font left" for="buyBtn">&nbsp;显示购物车按钮</label>' 
      + '</div> ' 
      + '</fieldset> ' 
      + '<fieldset class="form-group edit-content-content buyBtnStyle"> ' 
      + '<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle1 left" id="btnStyle1" checked="" /> <label class="form-font left" for="btnStyle1">&nbsp;样式1</label> </span>' 
      + '<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle2 left" id="btnStyle2" /> <label class="form-font left" for="btnStyle2">&nbsp;样式2</label> </span> ' 
      + '<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle3 left" id="btnStyle3" /> <label class="form-font left" for="btnStyle3">&nbsp;样式3</label> </span> ' 
      + '<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle4 left" id="btnStyle4" /> <label class="form-font left" for="btnStyle4">&nbsp;样式4</label> </span>' 
      + '<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle5 left" id="btnStyle5" /> <label class="form-font left" for="btnStyle5">&nbsp;样式5</label> </span> ' 
      + '</fieldset> ' 
      + '</div>' 
      + '<div class="upload-image"> ' + '<ul class="upload-success">' + '<li class="imagesList clearfix">' + '<span class="pic left">' + '<img src="images/goods_01.jpg" alt="">' + '</span>' + '<div class="upload-goods-info  left">' + '<p>新款夏季文艺格子中长款连衣裙</p>' + '<p>￥89.00</p>' + '</div>' + '<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>' + '</li>' + '<li class="imagesList clearfix">' + '<span class="pic left">' + '<img src="images/goods_02.jpg" alt="">' + '</span>' + '<div class="upload-goods-info left">' + '<p>新款夏季文艺格子中长款连衣裙</p>' + '<p>￥89.00</p>' + '</div>' + '<a href="#" class="delete"><i class="icon iconfont">&#xe61e;</i></a>' + '</li>' + '</ul>' + '<a href="#" class="choice-img-btn"><b>+</b>选择商品</a>' + '<p class="remark"><b class="red">*</b>最多可添加12个商品</p>' + '</div> ' + '</div> ' + '<div class="edit-style-info clearfix edit-info-container" style="display:none">' + '<span class="left">调整间距：</span>' + '<div class="space-box"> ' + '<div class="adjust-space">' + '<div class="mg-top"> ' + '<div class="margin-top clearfix">' + '<input type="text" class="form-control space-num left mgTop" value="5" />' + '<span class="left unit">PX</span> ' + '</div> ' + '<i class="icon iconfont font-gcolor"></i>' + '</div> ' + '<div class="mg-middle clearfix">' + '<div class="mg-left left clearfix"> ' + '<div class="margin-left left"> ' + '<span>0</span>' + '<span class="unit">PX</span>' + '</div>' + '<i class="icon iconfont left"></i>' + '</div>' + '<div class="mg-box left">' + '</div>' + '<div class="mg-right left clearfix">' + '<i class="icon iconfont left"></i>' + '<div class="margin-right left">' + '<span>0</span>' + '<span class="unit">PX</span>' + '</div>' + '</div>' + '</div>' + '<div class="mg-top">' + '<i class="icon iconfont font-gcolor"></i>' + '<div class="margin-top clearfix">' + '<input type="text" class="form-control space-num left mgBottom" value="5" />' + '<span class="left unit">PX</span>' + '</div>' + '</div>' + '</div>' + '<div class="default-space clearfix">' + '<input type="checkbox" class="left DefaultSpace" id="TDefaultSpace" />&nbsp;' + '<label class="font left" for="TDefaultSpace">默认边距</label>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>';
      return goods_edit;
    }
  }

  // 添加标题模块
  function addFirstGoods() {
    $(".nav-good").click(function() {
      $(".temp-box").append(add_module.goodsBox());
      if ($(".temp-box").has('.goods-box').length > 0) {
        addGoodsBox();
      } else {
        return false;
      }
    });
  }
  $(".diy-body").on("click", ".popup-close",
  function() {
    $(".popup-box").remove();
  })

  $(".temp-edit").on('click', '.choice-img-btn',
  function() {
    $("body").append(add_module.goodsList());
    var w = $(".choice-goods").width();
    var h = $(".choice-goods").height();
    var ml = w / 2;
    var mt = h / 2;
    $(".choice-goods").css({
      "left": "50%",
      "top": "50%",
      "margin-left": -ml,
      "margin-top": -mt
    });
    $("body").css("overflow", "hidden")
  });

  function addNextGoods() {

    $(".temp-edit").on('click', '.nav-good',
    function() {
      $(".temp-box .temp-active").after(add_module.goodsBox());
      $(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
      $(".temp-edit").empty();
      $(".temp-edit").append(edit_module.goodsEdit());
      var c1_h = $('.temp-box .temp-active').position().top;
      $(".temp-edit").css('top', c1_h + 145);
      setGoodsStyle();
      saveGoodsStyle();
      common.setSpace();
      common.addContent();
      common.mouseMove();

    });
  }

  // 点击标题
  function clickGoods() {
    $(".temp-box").on('click', '.goods-box .shade',
    function() {
      $(this).closest(".goods-box").each(function() {
        $(this).siblings().removeClass('temp-active');
        $(this).addClass('temp-active');
        $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.goodsEdit());
        var c1_h = $(this).closest(".goods-box").position().top;
        $(".temp-edit").css('top', c1_h + 145);
        setGoodsStyle();
        saveGoodsStyle();
        common.setSpace();
        common.addContent();
        common.mouseMove();
      });
    });
  }

  // 添加标题模块
  function addGoodsBox() {
    $(".temp-box .goods-box").each(function() {
      $(this).siblings().removeClass('temp-active');
      $(this).addClass('temp-active');
      $(".temp-edit").empty();
      $(".temp-edit").append(edit_module.goodsEdit());
      var c1_h = $(this).position().top;
      $(".temp-edit").css('top', c1_h + 145);
      setGoodsStyle();
      saveGoodsStyle();
      common.setSpace();
      common.addContent();
      common.mouseMove();

    })
  }
  //设置一级样式
  function setGoodsStyle() {
    $(".showStyle").bind('click',
    function() {
      $(".goodsContentStyle1").show();
      $(".goodsContentStyle2").show();
      $(".goodsContentStyle3").show();
      $(".goodsContentStyle4").show();
      // $(".buyBtnStyle").show();
      if ($(".goods-big").prop("checked") == true) {
        $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-big-box clearfix");
        if ($(".minimalStyle").prop("checked") == true) {
          $(".goodsContentStyle3").hide();
          $(".goodsContentStyle4").hide();
          $(".buyBtnStyle").hide();
          if ($(".goodsPrice").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .goods-price").show();
            $(".temp-active .goods-big-box .min-goods-style .goods-name").css("border-radius","3px 0 0 3px");
            $(".temp-active .goods-big-box .min-goods-style .goods-name").css("width","67%");
          }else{
            $(".temp-active .goods-big-box .min-goods-style .goods-price").hide();
            $(".temp-active .goods-big-box .min-goods-style .goods-name").css("border-radius","3px");
            $(".temp-active .goods-big-box .min-goods-style .goods-name").css("width","94%");

          }
          if ($(".goodsName").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .goods-name").show();
            $(".temp-active .goods-big-box .min-goods-style .goods-price").css("border-radius","0 3px 3px 0");
          }else{
            $(".temp-active .goods-big-box .min-goods-style .goods-name").hide();
            $(".temp-active .goods-big-box .min-goods-style .goods-price").css("border-radius","3px");

          }
          if ($(".introShow").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .goods-intro").hide();
          }else{
            $(".temp-active .goods-big-box .min-goods-style .goods-intro").hide();
          }
          if ($(".buyBtn").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }else{
            $(".temp-active .goods-big-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }
        }
      } else if ($(".goods-small").prop("checked") == true) {
        $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-small-box clearfix");
        if ($(".minimalStyle").prop("checked") == true) {
          $(".goodsContentStyle2").hide();
          $(".goodsContentStyle3").hide();
          $(".goodsContentStyle4").hide();
          $(".buyBtnStyle").hide();
          if ($(".goodsPrice").prop("checked") == true) {
            $(".temp-active .goods-small-box .min-goods-style .goods-price").show();
            $(".temp-active .goods-small-box .min-goods-style .goods-price").css("border-radius","3px");
          }else{
            $(".temp-active .goods-small-box .min-goods-style .goods-price").hide();
          }
          if ($(".goodsName").prop("checked") == true) {
            $(".temp-active .goods-small-box .min-goods-style .goods-name").hide();
          }else{
            $(".temp-active .goods-small-box .min-goods-style .goods-name").hide();

          }
          if ($(".introShow").prop("checked") == true) {
            $(".temp-active .goods-small-box .min-goods-style .goods-intro").hide();
          }else{
            $(".temp-active .goods-small-box .min-goods-style .goods-intro").hide();
          }
          if ($(".buyBtn").prop("checked") == true) {
            $(".temp-active .goods-small-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }else{
            $(".temp-active .goods-small-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }
        }
      } else if ($(".goods-lists").prop("checked") == true) {
        $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-list-box clearfix");
        if ($(".minimalStyle").prop("checked") == true) {
          $(".goodsContentStyle1").hide();
          $(".goodsContentStyle2").hide();
          if ($(".goodsPrice").prop("checked") == true) {
            $(".temp-active .goods-list-box .min-goods-style .goods-price").show();
          }else{
            $(".temp-active .goods-list-box .min-goods-style .goods-price").show();
          }
          if ($(".goodsName").prop("checked") == true) {
            $(".temp-active .goods-list-box .min-goods-style .goods-name").show();
          }else{
            $(".temp-active .goods-list-box .min-goods-style .goods-name").show();
          }
          if ($(".introShow").prop("checked") == true) {
            $(".temp-active .goods-list-box .min-goods-style .goods-intro").show();
          }else{
            $(".temp-active .goods-list-box .min-goods-style .goods-intro").hide();
          }
          if ($(".buyBtn").prop("checked") == true) {
            $(".temp-active .goods-list-box .min-goods-style .buy-btn").show();
            $(".temp-edit .goods-edit .buyBtnStyle").show();

          }else{
            $(".temp-active .goods-list-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }
        }
      } else if ($(".goods-other").prop("checked") == true) {
        $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-other-box clearfix");
        if ($(".minimalStyle").prop("checked") == true) {
          $(".goodsContentStyle3").hide();
          $(".goodsContentStyle4").hide();
          $(".buyBtnStyle").hide();
          if ($(".goodsPrice").prop("checked") == true) {

            $(".temp-active .goods-other-box .min-goods-style .goods-price").show();
             $(".temp-active .goods-other-box .min-goods-style").each(function(i){
              var len =  $(".temp-active .goods-other-box .min-goods-style").length;
               if(i<len)
             $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-name").css("border-radius","3px 0 0 3px");
              $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-name").css("width","67%");
            });
            
          }else{
            $(".temp-active .goods-other-box .min-goods-style .goods-price").hide();
            $(".temp-active .goods-other-box .min-goods-style .goods-name").css("border-radius","3px");
            $(".temp-active .goods-other-box .min-goods-style .goods-name").css("width","94%");
          }
          if ($(".goodsName").prop("checked") == true) {
             $(".temp-active .goods-other-box .min-goods-style .goods-name").hide();
             $(".temp-active .goods-other-box .min-goods-style .goods-price").css("border-radius","3px");
             $(".temp-active .goods-other-box .min-goods-style").each(function(i){
              var len =  $(".temp-active .goods-other-box .min-goods-style").length;
               if(i<len)
               $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-name").show();
             $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-price").css("border-radius","0 3px 3px 0");
            });

          }else{
            $(".temp-active .goods-other-box .min-goods-style .goods-name").hide();
            $(".temp-active .goods-other-box .min-goods-style .goods-price").css("border-radius","3px");
         
          }
          if ($(".introShow").prop("checked") == true) {
            $(".temp-active .goods-other-box .min-goods-style .goods-intro").hide();
          }else{
            $(".temp-active .goods-other-box .min-goods-style .goods-intro").hide();
          }
          if ($(".buyBtn").prop("checked") == true) {
            $(".temp-active .goods-other-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }else{
            $(".temp-active .goods-other-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }
        }
      }
    });
    //二级样式切换
    $(".cardMinimalStyle").bind('click',
    function() {
      if ($(".minimalStyle").prop("checked") == true) {
        $(".temp-active").addClass(" min-goods-box");
        $(".temp-active .goods-style").removeClass(" card-goods-style").addClass(" min-goods-style");
        if ($(".goods-big").prop("checked") == true) {
          $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-big-box clearfix");
          $(".goodsContentStyle3").hide();
          $(".goodsContentStyle4").hide();
          $(".buyBtnStyle").hide();
          if ($(".goodsPrice").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .goods-price").show();
              $(".temp-active .goods-big-box .min-goods-style .goods-name").css("border-radius","3px 0 0 3px");
              $(".temp-active .goods-big-box .min-goods-style .goods-name").css("width","67%");
          }else{
            $(".temp-active .goods-big-box .min-goods-style .goods-price").hide();
            $(".temp-active .goods-big-box .min-goods-style .goods-name").css("border-radius","3px");
            $(".temp-active .goods-big-box .min-goods-style .goods-name").css("width","94%");
          }
          if ($(".goodsName").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .goods-name").show();
            $(".temp-active .goods-big-box .min-goods-style .goods-price").css("border-radius","0 3px 3px 0");
          }else{
            $(".temp-active .goods-big-box .min-goods-style .goods-name").hide();
            $(".temp-active .goods-big-box .min-goods-style .goods-price").css("border-radius","3px");
          }
          if ($(".introShow").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .goods-intro").hide();
          }else{
            $(".temp-active .goods-big-box .min-goods-style .goods-intro").hide();
          }
          if ($(".buyBtn").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }else{
            $(".temp-active .goods-big-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }
        } else if ($(".goods-small").prop("checked") == true) {
          $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-small-box clearfix");
          $(".goodsContentStyle2").hide();
          $(".goodsContentStyle3").hide();
          $(".goodsContentStyle4").hide();
          $(".buyBtnStyle").hide();
          if ($(".goodsPrice").prop("checked") == true) {
            $(".temp-active .goods-small-box .min-goods-style .goods-price").show();
             $(".temp-active .goods-small-box .min-goods-style .goods-price").css("border-radius","3px");
          }else{
            $(".temp-active .goods-small-box .min-goods-style .goods-price").hide();
          }
          if ($(".goodsName").prop("checked") == true) {
            $(".temp-active .goods-small-box .min-goods-style .goods-name").hide();
          }else{
            $(".temp-active .goods-small-box .min-goods-style .goods-name").hide();
          }
          if ($(".introShow").prop("checked") == true) {
            $(".temp-active .goods-small-box .min-goods-style .goods-intro").hide();
          }else{
            $(".temp-active .goods-small-box .min-goods-style .goods-intro").hide();
          }
          if ($(".buyBtn").prop("checked") == true) {
            $(".temp-active .goods-small-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }else{
            $(".temp-active .goods-small-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }
        } else if ($(".goods-lists").prop("checked") == true) {
          $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-list-box clearfix");
          $(".goodsContentStyle1").hide();
          $(".goodsContentStyle2").hide();
          if ($(".goodsPrice").prop("checked") == true) {
            $(".temp-active .goods-list-box .min-goods-style .goods-price").show();
          }else{
            $(".temp-active .goods-list-box .min-goods-style .goods-price").show();
          }
          if ($(".goodsName").prop("checked") == true) {
            $(".temp-active .goods-list-box .min-goods-style .goods-name").show();
          }else{
            $(".temp-active .goods-list-box .min-goods-style .goods-name").show();
          }
          if ($(".introShow").prop("checked") == true) {
            $(".temp-active .goods-list-box .min-goods-style .goods-intro").show();
          }else{
            $(".temp-active .goods-list-box .min-goods-style .goods-intro").hide();
          }
          if ($(".buyBtn").prop("checked") == true) {
            $(".temp-active .goods-list-box .min-goods-style .buy-btn").show();
            $(".temp-edit .goods-edit .buyBtnStyle").show();

          }else{
            $(".temp-active .goods-list-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }
        } else if ($(".goods-other").prop("checked") == true) {
          $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-other-box clearfix");
          $(".goodsContentStyle3").hide();
          $(".goodsContentStyle4").hide();
          $(".buyBtnStyle").hide();
          if ($(".goodsPrice").prop("checked") == true) {
            $(".temp-active .goods-other-box .min-goods-style .goods-price").show();
              $(".temp-active .goods-other-box .min-goods-style .goods-name").css("border-radius","3px 0 0 3px");
              $(".temp-active .goods-other-box .min-goods-style .goods-name").css("width","67%");
          
          }else{
            $(".temp-active .goods-other-box .min-goods-style .goods-price").hide();
              $(".temp-active .goods-other-box .min-goods-style .goods-name").css("border-radius","3px");
              $(".temp-active .goods-other-box .min-goods-style .goods-name").css("width","94%");
          }
          if ($(".goodsName").prop("checked") == true) {
             $(".temp-active .goods-other-box .min-goods-style .goods-name").hide();
              $(".temp-active .goods-other-box .min-goods-style .goods-price").css("border-radius","3px");
             $(".temp-active .goods-other-box .min-goods-style").each(function(i){
              var len =  $(".temp-active .goods-other-box .min-goods-style").length;
               if(i<len)
               $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-name").show();
             $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-price").css("border-radius","0 3px 3px 0");
            });
           

          }else{
            $(".temp-active .goods-other-box .min-goods-style .goods-name").hide();
            $(".temp-active .goods-other-box .min-goods-style .goods-price").css("border-radius","3px");
          }
          if ($(".introShow").prop("checked") == true) {
            $(".temp-active .goods-other-box .min-goods-style .goods-intro").hide();
          }else{
            $(".temp-active .goods-other-box .min-goods-style .goods-intro").hide();
          }
          if ($(".buyBtn").prop("checked") == true) {
            $(".temp-active .goods-other-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }else{
            $(".temp-active .goods-other-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }
        }
      } else if ($(".cardStyle").prop("checked") == true) {
        $(".goodsContentStyle1").show();
        $(".goodsContentStyle2").show();
        $(".goodsContentStyle3").show();
        $(".goodsContentStyle4").show();
        $(".buyBtnStyle").show();
        $(".temp-active").removeClass(" min-goods-box");
        $(".goods-style").removeClass(" min-goods-style").addClass(" card-goods-style");
         if ($(".goodsPrice").prop("checked") == true) {
            $(".temp-active .card-goods-style .goods-price").show();
          }else{
            $(".temp-active .card-goods-style .goods-price").hide();
          }
          if ($(".goodsName").prop("checked") == true) {
            $(".temp-active .card-goods-style .goods-name").show();
          }else{
            $(".temp-active .card-goods-style .goods-name").hide();
          }
          if ($(".introShow").prop("checked") == true) {
            $(".temp-active .card-goods-style .goods-intro").show();
          }else{
            $(".temp-active .card-goods-style .goods-intro").hide();
          }
          if ($(".buyBtn").prop("checked") == true) {
            $(".temp-active .card-goods-style .buy-btn").show();
            $(".temp-edit .goods-edit .buyBtnStyle").show();

          }else{
            $(".temp-active .card-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();

          }

        if ($(".goods-big").prop("checked") == true) {
          $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-big-box clearfix");
          
        } else if ($(".goods-small").prop("checked") == true) {
          $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-small-box clearfix");
        } else if ($(".goods-lists").prop("checked") == true) {
          $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-list-box clearfix");
        } else if ($(".goods-other").prop("checked") == true) {
          $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-other-box clearfix");
        }
      }
    });
    //设置商品内容显示
    $(".goodsContentStyle").bind('click',function() {
   
      if ($(".goodsPrice").prop("checked") == true) {
       $(".temp-active .card-goods-style .goods-price").show();
       $(".temp-active .min-goods-style .goods-price").show();
        $(".temp-active .goods-small-box .min-goods-style .goods-price").css("border-radius","3px");
         $(".temp-active .goods-big-box .min-goods-style .goods-name").css("border-radius","3px 0 0 3px");
         $(".temp-active .goods-big-box .min-goods-style .goods-name").css("width","67%");
          $(".temp-active .goods-other-box .min-goods-style").each(function(i){
              var len = $(".temp-active .goods-other-box .min-goods-style").length;
               if(i<len)
            $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-name").css("border-radius","3px 0 0 3px");
            $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-name").css("width","67%");
            
            });
      }else{
        $(".temp-active .card-goods-style .goods-price").hide();
       $(".temp-active .min-goods-style .goods-price").hide();
       $(".temp-active .goods-big-box .min-goods-style .goods-name").css("border-radius","3px");
       $(".temp-active .goods-big-box .min-goods-style .goods-name").css("width","94%");
         $(".temp-active .goods-other-box .min-goods-style .goods-name").css("border-radius","3px");
          $(".temp-active .goods-other-box .min-goods-style .goods-name").css("width","94%");
       $(".temp-active .goods-list-box .min-goods-style .goods-price").show();
      }
      if ($(".goodsName").prop("checked") == true) {
        if($(".minimalStyle").prop("checked") == true){
          if ($(".goods-big").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .goods-name").show();
            $(".temp-active .goods-big-box .min-goods-style .goods-price").css("border-radius","0 3px 3px 0");
          }else if($(".goods-small").prop("checked") == true){
            $(".temp-active .goods-small-box .min-goods-style .goods-name").hide();
          }else if($(".goods-lists").prop("checked") == true){
            $(".temp-active .goods-list-box .min-goods-style .goods-name").show();
          }else if($(".goods-other").prop("checked") == true){
             $(".temp-active .goods-other-box .min-goods-style .goods-name").hide();
             $(".temp-active .goods-other-box .min-goods-style").each(function(i){
              var len = $(".temp-active .goods-other-box .min-goods-style").length;
               if(i<len)
              $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-name").show();
            $(".temp-active .goods-other-box .min-goods-style").eq(3*i).find(".goods-price").css("border-radius","0 3px 3px 0");
            });
          }
        }else if($(".cardStyle").prop("checked") == true){
          $(".temp-active .card-goods-style .goods-name").show();
        }
      }else{
         $(".temp-active .card-goods-style .goods-name").hide();
         $(".temp-active .min-goods-style .goods-name").hide();
         $(".temp-active .goods-list-box .min-goods-style .goods-name").show();
         $(".temp-active .goods-big-box .min-goods-style .goods-price").css("border-radius","3px");
         $(".temp-active .goods-other-box .min-goods-style .goods-price").css("border-radius","3px");
      }
      if ($(".introShow").prop("checked") == true) {
         if($(".minimalStyle").prop("checked") == true){
          if ($(".goods-big").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .goods-intro").hide();
          }else if($(".goods-small").prop("checked") == true){
            $(".temp-active .goods-small-box .min-goods-style .goods-intro").hide();
          }else if($(".goods-lists").prop("checked") == true){
            $(".temp-active .goods-list-box .min-goods-style .goods-intro").show();
          }else if($(".goods-other").prop("checked") == true){
            $(".temp-active .goods-other-box .min-goods-style .goods-intro").hide();
          }
        }else if($(".cardStyle").prop("checked") == true){
          $(".temp-active .card-goods-style .goods-intro").show();
        }
      }else{
         $(".temp-active .card-goods-style .goods-intro").hide();
         $(".temp-active .min-goods-style .goods-intro").hide();
      }
      if ($(".buyBtn").prop("checked") == true) {
         if($(".minimalStyle").prop("checked") == true){
          if ($(".goods-big").prop("checked") == true) {
            $(".temp-active .goods-big-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();
          }else if($(".goods-small").prop("checked") == true){
            $(".temp-active .goods-small-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();
          }else if($(".goods-lists").prop("checked") == true){
            $(".temp-active .goods-list-box .min-goods-style .buy-btn").show();
            $(".temp-edit .goods-edit .buyBtnStyle").show();
          }else if($(".goods-other").prop("checked") == true){
            $(".temp-active .goods-other-box .min-goods-style .buy-btn").hide();
            $(".temp-edit .goods-edit .buyBtnStyle").hide();
          }
        }else if($(".cardStyle").prop("checked") == true){
          $(".temp-active .card-goods-style .buy-btn").show();
          $(".temp-edit .goods-edit .buyBtnStyle").show();
        }
      }else{
         $(".temp-active .card-goods-style .buy-btn").hide();
         $(".temp-active .min-goods-style .buy-btn").hide();
         $(".temp-edit .goods-edit .buyBtnStyle").hide();
      }
    });
    //设置按钮样式
    $(".buyBtnStyle").bind('click',
    function() {
      if ($(".btnStyle1").prop("checked") == true) {
        $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn1");
      } else if ($(".btnStyle2").prop("checked") == true) {
        $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn2");

      } else if ($(".btnStyle3").prop("checked") == true) {
        $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn3");

      } else if ($(".btnStyle4").prop("checked") == true) {
        $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn4");

      } else if ($(".btnStyle5").prop("checked") == true) {
        $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn5");
      }
    });
  }
  // 保存样式
  function saveGoodsStyle() {
    //保存间距
    var mt = $(".temp-box .temp-active").css("padding-top");
    var mb = $(".temp-box .temp-active").css("padding-bottom");
    var mtn = parseFloat(mt, 10);
    var mbn = parseFloat(mb, 10);
    $(".temp-edit .goods-edit .mgTop").val(mtn);
    $(".temp-edit .goods-edit .mgBottom").val(mbn);
    //保存商品显示方式
    var big = $(".temp-box .temp-active .goods-big-box");
    var small = $(".temp-box .temp-active .goods-small-box");
    var list = $(".temp-box .temp-active .goods-list-box");
    var other = $(".temp-box .temp-active .goods-other-box");
    var min = $(".temp-box .temp-active .min-goods-style");
    var card = $(".temp-box .temp-active .card-goods-style");
    // 保存商品信息
     var Gname = $(".temp-box .temp-active .goods-name");
    var Gintro = $(".temp-box .temp-active .goods-intro");
    var Gprice = $(".temp-box .temp-active .goods-price");
    var Gbtn = $(".temp-box .temp-active .buy-btn");

    if (big.css('display') == 'block') {
      $(".temp-edit .goods-edit .goods-big").attr("checked", "checked");
      if(min.length>1){
        $(".temp-edit .goods-edit .minimalStyle").attr("checked", "checked");
        $(".temp-edit .goods-edit .goodsContentStyle3").hide();
        $(".temp-edit .goods-edit .goodsContentStyle4").hide();
        $(".temp-edit .goods-edit .buyBtnStyle").hide();
      }else if (card.length>1){
        $(".temp-edit .goods-edit .cardStyle").attr("checked", "checked");
        $(".temp-edit .goods-edit .goodsContentStyle3").show();
        $(".temp-edit .goods-edit .goodsContentStyle4").show();
        $(".temp-edit .goods-edit .buyBtnStyle").show();
      }
        if (Gname.css('display') == 'block') {
          $(".temp-edit .goods-edit .goodsName").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .goodsName").attr("checked", false);
        }
        if (Gintro.css('display') == 'block') {
          $(".temp-edit .goods-edit .introShow").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .introShow").attr("checked", false);
        }
        if (Gprice.css('display') == 'block') {
          $(".temp-edit .goods-edit .goodsPrice").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .goodsPrice").attr("checked", false);
        }
        if (Gbtn.css('display') == 'block') {
          $(".temp-edit .goods-edit .buyBtn").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .buyBtn").attr("checked", false);
           $(".temp-edit .goods-edit .buyBtnStyle").hide();
        }
    } else if (small.css('display') == 'block') {
      $(".temp-edit .goods-edit .goods-small").attr("checked", "checked");
      if(min.length>1){
        $(".temp-edit .goods-edit .minimalStyle").attr("checked", "checked");
        $(".temp-edit .goods-edit .goodsContentStyle2").hide();
        $(".temp-edit .goods-edit .goodsContentStyle3").hide();
        $(".temp-edit .goods-edit .goodsContentStyle4").hide();
        $(".temp-edit .goods-edit .buyBtnStyle").hide();
    
      }else if (card.length>1){
        $(".temp-edit .goods-edit .cardStyle").attr("checked", "checked");
        $(".temp-edit .goods-edit .goodsContentStyle2").show();
        $(".temp-edit .goods-edit .goodsContentStyle3").show();
        $(".temp-edit .goods-edit .goodsContentStyle4").show();
        $(".temp-edit .goods-edit .buyBtnStyle").show();
   }
        if (Gname.css('display') == 'block') {
          $(".temp-edit .goods-edit .goodsName").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .goodsName").attr("checked", false);
        }
        if (Gintro.css('display') == 'block') {
          $(".temp-edit .goods-edit .introShow").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .introShow").attr("checked", false);
        }
        if (Gprice.css('display') == 'block') {
          $(".temp-edit .goods-edit .goodsPrice").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .goodsPrice").attr("checked", false);
        }
        if (Gbtn.css('display') == 'block') {
          $(".temp-edit .goods-edit .buyBtn").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .buyBtn").attr("checked", false);
           $(".temp-edit .goods-edit .buyBtnStyle").hide();
        }   
    } else if (list.css('display') == 'block') {
      $(".temp-edit .goods-edit .goods-lists").attr("checked", "checked");
      if(min.length>1){
        $(".temp-edit .goods-edit .minimalStyle").attr("checked", "checked");
        $(".temp-edit .goods-edit .goodsContentStyle1").hide();
        $(".temp-edit .goods-edit .goodsContentStyle2").hide();
   
      }else if (card.length>1){
        $(".temp-edit .goods-edit .cardStyle").attr("checked", "checked");
        $(".temp-edit .goods-edit .goodsContentStyle1").show();
        $(".temp-edit .goods-edit .goodsContentStyle2").show(); 
      }
      if (Gname.css('display') == 'block') {
          $(".temp-edit .goods-edit .goodsName").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .goodsName").attr("checked", false);
        }
        if (Gintro.css('display') == 'block') {
          $(".temp-edit .goods-edit .introShow").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .introShow").attr("checked", false);
        }
        if (Gprice.css('display') == 'block') {
          $(".temp-edit .goods-edit .goodsPrice").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .goodsPrice").attr("checked", false);
        }
        if (Gbtn.css('display') == 'block') {
          $(".temp-edit .goods-edit .buyBtn").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .buyBtn").attr("checked", false);
           $(".temp-edit .goods-edit .buyBtnStyle").hide();
        }
    } else if (other.css('display') == 'block') {
      $(".temp-edit .goods-edit .goods-other").attr("checked", "checked");
       if(min.length>1){
        $(".temp-edit .goods-edit .minimalStyle").attr("checked", "checked");
        $(".temp-edit .goods-edit .goodsContentStyle3").hide();
        $(".temp-edit .goods-edit .goodsContentStyle4").hide();
        $(".temp-edit .goods-edit .buyBtnStyle").hide();
    
      }else if (card.length>1){
        $(".temp-edit .goods-edit .cardStyle").attr("checked", "checked");
        $(".temp-edit .goods-edit .goodsContentStyle3").show();
        $(".temp-edit .goods-edit .goodsContentStyle4").show();
        $(".temp-edit .goods-edit .buyBtnStyle").show();
      }
      if (Gname.css('display') == 'block') {
          $(".temp-edit .goods-edit .goodsName").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .goodsName").attr("checked", false);
        }
        if (Gintro.css('display') == 'block') {
          $(".temp-edit .goods-edit .introShow").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .introShow").attr("checked", false);
        }
        if (Gprice.css('display') == 'block') {
          $(".temp-edit .goods-edit .goodsPrice").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .goodsPrice").attr("checked", false);
        }
        if (Gbtn.css('display') == 'block') {
          $(".temp-edit .goods-edit .buyBtn").attr("checked", true);
        } else {
          $(".temp-edit .goods-edit .buyBtn").attr("checked", false);
           $(".temp-edit .goods-edit .buyBtnStyle").hide();
        }
    }
    // 保存购物车样式
    var btn = $(".temp-box .temp-active .buy-btn");
    if (btn.hasClass("buy-btn1")) {
      $(".temp-edit .goods-edit .btnStyle1").attr("checked", "checked");
    } else if (btn.hasClass("buy-btn2")) {
      $(".temp-edit .goods-edit .btnStyle2").attr("checked", "checked");
    } else if (btn.hasClass("buy-btn3")) {
      $(".temp-edit .goods-edit .btnStyle3").attr("checked", "checked");
    } else if (btn.hasClass("buy-btn4")) {
      $(".temp-edit .goods-edit .btnStyle4").attr("checked", "checked");
    } else if (btn.hasClass("buy-btn5")) {
      $(".temp-edit .goods-edit .btnStyle5").attr("checked", "checked");
    }
    // 保存商品信息样式
  //   var Gname = $(".temp-box .temp-active .goods-name");
  //   var Gintro = $(".temp-box .temp-active .goods-intro");
  //   var Gprice = $(".temp-box .temp-active .goods-price");
  //   var Gbtn = $(".temp-box .temp-active .buy-btn");
  //   if (Gname.css('display') == 'block') {
  //     $(".temp-edit .goods-edit .goodsName").attr("checked", true);
  //   } else {
  //     $(".temp-edit .goods-edit .goodsName").attr("checked", false);
  //   }
  //   if (Gintro.css('display') == 'block') {
  //     $(".temp-edit .goods-edit .introShow").attr("checked", true);
  //   } else {
  //     $(".temp-edit .goods-edit .introShow").attr("checked", false);
  //   }
  //   if (Gprice.css('display') == 'block') {
  //     $(".temp-edit .goods-edit .goodsPrice").attr("checked", true);
  //   } else {
  //     $(".temp-edit .goods-edit .goodsPrice").attr("checked", false);
  //   }
  //   if (Gbtn.css('display') == 'block') {
  //     $(".temp-edit .goods-edit .buyBtn").attr("checked", true);
  //   } else {
  //     $(".temp-edit .goods-edit .buyBtn").attr("checked", false);
  //   }

  }
  return {
    addFirstGoods: addFirstGoods,
    addNextGoods: addNextGoods,
    clickGoods: clickGoods
  }

});