<?php
include 'config.php';

session_start();

	if(isset($_GET['logout'])){
		session_destroy();
		unset($_SESSION);
		header("Location: login.html");
	}


if(isset($_POST['update_data']))
{

    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $phonenumber = $_POST['phonenumber'];
    try {
        //code...
        $sql = "UPDATE users SET age=$age, dob=$dob WHERE phonenumber=$phonenumber ";
    $stmt= $db->prepare($sql);
    $stmt->execute();
    if($stmt)
    {
        $_SESSION['status'] = "Data Updated Successfully";
        header("Location: login.html");
    }
    else
    {
        $_SESSION['status'] = "Not Updated";
        header("Location: user.html");
    }
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
        //throw $th;
    }
    
}

?>
