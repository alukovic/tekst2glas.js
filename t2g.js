btnGlas = document.querySelector('#btnGlas');
txtUlaz = document.querySelector('#txtUlaz'); 

pocetnaPoruka = 'Hello World. My name is Java Script and enter some text to Web speech'; 

window.addEventListener('load', function(){

    const Speech = new SpeechSynthesisUtterance(pocetnaPoruka);
    
    Speech.volume = 1;
    Speech.rate = 1;
    Speech.pitch = 1; 
    
    window.speechSynthesis.speak(Speech);
    
});


btnGlas.addEventListener('click', function(){

    const tekst = txtUlaz.value; 
    const Speech = new SpeechSynthesisUtterance(tekst);
    
    Speech.volume = 1;
    Speech.rate = 1;
    Speech.pitch = 1; 
    
    window.speechSynthesis.speak(Speech);

});

container = document.querySelector('.container');
//btnGlas.style.margin = '0, auto, 0 auto'; 

btnNoviUnos = document.querySelector('#btnNoviUnos');

btnNoviUnos.addEventListener('click', function(){
    window.location.reload(true);
});




