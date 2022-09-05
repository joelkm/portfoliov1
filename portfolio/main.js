//GENERAL DOM ACCES
var headers = document.querySelectorAll('.sec-header');
var texts= document.querySelectorAll('.sec-text')


//NAVIGATE ON CLICK
document.querySelectorAll('nav li').forEach((listitem)=>{
    listitem.addEventListener('click', ()=>{
        var topPosition=document.getElementById(listitem.dataset.page).offsetTop - 500;
        window.scrollTo({
            top: topPosition,
            left: 0,
            behavior: 'smooth'
        })
    });
})

//APPEAR ANIMATION
function appear(element){
    console.log('appearing...');
    element.classList.remove('occult');
}
function disappear(element){
    console.log('disappearing...');
    element.classList.add('occult');
}

//SCROLL BEHAVIOR
scrollTimeout = null;

$(window).scroll(function () {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
            console.log('scroll');            
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
            headers.forEach((element)=>{
                if ($(window).scrollTop() >= (element.offsetTop - 500)) appear(element);
                else disappear(element);
            });
            texts.forEach((element)=>{
                if ($(window).scrollTop() >= (element.offsetTop - 800)) appear(element);
                else disappear(element);
            });
        }, 250);
    }
});








//CURSOR RE-WORK *ignore*

function relocateCursor(){
    var cursor = document.getElementById('cursor');
    var pointer = document.getElementById('pointer');    
    var posX = window.event.pageX;
    var posY = window.event.pageY;
    console.log('ejecutado');
    cursor.style.top=posY+2+'px';
    cursor.style.left=posX+2+'px';
    pointer.style.top=posY+2+'px';
    pointer.style.left=posX+2+'px';
}

document.addEventListener('mousemove', (event)=>{
    relocateCursor(event);
});




/*

document.addEventListener('mousemove', (event)=>{
    relocateCursor(event);
});


//POINTER AND CURSOR HIDE AND SHOW *Not working yet, need to figure out how to work with the clickables array
var clickables = document.getElementsByClassName('clickable');
clickables.forEach((i)=>{
        clickables[i].addEventListener('onmouseover', (event)=>{
        console.log('mouseover');
        var cursor = document.getElementById('cursor');
        var pointer = document.getElementById('pointer');
        cursor.style.visibility='hidden';
        pointer.style.visibility='visible';
    });
})
*/