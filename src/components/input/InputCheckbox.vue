<template>
  <div :class="customClass">
    <div class="form-group">
      <label>{{ label }}</label>
      <div class="form-check form-check-inline"
           v-for="check in list" :key="check['name']">
        <div class="form-group mb-0">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" :value="check"
                   :id="check['name']" v-model="checked">
            <label class="custom-control-label" :for="check['name']">{{ check[text] }}</label>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <small v-show="message && invalid" class="form-text invalid-feedback">
          {{ message }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputCheckbox',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    invalid: {
      type: Boolean,
    },
    message: {
      type: String,
    },
    label: {
      type: String,
      default: '',
      required: true,
    },
    id: {
      type: String,
      default: 'checkbox',
    },
    customClass: {
      type: String,
      default: 'col-md-6',
    },
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
    text: {
      type: String,
      default: 'label',
      required: true,
    },
  },
  data() {
    return {
      checked: [],
    };
  },
  methods: {},
  watch: {
    checked() {
      this.$emit('input', this.checked);
    },
  },
};
</script>

<style scoped>

</style>
