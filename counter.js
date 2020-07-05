$(document).ready(function () {

    $(window).scroll(function () {
        
        var offset = $("#test").offset();
        var top = offset.top;
        var left = offset.left;
        
        // console.log("元素上方:"+ top);

        var windowTop =  $(window).scrollTop();

        // console.log("視窗上方:"+ windowTop);

        var number = $("#test").attr("data-counter-number");
        var time = $("#test").attr("data-counter-time");
        var offset = $("#test").attr("data-counter-offset");

        // console.log("數字" + number);
        // console.log("時間" + time);
        // console.log("位移" + offset);

        if (windowTop > top - offset) {
           $("#test").animate({
               num : number
           },{
               duration: parseInt(time),
               step: (now) => {
                   $("#test").text(Math.floor(now));
               }
           })
        }
    });
});