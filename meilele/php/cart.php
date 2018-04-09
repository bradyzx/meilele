<?php
	require "conn.php";
	$query="select * from product";
	$result=mysql_query($query);//执行sql语句
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($arr);
?>