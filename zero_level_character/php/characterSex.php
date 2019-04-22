<?php

function getSex ($characterSex)
{
    
    if($characterSex == 1)
    {
        $sex = rand(1, 2);
       // $sex = 1;
        if($sex == 1)
        {
            return 'Female';
        }
        else
        {
             return 'Male';
        }
        
    }
    else if($characterSex == 2)
    {
        return 'Female';
    }
    else
    {
        return '???';
    }
    
}

?>