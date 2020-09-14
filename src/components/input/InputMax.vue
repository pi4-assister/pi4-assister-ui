<template>
  <div :class="customClass">
    <div class="form-group">
      <label :for="id">{{ placeholder }}</label>
      <input :id="id" :value="value"
             :class="['form-control', invalid ? 'is-invalid' : '']"
             :placeholder="placeholder"
             :maxlength="maxlength"
             @input="$emit('input', $event.target.value)"
      />
      <div class="d-flex">
        <small v-show="message && invalid" class="form-text invalid-feedback">
          {{ message }}
        </small>
        <small class="form-text text-muted ml-auto">
          {{ length }}/{{ maxlength }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputMax',
  props: {
    value: {
      type: String,
      default: '',
    },
    invalid: {
      type: Boolean,
    },
    message: {
      type: String,
    },
    maxlength: {
      type: Number,
      default: 120,
    },
    placeholder: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: 'name',
    },
    customClass: {
      type: String,
      default: 'col-md-6',
    },
  },
  data() {
    return {
      length: 0,
    };
  },
  methods: {},
  watch: {
    value() {
      if (this.value == null) {
        this.length = 0;
      } else {
        this.length = this.value.length;
      }
    },
  },
};
</script>

<style scoped>

</style>
