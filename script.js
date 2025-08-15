    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('main-navbar');
        if (window.pageYOffset > 0) { 
            navbar.classList.add('navbar-shadow');
        } else {
            navbar.classList.remove('navbar-shadow');
        }
    });

    window.addEventListener('resize', () => {
  AOS.refresh();
});

AOS.init({
  offset: 200, 
  duration: 1000,
  once: true
});



if (window.innerWidth < 900) {
  document.querySelectorAll('.about-section [data-aos]').forEach(el => {
    el.removeAttribute('data-aos');
  });
}

const menu=document.getElementById("menu");
const sideBar=document.querySelector(".sidebar");

function showsideBar(){
  sideBar.style.transform="translateX(0)"; 
}


function closesideBar(){
  sideBar.style.transform="translateX(100%)"; 
}

function hidesideBar(){
  sideBar.style.transform="translateX(100%)"; 
  sideBar.style.transistion="transform .1s ease" ;
}


const cursorDot=document.querySelector(".cursor-dot");
const cursorOutline=document.querySelector(".cursor-outline");

window.addEventListener('mousemove',(e)=>{

  const posX=`${e.clientX}px`;
  const posY=`${e.clientY}px`;

  cursorDot.style.left=posX;
  cursorDot.style.top=posY;

  cursorOutline.animate({
    left:posX, top:posY
  },{duration:500,fill:"forwards"})

})
