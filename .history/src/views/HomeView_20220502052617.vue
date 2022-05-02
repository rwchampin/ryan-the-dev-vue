<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue';
import useThreeParticles from '@/components/useThreeParticles.js';

useThreeParticles.setup();
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
