<?php
$db_host =      'my-db-instance.c9h5oaexrmld.ap-southeast-2.rds.amazonaws.com:3306';     //RDS Endpoint...
$db_username =  'db_user';
$db_pass =      'owlcard1';
$db_name =      'meikai_cards';

mysql_connect("$db_host","$db_username","$db_pass", TRUE) or die(mysql_error());
mysql_select_db("$db_name") or die("no database by that name");
?>
