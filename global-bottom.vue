<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { computed } from 'vue'

const { $frontmatter, $slidev } = useSlideContext()

const currentPage = computed(() => $slidev.nav.currentSlideNo)
const isCover = computed(() => $frontmatter.layout === 'cover')
</script>

<template>
  <div v-if="!isCover" class="fhnw-footer">
    <div class="fhnw-footer-left">
      <span v-if="$slidev.configs.title">{{ $slidev.configs.title }}</span>
      <span v-if="$slidev.configs.author"> — {{ $slidev.configs.author }}</span>
    </div>
    <div class="fhnw-footer-right">
      {{ currentPage }}
    </div>
  </div>
</template>

<style scoped>
.fhnw-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2rem;
  background: #FDE70E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  font-family: 'Arial', sans-serif;
  font-size: 0.6rem;
  color: #000000;
}

.fhnw-footer-left {
  font-weight: 400;
}

.fhnw-footer-right {
  font-weight: 400;
}
</style>
