<template>
  <NavBreadCrumb :items="[{ label: 'Projects', to: '/projects' }]" />

  <div class="grid grid-cols-12">
    <div class="col-span-2">
       <ProjectsUserProjectsTable @selectProject="setProjectId" />
    </div>
    <div class="col-span-6">
      <ProjectsProjectDetail :projectId="projectId" class="w-full" />
    </div>
  </div>
</template>

<script setup>
const projectId = ref(0);
function setProjectId(id) {
  projectId.value = id;
}
</script>

<style lang="scss"></style>
