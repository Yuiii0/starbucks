// Header
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

//Footer

// Copyright
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
