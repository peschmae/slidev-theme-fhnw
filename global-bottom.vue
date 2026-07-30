<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { computed } from 'vue'

const { $slidev } = useSlideContext()

const currentPage = computed(() => $slidev.nav.currentSlideNo)
</script>

<template>
  <div class="fhnw-footer">
    <div class="fhnw-footer-left">
      <span v-if="$slidev.configs.title">{{ $slidev.configs.title }}</span>
      <span v-if="$slidev.configs.author"> — {{ $slidev.configs.author }}</span>
    </div>
    <div class="fhnw-footer-right">
      {{ currentPage }}
    </div>
  </div>
</template>
