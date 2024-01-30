<template>
    <div>
        <div class="container mx-auto px-16 py-10">
            <div class="flex items-center justify-between">
                <AtomsLink link="/" text="DM" class="font-bold text-primary-500 text-3xl leading-10" />
                <MoleculesSearch class="flex flex-grow px-8"/>
                <AtomsButton @button-clicked="toggleDisplayType">
                    <AtomsIconsLike :color="store.displayOnlyFavorites ? colors.red[500] : colors.secondary[500]" />
                </AtomsButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { colors } from '~/utils/constants'

const store = useCarsStore()

const toggleDisplayType = () => {
    store.toggleDisplayType()
}
</script>