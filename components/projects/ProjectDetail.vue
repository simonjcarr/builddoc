<template>
  <Tabs v-model:value="tab">
    <TabList>
        <Tab value="0">Overview</Tab>
      <Tab value="1">Documents ({{ projectId }})</Tab>
      <Tab value="2">Issues</Tab>
      <Tab value="3">Tasks</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </TabPanel>
      <TabPanel value="1">
        <DocumentsProjectDocumentList projectId="projectId" />
      </TabPanel>
    </TabPanels>
  </Tabs>
  
</template>

<script setup>
const tab = ref("0");
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
