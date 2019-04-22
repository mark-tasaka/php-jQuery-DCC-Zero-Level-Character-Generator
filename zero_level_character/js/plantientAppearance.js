
      /*getPlantient() returns plantient sub-type
      */
      function getPlantient(){
          let subType = [
              {"features": "Decisuous: maple"},
              {"features": "Decisuous: oak"},
              {"features": "Decisuous: sycamore"},
              {"features": "Decisuous: buckeye"},
              {"features": "Decisuous: chestnut"},
              {"features": "Conifer: cedar"},
              {"features": "Conifer: larch"},
              {"features": "Conifer: fir"},
              {"features": "Conifer: pine"},
              {"features": "Conifer: spruce]"},
              {"features": "Conifer: yew"},
              {"features": "Fruit-Bearing: apple"},
              {"features": "Fruit-Bearing: pear"},
              {"features": "Fruit-Bearing: peach"},
              {"features": "Fruit-Bearing: cherry"},
              {"features": "Fruit-Bearing: plum"},
              {"features": "Fruit-Bearing: banana"},
              {"features": "Fern: horsetail"},
              {"features": "Fern: whisk fern"},
              {"features": "Fern: marratoid"},
              {"features": "Vine: ivy"},
              {"features": "Vine: honeysuckle"},
              {"features": "Vine: arrowroot"},
              {"features": "Vine: morning glory"},
              {"features": "Vine: grape"},
              {"features": "Vine: sweet pea"},
              {"features": "Shrub: sagebrush"},
              {"features": "Shrub: hibiscus"},
              {"features": "Shrub: blackberry"},
              {"features": "Shrub: huckleberry"},
              {"features": "Shrub: sumac"},
              {"features": "Shrub: yucca"},
              {"features": "Tropical: palm"},
              {"features": "Tropical: coconut"},
              {"features": "Tropical: bamboo"},
              {"features": "Tropical: teak"},
              {"features": "Cacti: barrel"},
              {"features": "Cacti: beavertail"},
              {"features": "Cacti: aloe"},
              {"features": "Cacti: prickly pear"},
              {"features": "Mosses: green moss"},
              {"features": "Mosses: liverwort"},
              {"features": "Mosses: hornwort"},
              {"features": "Fungi: mushroom"},
              {"features": "Fungi: toadstool"},
              {"features": "Fungi: fungus"},
              {"features": "Fungi: mold"}
              
          ]
          
		return subType[Math.floor(Math.random() * 47)]; 
      }
      