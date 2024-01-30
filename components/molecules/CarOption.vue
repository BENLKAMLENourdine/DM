<template>
    <div class="flex">
        <div class="mr-4 text-secondary-0">{{ title }}</div>
        <div class="text-secondary-500">{{ value }}</div>
    </div>
</template>

<script setup lang="ts">
export interface OptionProps {
    title: string,
    value: string | number | null
}

const props = defineProps<OptionProps>()
</script>