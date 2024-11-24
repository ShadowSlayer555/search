const chatBox = document.getElementById("chat-box");

function sendMessage() {
  const userInput = document.getElementById("user-input").value;

  if (!userInput) return;

  // Display user message
  displayMessage(userInput, "user-message");

  // Clear input
  document.getElementById("user-input").value = "";

  // Simulate AI response
  setTimeout(() => {
    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse, "bot-message");
  }, 1000);
}

function displayMessage(message, className) {
  const messageElement = document.createElement("div");
  messageElement.className = `message ${className}`;
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  // Example logic
  if (input.toLowerCase().includes("mod")) {
    return "Check out this mod: [Mod Download Link]";
  } else if (input.toLowerCase().includes("resource pack")) {
    return "Here's a resource pack: [Resource Pack Link]";
  } else {
    return "Sorry, I don't understand that. Try asking about mods or resource packs!";
  }
}
