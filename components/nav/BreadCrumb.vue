<template>
  <div class="flex text-green-800">
    <NuxtLink to="/">
      <Icon name="carbon:home" class="font-semibold mt-5 -mr-3 text-lg" />
    </NuxtLink>
    <Breadcrumb :home="home" :model="items">
        <template #item="{ item, props}">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
        </template>
    </Breadcrumb>
  </div>
</template>

<script setup>
const home = ref({
  icon: "pi pi-home",
});
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const links = ref([]);

</script>

<style lang="scss" scoped></style>
