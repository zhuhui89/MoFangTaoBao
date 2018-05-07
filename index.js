window.onload = function(){
    var liR = document.getElementById("region");
    var ulR = document.getElementById("region-ul");
    liR.onmouseover = function(){
        ulR.style.display = "block";
    }
    liR.onmouseout = function(){
        ulR.style.display = "none";
    }
}