<template>
  <Card class="w-full xl:w-2/3 mx-auto ">
    <template #title>My Projects</template>
    <template #content>
      <DataTable :value="projects" tableStyle="min-width: 50rem" size="small" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"  >
        <Column field="project.name" header="Project Name" sortable></Column>
        <Column field="user.email" header="Created by" sortable></Column>
      </DataTable>
    </template>
  </Card>
  <ListBox :options="projects" optionLabel="project.name" class="w-[300px]">
    <template #option="slotProps">
        <div class="flex justify-between w-full">
            <div>{{ slotProps.option.project.name }}</div>
            <div>
                <Icon name="clarity:favorite-line" />
            </div>
        </div>
    </template>
  </ListBox>
</template>

<script setup>
// import { storeToRefs } from "pinia";
import { useUser, SignedIn } from "vue-clerk";
const { user } = useUser();
const { data: projects, status  } = await useFetch("/api/database/projects/usersProjects", { query: { userId: user } })

</script>
