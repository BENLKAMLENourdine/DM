<template>
    <div class="flex items-center relative">
        <AtomsIconsSearch class="absolute ml-4" />
        <input
            type="text"
            class="border border-secondary-0 text-sm rounded-full w-full min-h-11 pl-12"
            placeholder="Search something here"
            v-model="searchQuery"
            @keydown.enter="handleSearch"
        />
    </div>
</template>

<script setup lang="ts">
const store = useCarsStore()
const searchQuery = ref<String>('')

const handleSearch = () => {
      store.searchAction(searchQuery.value)
    }
</script>