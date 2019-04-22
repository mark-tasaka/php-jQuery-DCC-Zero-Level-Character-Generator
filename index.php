<!DOCTYPE html>
<html>
<head>
<title>Launch Page: DCC Zero Level Character Generator</title>
    
	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="Mark Tasaka 2018">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>  
    
	<link rel="stylesheet" href="css/githubMCC.css"/> 
	<link rel="stylesheet" href="css/mcc_additions.css"/> 

	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta charset="utf-8" />
	

	</head>
	
	
<body>
    

	
	<section>
		
		<h1><img src="images/title.png" alt="Zero Level Character Generator" class="image" /></h1>
		
				
			
		
                                
                
            <br/>
            <br/>
        
        <p>The Dungeon Crawl Classics Zero Level Character Generator (Version 2) has been designed primarily with PHP and jQuery. Several of the jQuery/JavaScript functions are stored in external files, as a means of creating greater design efficiency, with the goal of writing a program with high cohesion and low coupling.  In this way, this program simulates Object-Oriented design.  JSON is used to store multi-column variables, with jQuery functions used to retrieve these variables.</p>    

        <br/>
        <br/>
            

	<form action="" id ="zeroCharForm"  target="_blank" method="post">
            

            <div class="content9">
  

                
                    
                <span class="formIputDescription">Name:</span>	
			  <select id="characterName" name="theCharacterName" class="alignmentBox">	
				<option value="0" selected>Random Names</option>
				<option value="1">No Names</option>
			  </select>
                
                
            <br/>
            <br/>
                            
                <span class="formIputDescription">Ability Scores:</span>	
			  <select id="abilityScores" name="theAbilityScore" class="alignmentBox">	
				<option value="1" selected>3d6 (Old School)</option>
				<option value="2">4d6, drop the lowest</option>
			  </select>
            
                
            <br/>
            <br/>
                            
                <span class="formIputDescription">Sex:</span>	
			  <select id="sex" name="theSex" class="alignmentBox">	
				<option value="1" selected>Random</option>
				<option value="2">Female</option>
				<option value="3">Male</option>
			  </select>
            
                
            <br/>
            <br/>
                
        </div>

			<div class="generatorb">
			<span class="generatorbuttons">

				<input type="submit" value="" id="generate_level0_characters1a"/>
			</span>
				
			<span class="generatorbuttons">
				<input type="reset"  value="" id="reset__level0_characters1a"/>
		
				</span>
                
				</div>
		<p><span class="footnote">&#42;Rolling 4d6, and dropping the lowest die.</span></p>
   
        
				</form>
                <br/>
                
            
            
                
                
        
                <br/>
                <br/>
                
                
            
    </section>
	
	<script>
          
        $("#generate_level0_characters1a").click(function(){
         
            $("#zeroCharForm").attr('action', "zero_level_character/levelZeroCharacters.php");
            
        });
             
        
            
        
    </script>
            
	


</body>
</html>