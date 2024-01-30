<template>
    <div class="mx-auto px-8 md:px-16 bg-backgd-500 pt-6 pb-12">
        <div class="grid grid-cols-2 gap-4 mb-6">
            <OrganismsAd text="The Best Platform<br> for Car Rental"
                         description="Ease of doing a car rental safely and<br> reliably. Of course at a low price."
                         background-image="bg1"
                         button-bg-color="bg-primary-500"
                         background-color="bg-information-500"
                         class="col-span-2 md:col-span-1"/>
            <OrganismsAd text="Easy way to rent a<br> car at a low price"
            description="Providing cheap car rental services<br> and safe and comfortable facilities."
            background-image="bg2"
            button-bg-color="bg-information-500"
            background-color="bg-primary-500"
            class="hidden md:block" />
        </div>
        <OrganismsCatalogCar :popular-cars="store.popularCars" :recommendation-cars="store.recommendationCars"/>
    </div>
</template>

<script setup lang="ts">

const store = useCarsStore()

await store.fetchCars()
await store.fetchPopularCars()

</script>