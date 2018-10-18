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
  const data = {
    action,
    params,
  };
  window.postMessage(JSON.stringify(data));
}

module.export = {
  open,
  live(id) {
    open('live', {
      resourceID: id,
    });
  },
  course(id) {
    open('course', {
      resourceID: id,
    });
  },
  classroom(id) {
    open('classroom', {
      resourceID: id,
    });
  },
  tiku(id) {
    open('tiku', {
      resourceID: id,
    });
  },
  back() {
    open('back');
  },
  close() {
    open('close');
  },
};
