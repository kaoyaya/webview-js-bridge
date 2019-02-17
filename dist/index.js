(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.index = mod.exports;
  }
})(this, function () {
  "use strict";

  /**
   * webview 跟 app 通信
   * @file: index.js
   * @author: LiuZiHao/ltinyho@gmail.com
   * Date: 2018/10/18 下午5:17
   */

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
      window.webkit.messageHandlers.reactNative.postMessage(JSON.stringify(data));
    } catch (e) {
      window.postMessage(JSON.stringify(data));
    }
  }

  module.exports = {
    open: open,
    live: function live(id) {
      open('live', {
        resourceValue: id
      });
    },
    course: function course(id) {
      open('course', {
        resourceValue: id
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
    // ios 内购
    inPurchase: function inPurchase(val) {
      open('inPurchase', {
        resourceValue: val
      });
    },
    // 考币支付
    pointPay: function pointPay(val) {
      open('pointpay', {
        resourceValue: val
      });
    }
  };
});