<?php 

session_start();

	if(!isset($_SESSION['userlogin'])){
		header("Location: login.html");
	}
    else
    {
        header("Location: user.php");
    }
	

?>
