<?php
include ("con_db.php");
if(isset($_POST['enviar'])){
  if(strlen($_POST['Nombres']) >= 1 &&
  strlen($_POST['Apellidos']) >= 1 &&
  strlen($_POST['telefono']) >= 1 &&
  strlen($_POST['Email']) >= 1 &&
  strlen($_POST['password']) >= 1 &&
  strlen($_POST['direccion']) >= 1 ){
  $nombres = trim($_POST["Nombres"]);
  $apellidos = trim($_POST["Apellidos"]);
  $fecha_reg = date("d/m/y");
  $telefono = trim($_POST["telefono"]);
  $email = trim($_POST["Email"]);
  $password= trim($_POST["password"]);
  $direccion = trim($_POST["direccion"]);
  $consulta="INSERT INTO `usuarios`(`nombres`, `apellidos`, `email`, `password`, `direction`, `phone`, `fecha:_reg`) VALUES ('$nombres','$apellidos','email','password','direccion','telefono','fecha_reg')";
  $resultado= mysqli_query($conex,$consulta);
  if($resultado){
    ?>
    <script type="text/javascript">
    alert("Registrado correctamente")
    </script>
    <?php
  } else{
    ?>
    <script type="text/javascript">
    alert("Ups ha ocurrido un error")
    </script>>
    <?php
  }

}else{
  ?>
  <script type="text/javascript">
    alert("Por favor completa todos los campos")
  </script>
  <?php
  }
}
?>
