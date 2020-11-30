<template>
  <div :class="customClass">
    <div class="form-group">
      <label :for="label">{{ label }}</label>
      <select :id="label" v-if="type === 'expirationMonth'" class="form-control custom-select"
              @input="$emit('input', $event.target.value)">
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>
      <select :id="label" v-else class="form-control custom-select"
              @input="$emit('input', $event.target.value)">
        <option value="21">2021</option>
        <option value="22">2022</option>
        <option value="23">2023</option>
        <option value="24">2024</option>
        <option value="25">2025</option>
        <option value="26">2026</option>
        <option value="27">2027</option>
        <option value="28">2028</option>
        <option value="29">2029</option>
        <option value="30">2030</option>
        <option value="31">2031</option>
        <option value="32">2032</option>
        <option value="33">2033</option>
      </select>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'expirationMonth',
    },
    customClass: {
      type: String,
      default: 'col-md-6',
    },
  },
  name: 'InputExpiration',
  data: () => ({}),
};
</script>

<style scoped>

</style>
