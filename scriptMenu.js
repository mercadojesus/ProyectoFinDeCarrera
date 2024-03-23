//  MENÚ RESPONSIVE
//  Variable que controla si el menú responsive está visible o no
let menu_responsive_visible = false;
let nav_responsive = document.getElementById("nav-responsive");
let close_responsive = document.getElementById("close-responsive");
let nav = document.getElementById("nav");

nav_responsive.onclick = function() {
    if(menu_responsive_visible==false){
        nav.className = "menu-responsive";
        menu_responsive_visible = true;
    }
}
close_responsive.onclick = function() {
    if(menu_responsive_visible==true){
        nav.className = "";
        menu_responsive_visible = false;
    }
}