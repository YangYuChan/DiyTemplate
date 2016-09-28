require.config({
    paths : {
        "jquery" : 'lib/jquery-1.8.2.min',  
        "jquery-ui" : 'lib/jquery-ui.min',
        "diyTemp" : 'app/diyTemp',
        'common' : 'app/common',
        'delete' : 'app/delete',
        'notice' : 'app/notice',
        'title' : 'app/title',
        'cutOffLine' : 'app/cutOffLine',
        'images' : 'app/images',
        'goods' : 'app/goods',
        'header' : 'app/header',
        'search' : 'app/search',
        'textNav' : 'app/textNav',
        'goodList' : 'app/goodList',
        'phone':'app/phone',
        'showcase':'app/showcase',
        'imgNav':'app/imgNav'
    }
})
require(["jquery","jquery-ui"],function($){
    $(function(){
       $(".temp-box").sortable(); 
    })
})
require(["diyTemp"],function(diyTemp){
    diyTemp.navFold();
    diyTemp.editTab();
});
require(["notice"],function(notice){
      notice.addFirstNotice();
      notice.addNextNotice();
      notice.clickNotice();
});
require(["title"],function(title){
    title.addFirstTitle();
    title.addNextTitle();
    title.clickTitle();
});
require(["cutOffLine"],function(c){
    c.addFirstLine();
    c.addNextLine();
    c.clickLine();
});
require(["images"],function(img){
    img.addFirstImages();
    img.addNextImages();
    img.clickImages();
});
require(["goods"],function(goods){
    goods.addFirstGoods();
    goods.addNextGoods();
    goods.clickGoods();
});
require(["header"],function(header){
    header.addHeader();
});
require(["search"],function(search){
     search.addFirstSearch();
    search.addNextSearchBox();
    search.clickSearchBox();
});
require(["textNav"],function(text){
    text.addFirstTextNav();
    text.addNextTextNav();
    text.clickTextNav();
});
require(["goodList"],function(goodlist){
    goodlist.addFirstGoodList();
    goodlist.addNextGoodList();
    goodlist.clickGoodList();
});
require(["phone"],function(phone){
      phone.addFirstPhone();
      phone.addNextPhone();
      phone.clickPhone();
});
require(["showcase"],function(showcase){
      showcase.addFirstShowCase();
      showcase.addNextShowCase();
      showcase.clickShowCase();
});
require(["imgNav"],function(imgNav){
      imgNav.addFirstImgNav();
      imgNav.addNextImgNav();
      imgNav.clickImgNav();
});