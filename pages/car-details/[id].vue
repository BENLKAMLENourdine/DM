<template>
    <div class="mx-auto px-8 md:px-16 bg-backgd-500 pt-6 pb-12">
        <OrganismsCarDetailsFrame />
        <OrganismsRecommendationCar :title="'Recommendation Cars'" :recommendation-cars="store.recommendationCars" :limit="true"/>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const store = useCarsStore()

await store.fetchCarDetails(id)
await store.fetchCars()
</script>