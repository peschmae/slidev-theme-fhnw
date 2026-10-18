<!--
  A content card for grids of short items (comparisons, checklists, agendas).

  Usage:
  <div class="grid grid-cols-3 gap-4">
    <Card label="Lesson 1" title="OpenTelemetry concepts">

    Why instrument, the three signals, API vs. SDK

    </Card>
    <Card title="Highlighted" variant="highlight">…</Card>
    <Card title="Punchline" variant="dark">…</Card>
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
  /** default: grey card · highlight: yellow top bar · dark: black card */
  variant?: 'default' | 'highlight' | 'dark'
}>(), {
  variant: 'default',
})
</script>

<template>
  <div class="fhnw-card" :class="`fhnw-card--${variant}`">
    <div v-if="label" class="fhnw-card-label">
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
