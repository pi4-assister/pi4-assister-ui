<template>
  <div class="p-0">
    <div class="faq-content">
      <div class="accordion">
        <div class="card border-0 rounded mb-2">
          <a data-toggle="collapse" :href="`#${accordion}`" class="faq position-relative"
             aria-expanded="true" :aria-controls="accordion">
            <div class="card-header border-0 bg-light p-3 pr-5">
              <h6 class="title mb-0"> {{ label }} </h6>
            </div>
          </a>
          <div :id="accordion" class="collapse show">
            <div class="card-body px-2 py-4">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    accordion: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
