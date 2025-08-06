// 订阅使用 JSON5 语法, 根节点可以是数组也可以是对象
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc.wapc',
  name: '工行企业手机银行',
  groups: [
    {
      key: 9,
      name: '功能类-自动同意隐私协议',
      desc: '打开登录界面时自动同意隐私协议，可手动取消勾选',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: ['com.icbc.mvp.ui.activity.login.UkeyLoginActivity'],
          matches: '[id="com.icbc.wapc:id/cb_protocol"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/21619807', // 未勾选协议
            'https://i.gkd.li/i/21619803', // 已勾选协议
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动确认使用蓝牙',
      desc: '登录U盾时自动点击确认使用蓝牙',
      rules: [
        {
          fastQuery: true,
          activityIds: ['com.icbc.mvp.ui.activity.login.UkeyLoginActivity'],
          matches: '[id="com.icbc.wapc:id/tv_confirm"]',
          snapshotUrls: ['https://i.gkd.li/i/21620984'],
        },
      ],
    },
  ],
});
