<template>
  <div class="col-lg-8 col-12">
    <div class="border-bottom pb-4">
      <h5>{{ user.fullName }}</h5>
      <p class="text-muted mb-0">{{ user.bio }}</p>
    </div>
    <div class="border-bottom pb-4">
      <div class="row">
        <div class="col-md-12 mt-4">
          <h5>Informações Básicas:</h5>
          <div class="mt-4">
            <div class="media align-items-center">
              <div class="media-body">
                <h6 class="text-primary mb-0">Data de Nascimento:</h6>
                <a href="javascript:void(0)" class="text-muted">
                  {{ new Date(user.birthdate).toLocaleDateString() }}
                </a>
              </div>
            </div>
            <div class="media align-items-center mt-3">
              <div class="media-body">
                <h6 class="text-primary mb-0">Localização:</h6>
                <a href="javascript:void(0)" class="text-muted">
                  {{ `${user.city}, ${user.state}` }}
                </a>
              </div>
            </div>
            <div class="media align-items-center mt-3">
              <div class="media-body">
                <h6 class="text-primary mb-0">Telefone:</h6>
                <a href="javascript:void(0)" class="text-muted">
                  {{ user.landlineNumber }}
                </a>
              </div>
            </div>
            <div class="media align-items-center mt-3">
              <div class="media-body">
                <h6 class="text-primary mb-0">Celular:</h6>
                <a href="javascript:void(0)" class="text-muted">
                  {{ user.phoneNumber }}
                </a>
              </div>
            </div>
            <div class="media align-items-center mt-3">
              <div class="media-body">
                <h6 class="text-primary mb-0">CPF:</h6>
                <a href="javascript:void(0)" class="text-muted">
                  {{ `${user.city}, ${user.state}` }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBasic',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
