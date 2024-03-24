// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav =header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamberger
const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click', function() {
    hamberger.classList.toggle('hamberger-active');
    navMenu.classList.toggle('hidden');
});


// kontak
const contactform = document.getElementById('contactform');

contactform.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactform);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    const { name, email, message } = formDataObject;
    alert(`Nama ${name}\nEmail ${email}\nPesan ${message}`);
    contactform.reset();
});

