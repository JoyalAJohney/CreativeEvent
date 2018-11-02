$(document).ready(function () {
    var flag = 1;

    console.log("und")

    $(".Login").click(function () {
        if (flag == 1) {
            $(".Login").text("Another Account");
            $(".Form").css({ transform: "translate(-50%,-50%) scale(2)", opacity: "0" });
            $(".box").css({ height: "100vh", width: "100%" });
            $(".box1").css({ left: "0%" });
            $(".forum").css({ left: "100%" });
            $(".img").animate({ left: "0%" }, 500);
            $(".msg").animate({ top: "50%", opacity: "1" }, 1000);
            flag = 0;
        }
        else {
            $(".Login").text("LOGIN");
            $(".Form").css({ transform: "translate(-50%,-50%) scale(1)", opacity: "1" });
            $(".box").css({ height: "210px", width: "325px" });
            $(".forum").css({ left: "0%" });
            setTimeout(imgbox, 200);         // i want image box after some dealy
            function imgbox() {
                $(".forum").css({ left: "0%" });
            }
            $(".img").animate({ left: "-60%" }, 500);
            $(".msg").animate({ top: "55%", opacity: "0" }, 200);
            flag = 1;
        }
    });
});


