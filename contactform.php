<?php 
if (isset($_POST['submit'])){

    $name = $_POST["first-name"];
    $email = $_POST["email"];
    $subject = "pareshmaramp.ca";
    $message = $_POST["message"];

    $myEmail = "rampinquiries@outlook.com";
    $headers = "From : " .$email;
    $text = "This is from".$name. ".\n\n".$message;
    
    mail($myEmail,$subject,$text, $headers);
    header("Location: http://pareshmaramp.ca/sent.html");
    // echo("message has been sent");
    return;
        
};


?>