<template>
    <div>
        <div class="mx-auto px-8 md:px-16 pt-16 pb-4">
            <div class="grid md:grid-cols-7 grid-cols-2">
                <div class="md:col-span-4 col-span-2 mb-4">
                    <AtomsLink link="/" text="DM" class="font-bold text-primary-500 text-3xl leading-10"/>
                    <p class="font-medium mt-4 text-normal-500">Our vision is to provide convenience<br/> and help increase your sales business.</p>
                </div>
                <MoleculesLinksGroup :group-title="'About'" :links="links.about" class="mb-4" />
                <MoleculesLinksGroup :group-title="'Community'" :links="links.community" />
                <MoleculesLinksGroup :group-title="'Socials'" :links="links.socials" />
            </div>
            
            <hr class="mt-8 mb-4" />

            <div class="grid grid-cols-2 md:grid-cols-3">
                <p>@2022DM. All rights reserved</p>
                <AtomsLink link="/" text="Privacy & Policy" />
                <AtomsLink link="/" text="Terms & Conditions" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const links = {
    about: [
        {link: '/', text: 'How it works'},
        {link: '/', text: 'Featured'},
        {link: '/', text: 'Partnership'},
        {link: '/', text: 'Business Relation'}
    ],
    community: [
        {link: '/', text: 'Events'},
        {link: '/', text: 'Blog'},
        {link: '/', text: 'Podcast'},
        {link: '/', text: 'Invite a friend'},
    ],
    socials: [
        {link: '/', text: 'Discord'},
        {link: '/', text: 'Instagram'},
        {link: '/', text: 'Twitter'},
        {link: '/', text: 'Facebook'},
    ]
}
</script>