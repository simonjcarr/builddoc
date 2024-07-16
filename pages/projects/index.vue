<template>
  <NavBreadCrumb :items="[{ label: 'Projects', to: '/projects' }]" />

  <div class="grid xl:grid-cols-12">
    <div class="grid-span-12 xl:col-span-2">
      
      <ProjectsUserProjectsTable @selectProject="setProjectId" />
    </div>
    <div class="grid-span-12 xl:col-span-6">
      <ProjectsProjectDetail v-if="projectId > 0" :projectId="projectId" class="w-full" />
    </div>
  </div>
</template>

<script setup>

import { useDialog } from 'primevue/usedialog';
const projectId = ref(0);
function setProjectId(id) {
  projectId.value = id;
}


</script>

<style lang="scss"></style>
