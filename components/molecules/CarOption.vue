<template>
    <div class="flex">
        <div>{{ title }}</div>
        <div>{{ value }}</div>
    </div>
</template>

<script setup lang="ts">
export interface OptionProps {
    title: string,
    value: string
}

const props = defineProps<OptionProps>()
</script>