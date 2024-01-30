<template>
    <div>
        <NuxtLink :to="link">{{text}}</NuxtLink>
    </div>
</template>

<script setup lang="ts">
export interface LinkProps {
    link: string,
    text: string
}

const props = withDefaults(defineProps<LinkProps>(), {
  link: '/',
  text: ''
})
</script>