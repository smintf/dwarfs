function show(shown,hidden){document.getElementById(shown).style.display='block';document.getElementById(hidden).style.display='none';return!1}
var el=document.getElementById("about");if(el){el.addEventListener("click",function(){alert("Dwarfs: There And Back Again\nGPLv3\nMade with love by mvasilkov and yutyo and smint.")})}
var el2=document.getElementById("quit-game");if(el2){el2.addEventListener("click",function(){window.close()})}
