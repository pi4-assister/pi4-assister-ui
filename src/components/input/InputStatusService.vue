<template>
  <div :class="customClass">
    <div class="form-group">
      <label for="status-service">Situação do Serviço:</label>
      <select id="status-service" class="form-control custom-select"
              @input="$emit('input', $event.target.value)">
        <option value="">Todos</option>
        <option value="QUOTED">Pendente</option>
        <option value="IN_PROGRESS">Em Progresso</option>
        <option value="FINISHED">Finalizado</option>
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
    customClass: {
      type: String,
      default: 'col-md-6',
    },
  },
  name: 'InputStatusService',
  data: () => ({}),
};
</script>

<style scoped>

</style>
