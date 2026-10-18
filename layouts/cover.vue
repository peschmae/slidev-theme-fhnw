<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
</script>

<template>
  <div class="slidev-layout cover">
    <!-- Yellow header bar with logos -->
    <div class="cover-header">
      <div class="cover-header-left">
        <img src="../assets/fhnw-logo.svg" class="cover-logo" alt="FHNW Logo" />
      </div>
      <div class="cover-header-right">
        <img src="../assets/swissuniversities.png" class="cover-swissuni" alt="swissuniversities" />
      </div>
    </div>

    <!-- Content area -->
    <div class="cover-content">
      <slot />
    </div>
  </div>
</template>
