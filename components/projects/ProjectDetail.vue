<template>
    <div>
        Selected Project {{ projectId }}
    </div>
</template>

<script setup>
const props = defineProps({
    projectId: {
        type: Number,
        required: true
    }
})


</script>

<style lang="scss" scoped>

</style>