<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
</script>

<template>
  <div class="slidev-layout cover">
    <!-- Yellow header bar with logos -->
    <div class="cover-header">
      <div class="cover-header-left">
        <img src="/FHNW_HSI_EN.png" class="cover-logo" alt="FHNW Logo" />
      </div>
      <div class="cover-header-right">
        <img src="/swissuniversities.png" class="cover-swissuni" alt="swissuniversities" />
      </div>
    </div>

    <!-- Content area -->
    <div class="cover-content">
      <slot />
    </div>

  </div>
</template>

<style scoped>
.cover {
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Arial', sans-serif;
}

/* Yellow header - approximately 35% of slide height like LaTeX */
.cover-header {
  background: #FDE70E;
  padding: 2rem 2.5rem;
  min-height: 35%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.cover-header-left {
  display: flex;
  align-items: flex-start;
}

.cover-logo {
  height: 4rem;
}

.cover-header-right {
  display: flex;
  align-items: flex-start;
}

.cover-swissuni {
  height: 1.5rem;
}

/* Content area with title and metadata */
.cover-content {
  padding: 2.5rem 2.5rem 1rem 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* Title - Georgia, normal weight (NOT bold), with dashed separator below */
.cover-content :deep(h1) {
  font-family: 'Arial', sans-serif;
  font-size: 2.2rem;
  font-weight: normal;
  color: #000000;
  margin: 0 0 0.75rem 0;
  padding: 0 0 0.75rem 0;
  border: none;
  border-bottom: 1px solid #2D373C;
  line-height: 1.2;
}

/* Dashed separator after h1 - done via wrapper */
.cover-content :deep(h1 + *) {
  /* nothing special needed */
}

/* The dashed line separator */
.cover-content :deep(hr),
.cover-content :deep(h1)::after {
  display: none;
}

/* Subtitle - not italic, smaller */
.cover-content :deep(h2) {
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  color: #2D373C;
  margin: 0 0 1.5rem 0;
  padding: 0;
  border: none;
}

/* Paragraphs for author info */
.cover-content :deep(p) {
  font-family: 'Arial', sans-serif;
  font-size: 0.85rem;
  font-weight: normal;
  margin: 0.15rem 0;
  color: #000000;
  line-height: 1.5;
}

/* Small text (email) */
.cover-content :deep(small) {
  font-size: 0.7rem;
  color: #2D373C;
}

/* Links in cover */
.cover-content :deep(a) {
  color: #2D373C;
  text-decoration: none;
}

/* Add dashed separator between title area and metadata */
.cover-content::after {
  content: none;
}

/* Footer bar on cover page */
.cover-footer {
  background: #FDE70E;
  padding: 0 1.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.6rem;
  color: #000000;
}

.cover-footer-left,
.cover-footer-right {
  font-weight: 400;
}
</style>
