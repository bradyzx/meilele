<?php
	require "conn.php";//引入数据库连接
	$username = @$_POST['name'];
	$pwd = @$_POST['pwd'];
	$query="select * from user where username='{$username}' and password='{$pwd}' ";
	$result=mysql_query($query);//执行sql语句
	if(mysql_fetch_array($result)){
		echo true;
//		header("location:../index.html");
//		echo 123;
	}else{
		echo false;
//		echo 321;
	}
	
	/*if(isset($_POST['submit'])){
		$name=$_POST['username'];
		$pass=$_POST['password'];
		$result1 = mysql_query("select * from user where name='$name' and password='$pass' ");
		if(mysql_fetch_array($result1)){
			echo '登录成功';
		}else{
			echo '用户名密码错误';
		}
	}*/
?>