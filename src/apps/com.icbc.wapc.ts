// 订阅使用 JSON5 语法, 根节点可以是数组也可以是对象
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc.wapc',
  name: '工行企业手机银行',
  groups: [
    {
      key: 0,
      name: '功能类-自动同意隐私协议',
      desc: '打开登录界面时自动同意隐私协议，可手动取消勾选',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: ['com.icbc.mvp.ui.activity.login.UkeyLoginActivity'],
          matches: 'CheckBox[id="com.icbc.wapc:id/cb_protocol"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/21619807', // 未勾选协议
            'https://i.gkd.li/i/21619803', // 已勾选协议
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-自动确认使用蓝牙',
      desc: '登录U盾时自动点击确认使用蓝牙',
      rules: [
        {
          fastQuery: true,
          activityIds: ['com.icbc.mvp.ui.activity.login.UkeyLoginActivity'],
          matches: 'TextView[id="com.icbc.wapc:id/tv_confirm"][text="确定"]',
          snapshotUrls: ['https://i.gkd.li/i/21620984'],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-登录提示自动确定',
      desc: '自动点击登录后安全提示弹窗的确定按钮',
      enable: true,
      fastQuery: true,
      rules: [
        {
          matches: [
            '[text*="您上次于"][text*="安全中心"]',
            '@Button[text="确定"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-指纹密码开通提示',
      desc: '自动点击"以后再说"关闭指纹密码开通弹窗',
      enable: true,
      fastQuery: true,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['com.icbc.mvp.ui.activity.login.UkeyLoginActivity'],
          matches: [
            '[text*="开启指纹密码"]', // 弹窗特征文本
            '@TextView[text="以后再说"]', // 点击目标（左侧按钮）
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-退出时切换用户',
      desc: '在退出确认弹窗中点击蓝色链接"切换用户"',
      enable: true,
      fastQuery: true,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['com.icbc.main.MainActivity'],
          matches: [
            '[text*="是否安全退出工行企业手机银行"]', // 弹窗层级特征
            '@TextView[text~="切换用户"]', // 正则精确匹配"切换用户"四个字
          ],
        },
      ],
    },
    {
      key: 5,
      name: '功能类-退出时取消接收通知提示',
      desc: '在退出确认弹窗中点击"取消"（不在此手机接收通知）',
      enable: true,
      fastQuery: true,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['com.icbc.main.MainActivity'], // 主界面
          matches: [
            '[text*="退出后您是否需要在"][text*="接收通知消息"]', // 弹窗特征文本
            '@TextView[text="取消"]', // 点击"取消"按钮
          ],
        },
      ],
    },
  ],
});
