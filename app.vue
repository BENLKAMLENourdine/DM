<template>
  <NuxtLayout>
    <NuxtPage>
    </NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'DM - Car Rental',
  meta: [
    { charset: "UTF-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: 'description', content: 'The best car rental platform.' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'DM - Car Rental',
  ogTitle: 'DM - Car Rental',
  description: 'The best car rental platform.',
  ogDescription: 'The best car rental platform.',
})

</script>