<template>
  <div :class="customClass">
    <div class="form-group">
      <label :for="label">{{ label || placeholder }}</label>
      <input v-if="!textarea" :id="label" :value="value"
             :autocomplete="autocomplete"
             :name="label"
             :class="['form-control', invalid ? 'is-invalid' : '']"
             :placeholder="placeholder"
             :maxlength="120"
             :type="type"
             @input="$emit('input', $event.target.value)"
             :readonly="readonly"
      />
      <textarea v-else :id="label" :value="value"
                :class="['form-control', invalid ? 'is-invalid' : '']"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                :name="label"
                :maxlength="120"
                :type="type"
                @input="$emit('input', $event.target.value)"
                :readonly="readonly"
      />
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
  name: 'InputDefault',
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
    label: {
      type: String,
      default: '',
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
    type: {
      type: String,
      default: 'text',
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    autocomplete() {
      return this.type === 'password' ? 'new-password' : 'off';
    },
  },
};
</script>

<style scoped>

</style>
