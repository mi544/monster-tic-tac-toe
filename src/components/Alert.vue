<template>
  <div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { error } from '../game/alert.js'

export default {
  name: 'Alert',
  setup() {
    return {
      error,
    }
  },
}
</script>
