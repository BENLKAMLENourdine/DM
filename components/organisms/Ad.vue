<template>
    <div class="rounded-md py-2 px-4 text-primary-0 h-80 bg-no-repeat bg-bottom" :class="backgroundColor" 
        :style="{backgroundImage: `url(/images/${backgroundImage}.png)`}">
        <p class="mb-6" :class="titleClasses" v-html="text"></p>
        <p class="mb-4 font-medium text-base leading-6" v-html="description"></p>
        <AtomsButton v-if="!withoutButton" :class="buttonBgColor" class="rounded text-primary-0 px-4 py-1" @button-clicked="">
            Rental Car
        </AtomsButton>
    </div>
</template>

<script setup lang="ts">
export interface AdProps {
    text: string,
    description: string,
    backgroundImage: string,
    backgroundColor: string,
    buttonBgColor: string,
    withoutButton: boolean,
    titleClasses?: string
}

const props = withDefaults(defineProps<AdProps>(), {
    withoutButton: false,
    titleClasses: 'font-semibold text-3xl leading-10'
})
</script>