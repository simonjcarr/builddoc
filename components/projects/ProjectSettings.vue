<template>
  <div>Current Project {{ projectId }}</div>
  
</template>

<script setup>
const tab = ref("0");
const props = defineProps({
  projectId: {
    type: Number,
    required: true,
  },
});

const documents = [
  { id: 1, name: "Document 1", description: "This is document 1" },
  { id: 2, name: "Document 2", description: "This is document 2" },
];
</script>

<style lang="scss" scoped></style>
