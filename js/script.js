let contactForm = document.querySelector(".contact-form__form")
let contactFormButton = document.querySelector(".contact-form__icon")

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
        if (!contactFormButton.classList.contains("active")) {
            contactFormButton.click()
        }
    }, 8000);
})

$('#modal').on('show.bs.modal', function(e) {
    contactFormButton.classList.add("active");
})
$('#modal').on('hide.bs.modal', function(e) {
    contactFormButton.classList.remove("active");
})

// openContactForm = () => {
//     play()
//     contactFormButton.classList.toggle("active");
//     contactForm.classList.remove("hidden");

//     contactForm.classList.toggle("animate__slideInUp");
//     contactForm.classList.toggle("animate__slideOutDown");
// }

play = () => {
    let audio = document.getElementById("audio");
    audio.play();
}

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