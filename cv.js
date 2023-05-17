function myFunction() {
    var body = document.body;
       // toggle the theme
    body.classList.toggle("white");
    let button = document.getElementById('button');
    
       // change the button text
    if (button.innerHTML == "Light Mode") {
        button.innerHTML = "Normal Mode";
    } else {
        button.innerHTML = "Light Mode"
    }
    }
    