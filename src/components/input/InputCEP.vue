<template>
  <div :class="customClass">
    <div class="form-group">
      <label>{{ label }}</label>
      <div class="input-group">
        <the-mask autocomplete="nope"
                  :placeholder="placeholder[type]"
                  :mask="config['cep']"
                  :class="{'form-control' : true, 'is-invalid': invalid, 'is-valid': false}"
                  v-model="identificador"/>
        <div class="input-group-append">
          <button class="btn btn-info submitBnt"
                  @click="$emit('click')"
                  type="button">Buscar</button>
        </div>
      </div>
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
      default: 'cep',
    },
    customClass: {
      type: String,
      default: 'col-md-6',
    },
  },
  name: 'InputCEP',
  data: () => ({
    identificador: '',
    config: {
      cep: '#####-###',
    },
    placeholder: {
      cep: 'ex: 00000-000',
      rg: 'RG',
    },
    errorMessage: {
      cep: 'CEP',
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
