var acc = document.getElementsByClassName("mobile-view-drop-down");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function handleClick () {
      this.classList.toggle("inactive");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }