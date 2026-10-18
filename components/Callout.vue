<!--
  A highlighted box for one remark that should stand out from the slide body.

  Usage:
  <Callout type="warning" title="Ship early">

  Everything left of the agent disappears with the pod.

  </Callout>

  Leave an empty line after the opening and before the closing tag
  so Markdown inside the callout is rendered.
-->
<script setup lang="ts">
withDefaults(defineProps<{
  /** note: neutral remark · warning: pitfall or risk · highlight: key takeaway */
  type?: 'note' | 'mantra' | 'warning' | 'highlight'
  /** Optional bold heading */
  title?: string
}>(), {
  type: 'note',
})
</script>

<template>
  <div class="fhnw-callout" :class="`fhnw-callout--${type}`" role="note">
    <div v-if="title" class="fhnw-callout-title">
      {{ title }}
    </div>
    <div class="fhnw-callout-body">
      <slot />
    </div>
  </div>
</template>
