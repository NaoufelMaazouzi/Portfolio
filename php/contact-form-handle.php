<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = "portfolio@naoufelmaazouzi.fr";
    $email_subject = "Nouveau message provenant du Portfolio !";
    $email_body = "Nom de l'utilisateur: $name.\n".
                    "Email de l'utilisateur: $visitor_email.\n".
                        "Message de l'utilisateur: $message.\n";
    $to = "contact@naoufelmaazouzi.fr";
    $headers = "From: $email_from \r\n";
    $headers .= "Repondre à: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: https://naoufelmaazouzi.fr/", sleep(3));
}

/*if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "naoufel_du_28@live.fr";
    $headers = "From: ".$mailFrom;
    $txt = "Tu as reçu un email de ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: ../index.html");
}*/
?>