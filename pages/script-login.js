"use strick";
/* loginPage */
const signinForm = document.querySelector(".sign_in");
const usernameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");
const logoutEl = document.querySelector(".log_out ");
const logoutBtn = document.querySelector('.logOut')
window.addEventListener("load", () => {
  if (localStorage.getItem("token")) {
    signinForm.classList.add("hide");
    logoutEl.classList.remove("hide");
  } else {
    signinForm.classList.remove("hide");
    logoutEl.classList.add("hide");
  }
});
signinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username: `${usernameEl.value}`,
        password: `${passwordEl.value}`,
      }),
    });
    const data = await response.json();

    signinForm.classList.add("hide");
    logoutEl.classList.remove("hide");
    localStorage.setItem("token", data.token);
    window.location.href = "/index.html";  /* TODO */
  } catch (err) {
    alert(err);
  }
});

logoutBtn.addEventListener('click',()=>{
    signinForm.classList.remove("hide");
    logoutEl.classList.add("hide");
    localStorage.removeItem("token");
})
/* loginPage */
