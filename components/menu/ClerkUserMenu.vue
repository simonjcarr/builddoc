<template>
  <div>
    <SignedIn>
        <Button text severity="secondary">
          <UserButton after-sign-out-url="/" class="mr-5" />
        </Button>

    </SignedIn>
    <SignedOut>
      
        <Button size="small" text severity="secondary">
          <Icon name="mdi:account-plus" class="mt-1" />
          <SignUpButton />
        </Button>
          
        <Button size="small" text severity="secondary">
          <Icon class="mt-1" name="fa:sign-in" />
          <SignInButton />
        </Button>
  
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
