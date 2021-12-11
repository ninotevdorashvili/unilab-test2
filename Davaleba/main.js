var blog = document.getElementById("blog1");
var blog2 = document.getElementById("blog2");
var blog3 = document.getElementById("blog3");
var pop_up = document.querySelector("pop_up");

blog.addEventListener("click", function(){
    pop_up.style.display = 'block';
    console.log("mushaobs");
    // menu.style.display = 'block' ;
})
blog2.addEventListener("click", function(){
    pop_up.style.display = 'block';
    console.log("mushaobs");
    // menu.style.display = 'block' ;
})
blog3.addEventListener("click", function(){
    pop_up.style.display = 'block';
    console.log("mushaobs");
    // menu.style.display = 'block' ;
})

var back = document.getElementById("back") ;
back.addEventListener("click" , function(){
    pop_up.style.display = "none" ;
    // menu.style.display = 'block' ;
});


