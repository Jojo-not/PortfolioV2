

document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm("service_0ndnwg2", "template_mqjdcxe", this)
            .then(function() {
                Swal.fire({
                    title:"Message Sent Success",
                    icon:"success"
                });
            }, function(error) {
                Swal.fire("SweetAlert2 is working!");
            });
    })


   document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  updateIcon(savedTheme);

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    let currentTheme = document.body.getAttribute("data-theme");
    let newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === "dark") {
      themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    } else {
      themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
    }
  }
});
