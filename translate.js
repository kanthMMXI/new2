function speakTranslation() {
    let translatedText = document.getElementById('outputText').innerText;
    if (!translatedText) {
        alert("No translated text to speak!");
        return;
    }

    let langCode = document.getElementById('languageSelect').value;
    let speechLangMap = {
        "si": "si-LK",  // Sinhala (Sri Lanka)
        "ta": "ta-IN",  // Tamil (India)
        "tl": "tl-PH"   // Tagalog (Philippines)
    };

    let utterance = new SpeechSynthesisUtterance(translatedText);
    utterance.lang = speechLangMap[langCode] || langCode;

    console.log("Speaking:", translatedText, "in", utterance.lang);

    // Small delay to fix Chrome issues
    setTimeout(() => {
        speechSynthesis.speak(utterance);
    }, 100);
}
