<template>
  <div class="q-pa-md">
    <q-card>
      <q-splitter v-model="splitterModel" class="h-full">
        <template v-slot:before class="">
          <q-list bordered>
            <q-item
              clickable
              dense
              class="text-start"
              v-for="project in usersProjects"
              :key="project.id"
              :name="project.id"
              :label="project.name"
              :active="activeProject == project.id"
              @click="activeProject = project.id"
            >
              <q-item-section>{{ project.name }}</q-item-section>
              <q-item-section avatar>
                <q-icon
                  :name="
                    project.favProjects.length > 0 ? 'star' : 'star_outline'
                  "
                  class="text-yellow-500"
                  size="large"
                  @click="handleToggleFavProject(project.id)"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </template>
        <template v-slot:after>
          <div class="p-4">
            <div class="text-lg font-semibold text-gray-500 uppercase">{{ currentProjectName }}</div>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="settings" label="Settings" />
              <q-tab name="documents" label="Documents" />
              <q-tab name="issues" label="Issues" />
              <q-tab name="tasks" label="Tasks" />
              <q-tab name="permissions" label="Permissions" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="settings">
                <div class="text-h6">Settings</div>
                <ProjectsProjectSettings :projectId="activeProject" />
              </q-tab-panel>

              <q-tab-panel name="documents">
                <div class="text-h6">Documents</div>
                <DocumentsProjectDocumentList :projectId="activeProject" />
              </q-tab-panel>

              <q-tab-panel name="issues">
                <div class="text-h6">Issues</div>
                The issues Tab
              </q-tab-panel>

              <q-tab-panel name="tasks">
                <div class="text-h6">Tasks</div>
                The tasks Tab
              </q-tab-panel>

              <q-tab-panel name="permissions">
                <div class="text-h6">Permissions</div>
                The permissions Tab
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </template>
      </q-splitter>
    </q-card>
  </div>
</template>

<script setup>
const projectId = ref(0);
const activeProject = ref(0);
function setProjectId(id) {
  projectId.value = id;
}
const tab = ref("settings");
const innerTab = ref("innerMails");
const splitterModel = ref(20);

const currentProjectName = computed(() => {
  return usersProjects.value.find((project) => project.id === activeProject.value)?.name;
});

const { data: usersProjects, refresh, status } = await useFetch(
  "/api/database/projects/usersProjects"
);


if (usersProjects.value.length > 0) {
  activeProject.value = usersProjects.value[0]?.id;
}

async function handleToggleFavProject(projectId) {
  $fetch("/api/database/projects/setFavProject", {
    method: "POST",
    body: JSON.stringify({ projectId }),
    headers: { "Content-Type": "application/json" },
  })
    .then(() => {
      refresh();
    })
    .catch((err) => {
      console.error(err);
    });
}
</script>

<style lang="scss"></style>
