<template>
  <div>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title><NuxtLink to="/">Build Doc</NuxtLink></v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.display.mdAndUp">
        <MenuClerkUserMenu />
      </template>

      <div v-if="$vuetify.display.smAndDown">
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </div>
    </v-app-bar>
    <SignedIn>
      <v-navigation-drawer
        expand-on-hover
        rail
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
      >
        <v-list density="compact" :items="items" nav></v-list>
      </v-navigation-drawer>
    </SignedIn>
  </div>
</template>

<script setup>
import { SignedIn } from "vue-clerk";
let drawer = ref(true);
let group = ref(null);
let items = ref([
  {
    title: "Home",
    value: 1,
    props: {
      prependIcon: "mdi-home",
      to: "/",
    },
  },
  {
    title: "Dashboard",
    value: 2,
    props: {
      prependIcon: "mdi-view-dashboard",
      to: "/dashboard",
    },
  },
]);
watch(group, (value) => {
  drawer.value = false;
});
</script>

<style lang="scss" scoped></style>
