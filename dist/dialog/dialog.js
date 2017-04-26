var dialog = {
    error:function (message) {
        layer.open({
            content:message,
            icon:2,
            title:'错误提示'
        });
    },
    success:function (message,url) {
        layer.open({
            content:message,
            icon:1,
            yes:function () {
                location.href = url;
            }
        });
    },
    confirm :function (message,url) {
        layer.open({
            content : message,
            icon:3,
            btn:['是','否'],
            yes:function () {
                location.href=url;
            }
        });
    },
    toconfirm:function (message) {
        layer.open({
            content:message,
            icon:3,
            btn:['确定'],
        })
    }
}