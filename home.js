var bar = document.getElementById('bar');
var nav = document.getElementById('link');
var close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })

}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })

}
windows.alert('got it')
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function mineFunction() {
    document.getElementById("myDrodown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.drobtn')) {
      var drodowns = document.getElementsByClassName("drodown-content");
      var i;
      for (i = 0; i < drodowns.length; i++) {
        var openDrodown = drodowns[i];
        if (openDrodown.classList.contains('show')) {
          openDrodown.classList.remove('show');
        }
      }
    }
  }