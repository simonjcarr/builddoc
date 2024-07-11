<template>
  <div>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Build Doc</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.display.mdAndUp">
       <MenuClerkUserMenu />
      </template>

      <div v-if="$vuetify.display.smAndDown">
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
    >
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>

let drawer = ref(false);
let group = ref(null);
let items = ref([
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
]);
watch(group, (value) => {
  drawer.value = false;
});
</script>

<style lang="scss" scoped></style>
