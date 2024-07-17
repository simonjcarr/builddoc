<template>
  <q-card class="">
    <q-card-section>
      <div class="text-gray-500 font-semibold text-xl">Project Documents</div>
      <p>Order your documents below by drag and drop</p>
    </q-card-section>
    <q-card-section>
      <q-list bordered separator class="rounded-lg">
      <draggable
        v-model="projectDocuments.documents"
        @start="drag = true"
        @end="drag = false"
        @change="handleDocumentOrderChange"
        item-key="id"
        animation="150"
      >
        <template #item="{ element }">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="swap_vert" size="large"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ element.name }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-btn size="small" dense class="w-[100px]" color="primary" icon="edit_note" label="Open" @click="handleClick(element.id)" />
            </q-item-section>
          </q-item>
        </template>
      </draggable>
      </q-list>
    </q-card-section>
    <q-card-section v-if="dirty">
      <div >
        <q-btn
          color="primary"
          size="small"
          icon="check"
          label="Save"
          @click="handleSaveDocumentOrder"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import draggable from "vuedraggable";
const dirty = ref(false);
const props = defineProps({
  projectId: {
    type: Number,
    required: true,
  },
});


const { projectId } = toRefs(props);

const { data: projectDocuments, refresh } = await useFetch(
  "/api/database/documents/getProjectDocuments",
  { query: { projectId } }
);


function handleClick(id) {
  console.log(id);
}

function handleDocumentOrderChange() {
  dirty.value = true;
}

async function handleSaveDocumentOrder() {
  try {
    const result = await $fetch("/api/database/documents/saveDocumentOrder", {
      method: "POST",
      body: JSON.stringify({ documents: projectDocuments.value.documents }),
      headers: { "Content-Type": "application/json" },
    });
    if (result == "ok") {
      dirty.value = false;
      Notify.create({
        type: "positive",
        message: "Document order saved",
      });
    }

  } catch (error) {
    Notify.create({
      type: "negative",
      message: "Error saving document order",
    })
  }
}
</script>

<style lang="scss" scoped></style>
