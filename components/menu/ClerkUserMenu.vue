<template>
  <div>
    <SignedIn>
      <v-btn>
        <UserButton after-sign-out-url="/" class="mr-5" />
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
  </div>
</template>

<script setup>
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "vue-clerk";
</script>

<style lang="scss" scoped></style>
