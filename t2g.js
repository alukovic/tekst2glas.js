btnGlas = document.querySelector('#btnGlas');
txtUlaz = document.querySelector('#txtUlaz'); 

pocetnaPoruka = 'Hello my name is Java Script and enter some text to speech.'; 

window.addEventListener('DOMContentLoaded', () => {

    const govor = new SpeechSynthesisUtterance(pocetnaPoruka);
    //govor.lang = 'sr';
    
    govor.volume = 1;
    govor.rate = 1;
    govor.pitch = 1; 
    
    window.speechSynthesis.speak(govor);
    
});

btnGlas.addEventListener('click', () => {

    const tekst = txtUlaz.value; 
    const govor = new SpeechSynthesisUtterance(tekst);
    //govor.lang = 'sr';

    govor.volume = 1;
    govor.rate = 1;
    govor.pitch = 1; 
    
    window.speechSynthesis.speak(govor);

});

container = document.querySelector('.container');
//btnGlas.style.margin = '0, auto, 0 auto'; 

btnNoviUnos = document.querySelector('#btnNoviUnos');

btnNoviUnos.addEventListener('click', function(){
    window.location.reload(true);
});




