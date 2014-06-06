var attributes = [
    // Environ
    "desert", "tundra", "mountain", "space", "field", "urban",
    // Stealth and cunning
    "hidden", "covert", "uncanny", "scheming", "decisive",
    // Volitility
    "rowdy", "dangerous", "explosive", "threatening", "warring",
    // Needs correction
    "bad", "unnecessary", "unknown", "unexpected", "waning",
    // Organic Gems and materials
    "amber", "bone", "coral", "ivory", "jet", "nacre", "pearl", "obsidian", "glass",
    // Regular Gems
    "agate", "beryl", "diamond", "opal", "ruby", "onyx", "sapphire", "emerald", "jade",
    // Cloth Materials
    "cotton", "denim", "leather", "linen", "rubber", "silk", "straw", "suede", "wool", "woolen",
    //Colors
    "amber", "beige", "black", "blue", "brown", "crimson", "cyan", "gray", "green", "indigo", "khaki", "orange", "pink", "purple", "red", "violet", "white", "yellow",
    //Adjectives
    "angry", "beautiful", "brave", "careful", "careless", "clever", "crazy", "cute", "dangerous", "exciting", "famous", "friendly", "happy", "interesting", "lucky", "old", "poor", "popular", "rich", "sad", "thin", "ugly", "unlucky", "young",
]

var objects = [
    // Large cats
    "panther", "wildcat", "tiger", "lion", "cheetah", "cougar", "leopard",
    // Snakes
    "viper", "cottonmouth", "python", "boa", "sidewinder", "cobra",
    // Other predators
    "grizzly", "jackal", "falcon",
    // Prey
    "wildabeast", "gazelle", "zebra", "elk", "moose", "deer", "stag", "pony",
    // HORSES!
    "horse", "stallion", "foal", "colt", "mare", "yearling", "filly", "gelding",
    // Occupations
    "nomad", "wizard", "cleric", "pilot",
    // Technology
    "mainframe", "device", "motherboard", "network", "transistor", "packet", "robot", "android", "cyborg",
    // Sea life
    "octopus", "lobster", "crab", "barnacle", "hammerhead", "orca", "piranha",
    // Weather
    "storm", "thunder", "lightning", "rain", "hail", "sun", "drought", "snow",
    // Other
    "warning", "presence", "weapon",
    // Fish
    "bass", "carp", "cod", "crab", "crawdad", "crayfish", "eel", "halibut", "herring", "lobster", "oyster", "perch", "pike", "salmon", "sardine", "shark", "shrimp", "sturgeon", "tadpole", "trout", "tuna", "swordfish",
    //General Animals
    "alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah", "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin", "duck", "eagle", "elephant", "fish", "fly", "fox", "frog", "giraffe", "goat", "goldfish", "hamster", "hippopotamus", "horse", "kangaroo", "kitten", "leopard", "lion", "lizard", "lobster", "monkey", "octopus", "ostrich", "otter", "owl", "oyster", "panda", "parrot", "pelican", "pig", "pigeon", "porcupine", "puppy", "rabbit", "rat", "reindeer", "rhinoceros", "rooster", "scorpion", "seal", "shark", "sheep", "shrimp", "snail", "snake", "sparrow", "spider", "squid", "squirrel", "swallow", "swan", "tiger", "toad", "tortoise", "turtle", "vulture", "walrus", "weasel", "whale", "wolf", "zebra",
    //Birds
    "albatross", "buzzard", "chick", "condor", "cormorant", "crow", "drake", "duck", "duckling", "eagle", "gander", "goose", "gosling", "grouse", "hawk", "hen", "heron", "partridge", "pelican", "pheasant", "ptarmigan", "puffin", "quail", "raven", "seagull", "sparrow", "swallow", "swan", "turkey", "vulture",
    //Cat Breeds
    "Abyssinian", "Bobtail", "Angora", "Balinese", "Bengal", "Himalayan", "Manx", "Persian", "Siamese", "Siberian", "Sphynx",
    //Insects
    "ant", "bee", "beetle", "butterfly", "caterpillar", "centipede", "cockroach", "cricket", "dragonfly", "flea", "fly", "grasshopper", "grub", "ladybug", "maggot", "mosquito", "moth", "spider", "termite", "tick", "wasp",
    //Dog Breeds
    "Hound", "Airedale", "Terrier", "Basenji", "Basset", "Beagle", "Bloodhound", "Collie", "Boxer", "Bulldog", "Chihuahua", "Spaniel", "Corgi", "Dachshund", "Dalmatian", "Doberman", "Shepherd", "Retriever", "Dane", "Greyhound", "Setter", "Labrador", "Apso", "Newfoundland", "Pekingese", "PitBull", "Pointer", "Pomeranian", "Poodle", "Schnauzer", "Sheepdog", "Husky", "Spaniel", "Spitz",
    //Geography
    "beach", "desert", "forest", "hill", "mountain", "ocean", "pond", "river", "lake", "sea", "stream", "valley", "waterfall", "woods",
    //Tools
    "drill", "hammer", "knife", "plane", "pliers", "saw", "scissors", "screwdriver", "vise", "wrench",
    //Carparts
    "accelerator", "battery", "blinker", "brake", "bumper", "clutch", "dashboard", "gear", "headlight", "horn", "hubcap", "mirror", "seat", "speedometer", "taillight", "tire", "trunk", "signal", "wheel", "windshield", "wiper",
    //Deserts
    "pie", "cake", "candy", "chocolate", "cookie", "donut", "doughnut", "fruit", "muffin", "pie", "pudding",
    //Vegetables
    "asparagus", "beans", "broccoli", "cabbage", "carrot", "celery", "corn", "cucumber", "eggplant", "lettuce", "onion", "peas", "potato", "pumpkin", "radish", "spinach", "tomato", "turnip"
]

var type = "PROJECT";
var codename = "CODENAME";

function createCodename()
{
	var f = attributes[Math.floor(Math.random() * attributes.length)].toUpperCase();
	var l = objects[Math.floor(Math.random() * objects.length)].toUpperCase();
	codename = f + " " + l;

	$('#codename').text(codename);
	updateTwitterButton();
}

function switchType()
{
	if (type == "PROJECT")
	{
		type = "OPERATION";
		$('#switchType').text("It's a project.");
	}
	else
	{
		type = "PROJECT";
		$('#switchType').text("It's an operation.");
	}

	$('#opType').text(type);
	updateTwitterButton();
}

function updateTwitterButton()
{
	$('#twitter').replaceWith("<a href=\"https://twitter.com/share\" id=\"twitter\" class=\"twitter-share-button\" data-via=\"zachwlewis\" data-url=\"http://projectcodename.com\">Tweet</a>");
	$('#twitter').attr('data-text', type + ": " + codename + " is a go.");

	if(typeof(twttr) !== 'undefined')
	{
		twttr.widgets.load();
	}
}

createCodename();
$('#newProject').click(createCodename);
$('#switchType').click(switchType);
