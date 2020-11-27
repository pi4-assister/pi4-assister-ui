<template>
  <div class="form-group">
    <label for="password">Senha</label>
    <div class="input-group">
      <input id="password" :type="type" class="form-control" name="password" placeholder="Senha"
             @input="$emit('input', $event.target.value)" autocomplete="password">
    </div>
    <div v-if="invalid" class="invalid-feedback">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSenha',
  props: {
    value: {
      type: String,
      default: '',
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      type: 'password',
    };
  },
};
</script>

<style scoped>
.cursor-pointer-password {
  cursor: pointer;
}
</style>
