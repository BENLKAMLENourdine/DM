<template>
    <div>
        <OrganismsPopularCar class="mb-10" :popular-cars="popularCars" :title="'Popular Cars'" />
        <OrganismsRecommendationCar :title="'Recommendation Cars'" :recommendation-cars="recommendationCars"/>
    </div>
</template>

<script setup lang="ts">
import type { Car } from '../molecules/CatalogCar.vue';

export interface CarsProps {
  popularCars: Array<Car>,
  recommendationCars: Array<Car>
}

const props = defineProps<CarsProps>()</script>