window.onload = function(){
    var contacts = document.getElementById("contacts");
    var closeinfo =document.getElementById("close_info");

    var infocontainer = document.getElementsByClassName("info_container")[0];
    var blogcontainer = document.getElementsByClassName("blog_post")[0];
    contacts.addEventListener("click", contactson);
   
    closeinfo.addEventListener("click", close_info_field);


    function contactson(){
        infocontainer.style.visibility="visible";
        blogcontainer.style.visibility="hidden";
        console.log(contactson);
    }

    function close_info_field(){
        infocontainer.style.visibility="hidden";
        blogcontainer.style.visibility="visible";


    }


}

