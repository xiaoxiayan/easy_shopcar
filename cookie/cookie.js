function OperationCookie () {}
// 设置cookie值
OperationCookie.prototype.setItem = function(name, val, day) {
    document.cookie = name + '=' + val + '; max-age=' + day * 24 * 60 * 60 + ';'; 
}
// 获取cookie值
OperationCookie.prototype.getItem = function(name) {
    // "username=456; age=15; oop=mian"
    var obj = {};
    var _cookie = document.cookie;
    _cookie = _cookie.split('; ');
    for(var i = 0; i < _cookie.length; i++) {
        var arr = _cookie[i].split('=');
        obj[arr[0]] = arr[1];
    }
    // obj = {
    //     username: 456,
    //     age: 15,
    //     oop: 'main'
    // }
    return name ? obj[name] : obj;
}
// 删除cookie值
OperationCookie.prototype.removeItem = function(name) {
    this.setItem(name, '', 0);
}

OperationCookie.prototype.clear = function() {
    var obj = this.getItem();
    for(var i  in obj) {
        this.removeItem(i);   
    }
}