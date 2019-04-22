
	  
/* getBaseLanguages() returns the languages of the character based on genotype
*/
      
      function getBaseLanguages(species, intelligence) {
          
          let baseLanguage = "Common";
          
          if(species === "Dwarf" && intelligence >=8){
              baseLanguage = "Common, Dwarven";
          }
          else if(species === "Elf" && intelligence >=8){
              baseLanguage = "Common, Elven";
          }
          else if(species === "Halfling" && intelligence >=8){
              baseLanguage = "Common, Halfling";
          }
          
          return baseLanguage;
      }


/*
getBonusLanguages (intelligenceModifier, luckySign, luckModifier) - add randomly selected bonus languages base on the character's intelligence or if they have the Lucky Sign of Bird Song
*/
function getBonusLanguages (intelligenceModifier, luckySign, luckModifier, race) {
	var bonusLanguages = 0;
	if(bonusLanguages  != undefined && typeof bonusLanguages === 'number') {
		bonusLanguages = intelligenceModifier;
	}
	else {
		return "";
	}
	
	if(luckySign != undefined && luckySign.luckySign === "Birdsong") {
		bonusLanguages += luckModifier;
	}
	
	if(bonusLanguages <=0) {
		return "";
	}
	var result = ", " + addBonusLanguages().language, newLanguage = "";
	
	var bExtraBaseLangRace = false;
	if(race === "Dwarf" || race === "Elf" || race === "Halfling"){
		bExtraBaseLangRace = true;
	}
	// loop
	for(var i = 1; i < bonusLanguages; i++){
		// 1) get a random lang
		newLanguage = addBonusLanguages().language;
		// 2) check the new lang is not repeative
		if(result.indexOf(newLanguage) != -1 || (bExtraBaseLangRace && newLanguage == race)){
			i--;
			// if yes continue;
			continue;
		} else{
			// if not, add the new lang into the result
			result += ", " + newLanguage;
		}

	}
	return result;
}
	  

 


/*
getStartingEquipment() - returns a randomly selected piece of starting equipment for the character
*/
function getStartingEquipment(){
	var startingEquipment = [
		{"equipment": "Backpack"},
		{"equipment": "Candle"},
		{"equipment": "Chain (10 feet)"},
		{"equipment": "Chalk (1 piece)"},
		{"equipment": "Chest (empty)"},
		{"equipment": "Crowbar"},
		{"equipment": "Flask (empty)"},
		{"equipment": "Flint and Steel"},
		{"equipment": "Grappling Hook"},
		{"equipment": "Small hammer"},
		{"equipment": "Holy Symbol"},
		{"equipment": "Holy Water (1 vial)"},
		{"equipment": "Iron Spike"},
		{"equipment": "Lantern"},
		{"equipment": "Mirror (hand size)"},
		{"equipment": "Oil (1 flask)"},
		{"equipment": "10 foot Pole"},
		{"equipment": "Ration (1 day)"},
		{"equipment": "Rope (50 feet)"},
		{"equipment": "Sack (large)"},
		{"equipment": "Sack (small)"},
		{"equipment": "Thieves Tools"},
		{"equipment": "Torch (1)"},
		{"equipment": "Waterskin"}
		];
		return startingEquipment[Math.floor(Math.random() * 24)]; 
}


/*
getArmour (occupations) - returns the armour of the character based on their occupation.	  
*/
function getArmour (occupations) {
	var armour = "";
	if (occupations.occupation === "Mercenary") {
		armour = "Hide";
	}
	else if (occupations.occupation === "Outlaw") {
		armour = "Leather";
	}
	else if (occupations.occupation === "Soldier") {
		armour = "Shield";
	}
		return armour;
}

/*
getArmourProtection (armour) - retuns the bonus to the base armour class that the armour provides.  
*/
function getArmourProtection (armour) {
	var armourProtection = 0;
	if (armour === "Hide") {
		armourProtection = 3;
	}
	else if (armour === "Leather") {
		armourProtection = 2;
	}
	else if (armour === "Shield") {
		armourProtection = 1;
	}
	return armourProtection;
}


      
      /*getArmour() returns the name of armour type
      */
/*      function getArmour(item){
          let armour = "";
          
          if(item.id === 1){
              armour = "Fur cloak";
          }
          else if(item.id === 2){
              armour = "Hide armour";
          }
          else if(item.id === 3){
              armour = "Leather shield";
          }
          else if(item.id === 4){
              armour = "Antler hood";
          }
          return armour;
      }
   */
      /*getArmourACBonus()
      */
   /*   function getArmourACBonus(item){
          let acBonus = 0;
          
          if(item.id === 1){
              acBonus = 2;
          }
          else if(item.id === 2){
              acBonus = 3;
          }
          else if(item.id === 3 || item.id === 4){
              acBonus = 1;
          }
          return acBonus;
      }
*/         
      
      /*getArmourACBonusString()
      */
      function getArmourACBonusString(item){
          let acBonus = "";
          
          if(item.id === 1){
              acBonus = "+2";
          }
          else if(item.id === 2){
              acBonus = "+3";
          }
          else if(item.id === 3 || item.id === 4){
              acBonus = "+1";
          }
          return acBonus;
      }
 
            
      /*getFumble()
      */
      function getFumble(item){
          let fumble = "";
          
          if(item.id === 1){
              fumble = "d8";
          }
          else if(item.id === 2){
              fumble = "d12";
          }
          else if(item.id === 3 || item.id === 4){
              fumble = "d8";
          }
          return fumble;
      }
      
                  
      /*getFumbleDie()
      */
      function getFumbleDie(item){
          let fumbleDie = "d4";
          
          if(item.id === 1){
              fumbleDie = "d8";
          }
          else if(item.id === 2){
              fumbleDie = "d12";
          }
          else if(item.id === 3 || item.id === 4){
              fumbleDie = "d8";
          }
          return fumbleDie;
      }
      



/* getMaxTechLevel() gets the maximum tech level based on Intelligence
*/
    
      function getMaxTechLevel(intelligence) {
          let techLevel = 0;
          
          if(intelligence >= 3 && intelligence <=7)
              {
                  techLevel = 1;
              }
          else if(intelligence >= 8 && intelligence <=9)
              {
                  techLevel = 2;
              }
          else if(intelligence >= 10 && intelligence <=11)
              {
                  techLevel = 3;
              }
          else if(intelligence >= 12 && intelligence <=14)
              {
                  techLevel = 4;
              }
          else if(intelligence >= 15 && intelligence <=17)
              {
                  techLevel = 5;
              }
          else if(intelligence >= 18 && intelligence <=23)
              {
                  techLevel = 6;
              }
          else{
                techLevel = 7;
          }
          
          return techLevel;
      }
      
      
	 	
/*
hitPointAdjustPerLevel (luckySign, luckModifier) - returns the additional/minus hit points
the character received per level from their Stamina modifier and whether they have the Lucky Sign "The Ecobot".
*/
	  
function hitPointAdjustPerLevel (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign != undefined && luckySign.luckySign === "The Ecobot"){
        adjust = luckModifier;
     }
	return adjust;
}

/*
 getBaseArmourClass(agilityModifier)- returns the base armour class of the character
*/
function getBaseArmourClass(agilityModifier){
	let armourClass = 10;
	baseArmourClass = armourClass + agilityModifier;
	return baseArmourClass;
}	  



/*
addModifierSign (modifier) adds a + sign to positive integers; use for ability modifiers, saving throws, etc.
*/
function addModifierSign (modifier) {
	if(modifier >= 0 ) {
		return "+" + modifier;
	}
	else {
		return modifier;
	}
}
	  


/*
meleeAdjust (luckySign, luckModifier) - adds bonus/penality to Melee attack based on whether the character possesses specific Lucky Signs
*/
function meleeAdjust (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Nuclear Winter"){
        adjust = luckModifier;
     }
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "The Roxen") {
		adjust = luckModifier;
	}
	return adjust;
}

/*
rangeAdjust (luckySign, luckModifier) - adds bonus/penality to Range attack based on whether the character possesses specific Lucky Signs
*/	  
function rangeAdjust (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Nuclear Winter" || luckySign.luckySign === "The Triffid")){
        adjust = luckModifier;
     }
	return adjust;
}
	 
/*
getSpeed (species) returns the base speed of the character based on their genotype
*/
function getSpeed (species) {
	let speed = 30;
    
	if(species == "Dwarf" || species == "Halfling" ) {
		speed = 20;
	}
    
	return speed;
}

/*
 addLuckToSpeed (luckySign, luckModifier) adds bonuses to the character's speed if they have a positive Luck Modifier and the Lucky Sign of Wild Child
*/
function addLuckToSpeed (luckySign, luckModifier) {
	var addSpeed = 0;
	if (luckySign.luckySign != undefined && luckySign.luckySign === "Wild child" && luckModifier == 1){
		addSpeed = 5;
	}
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Wild child" && luckModifier == 2){
		addSpeed = 10;
	}
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Wild child" && luckModifier == 3){
		addSpeed = 15;
	}
	return addSpeed;
}

/*
addAnimal (occupations) - adds animal to the notes based on the Occupation of the Character
*/
function addAnimal (occupations) {
	var animal = "";
	if (occupations.occupation === "Dwarven Herder") {
		animal = "Sow: Init +0; Atk bite +0 melee (1d3): AC 10; HP  "+  Math.floor((Math.random() * 10) + 3) + "; HD 2d6; MV 30'; Act 1d20; SV Fort +2, Ref -2, Will +0; AL N";
	}
	else if (occupations.occupation === "Animal Trainer") {
		animal = "Pony: Init +1; Atk hoof -2 melee (1d2): AC 11; HP "+  Math.floor((Math.random() * 8) + 3) + "; HD 1d8+2; MV 40'; Act 1d20; SV Fort +2, Ref +3, Will -1; AL N";
	}
	else if (occupations.occupation === "Elven Falconer") {
		animal = "Falcon: Init +3; Atk beak +1 melee (1d3): AC 13; HP "+  Math.floor((Math.random() * 3) + 1) + "; HD 1d3; MV 15', fly 40'; Act 1d20; SV Fort +0, Ref +3, Will +0; AL N";
	}
	else if (occupations.occupation === "Herder") {
		animal = "Herding Dog: Init +1; Atk bite +1 melee (1d3): AC 11; HP  "+  Math.floor((Math.random() * 6) + 1) + "; HD 1d6; MV 30'; Act 1d20; SV Fort +1, Ref +1, Will +0; AL N";
	}
	else if (occupations.occupation === "Wainwright") {
		animal = addCartContents().contents;
	}
	
	return animal;
}

/*
hasFarmAnimal (occupations) calls getRandomFarmAnimal() if the Occupation is Farmer
*/
function hasFarmAnimal (occupations) {
	var farmAnimal = "";
	if (occupations.trainedWeapon == "Pitchfork (as Spear)") {
		farmAnimal = getRandomFarmAnimal().animal;
	}
	return farmAnimal;
}

/*
adjustRef (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustRef (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Luck sign" || luckySign.luckySign === "Struck by Lightning")){
        adjust = luckModifier;
     }
	return adjust;
}
	 
/*
adjustFort (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustFort (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Luck sign" || luckySign.luckySign === "Lived through famine")){
        adjust = luckModifier;
     }
	return adjust;
}
	  
/*
adjustWill (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustWill (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Luck sign" || luckySign.luckySign === "Resisted temptation")){
        adjust = luckModifier;
     }
	return adjust;
}	 
	  
/*
adjustInit (luckySign, luckModifier) - add bonus/penality to Initiative based on Lucky Sign
*/
function adjustInit (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Speed of the Cobra"){
        adjust = luckModifier;
     }
	return adjust;
}	

	  
/*
adjustAC (luckySign, luckModifier) - add bonus/penality to AC based on Lucky Sign
*/
function adjustAC (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Charmed house"){
        adjust = luckModifier;
     }
	return adjust;
}	
	  
/*
adjustCrit (luckySign, luckModifier) - add bonus/penality to Crit based on Lucky Sign
*/
function adjustCrit (luckySign, luckModifier) {
   var adjust = luckModifier * 1;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Warrior's arm"){
        adjust = luckModifier * 2;
     }
	return adjust;
}	
	  
/*
adjustFumble (luckySign, luckModifier) - add bonus/penality to Fumble based on Lucky Sign
*/
function adjustFumble  (luckySign, luckModifier) {
   var adjust = luckModifier * -1;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The Broken Star"){
        adjust = luckModifier * -2;
     }
	return adjust;
}	

/*
addRaceAbilities (occupations) - adds a special abilities designed if the character is a dwarf, elf or halfling
*/
function addRaceAbilities (occupations) {
	var raceAbilities = "";
	if (occupations.race === "Dwarf") {
		raceAbilities = "Special Abilities: Infravision (60'), smell gold and gems";
	}	
	else if (occupations.race === "Elf") {
		raceAbilities = "Special Abilities: Infravision (60'), iron vulnerability, +4 bonus to detect secret doors";
	}	
	else if (occupations.race === "Halfling") {
		raceAbilities = "Special Abilities: Infravision (30'),  two-weapon fighting, good luck charm";
	}
	return raceAbilities;
}
	  
	  
/*addSign (modifier) Adds a + sign to value if value is 1 or greater.  If value is 0, then a empty String "" is returned.
*/
function addSign (modifier) {
	if(modifier > 0 ) {
		return "+" + modifier;
	}
	else if(modifier === 0) {
		return "";
	}
	else {
		return modifier;
	}
}
      
       
/*
meleeDamageAdjust (luckySign, luckModifier) - adds bonus/penality to Melee attack based on whether the character possesses specific Lucky Signs
*/
function meleeDamageAdjust (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The Apocalypse"){
        adjust = luckModifier;
     }
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Ragnarok") {
		adjust = luckModifier;
	}
	return adjust;
}

       
/*
rangeDamageAdjust (luckySign, luckModifier) - adds bonus/penality to Melee attack based on whether the character possesses specific Lucky Signs
*/
function rangeDamageAdjust (luckySign, luckModifier) {
   let adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The Apocalypse"){
        adjust = luckModifier;
     }
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Revelations") {
		adjust = luckModifier;
	}
	return adjust;
}

/*
addBonusLanguages() - returns Randomly selected 0th Level Character Bonus Languages
*/
function addBonusLanguages() {
	var bonusLanguages = [
		{"language": "Alignment Tongue"},
		{"language": "Dwarf"},
		{"language": "Elf"},
		{"language": "Halfling"},
		{"language": "Gnome"},
		{"language": "Bugbear"},
		{"language": "Goblin"},
		{"language": "Gnoll"},
		{"language": "Hobgolin"},
		{"language": "Kobold"},
		{"language": "Lizardman"},
		{"language": "Minotaur"},
		{"language": "Ogre"},
		{"language": "Orc"},
		{"language": "Troglodyte"},
		{"language": "Giant"}
			];
    return bonusLanguages[Math.floor(Math.random() * 16)]; 
}
	  
       