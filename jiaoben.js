//点击登录注册以后显示事件
function xianshi() {
    document.getElementById("dlc").style.display = "block";
}

//登录层关闭事件
function yingcang() {
    document.getElementById("dlc").style.display = "none";
}

//登录选项卡切换
function denglu() {
    var box1 = document.getElementById("denglukuang").style.display = "block";
    var box2 = document.getElementById("zhucekuang").style.display = "none";
    var box3 = document.getElementById("denglu").style.backgroundColor = "#f71b4b";
    var box4 = document.getElementById("mianfeizhuce").style.backgroundColor = "beige";

}

//免费注册选项卡切换
function zhuce() {
    var box1 = document.getElementById("zhucekuang").style.display = "block";
    var box2 = document.getElementById("denglukuang").style.display = "none";
    var box3 = document.getElementById("mianfeizhuce").style.backgroundColor = "#f71b4b";
    var box4 = document.getElementById("denglu").style.backgroundColor = "beige";
    
}

