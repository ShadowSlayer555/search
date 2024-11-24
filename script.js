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
  input = input.toLowerCase(); // Normalize input for case insensitivity

  // Match user input with available content
  if (input.includes("magic way")) {
    return "Download 'A Magic Way': [content/AMagicWay.zip]";
  } else if (input.includes("guns") || input.includes("actual guns")) {
    return "Download 'Actual Guns 3D': [content/ActualGuns_3D_1.8.1.mcaddon]";
  } else if (input.includes("baby ender dragon")) {
    return "Download 'Baby Ender Dragon': [content/BabyEnderDragon.mcaddon]";
  } else if (input.includes("elemental wands")) {
    return "Download 'Elemental Wands': [content/ElementalWands.zip]";
  } else if (input.includes("ender awakening")) {
    return "Download 'Ender Awakening': [content/EnderAwakening.zip]";
  } else if (input.includes("mob vote losers")) {
    return "Download 'Mob Vote Losers': [content/MobVoteLosers.mcaddon]";
  } else if (input.includes("shadows classic") || input.includes("slim skins")) {
    return "Download 'Shadows Classic and Slim Skins': [content/ShadowsClasicAndSlimCompilationSkins.zip]";
  } else if (input.includes("shadows resources")) {
    return "Download 'Shadows Resources': [content/ShadowsResources.zip]";
  } else if (input.includes("shadows skins")) {
    return "Download 'Shadows Skins': [content/ShadowsSkins.zip]";
  } else if (input.includes("spry conquest")) {
    return "Download 'Spry Conquest': [content/SpryConquest.mcaddon]";
  } else if (input.includes("tnt gun")) {
    return "Download 'TNT Gun': [content/TntGun.mcaddon]";
  } else if (input.includes("true weapons")) {
    return "Download 'True Weapons': [content/TrueWeapons.zip]";
  } else if (input.includes("camouflage skin")) {
    return "Download 'Camouflage Skin Pack': [content/camouflage-skin-pack.mcpack]";
  } else {
    return "Sorry, I couldn't find anything related to your query. Try asking about specific mods or resource packs!";
  }
}
