const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#options').onclick = () => {
    navbarNav.classList.toggle('active');
};
const options = document.querySelector('#options');
document.addEventListener('click', function (e){
    if(!options.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove('active');
})

