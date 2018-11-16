<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="../../css/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
    <div class="wrap">
        <div class="top_menu clear">
            <ul>
                <li>Sitemap</li>
                <li>Join</li>
                <li>Login</li>
            </ul>
        </div>
        <div class="top clear">
            <div class="logo"><a href="../board/">LOGO</a></div>
            <div class="bars">
                <span class="fa fa-bars"></span>
            </div>
        </div>
        <ul class="navs clear">
            <li><a href="../../board/bbs/board.php?bo_table=free&S=0">HOME</a></li>
            <li><a href="../../board/bbs/board.php?bo_table=gallery&S=1">PORTFOL_IO</a></li>
            <li><a href="../../board/bbs/board.php?bo_table=notice&S=2">NOTICE</a></li>
            <li><a href="../../board/bbs/board.php?bo_table=qa&S=3">ABOUT ME</a></li>
        </ul>
        <script>
            <?
            $location = 0;
            if (isset($_GET['S'])) $location = $_GET['S']; //$_GET['S']:$는 변수를 GET는 get방식을 의미 따라서 S르 get방식을로 얻는 변수를 의미한다.
            echo "var loc = ".$location.
            ";"; //..: ++php에서 ++를 의미
            ?>
            $(".navs li").css({
                "background-color": "#f8f8f8",
                "border-bottom": "1px solid #999"
            });
            $(".navs li").eq(loc).css({
                "background-color": "#fff",
                "border-bottom": "1px solid #fff"
            });
        </script>
        <div class="mbody">