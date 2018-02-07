<?php

$page = $_GET['page']; // загружает файл из файла main.js

if ($page == 'load'){ // отправляет файлы 
   echo file_get_contents('data.json');
   die; // отключает весь функционал после выполнения вышенаписанных указаний
}

if ($page == 'save'){ // отправляет файлы 
     file_put_contents('data.json', $_POST['data_to_save']);
 }

?>