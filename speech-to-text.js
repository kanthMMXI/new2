/* speech-to-text.js */
const startRecordingButton = document.getElementById("start-recording");
const textInput = document.getElementById("textInput");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "it-IT";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

startRecordingButton.addEventListener("click", () => {
    recognition.start();
    console.log("Speech recognition started...");
});

recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    console.log("Recognized speech:", speechResult);
    textInput.value = speechResult;
    translateText();
};

recognition.onspeechend = () => {
    recognition.stop();
    console.log("Speech ended...");
};
