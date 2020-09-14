<template>
  <RegisterWrapper>
    <form class="rounded shadow-md p-4">
      <div class="row">
        <InputMax v-model="customer.fullName" placeholder="Your Name"
                  message="Your name must be between 3 and 120 characters"
                  :invalid="false"
        />
        <div class="col-md-6">
          <div class="form-group">
            <label for="email">Your Email</label>
            <input name="email"
                   id="email"
                   type="email"
                   class="form-control"
                   placeholder="Your email"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Your Phone no.</label>
            <input name="number" id="number" type="number" class="form-control"
                   placeholder="Your phone no.">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Job Title</label>
            <input name="subject" id="subject"
                   class="form-control" placeholder="Title">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Types of jobs :</label>
            <select class="form-control custom-select" id="Sortbylist-Shop">
              <option>All Jobs</option>
              <option>Full Time</option>
              <option>Half Time</option>
              <option>Remote</option>
              <option>In Office</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group position-relative">
            <label>Description</label>
            <textarea name="comments" id="comments" rows="4" class="form-control"
                      placeholder="Describe the job"/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group position-relative">
            <label>Upload Your Profile Picture</label>
            <input type="file" class="form-control-file" id="fileupload">
          </div>
        </div><!--end col-->
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">
                I Accept <a href="#" class="text-primary">Terms
                And Condition</a></label>
            </div>
          </div>
        </div><!--end col-->
      </div><!--end row-->
      <div class="row">
        <div class="col-sm-12">
          <button type="submit" class="submitBnt btn btn-primary">Here We Go!</button>
        </div><!--end col-->
      </div><!--end row-->
    </form><!--end form-->
  </RegisterWrapper>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import RegisterWrapper from './RegisterWrapper.vue';
import InputMax from '../input/InputMax.vue';

export default {
  name: 'RegisterForm',
  components: {
    InputMax,
    RegisterWrapper,
  },
  mixins: [validationMixin],
  data: () => ({
    customer: {
      fullName: '',
      photoUrl: '',
      personIdentifier: '',
      isLegalPerson: true,
      bio: '',
      phoneNumber: '',
      isClient: true,
      landlineNumber: '',
      email: '',
      password: '',
      birthdate: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    },
  }),
  validations: {
    customer: {
      fullName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(120),
      },
    },
  },
};
</script>

<style scoped>

</style>
