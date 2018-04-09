<?php
	require "conn.php";//引入数据库连接
	if(isset($_POST['name']) || isset($_POST['submit'])){
		$username = @$_POST['name'];
	}else{
		exit ('操作错误');
	}
	$query="select * from user where username='$username'";
	$result=mysql_query($query);//执行sql语句
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}
	
	if(isset($_POST['submit']) && $_POST['submit']=='注册'){
		$name=$_POST['username'];
		$pass=$_POST['password'];
		$phone=$_POST['phone'];
		mysql_query("insert user value ('null','$name','$pass','$phone') ");
		echo "<script>alert('注册成功');window.location.href='../login.html';</script>";;
	}
?>