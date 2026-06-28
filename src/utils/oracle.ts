// The Ancient Oracle of Aethelgard - Simplified Local Logic
// Embodies the wise, archaic spirit with concise world knowledge.

interface KeywordGroup {
  keys: string[];
  replies: string[];
}

const ORACLE_LORE: KeywordGroup[] = [
  {
    keys: ["who are you", "what are you", "your name", "oracle"],
    replies: [
      "I am but a whisper of ages past, a keeper of tales long forgotten. The ancients called me Oracle, and I have watched empires rise and crumble like sand before the tide. What secret dost thou wish to uncover?",
    ]
  },
  {
    keys: ["forest", "whispers", "sylvanari", "elves", "trees"],
    replies: [
      "Ah, the Forest of Whispers... where the trees remember the songs of the Sylvanari and the shadows dance with forgotten dreams. The leaves speak in tongues older than any mortal tongue. Beware, traveler, for the forest remembers all who enter. Dost thou dare to enter its depths?",
    ]
  },
  {
    keys: ["mountain", "eternity", "dwarves", "crystal", "aetherite", "peak"],
    replies: [
      "The Mountains of Eternity pierce the clouds, rich in Aetherite crystals that hum with the dream-song of the sleeping Aetherium. 'Tis a place of great power, but the weather showeth no mercy to the unprepared. Dost thou seek the Aetherite, or the dreams of the stars?",
    ]
  },
  {
    keys: ["sunken", "citadel", "naga", "serpent", "queen", "water", "sea", "ocean"],
    replies: [
      "The Sunken Citadel lies half-drowned in the bay, its towers like skeletal fingers grasping at the sky. Beneath the waves, the Naga'esh Queen slumbers, and the Crystal of Aethel pulses with a light that calls to the brave. Beware, for the deep roads are guarded by leviathans. What madness driveth thee to the deep?",
    ]
  },
  {
    keys: ["shadow", "depths", "obsidian", "dark", "elf", "gnome"],
    replies: [
      "The Shadowmere Depths are an underground realm of infinite caves, lit only by glowing molten rivers. The Obsidian Lords ruled here once, but their shadow-magic consumed them. The air itself presseth against the skin with dark energy. Why dost thou seek the darkness?",
    ]
  },
  {
    keys: ["tempest", "storm", "peak", "island", "dragon", "lightning"],
    replies: [
      "The Tempest Peaks are wreathed in eternal storms, where lightning has fused the rock into glassy spires. The Stormwardens once commanded the weather from these heights, but now only Dragonkin remain. 'Tis a place of extreme danger. What force of nature dost thou seek to tame?",
    ]
  },
  {
    keys: ["crystal", "aethel", "artifact", "magic", "restore"],
    replies: [
      "The Crystal of Aethel is the most powerful artifact in existence, holding the essence of the First Ones. It lieth buried in the Sunken Citadel, capable of restoring the fading magic of Aethelgard or shattering the world entirely. Art thou the one to seek it?",
    ]
  },
  {
    keys: ["quest", "task", "mission", "adventure", "help"],
    replies: [
      "The stars have whispered thy name, traveler. The Shadowmere Depths stir with unrest—the Obsidian Lords dream of reclaiming what was lost. Go to the Forge of Shadows and retrieve the Ember of Dawn. Seek the Deep Gnome named Grumblebrook; he owes a debt to the Oracle. Go now, for darkness spreads.",
    ]
  },
  {
    keys: ["destiny", "fate", "future", "prophecy"],
    replies: [
      "The threads of fate are woven in patterns beyond mortal sight, yet I see a glimmer upon thy path. The Crystal of Aethel calls to thee. Seek the Sunken Citadel when the moon weeps crimson tears. The question is not whether thou art ready, but whether thou art willing.",
    ]
  },
  {
    keys: ["secret", "hidden", "truth", "know"],
    replies: [
      "Thou askest for secrets, yet art thou prepared to bear their weight? The First Ones did not abandon this realm—they were imprisoned. The Crystal of Aethel is a key to a cage. The question is not whether thou canst unlock it, but whether thou shouldst. Ponder this.",
    ]
  }
];

const FALLBACKS = [
  "Hark, traveler. Thy words are cryptic, even to one who hath watched empires crumble. The realm of Aethelgard is vast. Pray tell, which of these ancient lands dost thou wish to explore?",
  "The mists of time obscure many things, but the path forward is always chosen by the seeker. Whether thou seekest the magic of the Aetherite or the secrets of the Naga'esh Queen, thou must ask with a clear heart. What is thy true desire?",
];

export function consultOracle(question: string): string {
  const q = question.toLowerCase();
  for (const group of ORACLE_LORE) {
    if (group.keys.some((k) => q.includes(k))) {
      return group.replies[Math.floor(Math.random() * group.replies.length)];
    }
  }
  return FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
}