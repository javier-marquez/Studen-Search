var message = '';
var student;
var search;
var found;
var searchResults = []; //An array of objects

//Printing inside the div with the output id
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//Returning all information for all students
function allstudents(listStudents){
  var allStudentlist=''; //variable must be initialized, inner scope, this will be a string
for (var i = 0; i < listStudents.length; i += 1) {
  student = listStudents[i];
  allStudentlist += '<h2>Student: ' + student.name + '</h2>';
  allStudentlist += '<p>Track: ' + student.track + '</p>';
  allStudentlist += '<p>Points: ' + student.points + '</p>';
  allStudentlist += '<p>Achievements: ' + student.achievements + '</p>';
  }
  return allStudentlist;
}

//Returns information for one student only
//function getStudentReport ( student ){
//    var report = '<h2>Student: ' + student.name + '</h2>';
//    report += '<p>Track: ' + student.track + '</p>';
//    report += '<p>Points: ' + student.points + '</p>';
//    report += '<p>Achievements: ' + student.achievements + '</p>';
//    return report;
//}

//Creates an array of results
function resultsArray ( array ) {
searchResults = [];  //Reinitilaizing outside the loop
for (var i = 0; i < array.length; i += 1) {
    student = array[i];
    if (student.name.toLowerCase() === search.toLowerCase() ){
      found = true;
      searchResults.push(student); //Enter the object into the temporary array of results

      }     
  }
  return searchResults;  //return a subset of results
}


while (true) {
  found = false; //everytime the loop starts false is reinitilized
  search = prompt("Let's search for an student, type 'all' for all students and 'quit' to exit");
  //exits if quit or null
  if ( search === null || search.toLowerCase() === 'quit' ){
    break;
  } if (search.toLowerCase() === 'all' ){  //Searching for all students
      found = true;
      message = allstudents(students); //allstudents function applied to the students array of objects
      print(message);
      ;
  } 
  resultsArray(students);  //calling a function to create a temporary array with the results
  if (typeof searchResults !== 'undefined' && searchResults.length > 0)  {  //if the results are there print the message
  message = allstudents(searchResults); //allstudents function applied to the students subset or results
  print(message);
  } else  if (!found ) {
    alert("There is no student with the name " + search + ".");
} 
}
  
  
  
  
