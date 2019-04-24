<?php

function getAlignment ($option)
{
    $alignment = "";
    
    if($option == 1)
    {
        $alignChoice = array(
            "Lawful",
            "Neutral",
            "Chaotic"
        );
        
        $selectAlign = rand (0, 2);
        
        $alignment = $alignChoice[$selectAlign];
    }
    else if($option == 2)
    {
        $alignment = "Lawful";
    }
    else if($option == 3)
    {
        $alignment = "Neutral";
    }
    else if($option == 4)
    {
        $alignment = "Chaotic";
    }
    else
    {
        $alignment = "";
    }
    
    return $alignment;
}

?>
