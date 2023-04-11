<?php
error_reporting(E_ERROR | E_PARSE );
include ("con_db.php");
$user_ = trim($_POST['email_login']);
$password = sha1(trim($_POST["password_login"]));
$sql = "SELECT * from usuarios where email ='$user_' and password='$password'";
$result = mysqli_query($conex,$sql);

if(isset($_POST['enviar_login'])){

if ( mysqli_num_rows($result) > 0 ){
  $_session['user']= $user_;
  ?>
  <script type="text/javascript">-->
  <!--swal("Ingreso exitoso","","success")-->
  <!--</script>
  <?php
}
else{
     ?>
  <script type="text/javascript">-->
  <!--swal("Este usuario no se encuentra registrado","Verifique su direccion de correo electronico y su contraseña","error")-->
  <!--</script>
  <?php
}
}
?>

<form  method="POST" action="">

<input type="number" name="codigo">
<input type="submit" value="enviar">
</form>
