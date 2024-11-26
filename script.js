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

  // Use innerHTML for bot messages to enable clickable links
  if (className === "bot-message") {
    messageElement.innerHTML = message;
  } else {
    messageElement.textContent = message;
  }

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase(); // Normalize input for case insensitivity

  // Match user input with available content
  if (input.includes("magic way")) {
    return "Download 'A Magic Way': <a href='content/AMagicWay.zip' target='_blank'>Click here</a>";
  } else if (input.includes("guns") || input.includes("actual guns")) {
    return "Download 'Actual Guns 3D': <a href='content/ActualGuns_3D_1.8.1.mcaddon' target='_blank'>Click here</a>";
  } else if (input.includes("baby ender dragon")) {
    return "Download 'Baby Ender Dragon': <a href='content/BabyEnderDragon.mcaddon' target='_blank'>Click here</a>";
  } else if (input.includes("elemental wands")) {
    return "Download 'Elemental Wands': <a href='content/ElementalWands.zip' target='_blank'>Click here</a>";
  } else if (input.includes("ender awakening")) {
    return "Download 'Ender Awakening': <a href='content/EnderAwakening.zip' target='_blank'>Click here</a>";
  } else if (input.includes("mob vote losers")) {
    return "Download 'Mob Vote Losers': <a href='content/MobVoteLosers.mcaddon' target='_blank'>Click here</a>";
  } else if (input.includes("shadows classic") || input.includes("slim skins")) {
    return "Download 'Shadows Classic and Slim Skins': <a href='content/ShadowsClasicAndSlimCompilationSkins.zip' target='_blank'>Click here</a>";
  } else if (input.includes("shadows resources")) {
    return "Download 'Shadows Resources': <a href='content/ShadowsResources.zip' target='_blank'>Click here</a>";
  } else if (input.includes("shadows skins")) {
    return "Download 'Shadows Skins': <a href='content/ShadowsSkins.zip' target='_blank'>Click here</a>";
  } else if (input.includes("spry conquest")) {
    return "Download 'Spry Conquest': <a href='content/SpryConquest.mcaddon' target='_blank'>Click here</a>";
  } else if (input.includes("tnt gun")) {
    return "Download 'TNT Gun': <a href='content/TntGun.mcaddon' target='_blank'>Click here</a>";
  } else if (input.includes("true weapons")) {
    return "Download 'True Weapons': <a href='content/TrueWeapons.zip' target='_blank'>Click here</a>";
  } else if (input.includes("camouflage skin")) {
    return "Download 'Camouflage Skin Pack': <a href='content/camouflage-skin-pack.mcpack' target='_blank'>Click here</a>";
  } else {
    return "Sorry, I couldn't find anything related to your query. Try asking about specific mods or resource packs!";
  }
}
