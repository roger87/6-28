$(document).ready(function () {

    $(window).scroll(function () {

        $("*").each(function (index, element){
            var offset = $(this).offset();
            var top = offset.top;
            var left = offset.left;
            
            // console.log("元素上方:"+ top);
    
            var windowTop =  $(window).scrollTop();
    
            // console.log("視窗上方:"+ windowTop);
    
            var number = $(this).attr("data-counter-number");
            var time = $(this).attr("data-counter-time");
            var offset = $(this).attr("data-counter-offset");
    
            // console.log("數字" + number);
            // console.log("時間" + time);
            // console.log("位移" + offset);
    
            if (windowTop > top - offset) {
               $(this).animate({
                   num : number
               },{
                   duration: parseInt(time),
                   step: (now) => {
                       $(this).text(Math.floor(now));
                   }
               })
            }
        });
        

    });
});