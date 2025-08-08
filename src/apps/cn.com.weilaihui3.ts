// 订阅使用 JSON5 语法, 根节点可以是数组也可以是对象
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.weilaihui3',
  name: '蔚来',
  groups: [
    {
      key: 0,
      name: '功能类-自动解锁确认',
      desc: '点击解锁车辆时自动确认',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: ['.app.ui.activity.HomeActivity'],
          matches: 'Button[id="cn.com.weilaihui3:id/btnConfirm"][text="确定"]',
          snapshotUrls: ['https://i.gkd.li/i/21622129'],
        },
      ],
    },
  ],
});
