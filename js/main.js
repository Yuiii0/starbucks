const searchIcon = document.querySelector(".search");
const searchInput = document.querySelector(".search input");

searchIcon.addEventListener("click", () => {
  searchInput.focus();
});
searchInput.addEventListener("focus", () => {
  searchIcon.classList.add("focused");
  searchInput.setAttribute("placeholder", "통합검색");
});

searchInput.addEventListener("blur", () => {
  searchIcon.classList.remove("focused");
  searchInput.setAttribute("placeholder", "");
  searchInput.value = "";
});

// Badge
const badges = document.querySelector(".badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // gsap.to(요소,지속시간,옵션);
      gsap.to(badges, 0.5, {
        opacity: 0,
        display: "none",
      });
      //top버튼 보이기
      gsap.to("#to-top", 0.2, {
        x: 0,
      });
    } else {
      //배지 보이기
      gsap.to(badges, 0.6, {
        opacity: 1,
        display: "block",
      });
      //top 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300) //0.3초단위로 부하를 준다.
);
//_.throttle(함수,시간)

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

//visual fade-in animation
const fadeIn = document.querySelectorAll(".fade-in");
fadeIn.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7   1.4   2.1  2.8
    opacity: 1,
  });
});

// Swiper: notice
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

//Swiper: promotion
new Swiper(".promotion .swiper", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 30, //슬라이드 사이 여백
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

//Swiper: Awards
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

//Promotion: toggle
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김
    promotionEl.classList.add("hide");
  } else {
    //보임
    promotionEl.classList.remove("hide");
  }
});

//Floating animation

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소,지속시간,옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    {
      //옵션
      y: size,
      repeat: -1, //무한반복
      yoyo: true, //재생되는 애니메이션 뒤로 작성
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating1", 0.5, 15);
floatingObject(".floating1", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});

// Copyright
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
