/*----------------- DROPDOWN FUNCTIONALITY ----------------- */

var btn = document.getElementsByClassName('link_btn');
for (i=0 ; i < btn.length ; i++){
    btn[i].addEventListener('click' , function(){
        var currentMenu = this.nextElementSibling;
        currentMenu.classList.toggle("active");
        });
    }

/*----------------- CAROUSEL FUNCTIONALITY ----------------- */

var prev = document.getElementById('prev');
var next = document.getElementById('next');
var slide = document.getElementsByClassName('slide');
var slideNumber = 0;
function showSlide(n){
    for(i = 0 ; i<slide.length;i++){
        slide[i].className = slide[i].className.replace(/\b current\b/g, "");
        slide[i].className = slide[i].className.replace(/\b slideDown\b/g, "");
    }
    if(n > slide.length-1){
        slideNumber = 0;
        slide[slideNumber].className += " current";        
    }
    else if(n<0){
        slideNumber = slide.length-1;
        slide[slideNumber].className += " current";
    }
    else{
        slide[n].className+=" current";  
    }    
}

showSlide(slideNumber); /*----- SHOWS DEFAULT SLIDE ON WINDOW LOAD ----- */

function prevSlide(){  
    showSlide(slideNumber-=1);
    if(slideNumber == slide.length-1){
        slide[0].className += " slideDown";
    }
    else{
        slide[slideNumber + 1].className += " slideDown";
    }
}
function nextSlide(){  
    showSlide(slideNumber+=1);
    if(slideNumber == 0){
        slide[slide.length-1].className += " slideDown";
    }
    else{
    slide[slideNumber - 1].className += " slideDown";
    }
}
prev.addEventListener('click', prevSlide );
next.addEventListener('click' , nextSlide );

/*----------------- NAVIGATION TAB SWITCH FUNCTIONALITY ----------------- */

var tab = document.getElementsByClassName('allTabs');
var tab_content = document.getElementsByClassName('tab_content');

function swap(a){
    for( i = 0; i<tab.length; i++){
        tab[i].className = tab[i].className.replace(/\b currentTab\b/g , ""); 
        tab_content[i].className = tab_content[i].className.replace(/\b active\b/g , "");         
    }
    a.className += " currentTab";
    var tab_id = a.getAttribute("href").slice(1);
    document.getElementById(tab_id).className += " active";
    }
for( i = 0; i<tab.length; i++){
    tab[i].addEventListener('click' , function(i){
        swap(i.target);
    });
}

/*----------------- CAROUSEL FUNCTIONALITY ----------------- */
var collapse_title = document.getElementsByClassName('collapse_title');
var collapse_content = document.getElementsByClassName('collapse_content');
function collapseToggle(a){
    a.nextElementSibling.classList.toggle("active");   
}
for( i = 0; i<collapse_title.length; i++){
    collapse_title[i].addEventListener('click' , function(i){
        collapseToggle(i.target);
    });
}

/*----------------- MODAL POPUP FUNCTIONALITY ----------------- */

var modal = document.getElementById('popup');
var close = document.getElementById('close');
var popup;
modal.addEventListener('click' , function(){
    popup = this.nextElementSibling;
    popup.className+=" active";
});
close.addEventListener('click', function(){
    popup.className = popup.className.replace(/\b active\b/g , "");         
} );