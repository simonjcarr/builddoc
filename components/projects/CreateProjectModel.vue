<template>
  <div>
    <div>
      <Button
        severity="secondary"
        icon="pi pi-check"
        label="Create Project"
        text
        size="small"
        class="mb-2 ml-2"
        @click="showDialog=true"
      />
    </div>
    <Dialog v-model:visible="showDialog" modal header="Create Project" class="w-[400px]">
        <div class="py-6">
            <FloatLabel>
              <InputText id="project-name" v-model="project.name" size="small" class="w-full" />
              <label for="project-name">Project Name</label>
            </FloatLabel>
            <FloatLabel class="mt-8">
              <Textarea
                v-model="project.description"
                id="project-description"
                rows="5"
                class="w-full"
                size="small"
              />
              <label for="project-description">Project Description</label>
            </FloatLabel>
            <Button label="Create Project" @click="handleCraeteProject" size="small" severity="secondary" />
        </div>
    </Dialog>
  </div>
</template>

<script setup>
const showDialog = ref(false)
const emit = defineEmits(['create', 'cancel'])
const project = ref({
  name: "",
  description: "",
});

const handleCraeteProject = () => {
  emit('create', project.value)
  showDialog.value = false
}
</script>

<style lang="scss" scoped></style>
