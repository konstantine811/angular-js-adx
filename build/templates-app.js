angular.module("templates-app", ["components/about/about.tpl.html", "components/change_password/change_password.tpl.html", "components/contact/contact.tpl.html", "components/dashboard/dashboard.tpl.html", "components/faq/faq.tpl.html", "components/forgot_password/forgot_password.tpl.html", "components/home/home.tpl.html", "components/legal/legal.tpl.html", "components/login/login.tpl.html", "components/products/pages/pre-purchase.tpl.html", "components/products/pages/sequencingStatus.tpl.html", "components/products/products.tpl.html", "components/products/productsDetail.tpl.html", "components/profile/profileEdit.tpl.html", "components/profile/profileView.tpl.html", "components/register/register.tpl.html", "components/results/pages/result-p1.tpl.html", "components/results/pages/result-p2.tpl.html", "components/results/pages/result-p3.tpl.html", "components/results/pages/result-p4.tpl.html", "components/results/pages/result-p5.tpl.html", "components/results/pages/result-p6.tpl.html", "components/results/pages/result-p7.tpl.html", "components/results/pages/result-p8.tpl.html", "components/results/results.tpl.html", "components/verify_email/verify_email.tpl.html", "shared/footer/footer.tpl.html", "shared/header/header.tpl.html", "shared/side-navbar/side-navbar.tpl.html"]);

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
    "");
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
    "            <button jq-slider class=\"button-border-rounded\">Order test</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"hide-mobile home-head-image__wrap anim-content-transition\">\n" +
    "          <img class=\"head-image\" src=\"../../../assets/images/home-page/helix-front-right.png\" alt=\"\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"home-arrow-down__wrap anim-content-transition\">\n" +
    "      <a href=\"#anchor\" smooth-scroll ng-include=\"'./assets/images/svg/arrow-down.svg'\"  class=\"arrow-down\"></a>\n" +
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
    "  <div id=\"anchor\" class=\"section-box-shadow home-section-first\">\n" +
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
    "        <div class=\"row section__wrap\">\n" +
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
    "                <h1 class=\"txt-blue-dark title__wrap--md-center\">Science</h1>\n" +
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
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
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
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
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
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
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
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
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
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
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
    "<div class=\"login-page login-bgc\">\n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div class=\"login-form__wrap\">\n" +
    "        <div class=\"login-form\">\n" +
    "          <h6 class=\"title-roboto txt-medium txt-blue-dark txt-center\">Sign in to ADx Health</h6>\n" +
    "          <form class=\"form--login\" name=\"form\" novalidate ng-submit=\"loginUser(userForm)\">\n" +
    "            <div class=\"form-input\">\n" +
    "              <div class=\"form-input__login-wrap\">\n" +
    "                <div class=\"form-group form-group--col\">\n" +
    "                  <label class=\"input-label txt--exs-small txt txt-blue-2 txt-medium\" for=\"email\">Email address</label>\n" +
    "                  <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" required ng-model=\"userForm.email\">\n" +
    "                  <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                    <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                    <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group form-group--col\">\n" +
    "                  <label class=\"input-label txt--exs-small txt txt-blue-2 txt-medium\" for=\"password\">Password</label>\n" +
    "                  <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" ng-model=\"userForm.password\" required>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"txt--indent-small txt-right \">\n" +
    "              <a href ui-sref=\"forgot_password\" class=\"txt-link txt-blue-2 txt txt--small txt-medium\">\n" +
    "                Forgot your password ?\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <button class=\"bt-round bt-round--large bt-round--blue-dark\" type=\"submit\" ng-disabled=\"form.$invalid\" test-hook=\"login-button\"><span class=\"txt-medium\">Sign in</span></button>\n" +
    "            </div>\n" +
    "            <div class=\"txt--indent-small txt-center\">\n" +
    "              <a href ui-sref=\"register\" class=\"txt-blue txt txt--small txt-bold\">\n" +
    "                I need to create an account\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "          <br>\n" +
    "          <div class=\"alert alert-danger\" ng-repeat=\"error in errors.password\">{{::error}}</div>\n" +
    "          <div class=\"alert alert-danger\" ng-repeat=\"error in errors.non_field_errors\">{{::error}}</div>\n" +
    "          <div class=\"alert alert-danger\" ng-if=\"error\">{{::error.detail}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("components/products/pages/pre-purchase.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/pages/pre-purchase.tpl.html",
    "<div class=\"products-page\">\n" +
    "  <div class=\"products-head__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"title-section__wrap\">\n" +
    "        <h1 class=\"txt-blue-dark txt-center\">Our service & product</h1>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <div class=\"img__wrap txt-center\">\n" +
    "            <img class=\"img product-img--alzheimers\" src=\"./assets/images/Alzheimers-Genetic-Test.png\" alt=\"\">\n" +
    "          </div>\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h3 class=\"txt-blue txt-center\">Alzheimers Genetic Test</h3>\n" +
    "          </div>\n" +
    "          <div class=\"txt--indent\">\n" +
    "            <p class=\"txt txt-black txt-center\">The ApoE gene comes in three variants: ApoE2, ApoE3, and ApoE4, and everyone has two copies.</p>\n" +
    "          </div>\n" +
    "          <div class=\"button__wrap button--center\">\n" +
    "            <button class=\"bt-round bt-round--blue\">Order here</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <div class=\"img__wrap txt-center\">\n" +
    "            <img class=\"img product-img--helix\" src=\"./assets/images/Helix-Bio-Labs.png\" alt=\"\">\n" +
    "          </div>\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h3 class=\"txt-blue txt-center\">Helix Bio Labs</h3>\n" +
    "          </div>\n" +
    "          <div class=\"txt--indent\">\n" +
    "            <p class=\"txt txt-black txt-center\">The ApoE gene comes in three variants: ApoE2, ApoE3, and ApoE4, and everyone has two copies.</p>\n" +
    "          </div>\n" +
    "          <div class=\"button__wrap button--center\">\n" +
    "            <button class=\"bt-round bt-round--blue\">Connect here</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/products/pages/sequencingStatus.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/pages/sequencingStatus.tpl.html",
    "<div class=\"sequencing-status-page\">\n" +
    "  <div class=\"sequencing-status-head__wrap\">\n" +
    "    <div class=\"section__wrap\">\n" +
    "      <div class=\"container-lg--dashboard\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h1 class=\"txt-blue-dark txt-center\">Current status on your DNA samples</h1>\n" +
    "        </div>\n" +
    "        <!--progress-bar-->\n" +
    "        <div class=\"status-progressbar__wrap\">\n" +
    "          <ul class=\"status-progressbar-container\">\n" +
    "            <li class=\"status-progressbar-item active\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-car\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Physician\n" +
    "                  Review</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">The physician is determining if the test is appropriate for user.</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item  active\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-pc-pointer\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Kit\n" +
    "                  Registered</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">The user has spit in their sample tube and registered it for shipment.</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item active\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-forklift\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Manifest\n" +
    "                  Uploaded</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">The user's sample has been received by the lab.</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item  active\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-test-tubes\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">DNA Extraction\n" +
    "                  Complete</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">The user's sample is done in the lab and currently being processed.</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item  active\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-pc-dna\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Data Delivery\n" +
    "                  Complete</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">The Genomics Service will now provide variant data from the user's sample.</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item  active active--current\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-pc-dna\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold txt-center progressbar-txt-color\">Results ready\n" +
    "                  for view</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">The user's sample is being reanalyzed.</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <!--end  progress-bar-->\n" +
    "        <div class=\"title__wrap txt-center\">\n" +
    "          <div class=\"container-xs-button-flex\">\n" +
    "            <div class=\"test-ok active\"></div>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center\">Your DNA sample test\n" +
    "              results are now ready.</h4>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap button--center\">\n" +
    "          <div class=\"bt-round bt-round--greatest bt-round--blue-dark\">Click Here To View</div>\n" +
    "        </div>\n" +
    "        <div class=\"txt--indent-small txt-wrap-under-button\">\n" +
    "          <p class=\"txt txt-black txt--small txt-center\">\n" +
    "            An email with your DNA test results\n" +
    "            has been sent to you.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-lg--dashboard\">\n" +
    "        <h1 class=\"txt-blue-dark txt-center\">Education</h1>\n" +
    "        <div class=\"txt__wrap txt__wrap--border-bottom\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "              <p class=\"txt txt-black txt-bold\">The ApoE gene comes in three variants:</p>\n" +
    "              <p class=\"txt txt-black\">ApoE2, ApoE3, and ApoE4, and everyone has two copies of the gene.</p>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                <p class=\"txt txt-black\">Genotyping reveals what specific combination of the ApoE gene you have, which may be two copies of the same form (e.g. ApoE3/ApoE3), or two different forms (e.g. ApoE2/ApoE4).</p>\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                <p class=\"txt txt-black\">ADx ApoE Genetic test will test which allel e combination you have.</p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "              <div class=\"txt txt-black\"><p class=\"txt-bold\">What will my results tell me?</p>\n" +
    "                Your test results will explain which combination of the ApoE alleles you have. This genetic combination will be further interpreted, to help you identify your lifetime risk for developing Alzheimer’s disease, based on your genetics and your current age. Your ApoE status will not change as you age, but as you age your chance of developing Alzheimer’s will increase at a different rate dependent on which ApoE combination you have. A genetics counselor will be available to go through your results with you if you have questions.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "</div>");
}]);

angular.module("components/products/products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/products.tpl.html",
    "<ui-view></ui-view>");
}]);

angular.module("components/products/productsDetail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/productsDetail.tpl.html",
    "<div class=\"sequencing-status-page\">\n" +
    "    <div class=\"sequencing-status-head__wrap\">\n" +
    "        <div class=\"section__wrap\">\n" +
    "            <div class=\"container-lg--dashboard\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                    <h1 class=\"txt-blue txt-center\">Purchase receipts</h1>\n" +
    "                </div>\n" +
    "                <div class=\"txt--indent\">\n" +
    "                    <p class=\"txt txt-black txt-center\">Receipt #01234 .- April 29, 2018</p>\n" +
    "                </div>\n" +
    "                <div class=\"section__wrap\">\n" +
    "                    <div class=\"container-flex\">\n" +
    "                        <div class=\"flex-column\">\n" +
    "                            <p class=\"txt txt-blue txt-bold\">Payment from</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"flex-column flex-column--line\">\n" +
    "                            <div class=\"line-circle\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"flex-column\">\n" +
    "                            <p class=\"txt txt-blue txt-bold\">Preapared for</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"container-flex\">\n" +
    "                        <div class=\"flex-column\">\n" +
    "                            <div class=\"txt--indent-small\">\n" +
    "                                <p class=\"txt-small txt-black\">Name: Andrew Pettersson</p>\n" +
    "                                <p class=\"txt-small txt-black\">andrew.pettersson@gmail.com</p>\n" +
    "                                <p class=\"txt-small txt-black\">Adress: Stenkålsgatan 12</p>\n" +
    "                                <p class=\"txt-small txt-black\">Phone: +467213211</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"flex-column txt-right\">\n" +
    "                            <p class=\"txt txt-black txt-bold\">Affirmativ</p>\n" +
    "                            <p class=\"txt-small txt-black\">info@affirmativ.com</p>\n" +
    "                            <div class=\"txt--indent-small\">\n" +
    "                                <p class=\"txt-small txt-black\">Adress: Stenkålsgatan 12</p>\n" +
    "                                <p class=\"txt-small txt-black\">Phone: +467213211</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"section__wrap\">\n" +
    "                    <table class=\"table table-hover table--purchase\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th scope=\"col\" >Description</th>\n" +
    "                                <th scope=\"col\" class=\"txt-uppercase txt-right\">Qty</th>\n" +
    "                                <th scope=\"col\" class=\"txt-uppercase txt-right\">Price</th>\n" +
    "                                <th scope=\"col\" class=\"txt-uppercase txt-right\">Subtotal</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr>\n" +
    "                                <th scope=\"row\" class=\"txt-small txt-black\">Inherited Diabetes Test</th>\n" +
    "                                <td class=\"txt-right\">1</td>\n" +
    "                                <td class=\"txt-right\">$249.00</td>\n" +
    "                                <td class=\"txt-right\">$249.00</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <th scope=\"row\" class=\"txt-small txt-black\">Affirmativ DNA kit</th>\n" +
    "                                <td class=\"txt-right\">1</td>\n" +
    "                                <td class=\"txt-right\">$89.00</td>\n" +
    "                                <td class=\"txt-right\">$89.00</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                    <div class=\"row__wrap--space-top\">\n" +
    "                        <div class=\"container-flex-end\">\n" +
    "                            <div class=\"column-right\">\n" +
    "                                <div class=\"txt-small txt-right txt-uppercase txt-black\">Subtotal</div>\n" +
    "                                <div class=\"txt-small txt-right txt-uppercase txt-black\">Shipping</div>\n" +
    "                                <div class=\"txt-small txt-right txt-uppercase txt-black\">Total</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"column-left\">\n" +
    "                                <div class=\"txt-small txt-black\">$338.00</div>\n" +
    "                                <div class=\"txt-small txt-black\">$10.00</div>\n" +
    "                                <div class=\"txt-small txt-black\">$348.00</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row__wrap--space-top\">\n" +
    "                        <div class=\"txt-wrap__border\">\n" +
    "                            <p class=\"txt-small txt-bold txt-black\">Thank you for your purchase!</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt--indent-small\">\n" +
    "                        <div class=\"container-flex\">\n" +
    "                            <div class=\"column-flex\">\n" +
    "                                <p class=\"txt txt--small txt-black\">affirmativ shop inc. 2018</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"column-flex\">\n" +
    "                                <p class=\"txt txt--small txt-black\">www.affirmativdiagnostics.com <span class=\"hypphen-space\">-</span> info@affirmativ.com<span class=\"hypphen-space\">-</span>Tel: 125 627 387</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"section__wrap\">\n" +
    "        <div class=\"section-bgc--silver\">\n" +
    "            <div class=\"container-lg--dashboard\">\n" +
    "                <h1 class=\"txt-blue-dark txt-center\">Education</h1>\n" +
    "                <div class=\"txt__wrap txt__wrap--border-bottom\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <p class=\"txt txt-black txt-bold\">The ApoE gene comes in three variants:</p>\n" +
    "                            <p class=\"txt txt-black\">ApoE2, ApoE3, and ApoE4, and everyone has two copies of the gene.</p>\n" +
    "                            <div class=\"txt--indent\">\n" +
    "                                <p class=\"txt txt-black\">Genotyping reveals what specific combination of the ApoE gene you have, which may be two copies of the same form (e.g. ApoE3/ApoE3), or two different forms (e.g. ApoE2/ApoE4).</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"txt--indent\">\n" +
    "                                <p class=\"txt txt-black\">ADx ApoE Genetic test will test which allel e combination you have.</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <div class=\"txt txt-black\"><p class=\"txt-bold\">What will my results tell me?</p>\n" +
    "                                Your test results will explain which combination of the ApoE alleles you have. This genetic combination will be further interpreted, to help you identify your lifetime risk for developing Alzheimer’s disease, based on your genetics and your current age. Your ApoE status will not change as you age, but as you age your chance of developing Alzheimer’s will increase at a different rate dependent on which ApoE combination you have. A genetics counselor will be available to go through your results with you if you have questions.\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
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
    "<div class=\"profile-page\">\n" +
    "    \n" +
    "    <!--section first -->\n" +
    "    <div class=\"section__wrap\">\n" +
    "        <div class=\"container-lg--dashboard container-lg--dashboard--not-space-xs\">\n" +
    "            <div class=\"section-box-shadow\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark txt-center\">Account information</h2>\n" +
    "                </div>\n" +
    "                <div class=\"profile-info__wrap\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">Email</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-black\">\n" +
    "                                <div class=\"profile-view--display-column-wrap\">\n" +
    "                                    <div class=\"profile-view-column-1\">\n" +
    "                                        {{profile.user.email}} <span class=\"txt-left-space\">(Verifed)</span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"profile-view-column-2\">\n" +
    "                                        <a class=\"txt-blue txt-right\">Edit</a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">Password</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <a class=\"sub-header-txt sub-header-txt--small txt-blue\"> Change Password</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">Security question</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-black\">\n" +
    "                                <div class=\"profile-view--display-column-wrap\">\n" +
    "                                    <div class=\"profile-view-column-1\">\n" +
    "                                        What was the name of your fist pet?\n" +
    "                                    </div>\n" +
    "                                    <div class=\"profile-view-column-2\">\n" +
    "                                        <a class=\"txt-blue txt-right\">Edit</a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--end section first-->\n" +
    "    \n" +
    "    <!--section second-->\n" +
    "    <div class=\"section__wrap\">\n" +
    "        <div class=\"container-lg--dashboard container-lg--dashboard--not-space-xs\">\n" +
    "            <div class=\"section-box-shadow\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark txt-center\">Personal information</h2>\n" +
    "                </div>\n" +
    "                <div class=\"profile-info__wrap\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">Name</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-black\">\n" +
    "                                {{profile.user.first_name}} {{profile.user.last_name}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">Saxe</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-black\">\n" +
    "                                {{profile.gender}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">Birthday</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-black\">\n" +
    "                                June 17, 1975\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">All enthnicities</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-black\">\n" +
    "                                Chinese\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-offset-4 col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue\">\n" +
    "                                Review enthnicity information\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">Height</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-black\">\n" +
    "                               Not set\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">Weight</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-black\">\n" +
    "                                Not set\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-blue-dark txt-medium\">Current residence</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"sub-header-txt sub-header-txt--small txt-black\">\n" +
    "                                US\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"profile-button__wrap profile-info__wrap--border-bottom\">\n" +
    "                        <button class=\"bt-round bt-round--blue\">Edit</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"profile-button__wrap\">\n" +
    "                        <a href=\"\" class=\"sub-header-txt sub-header-txt--small txt-blue\">Forum settings</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--end section second-->\n" +
    "    \n" +
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

angular.module("components/results/pages/result-p1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p1.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__over\">\n" +
    "        <div class=\"txt-rubric__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-bold txt-gray\">Overview</div>\n" +
    "        </div>\n" +
    "        <div class=\"result-head__download-button\">\n" +
    "          <a href=\"\" class=\"download-button\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__title\">\n" +
    "        <h2 class=\"txt-blue\">Your result </h2>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-black\">\n" +
    "            Please remember that genetics are just one piece of your overall risk for Alzheimer’s disease.  The results of this test do not diagnose Alzheimer’s disease or any other type of dementia.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--result-p1 progress-bar-->\n" +
    "  <div class=\"result-progressbar__wrap\">\n" +
    "    <ul class=\"progressbar-wrap\">\n" +
    "      <li class=\"progressbar-item active\"></li>\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  <!--end result-p1 progress-bar-->\n" +
    "  \n" +
    "  <!--section first-->\n" +
    "  <div class=\"section__wrap section__wrap--small-pad-top\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-section-first__img hide-xs-mobile\">\n" +
    "        <ng-include src=\"'./assets/images/svg/e2-e4.svg'\"></ng-include>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue\">{{ user.first_name }},</h3>\n" +
    "        <h3 class=\"txt-blue-dark txt-padding-top\">Your ApoE Genotype is &lte2/e4&gt.</h3>\n" +
    "      </div>\n" +
    "      <div class=\"txt__wrap\">\n" +
    "        <div class=\"txt txt-black\">\n" +
    "          Your ApoE genotype indicates that you are at a higher genetic risk for Alzheimer’s disease compared to the average population. It is important to note that although ApoE genotype is a powerful genetic risk factor for Alzheimer’s disease, the test itself is not diagnostic of the disease. Having a high-risk genotype (at least one copy of ApoE-e4) does not guarantee development of the disease, and having a low-risk genotype (having the ApoE e2/e2 genotype) does not exclude the possibility of developing the disease. Furthermore, as noted above, other factors modify the risk, including both genetic and non-genetic factors. 1-17, 20-49\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      \n" +
    "      <!--chart-->\n" +
    "      <div class=\"result-chart__wrap\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h3 class=\"txt-blue-dark txt-center\">Lifetime Risk (%) for Alzheimer’s disease by Age and ApoE Genotype</h3>\n" +
    "        </div>\n" +
    "        <div class=\"chart__wrap\">\n" +
    "          <ng-include src=\"'./assets/images/charts/chart-bar-1.svg'\"></ng-include>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!--charts end-->\n" +
    "      \n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--section first end-->\n" +
    "  \n" +
    "  <!--section second-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "          <div class=\"table__wrap\">\n" +
    "            <table class=\"table\">\n" +
    "              <thead>\n" +
    "                <tr>\n" +
    "                  <th scope=\"col\">Age</th>\n" +
    "                  <th scope=\"col\">e2/e2 or</th>\n" +
    "                  <th scope=\"col\">e3/e3</th>\n" +
    "                  <th scope=\"col\">e2/e4</th>\n" +
    "                  <th scope=\"col\">e3/e4</th>\n" +
    "                  <th scope=\"col\">e4/e4</th>\n" +
    "                </tr>\n" +
    "              </thead>\n" +
    "              <tbody>\n" +
    "                <tr>\n" +
    "                  <td>65</td>\n" +
    "                  <td>0.2%</td>\n" +
    "                  <td>0.2%</td>\n" +
    "                  <td>0.2%</td>\n" +
    "                  <td>0.2%</td>\n" +
    "                  <td>0.2%</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                  <td>75</td>\n" +
    "                  <td>1%</td>\n" +
    "                  <td>1%</td>\n" +
    "                  <td>1%</td>\n" +
    "                  <td>1%</td>\n" +
    "                  <td>1%</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                  <td>85</td>\n" +
    "                  <td>7%</td>\n" +
    "                  <td>7%</td>\n" +
    "                  <td>7%</td>\n" +
    "                  <td>7%</td>\n" +
    "                  <td>7%</td>\n" +
    "                </tr>\n" +
    "              </tbody>\n" +
    "            </table>\n" +
    "          </div>\n" +
    "          <div class=\"txt__wrap\">\n" +
    "            <div class=\"txt txt-black txt--small\">*Adapted from Genin et al.56 Listed rates are the average of Rochester and PAQUID incidence rates. Figures are rounded for simplicity and 95% confidence intervals are not show. Please see original publication for complete details.</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--section second end -->\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver txt-center\">\n" +
    "      <a ui-sref=\"results.p2\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/results/pages/result-p2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p2.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__over\">\n" +
    "        <div class=\"txt-rubric__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-bold txt-gray\">About page</div>\n" +
    "        </div>\n" +
    "        <div class=\"result-head__download-button\">\n" +
    "          <a href=\"\" class=\"download-button\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__title\">\n" +
    "        <h2 class=\"txt-blue-dark\">About Alzheimer’s disease</h2>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-black\">\n" +
    "            What do we know about Late-onset Alzheimer’s disease?\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--result-p2 progress-bar-->\n" +
    "  <div class=\"result-progressbar__wrap\">\n" +
    "    <ul class=\"progressbar-wrap\">\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "      <li class=\"progressbar-item active\"></li>\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  <!--end result-p2 progress-bar-->\n" +
    "  \n" +
    "  <!--section second-->\n" +
    "  <div class=\"section__wrap section__wrap--small-pad-top\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark txt-center\">ApoE Status of US Population</h3>\n" +
    "      </div>\n" +
    "      <div class=\"chart__wrap\">\n" +
    "        <ng-include src=\"'./assets/images/charts/chart-donut-1.svg'\"></ng-include>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section second -->\n" +
    "  \n" +
    "  <!--section third-->\n" +
    "  <div class=\"section__wrap section__wrap--small-pad-top\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark\">Understand ApoE</h3>\n" +
    "      </div>\n" +
    "      <div class=\"txt__wrap\">\n" +
    "        <p class=\"txt txt-black\"><span class=\"txt-bold\">You have ApoE genotype &lte2/e3&gt.</span>There are three common variants of the ApoE gene:</p>\n" +
    "        <ul class=\"txt--indent-small \">\n" +
    "          <li><p class=\"txt txt-black\">ApoE-e2</p></li>\n" +
    "          <li><p class=\"txt txt-black\">ApoE-e3</p></li>\n" +
    "          <li><p class=\"txt txt-black\">ApoE-e4</p></li>\n" +
    "        </ul>\n" +
    "        <div class=\"txt--indent-small\">\n" +
    "          <p class=\"txt txt-black\">Like all genes, you have two copies of ApoE, one from your mother and one from your father.  If you receive a different variant of the gene from your mother than from your father, then you are “heterozygous” for that gene (such as e3/e4). If you receive the same variant from each parent, then you have a “homozygous” genotype (such as e3/e3).\n" +
    "            It is estimated that about 27% of the total US population carries at least one copy of the ApoE-e4 variant.50,51 However,  when you look at the population based on disease status, two-thirds of the US population living with Alzheimer’s disease carry at least one copy of the ApoE-e4 variant.52,53 Although not everyone who carries the ApoE-e4 variant will develop Alzheimer’s disease, those people with at least one copy of the ApoE-e4 variant have a higher risk for developing the disease.  While everyone should aim to live a cognitively healthy lifestyle, individuals with the high risk ApoE-e4 variant should seek their physician’s assistance to take action immediately by addressing modifiable lifestyle, environmental, and medical factors.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section third-->\n" +
    "  \n" +
    "  <!--section fourth-->\n" +
    "  <div class=\"section__wrap section__wrap--small-pad-top\">\n" +
    "    <div class=\"container-lg--dashboard container-lg--dashboard--not-space-exlg\">\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark txt-space-left-exlg\">Understand this test</h3>\n" +
    "      </div>\n" +
    "      <div class=\"boxes-row__wrap\">\n" +
    "        <div class=\"boxes__wrap boxes__wrap--large\">\n" +
    "          <div class=\"box-half-column box-half-column--flex box-shadow\">\n" +
    "            <div class=\"box-txt-column__wrap\">\n" +
    "              <h5 class=\"txt-blue-dark\">How it’s inherited</h5>\n" +
    "              <div class=\"txt-padding-top\">\n" +
    "                <p class=\"txt txt-black\">\n" +
    "                  Tests for the ε4 variant in the APOE gene associated with an increased risk of developing late-onset Alzheimer's disease.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"box-image-column__wrap\">\n" +
    "              <ng-include class=\"box-image-column__inner\" src=\"'./assets/images/svg/gray-puzzle.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-half-column box-half-column--flex box-shadow\">\n" +
    "            <div class=\"box-txt-column__wrap\">\n" +
    "              <h5 class=\"txt-blue-dark\">Limitations</h5>\n" +
    "              <div class=\"txt-padding-top\">\n" +
    "                <p class=\"txt txt-black\">\n" +
    "                  The ε4 variant included in this test is found and has been studied in many ethnicities. Detailed risk estimates have been studied the most in people of European descent.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"box-image-column__wrap\">\n" +
    "              <ng-include class=\"box-image-column__inner\" src=\"'./assets/images/svg/blue-puzzle.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"boxes__wrap boxes__wrap--large\">\n" +
    "          <div class=\"box-half-column box-shadow\">\n" +
    "            <h5 class=\"txt-blue-dark\">Late onset test</h5>\n" +
    "            <div class=\"box-txt__wrap\">\n" +
    "              <ul>\n" +
    "                <li class=\"txt--indent-small\"><p class=\"txt txt-black\">Does not include all possible variants or genes associated with late-onset Alzheimer's disease.\n" +
    "                </p></li>\n" +
    "                <li class=\"txt--indent-small\"><p class=\"txt txt-black\">Does not include all possible variants or genes associated with late-onset Alzheimer's disease.\n" +
    "                </p></li>\n" +
    "                <li class=\"txt--indent-small\"><p class=\"txt txt-black\">Does not determine a person's full APOE genotype.\n" +
    "                </p></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-half-column box-shadow\">\n" +
    "            <div class=\"txt-wrap__border\">\n" +
    "              <h5 class=\"txt-blue-dark\">This test does not diagnose Alzheimer's disease or any other health conditions.</h5>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt__wrap txt--indent-small\">\n" +
    "              <p class=\"txt txt-black\">Please talk to a healthcare professional if this condition runs in your family, you think you might have this condition, or you have any concerns about your results.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <div class=\"txt--indent-small\"><a href=\"\" class=\"txt txt-blue link-underline\">See Scientific Details</a></div>\n" +
    "              <div class=\"txt--indent-small\"><a href=\"\" class=\"txt txt-blue link-underline\">See Frequently Asked Questions</a></div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section fourth-->\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p1\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p3\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/results/pages/result-p3.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p3.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__over\">\n" +
    "        <div class=\"txt-rubric__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-bold txt-gray\">Overview</div>\n" +
    "        </div>\n" +
    "        <div class=\"result-head__download-button\">\n" +
    "          <a href=\"\" class=\"download-button\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__title\">\n" +
    "        <h2 class=\"txt-blue-dark\">Lifestyle & other factors</h2>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-black\">\n" +
    "            Lifestyle and other factors can also influence the\n" +
    "            chances of developing late-onset Alzheimer's disease.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"txt__wrap\">\n" +
    "          <p class=\"txt txt-blue\">Consult with a healthcare professional before making any major lifestyle changes.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--result-p2 progress-bar-->\n" +
    "  <div class=\"result-progressbar__wrap\">\n" +
    "    <ul class=\"progressbar-wrap\">\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "      <li class=\"progressbar-item active\"></li>\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  <!--end result-p2 progress-bar-->\n" +
    "  \n" +
    "  <!--section second-->\n" +
    "   <div class=\"section__wrap\">\n" +
    "     <div class=\"container-lg--dashboard container-lg--dashboard--not-space-exlg\">\n" +
    "       <div class=\"row\">\n" +
    "         <div class=\"col-sm-6\">\n" +
    "           <div class=\"boxes__wrap boxes__wrap--padding-top\">\n" +
    "             <div class=\"box-shadow\">\n" +
    "               <div class=\"title-wrap\">\n" +
    "                 <h3 class=\"txt-blue-dark txt-center\">Family history</h3>\n" +
    "               </div>\n" +
    "               <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                 <img class=\"img\" src=\"./assets/images/results-page/dna-icon-orange.png\" alt=\"\">\n" +
    "               </div>\n" +
    "               <div class=\"txt__wrap\">\n" +
    "                 <p class=\"txt txt-black txt-center\">\n" +
    "                   Parents, siblings, and children of an individual with late-onset Alzheimer's disease have a higher chance of developing the disease themselves.\n" +
    "                 </p>\n" +
    "               </div>\n" +
    "               <div class=\"button__wrap txt-center\">\n" +
    "                 <button class=\"bt-round bt-round--blue\">See Scientific Details</button>\n" +
    "               </div>\n" +
    "             </div>\n" +
    "           </div>\n" +
    "         </div>\n" +
    "         <div class=\"col-sm-6\">\n" +
    "            <div class=\"row-image-flex\">\n" +
    "              <div class=\"row__wrap\">\n" +
    "              <h5 class=\"txt-blue-dark\">Age</h5>\n" +
    "              <div class=\"row-image__wrap\">\n" +
    "                <img class=\"row-image-icon-flex\" src=\"./assets/images/results-page/cake-orange.png\" alt=\"\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "              <div class=\"row__wrap\">\n" +
    "                <h5 class=\"txt-blue-dark\">Sex</h5>\n" +
    "                <div class=\"row-image__wrap\">\n" +
    "                  <img class=\"row-image-icon-flex\" src=\"./assets/images/results-page/people-blue-dark.png\" alt=\"\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"row__wrap row__wrap--space-top\">\n" +
    "                <h5 class=\"txt-blue-dark\">Family history</h5>\n" +
    "                <div class=\"row-image__wrap\">\n" +
    "                  <img class=\"row-image-icon-flex\" src=\"./assets/images/results-page/dna-blue.png\" alt=\"\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"row__wrap row__wrap--space-top\">\n" +
    "                <h5 class=\"txt-blue-dark\">Hearth health</h5>\n" +
    "                <div class=\"row-image__wrap\">\n" +
    "                  <img class=\"row-image-icon-flex\" src=\"./assets/images/results-page/heart-orange.png\" alt=\"\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"row__wrap row__wrap--space-top\">\n" +
    "                <h5 class=\"txt-blue-dark\">Diet</h5>\n" +
    "                <div class=\"row-image__wrap\">\n" +
    "                  <img class=\"row-image-icon-flex\" src=\"./assets/images/results-page/cake-blue-dark.png\" alt=\"\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"row__wrap row__wrap--space-top\">\n" +
    "                <h5 class=\"txt-blue-dark\">Intellectual activity</h5>\n" +
    "                <div class=\"row-image__wrap\">\n" +
    "                  <img class=\"row-image-icon-flex\" src=\"./assets/images/results-page/horse-blue.png\" alt=\"\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "         </div>\n" +
    "       </div>\n" +
    "     </div>\n" +
    "   </div>\n" +
    "  <!--end section second-->\n" +
    "  \n" +
    "  <!--section third-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <img class=\"img\" src=\"./assets/images/results-page/img-results-1.png\" alt=\"\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section third-->\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p2\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p4\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>\n" +
    "");
}]);

angular.module("components/results/pages/result-p4.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p4.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__over\">\n" +
    "        <div class=\"txt-rubric__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-bold txt-gray\">Overview</div>\n" +
    "        </div>\n" +
    "        <div class=\"result-head__download-button\">\n" +
    "          <a href=\"\" class=\"download-button\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__title\">\n" +
    "        <h2 class=\"txt-blue-dark\">Next steps</h2>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <p class=\"sub-header-txt txt-black\">\n" +
    "            Now that you know your genetic risk it’s time\n" +
    "            to take the <span class=\"txt-bold\">next steps.</span>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--result-p2 progress-bar-->\n" +
    "  <div class=\"result-progressbar__wrap\">\n" +
    "    <ul class=\"progressbar-wrap\">\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "      <li class=\"progressbar-item\"></li>\n" +
    "      <li class=\"progressbar-item active\"></li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <h3 class=\"txt-blue-dark\">Talk to Genetic counselor</h3>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <p class=\"txt txt-black\">Do you have questions about your results or how to use them to make health decisions? Do you have questions about how to discuss your results with you family?  Our genetics counselors are available to help answer your questions.</p>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark\">Talking to a doctor</h3>\n" +
    "      </div>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <p class=\"txt txt-black\">If you are worried about memory loss, please make an appointment with your healthcare provider to assess your cognitive health. Also, you may want to discuss your concerns about your family history of Alzheimer’s disease or another dementia type if there is one in your family. Overall, your primary healthcare provider knows your overall health best.  It is good to check-in with them to discuss your ApoE test results so your ApoE genetic data can be paired with information about your other medical conditions.  Together you and your healthcare provider can develop a plan to modify your lifestyle and environmental factors to best optimize your cognitive health.  You should always consult a healthcare provider before making major lifestyle changes.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark\">Sharing with Family members</h3>\n" +
    "      </div>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <p class=\"txt txt-black\">\n" +
    "          Having the social support of your loved ones can help you as you begin implementing new lifestyle behaviors into your routine.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark\">\n" +
    "          Support system\n" +
    "        </h3>\n" +
    "      </div>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <p class=\"txt txt-black\">There are online communities that are available for individuals with an ApoE-e4 allele.  Joining one of these anonymous support groups may help you process your questions and concerns about your Alzheimer’s genetic risk.</p>\n" +
    "      </div>\n" +
    "      <div class=\"button__wrap button--center\">\n" +
    "        <button class=\"button-border-rounded button-border-rounded--blue\">See Scientific Details</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p3\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p5\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>");
}]);

angular.module("components/results/pages/result-p5.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p5.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__over\">\n" +
    "        <div class=\"txt-rubric__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-bold txt-gray\">Overview</div>\n" +
    "        </div>\n" +
    "        <div class=\"result-head__download-button\">\n" +
    "          <a href=\"\" class=\"download-button\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__title\">\n" +
    "        <h2 class=\"txt-blue-dark\">Science</h2>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <p class=\"sub-header-txt txt-black\">\n" +
    "            The Alzheimer’s ApoE test is a single gene test that\n" +
    "            looks at your genetic risk for Alzheimer’s disease.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section-first-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <h3 class=\"txt-blue-dark\">Learn about genetics</h3>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <p class=\"txt txt-black\">\n" +
    "          ApoE comes in three forms: ApoE-e2, ApoE-e3, and ApoE-e4.  Having a high risk copy of this gene (ApoE-e4) does not guarantee that you will develop Alzheimer’s disease. Likewise, possessing a copy of the lowest risk variant (ApoE-e2) does not mean you won’t develop Alzheimer’s disease.  Learning your ApoE -related genetic risk can be paired with your age, gender, medical health and lifestyle habits to help assess your Alzheimer’s disease risk. Knowing your overall risk can help you decide how aggressively you want to address your cognitive health. Visit Genetics Home Reference to learn more about ApoE.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      \n" +
    "      <!--section dropdown txt-->\n" +
    "      <div class=\"section-dropdown-txt__wrap section-dropdown-txt__wrap--border-bottom\" uib-accordion close-others=\"false\">\n" +
    "        \n" +
    "        <!--dropdown content first-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"cross-button-open__wrap\">\n" +
    "              <div class=\"cross-button-open\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"content-title__wrap\">\n" +
    "              <h2 class=\"txt-blue-dark\">What are Genes?</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              Inside the nucleus of each cell in the human body is a complex code of instructions for forming and sustaining life, called your genes. Each gene influences a specific trait, such as hair color. The gene is not the trait itself, but rather a factor that causes the organism to develop a specific trait.\n" +
    "              <div class=\"txt--indent\">\n" +
    "                Your genetic instruction manual is written with 4 chemicals – A (Adenine), T (Thymine), G (Guanine), and C (Cytosine) – that are paired together (A’s paired with T’s & C’s paired with G’s) in two separate chains that are oriented in opposite directions, like the northbound and southbound lanes on a highway.  These paired combinations of chemical code live opposite one another in a long line, fitting together like adjacent puzzle pieces.  The A/T and C/G base pairs attach to a backbone and face inward, connecting like rungs of a ladder that are twisted together to form an intertwined double helix.\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                Your genome has billions of combinations of these four letters, forming 20,000 sentences that code for about 20,000 proteins. Every three letter pairs forms a new genetic “word” that codes for a building block of a protein.  The code TGA means “stop”, thus functioning as a signal to the body that this is the end of this genetic coding sentence.\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                Each person has 23 chromosomes from their father and 23 from their mother, to make 23 chromosome pairs. During cell division, your DNA gets condensed into groupings called chromosomes. When cell division happens in your body, your helix divides and replicates itself, creating two double strands.\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                People have about 99.9% of their genetic code in common with one another. The most common genetic variation among people can be identified by single DNA building blocks called single nucleotide polymorphisms (SNPs). For example, a SNP may replace the nucleotide adenine (A) with the nucleotide cytosine (C) in a certain stretch of DNA. There are approximately 10 million SNPs in the human genome, or one every 300 nucleotides, typically in the DNA between genes. Most SNPs have no effect on health or development, but scientists use some SNPs as biological markers to locate genes that are associated with disease.  SNPs within a gene or in a regulatory region near a gene may play a more direct role in a disease by affecting the gene’s function.\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                Genes can come in different forms, called alleles.  For example, the Apolipoprotein E (ApoE) gene that is associated with Alzheimer’s disease has three possible alleles – e2, e3, and e4. You have two alleles for each gene, so for ApoE there are six possible genetic combinations a person can have: e2/e2, e2/e3, e3/e3, e2/e4, e3/e4, and e4/e4. You received one allele from your mother and one from your father. If both alleles match, such as e2/e2, you are said to be homozygous. If the two alleles differ, such as e3/e4, you are said to be heterozygous for that trait.  A person who is homozygous for a genetic trait will pass along that genetic code to their offspring.  A person who is heterozygous for the ApoE e4 allele has a 50% chance of passing along that allele to their offspring.\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                Each sentence in your genome is a specific gene that codes for a protein.  These proteins in your body are the building blocks of life, allowing you to breath, walk, think, eat, and more. While an error in some genes can lead directly to the development of a disease, not all diseases are determined solely by genetics.   The environment around you and your lifestyle can influence how the genome functions.  Some genes increase the risk of developing late-onset Alzheimer’s disease, while other genes are protective against Alzheimer’s.  However, with diet, exercise, stress management, proper sleep, educational stimulation, and socialization you can impact how these genes are expressed.  Such that, some people who develop Alzheimer’s disease do not carry the ApoE e4 risk allele, but are believed to have developed the disease due to other factors such as possible medical comorbidities, and environmental and lifestyle factors. While you currently cannot cure Alzheimer’s disease with lifestyle changes, you may be able to slow the progression of or delay the onset of the disease, which allows individuals more cognitively healthy years and a better quality of life.\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                Genome-wide Association Studies (GWAS) have identified common variations associated with disease. The resultant output is that when these multiple disease related genetic variants are combined together they provide a predictive ability across complex traits and diseases, called a Polygenic Risk Score (PRS).\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                Precision medicine involves providing a therapeutic approach to the whole person. By analyzing your personal genetics and biochemistry, physicians can tailor preventive and therapeutic medicine that will best optimize your unique overall health.  Alzheimer’s genetic testing provides a risk measure for Alzheimer’s disease long before the usual age of symptom onset, affording individuals time to act upon environmental and lifestyle factors, as well as other medical comorbidities that influence the onset of Alzheimer’s disease.\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                Visit <a class=\"txt-blue\" href=\"\">Genetics Home Reference</a> to learn more about ApoE.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--end dropdown content first-->\n" +
    "  \n" +
    "        <!--dropdown content second-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"cross-button-open__wrap\">\n" +
    "              <div class=\"cross-button-open\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"content-title__wrap\">\n" +
    "              <h2 class=\"txt-blue-dark\">What is a DNA?</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <p class=\"txt txt-black\">\n" +
    "              These numerous genes are put together to form an instructional code of DeoxyriboNucleic Acid or DNA. Your genes interact with each other and with the environment to determine your unique physical make-up. Your entire DNA make-up is called your genome. When it is unfolded it is 6 feet in length and is 30,000 times thinner than a strand of hair.\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--end dropdown content second-->\n" +
    "  \n" +
    "        <!--dropdown content third-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"cross-button-open__wrap\">\n" +
    "              <div class=\"cross-button-open\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"content-title__wrap\">\n" +
    "              <h2 class=\"txt-blue-dark\">How do genes and DNA function?</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <p class=\"txt txt-black\">\n" +
    "              While each of your human cells contains all your genetic information, different parts of your genetic information, or genome, are active in different cells.  Your body has 14 different types of cells, such as bone cells, hair cells, skin cells, blood cells, and nerve cells.  You can think of your DNA as your parts list and instruction manual for life.  It is so detailed that you could create a new you with this information.\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--end dropdown content third-->\n" +
    "      </div>\n" +
    "      <!-- end section dropdown txt-->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section-first -->\n" +
    "  \n" +
    "  <!--section-second-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <h3 class=\"txt-blue-dark\">How do we interpret your results?</h3>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <p class=\"txt txt-black\">\n" +
    "          ApoE comes in three forms: ApoE-e2, ApoE-e3, and ApoE-e4.  Having a high risk copy of this gene (ApoE-e4) does not guarantee that you will develop Alzheimer’s disease. Likewise, possessing a copy of the lowest risk variant (ApoE-e2) does not mean you won’t develop Alzheimer’s disease.  Learning your ApoE -related genetic risk can be paired with your age, gender, medical health and lifestyle habits to help assess your Alzheimer’s disease risk. Knowing your overall risk can help you decide how aggressively you want to address your cognitive health. Visit\n" +
    "          <a href=\"\" class=\"txt-blue\">Genetics Home Reference</a> to learn more about ApoE.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <!--section dropdown txt-->\n" +
    "      <div class=\"section-dropdown-txt__wrap section-dropdown-txt__wrap--border-bottom\" uib-accordion close-others=\"false\">\n" +
    "    \n" +
    "        <!--dropdown content first-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"cross-button-open__wrap\">\n" +
    "              <div class=\"cross-button-open\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"content-title__wrap\">\n" +
    "              <h2 class=\"txt-blue-dark\">What do my results mean to me?</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              Inside the nucleus of each cell in the human body is a complex code of instructions for forming and sustaining life, called your genes. Each gene influences a specific trait, such as hair color. The gene is not the trait itself, but rather a factor that causes the organism to develop a specific trait.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--end dropdown content first-->\n" +
    "    \n" +
    "        <!--dropdown content second-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"cross-button-open__wrap\">\n" +
    "              <div class=\"cross-button-open\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"content-title__wrap\">\n" +
    "              <h2 class=\"txt-blue-dark\">What is a DNA?</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              he ApoE test results are based on data for individuals of European descent.  If you are not of European descent, you are still expected to have a higher risk for developing Alzheimer’s disease than if you did not carry an ApoE-e4 allele. The exact percentage of risk may vary though from the percentages listed in your report. Also, non-genetic specific data demonstrates that older African Americans and Hispanics are more likely to develop Alzheimer’s disease than people of other ethnicities.\n" +
    "              <div class=\"txt--indent\">\n" +
    "                In addition, overall more women than men develop Alzheimer’s disease.  Researchers are still unsure how much of this is because women tend to live longer than men and how much is attributable to lifestyle differences between men and women. Also, the ApoE-e4 variant is attributable to a greater percent of risk for late-onset Alzheimer’s disease in women than men.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--end dropdown content second-->\n" +
    "    \n" +
    "        <!--dropdown content third-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"cross-button-open__wrap\">\n" +
    "              <div class=\"cross-button-open\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"content-title__wrap\">\n" +
    "              <h2 class=\"txt-blue-dark\">Test details</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <p class=\"txt txt-black\">\n" +
    "              The association between type-2 diabetes and Alzheimer’s disease is greater in ApoE-e4 carriers.1 Also, based on results from observational studies, managing midlife hypertension may be more impactful for reducing Alzheimer’s disease risk for ApoE-e4 carriers than for non-carriers. 2,3  Thus, monitoring blood pressure and working to prevent or manage type-2 diabetes is important for all, but carries great importance for individuals who carry and ApoE-e4 allele.\n" +
    "            </p>\n" +
    "            <div class=\"title__wrap\">\n" +
    "              <h3 class=\"txt-blue-dark\">References</h3>\n" +
    "            </div>\n" +
    "            <ul class=\"item-decimal\">\n" +
    "              <li class=\"txt__wrap\"><p class=\"txt txt-black\">Vagelatos NT, Eslick GD (2013) Type 2 diabetes as a risk factor for Alzheimer’s disease: the confounders, interactions, and neuropathology associated with this relationship. Epidemiological reviews 35, 152-160.</p>\n" +
    "              </li>\n" +
    "              <li class=\"txt__wrap\"><p class=\"txt txt-black\"> Rodrigue KM, Rieck JR, Kennedy KM et al. (2013) Risk factors for beta-amyloid deposition in healthy aging: vascular and genetic effects. JAMA Neurol 70, 600-606.\n" +
    "              </p>\n" +
    "              </li>\n" +
    "              <li class=\"txt__wrap\"><p class=\"txt txt-black\">Guo Z, Fratiglioni L, Viitanen M et al. (2001) Apolipoprotein E genotypes and the incidence of Alzheimer's disease among persons aged 75 years and older: variation by use of antihypertensive medication?American journal of epidemiology 153, 225-231.</p>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--end dropdown content third-->\n" +
    "      </div>\n" +
    "      <!-- end section dropdown txt-->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section-second-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p4\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p6\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>");
}]);

angular.module("components/results/pages/result-p6.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p6.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__over\">\n" +
    "        <div class=\"txt-rubric__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-bold txt-gray\">Overview</div>\n" +
    "        </div>\n" +
    "        <div class=\"result-head__download-button\">\n" +
    "          <a href=\"\" class=\"download-button\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__title\">\n" +
    "        <h2 class=\"txt-blue-dark\">Sharing with family</h2>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <p class=\"sub-header-txt txt-black\">\n" +
    "            You may want to share your results or your experience with family or friends\n" +
    "            so they understand the reason you are implementing new lifestyle behaviors.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"txt__wrap\">\n" +
    "          <p class=\"txt txt-blue-dark\">\n" +
    "            Having support can be very helpful when making behavior changes. Your relatives or friends may benefit\n" +
    "            from hearing about your experience, and may wish to consider ApoE testing themselves.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section-second-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "          <div class=\"img__wrap--float-right hide-table\">\n" +
    "            <ng-include src=\"'./assets/images/svg/cake-white-bigger.svg'\"></ng-include>\n" +
    "          </div>\n" +
    "          <h3 class=\"txt-blue\">Key points to consider before talking to\n" +
    "            friends or family about your results</h3>\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h5 class=\"txt-black\">Do you and they have the support in place if there are questions?\n" +
    "            </h5>\n" +
    "          </div>\n" +
    "          <div class=\"txt__wrap\">\n" +
    "            <p class=\"txt txt-black\">\n" +
    "              Your genetics, lifestyle, environment, other medical conditions, and age all play a role in your Alzheimer’s disease risk. Your lifestyle and environmental risk factors can be reduced by implementing brain healthy behavior changes, which may also reduce the risk if you have by any other medical factors influencing your Alzheimer’s risk.  Many brain healthy behaviors are also good for your heart health and inflammation.\n" +
    "            </p>\n" +
    "            <div class=\"txt--indent\">\n" +
    "              <p class=\"txt txt-black\">\n" +
    "                Having a copy of the ApoE e4 variant does not guarantee that you will develop Alzheimer’s disease, and not carrying a copy does not guarantee that you won’t develop Alzheimer’s disease. The results of this test do not diagnose Alzheimer’s disease or any other medical condition.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h5 class=\"txt-black\">It is possible for your relatives to have a different ApoE variant than you?\n" +
    "            </h5>\n" +
    "          </div>\n" +
    "          <div class=\"txt__wrap\">\n" +
    "            <p class=\"txt txt-black\">\n" +
    "              Whether you are male or female, you are equally likely to pass on a copy of ApoE e4 or inherit one.\n" +
    "              If you carry a single copy of ApoE-e4, there is a 50% chance your siblings and children carry one also. You can make lifestyle changes today to begin reducing your risk for Alzheimer’s disease or slowing the progression of memory decline.\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h3 class=\"txt-blue-dark\">\"You are not in this alone. ADx Healthcare provides\n" +
    "              genetics counselors to go over your report and\n" +
    "              answer any questions you have.\"\n" +
    "            </h3>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section-second-->\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p5\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p7\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>");
}]);

angular.module("components/results/pages/result-p7.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p7.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__over\">\n" +
    "        <div class=\"txt-rubric__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-bold txt-gray\">General Questions</div>\n" +
    "        </div>\n" +
    "        <div class=\"result-head__download-button\">\n" +
    "          <a href=\"\" class=\"download-button\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__title\">\n" +
    "        <h2 class=\"txt-blue\">Sharing with family</h2>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <p class=\"sub-header-txt txt-black\">\n" +
    "            However, most people with this result do not\n" +
    "            develop late-onset Alzheimer's disease.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <p class=\"txt txt-blue\">\n" +
    "          Consider discussing your risk with a healthcare professional, especially if you\n" +
    "          have a family history or other risk factors for this condition.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section first-->\n" +
    "  <div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <!--section dropdown txt-->\n" +
    "      <div class=\"section-dropdown-txt__wrap section-dropdown-txt__wrap--border-bottom\" uib-accordion close-others=\"false\">\n" +
    "    \n" +
    "        <!--dropdown content first-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"cross-button-open__wrap\">\n" +
    "              <div class=\"cross-button-open\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"content-title__wrap\">\n" +
    "              <h2 class=\"txt-blue-dark\">Does this result mean I am not at risk for developing Alzheimer’s disease?</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              Everyone has some level of risk for Alzheimer’s disease. Your risk is a combination of genetics, lifestyle, environment, other medical conditions, and age. The genetic related risk for Alzheimer’s disease increases based on ApoE genotype, with e2/e2 having the lowest genetic risk and e4/e4 having the highest genetic risk.\n" +
    "              <div class=\"txt--indent\">\n" +
    "                (graphic or table here to show the increase of risk) e2/e2, e2/e3, e3/e3, e3/e4, and e4/e4.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--end dropdown content first-->\n" +
    "    \n" +
    "        <!--dropdown content second-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"cross-button-open__wrap\">\n" +
    "              <div class=\"cross-button-open\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"content-title__wrap\">\n" +
    "              <h2 class=\"txt-blue-dark\">Who will see my test results?</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              Your test results are delivered privately to you.  It is up to you whom you share them with after that.  However, we encourage you to discuss them with your primary health care provider or one of our genetics counselors if you have any questions about your results or how you can take action to reduce your Alzheimer’s risk.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        <!--end dropdown content second-->\n" +
    "    \n" +
    "        <!--dropdown content third-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"cross-button-open__wrap\">\n" +
    "              <div class=\"cross-button-open\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"content-title__wrap\">\n" +
    "              <h2 class=\"txt-blue-dark\">What else can cause late-onset Alzheimer’s beside the genetics?</h2>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <p class=\"txt txt-black\">\n" +
    "              Late-onset Alzheimer’s disease risk is influenced by your genetics, age, other medical conditions, and lifestyle and environmental factors.  For example, as you age from 65 to 85, your risk of Alzheimer’s disease increases.\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--end dropdown content third-->\n" +
    "      </div>\n" +
    "      <!-- end section dropdown txt-->\n" +
    "    </div>\n" +
    "  <!--end section first-->\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p6\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"results.p8\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("components/results/pages/result-p8.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p8.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__over\">\n" +
    "        <div class=\"txt-rubric__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-bold txt-gray\">Overview</div>\n" +
    "        </div>\n" +
    "        <div class=\"result-head__download-button\">\n" +
    "          <a href=\"\" class=\"download-button\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__title\">\n" +
    "        <h2 class=\"txt-blue-dark\">Welcome back</h2>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <p class=\"sub-header-txt txt-black\">\n" +
    "            You can view your results at anytime, or choose one of the options below.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap button--center\">\n" +
    "          <button class=\"bt-round bt-round--blue\">View results</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "  <!--section first-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <h2 class=\"txt-blue txt-center\">More products for your health</h2>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"img__wrap\">\n" +
    "            <ng-include src=\"'./assets/images/svg/notebook-border-round-box-shadow.svg'\"></ng-include>\n" +
    "          </div>\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h3 class=\"txt-blue-dark txt-center\">Genetic counseling</h3>\n" +
    "          </div>\n" +
    "          <div class=\"sub-header-txt__wrap\">\n" +
    "            <div class=\"sub-header-txt sub-header-txt--small txt-black txt-center\">\n" +
    "              ADx is here to answer any questions you have about the test and your results. Contact us about scheduling a genetic counseling session now.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"button__wrap button--center\">\n" +
    "            <button class=\"bt-round bt-round--blue-dark\">View results</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"img__wrap\">\n" +
    "            <ng-include src=\"'./assets/images/svg/flask-border-round-box-shadow.svg'\"></ng-include>\n" +
    "          </div>\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h3 class=\"txt-blue-dark txt-center\">Refer a friend</h3>\n" +
    "          </div>\n" +
    "          <div class=\"sub-header-txt__wrap\">\n" +
    "            <div class=\"sub-header-txt sub-header-txt--small txt-black txt-center\">\n" +
    "              Worried about someone else in your family or know someone else who could benefits from taking the ADx ApoE genetic test?\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"button__wrap button--center\">\n" +
    "            <button class=\"bt-round bt-round--blue\">View results</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"img__wrap\">\n" +
    "            <ng-include src=\"'./assets/images/svg/table-border-round-box-shadow.svg'\"></ng-include>\n" +
    "          </div>\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h3 class=\"txt-blue-dark txt-center\">Contact us</h3>\n" +
    "          </div>\n" +
    "          <div class=\"sub-header-txt__wrap\">\n" +
    "            <div class=\"sub-header-txt sub-header-txt--small txt-black txt-center\">\n" +
    "              ADx is dedicated to helping you with any questions you may have.\n" +
    "              Contact us with your questions or send us comments!\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"button__wrap button--center\">\n" +
    "            <button class=\"bt-round bt-round--orange\">View results</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section first-->\n" +
    "</div>");
}]);

angular.module("components/results/results.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/results.tpl.html",
    "<!--this is new-->\n" +
    "<div class=\"pre-result\" ng-if=\"preResult\">\n" +
    "  <div class=\"result-head pre-result-head\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"pre-result-head__wrap\">\n" +
    "        <div class=\"txt-rubric__wrap\">\n" +
    "          <div class=\"sub-header-txt txt-bold txt-gray\">Pre-Result</div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-lg-12 title__wrap\">\n" +
    "            <h2 class=\"txt-blue\">What will my results tell me?</h2>\n" +
    "          </div>\n" +
    "          <div class=\"pre-result-head__content\">\n" +
    "            <div class=\"col-xs-12 col-sm-7\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <div class=\"sub-header-txt txt-black\">\n" +
    "                  <span class=\"txt-bold\">Your result is ready.</span> Before you get started, please read the following information so you can better understand what your Alzheimer’s ApoE genetic report does and does not tell you.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"hide-mobile col-xs-12 col-sm-5\">\n" +
    "              <div class=\"pre-result-head__img\">\n" +
    "                <div class=\"img-bgc-wrap-middle__rounded img-bgc-wrap-middle__rounded--md-small img-bgc-wrap-middle__rounded--white\">\n" +
    "                  <ng-include class=\"svg-inner-rounded-middle svg-inner-rounded-middle--larger\" src=\"'./assets/images/svg/svg-table.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section first with chart-->\n" +
    "  <div class=\"section__wrap section__wrap--small-pad-top\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"container-md\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h2 class=\"txt-blue txt-center\">In summery</h2>\n" +
    "        </div>\n" +
    "        <div class=\"txt__wrap\">\n" +
    "          <div class=\"pre-result-section-first__sub-header\">\n" +
    "            <div class=\"sub-header-txt txt-black txt-center\">\n" +
    "              Alzheimer's disease is characterized by memory loss,\n" +
    "              cognitive decline, and personality changes.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"txt txt-black txt-center\">\n" +
    "            Late-onset Alzheimer's disease is the most common form of Alzheimer's disease, developing after age 65. Many factors, including genetics, can influence a person's chances of developing the condition. This test includes the most common genetic variant associated with late-onset Alzheimer's disease.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"pre-result-section-first__image\">\n" +
    "        <img class=\"img\" src=\"./assets/images/results-page/img-results-1.png\" alt=\"\">\n" +
    "      </div>\n" +
    "      <div class=\"pre-result-section-first__chart\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h3 class=\"txt-blue-dark txt-center\">Lifetime Risk (%) for Alzheimer’s disease by Age and ApoE Genotype</h3>\n" +
    "        </div>\n" +
    "        <div class=\"chart__wrap\">\n" +
    "          <ng-include src=\"'./assets/images/charts/chart-bar-1.svg'\"></ng-include>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section first with chart-->\n" +
    "  \n" +
    "  <!--section second with boxes-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard container-lg--dashboard--not-space-exlg\">\n" +
    "      <div class=\"boxes-row__wrap\">\n" +
    "        <div class=\"boxes__wrap boxes__wrap--large\">\n" +
    "          <div class=\"box-half-column box-shadow\">\n" +
    "            <div class=\"box-image__wrap\">\n" +
    "              <img class=\"img\" src=\"./assets/images/stop-green.png\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"box-title__wrap\">\n" +
    "              <h5 class=\"txt-blue txt-center\">Low risk does not mean no risk.</h5>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt__wrap\">\n" +
    "              <div class=\"sub-header-txt txt-black sub-header-txt--small txt-center\">\n" +
    "                Some people with the lowest risk Alzheimer’s ApoE genotype (ApoE-e2/e2) still develop Alzheimer’s disease.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-half-column box-shadow\">\n" +
    "            <div class=\"box-image__wrap boxes__wrap--large\">\n" +
    "              <img class=\"img\" src=\"./assets/images/cross-blue.png\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"box-title__wrap\">\n" +
    "              <h5 class=\"txt-blue txt-center\">High risk does not mean certain development of Alzheimer’s disease.</h5>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt__wrap\">\n" +
    "              <div class=\"sub-header-txt txt-black sub-header-txt--small txt-center\">\n" +
    "                Some people with the highest risk Alzheimer’s ApoE genotype (ApoE-e4/e4) never develop Alzheimer’s disease.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"boxes__wrap boxes__wrap--large\">\n" +
    "          <div class=\"box-half-column box-shadow\">\n" +
    "            <div class=\"box-image__wrap\">\n" +
    "              <img class=\"img\" src=\"./assets/images/exclamation-point-silver.png\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"box-title__wrap\">\n" +
    "              <h5 class=\"txt-blue txt-center\">Other factors influence your risk.</h5>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt__wrap\">\n" +
    "              <div class=\"sub-header-txt txt-black sub-header-txt--small txt-center\">\n" +
    "                Learning your ApoE -related genetic risk can be paired with your age, gender, medical health and lifestyle habits to help assess your overall Alzheimer’s disease risk, and identify areas where you may be able to take action to reduce your risk or delay the onset of Alzheimer’s disease.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-half-column box-shadow\">\n" +
    "            <div class=\"box-image__wrap boxes__wrap--large\">\n" +
    "              <img class=\"img\" src=\"./assets/images/exclamation-point-yellow.png\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"box-title__wrap\">\n" +
    "              <h5 class=\"txt-blue txt-center\">Knowledge is power.</h5>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt__wrap\">\n" +
    "              <div class=\"sub-header-txt txt-black sub-header-txt--small txt-center\">\n" +
    "                Knowing your Alzheimer’s disease risk can help you decide how aggressively you want to make lifestyle changes that can potentially improve your cognitive health.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section second with boxes-->\n" +
    "  \n" +
    "  <!--section third with boxes agreed-submit-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard container-lg--dashboard--not-space-exlg\">\n" +
    "      <div class=\"title__wrap title-wrap__pre-results--left-space\">\n" +
    "        <div class=\"sub-header-txt sub-header-txt--small txt-black\">How do you want to view your results? Select one of the options.</div>\n" +
    "      </div>\n" +
    "      <form action=\"\">\n" +
    "        <div class=\"boxes__wrap boxes__wrap--large boxes__wrap--padding-top\">\n" +
    "          <div class=\"box-half-column box-shadow\">\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"box-checkbox__wrap checkbox\">\n" +
    "                <input type=\"checkbox\" id=\"checkbox-receive\" class=\"checkbox-input\">\n" +
    "                <label for=\"checkbox-receive\" class=\"checkbox-label\"></label>\n" +
    "              </div>\n" +
    "              <div class=\"box-txt__wrap--inline-block\">\n" +
    "                <div class=\"sub-header-txt txt-black sub-header-txt--small\">\n" +
    "                  <span class=\"txt-bold\">I would like to wait to receive my results with a genetic counselor.</span>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    Select this option to consent to sharing your report with the genetics counselor and to schedule a counseling session.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-half-column box-shadow\">\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"box-checkbox__wrap checkbox\">\n" +
    "                <input type=\"checkbox\" id=\"checkbox-results\" class=\"checkbox-input\">\n" +
    "                <label for=\"checkbox-results\" class=\"checkbox-label\"></label>\n" +
    "              </div>\n" +
    "              <div class=\"box-txt__wrap--inline-block\">\n" +
    "                <div class=\"sub-header-txt txt-black sub-header-txt--small\">\n" +
    "                  <span class=\"txt-bold\">I would like to review the results on my own..</span> I understand that I may still schedule a genetic counseling appointment if I have any questions after I view my results.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"row box-row-padding\">\n" +
    "              <div class=\"box-checkbox__wrap checkbox\">\n" +
    "                <input type=\"checkbox\" id=\"checkbox-private\" class=\"checkbox-input\">\n" +
    "                <label for=\"checkbox-private\" class=\"checkbox-label\"></label>\n" +
    "              </div>\n" +
    "              <div class=\"box-txt__wrap--inline-block\">\n" +
    "                <div class=\"sub-header-txt txt-black sub-header-txt--small\">\n" +
    "                  I am in a private, comfortable place and wish to view my results\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--large-top button--center\">\n" +
    "          <button ng-click=\"preResultSumbit()\" type=\"submit\" class=\"bt-round bt-round--large bt-round--blue\">I consent</button>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section third with boxes agreed-submit-->\n" +
    "</div>\n" +
    "<div ui-view ng-if=\"!preResult\"></div>\n" +
    "<!--this is new end-->\n" +
    "\n" +
    "<!--this is old-->\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"error\" ng-show=\"noProducts\">You have not purchased any products</div>\n" +
    "  <div class=\"error\" ng-show=\"!noProducts && !consentAgreed\">You did not consent to viewing the results</div>\n" +
    "  <div ng-show=\"consentAgreed\">\n" +
    "    <div ng-repeat=\"result in results\">\n" +
    "      <p>Product id: {{result.id}}</p>\n" +
    "      <p>Product: {{result.product}}</p>\n" +
    "      <p>Insight score: {{result.result.insight_score}}</p>\n" +
    "      <p>Last update: {{result.last_updated}}</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"popup\" ng-if=\"!noProducts && needPopup && !consentAgreed\">\n" +
    "  <div class=\"popup-content\" ng-class=\"needPopup = 'popup-content-animation'\">\n" +
    "    <div class=\"popup-condition-txt scrollme\" ng-scrollbar is-bar-shown=\"barShown\">\n" +
    "      <p class=\"popup-condition-txt__inner\">\n" +
    "        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus impedit pariatur quis sit unde, veniam? Accusamus aut facilis in labore laboriosam necessitatibus nisi optio porro quasi, ratione voluptas voluptatem, voluptatum!</span><span>Architecto culpa, deleniti dicta dolorum earum labore odit recusandae rerum sit! A at dolorem eligendi itaque perspiciatis vel voluptate! A consequuntur debitis esse ex illo inventore libero porro sed voluptates.</span><span>Architecto assumenda consequatur cupiditate dolorem, exercitationem explicabo fugit in necessitatibus quo! A dicta dolorem eaque error ipsam ipsum magnam mollitia nam optio provident quam quos, reprehenderit sunt totam vitae voluptate.</span><span>Aliquam aut deleniti dicta dolorem error esse exercitationem, hic inventore ipsum minus pariatur perferendis provident quaerat qui sequi veniam voluptate. Accusamus, blanditiis cumque dicta molestiae quibusdam repellat similique sunt vero.</span><span>Ab deserunt dolorem eos eveniet fugit labore laudantium necessitatibus, praesentium quia quis quos, repudiandae, voluptates! Alias dolores molestias quaerat qui quibusdam? Aperiam, ipsum minus. Ab consequuntur eaque iusto nemo rem?</span><span>A amet atque beatae, eligendi hic in itaque nesciunt quas repudiandae tempore totam veniam voluptate. Adipisci alias aliquid at exercitationem ipsam magni maiores nesciunt, obcaecati officiis provident suscipit tenetur vitae.</span><span>At excepturi mollitia odio. Beatae dolor esse explicabo incidunt iusto libero minus! Accusantium distinctio hic inventore itaque necessitatibus quidem reprehenderit sapiente tempore temporibus voluptatibus. Commodi deleniti sed sunt! Amet, aperiam!</span><span>Accusamus delectus magnam totam. Deleniti eaque et facilis fuga, incidunt nam natus officia quia velit veritatis. Animi autem consequatur ea illo veniam voluptatem. Alias dolorum in necessitatibus pariatur possimus quibusdam.</span><span>Adipisci animi assumenda at corporis dicta, dolor doloremque eaque error et ex exercitationem id ipsa labore laboriosam laborum nisi non nulla numquam odit quisquam repudiandae similique sit soluta tenetur vero.</span><span>Alias, aut cumque debitis delectus impedit magni nulla obcaecati odit quaerat qui, quidem rem suscipit totam. A adipisci architecto distinctio, eos est in iste minima necessitatibus, obcaecati sapiente sequi, unde!</span>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <form class=\"form-popup\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <div class=\"form-check\">\n" +
    "            <label class=\"i-checks\">\n" +
    "              <input type=\"checkbox\" ng-model=\"checked\" required> <span>I agree</span>\n" +
    "            </label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "          <button class=\"btn btn-primary\" type=\"button\" ng-click=\"agree(checked)\">OK</button>\n" +
    "          <button class=\"btn btn-warning\" type=\"button\" ng-click=\"noAgree()\">Cancel</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "  <div class=\"popup-background\" ng-class=\"needPopup = 'popup-background-animation'\"></div>\n" +
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
    "          <div class=\"header-nav__mobile-menu hide-desktop\">\n" +
    "            <div class=\"mobile-button\" ng-click=\"showMenu()\" ng-class=\"{'toggle': show}\">\n" +
    "              <span class=\"line-1\"></span>\n" +
    "              <span class=\"line-2\"></span>\n" +
    "              <span class=\"line-3\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"mobile-menu\" ng-class=\"{'mobile-menu-show-anim': show}\">\n" +
    "              \n" +
    "              <!--mobile menu-->\n" +
    "              <div class=\"mobile-menu__wrap\" ng-class=\"{'mobile-menu-show': show}\">\n" +
    "                <nav class=\"header-nav__wrap\">\n" +
    "                  <ul class=\"header-nav-wrap__inner\">\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ui-sref=\"products\" class=\"header-nav-link\">Products</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ui-sref=\"about\" class=\"header-nav-link\">About</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ui-sref=\" \" class=\"header-nav-link\">Science</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ui-sref=\"FAQ\" class=\"header-nav-link\">FAQ</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ui-sref=\"contact\" class=\"header-nav-link\">Contact</a>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "                </nav>\n" +
    "                <div class=\"header__button\">\n" +
    "                  <div class=\"button__login button-anim\">\n" +
    "                    <a ui-sref=\"login\" class=\"bt-round bt-round--blue\"><span class=\"bt-content\">Sign-in/Join</span></a>\n" +
    "                  </div>\n" +
    "                  <div class=\"button__purchase button-anim\">\n" +
    "                    <a ui-sref=\"products.pre-purchase\" class=\"bt-round bt-round--blue-dark\"><span class=\"bt-content\">Purchase</span></a>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <!--end mobile menu-->\n" +
    "              \n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <!--desktop menu-->\n" +
    "          <nav class=\"header-nav__wrap hide-mobile\">\n" +
    "            <ul class=\"header-nav-wrap__inner\">\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"products\" class=\"header-nav-link txt-small txt-bold\">Products</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"about\" class=\"header-nav-link txt-small txt-bold\">About</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\" \" class=\"header-nav-link txt-small txt-bold\">Science</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"FAQ\" class=\"header-nav-link txt-small txt-bold\">FAQ</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"contact\" class=\"header-nav-link txt-small txt-bold\">Contact</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </nav>\n" +
    "          <div class=\"header__button hide-mobile\">\n" +
    "            <div class=\"button__login\">\n" +
    "              <a ui-sref=\"login\" class=\"bt-round bt-round-lg bt-round--blue\"><span class=\"txt txt-small\">Sign-in/Join</span></a>\n" +
    "            </div>\n" +
    "            <div class=\"button__purchase\">\n" +
    "              <a ui-sref=\"products.pre-purchase\" class=\"bt-round bt-round--blue-dark\"><span class=\"txt txt-small\">Purchase</span></a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          \n" +
    "          <!--end desktop menu-->\n" +
    "          \n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</header>");
}]);

angular.module("shared/side-navbar/side-navbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/side-navbar/side-navbar.tpl.html",
    "<nav class=\"side-navbar\" ng-class=\"{'open': show}\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "      <!--logo header-->\n" +
    "      <div class=\"side-navbar__logo\">\n" +
    "        <a ui-sref=\"home\" class=\"header-logo__link\">\n" +
    "          <img class=\"logo-img\" src=\"./assets/images/logo-img.png\" alt=\"\">\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <!--end logo header-->\n" +
    "      \n" +
    "      <!--mobile button-->\n" +
    "      <div class=\"side-navbar__mobile-button hide-desktop-md\">\n" +
    "        <div class=\"mobile-button\" ng-click=\"showMenu()\" ng-class=\"{'toggle': show}\">\n" +
    "          <span class=\"line-1\"></span>\n" +
    "          <span class=\"line-2\"></span>\n" +
    "          <span class=\"line-3\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!--end mobile button-->\n" +
    "      \n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"side-navbar__account\">\n" +
    "        <div class=\"side-navbar-account__name\">\n" +
    "          <div class=\"txt txt-medium txt-blue-dark txt-ellipsis\">\n" +
    "            {{ user.first_name }}\n" +
    "            {{ user.last_name }}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"side-navbar-account__button\">\n" +
    "          <a ui-sref=\"profile\" class=\"button-circle\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n" +
    "          <button ng-click=\"logout()\" class=\"button-circle\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"side-navbar__navigation\">\n" +
    "        <div class=\"side-navbar-navigation__wrap\">\n" +
    "          <div class=\"bgc-wrap-content bgc-wrap-content--blue bgc-wrap-content--justify-left\">\n" +
    "            <div class=\"status-icon__wrap\">\n" +
    "              <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"status-txt__wrap\">\n" +
    "              <div class=\"txt\">Your result</div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"side-navbar-navigation__link\">\n" +
    "            <ul class=\"side-navbar-navigation-link__wrap\">\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref=\"results.p1\" class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">1</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt txt--small txt-blue-dark\">Your result</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref=\"results.p2\" class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">2</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt txt--small txt-blue-dark\">About Alzheimer’s disease</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref=\"results.p3\" class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">3</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt txt--small txt-blue-dark\">Lifestyle & other factor</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref=\"results.p4\" class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">4</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt txt--small txt-blue-dark\">Next steps</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"side-navbar-navigation-link__wrap\">\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a href=\"\" class=\"side-navbar__link\">\n" +
    "                  <span class=\"link-icon-inline dna\"></span>\n" +
    "                  <span class=\"txt txt-black\">Science</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a href=\"\" class=\"navbar-link\">\n" +
    "                  <span class=\"link-icon-inline users\"></span>\n" +
    "                  <span class=\"txt txt-black\">Share results</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a href=\"\" class=\"navbar-link\">\n" +
    "                  <span class=\"link-icon-inline question\"></span>\n" +
    "                  <span class=\"txt txt-black\">General questions</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>");
}]);
