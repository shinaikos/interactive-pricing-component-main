const tog = document.getElementById("toggle");

tog.addEventListener("click", function(){
    if(tog.classList.contains("toggle_select")){
        tog.classList.remove("toggle_select");
    }else{
        tog.classList.add("toggle_select");
    }
})