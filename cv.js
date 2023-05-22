function myFunction() {
    var body = document.body;
    var sections = document.querySelectorAll('.masection');
       // toggle the theme
    body.classList.toggle("white");
    sections.forEach((sections) => {
        sections.classList.toggle("white");
    });
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
    let etude = document.getElementById('etude');
    let comp = document.getElementById('comp');
    let CI = document.getElementById('CI');
    let contact = document.getElementById('contact');

    let button2 = document.getElementById("button2")
    if (intro.innerHTML ==="Présentation",button2.innerHTML =="Japonais") {
        intro.innerHTML = "自己紹介";
        titreP.innerHTML = "職歴"
        etude.innerHTML = "学歴"
        comp.innerHTML = "特技"
        CI.innerHTML = "趣味‐得意科目"
        contact.innerHTML = "連絡";
        button2.innerHTML = "Français"
        
    }else{
        intro.innerHTML = "Présentation";
        titreP.innerHTML = "Experiences Professionnelles"
        etude.innerHTML = "Formation"
        comp.innerHTML = "Compétences"
        CI.innerHTML = "Centre d'interêt"
        contact.innerHTML = "Information de contact"

        button2.innerHTML = "Japonais";

    }
}