const hmbgrEl = document.getElementById('hamburger');
console.log(hmbgrEl);

const toggleNav = () => {
    document.querySelector('nav .navbar').classList.toggle('show');
    hmbgrEl.classList.toggle('close');
}

const hmbgrClickHanlder = () => {
    toggleNav();
}

hmbgrEl.addEventListener('click', hmbgrClickHanlder);