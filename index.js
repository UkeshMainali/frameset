var search_icon = document.getElementById('search_logo');
var search_button = document.getElementById('search_button')
var search_visibility = false;

search_icon.onclick = function(){
    if(search_visibility == false){
        search_button.style.margin = "0";
        search_button.style.padding = "0 38px 0 6px";
        search_button.style.width = "100%";
        search_button.style.height = "100%";
        search_visibility = true;
        search_icon.style.paddingLeft = "4px";
        search_icon.style.borderLeft = "2px solid var(--grey)";
    }
    else{
        search_button.style.width = "0";
        search_button.style.height = "0";
        search_button.style.marginRight = "19px";
        search_button.style.padding = "0";
        search_visibility = false;
        search_icon.style.paddingLeft = "0";
        search_icon.style.borderLeft = "none";
    }
}
