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
XiaLa("region1","region-ul1")