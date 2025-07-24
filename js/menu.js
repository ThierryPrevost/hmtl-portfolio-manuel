$(document).ready(function(){
    $('#menuToggle').click(function(){
        $('#mainNav').stop(true, true).slideToggle()
    })
})

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function clickClose() {
    var x = document.getElementById("mainNav");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

