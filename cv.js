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
    if (button.innerHTML == "Light") {
        button.innerHTML = "Dark";
        button.style.color = "white";
        button.style.backgroundColor = "black";
        button.style.boxShadow = "0 9px white";
        button.addEventListener('mouseover', function handleMouseOver() {
            button.style.backgroundColor = '#c6ccc6';
        });
        button.addEventListener('mouseout', function handleMouseOut() {
            button.style.backgroundColor = 'black';
        });

        
    } else {
        button.innerHTML = "Light";
        button.style.color = "black";
        button.style.backgroundColor = "white";
        button.style.boxShadow = "0 9px #090909";
        button.addEventListener('mouseover', function handleMouseOver() {
            button.style.backgroundColor = '#d5d7d5';
        });
        button.addEventListener('mouseout', function handleMouseOut() {
            button.style.backgroundColor = 'white';
        });
    }
    }

function jap(){
    let intro = document.getElementById('pres');
    let titreP = document.getElementById('pro');
    let etude = document.getElementById('etude')

    let button2 = document.getElementById("button2")
    if (intro.innerHTML ==="Présentation",button2.innerHTML =="Japonais") {
        intro.innerHTML = "自己紹介";
        titreP.innerHTML = "職歴"
        etude.innerHTML = "学歴"

        button2.innerHTML = "Français"
        
    }else{
        intro.innerHTML = "Présentation";
        titreP.innerHTML = "Experiences Professionnelles"
        etude.innerHTML = "Formation"
        button2.innerHTML = "Japonais";

    }
}