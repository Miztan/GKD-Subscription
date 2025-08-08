// 订阅使用 JSON5 语法, 根节点可以是数组也可以是对象
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '功能类-同步最近消息',
      desc: '登录电脑微信时自动点击同步最近消息',
      actionMaximum: 1,
      order: 0,
      rules: [
        {
          fastQuery: true,
          activityIds: ['.plugin.webwx.ui.ExtDeviceWXLoginUI'],
          matches:
            'CheckBox[id="com.tencent.mm:id/nuk"][text="同步最近的消息"][checked=false]',
          snapshotUrls: ['https://i.gkd.li/i/21686269'],
        },
      ],
    },
  ],
});
