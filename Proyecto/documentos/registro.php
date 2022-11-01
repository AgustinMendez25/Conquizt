<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conquizt</title>

    <link rel="stylesheet" href="../css/menu.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <h1>Registro</h1>
    <form action="../php/registrarUsuario.php" method="POST">
        <input type="text" name="nombre" placeholder="Ingrese su nombre">
        <input type="email" name="email" placeholder="Ingrese su email">
        <input type="password" name="pass" placeholder="Ingrese su password">
        <input type="submit" value="Registrarse">
    </form>
    <!--JS-->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="../js/controlConfjugador.js"></script>
	<script src="../js/modoJuego.js"></script>

</body>
</html>