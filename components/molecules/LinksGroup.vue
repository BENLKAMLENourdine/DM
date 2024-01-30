<template>
    <div>
        <p class="font-semibold pb-3 text-secondary-800 text-xl">{{ groupTitle }}</p>
        <AtomsLink v-for="link in links" :link="link.link" :text="link.text" class="font-medium text-base pb-2 text-normal-500"/>
    </div>
</template>

<script setup lang="ts">
import type { LinkProps } from '../atoms/Link.vue';

export interface LinksGroup {
  groupTitle: string,
  links: Array<LinkProps>
}

const props = defineProps<LinksGroup>()
</script>