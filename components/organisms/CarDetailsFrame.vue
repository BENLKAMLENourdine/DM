<template>
    <div class="grid grid-cols-3 gap-4 mb-12">
        <div class="col-span-3 md:col-span-1">
            <OrganismsAd text="Sports car with the best<br> design and acceleration"
                         description="Safety and comfort while driving a<br> futuristic and elegant sports car"
                         background-image="bg1"
                         :without-button="true"
                         button-bg-color="bg-primary-500"
                         background-color="bg-primary-500"
                         class="col-span-2 md:col-span-1"
                         title-classes="font-semibold text-2xl leading-1"/>

            <div class="grid grid-cols-3 gap-8 mt-4">
                <NuxtImg v-for="image in carDetails?.images" class="h-20 px-2 py-2 border-2 cursor-pointer rounded-md border-primary-500" preload :src="image.url" />
            </div>
        </div>
        <div class="hidden md:block col-span-2 bg-primary-0 px-4 py-4 rounded-md">
            <p class="text-secondary-800 font-bold text-3xl">{{ carDetails?.name }}</p>
            <div class="flex mt-1">
                <div class="flex text-base">
                    <AtomsIconsStar />
                    <AtomsIconsStar />
                    <AtomsIconsStar />
                    <AtomsIconsStar />
                    <AtomsIconsStar />
                </div>

                <p class="ml-4 text-secondary-500 text-base">440+ reviewer</p>
            </div>
            <p class="mt-4 mb-8 text-secondary-500 text-base">{{ carDetails?.description }}</p>
            <div class="grid grid-cols-3 gap-2 mb-10">
                <MoleculesCarOption title="Type Car" :value="carDetails?.type" />
                <MoleculesCarOption title="Capacity" :value="carDetails?.people" />
                <MoleculesCarOption title="Gasoline" :value="carDetails?.gasolineLiter" />
                <MoleculesCarOption title="Steering" :value="carDetails?.kindOfTransition" />
            </div>

            <div class="flex justify-between self-end">
                <p><span>{{ carDetails?.pricePerDay }}/ &nbsp;</span>day</p>
                <AtomsButton class="text-primary-0 bg-primary-500 px-4 py-2 rounded">
                    Rent Now
                </AtomsButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Car } from '../molecules/CatalogCar.vue';
export interface carDetails extends /* @vue-ignore */ Car {
    description: string,
    images: {
        url: string
    }[]
}

const store = useCarsStore()
const { carDetails } = storeToRefs(store)
</script>