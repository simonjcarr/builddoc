<template>
  <div>
    Projects
    <SignedIn>
      <div v-for="project in data" :key="project.project.id">
        {{ project.project.name }} create by {{ project.user.email }} ({{ project.project.description }})
      </div>
    </SignedIn>
  </div>
</template>

<script setup>
import { useUser, SignedIn } from "vue-clerk";
const { user } = useUser();
const { data } = await useFetch("/api/database/projects/usersProjects", { query: { userId: user } });
</script>
