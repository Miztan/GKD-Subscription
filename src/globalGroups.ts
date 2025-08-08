import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '功能类-自动点击扫脸确认',
    desc: '荣耀系统自动点击刷脸通过后的确认按钮',
    enable: true,
    order: 0,
    rules: [
      {
        fastQuery: true,
        matches: 'Button[id="androidhnext:id/facebuttonmakesure"][text="确认"]',
      },
    ],
  },
]);
