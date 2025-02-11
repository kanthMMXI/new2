function speakTranslation() {
    let translatedText = document.getElementById('outputText').innerText.trim();

    if (!translatedText) {
        alert("No translated text to speak!");
        console.error("No translated text found in #outputText");
        return;
    }

    let utterance = new SpeechSynthesisUtterance(translatedText);
    utterance.lang = "it-IT";  // Change this to match translation output language
    utterance.rate = 1;  // Adjust speech speed if needed

    console.log("Speaking:", translatedText);

    speechSynthesis.cancel();  // Stop any ongoing speech
    speechSynthesis.speak(utterance);
}
