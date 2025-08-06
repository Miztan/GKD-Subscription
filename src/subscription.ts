import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 99810,
  name: 'Miz的GKD订阅',
  version: 1,
  author: 'Miz',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/Miztan/GKD-Subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
