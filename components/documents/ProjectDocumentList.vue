<template>
    <ListBox
            :options="projectDocuments?.documents"
            optionLabel="name"
            size="small"
            class=""
          >
            <template #option="slotProps">
              <div
                class="flex justify-between w-full"
                @click="emitProjectId(slotProps.option.projectId)"
              >
                <div class="text-green-800">
                  {{ slotProps.option.name }}
                </div>
                <div>
                  <Icon
                    class="text-yellow-600"
                    :name="
                      slotProps.option.fav_project?.id
                        ? 'clarity:favorite-solid'
                        : 'clarity:favorite-line'
                    "
                    @click="
                      setFavProject(
                        slotProps.option.user.id,
                        slotProps.option.project.id
                      )
                    "
                    title="Mark as a favorite"
                  />
                </div>
              </div>
            </template>
          </ListBox>
</template>

<script setup>
const props = defineProps({
  projectId: {
    type: Number,
    required: true,
  },
});

const { projectId } = toRefs(props)

const { data: projectDocuments, refresh } = await useFetch('/api/database/documents/getProjectDocuments', { query: { projectId } });

</script>

<style lang="scss" scoped>

</style>