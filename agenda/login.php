<?php
include './db.ph';
$cWhere1 = "nope";
$cWhere2 = "nope";
$loginusr="";
$text="";

if( isset($_GET["login"]) && $_GET["login"]!=""){
	$cWhere1 .="user like ('%".$_GET["login"]."%')";
	$loginusr =$_GET["login"];
}
if( isset($_GET["password"]) && $_GET["password"]!=-1){	
	$cWhere2 .= " pass like  ('%".$_GET["password"]."%')";
	$text =$_GET["password"];
}

$sql = "select id from aluno WHERE 1=1 and $cWhere1 and $cWhere2";
$id = mysqli_query($conect, $sql); 

?>


<div>
id = <? $id ?>
</div>
