//下拉菜单
function XiaLa(liId,ulId){
    var liR = document.getElementById(liId);
    var ulR = document.getElementById(ulId);
    liR.onmouseover = function(){
        ulR.style.display = "block";
    }
    liR.onmouseout = function(){
        ulR.style.display = "none";
    }
}
XiaLa("region","region-ul");
XiaLa("region1","region-ul1");
//轮播图
var i = 0;
var slideShow;
$(function(){
    $(".slidebtn").hide();
    $(".bth-promo").hover(function(){$(".slidebtn").show();},function(){$(".slidebtn").hide();});
    $(".promo-pic").eq(0).show().siblings().hide();
    SlideShowTime();
    $(".select").click(function(){
        i = $(this).index();
        SlideShowshow();
        clearInterval(slideShow);
        SlideShowTime();
    });
    $(".btn-left").click(function(){
        clearInterval(slideShow);
        if(i == 0){
            i=5;
        }
        i--;
        SlideShowshow();
        SlideShowTime();
    });
    $(".btn-right").click(function(){
        clearInterval(slideShow);
        if(i == 4){
            i=-1;
        }
        i++;
        SlideShowshow();
        SlideShowTime();
    });
});
function SlideShowshow(){
    $(".promo-pic").eq(i).fadeIn(500).siblings().fadeOut(500);
    $(".select").eq(i).addClass("select-bg").siblings().removeClass("select-bg");
}
function SlideShowTime(){
    slideShow = setInterval(function(){
        i++;
        if(i == 5){
            i = 0;
        }
        SlideShowshow();
    },4000);
}