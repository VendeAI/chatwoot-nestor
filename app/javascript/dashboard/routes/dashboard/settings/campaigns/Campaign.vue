<script>
export default {
  computed: {
    iframeUrl() {
      return window.globalConfig?.CAMPAIGNS_IFRAME_URL || '';
    },
  },
};
</script>

<template>
  <div class="flex-1 overflow-auto">
    <div v-if="iframeUrl" class="iframe-container">
      <iframe
        :src="iframeUrl"
        class="campaigns-iframe"
        frameborder="0"
        width="100%"
        height="100%"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
    <div v-else class="error-message">
      <p>{{ $t('CAMPAIGN.IFRAME_URL_NOT_CONFIGURED') }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.iframe-container {
  @apply w-full h-full;
  min-height: 80vh;
}

.campaigns-iframe {
  @apply w-full h-full border-0;
  min-height: 80vh;
}

.error-message {
  @apply flex items-center justify-center h-64 text-center;
  color: var(--color-error);
  
  p {
    @apply text-lg font-medium;
  }
}
</style>
