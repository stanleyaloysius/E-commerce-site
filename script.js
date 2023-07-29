const bar = document.getElementById('bar');
const clse = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(clse) {
    clse.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}