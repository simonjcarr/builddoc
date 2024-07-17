<template>
  <div class=" md:hidden">
    
      <!-- Mobile -->
       <q-select
        filled
        v-model="activeProject"
        option-label="name"
        option-value="id"
        label="Select Project"
        :options="usersProjects"
        behavior="menu"
        class=""
        emit-value
        map-options
      />
      <q-separator />
      <q-select
        filled
        v-model="tab"
        label="Project Actions"
        :options="tabs"
        behavior="menu"
        emit-value
        class="mt-4"
      />
    
  </div>
  <div class="q-pa-md max-md:hidden">
    <q-card>
      <!-- Desktop -->
      <q-splitter v-model="splitterModel" class="h-full">
        <template v-slot:before>
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
          <div class="p-4 w-full">
            <div class="text-lg font-semibold text-gray-500 uppercase">
              {{ currentProjectName }}
            </div>

            <div class="max-md:hidden">
              <q-tabs
                v-model="tab"
                dense
                inline-label
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
              >
                <q-tab icon="settings" name="settings" label="Settings" />
                <q-tab icon="article" name="documents" label="Documents" />
                <q-tab icon="bug_report" name="issues" label="Issues" />
                <q-tab icon="task" name="tasks" label="Tasks" />
                <q-tab icon="admin_panel_settings" name="permissions" label="Permissions" />
              </q-tabs>
            </div>

            <q-separator />
  <div class="mt-4 md:mt-0">
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="settings">
        <div class="text-h6">Settings</div>
        <ProjectsProjectSettings :projectId="activeProject" />
      </q-tab-panel>

      <q-tab-panel name="documents">
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

            
          </div>
        </template>
      </q-splitter>
    </q-card>
  </div>
  <q-separator />
  <div class="mt-4 md:mt-0 md:hidden">
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="settings">
        <div class="text-h6">Settings</div>
        <ProjectsProjectSettings :projectId="activeProject" />
      </q-tab-panel>

      <q-tab-panel name="documents">
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

<script setup>
const projectId = ref(0);
const activeProject = ref(0);
function setProjectId(id) {
  projectId.value = id;
}

const tabs = [
  { value: "settings", label: "Settings" },
  { value: "documents", label: "Documents" },
  { value: "issues", label: "Issues" },
  { value: "tasks", label: "Tasks" },
  { value: "permissions", label: "Permissions" },
];
const tab = ref("settings");
const innerTab = ref("innerMails");
const splitterModel = ref(20);

const currentProjectName = computed(() => {
  return usersProjects.value.find(
    (project) => project.id === activeProject.value
  )?.name;
});

const {
  data: usersProjects,
  refresh,
  status,
} = await useFetch("/api/database/projects/usersProjects");

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

function handleClick(id) {
  console.log(`clicked ${id}`);
}
</script>

<style lang="scss"></style>
