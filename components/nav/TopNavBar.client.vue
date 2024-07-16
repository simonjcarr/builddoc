<template>
  <div>
    <div>
      <q-toolbar class="bg-primary text-white q-my-md shadow-2">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-separator dark vertical inset />
        <q-btn stretch flat label="Build Docs" to="/" />

        <q-space />
        <SignedIn>
          <q-btn-dropdown stretch flat label="Projects">
            <q-list class="pt-2" dense>
              <q-item
                v-for="item in proejctMenuItems"
                :key="`x.${n}`"
                clickable
                v-close-popup
                tabindex="0"
                :to="item.to"
              >
                <q-item-section side top>
                  <q-icon :name="item.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ item.label }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator inset spaced />
              <q-item-label header>Favourite Projects</q-item-label>
              <q-item 
                v-for="project in favProjects"
                :key="project.id"
                clickable
                :to="`/projects/view/${project.project.id}`"
              >
                <q-item-section side top>
                  <q-icon name="star" class="text-yellow-500 mt-1" size="large"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ project.project.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-separator dark vertical />
          
            <q-toggle
              :model-value="dark.isActive"
              checked-icon="dark_mode"
              unchecked-icon="light_mode"
              size="3rem"
              @update:model-value="(val) => dark.set(val)"
            />
    
          <q-separator dark vertical />
        </SignedIn>
        <MenuClerkUserMenu />
      </q-toolbar>
    </div>
  </div>
</template>

<script setup>
import { SignedIn } from "vue-clerk";
const { dialog, bottomSheet, loading, loadingBar, notify, dark, screen } = useQuasar();
const themeIcon = computed(() => (dark.isActive ? 'dark_mode' : 'light_mode'));
const proejctMenuItems = ref([
  {
    label: "Manage Projects",
    icon: "layers",
    to: "/projects",
  },
]);

const { data: favProjects } = useFetch('/api/database/projects/getUsersFavProjects')

</script>

<style lang="scss" scoped></style>
