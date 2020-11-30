<template>
  <div :class="customClass">
    <a href="javascript:void(0)">
      <div :class="['card rounded shadow border-0', cardInfo[cardType]]">
        <div class="card-body">
          <img :src="cardImg[cardType]" height="60" class="text-right" alt="">
          <div class="mt-4">
            <h5 class="text-light">{{ creditCardNumber }}</h5>
            <div class="d-flex justify-content-between">
              <p class="h6 text-muted mb-0">{{ holderName }}</p>
              <h6 class="mb-0 text-muted">
                Exp: <span class="text-muted">{{ expirationDate }}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import PaymentVisa from '../../assets/images/payments/payment/visaa.png';
import PaymentMaster from '../../assets/images/payments/payment/master.png';

export default {
  name: 'CreditCard',
  props: {
    customClass: {
      type: String,
      default: 'col-md-6 mb-4',
    },
    holderName: {
      type: String,
      default: '',
      required: true,
    },
    holderNumber: {
      type: String,
      default: '',
      required: true,
    },
    expirationDate: {
      type: String,
      default: '',
      required: true,
    },
  },
  data: () => ({
    cardInfo: {
      VISA: 'bg-dark',
      MASTERCARD: 'bg-dark',
    },
    cardImg: {
      VISA: PaymentVisa,
      MASTERCARD: PaymentMaster,
    },
  }),
  computed: {
    creditCardNumber() {
      return this.holderNumber.replace(/(\d{4}(?!\s))/g, '$1 ') || '•••• •••• •••• ••••';
    },
    cardType() {
      const creditCard = this.holderNumber;
      return creditCard.split('')[0] === '4' ? 'VISA' : 'MASTERCARD';
    },
  },
};
</script>

<style scoped>

</style>
