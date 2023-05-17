function myFunction() {
    var body = document.body;
    var section = document.getElementById('masection');
    var section2 = document.getElementById('masection2');
    var section3 = document.getElementById('masection3');
    var section4 = document.getElementById('masection4');
    var section5 = document.getElementById('masection5');
       // toggle the theme
    body.classList.toggle("white");
    section.classList.toggle("white");
    section2.classList.toggle("white");
    section3.classList.toggle("white");
    section4.classList.toggle("white");
    section5.classList.toggle("white");
    let button = document.getElementById('button');
    
       // change the button text
    if (button.innerHTML == "Light Mode") {
        button.innerHTML = "Normal Mode";
    } else {
        button.innerHTML = "Light Mode"
    }
    }
    