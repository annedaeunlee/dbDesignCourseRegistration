function create() {
  var names = window.location.search.split("=");
  var firstName = names[1];
  var lastName = names[2];
 // var firstName = document.getElementById("first").value;
//  var lastName = document.getElementById("last").value;

  createStudent(firstName, lastName)
}


