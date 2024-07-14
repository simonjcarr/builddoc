<template>
  <Card class=" shadow-md border-2">
    <template #title>
      <div class="item-center text-green-200">
        <Icon name="fluent:layer-diagonal-20-filled" class="mt-2" />
        Project Name {{ projectId }}
      </div>
    </template>
    <template #content>
      <div class="p-2">
        <div class="">
          <p class="font-semibold">Description</p>
          <p>This is my great project</p>
        </div>

        <div class="grid grid-cols-12 mt-2">
          <div class="font-semibold col-span-4">Document Count:</div>
          <div class="col-span-6">
            <Badge value="2" size="small" class="bg-green-400 text-green-800" />
          </div>
        </div>

        <div class="grid grid-cols-12">
          <div class="font-semibold col-span-4">ToDo's:</div>
          <div class="col-span-8">
            <Badge value="2" size="small" class="bg-green-400 text-green-800" />
          </div>
        </div>
        
        <div class="grid grid-cols-12">
          <div class="font-semibold col-span-4">Issues:</div>
          <div class="col-span-8">
            <Badge
              value="5"
              size="small"
              class="bg-orange-400 text-orange-50"
            />
          </div>
        </div>
        <div>
          <Button size="small" class="bg-green-400 text-green-700 p-1"
            >Edit Project</Button
          >
        </div>

        <div class="mt-4 border-t border-green-500">
          <p class="p-2 text-green-900 font-bold">Project Documents</p>
          <ListBox
            :options="documents"
            optionLabel="name"
            size="small"
            class="bg-green-100"
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
        </div>
      </div>
    </template>
    <template #footer> </template>
  </Card>
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

<style lang="scss" scoped></style>
