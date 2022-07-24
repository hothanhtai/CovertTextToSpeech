const convert = document.querySelector('.convert')
const textarea = document.querySelector('.textarea')

let speech = new SpeechSynthesisUtterance();

convert.addEventListener('click',() => {
    speech.text = textarea.value;
    speech.pitch = 1;
    speech.volume = 1;
    speech.lang = 'vi-VN';
    speech.rate = 1;
    speechSynthesis.speak(speech);
})