<template>
    <div class="mx-auto px-8 md:px-16 bg-backgd-500 pt-6 pb-12">
        <OrganismsCarDetailsFrame />
        <OrganismsRecommendationCar :title="'Recommendation Cars'" :recommendation-cars="rcars"/>
    </div>
</template>

<script setup lang="ts">

const rcars = [
    {
        name: "Toyota Camry",
        type: "Sedan",
        gasolineLiter: 60,
        kindOfTransition: "Automatic",
        people: 5,
        pricePerDay: 50,
        id: "toyota-camry",
        img: "https://dm-assignment-commonshare.koyeb.app/img/35.png"
    },
    {
        name: "Toyota Camry",
        type: "Sedan",
        gasolineLiter: 60,
        kindOfTransition: "Automatic",
        people: 5,
        pricePerDay: 50,
        id: "toyota-camry",
        img: "https://dm-assignment-commonshare.koyeb.app/img/35.png"
    },
    {
        name: "Toyota Camry",
        type: "Sedan",
        gasolineLiter: 60,
        kindOfTransition: "Automatic",
        people: 5,
        pricePerDay: 50,
        id: "toyota-camry",
        img: "https://dm-assignment-commonshare.koyeb.app/img/35.png"
    },
    {
        name: "Toyota Camry",
        type: "Sedan",
        gasolineLiter: 60,
        kindOfTransition: "Automatic",
        people: 5,
        pricePerDay: 50,
        id: "toyota-camry",
        img: "https://dm-assignment-commonshare.koyeb.app/img/35.png"
    },
    {
        name: "Toyota Camry",
        type: "Sedan",
        gasolineLiter: 60,
        kindOfTransition: "Automatic",
        people: 5,
        pricePerDay: 50,
        id: "toyota-camry",
        img: "https://dm-assignment-commonshare.koyeb.app/img/35.png"
    },
    {
        name: "Toyota Camry",
        type: "Sedan",
        gasolineLiter: 60,
        kindOfTransition: "Automatic",
        people: 5,
        pricePerDay: 50,
        id: "toyota-camry",
        img: "https://dm-assignment-commonshare.koyeb.app/img/35.png"
    },
    {
        name: "Toyota Camry",
        type: "Sedan",
        gasolineLiter: 60,
        kindOfTransition: "Automatic",
        people: 5,
        pricePerDay: 50,
        id: "toyota-camry",
        img: "https://dm-assignment-commonshare.koyeb.app/img/35.png"
    },
    {
        name: "Toyota Camry",
        type: "Sedan",
        gasolineLiter: 60,
        kindOfTransition: "Automatic",
        people: 5,
        pricePerDay: 50,
        id: "toyota-camry",
        img: "https://dm-assignment-commonshare.koyeb.app/img/35.png"
    }
]
</script>