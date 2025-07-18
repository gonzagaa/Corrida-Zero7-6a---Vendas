
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
      src="https://www.youtube.com/embed/uXFdXXJTHn0?autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
});

// Data final: 24 de junho de 2025 às 00:01:00 (horário local)

const dataFinal = new Date("2025-07-20T23:59:00");

const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');
const mensagemEl = document.getElementById('mensagem');

function atualizarContagem() {
  const agora = new Date();
  const diferenca = dataFinal - agora;

  if (diferenca <= 0) {
    clearInterval(intervalo);
    diasEl.innerText = "00";
    horasEl.innerText = "00";
    minutosEl.innerText = "00";
    segundosEl.innerText = "00";
    mensagemEl.innerText = "Tempo esgotado!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  diasEl.innerText = dias.toString().padStart(2, '0');
  horasEl.innerText = horas.toString().padStart(2, '0');
  minutosEl.innerText = minutos.toString().padStart(2, '0');
  segundosEl.innerText = segundos.toString().padStart(2, '0');
}

const intervalo = setInterval(atualizarContagem, 1000);
atualizarContagem(); // Inicializa já com os valores corretos

document.addEventListener("DOMContentLoaded", () => {
  const tarja = document.querySelector(".tarjaTimerNav");
  const nav = document.querySelector("#navigation");
  const header = document.querySelector("#home");

  if (!tarja || !nav || !header) return;

  // Após 3 segundos, ativa a tarja e mantém fixa
  setTimeout(() => {
    tarja.classList.add("active");
    nav.classList.add("activeTarja");
    header.classList.add("activeTarjaHome");
  }, 3000);
});



