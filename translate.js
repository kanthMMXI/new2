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

    let selectedLang = speechLangMap[langCode] || "en-US"; // Default fallback

    let utterance = new SpeechSynthesisUtterance(translatedText);
    utterance.lang = selectedLang;
    utterance.rate = 1; // Normal speed

    // Try setting a proper voice
    let voices = speechSynthesis.getVoices();
    let selectedVoice = voices.find(voice => voice.lang.startsWith(selectedLang));

    if (selectedVoice) {
        utterance.voice = selectedVoice;
    } else {
        console.warn("No suitable voice found for", selectedLang, "- using default.");
    }

    console.log("Speaking:", translatedText, "in", selectedLang);

    // Ensure voices are loaded before speaking
    speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.speak(utterance);
    };

    // Speak after a slight delay to prevent Chrome issues
    setTimeout(() => {
        speechSynthesis.speak(utterance);
    }, 200);
}
