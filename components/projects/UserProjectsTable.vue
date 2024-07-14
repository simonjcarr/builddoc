<template>
  
  <ListBox :options="projects" optionLabel="project.name" class="w-[300px] bg-green-100 ">
    <template #option="slotProps">
        <div class="flex justify-between w-full" @click="emitProjectId(slotProps.option.project.id)" >
            <div class="text-green-800" >{{ slotProps.option.project.name }}</div>
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

import { useUser, SignedIn } from "vue-clerk";
const { user } = useUser();
const { data: projects, status, refresh } = await useFetch("/api/database/projects/usersProjects", { query: { userId: user } })
async function setFavProject(userId, projectId) {
    const favResult = await $fetch("/api/database/projects/setFavProject", {
        method: "POST",
        body: JSON.stringify({ userId, projectId }),
        headers: { "Content-Type": "application/json" },
    });
    if (favResult == 'ok') {
        refresh();
    }
}

const emit = defineEmits(['selectProject'])

function emitProjectId(id) {
    emit("selectProject", id)
}
</script>
