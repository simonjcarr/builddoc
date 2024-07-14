<template>
  <NavBreadCrumb :items="[{ label: 'Projects', to: '/projects'}]" />
  
  <div class="mb-2 ml-2 font-semibold text-green-800">My Projects</div>
  <div class="flex space-x-2">
    <ProjectsUserProjectsTable @selectProject="setProjectId" />
    <ProjectsProjectDetail :projectId="projectId"  />
  </div>
</template>

<script setup>
const projectId = ref(0)
function setProjectId(id) {
  projectId.value = id;
}
</script>

<style lang="scss"></style>
