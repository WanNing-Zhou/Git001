//分四步
//1.导入http模块
const http = require('http');
//2.创建web服务器实例
const server = http.createServer();

//3.给服务器绑定一个request事件,监听客户端的一个请求
server.on("request", (req, res) => {
    //只要客户端来请求我们自己的服务器,就会触发request事件,从而调用这个事件处理函数
    console.log("Someone visit our web server");

});

//4.启动服务器
//第一个参数是端口号,第二个参数是启动成功的回调函数
server.listen(80, () => {
    console.log("server running at http://127.0.0.1");
});