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
	<link rel="stylesheet" href="css/general.css"/> 

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
            

            <div class="content1b">
  

                
                    
                <span class="formIputDescription1b">Name:</span>	
			  <select id="characterName" name="theCharacterName" class="">	
				<option value="0" selected>Random</option>
				<option value="1">No Names</option>
			  </select>
    
                            
                <span class="formIputDescription1b">Sex:</span>	
			  <select id="sex" name="theSex" class="">	
				<option value="1" selected>Random</option>
				<option value="2">Female</option>
				<option value="3">Male</option>
				<option value="4">Blank</option>
			  </select>

                
                            
                <span class="formIputDescription1b">Alignment:</span>	
			  <select id="alignment" name="theAlignment" class="">	
				<option value="1" selected>Random</option>
				<option value="2">Lawful</option>
				<option value="3">Neutral</option>
				<option value="4">Chaotic</option>
				<option value="5">Blank</option>
			  </select>

        

			<div class="generatorb">
			<span class="generatorbuttons">

				<input type="submit" value="" id="generate_level0_characters1a"/>
			</span>
				
			<span class="generatorbuttons">
				<input type="reset"  value="" id="reset__level0_characters1a"/>
		
				</span>
                
				</div>
   
        </div>
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