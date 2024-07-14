import { defineStore } from "pinia";
import { useUser } from "vue-clerk"



export const useProjectStore = defineStore('projects', {
    state: () => ({
        projects: [],
    }),
    actions: {
        async fetchProjects() {
            const user = useUser();
            // const { data: projects } = await useFetch("/api/database/projects/usersProjects", { query: { userId: user } })
            // console.log(projects)
            // this.projects = projects
        }
    }
})