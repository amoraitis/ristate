

  document.addEventListener("DOMContentLoaded", function() {
    
    var baseUrl = window.location.origin + "/common/";
    fetch("https://raw.githubusercontent.com/amoraitis/ristate/main/common/header.html")
      .then(response => response.text())
      .then(html => {
        if (window.location.origin.indexOf("properties") == -1){
          
      
        }
        document.getElementsByTagName("header")[0].innerHTML = html;
      })
      .then(() => {
        fetch("https://raw.githubusercontent.com/amoraitis/ristate/main/common/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementsByTagName("footer")[0].innerHTML = html;
        })
        .then(addEvents);
      })
  }, false);