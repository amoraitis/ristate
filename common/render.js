

  document.addEventListener("DOMContentLoaded", function() {
    var baseUrl = window.location.origin + "/common/";
    fetch("common/header.html")
      .then(response => response.text())
      .then(html => {
        document.getElementsByTagName("header")[0].innerHTML = html;
      })
      .then(() => {
        fetch("common/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer")[0].innerHTML = html;
        })
        .then(addEvents);
      })
  }, false);