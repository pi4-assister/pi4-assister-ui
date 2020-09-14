<template>
  <!-- Footer Start -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
          <a
            href="#"
            class="logo-footer"
          >
            <img
              src="../../assets/images/index/logo-index.png"
              height="24"
              alt=""
            >
          </a>
          <p class="mt-4">
            Start working with Assister that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
        </div>
        <!--end col-->

        <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h4 class="text-light footer-head">
            Company
          </h4>
          <ul class="list-unstyled footer-list mt-4">
            <li>
              <a
                href="page-aboutus.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> About us</a>
            </li>
            <li>
              <a
                href="page-services.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Services</a>
            </li>
            <li>
              <a
                href="page-team.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Team</a>
            </li>
            <li>
              <a
                href="page-pricing.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Pricing</a>
            </li>
            <li>
              <a
                href="page-work-modern.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Project</a>
            </li>
            <li>
              <a
                href="page-jobs.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Careers</a>
            </li>
            <li>
              <a
                href="page-blog-grid.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Blog</a>
            </li>
            <li>
              <a
                href="auth-cover-login.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Login</a>
            </li>
          </ul>
        </div>
        <!--end col-->

        <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h4 class="text-light footer-head">
            Usefull Links
          </h4>
          <ul class="list-unstyled footer-list mt-4">
            <li>
              <a
                href="page-terms.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Terms of Services</a>
            </li>
            <li>
              <a
                href="page-privacy.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Privacy Policy</a>
            </li>
            <li>
              <a
                href="documentation.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Documentation</a>
            </li>
            <li>
              <a
                href="changelog.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Changelog</a>
            </li>
            <li>
              <a
                href="components.html"
                class="text-foot"
              ><i class="mdi mdi-chevron-right mr-1"/> Components</a>
            </li>
          </ul>
        </div>
        <!--end col-->

        <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <h4 class="text-light footer-head">
            Newsletter
          </h4>
          <p class="mt-4">
            Sign up and receive the latest tips via email.
          </p>
          <form>
            <div class="row">
              <div class="col-lg-12">
                <div class="foot-subscribe form-group position-relative">
                  <label>Write your email <span class="text-danger">*</span></label>
                  <mail-icon class="fea icon-sm icons" />
                  <input
                    id="emailsubscribe"
                    type="email"
                    name="email"
                    class="form-control pl-5 rounded"
                    placeholder="Your email : "
                    required
                  >
                </div>
              </div>
              <div class="col-lg-12">
                <input
                  id="submitsubscribe"
                  type="submit"
                  name="send"
                  class="btn btn-soft-primary btn-block"
                  value="Subscribe"
                >
              </div>
            </div>
          </form>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </footer>
  <!--end footer-->
</template>

<script>
import { MailIcon } from 'vue-feather-icons';

export default {
  name: 'LayoutFooter',
  components: { MailIcon },
};
</script>

<style scoped></style>
