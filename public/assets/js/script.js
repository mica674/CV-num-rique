$navLink = document.querySelectorAll('.nav-link');
$navCollapse = document.querySelector('.navbar-collapse');


$navLink.forEach(e => {
    e.addEventListener('click', ()=>{
        $navCollapse.classList.remove('show');
    })
});