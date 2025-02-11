function speakTranslation() {
    let translatedText = document.getElementById('outputText').innerText.trim();
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

    let selectedLang = speechLangMap[langCode] || "en-US"; // Default to English

    let utterance = new SpeechSynthesisUtterance(translatedText);
    utterance.lang = selectedLang;
    utterance.rate = 1; // Normal speed

    // Clear any ongoing speech before speaking
    speechSynthesis.cancel();

    function speakNow() {
        let voices = speechSynthesis.getVoices();
        let selectedVoice = voices.find(voice => voice.lang.startsWith(selectedLang));

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        console.log("Speaking:", translatedText, "in", selectedLang);
        speechSynthesis.speak(utterance);
    }

    // Ensure voices are loaded before speaking
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = speakNow;
    } else {
        speakNow();
    }
}
