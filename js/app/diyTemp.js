define(["jquery"], function(jquery) {
    //导航折叠
    function navFold() {
        $(".nav-fold").click(function() {
            var current = $(this).attr("current") == "1"; //自定义属性，作为占位符来判断
            if (current) {
                $(".last_nav").show();
                $(this).text('收起');
                $(this).attr("current", "0"); //自定义属性
            } else {
                $(".last_nav").hide();
                $(this).text('展开更多');
                $(this).attr("current", "1");
            }
        });
    }
    // 编辑 内容/样式切换
    function editTab() {
        $(".temp-edit").on('click', '.edit-type li', function() {
            $(this).addClass("edit-type-acitve").siblings().removeClass("edit-type-acitve");
            $(this).parents('.edit-type').siblings('.edit-info').find('.edit-info-container').hide().eq($(this).index()).show();
        });
    }
    return {
      navFold:navFold,
      editTab:editTab
    }
    
    
});
