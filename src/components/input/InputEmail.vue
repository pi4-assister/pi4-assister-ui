<template>
  <div class="form-group">
    <label for="email">E-mail</label>
    <input id="email" type="email" class="form-control" name="email" placeholder="E-mail"
           autocomplete="username" required=""
           autofocus="" @input="$emit('input', $event.target.value)">
    <div v-show="invalid" class="invalid-feedback">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputEmail',
  props: {
    value: {
      type: String,
      default: '',
      required: true,
    },
    invalid: {
      type: Boolean,
      default: false,
      required: true,
    },
    message: {
      type: String,
      default: 'O e-mail informado é inválido',
    },
  },
};
</script>

<style scoped>

</style>
