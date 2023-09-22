
document.addEventListener("DOMContentLoaded", function() {
    // リンク要素を取得
    var links = document.querySelectorAll(".navbar-brand");
  
    // マウスオーバー時の動作を設定
    links.forEach(function(link) {
      link.addEventListener("mouseover", function() {
        this.style.color = "red"; // リンクの色を赤に変更
      });
  
      link.addEventListener("mouseout", function() {
        this.style.color = ""; // マウスが離れた時にリンクの色を元に戻す
      });
    });
  });
