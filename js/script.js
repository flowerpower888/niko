let contactForm = document.querySelector(".contact-form__form")

window.addEventListener('load', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.querySelector(".header__image").classList.add("opacity");
    setTimeout(() => {
        document.querySelector(".preloader").classList.add('hidden');
    }, 1000);
    setTimeout(() => {
        // openContactForm()
        document.querySelector(".contact-form__icon").click()
    }, 8000);
    setTimeout(() => {
        if (document.querySelector(".contact-form__icon").classList.contains("active")) {
            document.querySelector(".contact-form__icon").click()
        }
    }, 16000);
})

// openContactForm = () => {
//     play()
//     document.querySelector(".contact-form__icon").classList.toggle("active");
//     contactForm.classList.remove("hidden");

//     contactForm.classList.toggle("animate__slideInUp");
//     contactForm.classList.toggle("animate__slideOutDown");
// }

play = () => {
    let audio = document.getElementById("audio");
    audio.play();
}

document.querySelector(".contact-form").addEventListener('click', () => {
    play()

    document.querySelector(".contact-form__icon").classList.toggle("active");
})



// Smooth scrolling
$('body').scrollspy({ target: ".navbar", offset: 50 });
$("#navbarSupportedContent a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    }
});