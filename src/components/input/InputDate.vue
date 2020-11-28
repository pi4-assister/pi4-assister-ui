<template>
  <div :class="customClass">
    <div class="form-group">
      <label for="input-date">{{ label || placeholder }}</label>
      <input id="input-date" :value="value"
             :name="label"
             :class="['form-control', invalid ? 'is-invalid' : '']"
             :placeholder="placeholder"
             type="text"
             @input="$emit('input', $event.target.value)"
             :readonly="true"
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
import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

export default {
  name: 'InputDate',
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
      default: 'Data de Nascimento',
    },
    placeholder: {
      type: String,
      default: 'Data de Nascimento',
    },
    customClass: {
      type: String,
      default: 'col-md-6',
    },
    mode: {
      type: String,
      default: 'single',
    },
    minDate: {
      default: 'today',
    },
    maxDate: {
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pickedDate: '',
      config: {
        locale: Portuguese,
      },
    };
  },
  watch: {
    invalid() {
      const inputDate = document.querySelectorAll('input.form-control.form-control.input');
      if (this.invalid) {
        inputDate[inputDate.length - 1].classList.add('is-invalid');
      } else {
        inputDate[inputDate.length - 1].classList.remove('is-invalid');
      }
    },
  },
  mounted() {
    const inputDate = document.getElementById('input-date');
    if (!this.readonly) {
      flatpickr(inputDate, {
        locale: Portuguese,
        altInput: true,
        altFormat: 'd/m/Y',
        dateFormat: 'Y-m-d',
        minDate: this.minDate,
        maxDate: this.maxDate,
        mode: this.mode,
      });
    }
  },
};
</script>

<style scoped>

</style>
