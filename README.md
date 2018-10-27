### 实现 web 和 app 通信



### 安装

```bash
npm i webview-js-bridge
```


### 使用示例
```js
  import webviewJS from 'webview-js-bridge'
 webviewJS.open('live', {
          resourceValue: 1235,
        })
```

### 可打开的模块

- live  // 直播页面
- clasroom // 班级页面
- course // 课程页面
- login // 跳转到登录页面
- back // 返回页面
- close // 关闭原生页面
- webview //  直接使用页面跳转即可,不需要用到,


