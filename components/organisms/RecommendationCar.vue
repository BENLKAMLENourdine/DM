<template>
    <div>
        <p class="mb-6 text-secondary-0">{{ title }}</p>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MoleculesCatalogCar v-for="car in recommendationCars"
                :name="car.name"
                :type="car.type"
                :gasoline-liter="car.gasolineLiter"
                :kind-of-transition="car.kindOfTransition"
                :people="car.people"
                :price-per-day="car.pricePerDay"
                :img="car.img" 
                :id="car.id" />
        </div>
        <div class="flex justify-center mt-10">
            <AtomsButton class="bg-primary-500 text-primary-0 py-2 px-6 rounded" @button-clicked="">
                Show more cars
            </AtomsButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Car } from '../molecules/CatalogCar.vue';

export interface RecommendationCarProps {
  title: string,
  recommendationCars: Array<Car>
}

const props = defineProps<RecommendationCarProps>()
</script>