let menuOpen = document.getElementById('menu-open');
let menuClose = document.getElementById('menu-close');

let respNav = document.querySelector('.resp-nav-menu');
let blackLayer = document.querySelector('.resp-nav-black-layer');

menuOpen.addEventListener('click',(e)=>{

        respNav.classList.remove('menu-hide')
        respNav.classList.add('menu-dispaly')
        
        blackLayer.style.display = "unset";
        blackLayer.style.backgroundColor = "rgba(0,0,0,0.5)";
    
})


menuClose.addEventListener('click',(e)=>{

        respNav.classList.add('menu-hide')
        respNav.classList.remove('menu-dispaly')
        
        blackLayer.style.display = "none";
        blackLayer.style.backgroundColor = null;
})