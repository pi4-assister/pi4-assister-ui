<template>
  <div class="row pt-2 mb-4 pb-2 justify-content-center">
    <div class="col mt-4 pt-2" @click="$emit('input', 'CLIENT')" role="button">
      <div :class="classClient">
        <div class="icon text-center rounded-circle mr-3">
          <i class="mdi mdi-human-wheelchair text-primary"/>
        </div>
        <div class="media-body">
          <h4 class="title mb-0">Cadastrar Cliente</h4>
        </div>
      </div>
    </div>
    <div class="col mt-4 pt-2" @click="$emit('input', 'ASSISTER')" role="button">
      <div :class="classAssister">
        <div class="icon text-center rounded-circle mr-3">
          <i class="mdi mdi-human-wheelchair text-primary"/>
        </div>
        <div class="media-body">
          <h4 class="title mb-0">Cadastrar Assister</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientType',
  props: {
    value: {
      type: String,
      default: 'CLIENT',
    },
  },
  computed: {
    classClient() {
      return ['media key-feature align-items-center p-3 rounded-md shadow', this.value === 'CLIENT' ? 'border border-primary' : ''];
    },
    classAssister() {
      return ['media key-feature align-items-center p-3 rounded-md shadow', this.value === 'ASSISTER' ? 'border border-primary' : ''];
    },
  },
};
</script>

<style scoped>

</style>
