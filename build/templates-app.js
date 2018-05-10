angular.module("templates-app", ["components/about/about.tpl.html", "components/change_password/change_password.tpl.html", "components/contact/contact.tpl.html", "components/dashboard/dashboard.tpl.html", "components/faq/faq.tpl.html", "components/forgot_password/forgot_password.tpl.html", "components/home/home.tpl.html", "components/legal/legal.tpl.html", "components/login/login.tpl.html", "components/products/products.tpl.html", "components/products/productsDetail.tpl.html", "components/profile/profileEdit.tpl.html", "components/profile/profileView.tpl.html", "components/register/register.tpl.html", "components/results/results.tpl.html", "components/verify_email/verify_email.tpl.html", "shared/footer/footer.tpl.html", "shared/header/header.tpl.html", "shared/side-navbar/side-navbar.tpl.html"]);

angular.module("components/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/about/about.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "  <div class=\"row\">\n" +
    "    <h1>This is page About</h1>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/change_password/change_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/change_password/change_password.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-8 col-sm-offset-2\">\n" +
    "            <h1>Change Password</h1>\n" +
    "            <div class=\"panel\" ng-controller=\"ChangePasswordCtrl\">\n" +
    "                <div ng-show=\"!success\">\n" +
    "                <form name=\"form\" novalidate ng-submit=\"changeSubmit(userForm)\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>New Password</label>\n" +
    "                    <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"userForm.password\" ng-minlength=\"5\" required>\n" +
    "                    <div class=\"error\" ng-show=\"form.password.$dirty\">\n" +
    "                        <div class=\"error\" ng-show=\"form.password.$error.required\">This field is required</div>\n" +
    "                        <div class=\"error\" ng-show=\"form.password.$error.minlength && !form.password.pristine\">Password must be at least 5 characters long</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>Confirm Password</label>\n" +
    "                    <input type=\"password\" name=\"confirm_password\" class=\"form-control\" ng-model=\"userForm.confirm_password\" password-verify match-target=\"userForm.password\" required>\n" +
    "                    <div class=\"error\" ng-show=\"form.confirm_password.$error.match && form.confirm_password.$dirty\">Passwords do not match.</div>\n" +
    "                </div>\n" +
    "                    <button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"form.$invalid\">Submit</button>\n" +
    "                </form>\n" +
    "                </div>\n" +
    "                <div class=\"alert alert-danger\" ng-repeat=\"error in errors.password\">{{::error}}</div>\n" +
    "                <div class=\"alert alert-danger\" ng-if=\"error\">{{::error.detail}}</div>\n" +
    "                <div class=\"alert alert-success\" ng-if=\"success\">Great! Your password was changed successfully.</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/contact/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/contact/contact.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>Contacts</h1>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/dashboard/dashboard.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>Status: {{ status.seq_status }}</h1>\n" +
    "        <ul>\n" +
    "            <li ng-repeat=\"product in status.product_status\">\n" +
    "                <p>product Id: {{product.product_id}}</p>\n" +
    "                <p ng-if=\"product.product_consent_agreed_date\"> Product consent agreed date{{ product.product_consent_agreed_date }}</p>\n" +
    "                <p>Product status {{ product.product_status}}</p>\n" +
    "                <p>Submitted date {{ product.ldt_submitted_date }}</p>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/faq/faq.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/faq/faq.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>Frequently asked questions.</h1>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/forgot_password/forgot_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/forgot_password/forgot_password.tpl.html",
    "<section class=\"fp-section\">\n" +
    "    <div class=\"fp-head\">\n" +
    "        <div class=\"head-fp__background\">\n" +
    "            <div class=\"main-background main-background--grey-second\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <div class=\"header-logo header-logo--small animation\">\n" +
    "                        <div class=\"rect rect-top\">\n" +
    "                            <div class=\"rect-txt\">\n" +
    "                                <span class=\"rect-top__txt\"> Platform layer</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"rect rect-middle-first\">\n" +
    "                            <div class=\"rect-txt\">\n" +
    "                                <span class=\"rect-middle-first__txt\"> Backend layer</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"rect rect-middle-second\">\n" +
    "                            <div class=\"rect-txt\">\n" +
    "                                <span class=\"rect-middle-second__txt\"> Operation layer</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"rect rect-bottom\">\n" +
    "                            <div class=\"rect-txt\">\n" +
    "                                <span class=\"rect-bottom__txt\"> Helath service layer</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <h2 class=\"header-logo-txt header-logo-txt-large\">ixlayer</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <div class=\"fp-section__title-txt\">\n" +
    "                        <h1 class=\"title\">Forgot Password</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-8 col-sm-offset-2\">\n" +
    "                    <div class=\"panel panel--fp\" ng-controller=\"ForgotPasswordCtrl\">\n" +
    "                        <div ng-show=\"!success\">\n" +
    "                            <form name=\"form\" novalidate ng-submit=\"forgotSubmit(userForm)\">\n" +
    "                                <p class=\"about-title-txt txt-black-light\">Please enter your email address below:</p>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label class=\"form-label\">Email</label>\n" +
    "                                    <input type=\"text\" name=\"email\" id=\"email\"  class=\"form-control\"  ng-model=\"forgotForm.email\" required>\n" +
    "                                    <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                                        <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                                        <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"fp-form-button\">\n" +
    "                                    <div class=\"fp-form-button__wrap\">\n" +
    "                                        <button class=\"bt blue not-margin\" type=\"submit\" ng-disabled=\"form.$invalid\">Submit</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "                        <div class=\"alert alert-danger\" ng-repeat=\"error in errors.password\">{{::error}}</div>\n" +
    "                        <div class=\"alert alert-danger\" ng-if=\"error\">{{::error.detail}}</div>\n" +
    "                        <div class=\"alert alert-success\" ng-if=\"success\">Great! Please check your email and click on the link to continue</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("components/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/home/home.tpl.html",
    "<div class=\"container-fluid container-fluid--section\">\n" +
    "  <div class=\"home-head\">\n" +
    "    <div class=\"container-lg\">\n" +
    "      <div class=\"home-head__wrap\">\n" +
    "        <div class=\"head-title__wrap\">\n" +
    "          <div class=\"head-title anim-content-transition\">\n" +
    "            <h1>Finding answers for Alzheimer’s disease begins with knowing your genetic risk!\n" +
    "            </h1>\n" +
    "            <h3 class=\"txt-padding-top\">Get an ApoE genetic test today</h3>\n" +
    "          </div>\n" +
    "          <div class=\"head-button__wrap anim-content-transition\">\n" +
    "            <button class=\"button-border-rounded\">Order test</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"home-head-image__wrap anim-content-transition\">\n" +
    "          <img class=\"head-image\" src=\"../../../assets/images/home-page/helix-front-right.png\" alt=\"\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"home-arrow-down__wrap anim-content-transition\">\n" +
    "      <a  ng-include=\"'./assets/images/svg/arrow-down.svg'\"  class=\"arrow-down\"></a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"home-head-bottom\">\n" +
    "    <div class=\"container-lg\">\n" +
    "      <div class=\"home-head-bottom__wrap\">\n" +
    "        <div class=\"home-head-bottom__title anim-content-transition\">\n" +
    "          <h3 class=\"txt-fonts-circular-book\">Get an ApoE genetic test today</h3>\n" +
    "        </div>\n" +
    "        <div class=\"home-head-bottom__button anim-content-transition\">\n" +
    "          <div class=\"button__purchase\">\n" +
    "            <a ui-sref=\"\" class=\"bt-round bt-round--blue-dark\"><span class=\"bt-content\">Purchase</span></a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section second-->\n" +
    "  <div class=\"section-box-shadow home-section-first\">\n" +
    "    <div class=\"container-lg\">\n" +
    "      <div class=\"home-section-first__wrap\">\n" +
    "        <div class=\"home-section-first__title\">\n" +
    "          <h1 class=\"txt-blue\">Information about the product</h1>\n" +
    "        </div>\n" +
    "        <div class=\"home-section-first__title-about\">\n" +
    "          <div class=\"sub-header-txt txt-black\">Whether you are 35 or 75, your Alzheimer’s genetics are the same.\n" +
    "            <br> It is never too early or too late to learn your genetic risk for late-onset Alzheimer’s disease!</div>\n" +
    "        </div>\n" +
    "        <div class=\"home-section-first__content\">\n" +
    "          <div class=\"home-section-first-content__first\">\n" +
    "            <div class=\"home-section-first-content__txt-content\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Why should I take this test?</h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  Changes begin happening in the brain about two decades before the first symptoms of memory decline. Your lifestyle, environment, and other medical conditions, along with your genetics and age influence your cognitive health. Don’t wait until your memory begins to fade. Find out your genetic risk for late-onset Alzheimer’s disease early, so you have the time to consider your options and make lifestyle changes that feel right for you. For individuals at high risk for Alzheimer’s disease, early action can make a difference.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"home-section-first-content__image\">\n" +
    "              <div class=\"img-bgc-wrap__rounded img-bgc-wrap__rounded--float-right\">\n" +
    "                <ng-include class=\"svg-inner-rounded-big\" src=\"'./assets/images/home-page/img-test-tubes.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"home-section-first-content__second\">\n" +
    "            <div class=\"home-section-first-content__txt-content\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">What will the test tell me</h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  Your ApoE test results will explain which combination of the ApoE alleles you have, and what the associated risk of Alzheimer’s disease development is based on your ApoE alleles.\n" +
    "                  <div class=\"txt--indent\">\n" +
    "                    The test will also tell you how your lifetime risk for developing Alzheimer’s disease changes as you age.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"home-section-first-content__image\">\n" +
    "              <div class=\"img-bgc-wrap__rounded bgc-blue\">\n" +
    "                <ng-include class=\"svg-inner-rounded-big\" src=\"'./assets/images/home-page/img-notebook.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"section-box-shadow home-section-second\">\n" +
    "    <div class=\"home-section-second__head-img\">\n" +
    "      <img class=\"img\" src=\"./assets/images/home-page/img-section-second.png\" alt=\"\">\n" +
    "    </div>\n" +
    "    <div class=\"home-section-second__wrap\">\n" +
    "      <div class=\"container-lg\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"home-section-second__test-info\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Test info</h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  From start to finish, you are never alone in the process. Like other genetic testing companies, we offer an easy at home test. However, our genetic test is paired with the oversight of physician review and support of genetic counseling. We make sure the test is a good fit for you, and that you understand the test you are ordering and what your results reveal.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"home-section-second__physician\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Physician approved</h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  A physician will review your medical history and determine if the Alzheimer’s ApoE genetic test is right for you.  If they need any additional information, they will reach out to you directly.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"home-section-second__fast-results\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Fast results</h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  We offer private pay when ordering your test, giving you greater control over your healthcare. Insurance companies have yet to catch up with advancements in genetic health, and we do not want to be limited by what your insurance will cover.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"home-section-second__genes\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  Your Genes. Your Privacy.\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  Once your results are ready, an electronic copy of your report will be delivered on our secure platform. A printable copy of your results will also be available. It is up to you whom you share your test results with.  A genetic counselor is available at no additional cost if you want to ask questions about your results.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"home-section-second__title-blue\">\n" +
    "        <div class=\"title-blue__inner\">\n" +
    "          <h1 class=\"txt-blue-dark\">From the privacy of your own home.  Simple saliva test.</h1>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"container-lg\">\n" +
    "        <div class=\"row row-padding-top\">\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"home-section-second__physician-review\">\n" +
    "              <div class=\"img-bgc-wrap-middle__rounded\">\n" +
    "                <ng-include class=\"svg-inner-rounded-middle\" src=\"'./assets/images/home-page/img-flask.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  Physician review\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  A physician will review your medical history and determine if the Alzheimer’s ApoE genetic test is right for you.  If they need any additional information, they will reach out to you.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"home-section-second__spit\">\n" +
    "              <div class=\"img-bgc-wrap-middle__rounded bgc-blue\">\n" +
    "                <ng-include class=\"svg-inner-rounded-middle\" src=\"'./assets/images/home-page/img-test-tubes.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h3 class=\"txt-blue-dark txt-center\">\n" +
    "                  Spit\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <div class=\"txt txt-black txt-center\">\n" +
    "                  Once your test is approved, you will receive your testing kit in the mail. Collect your saliva sample and mail it back in the prepaid envelope.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row row-padding-top\">\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"home-section-second__results\">\n" +
    "              <div class=\"img-bgc-wrap-middle__rounded bgc-yellow\">\n" +
    "                <ng-include class=\"svg-inner-rounded-middle\" src=\"'./assets/images/home-page/img-test-tubes.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  Results\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  Obtain your results privately and securely online. We’ll help you schedule your free genetic counseling session if you would like to review your results with a genetic counselor. You can also print a copy of your results if you want to share them with family or your doctor.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"home-section-second__take-action\">\n" +
    "              <div class=\"img-bgc-wrap-middle__rounded\">\n" +
    "                <ng-include class=\"svg-inner-rounded-middle\" src=\"'./assets/images/home-page/img-flask.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  Take action\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  Get started reducing your risk for Alzheimer’s disease and improving your cognitive health by understanding your genetic risk.\n" +
    "                  <div class=\"txt--indent\">\n" +
    "                    The Alzheimer’s ApoE genetic test assesses the most common gene associated with genetic risk for late-onset (occurring after age 65) Alzheimer’s disease.  This test does not evaluate the rare “familial” Alzheimer’s disease mutations in PS1, PS2 or APP, which are associated with autosomal dominant early-onset Alzheimer’s disease, a rare subtype of the disease.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"home-section-second__bottom\">\n" +
    "        <div class=\"container-lg\">\n" +
    "          <div class=\"home-section-second-bottom__wrap\">\n" +
    "            <div class=\"home-section-second-bottom__img\">\n" +
    "              <div class=\"img-bgc-wrap-middle__rounded\">\n" +
    "                <ng-include class=\"svg-inner-rounded-middle\" src=\"'./assets/images/home-page/img-flask.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"home-section-second-bottom__content\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h1 class=\"txt-blue-dark\">Science</h1>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt\">\n" +
    "                  The Alzheimer’s ApoE test is a single gene test that looks at your ApoE-related genetic risk for Alzheimer’s disease. In addition to genetics, your Alzheimer’s disease risk is also influenced by your  other medical conditions, age, gender, and environmental and lifestyle factors.\n" +
    "                  <div class=\"txt--indent\">\n" +
    "                    ApoE comes in three forms: ApoE-e2, ApoE-e3, and ApoE-e4. Our Alzheimer’s ApoE genetic test combines your ApoE - related genetics with your age to help assess your Alzheimer’s disease risk. Other factors such as gender, medical health and lifestyle habits also influence your Alzheimer’s disease risk. We do not take these factors into your genetics risk.  Identifying your overall risk can help you decide how aggressively you want to address your cognitive health.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"button__wrap\">\n" +
    "                <a ui-sref=\"\" class=\"bt-round bt-round--blue-dark\"><span class=\"bt-content\">Learn more</span></a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section third-->\n" +
    "  <div class=\"home-section-third section-box-shadow\">\n" +
    "    <div class=\"title__wrap txt-center\">\n" +
    "      <h1 class=\"txt-blue-dark\">What people say about us</h1>\n" +
    "    </div>\n" +
    "    <div class=\"sub-header-txt__wrap txt-center\">\n" +
    "      <div class=\"sub-header-txt txt-black\">\n" +
    "        ApoE is the most important piece of the puzzle.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"home-section-third__boxes\">\n" +
    "      <div class=\"boxes__wrap\">\n" +
    "        <div class=\"box box-orange\">\n" +
    "          <div class=\"box-title__wrap\">\n" +
    "            <h3 class=\"txt-blue-dark\">Tracy Smith</h3>\n" +
    "          </div>\n" +
    "          <div class=\"box-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              ApoE testing must be approved by your physician or other qualified health care provider. If you don't have a health care provider AFFIRMATIV diagnostics.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-data__wrap\">\n" +
    "            <div class=\"data\">2018.01.12</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"box box-blue-dark\">\n" +
    "          <div class=\"box-title__wrap\">\n" +
    "            <h3 class=\"txt-blue-dark\">Daniel Trevor</h3>\n" +
    "          </div>\n" +
    "          <div class=\"box-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              ApoE testing must be approved by your physician or other qualified health care provider. If you don't have a health care provider AFFIRMATIV diagnostics.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-data__wrap\">\n" +
    "            <div class=\"data\">2018.01.12</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"box box-blue\">\n" +
    "          <div class=\"box-title__wrap\">\n" +
    "            <h3 class=\"txt-blue-dark\">Gloria Sanchez</h3>\n" +
    "          </div>\n" +
    "          <div class=\"box-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              ApoE testing must be approved by your physician or other qualified health care provider. If you don't have a health care provider AFFIRMATIV diagnostics.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-data__wrap\">\n" +
    "            <div class=\"data\">2018.01.12</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section fourth-->\n" +
    "  <div class=\"home-section-fourth section-box-shadow\">\n" +
    "    <div class=\"home-section-fourth__head\">\n" +
    "      <div class=\"home-section-fourth-head__title\">\n" +
    "        <h3 class=\"txt-blue txt-center\">Frequently asked questions</h3>\n" +
    "        <h1 class=\"txt-blue txt-center\">We care about you</h1>\n" +
    "        <div class=\"sub-header-txt__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-center\">\n" +
    "            Our customer support team is available\n" +
    "            by email or chat, and is happy to answer your\n" +
    "            questions about your test kit, results, and more.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"home-section-fourth__content\">\n" +
    "      <div class=\"container-lg\">\n" +
    "        <div uib-accordion close-others=\"false\">\n" +
    "          <div uib-accordion-group class=\"home-section-fourth-content__row\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">You’re not alone</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                From the physician review of your order, to the genetics counselors available to answer questions about your test results, ADx Healthcare will support you through the process.\n" +
    "                <div class=\"txt--indent\">\n" +
    "                  For all the steps in between, our customer support team is available to discuss your questions about the science behind ApoE,\n" +
    "                  ordering a test, completing your kit, or interpreting your results.\n" +
    "                </div>\n" +
    "                <div class=\"txt--indent\">\n" +
    "                  You don’t need to navigate this alone. We are here to support you through each step.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"home-section-fourth-content__row\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">Genetic counseling</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                You will receive your test results in a clear, electronic report. However, if you have additional questions about what these results mean to you or your family, we have Genetics Counselors available to discuss your results with you, for no additional charge. Also, we encourage you to share your report with your health care provider and review with them any additional questions or concerns you may have.\n" +
    "              \n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"home-section-fourth-content__row\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">Power of emotions</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                Genetics is only one part of your risk for developing Alzheimer’s disease. For many people, it can be hard to be motivated to exercise.  For others, nutrition is a struggle with busy work and family schedules.  For yet others, sleep is often viewed as an inconvenience and not given much priority. Finally, stress management is an issue for many, as approximately 55% of Americans reported not even taking all their paid vacation days. (source: http://www.projecttimeoff.com/research/state-american-vacation-2016).  Knowing that you have a high genetic risk for Alzheimer’s disease is unsettling, but it can help empower you to take measured action to live a cognitively healthy life in order to best protect your future self.\n" +
    "                <div class=\"txt--indent\">\n" +
    "                  Having the ApoE-e4 variant  (high genetic risk for Alzheimer’s disease) does not guarantee you will develop late-onset Alzheimer’s disease.  Learning your genetic risk can help you take measured steps towards improving your cognitive health, so you can reduce your risk for or delay the onset of Alzheimer’s disease.  Sometimes making lifestyle changes can be hard, but having a reason for why you are eating healthier, reducing your stress, and making fitness and sleep a priority can be motivating.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"home-section-fourth-content__row\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">Lifestyle changes</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                Sleep, stress, nutrition, fitness, social engagement, ongoing brain training (music, games, reading, crafts, etc.), and environmental toxins each can impact your cognitive health.  Living an overall healthier life may also help you reduce your risk for Alzheimer’s disease.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"home-section-fourth-content__row\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">Connecting with community</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                We encourage you to share your results with your family and healthcare provider.  The more support you have for implementing brain healthy lifestyle behaviors, the more likely you are to be successful at turning them into lifelong habits.\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Community</a>\n" +
    "                <div class=\"txt--indent\">\n" +
    "                  <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Facebook</a>\n" +
    "                  <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Twitter</a>\n" +
    "                  <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Blog</a>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>\n" +
    "");
}]);

angular.module("components/legal/legal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/legal/legal.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>This is page Legal</h1>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/login/login.tpl.html",
    "<section class=\"login-page\">\n" +
    "  <div class=\"head-sign\">\n" +
    "    <div class=\"login-page__image-bgc\"></div>\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"login-form anim-content-transition\">\n" +
    "          <div class=\"panel panel--login\">\n" +
    "            <div class=\"panel__title\">\n" +
    "              <h2 class=\"txt-middle not-margin\">Sign in to Affirmativ</h2>\n" +
    "            </div>\n" +
    "            <form class=\"form--login\" name=\"form\" novalidate ng-submit=\"loginUser(userForm)\">\n" +
    "              <div class=\"form-input\">\n" +
    "                <div class=\"form-input__login-wrap\">\n" +
    "                  <div class=\"form-group form-group--col\">\n" +
    "                    <input placeholder=\"Email address\" type=\"email\" name=\"email\" class=\"form-control\" required ng-model=\"userForm.email\">\n" +
    "                    <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                      <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                      <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"form-group form-group--col\">\n" +
    "                    <input placeholder=\"Password\" type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"userForm.password\" required>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"login-button__wrap\">\n" +
    "                <button class=\"bt-round bt-round--blue\" type=\"submit\" ng-disabled=\"form.$invalid\" test-hook=\"login-button\"><span class=\"bt-content\">Sign in</span></button>\n" +
    "              </div>\n" +
    "              <div class=\"login-link\">\n" +
    "                <div class=\"login-link__inner\">\n" +
    "                  <a href ui-sref=\"register\" class=\"txt-link txt-bold login-link--register\">\n" +
    "                    I need to create a Affirmativ account\n" +
    "                  </a>\n" +
    "                </div>\n" +
    "                <div class=\"login-link__inner\">\n" +
    "                  <a href ui-sref=\"forgot_password\" class=\"txt-link\">\n" +
    "                    Forgot your password ?\n" +
    "                  </a>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "            <br>\n" +
    "            <div class=\"alert alert-danger\" ng-repeat=\"error in errors.password\">{{::error}}</div>\n" +
    "            <div class=\"alert alert-danger\" ng-repeat=\"error in errors.non_field_errors\">{{::error}}</div>\n" +
    "            <div class=\"alert alert-danger\" ng-if=\"error\">{{::error.detail}}</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>");
}]);

angular.module("components/products/products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/products.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div ng-repeat=\"product in products\">\n" +
    "            <div>{{ product.name }}</div>\n" +
    "            <div>{{ product.description }}</div>\n" +
    "            <div>{{ product.price }}</div>\n" +
    "            <a class=\"btn btn-primary\" ui-sref=\"productDetail({ productId: product.id })\">Detail {{product.id}}</a>\n" +
    "            <hr>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/products/productsDetail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/productsDetail.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "            <div ng-show=\"!contentEmpty\">\n" +
    "                <img ng-src=\"{{metadata.product_image}}\">\n" +
    "                <p>{{metadata.product_summary}}</p>\n" +
    "            </div>\n" +
    "            <p>Product ID {{product.id}}</p>\n" +
    "            <p>Product Name {{ product.name}}</p>\n" +
    "            <p>Product Description {{ product.description}}</p>\n" +
    "            <p>Price {{ product.price}}</p>\n" +
    "            <button ng-if=\"product.product_consent_needed\"  ui-sref=\"results({id: product.id})\" class=\"btn btn-default\">Show Status</button>\n" +
    "            &nbsp;&nbsp;\n" +
    "            <a ui-sref=\"products\" class=\"btn btn-primary\">Back to Products</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div ui-view></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/profile/profileEdit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/profile/profileEdit.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>Edit Profile</h1>\n" +
    "        <form name=\"form\"  ng-submit=\"submitForm(profile)\" novalidate class=\"col-sm-6\">\n" +
    "            <div ng-show=\"!complete\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>Firstname</label>\n" +
    "                    <input type=\"text\" name=\"first_name\" class=\"form-control\" ng-model=\"profile.user.first_name\"  ng-minlength=\"3\" required>\n" +
    "                    <p ng-show=\"form.first_name.$error.minlength && !form.first_name.pristine\" class=\"error\">You firstname is too short</p>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>Lastname</label>\n" +
    "                    <input type=\"text\" name=\"last_name\" class=\"form-control\" ng-model=\"profile.user.last_name\"  ng-minlength=\"3\" required>\n" +
    "                    <p ng-show=\"form.last_name.$error.minlength && !form.last_name.pristine\" class=\"error\">You lastname is too short</p>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>Email</label>\n" +
    "                    <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"profile.user.email\" required>\n" +
    "                    <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                        <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                        <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"gender\">Gender</label>\n" +
    "                    <div>\n" +
    "                        <select class=\"form-control\" name=\"gender\" id=\"gender\" ng-model=\"profile.gender\" required title=\"Gender\">\n" +
    "                            <option value=\"\" selected>Select Gender</option>\n" +
    "                            <option value=\"male\">Male</option>\n" +
    "                            <option value=\"female\">Female</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>Date of Birth</label>\n" +
    "                    <input type=\"date_of_birth\" name=\"date_of_birth\" class=\"form-control\" ng-model=\"profile.date_of_birth\" placeholder=\"YYYY-MM-DD\" required>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>Phone</label>\n" +
    "                    <input type=\"phone\" name=\"phone\" class=\"form-control\" ng-model=\"profile.phone\">\n" +
    "                </div>\n" +
    "                <button test-hook=\"update-profile\" type=\"submit\" class=\"btn btn-primary\">Submit</button>&nbsp;&nbsp;\n" +
    "                <button class=\"btn btn-primary\" ui-sref=\"profile\">Cancel</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/profile/profileView.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/profile/profileView.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <p>First Name: {{profile.user.first_name}}</p>\n" +
    "        <p>Last Name: {{ profile.user.last_name }}</p>\n" +
    "        <p>Email: {{ profile.user.email }}</p>\n" +
    "        <p>Gender: {{ profile.gender }}</p>\n" +
    "        <p>Date of Birth: {{ profile.date_of_birth }}</p>\n" +
    "        <p>Phone: {{ profile.phone }}</p>\n" +
    "        <button class=\"btn btn-primary\" ui-sref=\"profileEdit\">Edit</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/register/register.tpl.html",
    "<div class=\"register-page\">\n" +
    "    <div class=\"register-page__image-bgc\"></div>\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"register-form__wrap anim-content-transition\">\n" +
    "                <div id=\"todoPanel\" class=\"panel panel--register\">\n" +
    "                    <div class=\"panel__title\">\n" +
    "                        <h1 class=\"txt-middle\">Create account for Affirmativ</h1>\n" +
    "                    </div>\n" +
    "                  <form name=\"form\"  ng-submit=\"submitForm(userForm)\" novalidate>\n" +
    "                    <div ng-show=\"!complete\">\n" +
    "                      <div class=\"form-input\">\n" +
    "                        <div class=\"form-input__register-wrap\">\n" +
    "                          <div class=\"form-group form-group--col-2\">\n" +
    "                            <input placeholder=\"Email address\" type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"userForm.email\" required>\n" +
    "                            <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                              <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                              <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <div class=\"form-group form-group--col-2\">\n" +
    "                            <input placeholder=\"First name\" type=\"text\" name=\"first_name\" class=\"form-control\" ng-model=\"userForm.first_name\"  ng-minlength=\"3\" required>\n" +
    "                            <p ng-show=\"form.first_name.$error.minlength && !form.first_name.pristine\" class=\"error\">You firstname is too short</p>\n" +
    "                          </div>\n" +
    "                          <div class=\"form-group form-group--col-2\">\n" +
    "                            <input placeholder=\"Password\" type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"userForm.password\" ng-minlength=\"5\" required>\n" +
    "                            <div class=\"error\" ng-show=\"form.password.$dirty\">\n" +
    "                              <div class=\"error\" ng-show=\"form.password.$error.required\">This field is required</div>\n" +
    "                              <div class=\"error\" ng-show=\"form.password.$error.minlength && !form.password.pristine\">Password must be at least 5 characters long</div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                          <div class=\"form-group form-group--col-2\">\n" +
    "                            <input placeholder=\"Last name\" type=\"text\" name=\"last_name\" class=\"form-control\" ng-model=\"userForm.last_name\"  ng-minlength=\"3\" required>\n" +
    "                            <p ng-show=\"form.last_name.$error.minlength && !form.last_name.pristine\" class=\"error\">You lastname is too short</p>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"register-checkbox__wrap\">\n" +
    "                        <div class=\"checkbox m-b-md m-t-none\" ng-show=\"!complete\">\n" +
    "                          <input class=\"checkbox-input\" type=\"checkbox\" id=\"agree\" ng-model=\"userForm.terms\" required>\n" +
    "                          <label for=\"agree\" class=\"checkbox-label\"></label>\n" +
    "                          Agree to the\n" +
    "                          <a class=\"txt-link txt-bold\" href=\"http://www.ixlayer.com/terms/\" target=\"_blank\">Terms and Conditions</a>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"register-button__wrap\">\n" +
    "                        <button class=\"bt-round bt-round--blue\" test-hook=\"submit-register\" type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"form.$invalid\"><span class=\"bt-content\">Submit</span></button>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"alert alert-danger\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "                    <div ng-if=\"complete == true\">\n" +
    "                      <div class=\"alert alert-success\">Great!  You've just registered.  You should receive an email shortly with instructions on how to activate your account.</div>\n" +
    "                    </div>\n" +
    "                  </form>\n" +
    "                  <div class=\"register-link\">\n" +
    "                    <div class=\"register-link__inner\">\n" +
    "                      <a href ui-sref=\"verify_email\" class=\"txt-link txt-bold\">\n" +
    "                        Verify Email\n" +
    "                      </a>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"popup\" ng-if=\"showPopup\" test-hook=\"tour-start-popover\">\n" +
    "            <div class=\"popup-content\">\n" +
    "               <div class=\"popup-content__wrap\">\n" +
    "                 <div class=\"popup-content__image-logo\" ng-class=\"showPopup = 'popup-content__image-logo--animation'\">\n" +
    "                   <div class=\"popup-content__image\">\n" +
    "                     <div class=\"image-rounded\" style=\"background-image: url('../../assets/images/aniston_user.jpg')\"></div>\n" +
    "                   </div>\n" +
    "                   <div class=\"popup-content__logo\">\n" +
    "                     <div class=\"logo-affirmativ-large\">\n" +
    "                       <span class=\"logo-affirmativ-large-cross\"></span>\n" +
    "                     </div>\n" +
    "                   </div>\n" +
    "                 </div>\n" +
    "                 <div class=\"popup-content__title-txt\">\n" +
    "                   <div class=\"popup-content__title\">\n" +
    "                     <h2 class=\"txt-bold\">User consent</h2>\n" +
    "                   </div>\n" +
    "                   <div class=\"popup-content__about-title\">\n" +
    "                     <h3 class=\"txt-middle  txt-uppercase\">Client for Affirmativ</h3>\n" +
    "                   </div>\n" +
    "                   <div class=\"popup-content__about-txt\">\n" +
    "                     <p class=\"txt txt-middle\">Hi \"User Name\", Affirmativ is requesting access to your \"App\" account</p>\n" +
    "                   </div>\n" +
    "                 </div>\n" +
    "                 <div class=\"popup-content__txt-with-logo\">\n" +
    "                   <div class=\"txt-with-logo\">\n" +
    "                     <div class=\"txt-with-logo__wrap\">\n" +
    "                       <span class=\"txt-with-logo__logo\"><i class=\"fa fa-user fa--logo-with-txt\"></i></span>\n" +
    "                       <p class=\"txt txt-inline-block\">Profile: access to your email profile</p>\n" +
    "                     </div>\n" +
    "                   </div>\n" +
    "                   <div class=\"txt-with-logo\">\n" +
    "                     <div class=\"txt-with-logo__wrap\">\n" +
    "                       <span class=\"txt-with-logo__logo\"><i class=\"fa fa-shopping-bag fa--logo-with-txt\"></i></span>\n" +
    "                       <p class=\"txt txt-inline-block\">Posts: read and write your posts</p>\n" +
    "                     </div>\n" +
    "                   </div>\n" +
    "                 </div>\n" +
    "                 <div class=\"popup-content__button\">\n" +
    "                   <button class=\"bt-round bt-round--blue\" class=\"btn btn-primary\" ng-click=\"signConsent()\"><span class=\"bt-content\">Sign in</span></button>\n" +
    "                 </div>\n" +
    "               </div>\n" +
    "            </div>\n" +
    "            <div class=\"popup-background\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("components/results/results.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/results.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "  <div class=\"row\">\n" +
    "    <h1>Results page:</h1>\n" +
    "    <div class=\"error\" ng-show=\"noProducts\">You have not purchased any products</div>\n" +
    "\n" +
    "    <div class=\"error\" ng-show=\"!noProducts && !consentAgreed\">You did not consent to viewing the results</div>\n" +
    "    <div ng-show=\"consentAgreed\">\n" +
    "      <div ng-repeat=\"result in results\">\n" +
    "        <p>Product id: {{result.id}}</p>\n" +
    "        <p>Product: {{result.product}}</p>\n" +
    "        <p>Insight score: {{result.result.insight_score}}</p>\n" +
    "        <p>Last update: {{result.last_updated}}</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"popup\" ng-if=\"!noProducts && needPopup && !consentAgreed\">\n" +
    "    <div class=\"popup-content\" ng-class=\"needPopup = 'popup-content-animation'\">\n" +
    "      <div class=\"popup-condition-txt scrollme\" ng-scrollbar is-bar-shown=\"barShown\">\n" +
    "        <p class=\"popup-condition-txt__inner\">\n" +
    "          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus impedit pariatur quis sit unde, veniam? Accusamus aut facilis in labore laboriosam necessitatibus nisi optio porro quasi, ratione voluptas voluptatem, voluptatum!</span><span>Architecto culpa, deleniti dicta dolorum earum labore odit recusandae rerum sit! A at dolorem eligendi itaque perspiciatis vel voluptate! A consequuntur debitis esse ex illo inventore libero porro sed voluptates.</span><span>Architecto assumenda consequatur cupiditate dolorem, exercitationem explicabo fugit in necessitatibus quo! A dicta dolorem eaque error ipsam ipsum magnam mollitia nam optio provident quam quos, reprehenderit sunt totam vitae voluptate.</span><span>Aliquam aut deleniti dicta dolorem error esse exercitationem, hic inventore ipsum minus pariatur perferendis provident quaerat qui sequi veniam voluptate. Accusamus, blanditiis cumque dicta molestiae quibusdam repellat similique sunt vero.</span><span>Ab deserunt dolorem eos eveniet fugit labore laudantium necessitatibus, praesentium quia quis quos, repudiandae, voluptates! Alias dolores molestias quaerat qui quibusdam? Aperiam, ipsum minus. Ab consequuntur eaque iusto nemo rem?</span><span>A amet atque beatae, eligendi hic in itaque nesciunt quas repudiandae tempore totam veniam voluptate. Adipisci alias aliquid at exercitationem ipsam magni maiores nesciunt, obcaecati officiis provident suscipit tenetur vitae.</span><span>At excepturi mollitia odio. Beatae dolor esse explicabo incidunt iusto libero minus! Accusantium distinctio hic inventore itaque necessitatibus quidem reprehenderit sapiente tempore temporibus voluptatibus. Commodi deleniti sed sunt! Amet, aperiam!</span><span>Accusamus delectus magnam totam. Deleniti eaque et facilis fuga, incidunt nam natus officia quia velit veritatis. Animi autem consequatur ea illo veniam voluptatem. Alias dolorum in necessitatibus pariatur possimus quibusdam.</span><span>Adipisci animi assumenda at corporis dicta, dolor doloremque eaque error et ex exercitationem id ipsa labore laboriosam laborum nisi non nulla numquam odit quisquam repudiandae similique sit soluta tenetur vero.</span><span>Alias, aut cumque debitis delectus impedit magni nulla obcaecati odit quaerat qui, quidem rem suscipit totam. A adipisci architecto distinctio, eos est in iste minima necessitatibus, obcaecati sapiente sequi, unde!</span>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <form class=\"form-popup\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"form-check\">\n" +
    "              <label class=\"i-checks\">\n" +
    "                <input type=\"checkbox\" ng-model=\"checked\" required> <span>I agree</span>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <button class=\"btn btn-primary\" type=\"button\" ng-click=\"agree(checked)\">OK</button>\n" +
    "            <button class=\"btn btn-warning\" type=\"button\" ng-click=\"noAgree()\">Cancel</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"popup-background\" ng-class=\"needPopup = 'popup-background-animation'\"></div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/verify_email/verify_email.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/verify_email/verify_email.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>Verify Email</h1>\n" +
    "        <div ng-show=\"complete\">Great! You email address has been verified</div>\n" +
    "        <div ng-show=\"!complete\">There was a problem validating your email address</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("shared/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/footer/footer.tpl.html",
    "<footer class=\"footer\">\n" +
    "    <div class=\"container-fluid container-fluid--section\">\n" +
    "        <div class=\"container-lg\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <div class=\"title__wrap\">\n" +
    "                        <h6 class=\"txt-blue txt-uppercase\">Provider order required</h6>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt__wrap\">\n" +
    "                        <div class=\"txt txt-black\">\n" +
    "                            ApoE testing must be approved by your physician or other qualified health care provider.\n" +
    "                            If you don’t have a health care provider ADx diagnostics can assist in helping you find a licensed provider.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <div class=\"title__wrap\">\n" +
    "                        <h6 class=\"txt-blue txt-uppercase\">PARTNER WITH US</h6>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt__wrap\">\n" +
    "                        <a href=\"\" class=\"txt txt-black\">Affiliates</a>\n" +
    "                       <div class=\"link--indent\">\n" +
    "                           <a href=\"\" class=\"txt txt-black\">Providers</a>\n" +
    "                       </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <div class=\"title__wrap\">\n" +
    "                        <h6 class=\"txt-blue txt-uppercase\">LEGAL</h6>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt__wrap\">\n" +
    "                        <a href=\"\" class=\"txt txt-black\">Tems of Service</a>\n" +
    "                        <div class=\"link--indent\">\n" +
    "                            <a href=\"\" class=\"txt txt-black\">Privacy Policy</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"link--indent\">\n" +
    "                            <a href=\"\" class=\"txt txt-black\">Informed Consent</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"link--indent\">\n" +
    "                            <a href=\"\" class=\"txt txt-black\">Research Consent</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <div class=\"title__wrap\">\n" +
    "                        <h6 class=\"txt-blue txt-uppercase\">JOIN OUR EMAIL LIST</h6>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt__wrap\">\n" +
    "                        <div class=\"txt txt-black\">\n" +
    "                            Join our email list to receive news and updates on various advances in Alzheimer's disease research.\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      \n" +
    "      <!--title blue-->\n" +
    "      <div class=\"footer-blue__wrap\">\n" +
    "        <div class=\"footer-title-blue__wrap\">\n" +
    "          <h3>Join our email list</h3>\n" +
    "        </div>\n" +
    "        <form action=\"\" class=\"footer-form\">\n" +
    "          <div class=\"footer-form__wrap\">\n" +
    "            <div class=\"footer-input__wrap\">\n" +
    "              <input class=\"form-control\" type=\"text\" placeholder=\"Email adress\">\n" +
    "            </div>\n" +
    "            <div class=\"footer-submit__wrap\">\n" +
    "              <button type=\"submit\" class=\"button-border-rounded button-border-rounded--small\">Submit</button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "      <!--title blue end-->\n" +
    "      <div class=\"footer-bottom\">\n" +
    "        <div class=\"footer-bottom__wrap\">\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h6 class=\"txt-blue-dark txt-center\">© 2017 ADx diagnostics. All rights reserved.</h6>\n" +
    "          </div>\n" +
    "          <div class=\"footer-bottom__link txt-center\">\n" +
    "            <a href=\"\" class=\"txt txt-blue-dark\">Contact Us</a>\n" +
    "            <a href=\"\" class=\"txt txt-blue-dark\">About Us</a>\n" +
    "          </div>\n" +
    "          <div class=\"footer-bottom-link-icon__wrap\">\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"\" class=\"link-icon facebook\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"\" class=\"link-icon twitter\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"\" class=\"link-icon linkedIn\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"\" class=\"link-icon social\"></a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"footer-bottom__content-bottom\">\n" +
    "            <div class=\"txt-small txt-black txt-center\">Good.life lets you chat with customers and give them real-time support.</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  <div class=\"footer-bgc__bottom\">\n" +
    "  </div>\n" +
    "</footer>");
}]);

angular.module("shared/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/header/header.tpl.html",
    "<header class=\"header\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"header__wrap\">\n" +
    "        <!--logo-->\n" +
    "        <div class=\"header__logo\">\n" +
    "          <a ui-sref=\"home\" class=\"header-logo__link\">\n" +
    "            <div ng-include=\"'assets/images/svg/ADXHealth-icon.svg'\"></div>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <!--navigation-->\n" +
    "        <div class=\"header-nav\">\n" +
    "          <nav class=\"header-nav__wrap\">\n" +
    "            <ul class=\"header-nav-wrap__inner\">\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"products\" class=\"header-nav-link\">Products</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"about\" class=\"header-nav-link\">About</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\" \" class=\"header-nav-link\">Science</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"FAQ\" class=\"header-nav-link\">FAQ</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"contact\" class=\"header-nav-link\">Contact</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </nav>\n" +
    "          <div class=\"header__button\">\n" +
    "            <div class=\"button__login\">\n" +
    "              <a ui-sref=\"login\" class=\"bt-round bt-round--blue\"><span class=\"bt-content\">Account</span></a>\n" +
    "            </div>\n" +
    "            <div class=\"button__purchase\">\n" +
    "              <a ui-sref=\"\" class=\"bt-round bt-round--blue-dark\"><span class=\"bt-content\">Purchase</span></a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</header>");
}]);

angular.module("shared/side-navbar/side-navbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/side-navbar/side-navbar.tpl.html",
    "<nav class=\"side-navbar\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "      <!--logo header-->\n" +
    "      \n" +
    "        <!--end logo header-->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"side-navbar__admin\">\n" +
    "        <div class=\"side-navbar__admin-photo\">\n" +
    "          <div class=\"image-rounded\" style=\"background-image: url('../../assets/images/aniston_user.jpg')\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"side-navbar__admin-txt\">\n" +
    "          <h2 class=\"side-navbar__admin-name txt-bold not-margin\">\n" +
    "            Maria Gomez\n" +
    "          </h2>\n" +
    "          <p class=\"side-navbar__admin-status txt-uppercase not-margin\">\n" +
    "            Administrator\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"side-navbar__admin-button\">\n" +
    "          <div class=\"dropdown-icon-circle\">\n" +
    "            <i class=\"fa fa-angle-down dropdown-icon-circle__inner\"></i>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"side-navbar__search-form\">\n" +
    "        <div class=\"search-form\">\n" +
    "          <div class=\"search-form__icon\">\n" +
    "            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n" +
    "          </div>\n" +
    "          <input class=\"form-control form-control--search\" type=\"text\" placeholder=\"Start typing to search...\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <!--nav-top-->\n" +
    "      <div class=\"side-navbar-link\">\n" +
    "        <ul class=\"side-navbar-link__top\">\n" +
    "          <li ui-sref-active=\"active\" class=\"side-navbar-link__item\">\n" +
    "            <a href ui-sref=\"home\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-home\"></i>Dashboard<i class=\"fa fa-angle-down dropdown-icon-circle__inner\"></i></span></a>\n" +
    "            <ul  class=\"side-navbar-link__dropdown side-navbar-link__dropdown--users\">\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">All users</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "          <li ui-sref-active=\"active\" class=\"side-navbar-link__item\">\n" +
    "            <a href ui-sref=\"about\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-bar-chart\"></i>Overview<i class=\"fa fa-angle-down dropdown-icon-circle__inner\"></i></span></a>\n" +
    "            <ul  class=\"side-navbar-link__dropdown side-navbar-link__dropdown--users\">\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">All users</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "          <li ui-sref-active=\"active\" class=\"side-navbar-link__item side-navbar-link__item--users\">\n" +
    "            <a href ui-sref=\"profile\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-user-o\"></i>Users<i class=\"fa fa-angle-down dropdown-icon-circle__inner\"></i></span></a>\n" +
    "            <ul  class=\"side-navbar-link__dropdown side-navbar-link__dropdown--users\">\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">All users</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "          <li ui-sref-active=\"active\" class=\"side-navbar-link__item\">\n" +
    "            <a href ui-sref=\"dashboard\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-gear\"></i>Customizations<i class=\"fa fa-angle-down dropdown-icon-circle__inner\"></i></span></a>\n" +
    "            <ul  class=\"side-navbar-link__dropdown side-navbar-link__dropdown--users\">\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">All users</a>\n" +
    "              </li>\n" +
    "              <li class=\"dropdown-item\">\n" +
    "                <a href  class=\"nav-link-dropdown\">Gender</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "          <li ui-sref-active=\"active\" class=\"side-navbar-link__item\">\n" +
    "            <a test-hook=\"logout-button\" ng-click=\"logout()\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-sign-out\"></i>Logout</span></a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>");
}]);
