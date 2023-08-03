// Get the necessary elements
const inputText = document.getElementById("inputText");
const speakButton = document.getElementById("speakButton");

// Function to pronounce the word
function speakWord() {
  const textToSpeak = inputText.value.trim();

  // Check if the Web Speech API is supported in the browser
  if ("speechSynthesis" in window) {
    // Create a SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Use the default voice of the user's device
    utterance.voice = speechSynthesis.getVoices()[0];

    // Speak the word
    speechSynthesis.speak(utterance);
  } else {
    alert(
      "Text-to-speech is not supported in your browser. Please try a different browser."
    );
  }
}

// Add event listener to the button
speakButton.addEventListener("click", speakWord);
