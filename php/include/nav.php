<ul class="navs clear">
    <li><a href="../board/bbs/board.php?bo_table=free&S=0">HOME</a></li>    
    <li><a href="../board/bbs/board.php?bo_table=gallery&S=1">PORTFOL_IO</a></li>    
    <li><a href="../board/bbs/board.php?bo_table=notice&S=2">NOTICE</a></li>    
    <li><a href="../board/bbs/board.php?bo_table=qa&S=3">ABOUT ME</a></li>    
</ul>
<script>
<?
$location = 0;
if(isset($_GET['S'])) $location = $_GET['S'];//$_GET['S']:$는 변수를 GET는 get방식을 의미 따라서 S르 get방식을로 얻는 변수를 의미한다.
echo "var loc = ".$location.";";//..: ++php에서 ++를 의미
?>
$(".navs li").css({"background-color":"#f8f8f8","border-bottom":"1px solid #999"});
$(".navs li").eq(loc).css({"background-color":"#fff","border-bottom":"1px solid #fff"});
</script>