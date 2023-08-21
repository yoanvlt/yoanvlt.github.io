document.getElementById('menu-burger').addEventListener('click', function() {
    const navUl = document.querySelector('nav ul');

    if (navUl.style.display === 'none' || navUl.style.display === '') {
        navUl.style.display = 'flex';
    } else {
        navUl.style.display = 'none';
    }
});
