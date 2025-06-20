document.getElementById("registerForm")?.addEventListner("Submit", function (e)
                                                         e.preventDefault();
const username = document.getElementById('regUsername").value;
const password = document.getElementById("regPassword").value;

localStorage.setItem("user", JSON.stringfly({username,password}));
alert("Registered! Now login.");
widnow.location.href = "login.html";
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username= document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser && username === storedUser.username && password === storedUser.p
      localStorage.setItem("loggedUser", username);
      window.location.href = "dashboard.html";
} else {

                                                      alert("Incorrect username or password."):
}
});
                                                       
                                    
