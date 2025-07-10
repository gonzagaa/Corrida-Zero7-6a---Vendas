
AOS.init(
  {
      duration: 1200,
  }
);

const larguraDaTela = window.innerWidth
  
if (larguraDaTela < 800) {
    var swiper3 = new Swiper(".mySwiper3", {
        grabCursor: true,
        effect: "creative",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
} else {
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

if (larguraDaTela < 800) {
  var swiper4 = new Swiper(".mySwiper4", {
      grabCursor: true,
      autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
} else {
  var swiper4 = new Swiper(".mySwiper4", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}

const vslDiv = document.getElementById("vsl");

vslDiv.addEventListener("click", () => {
  vslDiv.innerHTML = `
    <iframe width="100%" height="100%" 
      src="https://www.youtube.com/embed/XnhQyOG09d4?autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
});

// Ajuste para data-alvo 05/03/2025:
const targetDate = new Date("2025-04-29T00:00:00");

// Atualiza o timer a cada segundo
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Atualiza ao carregar a página

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Tempo esgotado!";
    clearInterval(timerInterval);
    return;
  }

  // Cálculos de dias, horas, minutos, segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Cria 4 "caixas", cada uma com número + unidade
  const countdownHTML = `
    <div class="time-container">
      <div class="time-box">
        <span class="count-number">${days}</span>
        <span class="count-unit">d</span>
      </div>
      <div class="time-box">
        <span class="count-number">${hours}</span>
        <span class="count-unit">h</span>
      </div>
      <div class="time-box">
        <span class="count-number">${minutes}</span>
        <span class="count-unit">m</span>
      </div>
      <div class="time-box">
        <span class="count-number">${seconds}</span>
       <span class="count-unit">s</span>
      </div>
    </div>
  `;

  // Insere na tela
  document.getElementById("countdown").innerHTML = countdownHTML;
}






