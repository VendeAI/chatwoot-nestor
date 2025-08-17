import { frontendURL } from '../../../../helper/URLHelper';
const SettingsContent = () => import('../Wrapper.vue');
const Index = () => import('./Index.vue');

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/campaigns'),
      component: SettingsContent,
      props: {
        headerTitle: 'CAMPAIGN.HEADER',
        icon: 'megaphone',
      },
      children: [
        {
          path: '',
          name: 'campaigns_iframe',
          meta: {
            permissions: ['administrator'],
          },
          component: Index,
        },
      ],
    },
  ],
};
