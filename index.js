const hamburger=document.querySelector(".hamburger");
const headerRight=document.querySelector(".header-right");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerRight.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    headerRight.classList.remove("active");
}))

document.addEventListener('DOMContentLoaded', (event) => {
    const texts = document.querySelector('.texts');
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition


    window.botpressWebChat.init({
        "composerPlaceholder": "Hi! How can i help you",
        // "botConversationDescription": "Made by SP",
        "botName": "IOAGPL Bot",
        "botId": "27a85659-0121-49dc-bf62-6e4a69fec085",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "27a85659-0121-49dc-bf62-6e4a69fec085",
        "webhookId": "d01e4edf-23dc-49db-9276-abae697088f4",
        "lazySocket": true,
        "showBotInfoPage": true,
        "avatarUrl": 'data:image/webp;base64,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' , 
        "themeName": "prism",
        "frontendVersion": "v1",
        // "showPoweredBy": true,
        "className": "webchatIframe",
        // 'className': 'webchatIframe',
        // 'containerWidth': '50%20',
        // 'layoutWidth': '50%24',
        //   'hideWidget': true,
        'enableConversationDeletion': true,
        // 'disableAnimations': true,
        'closeOnEscape': false,
        'stylesheet':'https://webchat-styler-css.botpress.app/prod/8f53671c-adcd-44d3-aa55-487886a67118/v15170/style.css',
        'showConversationsButton': false,
        'enableTranscriptDownload': true,
        'showCloseButton': true,
        "themeName": "eggplant",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "theme": "eggplant",
        "themeColor": "#2563eb",
        "allowedOrigins": []
    });

    let ttsLang;

    window.botpressWebChat.onEvent(event => {

        if (event.type === 'TRIGGER' && event.value.ttsLang) {
            ttsLang = event.value.ttsLang;
            console.log("Language: " + event.value.ttsLang);
        }
        else if (event.type === 'TRIGGER' && event.value.botResponse) {
            let currentContent = transcriptionResult.innerHTML;
            transcriptionResult.innerHTML = currentContent + '<p>Bot: ' + event.value.botResponse + '</p>';
            console.log(currentContent);
            console.log(event.value.botResponse);
            // synthesizeSpeech(event.value.botResponse);  
            let speech = new SpeechSynthesisUtterance();
            speech.text = event.value.botResponse;
            window.speechSynthesis.speak(speech);
        }
        else { console.log("Something wrong :( ") }
    }, ['TRIGGER']);

    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const transcriptionResult = document.getElementById("transcriptionResult");

    const recognition = new window.SpeechRecognition();
    // const recognition= new window.SpeechRecognition();
    let transcript = '';
    let interimTranscript = '';

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

        // recognition = new webkitSpeechRecognition();

        recognition.continuous = true;

        recognition.interimResults = true;

        recognition.onstart = function () {

            startButton.disabled = true;

            stopButton.disabled = false;

            transcriptionResult.innerHTML = '<p><b>Listening...</b></p>';

        };

        recognition.onerror = function (event) {
            console.error(event.error);
        };

        recognition.onend = function () {
            startButton.disabled = false;
            stopButton.disabled = true;
        };

        recognition.onresult = function (event) {
            interimTranscript = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    transcript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }

            }
            transcriptionResult.innerHTML = '<h2>Transcription Result:</h2><p>'  + transcript + interimTranscript + '</p>';
        };
    }
    else {
        alert("Your browser does not support the Web Speech API");
    }
    startButton.addEventListener('click', function () {
        transcript = "";
        recognition.lang = ttsLang;
        recognition.start();

    });


    stopButton.addEventListener('click', function () {
        recognition.stop();
        const combinedTranscript = transcript + interimTranscript;
        console.log("Transcript:" + combinedTranscript);
        window.botpressWebChat.sendPayload({
            type: 'trigger',
            payload: { sttTranscript: combinedTranscript }
        });
    });
});
