<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Build Doc</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.display.mdAndUp">
        <SignedIn>
          <v-btn>
            <UserButton after-sign-out-url="/" class="mr-5"  />
          </v-btn>
        </SignedIn>
        <SignedOut>
          <v-btn prepend-icon="mdi-account-plus">
            <SignUpButton />
          </v-btn>
          <v-btn prepend-icon="mdi-login" variant="text">
            <SignInButton />
          </v-btn>
        </SignedOut>
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

    <v-main style="height: 500px">
      <v-card-text>
        <NuxtPage />
      </v-card-text>
    </v-main>
  </v-app>
</template>

<script setup>
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "vue-clerk";

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
