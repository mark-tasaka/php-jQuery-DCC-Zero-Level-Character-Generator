
/*	  
getLuckySign() - returns a randomly generated Lucky Sign 
*/
function getLuckySign(){
    var luckySign = [
        {"luckySign": "Harsh winter", "luckyRoll": "All attack rolls"},
        {"luckySign": "The bull", "luckyRoll": "Melee attack rolls"},
        {"luckySign": "Fortunate date", "luckyRoll": "Missle fire attack rolls"},
        {"luckySign": "Raised by wolves", "luckyRoll": "Unarmed attack rolls"},
        {"luckySign": "Conceived on horseback", "luckyRoll": "Mounted attack rolls"},
        {"luckySign": "Born on the battlefield", "luckyRoll": "Damage rolls"},
        {"luckySign": "Path of the bear", "luckyRoll": "Melee damage rolls"},
        {"luckySign": "Hawkeye", "luckyRoll": "Missle damage rolls"},
        {"luckySign": "Pack hunter", "luckyRoll": "Attack & damage rolls for 0-level starting weapon"},
        {"luckySign": "Born under the loom", "luckyRoll": "Skill checks"},
        {"luckySign": "Fox's cunning", "luckyRoll": "Find/disable traps"},
        {"luckySign": "Four-leafed clover", "luckyRoll": "Find secret doors"},
        {"luckySign": "Seventh son", "luckyRoll": "Spell checks"},
        {"luckySign": "The raging storm", "luckyRoll": "Spell damage"},
        {"luckySign": "Righteous heart", "luckyRoll": "Turn unholy checks"},
        {"luckySign": "Surived the plague", "luckyRoll": "Magical healing"},
        {"luckySign": "Luck sign", "luckyRoll": "Saving throws"},
        {"luckySign": "Guardian angel", "luckyRoll": "Saving throws to escape traps"},
        {"luckySign": "Survived a spider bite", "luckyRoll": "Saving throws against poison"},
        {"luckySign": "Struck by Lightning", "luckyRoll": "Reflex saving throws"},
        {"luckySign": "Lived through famine", "luckyRoll": "Fortitude saving throws"},
        {"luckySign": "Resisted temptation", "luckyRoll": "Will saving throws"},
        {"luckySign": "Charmed house", "luckyRoll": "Armour class"},
        {"luckySign": "Speed of the Cobra", "luckyRoll": "Initiative"},
        {"luckySign": "Bountiful Harvest", "luckyRoll": "Hits points/each level"},
        {"luckySign": "Warrior's arm", "luckyRoll": "Critical hit tables"},
        {"luckySign": "Unholy house", "luckyRoll": "Corruption rolls"},
        {"luckySign": "The Broken Star", "luckyRoll": "Fumbles"},
        {"luckySign": "Birdsong", "luckyRoll": "Number of Languages"},
        {"luckySign": "Wild child", "luckyRoll": "Speed"}
    ];
	
    return luckySign[Math.floor(Math.random() * luckySign.length)]; 
}