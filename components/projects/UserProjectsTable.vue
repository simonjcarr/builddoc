<template>
  
</template>

<script setup>
import { useUser, SignedIn } from "vue-clerk";
const { user } = useUser();
const { data: projects, status  } = await useFetch("/api/database/projects/usersProjects", { query: { userId: user } })
    


</script>