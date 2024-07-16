<template>
  <div>
    <SignedIn>
         <q-btn color="primary" flat>
          <UserButton after-sign-out-url="/" class="mr-5" />
        </q-btn>
    </SignedIn>
    <SignedOut>
        <q-btn color="primary" flat class="text-white" icon="person_add">
          <SignUpButton />
        </q-btn>
          
        <q-btn color="primary" flat class="text-white" icon="login">
          <SignInButton />
        </q-btn>
  
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
