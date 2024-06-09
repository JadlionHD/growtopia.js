/**
 * Types for each Argument.
 */
enum VariantTypes {
  NONE,
  FLOAT_1,
  STRING,
  FLOAT_2,
  FLOAT_3,
  UNSIGNED_INT,
  SIGNED_INT = 0x9
}

/**
 * Growtopia Packet Types
 */
enum PacketTypes {
  UNK,
  HELLO,
  STR,
  ACTION,
  TANK,
  ERROR,
  TRACK,
  CLIENT_LOG_REQ,
  CLIENT_LOG_RES
}

/**
 * Growtopia Tank Packet Types
 */
enum TankTypes {
  STATE = 0,
  CALL_FUNCTION,
  UPDATE_STATUS,
  TILE_CHANGE_REQUEST,
  SEND_MAP_DATA,
  SEND_TILE_UPDATE_DATA,
  SEND_TILE_UPDATE_DATA_MULTIPLE,
  TILE_ACTIVATE_REQUEST,
  TILE_APPLY_DAMAGE,
  SEND_INVENTORY_STATE,
  ITEM_ACTIVATE_REQUEST,
  ITEM_ACTIVATE_OBJECT_REQUEST,
  SEND_TILE_TREE_STATE,
  MODIFY_ITEM_INVENTORY,
  ITEM_CHANGE_OBJECT,
  SEND_LOCK,
  SEND_ITEM_DATABASE_DATA,
  SEND_PARTICLE_EFFECT,
  SET_ICON_STATE,
  ITEM_EFFECT,
  SET_CHARACTER_STATE,
  PING_REPLY,
  PING_REQUEST,
  GOT_PUNCHED,
  APP_CHECK_RESPONSE,
  APP_INTEGRITY_FAIL,
  DISCONNECT,
  BATTLE_JOIN,
  BATTLE_EVEN,
  USE_DOOR,
  SEND_PARENTAL,
  GONE_FISHIN,
  STEAM,
  PET_BATTLE,
  NPC,
  SPECIAL,
  SEND_PARTICLE_EFFECT_V2,
  ACTIVE_ARROW_TO_ITEM,
  SELECT_TILE_INDEX,
  SEND_PLAYER_TRIBUTE_DATA
}

enum TileFlags {
  FLAGS_TILEEXTRA = 0x0001,
  FLAGS_LOCKED = 0x0002,
  FLAGS_SEED = 0x0010,
  FLAGS_TREE = 0x0019,
  FLAGS_FLIPPED = 0x0020,
  FLAGS_ROTATED_LEFT = 0x0030,
  FLAGS_OPEN = 0x0040,
  FLAGS_PUBLIC = 0x0080,
  FLAGS_SILENCED = 0x0200,
  FLAGS_WATER = 0x0400,
  FLAGS_FIRE = 0x1000,
  FLAGS_RED = 0x2000,
  FLAGS_BLUE = 0x4000,
  FLAGS_GREEN = 0x8000,
  FLAGS_GLUE = 0x08000000
}

enum TileOptionsFlags {
  MUSIC_BLOCKS_DISABLED = 0x0010,
  MUSIC_BLOCKS_INVIS = 0x0020,
  LOCK_ALLOW_BUILD_ONLY = 0x0040,
  LOCK_ENABLE_RAINBOW = 0x0080
}

enum TilePropertiesFlags {
  MULTI_FACING = 1 << 0,
  WRENCHABLE = 1 << 1,
  PERMANENT = 1 << 2,
  DROPLESS = 1 << 3,
  NO_SEED = 1 << 4,
  NO_SELF = 1 << 5,
  NO_SHADOW = 1 << 6,
  WORLD_LOCK = 1 << 7
}

enum TileCategoryFlags {
  BETA = 1 << 0,
  AUTO_PICKUP = 1 << 1,
  MOD = 1 << 2,
  RANDOM_GROW = 1 << 3,
  PUBLIC = 1 << 4,
  FOREGROUND = 1 << 5,
  HOLIDAY = 1 << 6,
  UNTRADEABLE = 1 << 7
}

enum TileActionTypes {
  FIST = 0,
  WRENCH = 1,
  DOOR = 2,
  LOCK = 3,
  GEMS = 4,
  TREASURE = 5,
  DEADLY_BLOCK = 6,
  TRAMPOLINE = 7,
  CONSUMABLE = 8,
  ENTRANCE = 9,
  SIGN = 10,
  SFX_WITH_EXTRA_FRAME = 11,
  BOOMBOX = 12,
  MAIN_DOOR = 13,
  PLATFORM = 14,
  BEDROCK = 15,
  LAVA = 16,
  FOREGROUND = 17,
  BACKGROUND = 18,
  SEED = 19,
  CLOTHES = 20,
  FOREGROUND_WITH_EXTRA_FRAME = 21,
  BACKGD_SFX_EXTRA_FRAME = 22,
  BACK_BOOMBOX = 23,
  BOUNCY = 24,
  POINTY = 25,
  PORTAL = 26,
  CHECKPOINT = 27,
  SHEET_MUSIC = 28,
  ICE = 29,
  SWITCHEROO = 31,
  CHEST = 32,
  MAILBOX = 33,
  BULLETIN = 34,
  PINATA = 35,
  DICE = 36,
  CHEMICAL = 37,
  PROVIDER = 38,
  LAB = 39,
  ACHIEVEMENT = 40,
  WEATHER_MACHINE = 41,
  SCORE_BOARD = 42,
  SUNGATE = 43,
  PROFILE = 44,
  DEADLY_IF_ON = 45,
  HEART_MONITOR = 46,
  DONATION_BOX = 47,
  TOYBOX = 48,
  MANNEQUIN = 49,
  SECURITY_CAMERA = 50,
  MAGIC_EGG = 51,
  GAME_RESOURCES = 52,
  GAME_GENERATOR = 53,
  XENONITE = 54,
  DRESSUP = 55,
  CRYSTAL = 56,
  BURGLAR = 57,
  COMPACTOR = 58,
  SPOTLIGHT = 59,
  WIND = 60,
  DISPLAY_BLOCK = 61,
  VENDING_MACHINE = 62,
  FISHTANK = 63,
  PETFISH = 64,
  SOLAR = 65,
  FORGE = 66,
  GIVING_TREE = 67,
  GIVING_TREE_STUMP = 68,
  STEAMPUNK = 69,
  STEAM_LAVA_IF_ON = 70,
  STEAM_ORGAN = 71,
  TAMAGOTCHI = 72,
  SWING = 73,
  FLAG = 74,
  LOBSTER_TRAP = 75,
  ART_CANVAS = 76,
  BATTLE_CAGE = 77,
  PET_TRAINER = 78,
  STEAM_ENGINE = 79,
  LOCKBOT = 80,
  WEATHER_SPECIAL = 81,
  SPIRIT_STORAGE = 82,
  DISPLAY_SHELF = 83,
  VIP_ENTRANCE = 84,
  CHALLENGE_TIMER = 85,
  CHALLENGE_FLAG = 86,
  FISH_MOUNT = 87,
  PORTRAIT = 88,
  WEATHER_SPECIAL2 = 89,
  FOSSIL = 90,
  FOSSIL_PREP = 91,
  DNA_MACHINE = 92,
  BLASTER = 93,
  VALHOWLA = 94,
  CHEMSYNTH = 95,
  CHEMTANK = 96,
  STORAGE = 97,
  OVEN = 98,
  SUPER_MUSIC = 99,
  GEIGER_CHARGER = 100,
  ADVENTURE_RESET = 101,
  TOMB_ROBBER = 102,
  FACTION = 103,
  RED_FACTION = 104,
  GREEN_FACTION = 105,
  BLUE_FACTION = 106,
  ANCES = 107,
  FISHGOTCHI_TANK = 109,
  FISHING_BLOCK = 110,
  ITEM_SUCKER = 111,
  ITEM_PLANTER = 112,
  ROBOT = 113,
  COMMAND = 114,
  TICKET = 115,
  STATS_BLOCK = 116,
  FIELD_NODE = 117,
  OUIJA_BOARD = 118,
  ARCHITECT_MACHINE = 119,
  STARSHIP = 120,
  AUTODELETE = 121,
  GREEN_FOUNTAIN = 122,
  AUTO_ACTION_BREAK = 123,
  AUTO_ACTION_HARVEST = 124,
  AUTO_ACTION_HARVEST_SUCK = 125,
  LIGHTNING_IF_ON = 126,
  PHASED_BLOCK = 127,
  MUD = 128,
  ROOT_CUTTING = 129,
  PASSWORD_STORAGE = 130,
  PHASED_BLOCK_2 = 131,
  BOMB = 132,
  WEATHER_INFINITY = 134,
  SLIME = 135,
  UNK1 = 136,
  COMPLETIONIST = 137,
  UNK3 = 138,
  FEEDING_BLOCK = 140,
  KRANKENS_BLOCK = 141,
  FRIENDS_ENTRANCE = 142
}

enum TileExtraTypes {
  NONE,
  DOOR,
  SIGN,
  LOCK,
  SEED,
  MAILBOX = 6,
  BULLETIN,
  DICE,
  PROVIDER,
  ACHIEVEMENT,
  HEART_MONITOR,
  DONATION_BLOCK,
  TOYBOX,
  MANNEQUIN,
  MAGIC_EGG,
  GAME_RESOURCES,
  GAME_GENERATOR,
  XENONITE,
  DESSUP,
  CRYSTAL,
  BURGLAR,
  SPOTLIGHT,
  DISPLAY_BLOCK,
  VENDING_MACHINE,
  FISHTANK,
  SOLAR,
  FORGE,
  GIVING_TREE,
  GIVING_TREE_STUMP,
  STEAM_ORGAN,
  TAMAGOTCHI,
  SWING,
  FLAG,
  LOBSTER_TRAP,
  ART_CANVAS,
  BATTLE_CAGE,
  PET_TRAINER,
  STEAM_ENGINE,
  LOCKBOT,
  WEATHER_SPECIAL,
  SPIRIT_STORAGE,
  UNKNOWN_1,
  DISPLAY_SHELF,
  VIP_ENTRANCE,
  CHALLENGE_TIMER,
  CHALLENGE_FLAG,
  FISH_MOUNT,
  PORTRAIT,
  WEATHER_SPECIAL2,
  FOSSIL_PREP,
  DNA_MACHINE,

  MAGPLANT = 0x3e,
  TESSERACT_MANIPULATOR = 0x45,
  GAIA_HEART = 0x46,
  TECHNO_ORGANIC_ENGINE = 0x47,
  KRANKEN_GALACTIC = 0x50,
  WEATHER_INFINITY = 0x4d
}

export default {
  VariantTypes,
  PacketTypes,
  TankTypes,
  TileActionTypes,
  TileCategoryFlags,
  TileExtraTypes,
  TileFlags,
  TileOptionsFlags,
  TilePropertiesFlags
};
