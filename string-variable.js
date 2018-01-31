// Create variables to hold the name and note text.
var username;
var maessage;

// Assign values to these variables.
username = 'Molly';
message = 'See our upcoming range';

// Get the element with an id of name.
var e1Name = document.getElemntById('name');
// Replace the content of this element.
e1Name.textContent = username;

// Get the element with an id of note.
var e1Note = document.getElementById('note');
// Replace the content of this element.
e1Note.textContent = message;

