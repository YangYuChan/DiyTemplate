define(["common"], function(common) {
/*添加模块
  noticeBox 添加公告
  titleBox  添加标题
*/
  var add_module = {
      phoneBox:function(){
        var phone_box = '<div class="navTemp phone-box ">'
        +'<div class="phone-container">'
        +'<a href="" class="phone-tit">'
        +'<i class="icon iconfont">&#xe624;</i>'
        +'<span class="p-font-tit">电话联系</span>'
        
        +'</a>'
        +'<div class="shade"></div>'
        +'<div class="diy-actions">'
      +'<a class="actionsname add-content"><i class="icon iconfont">&#xe612;</i>&nbsp;添加内容</a>'
      +'<a class="actionsname delete-content"><i class="icon iconfont">&#xe60d;</i>&nbsp;删除</a>'
      +'</div>'
      +'</div>'
        +'</div>';
        return phone_box;
      }
  　　};
  /* 编辑模块
    noticeEdit  编辑公告
    titleEdit   编辑标题
  */
  var edit_module = {
    phoneEdit:function(){
      var phone_edit = '<div class="phone-edit">'
      +'<div class="edit-box">'
                +'<h4 class="edit-title">电话号码</h4>'
                +'<ul class="edit-type">'
                    +'<li class="edit-content-font edit-type-acitve">内容</li>'
                    +'<li class="edit-style-font">样式</li>'
                +'</ul>'
                +'<div class="edit-info">'
                    +'<div class="edit-content-info clearfix edit-info-container">'
            +'<fieldset class="form-group mb10">'
        +'<label class="form-font mt8">标题：</label>'
        +'<input type="text" class="form-control form-text phone-tit-text" value="电话联系">'
      +'</fieldset>'
       +'<fieldset class="form-group edit-remark">'        
        +'<span class="phone-tit-remark">*限10个字以内</span>'
         +'</fieldset>'
       +'<fieldset class="form-group mb10">'
    +'<label class="form-font">电话：</label>'
    +'<input type="text" class="form-control form-text phone-num-text" placeholder="请添加电话号码">'
    +'</fieldset>'
     +'<fieldset class="form-group edit-remark clearfix show-num-box">'
     +'<input type="checkbox" id="showNum" class="show-num">'
     +'<label class="form-font" for="showNum">显示电话号码</label>'
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
      return phone_edit;
    }
  }


// 添加标题模块
function addFirstPhone() {
$(".nav-phone").click(function() {
    $(".temp-box").append(add_module.phoneBox());
    if($(".temp-box").has('.phone-box').length>0){
    addPhoneBox();
    }else{
      return false;
    }
  });
}

function addNextPhone(){

 $(".temp-edit").on('click','.nav-phone',function(){
    $(".temp-box .temp-active").after(add_module.phoneBox());
    $(".temp-box .temp-active").removeClass("temp-active").next().first().addClass('temp-active');
    $(".temp-edit").empty();
    $(".temp-edit").append(edit_module.phoneEdit());
    var c1_h = $('.temp-box .temp-active').position().top;
    $(".temp-edit").css('top', c1_h+145);
     setPhoneContent();
    setFontColor();
        setBgColor();
        savePhoneStyle();
        common.setSpace();
        common.addContent();
        common.mouseMove();

  });
}


// 点击标题
function clickPhone() {
 $(".temp-box").on('click','.phone-box .shade',function(){
  $(this).closest(".phone-box").each(function(){
    $(this).siblings().removeClass('temp-active');
    $(this).addClass('temp-active');
    $(".temp-edit").empty();
    $(".temp-edit").append(edit_module.phoneEdit());
    var c1_h = $(this).closest(".phone-box").position().top;
    $(".temp-edit").css('top', c1_h+145);   
    if($(".temp-active .p-font-num")){
      $(".show-num").attr("checked","checked");
    }else{
       $(".show-num").attr("checked",false);
    }
     setPhoneContent();
    setFontColor();
        setBgColor();
        savePhoneStyle();
        common.setSpace();
        common.addContent();
        common.mouseMove();
  });
 });
}


 // 添加标题模块
 function addPhoneBox(){
  $(".temp-box .phone-box").each(function(){
       $(this).siblings().removeClass('temp-active');
       $(this).addClass('temp-active');
        $(".temp-edit").empty();
        $(".temp-edit").append(edit_module.phoneEdit());
        var c1_h = $(this).position().top;
        $(".temp-edit").css('top', c1_h+145);
        setPhoneContent();
        setFontColor();
        setBgColor();
        savePhoneStyle();
        common.setSpace();
        common.addContent();
        common.mouseMove();

       })    
 }

 // 保存内容和样式
 function savePhoneStyle(){
        $(".temp-edit .phone-tit-text").val( $('.temp-active').find(".phone-tit .p-font-tit").text());
        $(".temp-edit .phone-num-text").val($('.temp-active').find(".phone-tit .p-font-num").text());
        var mt = $(".temp-box .temp-active").css("padding-top");
        var mb =$(".temp-box .temp-active").css("padding-bottom");
        var mtn = parseFloat(mt,10);  
        var mbn = parseFloat(mb,10); 
         $(".temp-edit .phone-edit .mgTop").val(mtn);
         $(".temp-edit .phone-edit .mgBottom").val(mbn);
  

    var Tcolor = $(".temp-box .temp-active .phone-tit").css("color");

    $(".temp-edit .phone-edit .setFontColor").val(Tcolor.colorHex());
      var Tbg = $(".temp-box .temp-active .phone-container").css("background-color");
    $(".temp-edit .phone-edit .setBgColor").val(Tbg.colorHex());
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
      $('.temp-active .phone-tit').css("color",val);
   });
 }
   function setBgColor(){
  //设置背景颜色
   $(".setBgColor").on('change',function(){
    var val = $(this).val();
      $('.temp-active .phone-container').css("background-color",val);
   });
 }
 function setPhoneContent(){
      // 鼠标离开公告标题编辑框把内容添加到模块中
    $(".phone-tit-text").bind('blur',function(){
    var val = $(this).val();
    if(!val==''){
     if(val.length>10){
      $(".font-beyond").remove();
      $(".phone-tit-remark").before('<p class="font-beyond red"><i class="icon iconfont">&#xe61e;</i>最多十个字符</p>');
    }else{
      $(".font-beyond").remove();
     $('.temp-active').find(".phone-tit .p-font-tit").text(val);
    }


    }
    });
       // 鼠标离开电话编辑框把内容添加到模块中
    $(".phone-num-text").bind('blur',function(){
    var val = $(this).val();
    if(!val==''){
     $('.temp-active').find(".phone-tit").attr("href","tel:"+val);
    } 
    }); 
     // 设置默认间距
    $(".show-num-box").bind('click',function(){
    if($(".show-num").prop("checked")==true){
      var val= $(this).siblings().find(".phone-num-text").val();
      $(".temp-active .p-font-num").remove();
      $(".temp-active .p-font-tit").after('<span class="p-font-num">'+val+'</span>');
    }else{
      $('.temp-active .p-font-num').remove();
    }
    });
 }

return {
    addFirstPhone:addFirstPhone,
    addNextPhone:addNextPhone,
    clickPhone:clickPhone
    }
})
