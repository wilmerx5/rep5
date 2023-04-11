<?php
session_start();
include ("con_db.php");
$user = $_POST["email_login"];
$password = sha1( $_POST["password_login"]);
$sql = "SELECT * from usuarios where email ='$user' and password='$password'";
$result = mysqli_query($sql);

if (mysqli_num_rows($result) > 0 ){
  ?>
  <script type="text/javascript">
  swal("inicio sesion")
  </script>
  <?php
}
?>
