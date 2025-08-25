
function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  if (firstname) {
    document.cookie = `firstname=${firstname}; path=/`;
  }
  if (email) {
    document.cookie = `email=${email}; path=/`;
  }
}


function showCookies() {

  const oldP = document.getElementById("cookiesDisplay");
  if (oldP) oldP.remove();

  const p = document.createElement("p");
  p.id = "cookiesDisplay";
  p.innerHTML = "Cookies: " + document.cookie;
  document.body.appendChild(p);
}


window.setCookies = setCookies;
window.showCookies = showCookies;
