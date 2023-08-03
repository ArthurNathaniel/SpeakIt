
        const inputText = document.getElementById('inputText');
        const speakButton = document.getElementById('speakButton');

        function speakWord() {
            const textToSpeak = inputText.value.trim();

            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.voice = speechSynthesis.getVoices()[0];
                speechSynthesis.speak(utterance);
            } else {
                alert('Text-to-speech is not supported in your browser. Please try a different browser.');
            }
        }

        speakButton.addEventListener('click', speakWord);
  