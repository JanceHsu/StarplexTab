// 监听扩展图标的点击事件
chrome.action.onClicked.addListener(() => {
  // 打开扩展内的index.html页面
  chrome.tabs.create({
    url: chrome.runtime.getURL("index.html")
  });
});
