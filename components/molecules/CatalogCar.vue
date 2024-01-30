<template>
    <div class="bg-primary-0 rounded-lg px-6 py-6">
        <div class="flex justify-between mb-12">
            <div>
                <p class="text-secondary-800 font-bold text-xl">{{ name }}</p>
                <p class="text-secondary-0 font-bold text-sm">{{ type }}</p>
            </div>
            <AtomsButton>
                <AtomsIconsLike />
            </AtomsButton>
        </div>
        <div class="mb-8">
            <NuxtImg preload :src="img" />
        </div>
        <div class="flex justify-between mb-6">
            <MoleculesIconTag class="text-secondary-0" :text="gasolineLiter">
                <AtomsIconsGasoline />
            </MoleculesIconTag>
            <MoleculesIconTag class="text-secondary-0" :text="kindOfTransition">
                <AtomsIconsDrivingType />
            </MoleculesIconTag>
            <MoleculesIconTag class="text-secondary-0" :text="people">
                <AtomsIconsCapacity />
            </MoleculesIconTag>
        </div>

        <div class="flex justify-between">
            <div>
                <span>{{  pricePerDay }}/&nbsp;</span>
                <span class="text-secondary-0 font-medium text-sm">day</span>
            </div>
            <AtomsButton @button-clicked="" class="text-primary-0 bg-primary-500 px-4 py-2 rounded">
                Rent Now
            </AtomsButton>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface Car {
    name: string,
    type: string,
    gasolineLiter: number,
    kindOfTransition: string,
    people: number,
    pricePerDay: number,
    id: string,
    img: string
}

const props = defineProps<Car>()

</script>