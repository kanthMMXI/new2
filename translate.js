/* translate.js */
async function translateText() {
    let text = document.getElementById('textInput').value;
    let targetLang = document.getElementById('languageSelect').value;
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    
    let response = await fetch(url);
    let result = await response.json();
    let translatedText = result[0].map(item => item[0]).join(' ');
    document.getElementById('outputText').innerText = translatedText;
}

function speakTranslation() {
    let translatedText = document.getElementById('outputText').innerText;
    if (!translatedText) {
        alert("No translated text to speak!");
        return;
    }
    let utterance = new SpeechSynthesisUtterance(translatedText);
    utterance.lang = document.getElementById('languageSelect').value;
    speechSynthesis.speak(utterance);
}
