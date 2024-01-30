<template>
    <div>
        <div class="flex justify-between mb-6">
            <p class="text-secondary-0">{{ title }}</p>
            <AtomsButton class="text-primary-500">View All</AtomsButton>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MoleculesCatalogCar v-for="car in popularCars" 
                :name="car.name"
                :type="car.type"
                :gasoline-liter="car.gasolineLiter"
                :kind-of-transition="car.kindOfTransition"
                :people="car.people"
                :price-per-day="car.pricePerDay"
                :img="car.img" 
                :id="car.id"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Car } from '../molecules/CatalogCar.vue';

export interface PopularCarProps {
  title: string,
  popularCars: Array<Car>
}

const props = defineProps<PopularCarProps>()
</script>