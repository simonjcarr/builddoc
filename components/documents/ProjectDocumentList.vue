<template>
    <ListBox
            :options="documents"
            optionLabel="name"
            size="small"
            class=""
          >
            <template #option="slotProps">
              <div
                class="flex justify-between w-full"
                @click="emitProjectId(slotProps.option.project.id)"
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

const documents = [
  { id: 1, name: "Document 1", description: "This is document 1" },
  { id: 2, name: "Document 2", description: "This is document 2" },
];
</script>

<style lang="scss" scoped>

</style>