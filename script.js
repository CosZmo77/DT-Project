const testimonials = [
  {
    name: "Edward Newgate",
    role: "Founder Circle",
    testimonial:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously...",
    image: "assests/image 1.png",
  },
  {
    name: "John Doe",
    role: "Product Manager",
    testimonial: "The product has significantly streamlined our process...",
    image: "assests/1-intro-photo-final.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  testimonials.forEach((person) => {
    const testimonialSlide = document.createElement("div");
    testimonialSlide.classList.add("swiper-slide");

    testimonialSlide.innerHTML = `
            <div class="testimonial">
                <img src="${person.image}" alt="${person.name}">
                <h4>${person.name}</h4>
                <p>${person.role}</p>
                <p>“${person.testimonial}”</p>
            </div>
        `;

    swiperWrapper.appendChild(testimonialSlide);
  });

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
});
