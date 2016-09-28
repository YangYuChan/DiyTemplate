define(["common"], function(common) {

  var edit_module = {
    headerEdit: function() {
      var header_edit = '<div class="navTemp header-edit">' 
    +'<div class="edit-box">' 
     +'<h4 class="edit-title">页面设置</h4>' 
     +'<div class="edit-info">' 
      +'<div class="edit-content-info clearfix edit-info-container">' 
       +'<fieldset class="form-group edit-content-tit">' 
        +'<label class="form-font mt8">页面名称：</label>' 
        +'<input type="text" class="form-control form-text header-tit-text" value="MO客宝微店" />' 
       +'</fieldset>' 
       +'<fieldset class="form-group edit-content-content">' 
        +'<label class="form-font">页面描述：</label>' 
        +'<textarea class="form-control form-textarea notice-content-text" rows="5" placeholder="用户通过微信分享给朋友时，会自动显示页面描述"></textarea>' 
       +'</fieldset>' 
       +'<fieldset class="form-group edit-content-content form-group-color mb5">' 
        +'<label class="form-font">背景颜色：</label>' 
        +'<input type="color" class="form-control form-color left setBgColor" />&nbsp;&nbsp;' 
        +'<input type="button" class="btn btn-secondary btn-reset" value="重置" />' 
       +'</fieldset>' 
       +'<fieldset class="form-group">' 
        +'<label class="form-font remark">背景颜色只在手机端显示</label>' 
       +'</fieldset>' 
      +'</div>' 
     +'</div>'
    +'</div>' 
   +'</div> ';
      return header_edit;
    }
  }
  //页面设置
  function addHeader() {
    $('.temp-title').click(function() {  
      $(".temp-edit").empty();     
      $(".temp-edit").append(edit_module.headerEdit());
      var c1_h = $(this).position().top;
      $(".temp-edit .edit-box").css('margin-top', c1_h-50+'px');
      setBgColor();
      setPageContent();
      savePageContent();
      resetBgColor();
    });
  }

    $(function() {  
      $(".temp-edit").empty();     
      $(".temp-edit").append(edit_module.headerEdit());
      $(".temp-edit .edit-box").css('margin-top', '145px');
      setBgColor();
      setPageContent();
      savePageContent();
      resetBgColor();
    });
    function setBgColor(){
  //设置背景颜色
   $(".setBgColor").on('change',function(){
    var val = $(this).val();
      $('.temp-box').css("background-color",val);
   });
 }
  function setPageContent(){
   // 鼠标离开编辑框把内容添加到模块中
       $(".header-tit-text").bind('blur',function(){
    var val = $(this).val();
    if(!val==''){
    // 添加标题内容
     $('.temp-content').find(".shop-title").text(val);

    }else{
    $('.temp-content').find(".shop-title").text('MO客宝微店');

    } 
    });
 }
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

  function savePageContent(){
    var Tbg = $(".temp-box").css("background-color");
    $(".temp-edit .setBgColor").val(Tbg.colorHex());
    // 保存文本
    $(".temp-edit .header-tit-text").val($('.temp-content').find(".shop-title").text());
 }
 function resetBgColor(){

 $(".btn-reset").click(function(){
    var Tbg = $(".temp-box").css("background-color","#eee");
    $(".temp-edit .setBgColor").val("#eeeeee");
 })
 }
  return {
    addHeader: addHeader
  }
});