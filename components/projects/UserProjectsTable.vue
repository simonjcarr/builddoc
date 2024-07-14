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
  <ListBox :options="projects" optionLabel="project.name" class="w-[300px] bg-green-100 ">
    <template #option="slotProps">
        <div class="flex justify-between w-full">
            <div class="text-green-800">{{ slotProps.option.project.name }}</div>
            <div>
                <Icon 
                class="text-yellow-600" 
                :name="slotProps.option.fav_project?.id? 'clarity:favorite-solid' : 'clarity:favorite-line'" 
                @click="setFavProject(slotProps.option.user.id, slotProps.option.project.id)" 
                title="Mark as a favorite" 
                />
            </div>
        </div>
    </template>
  </ListBox>
</template>

<script setup>
// import { storeToRefs } from "pinia";
import { useUser, SignedIn } from "vue-clerk";
const { user } = useUser();
const { data: projects, status, refresh } = await useFetch("/api/database/projects/usersProjects", { query: { userId: user } })
async function setFavProject(userId, projectId) {
    const favResult = await $fetch("/api/database/projects/setFavProject", {
        method: "POST",
        body: JSON.stringify({ userId, projectId }),
        headers: { "Content-Type": "application/json" },
    });
    console.log("FavResult", favResult);
    if (favResult == 'ok') {
        refresh();
    }
    
}
</script>
