<?php
$con=mysqli_connect("localhost","my_user","my_password","my_db");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

// Check if server is alive
if (mysqli_ping($con)) {
  echo "Connection is ok!";
} else {
  echo "Error: ". mysqli_error($con);
}

mysqli_close($con);
?>

<?php
$mysqli = new mysqli("localhost","my_user","my_password","my_db");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

// Check if server is alive
if ($mysqli -> ping()) {
  echo "Connection is ok!";
} else {
  echo "Error: ". $mysqli -> error);
}

$mysqli -> close();
?>