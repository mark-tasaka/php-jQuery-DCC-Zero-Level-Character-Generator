/*getMutantAppearance() gets the random mutant appearance
*/
      function getMutantAppearance(){
          let appearance = [
              {"mutation": "Skin colour: bright red"},
              {"mutation": "Skin colour: snow white"},
              {"mutation": "Skin colour: lemon yellow"},
              {"mutation": "Skin colour: purple"},
              {"mutation": "Skin colour: green"},
              {"mutation": "Skin colour: translucent"},
              {"mutation": "Skin texture: is mottled"},
              {"mutation": "Skin texture: is reptilian"},
              {"mutation": "Skin texture: is chitinous"},
              {"mutation": "Skin texture: is rocky"},//10
              {"mutation": "Skin texture: is metallic"},
              {"mutation": "Skin texture: is invisible"},
              {"mutation": "Eyes: have slitted pupils"},
              {"mutation": "Eyes: have no pupils"},
              {"mutation": "Eyes: glow in the dark"},
              {"mutation": "Eyes: are a single eye"},
              {"mutation": "Eyes: have compound insect eyes"},
              {"mutation": "Eyes: are covered by semi-transparent skin"},
              {"mutation": "Mouth: is fanged"},
              {"mutation": "Mouth: a featureless slit"},//20
              {"mutation": "Mouth: a break or bill"},
              {"mutation": "Mouth: is insectoid"},
              {"mutation": "Mouth: located in belly"},
              {"mutation": "Mouth: absent, replaced by porous skin"},
              {"mutation": "Head: is larger than normal"},
              {"mutation": "Head: is smaller than normal"},
              {"mutation": "Head: has craggy brow and ridged skull"},
              {"mutation": "Head: has small horns"},
              {"mutation": "Head: has antennaw"},
              {"mutation": "Head: retreats into body"},//30
              {"mutation": "Hair: stands on end"},
              {"mutation": "Hair: grows into a lion's mane"},
              {"mutation": "Hair: grows over entire body"},
              {"mutation": "Hair: drips oil"},
              {"mutation": "Hair: is made of organic metal"},
              {"mutation": "Hair: is comprised of small leaves"},
              {"mutation": "Hands: have no nails"},
              {"mutation": "Hands: have only three fingers"},
              {"mutation": "Hands: have six fingers"},
              {"mutation": "Hands: are prehensile claws"},//40
              {"mutation": "Hands: are comprised of tentacles"},
              {"mutation": "Hands: absent, replaced with tentacle fingers"},
              {"mutation": "Feet: are overlarge and padded"},
              {"mutation": "Feet: have 12 toes"},
              {"mutation": "Feet: have claws"},
              {"mutation": "Feet: are bird talons"},
              {"mutation": "Feet: are hooves"},
              {"mutation": "Feet: absent, replaced with cilia clumps"},
              {"mutation": "Body: has a tail"},
              {"mutation": "Body: has four arms"},//50
              {"mutation": "Body: has four legs"},
              {"mutation": "Body: has ridged back"},
              {"mutation": "Body: has symbiotic twin in stomach"},
              {"mutation": "Body: is segmented like a worm"},
              {"mutation": "Form: is tripedal"},
              {"mutation": "Form: is quadrapedal"},
              {"mutation": "Form: is serpentine"},
              {"mutation": "Form: is insectoid"},
              {"mutation": "Form: is globular"},
              {"mutation": "Form: is a condensed ball of plasma that must inhabit clothes to maintain form"}//60
          ];
		return appearance[Math.floor(Math.random() * 60)]; 
      }
 