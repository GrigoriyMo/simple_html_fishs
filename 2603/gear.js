window.onload = function(){
    var contacts = document.getElementById("contacts");
    var closeinfo = document.getElementById("close_info");
    
    var blog = document.getElementById("blog");
    
    var authorpagebutton = document.getElementById("authorpagebutton");
    var close_author_page = document.getElementById("close_author_page");
    
    var author_page = document.getElementsByClassName("author_page")[0];
    var infocontainer = document.getElementsByClassName("info_container")[0];
    var blogcontainer = document.getElementsByClassName("blog_post")[0];
    contacts.addEventListener("click", contactson);
    authorpagebutton.addEventListener("click", authorpageon);
    blog.addEventListener("click", blogopen);
   
    closeinfo.addEventListener("click", close_info_field);
    close_author_page.addEventListener("click", closeauthorpage);


    function contactson(){
        infocontainer.style.display="flex";
        blogcontainer.style.display="none";
        author_page.style.display="none";  
        console.log(contactson);
    }

    function close_info_field(){
        infocontainer.style.display="none";
        blogcontainer.style.display="flex";


    }

    function authorpageon(){
        author_page.style.display="flex";
        blogcontainer.style.display="none";
        infocontainer.style.display="none";
    }

    function closeauthorpage(){
        author_page.style.display="none";
        blogcontainer.style.display="flex";
    }

    function blogopen() {
        blogcontainer.style.display="flex";
        author_page.style.display="none";
        infocontainer.style.display="none";
    }

}

