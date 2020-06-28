$(document).ready(function () {

    $(window).scroll(function () {
        
        var offset = $("#test").offset();
        var top = offset.top;
        var left = offset.left;
        
        console.log("元素上方:"+ top);

        var windowTop =  $(window).scrollTop();

        console.log("視窗上方:"+ windowTop);
    });


    if(windowTop > top) {
        console.log("開始執行動畫...")
    }


});