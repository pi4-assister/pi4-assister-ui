<template>
  <div class="Password">
    <div
      v-if="!strengthMeterOnly"
      class="Password__group"
    >
      <input
        v-bind="$attrs"
        name="password"
        :placeholder="confirmar ? 'Confirmar Senha': 'Senha'"
        type="password"
        :class="[defaultClass, $attrs.disabled ? disabledClass : '', invalid ? 'is-invalid' : '']"
        :value="value"
        @input="evt => emitValue('input', evt.target.value)"
        @blur="evt => emitValue('blur', evt.target.value)"
        @focus="evt => emitValue('focus', evt.target.value)"
        autocomplete="new-password"
      >
    </div>
    <div v-if="confirmar && invalid" class="d-flex">
      <div class="form-text invalid-feedback ml-auto text-right">
        {{ message }}
      </div>
    </div>
    <div v-if="showStrengthMeter" :class="[strengthMeterClass]">
      <div :class="[strengthMeterFillClass]" :data-score="passwordStrength"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSenha',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
    },
    secureLength: {
      type: Number,
      default: 7,
    },
    badge: {
      type: Boolean,
      default: false,
    },
    toggle: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    showStrengthMeter: {
      type: Boolean,
      default: true,
    },
    strengthMeterOnly: {
      type: Boolean,
      default: false,
    },
    defaultClass: {
      type: String,
      default: 'form-control',
    },
    disabledClass: {
      type: String,
      default: 'Password__field--disabled',
    },
    strengthMeterClass: {
      type: String,
      default: 'Password__strength-meter',
    },
    strengthMeterFillClass: {
      type: String,
      default: 'Password__strength-meter--fill',
    },
    invalid: {
      type: Boolean,
    },
    confirmar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      password: null,
    };
  },

  methods: {
    emitValue(type, value) {
      this.$emit(type, value);
      this.password = value;
    },
    testPassword(password) {
      return /.{8,}/.test(password) * (
        +/[a-z]/.test(password)
        + /[A-Z]/.test(password)
        + /\d/.test(password)
        + /[^A-Za-z0-9]/.test(password)
      );
    },
  },
  computed: {
    passwordStrength() {
      return this.password ? this.testPassword(this.password) : null;
    },
    message() {
      const invalid = 'A Senha informada é inválida';
      const required = 'A Senha precisa ser fornecida.';
      const password = this.password ? this.password.length : 0;
      return password !== 0 ? invalid : required;
    },
  },
  watch: {
    value(newValue) {
      if (this.strengthMeterOnly) {
        this.emitValue('input', newValue);
      }
    },
    passwordStrength(score) {
      this.$emit('score', score);
    },
  },
};
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}

.Password {
  max-width: 400px;
  margin: 0 auto;
}

.Password__group {
  position: relative;
}

.Password__strength-meter {
  position: relative;
  height: 3px;
  background: #DDD;
  margin: 10px auto 20px;
  border-radius: 3px;
}

.Password__strength-meter:before, .Password__strength-meter:after {
  content: '';
  height: inherit;
  background: transparent;
  display: block;
  border-color: #FFF;
  border-style: solid;
  border-width: 0 5px 0 5px;
  position: absolute;
  width: 20%;
  z-index: 10;
}

.Password__strength-meter:before {
  left: 20%;
}

.Password__strength-meter:after {
  right: 20%;
}

.Password__strength-meter--fill {
  background: transparent;
  height: inherit;
  position: absolute;
  width: 0;
  border-radius: inherit;
  transition: width 0.5s ease-in-out, background 0.25s;
}

.Password__strength-meter--fill[data-score='0'] {
  background: darkred;
  width: 20%;
}

.Password__strength-meter--fill[data-score='1'] {
  background: orangered;
  width: 40%;
}

.Password__strength-meter--fill[data-score='2'] {
  background: orange;
  width: 60%;
}

.Password__strength-meter--fill[data-score='3'] {
  background: yellowgreen;
  width: 80%;
}

.Password__strength-meter--fill[data-score='4'] {
  background: green;
  width: 100%;
}

.Password__field {
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 13px;
  width: 100%;
}

.Password__field--disabled {
  background-color: #f6f6f6;
  border: 1px solid #f6f6f6;
}

</style>
