function show() {
  document.getElementById("show_side").classList.toggle("left_0");
}
function openDashboard(evt, dashboard) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(dashboard).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function myFunction() {
  document.getElementById("demo").style.display = "block";
}
function cardClose() {
  document.getElementById("demo").style.display = "none";
}
