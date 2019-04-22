     
      /*getManimalType() returns the sub-type of manimal
      */
      function getManimalType(){
          
          let subType = [
              {"features": "Primate: gorilla"},
              {"features": "Primate: chimpanzee"},
              {"features": "Primate: orangutan"},
              {"features": "Primate: gibbon"},
              {"features": "Canine: dog"},
              {"features": "Canine: wolf"},
              {"features": "Canine: coyote"},
              {"features": "Canine: fox"},
              {"features": "Feline: lion"},
              {"features": "Feline: tiger"},
              {"features": "Feline: cheetah"},
              {"features": "Feline: panther"},
              {"features": "Ursine: brown bear"},
              {"features": "Ursine: grizzly bear"},
              {"features": "Ursine: polar bear"},
              {"features": "Bovine: cow"},
              {"features": "Bovine: bison"},
              {"features": "Bovine: buffalo"},
              {"features": "Bovine: antelope"},
              {"features": "Bovine: yak"},
              {"features": "Suidae: pig"},
              {"features": "Suidae: hog"},
              {"features": "Suidae: wartog"},
              {"features": "Rodentia: mouse"},
              {"features": "Rodentia: rat"},
              {"features": "Rodentia: squirrel"},
              {"features": "Rodentia: porcupine"},
              {"features": "Rodentia: beaver"},
              {"features": "Rodentia: rabbit"},
              {"features": "Amphibia: frog"},
              {"features": "Amphibia: toad"},
              {"features": "Amphibia: salamander"},
              {"features": "Avian: hawk"},
              {"features": "Avian: eagle"},
              {"features": "Avian: crow"},
              {"features": "Avian: owl"},
              {"features": "Avian: vulture"},
              {"features": "Avian: seagull"},
              {"features": "Insecta: roach"},
              {"features": "Insecta: ant"},
              {"features": "Insecta: fly"},
              {"features": "Insecta: grasshopper"},
              {"features": "Insecta: beetle"},
              {"features": "Insecta: moth"}
          ]
		return subType[Math.floor(Math.random() * 44)]; 
      }
      