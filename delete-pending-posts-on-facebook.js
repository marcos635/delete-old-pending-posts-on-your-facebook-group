//ENSURE YOU ARE LOGGED IN AS AN THE GROUP'S MODERATOR OR ADMIN AND NAVIGATE TO THE PENDING POSTS PAGE
//PRESS CTRL + SHIFT + I TO OPEN THE BROWSER CONSOLE AND PASTE THESE FOLLOWING CODES LINE BY LINE

function deleteButtons() {
    var recusar = document.querySelectorAll('.sx_67dd83');
    recusar.forEach(btn => btn.click());
}
//function select all delete buttons on screen, bot clicks all the selected delete buttons

function confirmdelete() {
    var excluir = document.querySelectorAll('.layerConfirm'); 
    excluir.forEach(btn => btn.click());
}
//function selects all the delete confirmation buttons on the screen, bot clicks on all selected delete confirmation buttons.

var del = setInterval( deleteButtons, 8000);
//Automatically clicks and waits 8 seconds to perform the next function

var confirm = setInterval( confirmdelete, 3000);

//Refresh the page and run the 
