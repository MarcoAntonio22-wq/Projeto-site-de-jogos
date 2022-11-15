const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  window.location = "game_page.html";
};

form.addEventListener("submit", handleSubmit);
