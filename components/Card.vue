<!--
  A content card for grids of short items (comparisons, checklists, agendas).

  Usage:
  <div class="grid grid-cols-3 gap-4">
    <Card label="Lesson 1" title="OpenTelemetry concepts">

    Why instrument, the three signals, API vs. SDK

    </Card>
    <Card title="Highlighted" type="highlight">…</Card>
    <Card title="Pitfall" type="warning">…</Card>
    <Card title="Punchline" type="dark">…</Card>
    <Card label="Push" icon="i-game-icons:push" title="With an icon">…</Card>
  </div>

  Leave an empty line after the opening and before the closing tag
  so Markdown inside the card is rendered.
-->
<script setup lang="ts">
withDefaults(defineProps<{
  /** Card heading */
  title?: string
  /** Small uppercase label above the title, e.g. "Lesson 1" or "A" */
  label?: string
  /** default: grey top bar · highlight: yellow top bar · warning: red top bar · dark: black card */
  type?: 'default' | 'highlight' | 'dark' | 'warning',
  /** Icon to be shown before the label. needs to be a unocss icon class **/
  icon?: string
}>(), {
  type: 'default',
})
</script>

<template>
  <div class="fhnw-card" :class="`fhnw-card--${type}`">
    <div v-if="label || icon" class="fhnw-card-label">
      <span v-if="icon" class="fhnw-card-icon" :class="icon"></span>
      {{ label }}
    </div>
    <div v-if="title" class="fhnw-card-title">
      {{ title }}
    </div>
    <div class="fhnw-card-body">
      <slot />
    </div>
  </div>
</template>
