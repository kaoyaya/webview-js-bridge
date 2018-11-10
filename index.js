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
  var data = {action: action, params: params};
  window.postMessage(JSON.stringify(data));
}

module.exports = {
  open: open,
  live: function (id) {
    open('live', {
      resourceValue: id,
    });
  },
  course: function (id) {
    open('course', {
      resourceValue: id,
    });
  },
  classroom: function (id) {
    open('classroom', {
      resourceValue: id,
    });
  },
  tiku: function (id) {
    open('tiku', {
      resourceValue: id,
    });
  },
  webview: function (url) {
    open('webview', {
      resourceValue: url,
    });
  },
  login: function (url) {
    open('login', {
      resourceValue: url,
    });
  },
  back: function () {
    open('back');
  },
  close: function () {
    open('close');
  },
  wxpay: function (id) {
    open('wxpay', {
      resourceValue: id,
    })
  },
  alipay: function (id) {
    open('alipay', {
      resourceValue: id,
    })
  },
  inPurchase: function (val) {
    open('inPurchase', {
      resourceValue: val,
    });
  }
};
