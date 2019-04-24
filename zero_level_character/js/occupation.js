/*	  
  getOccupation() - returns the Randomly Generated Occupation
*/
function getOccupation(){
	var occupations = [
		//Dwarves 0 - 10
		// 4 - Herder
		{"occupation": "Dwarven Apothecarist", "race": "Dwarf", "trainedWeapon": "Cudgel (as Staff)", "damage": "1d4", "tradeGoods": "Steel Vial"},
		{"occupation": "Dwarven Blacksmith", "race": "Dwarf", "trainedWeapon": "Hammer (as Club)", "damage": "1d4", "tradeGoods": "Mithril, 1 oz."},
		{"occupation": "Dwarven Riveter", "race": "Dwarf", "trainedWeapon": "Hammer (as Club)", "damage": "1d4", "tradeGoods": "Mithril, 1 oz."},
		{"occupation": "Dwarven Chestmaker", "race": "Dwarf", "trainedWeapon": "Chisel (as Dagger)", "damage": "1d4", "tradeGoods": "Wood, 10 lbs."},
		{"occupation": "Dwarven Herder", "race": "Dwarf", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Sow (see notes)"},
		{"occupation": "Dwarven Miner", "race": "Dwarf", "trainedWeapon": "Pick (as Club)", "damage": "1d4", "tradeGoods": "Lantern"},
		{"occupation": "Dwarven Linkman", "race": "Dwarf", "trainedWeapon": "Pick (as Club)", "damage": "1d4", "tradeGoods": "Lantern"},
		{"occupation": "Dwarven Mushroom Farmer", "race": "Dwarf", "trainedWeapon": "Shovel (as Staff)", "damage": "1d4", "tradeGoods": "Sack"},
		{"occupation": "Dwarven Rat-Catcher", "race": "Dwarf", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Net"},
		{"occupation": "Dwarven Stonemason", "race": "Dwarf", "trainedWeapon": "Hammer (as club)", "damage": "1d4", "tradeGoods": "Fine Stones, 10 lbs."},
		{"occupation": "Dwarven Mason", "race": "Dwarf", "trainedWeapon": "Hammer (as club)", "damage": "1d4", "tradeGoods": "Fine Stones, 10 lbs."},
		//Elves 11 - 20
		// 14 - Falconer
		{"occupation": "Elven Artisan", "race": "Elf", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Clay, 1 lbs."},
		{"occupation": "Elven Barrister", "race": "Elf", "trainedWeapon": "Quill (as Dart)", "damage": "1d4", "tradeGoods": "Book"},
		{"occupation": "Elven Chandler", "race": "Elf", "trainedWeapon": "Scissors (as Dagger)", "damage": "1d4", "tradeGoods": "Candles, 20"},
		{"occupation": "Elven Falconer", "race": "Elf", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Falcon (see notes)"},
		{"occupation": "Elven Forester", "race": "Elf", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Herbs, 1 lbs."},
		{"occupation": "Elven Herbalist", "race": "Elf", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Herbs, 1 lbs."},
		{"occupation": "Elven Glassblower", "race": "Elf", "trainedWeapon": "Hammer (as Club)", "damage": "1d4", "tradeGoods": "Glass Beads"},
		{"occupation": "Elven Navigator", "race": "Elf", "trainedWeapon": "Bow", "damage": "1d6", "tradeGoods": "Spyglass"},
		{"occupation": "Elven Sage", "race": "Elf", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Parchment and Quill Pen"},
		{"occupation": "Elven Scholar", "race": "Elf", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Parchment and Quill Pen"},
		//Halflings 21 - 30
		{"occupation": "Halfling Chicken Butcher", "race": "Halfling", "trainedWeapon": "Hand Axe", "damage": "1d6", "tradeGoods": "Chicken Meat, 5 lbs."},
		{"occupation": "Halfling Dyer", "race": "Halfling", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Fabric, 3 yards"},
		{"occupation": "Halfling Tailor", "race": "Halfling", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Fabric, 3 yards"},
		{"occupation": "Halfling Glovemaker", "race": "Halfling", "trainedWeapon": "Awl (as Dagger)", "damage": "1d4", "tradeGoods": "Gloves, 4 pairs"},
		{"occupation": "Halfling Gypsy", "race": "Halfling", "trainedWeapon": "Sling", "damage": "1d4", "tradeGoods": "Hex Doll"},
		{"occupation": "Halfling Haberdasher", "race": "Halfling", "trainedWeapon": "Scissors (as Dagger)", "damage": "1d4", "tradeGoods": "Fine suits, 3 sets"},
		{"occupation": "Halfling Mariner", "race": "Halfling", "trainedWeapon": "Knife (as Dagger)", "damage": "1d4", "tradeGoods": "Sailcloth, 2 yards"},
		{"occupation": "Halfling Moneylender", "race": "Halfling", "trainedWeapon": "Short Sword", "damage": "1d6", "tradeGoods": "5 gp, 10 sp, 200 cp"},
		{"occupation": "Halfling Trader", "race": "Halfling", "trainedWeapon": "Short Sword", "damage": "1d6", "tradeGoods": "20 sp"},
		{"occupation": "Halfling Vagrant", "race": "Halfling", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Begging Bowl"},
		//Humans 31 -
		//Humans 31 - 40 Alchemist to Caravan Guard
		// 32 - Animal Trainer
		{"occupation": "Alchemist", "race": "Human", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Oil, 1 flask"},
		{"occupation": "Animal Trainer", "race": "Human", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Pony (see notes)"},
		{"occupation": "Armourer", "race": "Human", "trainedWeapon": "Hammer (as Club)", "damage": "1d4", "tradeGoods": "Iron Helmet"},
		{"occupation": "Astrologer", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Spyglass"},
		{"occupation": "Barber", "race": "Human", "trainedWeapon": "Razor (as Dagger)", "damage": "1d4", "tradeGoods": "Scissors (as Dagger)"},
		{"occupation": "Beadle", "race": "Human", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Holy Symbol"},
		{"occupation": "Beekeeper", "race": "Human", "trainedWeapon": "Hammer (as club)", "damage": "1d4", "tradeGoods": "Jar of Honey"},
		{"occupation": "Blacksmith", "race": "Human", "trainedWeapon": "Hammer (as Club)", "damage": "1d4", "tradeGoods": "Steel Tongs"},
		{"occupation": "Butcher", "race": "Human", "trainedWeapon": "Cleaver (as axe)", "damage": "1d6", "tradeGoods": "Side of Beef"},
		{"occupation": "Caravan Guard", "race": "Human", "trainedWeapon": "Short Sword", "damage": "1d6", "tradeGoods": "Linen, 1 Yard"},
		// Humans 41 - 47 Cheesemaker to Ditchdigger
		{"occupation": "Cheesemaker", "race": "Human", "trainedWeapon": "Cudgel (as Staff)", "damage": "1d4", "tradeGoods": "Stinky Cheese"},
		{"occupation": "Cobbler", "race": "Human", "trainedWeapon": "Awl (as Dagger)", "damage": "1d4", "tradeGoods": "Shoehorn"},
		{"occupation": "Confidence Artist", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Quality Cloak"},
		{"occupation": "Cooper", "race": "Human", "trainedWeapon": "Crowbar (as Club)", "damage": "1d4", "tradeGoods": "Barrel"},
		{"occupation": "Costermonger", "race": "Human", "trainedWeapon": "Knife (as Dagger)", "damage": "1d4", "tradeGoods": "Fruit"},
		{"occupation": "Cutpurse", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Small Chest"},
		{"occupation": "Ditchdigger", "race": "Human", "trainedWeapon": "Shovel (as Staff)", "damage": "1d4", "tradeGoods": "Fine Dirt, 1 lbs."},
		//Humans 48 - 56 Farmer Potato to Onion
		{"occupation": "Farmer Potato", "race": "Human", "trainedWeapon": "Pitchfork (as Spear)", "damage": "1d8", "tradeGoods": "Livestock (see notes)"},
		{"occupation": "Farmer Wheat", "race": "Human", "trainedWeapon": "Pitchfork (as Spear)", "damage": "1d8", "tradeGoods": "Livestock (see notes)"},
		{"occupation": "Farmer Turnip", "race": "Human", "trainedWeapon": "Pitchfork (as Spear)", "damage": "1d8", "tradeGoods": "Livestock (see notes)"},
		{"occupation": "Farmer Corn", "race": "Human", "trainedWeapon": "Pitchfork (as Spear)", "damage": "1d8", "tradeGoods": "Livestock (see notes)"},
		{"occupation": "Farmer Rice", "race": "Human", "trainedWeapon": "Pitchfork (as Spear)", "damage": "1d8", "tradeGoods": "Livestock (see notes)"},
		{"occupation": "Farmer Parsnip", "race": "Human", "trainedWeapon": "Pitchfork (as Spear)", "damage": "1d8", "tradeGoods": "Livestock (see notes)"},
		{"occupation": "Farmer Radish", "race": "Human", "trainedWeapon": "Pitchfork (as Spear)", "damage": "1d8", "tradeGoods": "Livestock (see notes)"},
		{"occupation": "Farmer Rutabaga", "race": "Human", "trainedWeapon": "Pitchfork (as Spear)", "damage": "1d8", "tradeGoods": "Livestock (see notes)"},
		{"occupation": "Farmer Turnip", "race": "Human", "trainedWeapon": "Pitchfork (as Spear)", "damage": "1d8", "tradeGoods": "Livestock (see notes)"},
		// Humans 57 - 70: Fortune Teller to Jester
		// 66 - Herder
		{"occupation": "Fortune Teller", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Tarot Deck"},
		{"occupation": "Gambler", "race": "Human", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Dice"},
		{"occupation": "Gong Farmer", "race": "Human", "trainedWeapon": "Trowel (as Dagger)", "damage": "1d4", "tradeGoods": "Sack of Night Soil"},
		{"occupation": "Ditcher", "race": "Human", "trainedWeapon": "Shovel (as Staff)", "damage": "1d4", "tradeGoods": "Trowel (as Dagger)"},
		{"occupation": "Grave Digger", "race": "Human", "trainedWeapon": "Shovel (as Staff)", "damage": "1d4", "tradeGoods": "Trowel (as Dagger)"},
		{"occupation": "Guild Beggar", "race": "Human", "trainedWeapon": "Sling", "damage": "1d4", "tradeGoods": "Crutches"},
		{"occupation": "Beggar", "race": "Human", "trainedWeapon": "Sling", "damage": "1d4", "tradeGoods": "Crutches"},
		{"occupation": "Healer", "race": "Human", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Holy Water, 1 Vial"},
		{"occupation": "Herbalist", "race": "Human", "trainedWeapon": "Sling", "damage": "1d4", "tradeGoods": "Herbs, 1 lbs."},
		{"occupation": "Herder", "race": "Human", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Herding Dog (see notes)"},
		{"occupation": "Hunter", "race": "Human", "trainedWeapon": "Short Bow", "damage": "1d6", "tradeGoods": "Deer Pelt"},
		{"occupation": "Huntsman", "race": "Human", "trainedWeapon": "Short Bow", "damage": "1d6", "tradeGoods": "Deer Pelt"},
		{"occupation": "Indentured Servant", "race": "Human", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Locket"},
		{"occupation": "Jester", "race": "Human", "trainedWeapon": "Dart", "damage": "1d4", "tradeGoods": "Silk Cloths"},
		// Humans 71 - 80: Jeweler to Rope Maker
		{"occupation": "Jeweler", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Gem worth 20 gp"},
		{"occupation": "Locksmith", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Fine Tools"},
		{"occupation": "Mendicant", "race": "Human", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Cheese Dip"},
		{"occupation": "Locksmith", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Fine Tools"},
		{"occupation": "Merchant", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "4 gp, 14 sp, 27 cp"},
		{"occupation": "Miller/Baker", "race": "Human", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Flour, 1 lbs."},
		{"occupation": "Minstrel", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Ukulele"},
		{"occupation": "Noble", "race": "Human", "trainedWeapon": "Longsword", "damage": "1d8", "tradeGoods": "Gold Ring worth 10 gp"},
		{"occupation": "Orphan", "race": "Human", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Rag Doll"},
		{"occupation": "Ostler", "race": "Human", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Bridle"},
		{"occupation": "Rope Maker", "race": "Human", "trainedWeapon": "Knife (as Dagger)", "damage": "1d4", "tradeGoods": "Rope, 100'"},
		// 81 - 90: Scribe to Urchin
		{"occupation": "Scribe", "race": "Human", "trainedWeapon": "Dart", "damage": "1d4", "tradeGoods": "Parchment, 10 sheets"},
		{"occupation": "Shaman", "race": "Human", "trainedWeapon": "Mace", "damage": "1d6", "tradeGoods": "Herbs, 1 lbs."},
		{"occupation": "Slave", "race": "Human", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Strange-looking Rock"},
		{"occupation": "Smuggler", "race": "Human", "trainedWeapon": "Sling", "damage": "1d4", "tradeGoods": "Waterproof Sack"},
		{"occupation": "Squire", "race": "Human", "trainedWeapon": "Longsword", "damage": "1d8", "tradeGoods": "Steel Helmet"},
		{"occupation": "Herald", "race": "Human", "trainedWeapon": "Longsword", "damage": "1d8", "tradeGoods": "Steel Helmet"},
		{"occupation": "Tax Collector", "race": "Human", "trainedWeapon": "Longsword", "damage": "1d8", "tradeGoods": "100 cp"},
		{"occupation": "Trapper", "race": "Human", "trainedWeapon": "Sling", "damage": "1d4", "tradeGoods": "Badger Pelt"},
		{"occupation": "Molecatcher", "race": "Human", "trainedWeapon": "Sling", "damage": "1d4", "tradeGoods": "Mole Pelt"},
		{"occupation": "Urchin", "race": "Human", "trainedWeapon": "Stick (as Club)", "damage": "1d4", "tradeGoods": "Begging Bowl"},
		//92 - 96: Wainwright to Wood Seller
		// Humans 92 -  Wainwright
		{"occupation": "Wainwright", "race": "Human", "trainedWeapon": "Club", "damage": "1d4", "tradeGoods": "Push Cart (see notes)"},
		{"occupation": "Weaver", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Fine Suit of Clothes"},
		{"occupation": "Wizard's Apprentice", "race": "Human", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Black Grimoire"},
		{"occupation": "Woodcutter", "race": "Human", "trainedWeapon": "Hand Axe", "damage": "1d6", "tradeGoods": "Bundle of Wood"},
		{"occupation": "Woodmonger", "race": "Human", "trainedWeapon": "Hand Axe", "damage": "1d6", "tradeGoods": "Bundle of Wood"},
		{"occupation": "Wood Seller", "race": "Human", "trainedWeapon": "Hand Axe", "damage": "1d6", "tradeGoods": "Bundle of Wood"},
		// Humans 97 - 99: Mercenary to 
		{"occupation": "Mercenary", "race": "Human", "trainedWeapon": "Longsword", "damage": "1d8", "tradeGoods": ""},
		{"occupation": "Outlaw", "race": "Human", "trainedWeapon": "Short Sword", "damage": "1d6", "tradeGoods": ""},
		{"occupation": "Soldier", "race": "Human", "trainedWeapon": "Spear", "damage": "1d8", "tradeGoods": ""}
		];
	
		return occupations[Math.floor(Math.random() * occupations.length)]; 
   // return occupations[82];
		
}