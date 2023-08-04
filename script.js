const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const typeWritter = document.querySelector('.typewritter');
const bgImage = document.querySelector('.bg-image');

container.addEventListener('click', function(e){
    if (e.target.className == 'thumb'){
         // Remove 'active' class from all thumbnails
         const thumbs = document.querySelectorAll('.thumb');
         thumbs.forEach(thumb => thumb.classList.remove('active'));
        jumbo.src = e.target.src;
        bgImage.src = e.target.src;
        jumbo.classList.add('fade');
        bgImage.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
            bgImage.classList.remove('fade');
        }, 500);
        e.target.classList.add('active');
    }
});

setTimeout(function(){
    typeWritter.removeChild(typeWritter.lastChild);
}, 8000);

