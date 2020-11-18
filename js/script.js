let contactForm = document.querySelector(".contact-form form");
let contactFormButton = document.querySelector(".contact-form__icon");
let furnitureCatalog = document.querySelector(".furniture__catalog");

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("hidden");
  }, 2000);

  // if ("scrollRestoration" in history) {
  //   history.scrollRestoration = "manual";
  // }
  // window.scrollTo(0, 0);

  setTimeout(() => {
    if (!contactFormButton.classList.contains("active")) {
      contactFormButton.click();
    }
  }, 8000);
});

$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$("#modal").on("show.bs.modal", function (e) {
  contactFormButton.classList.add("active");
});
$("#modal").on("hide.bs.modal", function (e) {
  contactFormButton.classList.remove("active");
});

// Smooth scrolling
$("body").scrollspy({ target: ".navbar", offset: 50 });
$("#navbarSupportedContent a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});

//load more button
$(document).ready(function () {
  $(".catalog__item").slice(0, 4).show();
  $(".load-more-button").on("click", function (e) {
    e.preventDefault();
    $(".catalog__item:hidden").slice(0, 4).slideDown();
    if ($(".catalog__item:hidden").length == 0) {
      $(".load-more-button").fadeOut("slow");
    }
  });
});

let touchStart = null;
furnitureCatalog.addEventListener("touchstart", function (e) {
  touchStart = e.changedTouches[0];
});
furnitureCatalog.addEventListener("touchend", function (e) {
  let end = e.changedTouches[0];
  if (end.screenX - touchStart.screenX > 0) {
    translateX(e, 1); //right
  } else if (end.screenX - touchStart.screenX < 0) {
    translateX(e, -1); //left
  }
});

let translate = 1;

function translateX(e, touchDirection) {
  let itemWidth = document.querySelector(".furniture__catalog_item").offsetWidth;
  if (e.cancelable) {
    e.preventDefault();
  }
  if (e.type === "wheel") {
    translate += ((e.deltaY * -1) / 100) * (itemWidth * 2);
  } else if (e.type === "touchend") {
    translate += touchDirection * itemWidth * 2;
  }
  translate = Math.min(Math.max(-(itemWidth * 14), translate), 0);
  furnitureCatalog.style.transform = `translateX(${translate}px)`;
}
furnitureCatalog.addEventListener("wheel", translateX);

contactForm.addEventListener(
  "submit",
  function (e) {
    let button = document.querySelector(".contact-form form button");
    let name = document.querySelector(".contact-form #name").value;
    let phone = document.querySelector(".contact-form #phone").value;

    function sendEmail() {
      contactForm.classList.add("was-validated");
      button.classList.toggle("button-loading");
      Email.send({
        Host: "smtp.gmail.com",
        Username: "oingooboingo@gmail.com",
        Password: "ixpgccvrjdlhqifu",
        To: "oingooboingo@gmail.com",
        From: "oingooboingo@gmail.com",
        Subject: "call",
        Body: ` 📟 ${name}, ${phone}`,
      }).then((message) => {
        console.log(message);
        contactForm.reset();
        button.classList.toggle("button-loading");
        document.querySelector(
          ".modal-body"
        ).innerHTML = `<p>Спасибо, мы перезвоним вам в течение нескольких часов!</p>`;
      });
    }
    e.preventDefault();
    contactForm.classList.add("was-validated");

    if (!contactForm.checkValidity()) {
      e.stopPropagation();
    } else {
      e.preventDefault();
      sendEmail();
    }
  },
  false
);
