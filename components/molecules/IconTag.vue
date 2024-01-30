<template>
    <div class="flex items-center">
        <slot></slot>
        <p class="ml-2 font-medium text-sm">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
export interface IconTagProps {
    text: string | number
}

const props = withDefaults(defineProps<IconTagProps>(), {
  text: ''
})
</script>