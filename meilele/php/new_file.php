<?php
	
	require "conn.php";
//	if(isset($_POST['submit'])){
//		$name=$_POST['name'];
//		$pwd=md5($_POST['pwd']);
//	}
		
//		echo ($_POST['submit']);
//		$name=$_POST['name'];
//		$pwd=md5($_POST['pwd']);
	
	
//	$result=@mysql_query("select * from person where username='$name'and password='$pwd'");
	$result1=@mysql_query("select * from lunbotu where type='1'");
//	$result=@mysql_query("select * from person where username='zxy'and password=md5(123)");
//	if(mysql_fetch_array($result)){//用户名存在
//		echo true;//1
//	}else{//用户名不存在
//		echo false;//空
//	}
	$arrllunbotu=array();//$arr[0]:获取数组第一项
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$arrllunbotu[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);//将一个数组放到另外一个数组中，二维数组
	}
	
	$result2=@mysql_query("select * from image where belong='index' and type='1'");
	$arrimage=array();//$arr[0]:获取数组第一项
	for($i=0;$i<mysql_num_rows($result2);$i++){
		$arrimage[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);//将一个数组放到另外一个数组中，二维数组
	}
	
	$result3=@mysql_query("select * from image where belong='index' and type='2'");
	$arrthreeimage=array();//$arr[0]:获取数组第一项
	for($i=0;$i<mysql_num_rows($result3);$i++){
		$arrthreeimage[$i]=mysql_fetch_array($result3,MYSQL_ASSOC);//将一个数组放到另外一个数组中，二维数组
	}
	
	$result4=@mysql_query("select * from searchtitle where type='1'");
	$arrresearch=array();
	for($i=0;$i<mysql_num_rows($result4);$i++){
		$arrresearch[$i]=mysql_fetch_array($result4,MYSQL_ASSOC);//将一个数组放到另外一个数组中，二维数组
	}
	
	$result5=@mysql_query("select * from image where belong='index' and type='3'");
	$arrlefthideimg=array();
	for($i=0;$i<mysql_num_rows($result5);$i++){
		$arrlefthideimg[$i]=mysql_fetch_array($result5,MYSQL_ASSOC);//将一个数组放到另外一个数组中，二维数组
	}
	
	$result6=@mysql_query("select * from image where belong='index' and type='4' or type='5' ");
	$arrtitleimage=array();
	for($i=0;$i<mysql_num_rows($result6);$i++){
		$arrtitleimage[$i]=mysql_fetch_array($result6,MYSQL_ASSOC);//将一个数组放到另外一个数组中，二维数组
	}
//	echo json_encode($arr);
	class Table{
		
	}
	$arr=new Table();
	$arr->tab=$arrllunbotu;
	$arr->tab1
?>