<template>
  <div :class="customClass">
    <div class="form-group">
      <label>{{ label }}</label>
      <the-mask autocomplete="nope"
                :placeholder="placeholder[type]"
                :mask="config['creditCard']"
                :class="{'form-control' : true, 'is-invalid': invalid, 'is-valid': false}"
                v-model="identificador"/>
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
      default: 'Número do Cartão',
    },
    invalid: {
      type: Boolean,
    },
    type: {
      type: String,
      default: 'creditCard',
    },
    customClass: {
      type: String,
      default: 'col-md-6',
    },
  },
  name: 'InputCreditCard',
  data: () => ({
    identificador: '',
    config: {
      creditCard: '#### #### #### ####',
    },
    placeholder: {
      creditCard: 'ex: •••• •••• •••• ••••',
    },
    errorMessage: {
      creditCard: 'Número do Cartão',
    },
  }),
  created() {
    this.identificador = this.value;
  },
  computed: {
    message() {
      const invalid = `O ${this.errorMessage[this.type]} informado é inválido`;
      const required = `O ${this.errorMessage[this.type]} precisa ser fornecido.`;
      return this.identificador.length !== 0 ? invalid : required;
    },
  },
  watch: {
    value() {
      this.identificador = this.value;
    },
    identificador() {
      this.$emit('input', this.identificador);
    },
  },
};
</script>

<style scoped>

</style>
