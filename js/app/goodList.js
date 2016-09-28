define(["common"], function(common) {
var add_module = {
    	goodListBox:function(){
    		var goodlist_box = '<div class="navTemp goodList-box">'
    +'<div class="goods-container">'  
    +'<div class="goodsBox goods-big-box clearfix">'
      +'<ul class="clearfix">'
      +'<li class="goods-style  card-goods-style">'
          +'<div class="goods-list clearfix">'
            +'<a href="#" class="goods-img"><img src="images/goods_04.jpg" alt=""></a>'
            +'<div class="goods-info">'
              +'<a href="">'
                +'<h4 class="goods-name">剃毛机剃毛球修剪器</h4>'
                +'<h5 class="goods-intro">这里是商品简介，新款夏季防晒衫宽松舒适...</h5>'
              +'</a>'
              +'<div class="other-info clearfix">'
              +'<span class="goods-price">￥19.8</span>'
              +'<a href="#" class="buy-btn buy-btn1"></a>'
              +'</div>'
            +'</div>'
          +'</div>'
        +'</li>'
        +'<li class="goods-style card-goods-style">'
          +'<div class="goods-list clearfix">'
            +'<a href="#" class="goods-img"><img src="images/goods_04.jpg" alt=""></a>'
            +'<div class="goods-info">'
              +'<a href="">'
                +'<h4 class="goods-name">剃毛机剃毛球修剪器</h4>'
                +'<h5 class="goods-intro">这里是商品简介，新款夏季防晒衫宽松舒适...</h5>'
              +'</a>'
              +'<div class="other-info clearfix">'
              +'<span class="goods-price">￥19.8</span>'
              +'<a href="#" class="buy-btn buy-btn1"></a>'
              +'</div>'
            +'</div>'
          +'</div>'
        +'</li>'
        +'<li class="goods-style card-goods-style">'
          +'<div class="goods-list clearfix">'
            +'<a href="#" class="goods-img"><img src="images/goods_04.jpg" alt=""></a>'
            +'<div class="goods-info">'
              +'<a href="">'
                +'<h4 class="goods-name">剃毛机剃毛球修剪器</h4>'
                +'<h5 class="goods-intro">这里是商品简介，新款夏季防晒衫宽松舒适...</h5>'
              +'</a>'
              +'<div class="other-info clearfix">'
              +'<span class="goods-price">￥19.8</span>'
              +'<a href="#" class="buy-btn buy-btn1"></a>'
              +'</div>'
            +'</div>'
          +'</div>'
        +'</li>'
      +'</ul>'
    +'</div>'
    +'<div class="shade"></div>'
        +'<div class="diy-actions">'
        +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
        +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
        +'</div>'
    +'</div>'
    +'</div>';
        return goodlist_box;
    	}
	　　};
	/* 编辑模块
		noticeEdit  编辑公告
		titleEdit   编辑标题
	*/
	var edit_module = {
		goodListEdit:function(){
			var goodlist_edit = '<div class="goodList-edit">' 
    +'<div class="edit-box">' 
     +'<h4 class="edit-title">商品列表</h4> '
     +'<ul class="edit-type">' 
      +'<li class="edit-content-font  edit-type-acitve">内容</li>' 
      +'<li class="edit-style-font">样式</li>' 
     +'</ul> '
     +'<div class="edit-info">' 
      +'<div class="edit-content-info clearfix edit-info-container">' 

         +'<fieldset class="form-group edit-content-content clearfix">' 
        +'<label class="form-font">商品来源：</label>' 
        +'<span class="left mr20  goodSource"> <input type="radio" name="source" class="s-sort left" id="goodSort"/> <label class="form-font left" for="goodSort">&nbsp;按分类</label> </span>'
        +'<span class="left mr20 goodSource"> <input type="radio" name="source" class="s-tag left" id="goodTag" /> <label class="form-font left" for="goodTag">&nbsp;按标签</label> </span>' 
        +'<div class="source-choice">'
        +'<a class="a-sort">从商品分类中选择</a>'
        +'<a class="a-tag">从商品标签中选择</a>'
        +'<div class="source-name clearfix">'
        +'<a class="tags"><span class="left">上衣</span><i class="icon iconfont right del-tags">&#xe61c;</i></a>'
        +'<a class="tags"><span class="left">下装</span><i class="icon iconfont right del-tags">&#xe61c;</i></a>'
        +'</div>'
        +'<div class="source-list dl-sort" >'
        +'<dl class="dl-style clearfix">'
        +'<dt class="clearfix dl-style-title"><span class="dt-name left">从商品分类中选择</span><i class="icon iconfont right delete-source">&#xe61c;</i></dt>'
        +'<dd class="sort-list-box">'
          +'<dl class="sort-list">' 
            +'<dt class="first-level">男装女装</dt>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
          +'</dl>' 
        +'</dd>'
         +'<dd class="sort-list-box">'
          +'<dl class="sort-list">' 
            +'<dt class="first-level">手机数码</dt>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
          +'</dl>' 
        +'</dd>'
        +'<dd class="sort-list-box">'
          +'<dl class="sort-list">' 
            +'<dt class="first-level">手机数码</dt>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
            +'<dd class="second-level">外套</dd>'
          +'</dl>' 
        +'</dd>'
        +'</dl>'
        +'</div>'
         +'<div class="source-list dl-tag ">'
        +'<dl class="dl-style clearfix">'
        +'<dt class="clearfix dl-style-title"><span class="dt-name left">从商品标签中选择</span><i class="icon iconfont right delete-source">&#xe61c;</i></dt>'
        +'<dd class="clearfix dl-tag-dd">'
         +'<input type="radio" class="left" name="tags" id="new"/>' 
         +'<label class="form-font left" for="new">&nbsp;新品</label>' 
        +'</dd>'
         +'<dd class="clearfix dl-tag-dd">'
         +'<input type="radio" class="left" name="tags" id="bk"/>' 
         +'<label class="form-font left" for="bk">&nbsp;爆款</label>' 
        +'</dd>'
        +'<dd class="clearfix dl-tag-dd">'
         +'<input type="radio" class="left" name="tags" id="cx"/>' 
         +'<label class="form-font left" for="cx">&nbsp;促销</label>' 
        +'</dd>'
        +'</dl>'
        +'</div>'
        +'</div>'
       +'</fieldset> '

        +'<fieldset class="form-group edit-content-content">' 
        +'<label class="form-font">商品排序：</label>' 
        +'<span class="left mr20 goodOrder"> <input type="radio" name="order" class="o_Time left" id="orderTime" checked="" /> <label class="form-font left" for="orderTime">&nbsp;按时间</label> </span>' 
        +'<span class="left mr20 goodOrder"> <input type="radio" name="order" class="o_Sale left" id="orderSale" /> <label class="form-font left" for="orderSale">&nbsp;按销量</label> </span>' 
        +'<span class="left mr20 goodOrder"> <input type="radio" name="order" class="o_Price left" id="orderPrice" /> <label class="form-font left" for="orderPrice">&nbsp;按价格</label> </span>'
       +'</fieldset> '


       +'<fieldset class="form-group edit-content-content">' 
        +'<label class="form-font">商品样式：</label>' 
        +'<span class="left mr20 showStyle"> <input type="radio" name="goods" class="goods-big left" id="goodsBig" checked="" /> <label class="form-font left" for="goodsBig">&nbsp;大图</label> </span>' 
        +'<span class="left mr20 showStyle"> <input type="radio" name="goods" class="goods-small left" id="goodsSmall" /> <label class="form-font left" for="goodsSmall">&nbsp;小图</label> </span>' 
        +'<span class="left mr20 showStyle"> <input type="radio" name="goods" class="goods-lists left" id="goodsList" /> <label class="form-font left" for="goodsList">&nbsp;列表</label> </span>'
        +'<span class="left mr20 showStyle"> <input type="radio" name="goods" class="goods-other left" id="goodsOther" /> <label class="form-font left" for="goodsOther">&nbsp;一大两小</label> </span>' 
       +'</fieldset> '

       +'<fieldset class="form-group edit-content-content">' 
        +'<label class="form-font font-count">显示个数：</label>' 
        +'<span class="left mr20 showCount">'
          +'<select class="form-control form-select left select-count">'
            +'<option value="">2</option>'
            +'<option value="">4</option>'
            +'<option value="">6</option>'
            +'<option value="">8</option>'
            +'<option value="">10</option>'
          +'</select>'
        +'</span>' 
       +'</fieldset> '

       +'<fieldset class="form-group edit-content-content b-top">' 
        +'<div class="goodsContentStyle clearfix"> '
         +'<input type="checkbox" class="goodsPrice left" id="goodsPrice" checked="" />' 
         +'<label class="form-font left" for="goodsPrice">&nbsp;显示价格</label>' 
        +'</div> '
        +'<div class="goodsContentStyle clearfix">' 
         +'<input type="checkbox" class="goodsName left" id="goodsName" checked="" /> '
         +'<label class="form-font left" for="goodsName">&nbsp;显示商品名称</label>' 
        +'</div> '
        +'<div class="goodsContentStyle clearfix"> '
         +'<input type="checkbox" class="introShow left" id="introShow" checked="" /> '
         +'<label class="form-font left" for="introShow">&nbsp;显示商品简介</label>' 
        +'</div> '
        +'<div class="goodsContentStyle clearfix"> '
         +'<input type="checkbox" class="buyBtn left" id="buyBtn" checked="" /> '
         +'<label class="form-font left" for="buyBtn">&nbsp;显示购物车按钮</label>' 
        +'</div> '
       +'</fieldset> '
       +'<fieldset class="form-group edit-content-content buyBtnStyle"> '
        +'<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle1 left" id="btnStyle1" checked="" /> <label class="form-font left" for="btnStyle1">&nbsp;样式1</label> </span>' 
        +'<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle2 left" id="btnStyle2" /> <label class="form-font left" for="btnStyle2">&nbsp;样式2</label> </span> '
        +'<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle3 left" id="btnStyle3" /> <label class="form-font left" for="btnStyle3">&nbsp;样式3</label> </span> '
        +'<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle4 left" id="btnStyle4" /> <label class="form-font left" for="btnStyle4">&nbsp;样式4</label> </span>' 
        +'<span class="left btnStyle"> <input type="radio" name="btnStyle" class="btnStyle5 left" id="btnStyle5" /> <label class="form-font left" for="btnStyle5">&nbsp;样式5</label> </span> '
       +'</fieldset> '
     
      +'</div> '
      +'<div class="edit-style-info clearfix edit-info-container" style="display:none">' 
       +'<span class="left">调整间距：</span>' 
       +'<div class="space-box"> '
        +'<div class="adjust-space">' 
         +'<div class="mg-top"> '
          +'<div class="margin-top clearfix">' 
           +'<input type="text" class="form-control space-num left mgTop" value="5" />'
           +'<span class="left unit">PX</span> '
          +'</div> '
          +'<i class="icon iconfont font-gcolor"></i>' 
         +'</div> '
         +'<div class="mg-middle clearfix">' 
          +'<div class="mg-left left clearfix"> '
           +'<div class="margin-left left"> '
            +'<span>0</span>'
            +'<span class="unit">PX</span>' 
           +'</div>' 
           +'<i class="icon iconfont left"></i>' 
          +'</div>' 
          +'<div class="mg-box left">' 
          +'</div>' 
          +'<div class="mg-right left clearfix">' 
           +'<i class="icon iconfont left"></i>'
           +'<div class="margin-right left">' 
            +'<span>0</span>'
            +'<span class="unit">PX</span>' 
           +'</div>' 
          +'</div>' 
         +'</div>' 
         +'<div class="mg-top">' 
          +'<i class="icon iconfont font-gcolor"></i>' 
          +'<div class="margin-top clearfix">' 
           +'<input type="text" class="form-control space-num left mgBottom" value="5" />'
           +'<span class="left unit">PX</span>' 
          +'</div>' 
         +'</div>' 
        +'</div>' 
        +'<div class="default-space clearfix">' 
         +'<input type="checkbox" class="left DefaultSpace" id="TDefaultSpace" />&nbsp;'
         +'<label class="font left" for="TDefaultSpace">默认边距</label>' 
        +'</div>' 
       +'</div>'
      +'</div>' 
     +'</div>' 
    +'</div>' 
   +'</div>';
			return goodlist_edit;
		}
	}

	// 添加标题模块
function addFirstGoodList() {
$(".nav-good-list").click(function() {
  var timestamp = new Date().getTime();
    $(".temp-box").append(add_module.goodListBox(timestamp));
    if($(".temp-box").has('.goodList-box').length>0){
 		addGoodListBox(timestamp);

    }else{
    	return false;
    }
  });
}

//商品来源
$(".temp-edit").on("click",".goodSource",function(){
  if($(".s-sort").prop("checked")){
    $(".a-sort").show();
    $(".a-tag").hide();
  }else if($(".s-tag").prop("checked")){
    $(".a-tag").show();
     $(".a-sort").hide();
  }
});
//选择分类标签
    $(".temp-edit").on("click", ".a-sort", function () {
        $(".dl-sort").show();
        $(".dl-tag").hide();
        $(".goodstype").show();
    });
    $(".temp-edit").on("click", ".a-tag", function () {
        $(".dl-tag").show();
        $(".dl-sort").hide();
        $(".goodstags").show();
    });
$(".temp-edit").on("click",".a-tag",function(){
 if($(".dl-tag").is(":hidden")){
  $(".dl-tag").show();
}else{
 $(".dl-tag").hide();
}
});
//删除分类标签
$(".temp-edit").on("click",".delete-source",function(){
  $(this).closest(".source-list").hide();
});
$(".temp-edit").on("click",".del-tags",function(){
  $(this).closest(".source-list").remove();
});




function addNextGoodList(){

 $(".temp-edit").on('click','.nav-good-list',function(){
  var timestamp = new Date().getTime();
  	$(".temp-box .temp-active").after(add_module.goodListBox(timestamp));
  	$(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
  	$(".temp-edit").empty();
  	$(".temp-edit").append(edit_module.goodListEdit(timestamp));
  	var c1_h = $('.temp-box .temp-active').position().top;
    $(".temp-edit").css('top', c1_h+115);
    setGoodsStyle();
    saveGoodsStyle();
    common.setSpace();
    common.addContent();
    common.mouseMove();

  });
}


// 点击标题
function clickGoodList() {
 $(".temp-box").on('click','.goodList-box .shade',function(){
  $(this).closest(".goodList-box").each(function(){
    $(this).siblings().removeClass('temp-active');
    $(this).addClass('temp-active');
    $(".temp-edit").empty();
    $(".temp-edit").append(edit_module.goodListEdit());
    var c1_h = $(this).closest(".goodList-box").position().top;
    $(".temp-edit").css('top', c1_h+115);   
    setGoodsStyle();
    saveGoodsStyle();
    common.setSpace();
    common.addContent();
    common.mouseMove();
  });
 });
}


 // 添加标题模块
 function addGoodListBox(){
 	$(".temp-box .goodList-box").each(function(){
       $(this).siblings().removeClass('temp-active');
       $(this).addClass('temp-active');
        $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.goodListEdit());
        var c1_h = $(this).position().top;
        $(".temp-edit").css('top', c1_h+115);

        setGoodsStyle();
        saveGoodsStyle();
        common.setSpace();
        common.addContent();
        common.mouseMove();

			 })    
 }
//设置样式
function setGoodsStyle(){
  //设置商品显示样式
	  $(".showStyle").bind('click',function(){
    if($(".goods-big").prop("checked")==true){
    	$(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-big-box clearfix");
    }else if($(".goods-small").prop("checked")==true){
      $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-small-box clearfix");
    }else if($(".goods-lists").prop("checked")==true){
      $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-list-box clearfix");
    }else if($(".goods-other").prop("checked")==true){
     $(".temp-box .temp-active .goodsBox").removeClass().addClass("goodsBox goods-other-box clearfix");
    }
    });
  //设置商品内容
   $(".goodsContentStyle").bind('click',function(){
    if($(".goodsPrice").prop("checked")==true){
      $('.temp-active .goods-price').show();
    }else{
      $('.temp-active .goods-price').hide();
    }
    if($(".goodsName").prop("checked")==true){
      $('.temp-active .goods-name').show();
    }else{
      $('.temp-active .goods-name').hide();
    }
    if($(".introShow").prop("checked")==true){
      $('.temp-active .goods-intro').show();
    }else{
      $('.temp-active .goods-intro').hide();
    }
    if($(".buyBtn").prop("checked")==true){
      $('.temp-active .buy-btn').show();
      $(".temp-edit .buyBtnStyle").show();
    }else{
      $('.temp-active .buy-btn').hide();
       $(".temp-edit .buyBtnStyle").hide();
    }
    });
   //设置按钮样式
   $(".buyBtnStyle").bind('click',function(){
    if($(".btnStyle1").prop("checked")==true){
      $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn1");
    }else if($(".btnStyle2").prop("checked")==true){
      $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn2");

    }else if($(".btnStyle3").prop("checked")==true){
      $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn3");

    }else if($(".btnStyle4").prop("checked")==true){
      $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn4");

    }else if($(".btnStyle5").prop("checked")==true){
      $('.temp-active .buy-btn').removeClass().addClass("buy-btn buy-btn5");
    }
    });
}
 // 保存样式
 function saveGoodsStyle(){
 	//保存间距
        var mt = $(".temp-box .temp-active").css("padding-top");
   	    var mb =$(".temp-box .temp-active").css("padding-bottom");
   	    var mtn = parseFloat(mt,10);  
   	    var mbn = parseFloat(mb,10); 
   	     $(".temp-edit .goodList-edit .mgTop").val(mtn);
   	     $(".temp-edit .goodList-edit .mgBottom").val(mbn);
//保存商品显示方式
   	      var big = $(".temp-box .temp-active .goods-big-box");
   	      var small = $(".temp-box .temp-active .goods-small-box");
   	      var list = $(".temp-box .temp-active .goods-list-box");
          var other = $(".temp-box .temp-active .goods-other-box");
         	if(big.css('display') == 'block'){
         		$(".temp-edit .goodList-edit .goods-big").attr("checked","checked");
         	}else if(small.css('display') == 'block'){
         		$(".temp-edit .goodList-edit .goods-small").attr("checked","checked");
         	}else if(list.css('display') == 'block'){
         		$(".temp-edit .goodList-edit .goods-lists").attr("checked","checked");
         	}else if(other.css('display') == 'block'){
            $(".temp-edit .goodList-edit .goods-other").attr("checked","checked");
          }
// 保存购物车样式
          var btn = $(".temp-box .temp-active .buy-btn");
          if(btn.hasClass("buy-btn1")){
            $(".temp-edit .goodList-edit .btnStyle1").attr("checked","checked");
          }else if(btn.hasClass("buy-btn2")){
            $(".temp-edit .goodList-edit .btnStyle2").attr("checked","checked");
          }else if(btn.hasClass("buy-btn3")){
            $(".temp-edit .goodList-edit .btnStyle3").attr("checked","checked");
          }else if(btn.hasClass("buy-btn4")){
            $(".temp-edit .goodList-edit .btnStyle4").attr("checked","checked");
          }else if(btn.hasClass("buy-btn5")){
            $(".temp-edit .goodList-edit .btnStyle5").attr("checked","checked");
          }
// 保存商品信息样式
          var Gname = $(".temp-box .temp-active .goods-name");
          var Gintro = $(".temp-box .temp-active .goods-intro");
          var Gprice = $(".temp-box .temp-active .goods-price");
          var Gbtn = $(".temp-box .temp-active .buy-btn");
          if(Gname.css('display') == 'block'){
            $(".temp-edit .goodList-edit .goodsName").attr("checked",true);
          }else{
            $(".temp-edit .goodList-edit .goodsName").attr("checked",false);
          }
          if(Gintro.css('display') == 'block'){
            $(".temp-edit .goodList-edit .introShow").attr("checked",true);
          }else{
            $(".temp-edit .goodList-edit .introShow").attr("checked",false);
          }
          if(Gprice.css('display') == 'block'){
            $(".temp-edit .goodList-edit .goodsPrice").attr("checked",true);
          }else{
            $(".temp-edit .goodList-edit .goodsPrice").attr("checked",false);
          }
          if(Gbtn.css('display') == 'block'){
            $(".temp-edit .goodList-edit .buyBtn").attr("checked",true);
          }else{
            $(".temp-edit .goodList-edit .buyBtn").attr("checked",false);
          }

       }
return {
    addFirstGoodList:addFirstGoodList,
    addNextGoodList:addNextGoodList,
    clickGoodList:clickGoodList
    }

});