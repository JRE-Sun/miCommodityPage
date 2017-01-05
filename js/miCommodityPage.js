window.onload = function() {
    var $mlNav = $("#mNav");
    $('#dowebok').fullpage({
        // 是否显示右侧的小圆圈
        navigation: !0,
        onLeave: function(index, nextIndex, direction) {
            if (index == 2 && direction == 'up') {
                $mlNav.animate({
                    top: -50
                }, 400);
            } else {
                $mlNav.animate({
                    top: 0
                }, 400);
            }
        }
    });
}