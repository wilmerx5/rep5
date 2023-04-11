<?php
include ("con_db.php");
if(isset($_POST['enviar'])){
  if(strlen($_Post['Nombres']) >= 1 &&
  strlen($_POST['Apellidos']) >= 1 &&
  strlen($_POST['telefono']) >= 1 &&
  strlen($_POST['email']) >= 1 &&
  strlen($_POST['password']) >= 1 &&
  strlen($_POST['direccion']) >= 1 ){
  $nombres = trim($_POST["Nombres"]);
  $apellidos = trim($_POST["Apellidos"]);
  $fecha_reg=date("d/m/y");
  $telefono = trim($_POST["telefono"]);
  $email = trim($_POST["email"]);
  $password= sha1(trim($_POST["password"]));
  $direccion = trim($_POST["direccion"]);
  $consulta="INSERT INTO `usuarios`(`nombres`, `apellidos`, `email`, `password`, `direction`, `phone`, `fecha:_reg`) VALUES ('$nombres','$apellidos','email','password','direccion','telefono','fecha_reg')";
  $resultado= mysqli_query($conex,$consulta);
  if($resultado){
    ?>
    <script type="text/javascript">
    $('#register')[0].reset();
    swal("Registrado correctamente","","success")
    </script>
    <?php
  } else{
    ?>
    <script type="text/javascript">
    swal("Ups ha ocurrido un error","","error")
    </script>>
    <?php
  }

}else{
  ?>
  <script type="text/javascript">
    swal("Por favor completa todos los campos","","error")
  </script>
  <?php
  }
}
if(isset($_POST['enviar_login'])){
  if (strlen($_POST['email_login']) >=1 && strlen($_POST["password_login"])>=1){
    ?>
    <script type="text/javascript">
    </script>
    <?php
  }
  else{
    ?>
  <script type="text/javascript">
  swal("Debes completar todos los campos")
  </script>
  <?php
  }
 function buscarepetido($user,$pass,$conex){
   $sql="SELECT * from usuarios where email ='$user' and password ='$pass'"
   $result =mysqli_query($conex, $sql)
   if(mysqli_num_rows($result)>0){
     return 1;

   }
   else{
     return 0;
   }
 }
?>
