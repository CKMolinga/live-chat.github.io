<template>
  <form action="" @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" name="" required placeholder="email" v-model="email" />
    <input
      type="password"
      name=""
      required
      placeholder="password"
      v-model="password"
    />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";

import useSignup from "../composables/useSignup";

export default {
  setup() {
    const { error, signup } = useSignup();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(displayName.value, email.value, password.value);
      console.log("You signed up!");
    };

    return { displayName, email, password, error, handleSubmit };
  },
};
</script>

<style></style>
