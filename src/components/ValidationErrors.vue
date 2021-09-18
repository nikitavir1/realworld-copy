<template>
  <ul class="error-messages">
    <li v-for="vlidationError in errorMessages" :key="vlidationError">
      {{ vlidationError }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'McvValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map(name => {
        const messages = this.validationErrors[name].join(', ')
        return `${name}: ${messages}`
      })
    }
  }
}
</script>
