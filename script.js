const profile = document.querySelector('.nav-profile-img');
const menu_bar = document.getElementById('menu');
const modeButton=document.getElementById('dark-btn');

profile.addEventListener('click',function(){
    menu_bar.classList.toggle('menu-open')
})
document.querySelector('main').addEventListener('click',function(){
    menu.classList.remove('menu-open');
})

modeButton.onclick=function(){
    modeButton.classList.toggle("dark-btn-on")
    document.body.classList.toggle('dark-theme'); 
    if(localStorage.getItem('theme')==='dark'){
        localStorage.setItem('theme','light');
    }else{
        localStorage.setItem('theme','dark')
    }
}

if(localStorage.getItem('theme')==='light'){
    modeButton.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}else if(localStorage.getItem('theme')==='dark'){
    modeButton.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}else{
    localStorage.setItem('theme','light');
}

const sidebarActivity=document.querySelector('.sidebar-activity');
const seeMore= document.getElementById('show-more-link');
seeMore.addEventListener('click',function(){
    sidebarActivity.classList.toggle('open-activity');
    if(sidebarActivity.classList.contains('open-activity')){
        seeMore.innerHTML="See Less <b>-</b>";
    }else{
        seeMore.innerHTML="See More <b>+</b>";
    }
})