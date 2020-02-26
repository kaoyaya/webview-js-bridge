(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * webview 跟 app 通信
   * @file: index.js
   * @author: LiuZiHao/ltinyho@gmail.com
   * Date: 2018/10/18 下午5:17
   */
  function isIos() {
    var u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  }

  function isInApp() {
    return document.cookie.indexOf('app_version') !== -1;
  } // Oc webview 设置


  function setupWebViewJavascriptBridge(callback) {
    if (isIos() && isInApp()) {
      if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
      }

      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
      }

      window.WVJBCallbacks = [callback];
      var WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'https://__bridge_loaded__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe);
      }, 0);
    }
  }

  var bridge = null;
  setupWebViewJavascriptBridge(function (b) {
    /* Initialize your app here */
    bridge = b;
  });
  /**
   *
   * @param action - live直播 classroom班级 course课程 tiku题库 back:webview回退 close:webview pop
   * @param params
   */

  function open(action, params) {
    var data = {
      action: action,
      params: params
    };

    try {
      // 调用 oc 不用转成json
      bridge.callHandler('jsToOc', data, function responseCallback(responseData) {
        console.log('JS received response:', responseData);
      }); // js 调 OC
    } catch (e) {
      console.log(e);
    }

    try {
      var res = JSON.stringify(data);
      window.postMessage(res);
    } catch (e) {
      console.log(e);
    }
  }

  var _default = {
    open: open,
    live: function live(id) {
      open('live', {
        resourceValue: id
      });
    },
    // course(id) {
    //   open('course', {
    //     resourceValue: id,
    //   });
    // },
    course: function course(id, last_learn_lesson) {
      open('course', {
        resourceValue: id,
        lessonID: last_learn_lesson
      });
    },
    classroom: function classroom(id) {
      open('classroom', {
        resourceValue: id
      });
    },
    tiku: function tiku(id) {
      open('tiku', {
        resourceValue: id
      });
    },
    webview: function webview(url) {
      open('webview', {
        resourceValue: url
      });
    },
    login: function login(url) {
      open('login', {
        resourceValue: url
      });
    },
    back: function back() {
      open('back');
    },
    close: function close() {
      open('close');
    },
    wxpay: function wxpay(id) {
      open('wxpay', {
        resourceValue: id
      });
    },
    alipay: function alipay(id) {
      open('alipay', {
        resourceValue: id
      });
    },
    //花呗支付,num-分期期数
    creditPay: function creditPay(id, num) {
      open('creditPay', {
        resourceValue: id,
        num: num
      });
    },
    // 京东支付
    jdPay: function jdPay(id, num) {
      open('jdPay', {
        resourceValue: id,
        num: num
      });
    },
    // ios 内购
    inPurchase: function inPurchase(val) {
      open('inPurchase', {
        resourceValue: val
      });
    },
    // 考币支付
    pointpay: function pointpay(val) {
      open('pointpay', {
        resourceValue: val
      });
    },
    // 每日一练跳转
    dailyPractice: function dailyPractice(val) {
      open('dailyPractice', {
        resourceValue: val
      });
    },
    // 课程中心页跳转
    MyStudyCenter: function MyStudyCenter(val) {
      open('MyStudyCenter', {
        index: val
      });
    },
    // 处理 ios webview 请求
    handleOc: function handleOc(cb) {
      setTimeout(function () {
        bridge.registerHandler('ocToJs', function (data, responseCallback) {
          cb(data);
          responseCallback(data);
        });
      }, 200);
    },
    bridge: bridge
  };
  _exports.default = _default;
});