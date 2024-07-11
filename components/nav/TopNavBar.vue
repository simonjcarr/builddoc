<template>
  <div class="py-5 flex justify-between">
    <div class="text-2xl font-semibold">
      <NavDrawer />
      <RouterLink to="/">Build Doc</RouterLink>
    </div>
    <div>
      <SignedIn>
        <v-btn>
          
          <UserButton  after-sign-out-url="/" />
        </v-btn>
      </SignedIn>
      <SignedOut>
        <div class="flex space-x-5">
          <div>
            <SignUpButton />
          </div>
          <div>
            <SignInButton />
          </div>
        </div>
      </SignedOut>
    </div>
  </div>
</template>

<script setup>
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from 'vue-clerk'
import NavDrawer from './NavDrawer.vue'

</script>

<style lang="scss" scoped></style>
