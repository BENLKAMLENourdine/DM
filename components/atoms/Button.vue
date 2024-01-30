<template>
    <button @click="handleButtonClick">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'buttonClicked'): void
}>()

const handleButtonClick = () => emit('buttonClicked')
</script>