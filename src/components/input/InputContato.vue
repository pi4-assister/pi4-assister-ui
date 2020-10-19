<template>
  <div :class="customClass">
    <div class="form-group">
      <label>{{ label }}</label>
      <the-mask autocomplete="nope"
                :placeholder="placeholder[type]"
                :mask="config[type]"
                :class="{'form-control' : true, 'is-invalid': invalid, 'is-valid': false}"
                v-model="contato"/>
      <div class="d-flex">
        <div v-show="invalid" class="form-text invalid-feedback">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask';

export default {
  components: { TheMask },
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    invalid: {
      type: Boolean,
    },
    type: {
      type: String,
      required: true,
      validator: (val) => ['telefone', 'celular'].includes(val),
    },
    customClass: {
      type: String,
      default: 'col-md-6',
    },
  },
  name: 'InputContato',
  data: () => ({
    contato: '',
    config: {
      telefone: '(##) ####-####',
      celular: '(##) #####-####',
    },
    placeholder: {
      telefone: 'ex: (11) 4444-0000',
      celular: 'ex: (11) 95555-1111',
    },
    errorMessage: {
      telefone: 'telefone',
      celular: 'celular',
    },
  }),
  created() {
    this.contato = this.value;
  },
  computed: {
    message() {
      const invalid = `O ${this.errorMessage[this.type]} informado é inválido`;
      const required = `O ${this.errorMessage[this.type]} precisa ser fornecido.`;
      return this.contato.length !== 0 ? invalid : required;
    },
  },
  watch: {
    value() {
      this.contato = this.value;
    },
    contato() {
      this.$emit('input', this.contato);
    },
  },
};
</script>

<style scoped>

</style>
