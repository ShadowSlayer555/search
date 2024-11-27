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

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Content map for matching
const contentMap = {
  "magic way": "<a href='content/AMagicWay.zip' target='_blank'>Download 'A Magic Way'</a>",
  "guns": "<a href='content/ActualGuns_3D_1.8.1.mcaddon' target='_blank'>Download 'Actual Guns 3D'</a>",
  "baby ender dragon": "<a href='content/BabyEnderDragon.mcaddon' target='_blank'>Download 'Baby Ender Dragon'</a>",
  "elemental wands": "<a href='content/ElementalWands.zip' target='_blank'>Download 'Elemental Wands'</a>",
  "ender awakening": "<a href='content/EnderAwakening.zip' target='_blank'>Download 'Ender Awakening'</a>",
  "mob vote losers": "<a href='content/MobVoteLosers.mcaddon' target='_blank'>Download 'Mob Vote Losers'</a>",
  "shadows classic skins": "<a href='content/ShadowsClasicAndSlimCompilationSkins.zip' target='_blank'>Download 'Shadows Classic and Slim Skins'</a>",
  "shadows resources": "<a href='content/ShadowsResources.zip' target='_blank'>Download 'Shadows Resources'</a>",
  "shadows skins": "<a href='content/ShadowsSkins.zip' target='_blank'>Download 'Shadows Skins'</a>",
  "spry conquest": "<a href='content/SpryConquest.mcaddon' target='_blank'>Download 'Spry Conquest'</a>",
  "tnt gun": "<a href='content/TntGun.mcaddon' target='_blank'>Download 'TNT Gun'</a>",
  "true weapons": "<a href='content/TrueWeapons.zip' target='_blank'>Download 'True Weapons'</a>",
  "camouflage skin": "<a href='content/camouflage-skin-pack.mcpack' target='_blank'>Download 'Camouflage Skin Pack'</a>",
  "mods": `
    <p>Here are some mods you can try:</p>
    <ul>
      <li><a href='content/AMagicWay.zip' target='_blank'>A Magic Way</a></li>
      <li><a href='content/ActualGuns_3D_1.8.1.mcaddon' target='_blank'>Actual Guns 3D</a></li>
      <li><a href='content/BabyEnderDragon.mcaddon' target='_blank'>Baby Ender Dragon</a></li>
      <li><a href='content/ElementalWands.zip' target='_blank'>Elemental Wands</a></li>
      <li><a href='content/MobVoteLosers.mcaddon' target='_blank'>Mob Vote Losers</a></li>
      <li><a href='content/SpryConquest.mcaddon' target='_blank'>Spry Conquest</a></li>
      <li><a href='content/TntGun.mcaddon' target='_blank'>TNT Gun</a></li>
      <li><a href='content/TrueWeapons.zip' target='_blank'>True Weapons</a></li>
    </ul>
  `
};

function getBotResponse(input) {
  input = input.toLowerCase(); // Normalize input for case insensitivity

  // Iterate through contentMap keys to check for keyword matches
  for (const key in contentMap) {
    if (input.includes(key)) {
      return contentMap[key];
    }
  }

  // If no match is found
  return "Sorry, I couldn't find anything related to your query. Try asking about specific mods or resource packs!";
}
