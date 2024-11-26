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
    messageElement.innerHTML = message; // Correctly renders HTML
  } else {
    messageElement.textContent = message; // Escapes HTML for user messages
  }

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scrolls to the newest message
}

// Levenshtein Distance Function
function levenshteinDistance(a, b) {
  const matrix = [];

  // Increment along the first column of each row
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // Increment along the first row of each column
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // Substitution
          matrix[i][j - 1] + 1,     // Insertion
          matrix[i - 1][j] + 1      // Deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Content map for matching
const contentMap = {
  "magic way": "Download 'A Magic Way': <a href='content/AMagicWay.zip' target='_blank'>Click here</a>",
  "guns": "Download 'Actual Guns 3D': <a href='content/ActualGuns_3D_1.8.1.mcaddon' target='_blank'>Click here</a>",
  "baby ender dragon": "Download 'Baby Ender Dragon': <a href='content/BabyEnderDragon.mcaddon' target='_blank'>Click here</a>",
  "elemental wands": "Download 'Elemental Wands': <a href='content/ElementalWands.zip' target='_blank'>Click here</a>",
  "ender awakening": "Download 'Ender Awakening': <a href='content/EnderAwakening.zip' target='_blank'>Click here</a>",
  "mob vote losers": "Download 'Mob Vote Losers': <a href='content/MobVoteLosers.mcaddon' target='_blank'>Click here</a>",
  "shadows classic": "Download 'Shadows Classic and Slim Skins': <a href='content/ShadowsClasicAndSlimCompilationSkins.zip' target='_blank'>Click here</a>",
  "shadows resources": "Download 'Shadows Resources': <a href='content/ShadowsResources.zip' target='_blank'>Click here</a>",
  "shadows skins": "Download 'Shadows Skins': <a href='content/ShadowsSkins.zip' target='_blank'>Click here</a>",
  "spry conquest": "Download 'Spry Conquest': <a href='content/SpryConquest.mcaddon' target='_blank'>Click here</a>",
  "tnt gun": "Download 'TNT Gun': <a href='content/TntGun.mcaddon' target='_blank'>Click here</a>",
  "true weapons": "Download 'True Weapons': <a href='content/TrueWeapons.zip' target='_blank'>Click here</a>",
  "camouflage skin": "Download 'Camouflage Skin Pack': <a href='content/camouflage-skin-pack.mcpack' target='_blank'>Click here</a>"
};

function getBotResponse(input) {
  input = input.toLowerCase(); // Normalize input for case insensitivity

  let bestMatch = null;
  let bestDistance = Infinity;

  for (const key in contentMap) {
    const distance = levenshteinDistance(input, key);
    if (distance < bestDistance && distance <= 3) { // Allow minor typos (distance <= 3)
      bestMatch = key;
      bestDistance = distance;
    }
  }

  return bestMatch
    ? contentMap[bestMatch]
    : "Sorry, I couldn't find anything related to your query. Try asking about specific mods or resource packs!";
}
