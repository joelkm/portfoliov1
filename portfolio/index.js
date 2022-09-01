//CURSOR RE-WORK
document.addEventListener('mousemove', (event)=>{
    var cursor = document.getElementById('cursor');
    var pointer = document.getElementById('pointer');    
    cursor.style.position='absolute'
    pointer.style.position='absolute'
    var posX = window.event.pageX;
    var posY = window.event.pageY;
    cursor.style.top=posY+2+'px';
    cursor.style.left=posX+2+'px';
    pointer.style.top=posY+2+'px';
    pointer.style.left=posX+2+'px';
});
/*POINTER AND CURSOR HIDE AND SHOW *Not working yet, need to figure out how to work with the clickables array*/
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

