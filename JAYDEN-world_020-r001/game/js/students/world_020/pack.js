// BEGINNER PROJECT: JAYDEN | r001 | engine 2.14.0
// Teacher-supplied starter code; not evidence that the student wrote this code.
// Play first, describe the controls and goal, then prompt and log one asset.
// Keep IDs fixed. Teacher helps with one small explained change at a time.
// manifest = identity; home = room; dialogue = guide; level = game rules.
// STUDENT TEMPLATE: Night Hall Escape. Replace the setting and characters with your idea.
// Same optional pursuit module, with different movement. All coordinates below are pixels except home tiles.
registerStudentPack({
  "schemaVersion": 1,
  "manifest": {
    "id": "world_020",
    "name": "JAYDEN — Starter Project",
    "author": "Teacher starter for JAYDEN",
    "description": "Find the key and escape a pursuing threat.",
    "iconColor": "purple",
    "position": {"x":128,"y":192},
    "width": 32,
    "height": 32,
    "levelId": "world_020_level",
    "rewardId": "key_world_020"
  },
  "home": {
    "tileSize": 32,
    "width": 20,
    "height": 12,
    "spawnTile": {
      "x": 5,
      "y": 8
    },
    "interactables": [
      {
        "type": "npc",
        "id": "coach",
        "name": "Mechanic",
        "dialogueKey": "mission",
        "tileX": 4,
        "tileY": 2
      },
      {
        "type": "portal",
        "id": "mission",
        "name": "Night Hall Escape",
        "levelId": "world_020_level",
        "tileX": 14,
        "tileY": 4,
        "width": 48,
        "height": 48
      },
      {
        "type": "savePoint",
        "id": "save",
        "name": "Save",
        "tileX": 12,
        "tileY": 8
      },
      {
        "type": "submitPoint",
        "id": "review",
        "name": "Review",
        "tileX": 16,
        "tileY": 8
      },
      {
        "type": "exit",
        "id": "exit",
        "name": "Exit",
        "tileX": 4,
        "tileY": 9,
        "width": 64,
        "height": 32
      }
    ]
  },
  "dialogue": {
    "mission": {
      "speaker": "Guide",
      "lines": [
        "Find the key and reach the gold exit before time expires.",
        "Move with WASD/arrows. This is a top-down escape.",
        "The threat chases when it sees you. Cover blocks its view.",
        "Q flashes a nearby threat, stunning it briefly. The flash must recharge.",
        "Stand fully inside a green refuge and hold H to hide. Release H to move.",
        "Hiding does not stop the escape clock. R retries; Escape returns home."
      ]
    }
  },
  "level": {
    "id": "world_020_level",
    "mode": "topdown",
    "name": "Night Hall Escape",
    "width": 960,
    "height": 640,
    "spawn": {
      "x": 96,
      "y": 320
    },
    "solids": [
      {
        "x": 0,
        "y": 0,
        "width": 960,
        "height": 32
      },
      {
        "x": 0,
        "y": 608,
        "width": 960,
        "height": 32
      },
      {
        "x": 0,
        "y": 32,
        "width": 32,
        "height": 576
      },
      {
        "x": 928,
        "y": 32,
        "width": 32,
        "height": 576
      },
      {
        "x": 460,
        "y": 180,
        "width": 32,
        "height": 100
      }
    ],
    "hazards": [],
    "collectibles": [
      {
        "id": "escape_key",
        "label": "Exit key",
        "x": 600,
        "y": 320,
        "width": 24,
        "height": 24
      }
    ],
    "objectives": [
      {
        "id": "find_key",
        "label": "Find the exit key",
        "collect": [
          "escape_key"
        ]
      }
    ],
    "doors": [
      {
        "id": "exit_gate",
        "label": "Exit gate",
        "x": 820,
        "y": 280,
        "width": 24,
        "height": 80,
        "requires": [
          "find_key"
        ]
      }
    ],
    "goal": {
      "x": 880,
      "y": 320,
      "width": 32,
      "height": 28,
      "requires": [
        "find_key"
      ]
    },
    // Seconds measure time; speed measures pixels/second. Keep threats slower than the player initially.
    "pursuit": {
      "seconds": 90,
      "stunCooldown": 4,
      "stunSeconds": 1.5,
      "stunRadius": 120,
      "memorySeconds": 2.5,
      // The entire player must fit inside. Hold H; the escape clock still runs.
      "hidingSpots": [
        {
          "id": "refuge",
          "x": 300,
          "y": 300,
          "width": 80,
          "height": 80
        }
      ],
      // A grounded pursuer cannot jump gaps; a top-down pursuer slides against walls.
      "enemies": [
        {
          "id": "pursuer",
          "x": 460,
          "y": 360,
          "width": 28,
          "height": 28,
          "speed": 95,
          "noticeRadius": 360
        }
      ]
    }
  }
});
