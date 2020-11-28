<template>
  <div :class="customClass">
    <div class="form-group">
      <label :for="label">{{ label }}</label>
      <the-mask autocomplete="off"
                :name="label"
                :id="label"
                :placeholder="placeholder[type]"
                :mask="config[type]"
                :readonly="readonly"
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
      default: '',
    },
    invalid: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
      validator: (val) => ['cpf', 'cnpj', 'rg'].includes(val),
    },
    customClass: {
      type: String,
      default: 'col-md-6',
    },
  },
  name: 'InputIdentificador',
  data: () => ({
    identificador: '',
    config: {
      cpf: '###.###.###-##',
      cnpj: '##.###.###/####-##',
      rg: '',
    },
    placeholder: {
      cpf: 'ex: 000.000.000-00',
      cnpj: 'CNPJ',
      rg: 'RG',
    },
    errorMessage: {
      cpf: 'CPF',
      cnpj: 'CNPJ',
      rg: 'RG',
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
