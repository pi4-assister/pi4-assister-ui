<template>
  <div :class="customClass">
    <div v-if="!image" class="form-group">
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
    <div v-else class="form-group">
      <label>{{ label }}</label>
      <div class="row">
        <div class="col" v-for="check in list" :key="check['name']"
             role="button">
          <div :class="[cssCard, checked.indexOf(check) > -1 ? 'border border-success' : '']"
               @click="checkImage(check)">
            <div class="card-body">
              <div class="icon rounded-circle shadow-lg d-inline-block">
                <img :src="check['img']" class="avatar avatar-md-sm" :alt="check['label']">
              </div>
              <div class="content mt-3">
                <h6 class="mb-0">
                  <span class="title text-dark">{{ check['label'] }}</span>
                </h6>
              </div>
            </div>
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
import HealthSVG from '../../assets/images/insurance/health.svg';
import TermLife from '../../assets/images/insurance/term-life.svg';
import FamilyHealth from '../../assets/images/insurance/family-health.svg';

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
    image: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked: [],
      HealthSVG,
      TermLife,
      FamilyHealth,
      cssCard: 'card explore-feature border-0 rounded text-center bg-white',
    };
  },
  created() {
    this.checked = this.value;
  },
  methods: {
    checkImage(check) {
      const index = this.checked.indexOf(check);
      if (index > -1) {
        this.checked.splice(index, 1);
      } else {
        this.checked.push(check);
      }
    },
  },
  watch: {
    checked() {
      this.$emit('input', this.checked);
    },
  },
};
</script>

<style scoped>

</style>
