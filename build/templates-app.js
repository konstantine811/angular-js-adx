angular.module("templates-app", ["components/about/about.tpl.html", "components/change_password/change_password.tpl.html", "components/dashboard/dashboard.tpl.html", "components/faq/faq.tpl.html", "components/forgot_password/forgot_password.tpl.html", "components/home/home.tpl.html", "components/legal/legal.tpl.html", "components/login/login.tpl.html", "components/master/master_signedin.tpl.html", "components/master/master.tpl.html", "components/master/side-navbar.tpl.html", "components/products/pages/about-products.tpl.html", "components/products/products.tpl.html", "components/products/productsDetail.tpl.html", "components/profile/profileEdit.tpl.html", "components/profile/profileView.tpl.html", "components/references/references.tpl.html", "components/register/register.tpl.html", "components/results/pages/partials/info-products.tpl.html", "components/results/pages/prePurchase.tpl.html", "components/results/pages/result-consent.tpl.html", "components/results/pages/result-inconclusive.tpl.html", "components/results/pages/result-p1.tpl.html", "components/results/pages/result-p2.tpl.html", "components/results/pages/result-p3.tpl.html", "components/results/pages/result-p4.tpl.html", "components/results/pages/result-questions.tpl.html", "components/results/pages/result-science.tpl.html", "components/results/pages/result-sharing.tpl.html", "components/results/pages/result-view.tpl.html", "components/results/pages/sequencingStatus.tpl.html", "components/results/results.tpl.html", "components/science/science.tpl.html", "components/verify_email/verify_email.tpl.html", "shared/footer/footer.tpl.html", "shared/header/header.tpl.html", "templates/care_questions.tpl.html"]);

angular.module("components/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/about/about.tpl.html",
    "<update-meta property=\"og:title\" content=\"ADx Healthcare - About\"></update-meta>\n" +
    "<update-meta name=\"twitter:title\" content=\"ADx Healthcare - About\"></update-meta>\n" +
    "\n" +
    "<section class=\"about-page-header\">\n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div uib-carousel active=\"active\"  no-wrap=\"false\">\n" +
    "      <div uib-slide index=\"0\">\n" +
    "        <div class=\"slider__wrap slider__wrap--lg-padding align-items--center container-flex\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"about-page-header__txt\">\n" +
    "              <div class=\"anim-content-transition txt-left\">\n" +
    "                <h1>Our mission</h1>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap anim-content-transition\">\n" +
    "                <div class=\"txt txt-left\">\n" +
    "                  At ADx Healthcare, we  provide individuals, families, and healthcare providers with answers for late-onset Alzheimer's disease. We also  contribute to the scientific advancement of late-onset Alzheimer's disease healthcare through collaborative technology offerings and research contributions.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"button__wrap text-left anim-content-transition\">\n" +
    "                <a ui-sref=\"master.science\" class=\"button-border-rounded button-border-rounded--small-line-height\"><span class=\"txt-middle\">Learn about the science behind our platform</span></a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column hide-xs-mobile anim-content-transition hide-mobile\">\n" +
    "            <div class=\"about-page-header__image\">\n" +
    "              <ng-include class=\"img-large\" src=\"'./assets/images/svg/medical-bgc-drop-dark.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div uib-slide index=\"1\">\n" +
    "        <div class=\"slider__wrap slider__wrap--lg-padding align-items--center container-flex\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"about-page-header__txt\">\n" +
    "              <div class=\"anim-content-transition txt-left\">\n" +
    "                <div class=\"title-first\">ADx Healthcare</div>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap anim-content-transition\">\n" +
    "                <div class=\"txt txt-left\">\n" +
    "                  ADx Healthcare is a physician-owned company that provides individuals with personal access to their medical and genetic information by offering private pay testing, while still providing the highest standard of patient care.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column hide-xs-mobile anim-content-transition hide-mobile\">\n" +
    "            <div class=\"about-page-header__image\">\n" +
    "              <ng-include class=\"img-large\" src=\"'./assets/images/svg/adx-dropped.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div uib-slide index=\"2\">\n" +
    "        <div class=\"slider__wrap slider__wrap--lg-padding align-items--center container-flex\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"about-page-header__txt\">\n" +
    "              <div class=\"anim-content-transition txt-left\">\n" +
    "                <div class=\"title-first\">Our offerings</div>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap anim-content-transition\">\n" +
    "                <div class=\"txt txt-left\">\n" +
    "                  In addition to offering Alzheimer’s disease genetic testing, our board certified neuropathologist provides brain autopsy services to families and loved ones seeking definitive answers and closure as provided through a conclusive, post-mortem dementia type diagnosis.\n" +
    "                </div>\n" +
    "                <div class=\"button__wrap text-left anim-content-transition\">\n" +
    "                <a href=\"https://adxhealthcare.com/product/brain-autopsy/\" target=\"_blank\" class=\"button-border-rounded button-border-rounded--small-line-height\"><span class=\"txt-middle\">ADx Services</span></a>\n" +
    "              </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column hide-xs-mobile anim-content-transition hide-mobile\">\n" +
    "            <div class=\"about-page-header__image\">\n" +
    "              <ng-include class=\"img-large\" src=\"'./assets/images/svg/human-health-dropped.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<div class=\"container-fluid container-fluid--section\">\n" +
    "  \n" +
    "  <!--sectoin second-->\n" +
    "  <div class=\"about-section-second\">\n" +
    "    <div class=\"section-box-shadow section-box-shadow--space-inner section-box-shadow--without-space-top\">\n" +
    "      <div class=\"container-lg\">\n" +
    "        <h1 class=\"txt-blue anim-content-transition txt-center\">Our values</h1>\n" +
    "        <div class=\"img__wrap anim-content-transition\">\n" +
    "          <ng-include class=\"about-img-middle\" src=\"'./assets/images/svg/heart-protection.svg'\"></ng-include>\n" +
    "        </div>\n" +
    "        <div class=\"row row--space-top\">\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <h4 class=\"txt-blue-dark txt-center-sm\">Responsibility</h4>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                Your case is carefully reviewed by an independent physician to determine if late-onset Alzheimer’s disease genetic testing is right for you. If needed, a genetic counselor or physician may contact you to ask some additional questions. We are committed to taking the extra step to ensure we are offering late-onset Alzheimer’s disease genetic testing to individuals who understand the benefits and limitations of testing.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <h4 class=\"txt-blue-dark txt--space-top-middle-sm txt-center-sm\">Privacy</h4>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                We will not use your personal information for research without your written consent.  Likewise, we will never share or sell your personal information to anyone.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row row--space-top\">\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <h4 class=\"txt-blue-dark txt-center-sm\">Collaborations</h4>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                The ADx Healthcare team has partnerships with researchers, physicians, and scientists who are continually engaged in research and patient care, aimed at improving the understanding of late-onset Alzheimer's disease. Likewise, through both time and monetary assistance, we aid local and national Alzheimer’s organizations’ efforts for education, support, and advocacy for Alzheimer’s disease and other dementias.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <h4 class=\"txt-blue-dark txt--space-top-middle-sm txt-center-sm\">Action</h4>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                Our doctors and scientists participate in Alzheimer’s research to develop standards of care for both detection and treatment.The team at ADx Healthcare is committed to helping individuals and families learn their late-onset Alzheimer’s disease genetic risk and improving their cognitive health.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row row--space-top\">\n" +
    "          <div class=\"col-sm-12\">\n" +
    "            <div class=\"section-bgc--silver section-bgc--space-both\">\n" +
    "              <h4 class=\"txt-blue-dark txt-center\">Empowerment</h4>\n" +
    "              <div class=\"txt--indent-small\">\n" +
    "                <p class=\"txt-middle txt-black txt-center\">\n" +
    "                  We want to provide individuals who want to know their genetic risk with the knowledge and tools to make behavior changes to improve their cognitive health. Learn your risk, so you can start making lifestyle changes that may improve your cognitive health.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end sectoin second-->\n" +
    "  \n" +
    "  <!--section third-->\n" +
    "  <div class=\"about-section-third\">\n" +
    "    <div class=\"section-box section-box--blue section-box--space-out-top section-box--space-only-height-sm\">\n" +
    "      <div class=\"container-lg\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"img-bgc-wrap-middle__rounded img-bgc-wrap-middle__rounded--white-2 img-bgc-wrap-middle__rounded--md-small\">\n" +
    "              <ng-include class=\"svg-inner-rounded-middle svg-inner-rounded-middle--logo\" src=\"'assets/images/svg/ADXHealth-icon.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <h1 class=\"txt-blue-dark txt-center txt--space-top-sm\">Careers at ADx</h1>\n" +
    "            <div class=\"txt--indent-small txt-center\">\n" +
    "              <p class=\"txt\">ADx Healthcare is dedicated to providing answers for Alzheimer's disease questions about risk and treatment.\n" +
    "                If you are interested in a rewarding career that puts you in the middle of the cutting edge science for late-onset Alzheimer's disease, please contact our team to learn about staff position openings.</p>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center anim-content-transition\">\n" +
    "              <a href=\"mailto:carrers@adxhealthcare.com\" class=\"button-border-rounded button-border-rounded--small-line-height\"><span class=\"txt-middle\">Careers</span></a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section third-->\n" +
    "  \n" +
    "  <!--section fourth with map-->\n" +
    "  <div id=\"contacts\" class=\"about-section-fourth\">\n" +
    "   <div class=\"about-section-fourth_form-map-overlap\">\n" +
    "     <h2 class=\"txt-blue-dark txt-center\">Contact us</h2>\n" +
    "     <div class=\"sub-header-txt__wrap\">\n" +
    "       <div class=\"txt-large txt-blue txt-center txt-medium\">\n" +
    "         We are always within your reach. Send us a message and we'll respond as soon as possible.\n" +
    "       </div>\n" +
    "     </div>\n" +
    "     <form action=\"https://formspree.io/support@adxhealthcare.com \" method=\"POST\" class=\"form-space-top\">\n" +
    "       <div class=\"form-group-space-top\">\n" +
    "         <input class=\"form-control form-control-silver-border\" type=\"text\" placeholder=\"Name\" name=\"name\">\n" +
    "       </div>\n" +
    "       <div class=\"form-group-space-top\">\n" +
    "         <input class=\"form-control form-control-silver-border\" type=\"text\" placeholder=\"Email adress\" name=\"email\">\n" +
    "       </div>\n" +
    "       <div class=\"form-group-space-top\">\n" +
    "         <input class=\"form-control form-control-silver-border\" type=\"text\" placeholder=\"Subject\" name=\"subject\">\n" +
    "       </div>\n" +
    "       <div class=\"form-group-space-top\">\n" +
    "         <textarea rows=\"4\" cols=\"45\" class=\"form-control form-control-silver-border\" type=\"text\" placeholder=\"Message\" name=\"message\"></textarea>\n" +
    "       </div>\n" +
    "       <div class=\"button__wrap button--center\">\n" +
    "         <button type=\"submit\" class=\"bt-round bt-round--blue\">Contact us</button>\n" +
    "       </div>\n" +
    "     </form>\n" +
    "   </div>\n" +
    "    <div class=\"about-section-fourth__data-map-overlap\">\n" +
    "      <p class=\"txt txt-bold\">Customer Service</p>\n" +
    "      <!--<p class=\"txt\">Email:</p>-->\n" +
    "      <p class=\"txt\"><a href=\"mailto:support@adxhealthcare.com\">support@adxhealthcare.com</a></p>\n" +
    "      <p class=\"txt\">Phone: 855-514-2273</p>\n" +
    "      <div class=\"txt--indent-small\">\n" +
    "        <p class=\"txt\">Corporate Office</p>\n" +
    "        <p class=\"txt\">3614 Meridian Street</p>\n" +
    "        <p class=\"txt\">Suite 100</p>\n" +
    "        <p class=\"txt\">Bellingham, WA 98225</p>\n" +
    "        <p class=\"txt\">United States</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section fourth with map-->\n" +
    "  \n" +
    "  <!--section fifth-->\n" +
    "<!--section fourth-->\n" +
    "  <div ng-include=\"'templates/care_questions.tpl.html'\"></div>\n" +
    "  <!--end section fifth-->\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("components/change_password/change_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/change_password/change_password.tpl.html",
    "<div class=\"login-bgc change-psw-page\">\n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-8 col-sm-offset-2\">\n" +
    "        <div class=\"fp-p-form\">\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <div class=\"panel panel-wrapper\" ng-controller=\"ChangePasswordCtrl\">\n" +
    "              <h6 class=\"txt-small txt-medium txt-blue-dark txt-center\">Change password</h6>\n" +
    "              <div ng-show=\"!success\">\n" +
    "                <form name=\"form\" novalidate ng-submit=\"changeSubmit(userForm)\">\n" +
    "                  <div class=\"form-group\">\n" +
    "                    <label class=\"input-label txt--exs-small txt txt-blue-2 txt-medium\">New Password</label>\n" +
    "                    <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"userForm.password\" ng-minlength=\"5\" required>\n" +
    "                    <div class=\"error\" ng-show=\"form.password.$dirty\">\n" +
    "                      <div class=\"error\" ng-show=\"form.password.$error.required\">This field is required</div>\n" +
    "                      <div class=\"error\" ng-show=\"form.password.$error.minlength && !form.password.pristine\">Password must be at least 5 characters long</div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"form-group\">\n" +
    "                    <label class=\"input-label txt--exs-small txt txt-blue-2 txt-medium\">Confirm Password</label>\n" +
    "                    <input type=\"password\" name=\"confirm_password\" class=\"form-control\" ng-model=\"userForm.confirm_password\" password-verify match-target=\"userForm.password\" required>\n" +
    "                    <div class=\"error\" ng-show=\"form.confirm_password.$error.match && form.confirm_password.$dirty\">Passwords do not match.</div>\n" +
    "                  </div>\n" +
    "                  <div class=\"button__wrap button--center\">\n" +
    "                    <button class=\"bt-round bt-round--large bt-round--blue-dark\" type=\"submit\" ng-disabled=\"form.$invalid\">Submit</button>\n" +
    "                  </div>\n" +
    "                </form>\n" +
    "              </div>\n" +
    "              <div class=\"alert alert-danger\" ng-repeat=\"error in errors.password\">{{::error}}</div>\n" +
    "              <div class=\"alert alert-danger\" ng-if=\"error\">{{::error.detail}}</div>\n" +
    "              <div class=\"alert alert-success\" ng-if=\"success\">Great! Your password was changed successfully.</div>\n" +
    "              <div ng-if=\"success\" class=\"button__wrap button--center\">\n" +
    "                <button class=\"bt-round bt-round--large bt-round--blue-dark\" type=\"submit\" ng-disabled=\"form.$invalid\">Sign in</button>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/dashboard/dashboard.tpl.html",
    "");
}]);

angular.module("components/faq/faq.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/faq/faq.tpl.html",
    "<update-meta property=\"og:title\" content=\"ADx Healthcare - Frequently asked questions\"></update-meta>\n" +
    "<update-meta name=\"twitter:title\" content=\"ADx Healthcare - Frequently asked questions\"></update-meta>\n" +
    "\n" +
    "<div class=\"faq-p\">\n" +
    "    <div class=\"faq-p-head anim-content-transition\">\n" +
    "        <div class=\"container-fluid container-fluid--section \">\n" +
    "            <div class=\"container-lg\">\n" +
    "                <div class=\"faq-p-head__body\">\n" +
    "                    <div class=\"faq-p-head__title\">\n" +
    "                        <h3 class=\"txt-blue-dark txt-center anim-content-transition\">Frequently asked questions</h3>\n" +
    "                        <h1 class=\"txt-blue-dark txt-center anim-content-transition\">We care about you</h1>\n" +
    "                        <div class=\"sub-header-txt__wrap anim-content-transition txt-center\">\n" +
    "                            <div class=\"txt-middle\">\n" +
    "                                Our customer support team is available\n" +
    "                                by email or chat, and is happy to answer your\n" +
    "                                questions about your test kit, results, and more.\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"faq-p-body anim-content-transition\">\n" +
    "        <div class=\"container-fluid container-fluid--section\">\n" +
    "            <div class=\"section-box-shadow home-section-fourth\">\n" +
    "                <div class=\"container-lg\">\n" +
    "                    <div class=\"faq-p-body__inner\">\n" +
    "                        <div uib-accordion close-others=\"false\">\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">You’re not alone</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        From the independent physician review of your order, to the genetic counselors available to answer your questions about your test results, ADx Healthcare will support you through the process.\n" +
    "                                    <div class=\"txt--indent\">\n" +
    "                                      For all the steps in between, our customer support team is available to discuss your questions about the science behind ApoE, ordering a test, completing your kit, or interpreting your results.\n" +
    "                                    </div>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">Genetic counseling</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        You can choose to receive your results while speaking with a genetic counselor, or you can receive them on your own. You can always choose to speak with a genetic counselor after you have had time to review your results about what they mean for you or your family. We want to be sure you are getting the most from your Alzheimer’s ApoE Genetic Test and understand your results, so we offer genetic counseling to you at no additional charge.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">Emotions</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                            Genetics is only one part of your risk for developing Alzheimer’s disease. While learning that you have a higher risk for developing a disease can be unsettling, there is also power in obtaining that knowledge.  Sometimes we find ourselves questioning if we would have made a choice earlier in life if we would have known the outcomes long-term.  Knowing that you have a high genetic risk for Alzheimer’s disease is unsettling, but it can help empower you to take measured action to live a cognitively healthy life in order to best protect your future self.\n" +
    "                                        <div class=\"txt--indent\">\n" +
    "                                            Having the ApoE-e4 variant  (high genetic risk for late-onset Alzheimer’s disease) does not guarantee you will develop Alzheimer’s.  Learning your genetic risk can help you take measured steps towards improving your cognitive health, so you can reduce your risk for or delay the onset of Alzheimer’s disease.  Sometimes making lifestyle changes can be hard, but having a reason for why you are eating healthier, reducing your stress, and making fitness and sleep a priority can be motivating.\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">Lifestyle changes</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        Stress management, nutrition, fitness, sleep, social engagement, ongoing brain training (music, games, reading, crafts, etc), and avoiding environmental toxins may improve your cognitive health. Living an overall healthier life may also help reduce your risk for or delay the onset of late-onset Alzheimer's disease.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">Connecting with community</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        The more support you have for implementing brain healthy lifestyle behaviors, the more likely you are to be successful at turning them into lifelong habits.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">What gene is being tested?</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        The Alzheimer’s APOE test is a single gene test that looks at your genetic risk for Alzheimer’s disease. Having the high risk copy of this gene (APOE e4) does not guarantee that you will develop Alzheimer’s disease. Likewise, not possessing a copy of the highest risk allele (APOE e4) does not mean you won’t ever develop Alzheimer’s disease. Alzheimer’s disease is influenced by genetics, environment, and lifestyle, so learning your genetic risk helps inform you how aggressively you want to address your lifestyle to optimize your cognitive health.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">What are the requirements for ordering a test?</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        ADx Healthcare contracts with PWNHealth, an independent provider for both physician authorization and genetic counseling for our Alzheimer’s ApoE Genetic Test.  A physician from PWNHealth will review your health history questions to ensure the test is right for you.  Someone from PWNHealth may reach out to you if they have any additional questions.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">Can I use my health insurance benefits to purchase this product?</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        This test is not covered by insurance or Medicaid at this time.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">How will the test results be delivered?</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        Your test results will be delivered in an electronic report. A genetic counselor from PWNHealth will be available to go through your results with you (at no additional charge) if you have any questions. A printable version of your report will be available to you to download.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">What will my test results tell me?</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        Your test results will explain which combination of the ApoE alleles you have. This genetic combination will be further interpreted, to help you identify your relative risk for developing late-onset Alzheimer’s disease, based on your genetics, gender and current age. Your ApoE status will not change as you age, but your chance of developing late-onset Alzheimer’s disease will increase at a different rate dependent on which ApoE combination you have. A genetic counselor will be available to go through your results with you if you have questions.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">Will someone be available to help me understand my results?</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        You will receive your test results in a clear report. However, if you have questions about what these results mean to you or your family, an appointment can be scheduled with a genetic counselor from PWNHealth, for no additional charge, to discuss your test results with you.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">What do I do with my test results?</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        Your test results are private. It is up to you if you want to share your test results with your family or healthcare provider.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">How can my test results help me make health decisions?</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        Learning your genetic risk for late-onset Alzheimer’s disease can help you determine how aggressively you want to start making lifestyle changes to improve your cognitive health, such as addressing sleep habits, stress, nutrition, exercise, ongoing learning, socialization, and your exposure to chemicals and pollutants. Also, if you are identified as having an e4 allele, you may be able to enroll in clinical trials, which are research studies searching for the cure to Alzheimer’s. Enrollment gives you access to cutting edge prevention therapies and lets you participate in the search for a cure.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                             </div>\n" +
    "                             <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "                                <div uib-accordion-heading>\n" +
    "                                    <div class=\"accordion-heading-wrap\">\n" +
    "                                        <div class=\"cross-button-open__wrap\">\n" +
    "                                            <div class=\"cross-button-open\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"content-title__wrap\">\n" +
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">Will my personal information be protected?</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        Your data is protected throughout the process, including the physician approval and genetic counseling by PWNHealth, sequencing by Helix, and interpretation by ADx Healthcare.   As is explained in our Privacy Policy, your information will only be shared with the staff necessary for the review and processing of your order.  Your information will not be shared with anyone you do not authorize it to be shared with.\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt txt-black txt--indent\">\n" +
    "                                      You may be given the opportunity to contribute your genetic data to research studies related to Alzheimer’s disease, but the decision to participate is up to you. ADx Healthcare will not share your information with anyone, including your healthcare provider, without your written consent.\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/forgot_password/forgot_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/forgot_password/forgot_password.tpl.html",
    "<section class=\"fp-p login-bgc\">\n" +
    "  <div class=\"container-fluid container-fluid--section\" ng-controller=\"ForgotPasswordCtrl\">\n" +
    "    <div class=\"fp-p__wrap\" ng-class=\"{'success': success}\">\n" +
    "      <div class=\"fp-p-form\">\n" +
    "        <div class=\"fp-p-form__wrap\">\n" +
    "          <div class=\"panel panel--fp\">\n" +
    "            <div ng-show=\"!success\">\n" +
    "              <form name=\"form\" novalidate ng-submit=\"forgotSubmit(userForm)\">\n" +
    "               <div class=\"txt-center\">\n" +
    "                 <h6 class=\"txt-medium txt-blue-dark\">Reset your password</h6>\n" +
    "               </div>\n" +
    "                <div class=\"txt__wrap txt-center\">\n" +
    "                  <p class=\"about-title-txt txt-black-light\">Enter the email address used to create your account</p>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"form-label\">Email</label>\n" +
    "                  <input type=\"text\" name=\"email\" id=\"email\"  class=\"form-control\"  ng-model=\"forgotForm.email\" required>\n" +
    "                  <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                    <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                    <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"fp-form-button\">\n" +
    "                  <div class=\"button__wrap button--center\">\n" +
    "                    <button class=\"bt-round bt-round--blue-dark\" type=\"submit\" ng-disabled=\"form.$invalid\">Reset Password</button>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </form>\n" +
    "            </div>\n" +
    "            <div class=\"alert alert-danger\" ng-repeat=\"error in errors.password\">{{::error}}</div>\n" +
    "            <div class=\"alert alert-danger\" ng-if=\"error\">{{::error.detail}}</div>\n" +
    "            <div class=\"form-success\" ng-if=\"success\">\n" +
    "              <div class=\"txt-center\">\n" +
    "                <h6 class=\"txt-medium txt-blue-dark\">Password reset email sent!</h6>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <p class=\"about-title-txt txt-black-light\">If your email address matches our records, we will send an email with instructions to reset your account password</p>\n" +
    "              </div>\n" +
    "              <div class=\"fp-form-button\">\n" +
    "                <div class=\"button__wrap button--center\">\n" +
    "                  <a ui-sref=\"master.login\" class=\"bt-round bt-round--blue-dark\" type=\"submit\">Back to sign-in page</a>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>");
}]);

angular.module("components/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/home/home.tpl.html",
    "<update-meta property=\"og:title\" content=\"ADx Healthcare - Learn your Alzheimer’s ApoE genetic risk\"></update-meta>\n" +
    "<update-meta name=\"twitter:title\" content=\"ADx Healthcare - Learn your Alzheimer’s ApoE genetic risk\"></update-meta>\n" +
    "\n" +
    "<div class=\"container-fluid container-fluid--section\">\n" +
    "  <div class=\"home-head\">\n" +
    "    <div class=\"container-lg\">\n" +
    "      <div class=\"home-head__wrap\">\n" +
    "        <div class=\"head-title__wrap\">\n" +
    "          <div class=\"head-title txt-center-sm anim-content-transition\">\n" +
    "            <h1 class=\"line-height-md\">Alzheimer's disease\n" +
    "              know you risk</h1>\n" +
    "            <h3 class=\"txt-padding-top\">Get an ApoE genetic test today</h3>\n" +
    "          </div>\n" +
    "          <div class=\"head-button__wrap txt-center-sm anim-content-transition\">\n" +
    "            <a ng-href=\"{{ globals.order_url_with_kit }}\" target=\"_blank\" jq-slider class=\"button-border-rounded\">Order test</a>\n" +
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
    "  <div class=\"home-head-bottom hide-xs-mobile\">\n" +
    "    <div class=\"container-lg\">\n" +
    "      <div class=\"home-head-bottom__wrap\">\n" +
    "        <div class=\"home-head-bottom__title anim-content-transition\">\n" +
    "          <h3 class=\"txt-fonts-circular-book\">Get an ApoE genetic test today</h3>\n" +
    "        </div>\n" +
    "        <div class=\"home-head-bottom__button anim-content-transition\">\n" +
    "          <div class=\"button__purchase\">\n" +
    "            <a ng-href=\"{{ globals.order_url_with_kit }}\" target=\"_blank\" class=\"bt-round bt-round--blue-dark\">Order</a>\n" +
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
    "          <h2 class=\"txt-blue\">Information about the product</h2>\n" +
    "        </div>\n" +
    "        <div class=\"home-section-first__title-about\">\n" +
    "          <div class=\"txt-large txt-black\">Whether you are 35 or 75, your Alzheimer’s genetics are the same.\n" +
    "            <br> It is never too early or too late to learn your genetic risk for late-onset Alzheimer’s disease.</div>\n" +
    "        </div>\n" +
    "        <div class=\"home-section-first-content__second\">\n" +
    "          <div class=\"container-flex container-flex--column-reverse-md\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h3 class=\"txt-blue-dark\">Why should I take this test?</h3>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <div class=\"txt txt-black\">\n" +
    "                    Changes begin happening in the brain about two decades before the first symptoms of memory decline.\n" +
    "                    Many factors impact your brain health: lifestyle, environment, age, other medical conditions, and your genetics.\n" +
    "                    <br>\n" +
    "                    Knowing if you have an increased risk based on your genetics gives you time to consider your options, set expectations, and make lifestyle changes that feel right for you.\n" +
    "                    For individuals with an increased risk for Alzheimer’s disease, early action may make a difference.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"img__wrap txt-center\">\n" +
    "                  <ng-include class=\"img-middle\" src=\"'./assets/images/svg/human-brain-medical-blue-dark.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"container-flex container-flex--column-md\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"img__wrap txt-center\">\n" +
    "                  <ng-include class=\"img-middle\" src=\"'./assets/images/svg/notebook-medical-dark.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h3 class=\"txt-blue-dark\">What will the test tell me?</h3>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <div class=\"txt txt-black\">\n" +
    "                    The Alzheimer’s ApoE Genetic Test looks for the most common inherited genetic risk associated with late-onset Alzheimer’s disease (occurring after age 65).\n" +
    "                    This test does not look for rare genes associated with early-onset Alzheimer’s (PS1, PS2 or APP) that track in families and tend to occur at very young ages.\n" +
    "                    <!--div class=\"txt--indent\"-->\n" +
    "                    <br>\n" +
    "                    Your Alzheimer's ApoE Genetic Test results will explain whether you have an increased genetic risk for developing late-onset Alzheimer's, which combination of ApoE you inherited,\n" +
    "                    and how your lifetime risk for developing late-onset Alzheimer’s disease changes as you age.\n" +
    "                    <!--/div -->\n" +
    "                  </div>\n" +
    "                </div>\n" +
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
    "                <h3 class=\"txt-blue-dark\">Test information</h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  From start to finish you are never alone in the process. ADx Healthcare contracts with PWNHealth, an independent provider for both physician authorization and genetic counseling for our Alzheimer’s ApoE Genetic Test.  We want to be sure you understand what test you are ordering and what it does and does not reveal. Plus, a genetic counselor from PWNHealth is available for appointment via phone or video to go over your report and answer any questions you may have, at no additional cost to you.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"home-section-second__physician\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Physician approved</h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  ADx Healthcare contracts with PWNHealth, an independent provider for both physician authorization and genetic counseling for our Alzheimer’s ApoE Genetic Test.  A physician from PWNHealth will review your health history questions to ensure the test is right for you.  Someone from PWNHealth may reach out to you if they have any additional questions.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <div class=\"home-section-second__fast-results\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Your genes, your health</h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  With private pay testing, you are in control of your healthcare and can access the information you want to learn.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"home-section-second__genes\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  Confidential results\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  Learn your Alzheimer’s genetic risk from the privacy of your home with a simple saliva test. Once your results are ready, an electronic copy of your report will be delivered to you on our secure platform. A printable copy of your results will also be available.  Your results will be kept confidential. It is up to you if you share your test results with anyone and whom you share them with. A genetic counselor, from our partner PWNHealth, is available at no additional cost if you want to ask questions about your results.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"home-section-second__title-blue\">\n" +
    "        <div class=\"title-blue__inner txt-center\">\n" +
    "          <div class=\"txt-blue-dark title-first\">Protect your future self</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"container-lg\">\n" +
    "        <div class=\"container-flex section__wrap-sm section__wrap-sm--not-space-sm container-flex--column-sm\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"img__wrap txt-center\">\n" +
    "                <ng-include class=\"img-middle--md\" src=\"'./assets/images/svg/doctor--bgc-silver.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  Physician review\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <p class=\"txt txt-black\">\n" +
    "                  ADx Healthcare contracts with PWNHealth, an independent provider for both physician authorization and genetic counseling for our Alzheimer’s ApoE Genetic Test.  A physician from PWNHealth will review your health history questions to ensure the test is right for you.  Someone from PWNHealth may reach out to you if they have any additional questions.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"img__wrap txt-center\">\n" +
    "                <ng-include class=\"img-middle--md\" src=\"'./assets/images/svg/test-tube.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h3 class=\"txt-blue-dark txt-center\">\n" +
    "                  Saliva Sample\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <p class=\"txt txt-black txt-center\">\n" +
    "                  Once an independent physician from PWNHealth authorizes your test, you will receive a sample kit in the mail. Collect your saliva sample and send the kit back to us for processing, in the prepaid packaging provided.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"container-flex row-padding-top container-flex--column-sm\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"img__wrap txt-center\">\n" +
    "                <ng-include class=\"img-middle--md\" src=\"'./assets/images/svg/notebook-checked.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  Results\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <p class=\"txt txt-black\">\n" +
    "                  Obtain your results privately and securely online. We’ll help you schedule your free genetic counseling session if you would like to review your results with a genetic counselor. You can also print a copy of your results if you want to share them with family or your primary healthcare provider.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"img__wrap txt-center\">\n" +
    "                <ng-include class=\"img-middle--md\" src=\"'./assets/images/svg/clapperboard--dark.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  Take action\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <p class=\"txt txt-black\">\n" +
    "                  Take action and reduce your risk for late-onset Alzheimer's disease or delay its onset.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"home-section-second__bottom\">\n" +
    "        <div class=\"container-lg\">\n" +
    "          <div class=\"container-flex align-items--center container-flex--column-md\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"img__wrap img--center-md\">\n" +
    "                  <ng-include class=\"img-middle\" src=\"'./assets/images/svg/microscope.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Science</h2>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <div class=\"txt\">\n" +
    "                    ApoE comes in three forms: ApoE-e2, ApoE-e3, and ApoE-e4.  Having a high risk copy of this gene (ApoE-e4) does not guarantee that you will develop Alzheimer’s disease. Likewise, possessing a copy of the lowest risk variant (ApoE-e2) does not mean you won’t develop Alzheimer’s disease.  Learning your ApoE -related genetic risk can be paired with your age, gender, medical health and lifestyle habits to help assess your Alzheimer’s disease risk. Knowing your overall risk can help you decide how aggressively you want to address your cognitive health.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"button__wrap button__wrap--left-md\">\n" +
    "                  <a ui-sref=\"master.science\" class=\"bt-round bt-round--lg bt-round--blue-dark\">Learn more</a>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section third-->\n" +
    "  <!--\n" +
    "  <div class=\"home-section-third section-box-shadow\">\n" +
    "    <div class=\"title__wrap txt-center\">\n" +
    "      <h2 class=\"txt-blue-dark\">What people say about us</h2>\n" +
    "    </div>\n" +
    "    <div class=\"sub-header-txt__wrap txt-center\">\n" +
    "      <div class=\"txt-large txt-black\">\n" +
    "        ApoE is the most important piece of the puzzle.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"home-section-third__boxes\">\n" +
    "      <div class=\"boxes__wrap boxes__wrap--large\">\n" +
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
    "  -->\n" +
    "\n" +
    "  <!--section fourth-->\n" +
    "  <div ng-include=\"'templates/care_questions.tpl.html'\"></div>\n" +
    "  \n" +
    "</div>\n" +
    "");
}]);

angular.module("components/legal/legal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/legal/legal.tpl.html",
    "<div class=\"legal-p\">\n" +
    "    <div class=\"legal-p-head-bgc\"></div>\n" +
    "    <div class=\"container-fluid container-fluid--section\">\n" +
    "        <div class=\"section-box-shadow section-box-shadow--space-inner\">\n" +
    "            <div class=\"container-lg\">\n" +
    "                <div class=\"legal-p-body\">\n" +
    "                    <div class=\"legal-p-body__wrap\">\n" +
    "                        <div class=\"legal-p-body__img anim-content-transition\">\n" +
    "                            <ng-include class=\"img-small\" src=\"'./assets/images/svg/parcel.svg'\"></ng-include>\n" +
    "                        </div>\n" +
    "                        <div class=\"title__wrap anim-content-transition\">\n" +
    "                            <h3 class=\"txt-blue-dark txt-center\">Terms of Service</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap anim-content-transition\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-6 anim-content-transition\">\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black anim-content-transition\">\n" +
    "                                            <span class=\"txt-bold\">June 2018</span><br>\n" +
    "                                            <span class=\"txt-bold\">1. Definitions</span>\n" +
    "                                                Capitalized terms used but not defined in these Terms of Service have the meaning given to them in our other policies (e.g., our Privacy Policy and Consent Documents).\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">“ADx Healthcare\"</span> means ADx Healthcare,., whose principal place of business is at 3614 Meridian Street, Suite 100, Bellingham, WA 98225.\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">\"ADx Healthcare Research\"</span> means scientific research that ADx Healthcare performs with the intent to publish the results in a peer-reviewed scientific journal. ADx Healthcare Research only uses Genetic and Self-Reported Information from users who have given their informed consent for this use in accordance with the applicable Consent Document. ADx Healthcare Research activities do not include research for Product Development and do not include partner Services\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">\"Aggregated Genetic and Self-Reported Information\"</span> is Genetic and Self-Reported Information collected from multiple users that has been combined and analyzed or evaluated as a whole, such that no specific individual may be reasonably identified.\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">\"Genetic Information\"</span> is information regarding your genotype (e.g. the As, Ts, Cs, and Gs at particular locations in your genome), generated through processing of your saliva by ADx Healthcare or by its partners, contractors, successors, and assignees.\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">\"Personal Information\"</span> is information that can be used to identify you, either alone or in combination with other information. ADx Healthcare collects and stores Personal Information in accordance with our Privacy Policy. Personal Information includes the information you provide about yourself when registering for and/or purchasing our Services (e.g. name, email, address, user ID and password, and payment information).\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">\"Product Development\"</span> means research performed for the purpose of new product development and new product development activities performed by ADx Healthcare on de-identified user data. These activities may include, among other things, improving our Services and/or offering new products or services to you; performing quality control activities; conducting data analysis that may lead to and/or include commercialization with a third party.\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">\"Self-Reported Information\"</span> is information about yourself, including your disease conditions, other health-related information, personal traits, ethnicity, family history, and other information that you enter into surveys, forms, or features while signed in to your ADx Healthcare account. Self-Reported Information may be included in ADx Healthcare Research only if it has been indicated for ADx Healthcare Research use on the ADx Healthcare website and if you have given consent in accordance with the applicable Consent Document.\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">\"Service\" or \"Services\"</span> means ADx Healthcare's products, software, services, and website (including but not limited to text, graphics, images, and other material and information) as accessed from time to time by the user, regardless if the use is in connection with an account or not.\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">\"User Content\"</span> is all information, data, text, software, music, audio, photographs, graphics, video, messages, or other materials generated by users of ADx Healthcare Services and transmitted, whether publicly or privately, to or through ADx Healthcare. User Content does not include Genetic Information, Personal Information, or Self-Reported Information.\n" +
    "                                            <br>\n" +
    "                                            <span class=\"txt-bold\">\"Web Behavior Information\"</span> is information on how you use the ADx Healthcare website (e.g. browser type, domains, page views) collected through log files, cookies, and web beacon technology.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">2. Acceptance of Terms</span><br>\n" +
    "                                            Your use of ADx Healthcare's Services (excluding any services provided by ADx Healthcare under a separate agreement) is subject to the terms of the legal agreement between you and ADx Healthcare set forth in these Terms of Service (\"TOS\"). Except as specified herein, these TOS apply to any use of the Services, including but not limited to creating and using a free ADx Healthcare account, and in the case of a request for genotyping services directly from ADx Healthcare,  a) submitting a saliva sample for DNA extraction and processing, and/or b) uploading a digital version of your Genetic Information and interacting with it on the ADx Healthcare website. In the event that the product you purchase utilizes the genotyping services of our third-party partner, the partner’s terms apply to the genotyping services.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            In order to use the Services, you must first agree to the TOS. You may not use the Services if you do not accept the TOS. You can accept the TOS by (1) clicking to accept or agree to the TOS, where this option is made available to you by ADx Healthcare for any Service; or by (2) actually using the Services. In this case, you acknowledge and agree that ADx Healthcare will treat your use of the Services as acceptance of the TOS from that point onward. In addition, when using ADx Healthcare Services, you shall be subject to any additional terms, guidelines, or rules applicable to such Services that may be posted from time to time, including our Privacy Policy and applicable Consent Document(s). All such terms, guidelines, or rules are hereby incorporated by reference into the TOS. ADx Healthcare also may offer other services from time to time that are governed by different terms of service.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">3. Prerequisites</span><br>\n" +
    "                                            You may not use the Services and may not accept the TOS if (1) you are not of legal age to form a binding contract with ADx Healthcare, or (2) you are a person barred from receiving the Services under the laws of the jurisdiction in which you are resident or from which you will use the Services.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You must be eighteen (18) years of age or older to agree to these TOS and 18 years of age or older to take the test.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            If your use of the Services includes creating an ADx Healthcare account, without submitting a saliva sample or otherwise providing Genetic Information, you must be thirteen (13) years of age or older to use such Services and accept the TOS.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            ADx Healthcare Services are only available to residents of the United States.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">4. Description of the Services</span><br>\n" +
    "                                            The Services include access to the ADx Healthcare and partner public websites and personal genotyping services, including the collection and analysis of your saliva sample and/or Genetic Information. ADx Healthcare Services include test services and reporting for genetic testing. Results of your genetic test are based on saliva samples and/or Genetic Information that you provide, and the results are reported to you through the ADx Healthcare website. ADx Healthcare requires physician authorization for each test and provides you with the option for genetic counseling as part of our Services. Once a test is authorized by a physician, a sample collection kit will be mailed to you by ADx Healthcare or its partner for self-collection of your saliva sample. After collecting the sample, you will mail the kit back to the laboratory where your sample will be processed and analyzed. A copy of your results will be made available to the ordering physician. You can choose to review your results, via phone, with a genetic counselor.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You may stop using the Services at any time. You do not need to specifically inform ADx Healthcare when you stop using the Services unless you are requesting closure of your account. ADx Healthcare assumes no responsibility for the use of Services outside the terms of this TOS or other applicable terms.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">5. Refunds</span><br>\n" +
    "                                            The Services include access to the ADx Healthcare and partner public websites and personal genotyping services, including the collection and analysis of your saliva sample and/or Genetic Information. ADx Healthcare Services include test services and reporting for genetic testing. Results of your genetic test are based on saliva samples and/or Genetic Information that you provide, and the results are reported to you through the ADx Healthcare website. ADx Healthcare requires physician authorization for each test and provides you with the option for genetic counseling as part of our Services. Once a test is authorized by a physician, a sample collection kit will be mailed to you by ADx Healthcare or its partner for self-collection of your saliva sample. After collecting the sample, you will mail the kit back to the laboratory where your sample will be processed and analyzed. A copy of your results will be made available to the ordering physician. You can choose to review your results, via phone, with a genetic counselor.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            If you seek a refund and your request for Services was made through one of our third-party partners, such as Helix, your refund will be handled according to that third-party’s refund policy.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            If your request for Services was made directly through ADx Healthcare, you may request a refund within 30 days of purchase as long as you have not yet received and registered your sample collection kit from ADx Healthcare. If a sample collection kit has been shipped, ADx Healthcare will deduct a $25 shipping and handling fee from your refund amount. You can request a refund by calling 1.833.ADX.HELP Once your sample has been received and processed by our lab, your purchase can no longer be refunded.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">6. Modifications to Service</span><br>\n" +
    "                                            At its sole discretion, ADx Healthcare may at any time and from time to time modify or discontinue, temporarily or permanently, the Services (or any part thereof) with or without notice to you. You acknowledge and agree that (i) modifications may result in a delay in computations for some of the ADx Healthcare features or Services, and (ii) ADx Healthcare shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Services.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Unless explicitly stated otherwise, each new feature that augments or enhances the current Service shall be subject to the TOS. You acknowledge and agree that the Services provided are based on the current state of the genetic research and technology in use by ADx Healthcare at the time of the purchase or viewing. As research progresses and scientific knowledge and technology evolve, ADx Healthcare is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the Services which ADx Healthcare provides may change from time to time without prior notice to you and that ADx Healthcare is not obligated to notify you if there is a new understanding of genetic research that might result in a change to the interpretation of your results. You further acknowledge that ADx Healthcare may offer different or additional technologies or features to collect and/or interpret Genetic Information in the future and that your initial purchase of the Service does not entitle you to any different or additional technologies or features for collection or interpretation of your Genetic Information without fee, and that you will have to pay additional fees in order to have your Genetic Information collected, processed, and/or interpreted using any future or additional technologies or features.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">7. Risks and Considerations Regarding the Services</span><br>\n" +
    "                                            You should not change your health behaviors solely on the basis of information from ADx Healthcare. Make sure to discuss your Genetic Information with a physician or other healthcare provider before you act upon the Genetic Information resulting from ADx Healthcare Services. If you have concerns or questions about what you learn through ADx Healthcare, you should contact your physician or other healthcare provider.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            The research community is rapidly learning more about genetics, and an important interest of ADx Healthcare is to conduct and contribute to this research. ADx Healthcare Research may study a specific group or population, identify potential areas or targets for therapeutics development, or otherwise apply this new knowledge to improve health care.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            ADx Healthcare Services are for research, informational, and educational use only. We do not provide medical advice. The Services are not intended to be used for any diagnostic purpose and are not a substitute for professional medical advice. You should always seek the advice of your physician or other healthcare provider with any questions you may have regarding the diagnosis, cure, treatment, mitigation, or prevention of any disease or other medical condition or impairment or the status of your health.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            The Genetic Information provided by ADx Healthcare is for research, informational, and educational use only. In an opportunity to expand and accelerate the understanding and practical application of genetic knowledge in health care, we invite all users to participate in ADx Healthcare Research. Participation in such research is optional, voluntary, and based upon your completion and acceptance of an IRB-approved consent document.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            ADx Healthcare does not warranty or guarantee the effectiveness of any specific course of action, resources, tests, physician or other healthcare providers, drugs, biologics, medical devices or other products, procedures, opinions, or other information that may be mentioned on our website. Any recommendations or potentially actionable information that may be provided to you on our website based on your Genetic and Self-Reported Information and scientific literature or research is intended for informational purposes only and for discussion with your physician or other healthcare provider. As explained on our website, ADx Healthcare believes that (a) genetics is only part of the picture of any individual's state of being, (b) the state of the understanding of Genetic Information is rapidly evolving, and at any given time we only comprehend part of the picture of the role of genetics, and (c) only a trained physician or other healthcare provider can assess your current state of health or disease, taking into account many factors, including in some cases your genetics as well as your current symptoms, if any. Reliance on any information provided by ADx Healthcare, ADx Healthcare employees, others appearing on our website at the invitation of ADx Healthcare, or other visitors to our website is solely at your own risk.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            While we are licensed in Washington as a clinical laboratory, not all jurisdictions require our Services to be subject to licensure. Therefore, we are not universally licensed by all state, federal, or international authorities for genetic testing conducted for health and disease-related purposes. There are certain jurisdictions in which we do not offer our Services because we do not have required licenses.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">8. User Representations</span><br>\n" +
    "                                            By accessing ADx Healthcare Services, you agree to, acknowledge, and represent as follows:\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You understand that information you learn from ADx Healthcare is not designed to independently diagnose, prevent, or treat any condition or disease or to ascertain the state of your health in the absence of medical and clinical information. You understand that the ADx Healthcare services are intended for research, informational, and educational purposes only, and that while ADx Healthcare information might point to a diagnosis or to a possible treatment, it should always be confirmed and supplemented by additional medical and clinical testing and information. You acknowledge that ADx Healthcare urges you to seek the advice of your physician or other healthcare provider if you have questions or concerns arising from your Genetic Information.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            If you request genotyping services directly from ADx Healthcare, you give permission to ADx Healthcare, its partners, contractors, successors and assignees to perform genotyping services on the DNA extracted from your saliva sample.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You specifically request ADx Healthcare to disclose the results of analyses performed on your DNA to you and to others you specifically authorize.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You represent that you are a United States resident thirteen (13) years of age or older if you are creating an ADx Healthcare account without submitting a saliva sample or otherwise providing Genetic Information.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You guarantee that any sample you provide is your saliva. Alternatively, if you are agreeing to these TOS on behalf of a person for whom you have legal authority to agree, you represent that the sample provided will be the sample of that person.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You understand that ADx Healthcare is a United States company and only provides Services to persons in the United States. We make no claims that the Services or any of our content are accessible or appropriate outside of the United States. Access to the Services may not be legal by certain persons or in certain countries. If you access the Services from outside the United States, you do so on your own initiative and are responsible for compliance with local laws.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You warrant that you are not an insurance company or an employer attempting to obtain information about an insured person or an employee.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You are aware that some of the information you receive may provoke strong emotion.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You take responsibility for all possible consequences resulting from your sharing with others access to your Genetic Information and your Self-Reported Information.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You understand that all your Personal Information will be stored in ADx Healthcare’s databases and will be processed in accordance with the ADx Healthcare Privacy Policy.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You agree that you have the authority, under the laws of the state or jurisdiction in which you reside, to provide these representations. In case of breach of any one of these representations, ADx Healthcare has the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof), and you will defend and indemnify ADx Healthcare and its affiliates against any liability, costs, or damages arising out of the breach of the representation.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">9. Account Creation, User Account, Password, and Security Obligations</span><br>\n" +
    "                                            We cannot perform the Services without collecting information from you, but we will only collect the information necessary to assist us in providing the Services. You agree to: (a) provide accurate, current, and complete Information about yourself; and (b) maintain and promptly update the information to keep it true, accurate, current, and complete. If you provide any information that is inaccurate, not current, or incomplete, or if ADx Healthcare has a reasonable ground to suspect that such information is inaccurate, not current, or incomplete, ADx Healthcare has the right to suspend or terminate your account and refuse any and all current or future use of the Service (or any portion thereof). In addition, ADx Healthcare may, in its sole discretion, restrict access to the website for any reason.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            After you have purchased our Service, you will create an account through our website and designate a password to secure the account. You are responsible for maintaining the confidentiality of the password and account, and are fully responsible for all activities that occur under your password or account. If you allow third parties to access ADx Healthcare's website through your account, you will defend and indemnify ADx Healthcare and its affiliates against any liability, costs, or damages, including attorney fees, arising out of claims or suits by such third parties based upon or relating to such access and use. You agree to (a) immediately notify ADx Healthcare of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you exit from your account at the end of each session. When accessing your account from a public or shared computer, you should use particular caution so that others are not able to view or record your password or your other information. ADx Healthcare cannot and will not be liable for any loss or damage arising from your failure to comply with this Section. In addition, ADx Healthcare may, in its sole discretion, restrict access to the website for any reason.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You may request the closure of your account at any time by providing written notice to ADx Healthcare. Closing your account will terminate all of the Services that you use.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">10. ADx Healthcare Privacy Policy and Disclosure of Information</span><br>\n" +
    "                                            In order to use the Services, you must first acknowledge and agree to our Privacy Policy. You may not use the Services if you do not accept the Privacy Policy. You can acknowledge and agree to the Privacy Policy by (1) clicking to accept or agree to the Privacy Policy, where this option is made available to you by ADx Healthcare for any Service; or by (2) actually using the Services.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You acknowledge and agree that ADx Healthcare has the right to monitor any use of its systems at any time and to maintain copies documenting such monitoring. Our Privacy Policy sets forth the only expectations of privacy any individual should have in terms of usage of the ADx Healthcare Services, website, or other systems. Please refer to our Privacy Policy, available on this page, to read about data protection related to your information.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">11. Limited License</span><br>\n" +
    "                                            You acknowledge that the Services content presented to you as part of the Services, whether original ADx Healthcare Services content or sponsored content within the Services, is protected by copyright and/or other intellectual property rights that are owned by ADx Healthcare and/or the sponsors who provide that content to ADx Healthcare (or by other persons or companies on their behalf). ADx Healthcare grants you a Limited License to copy and distribute, free of charge, for non-commercial purposes only, any of the Services content, provided you: (i) use the Services content as it appears on the ADx Healthcare website (with no changes), (ii) include the following attribution on the first page of any materials you distribute: © ADx Healthcare2018. All rights reserved; distributed pursuant to a Limited License from ADx Healthcare; (iii) agree you have no right to offer anyone else any further right with respect to this Services content. Aside from the Limited License provided in this paragraph, you may not modify, rent, lease, loan, sell, distribute, or create derivative works based on this Services content (either in whole or in part) unless you have been specifically told that you may do so by ADx Healthcare or by the owners of that content, in a separate agreement.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">12. User Conduct - Unlawful and Prohibited Use</span><br>\n" +
    "                                            As a condition of your use of the Services, you warrant to ADx Healthcare that you will not use the Services for any purpose that is unlawful or prohibited by these TOS. You may not use the Services in any manner that could damage, disable, overburden, or impair the Services or interfere with any other party's use and enjoyment of the Services. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Services. You agree not to use the Services to: (1) upload, post, email, or otherwise transmit any material that is derogatory, defamatory, obscene, or offensive, such as slurs, epithets, or anything that might reasonably be construed as harassment or disparagement based on race, color, national origin, sex, sexual orientation, age, disability, religious or political beliefs, or other statutorily protected status; (2) impersonate any person or entity, including, but not limited to, anyone affiliated with ADx Healthcare, or falsely state or otherwise misrepresent your affiliation with a person or entity; (3) add your own headers, forge headers, or otherwise manipulate identifiers in order to disguise the origin of any content transmitted through the Service; (4) \"stalk\" or otherwise harass another; (5) upload, post, email, or otherwise transmit any content that you do not have a right to transmit under any law or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements); (6) use any information received through the Services to attempt to identify other users, to contact other users (other than through features for contacting other users such as DNA Relatives offered pursuant to the Services), or for any forensic use; (7) download any file posted by another user of the Service that you know, or reasonably should know, cannot legally be distributed in such manner; (8) upload, post, email or otherwise transmit any content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights (\"Rights\") of ADx Healthcare or any other party; (9) harm minors in any way; (10) advertise or offer to sell or buy any goods or services for any business purpose, unless such area specifically allows such messages; (11) upload, post, email, or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, \"junk mail,\" \"spam,\" \"chain letters,\" \"pyramid schemes,\" or any other form of solicitation, except in those areas that are designated for such purpose and only to the extent such content is authorized by law; (12) upload, post, email, or otherwise transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment; (13) use manual or automated software, devices, scripts robots, other means or processes to access, \"scrape,\" \"crawl\" or \"spider\" any web pages or other services contained in the site, unless explicitly permitted by ADx Healthcare; (14) engage in \"framing,\" \"mirroring,\" or otherwise simulating the appearance or function of ADx Healthcare's website; (15) attempt to or actually override any security component of ADx Healthcare web services; (16) interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any requirements, procedures, policies, or regulations of networks connected to the Service; (17) violate these TOS, any code of conduct or other guidelines which may be applicable for any particular area of the Service or have been communicated to you by anyone affiliated with ADx Healthcare; or (18) intentionally or unintentionally violate any applicable local, state, national, or international law, or any regulations having the force of law.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You acknowledge and agree that you are solely responsible for (and that ADx Healthcare has no responsibility to you or to any third party for) any breach of your obligations under the TOS and for the consequences (including any loss or damage which ADx Healthcare may suffer) of any such breach. In case of breach of any one of these terms ADx Healthcare has the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof) and you will defend and indemnify ADx Healthcare and its affiliates against any liability, costs, or damages arising out of the breach of the representation. Similarly, if you violate the terms of this Section and/or ADx Healthcare has a reasonable ground to suspect that you have violated the terms of this Section, ADx Healthcare has the right to suspend or terminate your account and refuse any and all current or future use of the Service (or any portion thereof).\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">13. Material Posted Through the Service</span><br>\n" +
    "                                            You acknowledge and agree that all User Content, whether publicly posted or privately transmitted, is the sole responsibility of the person from which such User Content originated. This means that you, and not ADx Healthcare, are entirely responsible for all User Content that you upload, post, email, or otherwise transmit via the Service.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            ADx Healthcare will not, at all times, control any of the User Content posted via the Service and, as such, does not guarantee the accuracy, integrity, or quality of such non-ADx Healthcare content. You understand that by using the Services, you may be exposed to content that is offensive, indecent, or objectionable. Under no circumstances will ADx Healthcare be liable in any way for any non-ADx Healthcare content, including, but not limited to, any errors or omissions in any such content, or for any loss or damage of any kind incurred as a result of the use of any such content posted, emailed, or otherwise transmitted via the Services.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You acknowledge that ADx Healthcare and its designees shall have the right (but not the obligation) in their sole discretion to pre-screen, review, filter, modify, refuse, or move any content that is available via the Services. Without limiting the foregoing, ADx Healthcare and its designees shall have the right to remove any content that violates the TOS or is deemed by ADx Healthcare, in its sole discretion, to be otherwise objectionable. You acknowledge and agree that you must evaluate, and bear all risks associated with, the use of any content, including any reliance on the accuracy, completeness, or usefulness of such content.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">14. Material Provided to ADx Healthcare - Your Proprietary Rights</span><br>\n" +
    "                                            User Content. ADx Healthcare does not claim ownership of the User Content you provide to ADx Healthcare (including feedback and suggestions) or post, upload, input, or submit to the Service. Unless otherwise specified, you retain copyright and any other rights you already hold over User Content that you create and submit, post, or display on or through the Services. However, by submitting, posting, or displaying User Content, you give ADx Healthcare, its affiliated companies, sublicensees (including but not limited to sublicensees who avail themselves of the Limited License granted in Section 11 above) and successors and assigns a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to reproduce, adapt, modify, translate, publish, publicly perform, publicly display, distribute, reproduce, edit, reformat, and create derivative works from any User Content that you submit, post, or display on or through the Services. You acknowledge and agree that this license includes a right for ADx Healthcare to make such User Content available to other companies, organizations, or individuals with whom ADx Healthcare has relationships, and to use such User Content in connection with the provision of those services.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You understand that ADx Healthcare, in performing the required technical steps to provide the Services to our users, may (a) transmit or distribute your User Content over various public networks and in various media; and (b) make such changes to your content as are necessary to conform and adapt that content to the technical requirements of connecting networks, devices, services, or media. You acknowledge and agree that this license shall permit ADx Healthcare to take these actions. You represent and warrant to ADx Healthcare that you have all the rights, power, and authority necessary to grant the above license.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Genetic and/or Self-Reported Information. ADx Healthcare cannot control any further distribution of Genetic and/or Self-Reported Information that you share publicly on the ADx Healthcare website. You acknowledge and agree that you are responsible for protecting the information that you share publicly and that ADx Healthcare has no obligation to do so on your behalf.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Your saliva sample is processed in an irreversible manner and cannot be returned to you. Any Genetic Information derived from your saliva remains your information, subject to rights we retain as set forth in these TOS. You understand that you should not expect any financial benefit from ADx Healthcare or ADx Healthcare Research as a result of having your Genetic Information processed, made available to you, or, used in research.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">15. Waiver of Property Rights</span><br>\n" +
    "                                            You understand that by providing any sample, having your Genetic Information processed, accessing your Genetic Information, or providing Self-Reported Information, you acquire no rights in any ADx Healthcare Research or commercial products that may be developed by ADx Healthcare. You specifically understand that you will not receive compensation for any ADx Healthcare Research or commercial products that include or result from your Genetic Information or Self-Reported Information.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">16. Indemnity</span><br>\n" +
    "                                            You agree to defend and hold ADx Healthcare and its subsidiaries, affiliates, officers, agents, contractors, partners, employees, successors, and assigns harmless from any claim, or demand, including reasonable attorneys' fees, made by any third party due to or arising out of User Content you submit, post to, or transmit through the Service; your use of the Service; your connection to the Service; your violation of the TOS; or your violation of any rights of another.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            If you have submitted a saliva sample or otherwise provided Genetic Information to ADx Healthcare, you will defend and hold harmless ADx Healthcare and its employees, contractors, partners, successors, and assigns from any liability arising out of the use or disclosure of any information obtained from genotyping the saliva sample and/or analyzing the Genetic Information, which is disclosed to you consistent with our Privacy Policy, or results from any third-party add-ons to tools we provide. In addition, if you choose to provide your Genetic and/or Self-Reported Information to third parties—whether individuals to whom you facilitate access, intentionally or inadvertently, or to third parties for diagnostic or other purposes—you agree to defend and hold harmless ADx Healthcare and its employees, contractors, partners, successors, and assigns from any and all liability arising from such disclosure or use of your Genetic and/or Self-Reported Information.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">17.	No Resale of Service</span><br>\n" +
    "                                            Other than pursuant to the terms of the Limited License in Section 11 of this TOS or unless otherwise agreed to in a separate agreement between you and ADx Healthcare, you agree not to display, distribute, license, perform, publish, reproduce, duplicate, copy, create derivative works from, modify, sell, resell, exploit, transfer, or transmit for any commercial purposes, all or any portion of the Service, use of the Service, or access to the Service.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">18. General Practices Regarding Use and Storage</span><br>\n" +
    "                                            You acknowledge that ADx Healthcare may establish general practices and limits concerning use of the Services, including without limitation the maximum number of days that Personal Information and Services content will be retained by ADx Healthcare, the maximum disk space that will be allotted on ADx Healthcare's servers on your behalf, and the maximum number of times (and the maximum duration for which) you may access the Services in a given period of time. You acknowledge and agree that ADx Healthcare has no responsibility or liability for the deletion of or failure to store any messages, other communications, or other content maintained or transmitted by the Services; or for the loss of Genetic Information due to malfunction or destruction of data servers or other catastrophic events. You further acknowledge that ADx Healthcare reserves the right to change these general practices and limits in its sole discretion.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">19. Termination</span><br>\n" +
    "                                            The TOS will continue to apply until terminated by either you or ADx Healthcare as set out in this Section.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            If you want to terminate your legal agreement with ADx Healthcare, you may do so by notifying ADx Healthcare at any time in writing, which will entail closing your accounts for all of the Services that you use. Your notice should be sent, in writing, to ADx Healthcare's address, which is set out at the beginning of the TOS and in Section 26. If you provide notice via email, ADx Healthcare will send you an email asking you to confirm your request, and your notice will be effective following receipt of a second email confirmation from you.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            ADx Healthcare may at any time, terminate its legal agreement with you (and in conjunction therewith, your password and account(s)) if: (1) you have breached any provision of the TOS (or have acted in manner which shows that you do not intend or are unable to comply with the provisions of the TOS); (2) ADx Healthcare is required to do so by law (for example, where the provision of the Services to you is, or becomes, unlawful); (3) the partner with whom ADx Healthcare offered the Services to you has terminated its relationship with ADx Healthcare or ceased to offer the Services to you; (4) ADx Healthcare is transitioning to no longer providing the Services to users in the state in which you reside or from which you use the Services; or (5) the provision of the Services to you by ADx Healthcare is, in ADx Healthcare's opinion, no longer commercially viable.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Any suspected fraudulent, abusive, or illegal activity that may be grounds for termination of your use of the Services may be referred to appropriate law enforcement authorities. You acknowledge and agree that ADx Healthcare shall not be liable to you or any third party for any termination of your access to the Services.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">20. Survival of Terms</span><br>\n" +
    "                                            When the TOS come to an end, all of the legal rights, obligations, and liabilities that you and ADx Healthcare have benefited from, been subject to (or which have accrued over time while the TOS have been in force), or which are expressed to continue indefinitely, shall be unaffected by this cessation and shall continue to apply to such rights, obligations, and liabilities indefinitely.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">21. Dealings with Information Providers and Listed Resources</span><br>\n" +
    "                                            Your correspondence or business dealings with—or participation in promotions of—information providers, vendors, and/or resources found on or through the Service, including payment and delivery of related goods or services, and any other terms, conditions, warranties, or representations associated with such dealings, are solely between you and such information provider or resource. You acknowledge and agree that ADx Healthcare shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such information provider or resources on the Service.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">22. Hyperlinks and the ADx Healthcare Website</span><br>\n" +
    "                                            The Service provides, and third parties may provide, links to other sites and resources on the Internet. Because ADx Healthcare has no control over such sites and resources, you acknowledge and agree that ADx Healthcare is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible or liable for any content, advertising, products, or other materials on or available from such sites or resources. You further acknowledge and agree that ADx Healthcare shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such hyperlinked site or resource.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">23. ADx Healthcare's Proprietary Rights</span><br>\n" +
    "                                            You acknowledge and agree that ADx Healthcare (or ADx Healthcare's licensors, as applicable) own all legal right, title, and interest in and to the Services, including any intellectual property rights (including but not limited to patents) which subsist in the Services (whether those rights happen to be registered or not, and wherever in the world those rights may exist).\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You further acknowledge and agree that the Services and any necessary software used in connection with the Services (\"Software\") contain proprietary and confidential information that is protected by applicable intellectual property and other laws. You acknowledge and agree that information presented to you through the Services or sponsors is protected by copyrights, trademarks, service marks, patents, or other proprietary rights and laws. Except as expressly authorized by ADx Healthcare, you agree not to—and not to permit anyone else to—modify, rent, lease, loan, sell, distribute, or create derivative works of, reverse engineer, decompile, or otherwise attempt to extract the source code of the Services or Software or any part thereof, in whole or in part. Software, if any, that is made available to download from the Services, excluding software that may be made available by end-users through the Services, is the copyrighted work of ADx Healthcare and/or its suppliers. Your use of the Software is governed by the terms of the end user license agreement, if any, which accompanies or is included with the Software (\"License Agreement\"). You may not install or use any Software that is accompanied by or includes a License Agreement unless you first agree to the License Agreement terms.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            ADx Healthcare, and other ADx Healthcare logos and product and service names are trademarks of ADx Healthcare and these marks together with any other ADx Healthcare trade names, service marks, logos, domain names, and other distinctive brand features are the \"ADx Healthcare Marks\". Unless you have agreed otherwise in writing with ADx Healthcare, other than through the Limited License, nothing in the TOS gives you a right to use any ADx Healthcare Marks and you agree not to display, or use in any manner, ADx Healthcare Marks.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You agree that you shall not remove, obscure, or alter any proprietary rights notices (including copyright and trade mark notices) that may be affixed to or contained within the Services.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Unless you have been expressly authorized to do so in writing by ADx Healthcare, you agree that in using the Services, you will not use any trade mark, service mark, trade name, logo of any company or organization in a way that is likely or intended to cause confusion about the owner or authorized user of such marks, names, or logos.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            For any Software not accompanied by a License Agreement, ADx Healthcare grants you a personal, non-transferable, and non-exclusive right and license to use the object code of its Software on a single computer. You may not (and may not allow any third party to) copy, modify, create a derivative work of, reverse engineer, reverse assemble, or otherwise attempt to discover any source code, sell, assign, sublicense, grant a security interest in, or otherwise transfer any right in the Software unless this is expressly permitted or required by law, or unless you have been specifically told that you may do so by ADx Healthcare, in writing. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Services as provided by ADx Healthcare, in the manner permitted by the TOS. Unless ADx Healthcare has given you specific written permission to do so, you may not assign (or grant a sublicense of) your rights to use the Software, grant a security interest in or over your rights to use the Software, or otherwise transfer any part of your rights to use the Software. You agree not to modify the Software in any manner or form, or to use modified versions of the Software, including (without limitation) for the purpose of obtaining unauthorized access to the Service. You agree not to access the Service by any means other than through the interface that is provided by ADx Healthcare for use in accessing the Service. Any rights not expressly granted herein are reserved.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">24. Disclaimer of Warranties</span><br>\n" +
    "                                            YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT: (1) YOUR USE OF THE SERVICES ARE AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. ADx Healthcare EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. (2) ADx Healthcare MAKES NO WARRANTY THAT (a) THE SERVICES WILL MEET YOUR REQUIREMENTS; (b) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, UNFAILINGLY SECURE, OR ERROR-FREE; (c) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE; (d) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICES WILL MEET YOUR EXPECTATIONS; AND (e) ANY ERRORS IN THE SERVICES OR SOFTWARE WILL BE CORRECTED. (3) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICES IS DONE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL. (4) NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM ADx Healthcare OR THROUGH OR FROM THE SERVICES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TOS. (5) YOU SHOULD ALWAYS USE CAUTION WHEN GIVING OUT ANY PERSONALLY IDENTIFYING INFORMATION ABOUT YOURSELF OR THOSE FOR WHOM YOU HAVE LEGAL AUTHORITY. ADx Healthcare DOES NOT CONTROL OR ENDORSE ANY ACTIONS RESULTING FROM YOUR PARTICIPATION IN THE SERVICES AND, THEREFORE, ADx Healthcare SPECIFICALLY DISCLAIMS ANY LIABILITY WITH REGARD TO ANY ACTIONS RESULTING FROM YOUR USE OF AND/OR PARTICIPATION IN THE SERVICES.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">25. Limitation of Liability</span><br>\n" +
    "                                            WITHIN THE LIMITS ALLOWED BY APPLICABLE LAWS, YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT ADx Healthcare SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF ADx Healthcare HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (a) THE USE OR THE INABILITY TO USE THE SERVICES; (b) ANY ACTION YOU TAKE BASED ON THE INFORMATION YOU RECEIVE IN, THROUGH, OR FROM THE SERVICES; (c) YOUR FAILURE TO KEEP YOUR PASSWORD OR ACCOUNT DETAILS SECURE AND CONFIDENTIAL; (d) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION, OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE SERVICES; (e) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (f) THE IMPROPER AUTHORIZATION FOR THE SERVICES BY SOMEONE CLAIMING SUCH AUTHORITY; or (g) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICES.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">26. Notice</span><br>\n" +
    "                                            Notices to you may be made via email, regular mail, or by displaying notices or links to notices on the ADx Healthcare website.\n" +
    "                                            Official notices related to this TOS must be sent to us at:<br>\n" +
    "                                            ADx Healthcare, Inc.<br>\n" +
    "                                            ATTN: President<br>\n" +
    "                                            3614 Meridian Street, Suite 100<br>\n" +
    "                                            Bellingham, WA 98225<br>\n" +
    "\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            ADx Healthcare accepts service of process at this address. Any notices that you provide to ADx Healthcare without compliance with this section shall have no legal effect.\n" +
    "                                            For more general questions or matters concerning your account, you may also reach ADx Healthcare by email at cs@adxhealthcare.com, or by telephone at 1.833.ADX.HELP or U.S. Toll Free at 833.ADX.HELP\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">27. Changes to the Terms of Service</span><br>\n" +
    "                                            At our sole discretion, ADx Healthcare may make changes to the TOS from time to time. When these changes are made, ADx Healthcare will make a new copy of the TOS available on its website. All changes are effective immediately upon posting to the ADx Healthcare’s website and will apply to all access to and use of the Services from that point onward.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            You acknowledge and agree that if you use the Services after the date on which the TOS have changed, ADx Healthcare will treat your use as acceptance of the updated TOS. If you do not want to agree to changes to the TOS, you can terminate your agreement with ADx Healthcare at any time per Section 19 (Termination).\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">28. Violation or Suspected Violation of Terms of Service</span><br>\n" +
    "                                            If you violate the terms of these TOS and/or ADx Healthcare has a reasonable ground to suspect that you have violated the terms of these TOS, ADx Healthcare has the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">29.	Miscellaneous</span><br>\n" +
    "                                            Entire Agreement. The TOS and all applicable additional terms, guidelines, or rules referenced herein (e.g., our Privacy Policy) constitute the entire agreement between you and ADx Healthcare and govern your use of the Services, superseding any prior agreements between you and ADx Healthcare on this subject. You also may be subject to additional terms and conditions that may apply when you use affiliate services, third-party content, or third-party software\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Applicable law and arbitration. Except for any disputes relating to intellectual property rights, obligations, or any infringement claims, any disputes with ADx Healthcare arising out of or relating to the TOS (\"Disputes\") shall be governed by Washington law regardless of your country of origin or where you access ADx Healthcare Services, and notwithstanding of any conflicts of law principles and the United Nations Convention for the International Sale of Goods. Any Disputes shall be resolved by final and binding arbitration under the rules and auspices of the American Arbitration Association, to be held in Bellingham, Washington, in English, with a written decision stating legal reasoning issued by the arbitrator(s) at either party's request, and with arbitration costs and reasonable documented attorneys' costs of both parties to be borne by the party that ultimately loses. Either party may obtain injunctive relief (preliminary or permanent) and orders to compel arbitration or enforce arbitral awards in any court of competent jurisdiction.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Waiver. The failure of ADx Healthcare to exercise or enforce any right or provision of the TOS shall not constitute a waiver of such right or provision. If any provision of the TOS is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of the TOS remain in full force and effect.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Term for cause of action. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the Services or the TOS must be filed within one (1) year after such claim or cause of action arose or be forever barred.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Admissibility of printed version. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Section numbers and titles. The section numbers and titles in the TOS are for convenience only and have no legal or contractual effect.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Severability Clause. If any portion of these TOS is found to be unenforceable, the remaining portion will remain in full force and effect.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Assignment: You may not assign or delegate any rights or obligations under the TOS. Any purported assignment and delegation shall be ineffective. We may freely assign or delegate all rights and obligations under the TOS, fully or partially without notice to you. We may also substitute, by way of unilateral novation, effective upon notice to you, ADx Healthcare for any third party that assumes our rights and obligations under this TOS.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"section__wrap\">\n" +
    "                            <h3 class=\"txt-blue txt-center anim-content-transition\">Privacy Policy</h3>\n" +
    "                            <div class=\"txt__wrap\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-sm-6 anim-content-transition\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">ADx Healthcare Privacy Policy (June 2018)</span>\n" +
    "                                        </p>\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            ADx Healthcare respects your privacy and is committed to protecting it through our compliance with this privacy policy (“Privacy Policy”). This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website or use our Services (in accordance with our Terms of Service) and our practices for collecting, using, maintaining, protecting and disclosing that information. Please read our Privacy Policy carefully to understand how we collect, use, protect or otherwise handle your information. If you do not agree with our policies and practices, you may choose not to use our website and Services. By accessing or using the website and Services, you agree to this Privacy Policy.\n" +
    "                                        </p>\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Capitalized terms used but not defined in this Privacy Policy have the meaning given to them in our other policies (e.g., our Terms of Service and Consent Documents).\n" +
    "                                        </p>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">What information do we collect?</span><br>\n" +
    "                                                We collect several types of information from and about users of our Services and visitors to our website, blog, and app. When ordering or registering on our website, you may be asked to provide Personal Information (e.g., your name, email address, mailing address, phone number, username, and payment information). We also collect Web Behavior Information (e.g., browser type, Internet connection, and usage details) to help us improve your experience with our Services. If you decide to utilize our Services and provide a sample for analysis, we will collect your Genetic and Self-Reported Information to enable us to provide those Services. We will also collect information about the details of any transactions you carry out through our website.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">When do we collect information?</span><br>\n" +
    "                                                We collect information directly when you provide it to us, for example when you register on our website, subscribe to a newsletter, respond to a survey, fill out a form, or enter information on our site. You may also provide User Content to be published or displayed on our website. We also automatically collect Web Behavior Information as you navigate through our website.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                You can review and change your Personal Information by logging into our website and visiting your account profile page. You may also send us an email at cs@adxhealthcare.com to request access to, or to correct or delete any Personal Information that you have provided to us. We cannot delete your Personal Information except by also deleting your account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                If you delete your User Content from the website, copies of your User Content may remain viewable in cached and archived pages, or might have been copied or stored by other users. Proper access and use of information provided on our website or through our Services, including User Content, is governed by our TOS.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">How do we use your information?</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                We may use the information we collect from you in the following ways:\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div>\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <ul class=\"txt-middle txt-black\">\n" +
    "                                                    <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>\n" +
    "                                                    <li>To quickly process your transactions</li>\n" +
    "                                                    <li>To provide you with information, products, or Services that you request from us.</li>\n" +
    "                                                    <li>To send test results to your designated provider.</li>\n" +
    "                                                    <li>To send periodic emails regarding your account, your order, or other products and services.</li>\n" +
    "                                                    <li>To follow up after correspondence (live chat, email or phone inquiries).</li>\n" +
    "                                                    <li>To notify you about changes to our website, our policies, terms, or any products or Services we offer or provide.</li>\n" +
    "                                                    <li>To further ADx Healthcare Research, but only if you have given consent for your Genetic and Self-Reported Information to be used for such purposes.</li>\n" +
    "                                                </ul>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                We may also use your information to contact you about our own and third parties’ goods and services that may be of interest to you. If you do not want us to use your information in this way, please email us at cs@adxhealthcare.com to opt out.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">How do we use your information for ADx Healthcare Research?</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                If you have given consent for your Genetic Information and Self-Reported Information to be used in ADx Healthcare Research as described in the applicable Consent Document, we may include your information in the Aggregated Genetic Information and Self-Reported Information we disclose to third parties for the purpose of publication in a peer-reviewed scientific journal.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                ADx Healthcare will never disclose your individual-level Genetic Information and/or Self-Reported Information to any third party without asking for and receiving your explicit consent to do so, unless required by law.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">When may we disclose your Personal Information?</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                We will not sell or trade your Personal Information to outside parties. However, we may disclose Personal Information that we collect or that you provide:</p>\n" +
    "                                                <ul class=\"txt-middle txt-black\">\n" +
    "                                                <li>To our subsidiaries and affiliates.</li>\n" +
    "                                                <li>To partners, contractors, service providers and other third parties we use to support our business and who are bound by contractual obligations to keep Personal Information confidential and use it only for the purposes for which we disclose it to them.</li>\n" +
    "                                                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which Personal Information held by us about our users is among the assets transferred, and you agree to and do hereby consent to our assignment or transfer of rights to your Personal Information.</li>\n" +
    "                                                <li>For any other purpose disclosed by us when you provide the information.</li>\n" +
    "                                                <li>With your consent.</li>\n" +
    "                                                </ul>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                You acknowledge and agree that ADx Healthcare is free to preserve and disclose any and all Personal Information to law enforcement or other regulatory agencies if required to do so by law or in the good faith belief that such preservation or disclosure is reasonably necessary to: (a) comply with any legal process (such as a judicial proceeding, court order, or government or regulatory inquiry); (b) enforce the ADx Healthcare TOS; (c) respond to claims that any content violates the rights of third parties; or (d) protect the rights, property, or personal safety of ADx Healthcare, its employees, its users, its clients, and the public. You understand that the technical processing and transmission of the Services, including your Personal Information, may involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks, or devices.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">How do we protect your information?</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                We have implemented measures designed to secure your information from accidental loss and from unauthorized access, use, alteration and disclosure. Your information is stored behind secured networks and is only accessible to a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology. We do not collect credit card information; all transactions are processed through a gateway provider and are not stored or processed on our servers. We use regular Malware Scanning and implement a variety of other security measures when a user places an order, enters, submits, or accesses their information to maintain the safety of your Personal Information.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                The safety and security of your information also depends on you. You are responsible for maintaining the confidentiality of your password and account, and are fully responsible for all activities that occur under your password or account. You should not share your password with anyone. When accessing your account from a public or shared computer, you should use particular caution so that others are not able to view or record your password or your other information.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your Personal Information, we cannot guarantee the security of your Personal Information transmitted to our website. Any transmission of Personal Information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the website.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">Do we use ‘cookies’?</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">Third-party links</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                Some content, including advertisements and links, on our website are served by third parties, including advertisers, ad networks and servers, content providers and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our website. The information they collect may be associated with your Personal Information or they may collect information, including Personal Information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                We do not control these third parties’ tracking technologies or how they may be used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                For example, we use Google AdSense Advertising on our website. Google, as a third-party vendor, uses cookies to serve ads on our site. Google’s use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy. You can set your preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">Genetic Information Nondisclosure Act (GINA)</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                GINA was signed into law in the United States in 2008 to protect against discrimination based on genetic information by employers and health insurance companies for employment and coverage issues. You should be careful about sharing your Genetic Information with others as Genetic Information that you share with others could be used against your interests. In addition, GINA does not protect against discrimination by, for example, long-term health, life, and disability insurance providers, or the military. Some, but not all, states and other jurisdictions have laws that protect individuals with regard to their Genetic Information. You may want to consult a lawyer to understand the extent of legal protection of your Genetic Information before you share it with anybody.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                Genetic Information that you choose to share with your physician or other healthcare provider may become part of your medical record and through that route may be accessible to other healthcare providers and/or insurance companies in the future. Genetic Information that you share with family, friends or employers may also be used against your interests. Even if you share Genetic Information that has limited or no meaning today, that information could have greater meaning in the future as new discoveries are made. In addition, if you are asked by an insurance company whether you have learned Genetic Information about your health conditions and you do not disclose this to them, this may be considered to be fraud.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">Children’s Online Privacy Protection Act (“COPPA”)</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                When it comes to the collection of information from children under the age of 13 years old, the Children’s Online Privacy Protection Act (COPPA) puts parents in control. The United States Federal Trade Commission (“FTC”) enforces COPPA, which spells out what operators of websites and online services must do to protect children’s privacy and safety online. We comply with all applicable COPPA requirements and do not specifically market our Services to children under the age of 13 years old.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">Fair Information Practices</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                The FTC has also set forth the Fair Information Practices Principles as guidelines for the use of information in an electronic marketplace. In line with the Fair Information Practices, should a data breach occur, within 7 business days, we will notify you via email and via notices or links to notices on the ADx Healthcare website.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                We also agree to follow the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the guidelines. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse through courts or government agencies to investigate and/or prosecute non-compliance by data processors.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">CAN-SPAM Act</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations. We collect your email address in order to:\n" +
    "                                            </p>\n" +
    "                                            <ul class=\"txt-middle txt-black\">\n" +
    "                                                <li>Send information and respond to inquiries and/or other requests or questions;</li>\n" +
    "                                                <li>Process orders and to send information and updates pertaining to orders;</li>\n" +
    "                                                <li>Send you additional information related to your product and/or Services;</li>\n" +
    "                                                <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>\n" +
    "                                            </ul>\n" +
    "                                            <p>\n" +
    "                                                In accordance with CAN-SPAM, we agree to:\n" +
    "                                            </p>\n" +
    "                                            <ul class=\"txt-middle txt-black\">\n" +
    "                                                <li>Not use false or misleading subjects or email addresses.</li>\n" +
    "                                                <li>Identify the message as an advertisement in some reasonable way.</li>\n" +
    "                                                <li>Include the physical address of our business or site headquarters.</li>\n" +
    "                                                <li>Monitor third-party email marketing services for compliance, if one is used.</li>\n" +
    "                                                <li>Honor opt-out/unsubscribe requests quickly.</li>\n" +
    "                                                <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>\n" +
    "                                            </ul>\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                If at any time you would like to unsubscribe from receiving future emails, you can follow the instructions at the bottom of each email and we will promptly remove you from ALL correspondence.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">Changes to this Privacy Policy</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                ADx Healthcare reserves the right to make changes to this Privacy Policy at any time. When these changes are made, we will make a new copy of the Privacy Policy available on this page. If we make material changes to how we treat our users’ personal information, we will notify you by email to the email address specified in your account and/or through a notice on our Privacy Policy page. All changes are effective immediately upon posting to this page; the date the Privacy Policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting this Privacy Policy page to check for any changes.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">Contacting Us</span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                If you have any questions regarding this Privacy Policy, you may contact us using the information below.<br>\n" +
    "                                                ADx Healthcare<br>\n" +
    "                                                3614 Meridian Street, Suite 100<br>\n" +
    "                                                Bellingham, WA 98225<br>\n" +
    "                                                USA<br>\n" +
    "                                                cs@adxhealthcare.com<br>\n" +
    "                                                1.833.ADX.HELP<br>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/login/login.tpl.html",
    "<update-meta property=\"og:title\" content=\"ADx Healthcare - Sign In\"></update-meta>\n" +
    "<update-meta name=\"twitter:title\" content=\"ADx Healthcare - Sign In\"></update-meta>\n" +
    "\n" +
    "<div class=\"login-page login-bgc\">\n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div class=\"login-form__wrap\">\n" +
    "        <div class=\"login-form\">\n" +
    "          <h6 class=\"txt-small txt-medium txt-blue-dark txt-center\">Sign in to ADx Healthcare</h6>\n" +
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
    "              <a href ui-sref=\"master.forgot_password\" class=\"txt-link txt-blue-2 txt-small txt-medium\">\n" +
    "                Forgot your password?\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <button class=\"bt-round bt-round--large bt-round--blue-dark\" type=\"submit\" ng-disabled=\"form.$invalid\" test-hook=\"login-button\"><span class=\"txt-medium\">Sign-in</span></button>\n" +
    "            </div>\n" +
    "            <div class=\"txt--indent-small txt-center\">\n" +
    "              <a href ui-sref=\"master.register\" class=\"txt-link txt-blue-2 txt-small txt-medium\">\n" +
    "                I need to create an account\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "          <br>\n" +
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

angular.module("components/master/master_signedin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/master/master_signedin.tpl.html",
    "<div class=\"error-message error-animate-show-signedin\" ng-show=\"error.displayMessage\">\n" +
    "  <div class=\"container-fluid main-side-gap main-page-width\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-12 \">\n" +
    "        <i class=\"fa fa-info-circle fa-lg space-right\"></i> {{error.displayMessage}}\n" +
    "        <a class=\"pull-right\" ng-click=\"closeError()\"><i class=\"fa fa-close fa-lg\"></i></a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"page\" ng-class=\"{'logged-out' :  !hideSideNavBar}\">\n" +
    "  <div ng-include=\"'components/master/side-navbar.tpl.html'\"></div>\n" +
    "\n" +
    "  <div class=\"container-page page-transition-anim\" ui-view></div>\n" +
    "</div>");
}]);

angular.module("components/master/master.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/master/master.tpl.html",
    "<div class=\"page\" ng-class=\"{'logged-out' :  !hideSideNavBar}\">\n" +
    "\n" +
    "  <div class=\"error-message error-animate-show\" ng-show=\"error.displayMessage\">\n" +
    "    <div class=\"container-fluid main-side-gap main-page-width\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-12 \">\n" +
    "          <i class=\"fa fa-info-circle fa-lg space-right\"></i> {{error.displayMessage}}\n" +
    "          <a class=\"pull-right\" ng-click=\"closeError()\"><i class=\"fa fa-close fa-lg\"></i></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <app-header class=\"hideSideNavBar\"></app-header>\n" +
    "  <div class=\"container-page page-transition-anim\" ui-view></div>\n" +
    "  <app-footer ng-show=\"showFooter\"></app-footer>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/master/side-navbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/master/side-navbar.tpl.html",
    "<nav class=\"side-navbar\" ng-class=\"{'open': mobileMenuVisible}\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "      <!--logo header-->\n" +
    "      <div class=\"side-navbar__logo\">\n" +
    "        <a ui-sref=\"master.home\" class=\"header-logo__link\">\n" +
    "          <img class=\"img\" src=\"./assets/images/logo-img.png\" alt=\"\">\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <!--end logo header-->\n" +
    "      \n" +
    "      <!--mobile button-->\n" +
    "      <div class=\"side-navbar__mobile-button hide-desktop-md\">\n" +
    "        <div class=\"mobile-button\" ng-click=\"toggleMobileMenu()\" ng-class=\"{'toggle': mobileMenuVisible}\">\n" +
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
    "            {{ userName }}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"side-navbar-account__button\">\n" +
    "          <a ui-sref=\"master_signedin.profile\" ng-click=\"toggleMobileMenu()\" class=\"button-circle\" uib-tooltip=\"Profile\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n" +
    "          <button uib-tooltip=\"Logout\" ui-sref=\"master.logout\"  class=\"button-circle\" ng-click=\"toggleMobileMenu()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"side-navbar__navigation\">\n" +
    "        <div class=\"side-navbar-navigation__wrap\">\n" +
    "          <div class=\"side-navbar-navigation__link\">\n" +
    "            <ul class=\"side-navbar-navigation-link__wrap side-navbar-navigation-link__wrap--home\">\n" +
    "              <li class=\"side-navbar-navigation-link__item side-navbar-navigation-link__item--not-space\">\n" +
    "                <a ng-class=\"{'active-bgc-blue': isHomeActive}\" ui-sref=\"master_signedin.results({'page':''})\" class=\"navbar-link navbar-link--second\">\n" +
    "                  <span class=\"link-icon-inline\">\n" +
    "                    <ng-include class=\"link-icon--inner\" src=\"'./assets/images/icon/home.svg'\"></ng-include>\n" +
    "                  </span>\n" +
    "                  <span class=\"txt txt-black\">{{menuTitle}}</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"side-navbar-navigation-link__wrap\" ng-show=\"showResults\">\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref-active=\"active-number-blue\" ng-click=\"toggleMobileMenu()\" ui-sref=\"master_signedin.results({'page':'p1'})\" class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">1</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt-small txt-blue-dark\">Your result</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref-active=\"active-number-blue\" ng-click=\"toggleMobileMenu()\" ui-sref=\"master_signedin.results({'page':'p2'})\"  class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">2</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt-small txt-blue-dark\">About Alzheimer’s disease</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref-active=\"active-number-blue\" ng-click=\"toggleMobileMenu()\" ui-sref=\"master_signedin.results({'page':'p3'})\"  class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">3</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt-small txt-blue-dark\">Take action</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref-active=\"active-number-blue\" ng-click=\"toggleMobileMenu()\" ui-sref=\"master_signedin.results({'page':'p4'})\"  class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">4</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt-small txt-blue-dark\">Next steps</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"side-navbar-navigation-link__wrap\">\n" +
    "              <li class=\"side-navbar-navigation-link__item side-navbar-navigation-link__item--not-space\">\n" +
    "                <a ui-sref-active=\"active-bgc-blue\" ng-click=\"toggleMobileMenu()\" ui-sref=\"master_signedin.results({'page':'science'})\" class=\"navbar-link navbar-link--second\">\n" +
    "                  <span class=\"link-icon-inline\">\n" +
    "                    <ng-include class=\"link-icon--inner\" src=\"'./assets/images/icon/dna-blue.svg'\"></ng-include>\n" +
    "                  </span>\n" +
    "                  <span class=\"txt txt-black\">Science</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item side-navbar-navigation-link__item--not-space\">\n" +
    "                <a ui-sref-active=\"active-bgc-blue\" ng-click=\"toggleMobileMenu()\" ui-sref=\"master_signedin.results({'page':'sharing'})\"  class=\"navbar-link navbar-link--second\">\n" +
    "                  <span class=\"link-icon-inline\">\n" +
    "                    <ng-include class=\"link-icon--inner\" src=\"'./assets/images/icon/users.svg'\"></ng-include>\n" +
    "                  </span>\n" +
    "                  <span class=\"txt txt-black\">Share results</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item side-navbar-navigation-link__item--not-space\">\n" +
    "                <a ui-sref-active=\"active-bgc-blue\" ng-click=\"toggleMobileMenu()\" ui-sref=\"master_signedin.results({'page':'questions'})\" class=\"navbar-link navbar-link--second\">\n" +
    "                  <span class=\"link-icon-inline\">\n" +
    "                    <ng-include class=\"link-icon--inner\" src=\"'./assets/images/icon/question.svg'\"></ng-include>\n" +
    "                  </span>\n" +
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

angular.module("components/products/pages/about-products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/pages/about-products.tpl.html",
    "<update-meta property=\"og:title\" content=\"ADx Healthcare - Alzheimer's ApoE Genetic Test\"></update-meta>\n" +
    "<update-meta name=\"twitter:title\" content=\"ADx Healthcare - Alzheimer's ApoE Genetic Test\"></update-meta>\n" +
    "\n" +
    "<div class=\"about-products\">\n" +
    "  <div class=\"about-products-head\">\n" +
    "    <div class=\"container-fluid container-fluid--section\">\n" +
    "      <div class=\"container-lg\">\n" +
    "        <div class=\"container-flex container-flex--column-md\">\n" +
    "          <div class=\"flex-column anim-content-transition\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"about-products-head__img\">\n" +
    "                <img class=\"head-image\" src=\"../../../assets/images/home-page/helix-front-right.png\" alt=\"\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column anim-content-transition\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"title__wrap anim-content-transition\">\n" +
    "                <h1 class=\"txt-blue-dark\">Alzheimer's ApoE<br>Genetic Test</h1>\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent-small txt__wrap--border-bottom anim-content-transition\">\n" +
    "                <p class=\"txt txt-black\">\n" +
    "                  In the fight against late-onset Alzheimer’s disease, early awareness about risk may empower you to make lifestyle changes now to protect your future self. Live a healthy lifestyle to possibly reduce your risk for or delay the onset of late-onset Alzheimer’s disease.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent-small txt__wrap--border-bottom anim-content-transition\">\n" +
    "                <div class=\"container-flex txt--indent-small\">\n" +
    "                  <div class=\"column\">\n" +
    "                    <p class=\"txt-large txt-black\">Alzheimer’s Genetic Test</p>\n" +
    "                  </div>\n" +
    "                  <div class=\"column\">\n" +
    "                    <p class=\"txt txt-black\">$159.00</p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"container-flex txt--indent-small\">\n" +
    "                  <div class=\"column\">\n" +
    "                    <p class=\"txt-large txt-black\">Helix DNA kit</p>\n" +
    "                  </div>\n" +
    "                  <div class=\"column\">\n" +
    "                    <p class=\"txt txt-black\">$80.00</p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"txt--indent-small\">\n" +
    "                  <p class=\"txt txt-black\">Required one time only so Helix can collect a saliva sample from you and sequence your DNA.</p>\n" +
    "                </div>\n" +
    "                <div class=\"txt--indent-small pre-results-box-flex\">\n" +
    "                  <div class=\"pre-results-box-flex-1 checkbox checkbox--not-space\">\n" +
    "                    <input ng-model=\"haveKit\" type=\"checkbox\" id=\"checkbox-private\" class=\"checkbox-input\" ng-change=\"checkboxChanged(haveKit)\">\n" +
    "                    <label for=\"checkbox-private\" class=\"checkbox-label checkbox-label--small\"></label>\n" +
    "                  </div>\n" +
    "                  <div class=\"pre-results-box-flex-2 anim-content-transition\">\n" +
    "                    <div class=\"txt txt-black\">\n" +
    "                      I already have or registered a <span class=\"txt-bold\">Helix DNA kit</span>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap container-flex anim-content-transition\">\n" +
    "                <div class=\"column\">\n" +
    "                  <p class=\"txt txt-black\">Price:</p>\n" +
    "                </div>\n" +
    "                <div class=\"column\">\n" +
    "                  <div class=\"txt-large txt-large--exl txt-black\">{{ totalPrice | currency:\"$\" }}</div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"button__wrap button__wrap--not-space-bottom-sm\">\n" +
    "                <button class=\"bt-round bt-round--all-width bt-round--blue-dark\" ng-click=\"purchaseClicked()\"><span class=\"txt-large txt-bold\">Order Test</span></button>\n" +
    "              </div>\n" +
    "              <div class=\"button__wrap button__wrap--not-space-bottom-sm\">\n" +
    "                <a href=\"mailto:support@adxhealthcare.com\" target=\"_top\" class=\"bt-round bt-round--all-width bt-round--gray\"><span class=\"txt-large txt-gray txt-bold\">Multiple order, contact us</span></a>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!-- disclaimer commented out for now\n" +
    "        <div class=\"txt__wrap anim-content-transition\">\n" +
    "          <p class=\"txt txt-black txt-center\">To use this product, you must be 18 or older and be a U.S. resident. Not available for residents of Alaska, Arkansas, Delaware,\n" +
    "            Hawaii, Idaho, Maine, Missouri, Nevada, New York, Tennessee, West Virgina, Wisconsin, or Wyoming. Clarify your diabetes diagnosis</p>\n" +
    "        </div>\n" +
    "        --->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <section class=\"about-products-section-second anim-content-transition\">\n" +
    "      <div class=\"container-round container-round--silver hide-mobile\">\n" +
    "        <div class=\"container-lg container-flex\">\n" +
    "          <a href=\"#about\" smooth-scroll class=\"bt-round bt-round--lg bt-round--gray bt-round--gray-hover-blue anim-content-transition\"><span class=\"txt-large txt-gray-2 txt-bold\">About the test</span></a>\n" +
    "          <a href=\"#whyAdx\" smooth-scroll class=\"bt-round bt-round--lg bt-round--gray bt-round--gray-hover-blue anim-content-transition\"><span class=\"txt-large txt-gray-2 txt-bold\">Why ADx</span></a>\n" +
    "          <a href=\"#labPartner\" smooth-scroll class=\"bt-round bt-round--lg bt-round--gray bt-round--gray-hover-blue  anim-content-transition\"><span class=\"txt-large txt-gray-2 txt-bold\">Helix Lab partner</span></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"section-box-shadow section-box-shadow--space-inner anim-content-transition\">\n" +
    "        <div class=\"container-lg\">\n" +
    "          <div class=\"txt__wrap--border-bottom container-flex container-flex--column-reverse-md align-items--center\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"img__wrap--md img--center-md\">\n" +
    "                <img class=\"img img--md\" src=\"./assets/images/products/female-doctor.png\" alt=\"\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column-2\">\n" +
    "              <div class=\"container-sub-head txt-left-space\">\n" +
    "                <h2 class=\"txt-blue-dark txt-center-md\">Is this test right for me?</h2>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <p class=\"txt txt-black txt-center-md\">The Alzheimer's ApoE Genetic Test is developed to help individuals interested in learning their genetic risk for late-onset Alzheimer’s disease and how their Alzheimer’s disease risk changes with age.</p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div id=\"whyAdx\" class=\"title__wrap\">\n" +
    "            <h1 class=\"txt-blue txt-center\">Why should I take this test?</h1>\n" +
    "          </div>\n" +
    "          <div class=\"txt__wrap\">\n" +
    "            <p class=\"txt txt-black txt-center\">With knowledge comes power. The power to act and the power to plan. Learning about genetic risk for Alzheimer’s disease isn’t for everyone, but if you are a proactive person who wants to be able to impact your future health as much as possible, then identifying your risk level for Alzheimer’s disease may be a good fit.  Having a reason to follow a set of lifestyle changes makes it easier to stick with it on those difficult days when you lack motivation. Learning your genetic risk for Alzheimer’s disease may be your first step towards protecting your future self.</p>\n" +
    "          </div>\n" +
    "         <div class=\"section__wrap-sm\">\n" +
    "           <div class=\"container-flex align-items--center txt__wrap  container-flex--column-reverse-md\">\n" +
    "             <div class=\"flex-column\">\n" +
    "               <div class=\"img__wrap--md img--center-md\">\n" +
    "                 <ng-include class=\"img img--md\" src=\"'./assets/images/svg/Apoe.svg'\" alt=\"\"></ng-include>\n" +
    "               </div>\n" +
    "             </div>\n" +
    "             <div class=\"flex-column-2\">\n" +
    "               <div class=\"container-sub-head txt-left-space\">\n" +
    "                 <h2 class=\"txt-blue-dark txt-center-md\">Actionable insights</h2>\n" +
    "                 <div class=\"txt__wrap\">\n" +
    "                   <p class=\"txt txt-black txt-center-md\">Along with your ApoE genotype, your report will include brain healthy lifestyle recommendations and links to support organizations and sources for more information on late-onset Alzheimer's disease.</p>\n" +
    "                 </div>\n" +
    "               </div>\n" +
    "             </div>\n" +
    "           </div>\n" +
    "         </div>\n" +
    "          <div class=\"container-flex align-items--center txt__wrap container-flex--column-md\">\n" +
    "            <div class=\"flex-column-2\">\n" +
    "              <div class=\"container-sub-head txt-right-space\">\n" +
    "                <h2 class=\"txt-blue-dark txt-center-md\">Detailed explanations</h2>\n" +
    "                <div class=\"txt__wrap txt-center-md\">\n" +
    "                  <p class=\"txt txt-black\"><b>Your report will provide a detailed explanation of: </b></p>\n" +
    "                  <p class=\"txt txt-black\"> - How ApoE works in your body</p>\n" +
    "                  <p class=\"txt txt-black\"> - What your ApoE genotype is</p>\n" +
    "                  <p class=\"txt txt-black\"> - How your risk for Alzheimer’s disease will change as you age</p>\n" +
    "                  <p class=\"txt txt-black\"> - How your risk for Alzheimer’s disease compares to the population average</p>\n" +
    "                  <p class=\"txt txt-black\"> - How to make lifestyle changes to improve your cognitive health.</p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"img__wrap--md img--center-md\">\n" +
    "                <img class=\"img img--md\" src=\"./assets/images/products/doctor-and-patient.png\" alt=\"\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "    \n" +
    "    <section class=\"about-products-section-third\">\n" +
    "      <div class=\"container-lg\">\n" +
    "        <div class=\"row__wrap--space-top\">\n" +
    "          <h3 class=\"txt-blue-dark txt-center\">The ADx advantage over it’s competitors</h3>\n" +
    "          <div class=\"container-flex container-flex--column-sm\">\n" +
    "            <div class=\"box-wrap box-wrap--large\">\n" +
    "              <div class=\"box-with-header-colored\">\n" +
    "                <div class=\"box-colored-head box-colored-head--blue-dark\">\n" +
    "                  <h4 class=\"txt-center\">ADx Healthcare</h4>\n" +
    "                </div>\n" +
    "                <ul class=\"box-colored-content\">\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">At home test</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">Saliva test </p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">Physician review</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">Genetic counseling</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">Actionable insights to build brain health</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "           <div class=\"box-wrap\">\n" +
    "             <div class=\"box-with-header-colored box-with-header-colored--not-shadow-left\">\n" +
    "               <div class=\"box-colored-head box-colored-head--blue\">\n" +
    "                 <h4 class=\"txt-center\">Others</h4>\n" +
    "               </div>\n" +
    "               <ul class=\"box-colored-content\">\n" +
    "                 <li class=\"box-colored-content__item\">\n" +
    "                   <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                   <div class=\"txt-wrap-space-left\">\n" +
    "                     <p class=\"txt-large txt-blue-dark\">At home test</p>\n" +
    "                   </div>\n" +
    "                 </li>\n" +
    "                 <li class=\"box-colored-content__item\">\n" +
    "                   <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                   <div class=\"txt-wrap-space-left\">\n" +
    "                     <p class=\"txt-large txt-blue-dark\">Saliva test</p>\n" +
    "                   </div>\n" +
    "                 </li>\n" +
    "               </ul>\n" +
    "             </div>\n" +
    "           </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "    \n" +
    "    <section id=\"about\" class=\"about-products-section-fourth\">\n" +
    "      <div class=\"section-box-shadow section-box-shadow--space-inner-lg\">\n" +
    "        <div class=\"container-lg\">\n" +
    "          <h1 class=\"txt-blue txt-center\">Information about the product</h1>\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h4 class=\"txt-blue-dark txt-center\">All from home. No blood. No needles. Just a small saliva sample.</h4>\n" +
    "          </div>\n" +
    "          <div class=\"container-flex container-flex--column-md\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"info-about-column__wrap\">\n" +
    "                <div class=\"info-about__img\">\n" +
    "                  <ng-include src=\"'./assets/images/svg/test-tube.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "                <div class=\"info-about__txt\">\n" +
    "                  <div class=\"title__wrap title__wrap--not-space-top-md\">\n" +
    "                    <h3 class=\"txt-blue-dark txt-center\">Saliva Sample</h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt--indent-small txt-center\">\n" +
    "                    <p class=\"txt txt-black\">\n" +
    "                      Once an independent physician from PWNHealth authorizes your test, you will receive a sample kit in the mail. Collect your saliva sample and send the kit back to us for processing, in the prepaid packaging provided.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"info-about-column__wrap\">\n" +
    "                <div class=\"info-about__img\">\n" +
    "                  <ng-include src=\"'./assets/images/svg/tablet-checked.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "                <div class=\"info-about__txt\">\n" +
    "                  <div class=\"title__wrap title__wrap--not-space-top-md\">\n" +
    "                    <h3 class=\"txt-blue-dark txt-center\">Results</h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt--indent-small txt-center\">\n" +
    "                    <p class=\"txt txt-black\">Obtain your results privately from your own home. We will help you schedule your free genetic counseling session.</p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"info-about-column__wrap\">\n" +
    "                <div class=\"info-about__img\">\n" +
    "                  <ng-include src=\"'./assets/images/svg/сlapperboard.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "                <div class=\"info-about__txt\">\n" +
    "                  <div class=\"title__wrap title__wrap--not-space-top-md\">\n" +
    "                    <h3 class=\"txt-blue-dark txt-center\">Take action</h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt--indent-small txt-center\">\n" +
    "                    <p class=\"txt txt-black\">\n" +
    "                      Learn about lifestyle changes and modifiable risk factors as you takes steps that may improve your cognitive health and positively impact your risk for late-onset Alzheimer's disease.</p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "    \n" +
    "    <div id=\"labPartner\" class=\"about-products-section-fifth\">\n" +
    "      <div class=\"section-box-shadow\">\n" +
    "        <div class=\"about-products-section-fifth__wrap\">\n" +
    "          <div class=\"about-products-section-fifth__image-wrap\">\n" +
    "            <img class=\"about-products-section-fifth-img\" src=\"./assets/images/products/doctor-lab.png\" alt=\"\">\n" +
    "          </div>\n" +
    "          <div class=\"container-lg\">\n" +
    "            <div class=\"container-flex align-items--center about-products-section-fifth--container-txt\">\n" +
    "              <div class=\"flex-column\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"about-products-section-fifth__txt\">\n" +
    "                    <h3 class=\"txt-blue-dark txt-center-md\">Helix our lab partner</h3>\n" +
    "                    <div class=\"txt__wrap txt-center-md\">\n" +
    "                      <p class=\"txt txt-black\">\n" +
    "                        Helix is a personal genomics company with a simple but powerful mission: to empower every person to improve their life through DNA.\n" +
    "                        We’ve created the first marketplace for DNA-powered products where people can explore diverse and uniquely personalized products developed by high quality partners.\n" +
    "                        <br>\n" +
    "                        Helix handles sample collection, DNA sequencing, and secure data storage so that our partners can integrate DNA insights into products across a range of categories, including ancestry, entertainment, family, fitness, health and nutrition. From profound insights to just-for-fun discoveries, Helix is here to help people live a fuller life.\n" +
    "                        Learn more at <a href=\"mailto:www.Helix.com\" target=\"_top\">www.helix.com.</a>\n" +
    "                      </p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  \n" +
    "    <!--section fourth home-->\n" +
    "<!--section fourth-->\n" +
    "    <div ng-include=\"'templates/care_questions.tpl.html'\"></div>\n" +
    "    <!--end section home fourth-->\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "</div>");
}]);

angular.module("components/products/products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/products.tpl.html",
    "<ui-view class=\"page-transition-anim\"></ui-view>\n" +
    "");
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
    "                                <p class=\"txt-small txt-black\">affirmativ shop inc. 2018</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"column-flex\">\n" +
    "                                <p class=\"txt-small txt-black\">www.affirmativdiagnostics.com <span class=\"hypphen-space\">-</span> info@affirmativ.com<span class=\"hypphen-space\">-</span>Tel: 125 627 387</p>\n" +
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
    "                                Your test result will explain which combination of the ApoE alleles you have. This genetic combination will be further interpreted, to help you identify your lifetime risk for developing Alzheimer’s disease, based on your genetics and your current age. Your ApoE status will not change as you age, but as you age your chance of developing Alzheimer’s will increase at a different rate dependent on which ApoE combination you have. A genetics counselor will be available to go through your results with you if you have questions.\n" +
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
    "<div class=\"profile-page\">\n" +
    "\n" +
    "    <div class=\"section__wrap section__wrap--space-bottom\">\n" +
    "        <div class=\"container-lg--dashboard\">\n" +
    "            <div class=\"section-box-shadow\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark txt-center\">Personal Information</h2>\n" +
    "                </div>\n" +
    "                <div class=\"profile-info__wrap\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <form name=\"form\"  ng-submit=\"submitForm(profile)\" novalidate class=\"col-sm-6 profile-edit-form\">\n" +
    "                            <div ng-show=\"!complete\">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Firstname</label>\n" +
    "                                    <input type=\"text\" name=\"first_name\" class=\"form-control\" ng-model=\"profile.user.first_name\"  ng-minlength=\"3\" required>\n" +
    "                                    <p ng-show=\"form.first_name.$error.minlength && !form.first_name.pristine\" class=\"error\">You firstname is too short</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Lastname</label>\n" +
    "                                    <input type=\"text\" name=\"last_name\" class=\"form-control\" ng-model=\"profile.user.last_name\"  ng-minlength=\"3\" required>\n" +
    "                                    <p ng-show=\"form.last_name.$error.minlength && !form.last_name.pristine\" class=\"error\">You lastname is too short</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Email</label>\n" +
    "                                    <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"profile.user.email\" required>\n" +
    "                                    <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                                        <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                                        <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label for=\"gender\">Gender</label>\n" +
    "                                    <div>\n" +
    "                                        <select class=\"form-control\" name=\"gender\" id=\"gender\" ng-model=\"profile.gender\" required title=\"Gender\">\n" +
    "                                            <option value=\"\" selected>Select Gender</option>\n" +
    "                                            <option value=\"male\">Male</option>\n" +
    "                                            <option value=\"female\">Female</option>\n" +
    "                                        </select>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Date of Birth</label>\n" +
    "                                    <input type=\"date_of_birth\" name=\"date_of_birth\" class=\"form-control\" ng-model=\"profile.date_of_birth\" placeholder=\"YYYY-MM-DD\" required>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <label>Phone</label>\n" +
    "                                    <input type=\"phone\" name=\"phone\" class=\"form-control\" ng-model=\"profile.phone\">\n" +
    "                                </div>\n" +
    "                                <div class=\"container-flex container-flex--column-xs  profile-button__wrap\">\n" +
    "                                    <div class=\"flex-column\">\n" +
    "                                        <button test-hook=\"update-profile\" type=\"submit\" class=\"bt-round bt-round--blue\">Submit</button>&nbsp;&nbsp;\n" +
    "                                    </div>\n" +
    "                                    <div class=\"flex-column profile-button__inner\">\n" +
    "                                        <button class=\"bt-round bt-round--gray\" ui-sref=\"master_signedin.profile\">Cancel</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/profile/profileView.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/profile/profileView.tpl.html",
    "<div class=\"profile-page\">\n" +
    "    \n" +
    "    <!--section first -->\n" +
    "    <div class=\"section__wrap\">\n" +
    "        <div class=\"container-lg--dashboard\">\n" +
    "            <div class=\"section-box-shadow\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark txt-center\">Account information</h2>\n" +
    "                </div>\n" +
    "                <div class=\"profile-info__wrap\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"txt txt-blue-dark txt-medium\">Email</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"txt txt-black\">\n" +
    "                                <div class=\"profile-view--display-column-wrap\">\n" +
    "                                    <div class=\"profile-view-column-1\">\n" +
    "                                        {{profile.user.email}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"txt txt-blue-dark txt-medium\">Password</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <a class=\"txt txt-blue\"> Change Password</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--end section first-->\n" +
    "    \n" +
    "    <!--section second-->\n" +
    "    <div class=\"section__wrap--space-bottom\">\n" +
    "        <div class=\"container-lg--dashboard\">\n" +
    "            <div class=\"section-box-shadow\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark txt-center\">Personal information</h2>\n" +
    "                </div>\n" +
    "                <div class=\"profile-info__wrap\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"txt txt-blue-dark txt-medium\">Firstname</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"txt txt-black\">\n" +
    "                                {{profile.user.first_name}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"txt txt-blue-dark txt-medium\">Lastname</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"txt txt-black\">\n" +
    "                                {{profile.user.last_name}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"txt txt-blue-dark txt-medium\">Gender</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"txt txt-black\">\n" +
    "                                {{profile.gender}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"txt txt-blue-dark txt-medium\">Date of Birth</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"txt txt-black\">\n" +
    "                                {{profile.date_of_birth}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row row--profile-view-space-top\">\n" +
    "                        <div class=\"col-xs-4\">\n" +
    "                            <div class=\"txt txt-blue-dark txt-medium\">Phone</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-8\">\n" +
    "                            <div class=\"txt txt-black\">\n" +
    "                                {{profile.phone}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"profile-button__wrap\">\n" +
    "                        <button class=\"bt-round bt-round--blue\" ui-sref=\"master_signedin.profileEdit\">Edit</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--end section second-->\n" +
    "    \n" +
    "</div>");
}]);

angular.module("components/references/references.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/references/references.tpl.html",
    "<div class=\"references-p\">\n" +
    "    <div class=\"references-p-head-bgc\"></div>\n" +
    "    <div class=\"container-fluid container-fluid--section\">\n" +
    "        <div class=\"section-box-shadow section-box-shadow--space-inner\">\n" +
    "            <div class=\"container-lg\">\n" +
    "                <div class=\"references-p-body\">\n" +
    "                    <div class=\"references-p-body__wrap\">\n" +
    "                        <div class=\"references-p-body__img anim-content-transition\">\n" +
    "                            <ng-include class=\"img-small\" src=\"'./assets/images/svg/parcel.svg'\"></ng-include>\n" +
    "                        </div>\n" +
    "                        <div class=\"title__wrap anim-content-transition\">\n" +
    "                            <h3 class=\"txt-blue-dark txt-center\">Result Science -  Test interpretation</h3>\n" +
    "                        </div>\n" +
    "                       <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"RS1\"> <span class=\"txt txt-bold txt-black\">1.</span>\n" +
    "                                Vagelatos NT, Eslick GD (2013) <a\n" +
    "                                    href=\"https://www.ncbi.nlm.nih.gov/pubmed/23314404\" target=\"_blank\">Type 2 diabetes as a risk factor for Alzheimer's disease: the confounders, interactions, and neuropathology associated with this relationship.</a> Epidemiological reviews 35, 152-160.\n" +
    "                            </p>\n" +
    "                       </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"RS2\"> <span class=\"txt txt-bold txt-black\">2.</span>\n" +
    "                                Rodrigue KM, Rieck JR, Kennedy KM et al. (2013)<a\n" +
    "                                    href=\"https://www.ncbi.nlm.nih.gov/pubmed/23553344\" target=\"_blank\">Risk factors for beta-amyloid deposition in healthy aging: vascular and genetic effects.</a> JAMA Neurol 70, 600-606.\n" +
    "                                Guo Z, Fratiglioni L, Viitanen M et al. (2001) Apolipoprotein E genotypes and the\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"RS3\"> <span class=\"txt txt-bold txt-black\">3.</span>\n" +
    "                                Guo Z, Fratiglioni L, Viitanen M et al. (2001)<a\n" +
    "                                    href=\"https://www.ncbi.nlm.nih.gov/pubmed/23553344\" target=\"_blank\">R Apolipoprotein E genotypes and the incidence of Alzheimer's disease among persons aged 75 years and older: variation by use of antihypertensive medication?</a>American journal of epidemiology 153, 225-231.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"title__wrap anim-content-transition\">\n" +
    "                            <h3 class=\"txt-blue-dark txt-center\"> About Genetics</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG1\"> <span class=\"txt txt-bold txt-black\">1.</span>\n" +
    "                                Stolerman IP (ed). Encyclopedia of Psychopharmacology. 2010. Online ed. Berlin: Springer. ISBN 97835406869.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG2\"> <span class=\"txt txt-bold txt-black\">2.</span>\n" +
    "                                Liu CC, Kanekiyo T, Xu B, Bu G. Apolipoprotein E and Alzheimer disease: risk, mechanisms, and therapy. Nature Reviews: Neurology. 2013; 9:106-118.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG3\"> <span class=\"txt txt-bold txt-black\">3.</span>\n" +
    "                                Mahley, R. W. & Rall, S. C. Jr. Apolipoprotein E: far more than a lipid transport protein. Annu. Rev. Genomics Hum Genet. 2000; 1:507–537.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG4\"> <span class=\"txt txt-bold txt-black\">4.</span>\n" +
    "                                Lahoz, C. et al. Apolipoprotein E genotype and cardiovascular disease in the Framingham Heart Study. Atherosclerosis. 2001;154:529–537.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG5\"> <span class=\"txt txt-bold txt-black\">5.</span>\n" +
    "                                5Harold, D. et al. Genome-wide association study identifies variants at CLU and PICALM associated with Alzheimer’s disease. Nat. Genet. 2009; 41:1088–1093.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG6\"> <span class=\"txt txt-bold txt-black\">6.</span>\n" +
    "                                Lambert, J. C. et al. Genome-wide association study identifies variants at CLU and CR1 associated with Alzheimer’s disease. Nat. Genet. 2009; 41:1094–1099.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG7\"> <span class=\"txt txt-bold txt-black\">7.</span>\n" +
    "                                Farrer, L. A. et al. Effects of age, sex, and ethnicity on the association between apolipoprotein E genotype and Alzheimer disease: a meta-analysis. JAMA. 1997; 278: 1349–1356.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG8\"> <span class=\"txt txt-bold txt-black\">8.</span>\n" +
    "                                Hallman DM, et al. The Apolipoprotein E polymorphism: a comparison of allele frequencies and effects in nine populations. Am J Hum Genet. 1991; 49: 338-349.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG9\"> <span class=\"txt txt-bold txt-black\">9.</span>\n" +
    "                                Corder EH, et al. Gene dose of Apolipoprotein E type 4 allele and the risk of Alzheimer’s disease in late onset families. Science. 1993; 261:921-923.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG10\"> <span class=\"txt txt-bold txt-black\">10.</span>\n" +
    "                                Haan, M. N., Shemanski, L., Jagust, W. J., Manolio, T. A. & Kuller, L. The role of APOE ε4 in modulating effects of other risk factors for cognitive decline in elderly persons. JAMA. 1999; 282:40–46.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG11\"> <span class=\"txt txt-bold txt-black\">11.</span>\n" +
    "                                Peila, R., Rodriguez, B. L. & Launer, L. J. Type 2 diabetes, APOE gene, and the risk for dementia and related pathologies: the Honolulu-Asia Aging Study. Diabetes. 2002; 51: 1256–1262.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG12\"> <span class=\"txt txt-bold txt-black\">12.</span>\n" +
    "                                Irie, F. et al. Enhanced risk for Alzheimer disease in persons with type 2 diabetes and APOE e4: the Cardiovascular Health Study Cognition Study. Arch. Neurol. 2008; 65:89–93..\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG13\"> <span class=\"txt txt-bold txt-black\">13.</span>\n" +
    "                                Matsuzaki, T. et al. Insulin resistance is associated with the pathology of Alzheimer disease: the Hisayama study. Neurology. 2010; 75:764–770.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG14\"> <span class=\"txt txt-bold txt-black\">14.</span>\n" +
    "                                Ngandu T. et al., A 2 year multidomain intervention of diet, exercise, cognitive training, and vascular risk monitoring versus control to prevent cognitive decline in at-risk elderly people (FINGER): a randomized controlled trial. The Lancet. 2014; 386: 2255-2263.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG15\"> <span class=\"txt txt-bold txt-black\">15.</span>\n" +
    "                                PLOS Collections. Dementia: Across the Lifespan and Around the Globe.  Collection of articles on Alzheimer’s disease and dementia. Published March 2017. http://collections.plos.org/dementia.  Accessed September 23, 2017.ipoprotein E type 4 allele and the risk of Alzheimer’s disease in late onset families. Science. 1993; 261:921-923.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                            <p class=\"txt txt-black\" id=\"AG16\"> <span class=\"txt txt-bold txt-black\">16.</span>\n" +
    "                                Clare L, Wu YT, Teale JC, et al. Potentially modifiable lifestyle factors, cognitive reserve, and cognitive function in later life: A cross-sectional study. PLoS Med. 2017;14(3):e10022259.\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"title__wrap anim-content-transition\">\n" +
    "                          <h3 class=\"txt-blue-dark txt-center\">Nutrition</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N1\"> <span class=\"txt txt-bold txt-black\">1.</span>\n" +
    "                            Singh B, Parsaik AK, Mielke MM, et al. Association of Mediterranean diet with Mild Cognitive Impairment and Alzheimer’s disease: A systematic review and meta-analysis. J Alzheimers Dis. 2014;39(2):271-282.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N2\"> <span class=\"txt txt-bold txt-black\">2.</span>\n" +
    "                            Martinez-Lapiscina EH, Claver P, Toledo E, et al. Mediterranean diet improves cognition: The PREMIED-NAVARRA randomized trial. J Neurol Neurosurg Psychiatry. 2013;84(12):1318-1325.\n" +
    "\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N3\"> <span class=\"txt txt-bold txt-black\">3.</span>\n" +
    "                            Tagney CC, Kwasny MJ, Li H, et al. Adherence to a Mediterranean-type dietary pattern and cognitive decline in a community population. Am J Clin Nutr. 2011;93:601-607.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N4\"> <span class=\"txt txt-bold txt-black\">4.</span>\n" +
    "                            Scarmeas N, Stern Y, Tang MX, et al. Mediterranean diet and risk for Alzhiemers disease. Ann Neurology. 2006;59(6):912-921.\n" +
    "                          </p>\n" +
    "                        </div><div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"N5\"> <span class=\"txt txt-bold txt-black\">5.</span>\n" +
    "                          Scarmeas N, Stern Y, Mayeux R, et al. Mediterranean diet and Mild Cognitive Impairment. Arch Neurol. 2009;66(2):216-225.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N6\"> <span class=\"txt txt-bold txt-black\">6.</span>\n" +
    "                            Tsivgoulis G, Judd S, Letter AJ, et al. Adherence to a Mediterranean diet and risk of incident cognitive impairment. Nerology. 2013;80:1684-1692.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N7\"> <span class=\"txt txt-bold txt-black\">7.</span>\n" +
    "                            Morris MC, Tangney CC, Wang Y, et al. MIND diet associated with reduced incidence of Alzheimer’s diesea. Alzheimers Dement. 2015;11(9):1007-1014.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N8\"> <span class=\"txt txt-bold txt-black\">8.</span>\n" +
    "                            Henderson ST. Ketone bodies as a therapeutic for Alzheimer’s disease. Neurotherapeutics. 2008;5:470-480.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N9\"> <span class=\"txt txt-bold txt-black\">9.</span>\n" +
    "                            Branco AF, Ferreira A, Simoes RF, et al. Ketogenic diets: from cancer to mitochondrial diseases and beyond. Eur J Clin INvest. 2016;46(3):285-298.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N11\"> <span class=\"txt txt-bold txt-black\">11.</span>\n" +
    "                            Henderson ST, Vogel JL, Barr LJ, et al. Study of the ketogenic agent AC-1202 in mild to moderate Alzheimer’s disease: a randomized, double-blind placebo-controlled, multicenter trial. J Nutr Metab. 2009;6:31-56.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N12\"> <span class=\"txt txt-bold txt-black\">12.</span>\n" +
    "                            Reger MA, Henderson ST, Hale C. Effects of beta-hydroxybutyrate on cognition in memory-impaired adults. Neurobiol Aging. 2004;25(3):311-314.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N13\"> <span class=\"txt txt-bold txt-black\">13.</span>\n" +
    "                            Newport MT, Vanltallie TB, Kashiwaya Y, et al. A new way to produce hyperketonemia: Use of ketone ester in a case of Alzheimers. Alzheimers Dement. 2015;11(1):99-103.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N14\"> <span class=\"txt txt-bold txt-black\">14.</span>\n" +
    "                            Dehghan M, Mente A, Zhang X, et al. Associations of fats and carbohydrate intake with cardiovascular disease and mortality in 18 countries from five continents (PURE): A prospective cohort study. Lancet. Published 29 August 2017.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N15\"> <span class=\"txt txt-bold txt-black\">15.</span>\n" +
    "                            Pasinetti GM, Wang J, Porter S, et al. Caloric intake, dietary lifestyles, macronutrient composition, and Alzheimer’ disease dementia. Int J Alzheimers Dis. Published online 2011 Jun 19.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N16\"> <span class=\"txt txt-bold txt-black\">16.</span>\n" +
    "                            Cao L, Tan L, Wang HF, et al. Dietary patterns and risk of dementia: a systematic review and meta-analysis of cohort studies. Mol Neurobiol. 2016;53(9):6144-6154.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N17\"> <span class=\"txt txt-bold txt-black\">17.</span>\n" +
    "                            Kalmijn S, Launer LJ, Ott A, et al. Dietary fat intake and the risk of incident dementia in the Rotterdam Study. Ann Neurol. 1997;42:776-782.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N18\"> <span class=\"txt txt-bold txt-black\">18.</span>\n" +
    "                            Naqvi AZ, Harty B, Mukamal KJ, et al. Monounsaturated, trans, & saturated fatty acids and cognitive decline in women. J Am Geriatr Soc. 20111;59(5):837-843.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N19\"> <span class=\"txt txt-bold txt-black\">19.</span>\n" +
    "                            Barberger-Gateau P, Raffaitin C, Letenneur L, et al. Dietary patterns and risk of dementia: The Three-City cohort study. Neurology. 2007;69:1921-1930.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N20\"> <span class=\"txt txt-bold txt-black\">20.</span>\n" +
    "                            Lauretti E, Iuliano L, Pratico D. Extra-virgin olive oil ameliorates cognition and neuropathology of the 3xTg mice: Role of autophagy. Ann Clin Transl Neurol. 2017;4(8):564-574.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N21\"> <span class=\"txt txt-bold txt-black\">21.</span>\n" +
    "                            Morris MC, Evans DA, Bienias JL, et al. Consumption of fish and n-3 fatty acids and risk of incident Alzheimer disease. Arch Neurol. 2003;60:940-946.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N22\"> <span class=\"txt txt-bold txt-black\">22.</span>\n" +
    "                            Morris MC, Evans DA, Tangney CC, et al. Associations of vegetable and fruit consumption with age-related cognitive change. Neurology. 2006;67(8):1370-1376.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N23\"> <span class=\"txt txt-bold txt-black\">23.</span>\n" +
    "                            Roberts RO, Geda YE, Cerhan JR, et al. Vegetables, unsaturated fats, moderate alcohol intake, and mild cognitive impairment. Dement Geriatr Cogn Disord. 2010;29:413-423.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N24\"> <span class=\"txt txt-bold txt-black\">24.</span>\n" +
    "                            Devore EE, Kang JE, Breteler MMB, et al. Dietary intake of berries and flavonoids in relation to cognitive decline. Ann Neurol. 2012;72(1):135-143.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N25\"> <span class=\"txt txt-bold txt-black\">25.</span>\n" +
    "                            Estemadi A, Sinha R, Ward MH, et al. Mortality from different causes associated with meat, heme iron, nitrates, and nitrites in the NIH-AARP Diet and Health Study: Population based cohort study. BMJ. 2018;357:1957-1968.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N26\"> <span class=\"txt txt-bold txt-black\">26.</span>\n" +
    "                            Pase MP, Himali JJ, Beiser AS, et al. Sugar- and artificially sweetened beverages and the risks of incident stroke and dementia. Stroke. 2017;48(5):1139-1146.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"N27\"> <span class=\"txt txt-bold txt-black\">27.</span>\n" +
    "                            Roberts RO, Roberts LA, Geda YE, et al. Relative intake of macronutrients impacts risk of Mild Cognitive Impairment or dementia. J Alzheimers Dis. 2012;32(2):329-339.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"title__wrap anim-content-transition\">\n" +
    "                          <h3 class=\"txt-blue-dark txt-center\">Exercise</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"E1\"> <span class=\"txt txt-bold txt-black\">1.</span>\n" +
    "                            Harvard Health Publications: Harvard Medical School. Regular Exercise Changes the Brain to Improve Memory, Thinking Skills.\n" +
    "                          </p>\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            <a href=\"https://www.health.harvard.edu/blog/regular-exercise-changes-brain-improve-memory-thinking-skills-201404097110\" target=\"_blank\">http://www.health.harvard.edu/blog/regular-exercise-changes-brain-improve-memory-thinking-skills-201404097110.</a> Accessed July 14, 2017.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"E2\"> <span class=\"txt txt-bold txt-black\">2.</span>\n" +
    "                            Dimitrov S, Hulteng E, Hong S. Inflammation and exercise: Inhibition of monocytic intracellular TNF production by acute exercise via β2-adrenergic activation. Brain, behavior, & Immunity. March 2017.; 61: 60-68.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"E3\"> <span class=\"txt txt-bold txt-black\">3.</span>\n" +
    "                            Centers for Disease Control and Prevention. How much physical activity do older adults need?<a href=\"https://www.cdc.gov/physicalactivity/basics/older_adults/index.htm\" target=\"_blank\">https://www.cdc.gov/physicalactivity/basics/older_adults/index.htm</a>   Accessed on March 9, 2017.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"E4\"> <span class=\"txt txt-bold txt-black\">4.</span>\n" +
    "                            Office of Disease Prevention and Health Promotion. 2008 Physical Activity Guidelines for Americans, Chapter 5: Active Older Adults.\n" +
    "                            <a href=\"https://health.gov/paguidelines/guidelines/chapter5.aspx%20Accessed%20March%209\" target=\"_blank\">https://health.gov/paguidelines/guidelines/chapter5.aspx Accessed March 9, </a>2017\n" +
    "                          </p>\n" +
    "                        </div><div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"E5\"> <span class=\"txt txt-bold txt-black\">5.</span>\n" +
    "                          Smith PJ, Blumenthal JA, Hoffman BM, et al. Aerobic exercise and neurocognitive performance: a meta-analytic review of randomized controlled trials. Psychosomotor Medicine. 2010 Apr; 72(3):239-52.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"E6\"> <span class=\"txt txt-bold txt-black\">6.</span>\n" +
    "                            Smolarek AC, Ferreira LH, Mascarenhas LP. The effects of strength training on cognitive performance in elderly women. Clinical Interventions in Aging. 2016 Jun 1;11:749-54.)\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"E7\"> <span class=\"txt txt-bold txt-black\">7.</span>\n" +
    "                            Forbes D, Forbes SC, Blake CM, Thiessen EJ, Forbes S. Exercise programs for people with dementia.<a href=\"https://www.ncbi.nlm.nih.gov/pubmed/25874613\" target=\"_blank\">Cochrane Database Syst Rev.</a>  2015 Apr 15;(4):CD006489.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black\" id=\"E8\"> <span class=\"txt txt-bold txt-black\">8.</span>\n" +
    "                            National Institutes of Health NIHSeniorHealth. Exercise: Exercises to Try: Balance Exercises.</p>\n" +
    "                          <p class=\"txt txt-black\"><a href=\"https://go4life.nia.nih.gov/exercises/balance\" target=\"_blank\">https://nihseniorhealth.gov/exerciseandphysicalactivityexercisestotry/balanceexercises/01.html.</a>Accessed on June 17, 2017.</p>\n" +
    "                        </div>\n" +
    "                      <div class=\"title__wrap anim-content-transition\">\n" +
    "                        <h3 class=\"txt-blue-dark txt-center\">Sleep</h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S1\"> <span class=\"txt txt-bold txt-black\">1.</span>\n" +
    "                          Buby OM, Brannick M, Mortimer J, et al. Sleep, Cognitive impairment and Alzheimer's disease: A systematic review and meta-analysis. Sleep. September 2106; pii: sp-00173-16\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S2\"> <span class=\"txt txt-bold txt-black\">2.</span>\n" +
    "                          Lim AS, Kowgier M, Yu L, Buchman AS, Bennett DA. Sleep Fragmentation and the Risk of Incident Alzheimer's Disease and Cognitive Decline in Older Persons. Sleep. 2013 Jul 1; 36(7):1027-1032.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S3\"> <span class=\"txt txt-bold txt-black\">3.</span>\n" +
    "                          Harvard Medical School: Division of Sleep Medicine. Healthy Sleep: Why do we Sleep, Anyway?\n" +
    "                        </p>\n" +
    "                        <p class=\"txt txt-black\">\n" +
    "                          <a href=\"http://healthysleep.med.harvard.edu/healthy/matters/benefits-of-sleep/why-do-we-sleep\" target=\"_blank\">http://healthysleep.med.harvard.edu/healthy/matters/benefits-of-sleep/why-do-we-sleep.</a>\n" +
    "                        </p>\n" +
    "                        <p class=\"txt txt-black\">Accessed July 1, 2017.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S4\"> <span class=\"txt txt-bold txt-black\">4.</span>\n" +
    "                          5. . Eugene AR, Masiak J.  The Neuroprotective Aspects of Sleep.  MEDtube Science. 2015 Mar; 3(1): 35-40.\n" +
    "                        </p>\n" +
    "                      </div><div class=\"txt__wrap\">\n" +
    "                      <p class=\"txt txt-black\" id=\"S5\"> <span class=\"txt txt-bold txt-black\">5.</span>\n" +
    "                        6. Xie L, Kang H, Xu Q, et al. Sleep drives metabolite clearance from the adult brain. Science. 2013 Oct 18; 342(6156):373-7.\n" +
    "                      </p>\n" +
    "                    </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S6\"> <span class=\"txt txt-bold txt-black\">6.</span>\n" +
    "                          7. Savage VM, West GB. A quantitative, theoretical framework for understanding mammalian sleep. Proceedings of the National Academy of Sciences USA. 2007; 104(3): 1051-6.)\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S7\"> <span class=\"txt txt-bold txt-black\">6.</span>\n" +
    "                          <a href=\"https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side\" target=\"_blank\">https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side</a>\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S16\"> <span class=\"txt txt-bold txt-black\">16.</span>\n" +
    "                          Young T. Rationale, design and findings from the Wisconsin Sleep Cohort Study: Toward understanding the total societal burden of sleep disordered breathing. Sleep Medicine Clinics. 2009 Mar 1;4(1):37-46.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S17\"> <span class=\"txt txt-bold txt-black\">17.</span>\n" +
    "                          Redline S, Yenokyan G, Gottlieb DJ, et al. Obstructive sleep apnea hypopnea and incident stroke: The sleep heart health study. American Journal of Respiratory and Critical Care Medicine. 2010 Jul 15;182(2):269-77.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S18\"> <span class=\"txt txt-bold txt-black\">18.</span>\n" +
    "                          Punjabi NM, Caffo BS, Goodwin JL, et al. Sleep-disordered breathing and mortality: A prospective cohort study. PLoS Medicine. 2009 Aug;6(8).\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S19\"> <span class=\"txt txt-bold txt-black\">19.</span>\n" +
    "                          Pan W & Kastin AJ. Can sleep apnea cause Alzheimer’s disease? Neuroscience and Behavioral Reviews; 2014 Nov; 47: 656-669.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"S20\"> <span class=\"txt txt-bold txt-black\">20.</span>\n" +
    "                          Belenky G, Wesensten NJ, Thorne DR, et al. Patterns of performance degradation and restoration during sleep restriction and subsequent recovery: a sleep dose-response study. J Sleep Res. March 2003; 12(1):1-12.)\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"title__wrap anim-content-transition\">\n" +
    "                        <h3 class=\"txt-blue-dark txt-center\">Stress</h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str1\"> <span class=\"txt txt-bold txt-black\">1.</span>\n" +
    "                          Singh B, Parsaik AK, Mielke MM, et al. Association of Mediterranean diet with Mild Cognitive Impairment and Alzheimer’s disease: A systematic review and meta-analysis. J Alzheimers Dis. 2014;39(2):271-282.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str2\"> <span class=\"txt txt-bold txt-black\">2.</span><a\n" +
    "                            href=\"https://www.ncbi.nlm.nih.gov/pubmed/?term=Green%20KN%5BAuthor%5D&cauthor=true&cauthor_uid=16943563\" target=\"_blank\">Green KN,</a>\n" +
    "                          <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/?term=Billings%20LM%5BAuthor%5D&cauthor=true&cauthor_uid=16943563\" target=\"_blank\">Billings LM,</a>\n" +
    "                          <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/?term=Roozendaal%20B%5BAuthor%5D&cauthor=true&cauthor_uid=16943563\" target=\"_blank\">Roozendaal B,</a>\n" +
    "                          <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/?term=McGaugh%20JL%5BAuthor%5D&cauthor=true&cauthor_uid=16943563\" target=\"_blank\">McGaugh JL,</a>\n" +
    "                          <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/?term=LaFerla%20FM%5BAuthor%5D&cauthor=true&cauthor_uid=16943563\" target=\"_blank\">LaFerla FM.</a> Glucocorticoids increase amyloid-beta and tau pathology in a mouse model of Alzheimer's disease. Journal of Neuroscience. 2006 Aug 30;26(35):9047-56.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str3\"> <span class=\"txt txt-bold txt-black\">3.</span>\n" +
    "                          Dismdale JE, Herd JA. Variability of plasma lipids on response to emotional arousal.  Psychomatic Medicine. 1982; 44:413-430.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str4\"> <span class=\"txt txt-bold txt-black\">4.</span>\n" +
    "                          Mattiasson I, Lindgarde F, Nilsson JA, Thoerell T. Threat of unemployment and cardiovascular risk factors: Longitudinal study of quality of sleep and serum cholesterol concentrations in men threatened with redundancy. British Medical Journal. 1990; 301: 461-466.\n" +
    "                        </p>\n" +
    "                      </div><div class=\"txt__wrap\">\n" +
    "                      <p class=\"txt txt-black\" id=\"Str5\"> <span class=\"txt txt-bold txt-black\">5.</span>\n" +
    "                        Stoney CM, Matthews KA, McDonal RH, & Johnson CA.  Sex differences in lipid, lipoprotein, cardiovascular, and neuroendocrine responses to acute stress. Psychophysiology. 1988; 25: 645-656.\n" +
    "                      </p>\n" +
    "                    </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str6\"> <span class=\"txt txt-bold txt-black\">6.</span>\n" +
    "                          Muldoon MF, Bachen EA, Manuck SB, et al. Acute cholesterol responses to mental stress and changes in posture. Archives of Internal Medicine. 1992; 152: 775-780.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str7\"> <span class=\"txt txt-bold txt-black\">7.</span>\n" +
    "                          Markovitz JH, Matthews KA, Kannel WB, Cobb JL, D’Agostino RB. Psychological predictors of hypertension in the Framingham study: Is there tension in hypertension? Journal of the American Medical Association. 1993; 270: 2439-2443.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str8\"> <span class=\"txt txt-bold txt-black\">8.</span>\n" +
    "                          Schnall PL, Schwartz PA, Landsbergis PA, et al. Relation between job strain, alcohol, and ambulatory blood pressure. Hypertension. 1992; 19: 488-494.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str9\"> <span class=\"txt txt-bold txt-black\">9.</span>\n" +
    "                          Rosengren A, Tibblin G, Wilhelmsen L. Self-perceived psychological stress and incidence of coronary artery disease in middle-aged men. American Journal of Cardiology. 1991; 68: 1171-1175.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str11\"> <span class=\"txt txt-bold txt-black\">11.</span>\n" +
    "                          Yeung AC, Vekshtein VI, Krantz DS, et al. The effect of atherosclerosis on the vasomotor response of coronary arteries to mental stress.  New England Journal of Medicine. 1991; 325: 1551-1556.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str12\"> <span class=\"txt txt-bold txt-black\">12.</span>\n" +
    "                          Davis M, Eshelman ER, McKay M. The relaxation and stress reduction workbook. 1995. Oakland, CA: New Harbinger Press.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str13\"> <span class=\"txt txt-bold txt-black\">13.</span>\n" +
    "                          Lahad A, Malter AD, Berg AO, Deyo RA. The effectiveness of four interventions for the prevention of low back pain. Journal of the American Medical Association, 1994; 272: 1286-1291.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str14\"> <span class=\"txt txt-bold txt-black\">14.</span>\n" +
    "                          Futterman AD, Kemeny ME, Shapiro D, Fahey JL. Immunological and physiological changes associated with induced positive and negative mood. Psychosomatic Medicine. 1994; 56: 499-511.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str15\"> <span class=\"txt txt-bold txt-black\">15.</span>\n" +
    "                          Mills PJ, Berry CC, Dimsdale JE, et al. Lymphocyte subset redistribution in response to acute experimental stress: Effects of gender, ethnicity, hypertension, and the sympathetic nervous system. Brain, Behavior, and Immunity. 1995; 9: 61-69.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\" id=\"Str16\"> <span class=\"txt txt-bold txt-black\">16.</span>\n" +
    "                          Brannon L, Feist J. Health Psychology: An Introduction to Behavior and Health. 1992. Belmont, CA: Wadsworth.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  <div class=\"title__wrap anim-content-transition\">\n" +
    "                    <h3 class=\"txt-blue-dark txt-center\">Education/Brain Stimulation</h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black txt-center\">\n" +
    "                      Ngandu T. et al., A 2 year multidomain intervention of diet, exercise, cognitive training, and vascular risk monitoring versus control to prevent cognitive decline in at-risk elderly people (FINGER): a randomized controlled trial. The Lancet. 2014; 386: 2255-2263.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc7\"> <span class=\"txt txt-bold txt-black\">7.</span>\n" +
    "                      White L, Katzman R, Losonczy K, et al. Association of education with incidence of cognitive impairment in three established populations for epidemiologic studies of the elderly. Journal of clinical epidemiology. 1994;47:363–74.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc8\"> <span class=\"txt txt-bold txt-black\">8.</span>\n" +
    "                      Woollett K, Maguire EA. Acquiring “the Knowledge” of London’s layout drives structural brain changes. Current biology: CB. 2011;21:2109–14.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc9\"> <span class=\"txt txt-bold txt-black\">9.</span>\n" +
    "                      Wilson RS, Hebert LE, Scherr PA, Barnes LL, Mendes de Leon CF, Evans DA. Educational attainment and cognitive decline in old age. Neurology. 2009;72:460–5.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc10\"> <span class=\"txt txt-bold txt-black\">10.</span>\n" +
    "                      Scarmeas N, Stern Y, Tang MX, et al. Mediterranean diet and risk for Alzhiemers disease. Ann Neurology. 2006;59(6):912-921.\n" +
    "                    </p>\n" +
    "                  </div><div class=\"txt__wrap\">\n" +
    "                  <p class=\"txt txt-black\" id=\"Edc5\"> <span class=\"txt txt-bold txt-black\">5.</span>\n" +
    "                    Stern Y, Gurland B, Tatemichi TK, Tang MX, Wilder D, Mayeux R. Influence of education and occupation on the incidence of Alzheimer’s disease. JAMA: the Journal of the American Medical Association. 1994;271:1004–10.\n" +
    "                  </p>\n" +
    "                </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc11\"> <span class=\"txt txt-bold txt-black\">11.</span>\n" +
    "                      Mechelli  A, Crinion  JT, Noppeney U, et al. Neurolinguistics: structural plasticity in the bilingual brain. Nature. October 2004; 14;431(7010):757\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc12\"> <span class=\"txt txt-bold txt-black\">12.</span>\n" +
    "                      Gaser C, Schlaug G. Brain structures differ between musicians and non-musicians. Journal of Neuroscience. October 2003;23(27):9240-9245.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc13\"> <span class=\"txt txt-bold txt-black\">13.</span>\n" +
    "                      Verghese J, Lipton RB, et al. Leisure Activities and the Risk of Dementia in the Elderly. New England Journal of Medicine. 2003; 348:2508-16\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc14\"> <span class=\"txt txt-bold txt-black\">14.</span>\n" +
    "                      Crowe M, Andel R, Pedersen NL, Johansson B, Gatz M. Does participation in leisure activities lead to reduced risk of Alzheimer’s disease? A prospective study of Swedish twins. The journals of Gerontology Series B, Psychological Sciences and Social Sciences. 2003;58:P249–55.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc15\"> <span class=\"txt txt-bold txt-black\">15.</span>\n" +
    "                      Scarmeas N, Levy G, Tang MX, Manly J, Stern Y. Influence of leisure activity on the incidence of Alzheimer’s disease. Neurology. 2001;57:2236–42.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\" id=\"Edc16\"> <span class=\"txt txt-bold txt-black\">16.</span>\n" +
    "                      Wang HX, Karp A, Winblad B, Fratiglioni L. Late-life engagement in social and leisure activities is associated with a decreased risk of dementia: a longitudinal study from the Kungsholmen project. American Journal of Epidemiology. 2002;155:1081–7.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/register/register.tpl.html",
    "<update-meta property=\"og:title\" content=\"ADx Healthcare - Register\"></update-meta>\n" +
    "<update-meta name=\"twitter:title\" content=\"ADx Healthcare - Register\"></update-meta>\n" +
    "\n" +
    "<div class=\"register-page login-bgc\">\n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div class=\"register-form__wrap\" ng-if=\"!showPopup\" ng-class=\"{'complete': complete}\">\n" +
    "      <div class=\"register-form\">\n" +
    "        <form name=\"form\"  ng-submit=\"submitForm(userForm)\" novalidate>\n" +
    "          <div ng-show=\"!complete\">\n" +
    "            <div class=\"form-input\">\n" +
    "              <div class=\"form-input__register-wrap\">\n" +
    "                <h6 class=\"txt-small txt-medium txt-blue-dark txt-center\">Create an account</h6>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"input-label txt--exs-small txt txt-blue-2 txt-medium\" for=\"first_name\">First name</label>\n" +
    "                  <input id=\"first_name\" type=\"text\" name=\"first_name\" class=\"form-control\" ng-model=\"userForm.first_name\"  ng-minlength=\"3\" required>\n" +
    "                  <p ng-show=\"form.first_name.$error.minlength && !form.first_name.pristine\" class=\"error\">You firstname is too short</p>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"input-label txt--exs-small txt txt-blue-2 txt-medium\" for=\"last_name\">Last name</label>\n" +
    "                  <input id=\"=last_name\" type=\"text\" name=\"last_name\" class=\"form-control\" ng-model=\"userForm.last_name\"  ng-minlength=\"3\" required>\n" +
    "                  <p ng-show=\"form.last_name.$error.minlength && !form.last_name.pristine\" class=\"error\">You lastname is too short</p>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"input-label txt--exs-small txt txt-blue-2 txt-medium\" for=\"email\">Email address</label>\n" +
    "                  <input id=\"email\" type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"userForm.email\" required>\n" +
    "                  <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                    <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                    <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label class=\"input-label txt--exs-small txt txt-blue-2 txt-medium\" for=\"password\">Password</label>\n" +
    "                  <input id=\"password\" type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"userForm.password\" ng-minlength=\"5\" required>\n" +
    "                  <div class=\"error\" ng-show=\"form.password.$dirty\">\n" +
    "                    <div class=\"error\" ng-show=\"form.password.$error.required\">This field is required</div>\n" +
    "                    <div class=\"error\" ng-show=\"form.password.$error.minlength && !form.password.pristine\">Password must be at least 5 characters long</div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <button class=\"bt-round bt-round--large bt-round--blue-dark\" test-hook=\"submit-register\" type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"form.$invalid\"><span class=\"txt-medium\">Register</span></button>\n" +
    "            </div>\n" +
    "            <div class=\"txt--indent-small txt-center\">\n" +
    "              <a href ui-sref=\"master.login\" class=\"txt-link txt-blue-2 txt-small txt-medium\">\n" +
    "                I have an account\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          <div class=\"alert alert-danger\" ng-if=\"error\">{{::error.detail}}</div>\n" +
    "          </div>\n" +
    "          <div ng-if=\"complete === true\" class=\"register-complete\">\n" +
    "            <h3 class=\"txt-medium txt-blue-dark txt-center\">Suceess!</h3>\n" +
    "            <div class=\"txt__wrap\">\n" +
    "              <p class=\"txt txt-black\">You registration was completed successfully. You should receive an email shortly with instructions on how to active your account.</p>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <a href ui-sref=\"master.login\" class=\"bt-round bt-round--blue-dark\">\n" +
    "                Sign-in\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--start markup popup-->\n" +
    "  <div class=\"popup popup--space-bottom\" ng-if=\"showPopup\" test-hook=\"tour-start-popover\">\n" +
    "    <div class=\"popup-content\">\n" +
    "      <div class=\"popup-content__wrap\">\n" +
    "        <h6 class=\"txt-medium txt-blue-dark txt-center\">ADx Healthcare</h6>\n" +
    "        <div class=\"txt__wrap\">\n" +
    "          <h6 class=\"txt-medium txt-blue-dark txt--indent-small\">Informed Consent</h6>\n" +
    "            <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "              You consent to genetic testing in our partner’s lab. Also, we may use the test results to create a report. The testing may reveal that you are at risk for a disease or condition. You may need more testing to confirm any diagnosis.  Please discuss the results with your doctor or a genetic counselor.\n" +
    "            </div>\n" +
    "\n" +
    "          <h6 class=\"txt-medium txt-blue-dark txt--indent-small\">Description of Product</h6>\n" +
    "          <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "            ADx Healthcare offers genetic testing related to Alzheimer’s disease risk assessment.  Understanding your genetic risk for a disease such as Alzheimer’s disease can benefit you as you learn more about your personal health. While you cannot change your genetic makeup having information about your genetic risk can help you make decisions about your health that research indicates can have a positive impact on your cognitive health.\n" +
    "          </div>\n" +
    "\n" +
    "          <h6 class=\"txt-medium txt-blue-dark txt--indent-small\">Genetic Conditions</h6>\n" +
    "          <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "            You may have a genetic condition even though the test results for that condition are negative.  Because of limits of technology, the test may not detect some changes in DNA or proteins that cause disease.\n" +
    "          </div>\n" +
    "\n" +
    "          <h6 class=\"txt-medium txt-blue-dark txt--indent-small\">Risks and Considerations</h6>\n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <div class=\"txt-small txt-black\">\n" +
    "              Once you obtain your Genetic Information, the knowledge is irrevocable. You should not assume that any information we may be able to provide to you, whether now or as genetic research advances, will be welcome. You should also understand that as research advances, in order for you to assess the meaning of your DNA in the context of such advances, you may need to obtain further services from ADx Healthcare, your physician, a genetic counselor, or other healthcare provider.\n" +
    "            </div>\n" +
    "            <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "              We encourage you to talk to a genetic counselor, a health professional with special training in genetic conditions, prior to collecting your sample for testing to learn more so you can make an informed decision about whether testing is right for you. A genetic counselor also can help you understand your results and options. Genetic counseling is available by phone or video conference through an independent provider network, PWNHealth. Please contact them with questions or to schedule an appointment at 888-494-7333 or gc@pwnhealth.com.\n" +
    "            </div>\n" +
    "            <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "              Some people feel a little anxious about getting genetic health results. This is normal. If you feel very anxious, you should speak to your physician or a genetic counselor prior to collecting your sample for testing.\n" +
    "            </div>\n" +
    "            <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "              Genetic research is not comprehensive. Many ethnic groups are not represented in genetic studies. Because interpretations provided in our service rely on these published studies, some interpretations may not apply to you. Future scientific research may change the interpretation of your DNA as the scientific community may show previous research to be incomplete or inaccurate. Currently, there is no cure for Alzheimer’s disease and the origin or disease pathology is not well understood.\n" +
    "            </div>\n" +
    "            <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "              For most common diseases, the genes we know about are only responsible for a small fraction of the risk. There may be unknown genes, environmental factors, or lifestyle choices that are far more important predictors. If your data indicate that you are not at elevated genetic risk for a particular disease or condition, you should not feel that you are protected. The opposite is also true; if your data indicate you are at an elevated genetic risk for a particular disease or condition, it does not mean you will definitely develop the disease or condition. In other words, individuals whose genetic results show they are not at increased risk to develop Alzheimer’s disease may, at some point in their lives, still develop Alzheimer’s disease. Individuals whose genetic results show they are at increased risk to develop Alzheimer’s disease may not develop the disease in their lifetime.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <h6 class=\"txt-medium txt-blue-dark txt--indent-small\">Genetic Information Non-Disclosure Act (GINA)</h6>\n" +
    "          <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "            GINA was signed into law in the United States in 2008 to protect against discrimination based on genetic information by employers and health insurance companies for employment and coverage issues. You should be careful about sharing your Genetic Information with others as Genetic Information that you share with others could be used against your interests. In addition, GINA does not protect against discrimination by, for example, long-term health, life, and disability insurance providers, or the military. Some, but not all, states and other jurisdictions have laws that protect individuals with regard to their Genetic Information. You may want to consult a lawyer to understand the extent of legal protection of your Genetic Information before you share it with anybody.\n" +
    "          </div>\n" +
    "          <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "            Genetic Information that you choose to share with your physician or other healthcare provider may become part of your medical record and through that route may be accessible to other healthcare providers and/or insurance companies in the future. Genetic Information that you share with family, friends or employers may also be used against your interests. Even if you share Genetic Information that has limited or no meaning today, that information could have greater meaning in the future as new discoveries are made. In addition, if you are asked by an insurance company whether you have learned Genetic Information about your health conditions and you do not disclose this to them, this may be considered to be fraud.\n" +
    "          </div>\n" +
    "\n" +
    "          <h6 class=\"txt-medium txt-blue-dark txt--indent-small\">Approval and Counsel</h6>\n" +
    "          <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "            A licensed health care provider must approve this testing. You must provide accurate information when ordering this test. The health information you provide and your results will be shared with the independent provider network, PWNHealth, including its physicians, genetic counselors and other personnel providing services to you in connection with this test request. Genetic testing is complex and may show something not normal in the results. Because of this, we will provide a genetic counselor to discuss your results with you. Also, we will answer any other questions you have about the results. Also, the results will not be released to other parties without your written consent or as allowed or required by law. Genetic testing is by your own choice. For clarity, genetic counseling is available after you receive your genetic test results. The process is as follows: 1) you order your test; 2) a physician approves or denies the test; 3) if test is approved, a collection kit is mailed to you; 4) you provide a saliva specimen and return the specimen to the lab; 5) the lab processes and reports to the physician your test results; 6) the results are released to you via an email notice that will direct you to a web portal on the ADx Healthcare site.  The timeframe from test order to receipt of results is typically 4-6 weeks. If you are making a second genetic test purchase through our Helix partner, you will not have to provide an additional saliva sample. In such case, your result will be ready for you within 2-5 business days. Upon receipt of results, if you have chosen to review your results with a genetic counselor, you will receive an email with a link to schedule your phone or video genetic counseling session with PWNHealth.\n" +
    "          </div>\n" +
    "\n" +
    "          <h6 class=\"txt-medium txt-blue-dark txt--indent-small\">Consent</h6>\n" +
    "          <div class=\"txt-small txt-black txt--indent-small\">\n" +
    "            By checking the box on the order form, you hereby consent to our access to and review of the genetic testing data and report described above. You confirm that you are at least 18 years of age and are ordering this test for yourself. You confirm that you have read the information provided about the benefits, risks and limitations of the test and have the had opportunity to have your questions answered.\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <form class=\"form-consent button--center\" name=\"consentForm\" ng-submit=\"submitConsent()\">\n" +
    "          <div class=\"container-flex-center\">\n" +
    "            <div class=\"checkbox__wrap checkbox checkbox--not-margin\">\n" +
    "              <input type=\"checkbox\" id=\"checkbox-results\" class=\"checkbox-input\" required=\"required\" ng-model=\"consentForm.check\">\n" +
    "              <label for=\"checkbox-results\" class=\"checkbox-label checkbox-label--small\"></label>\n" +
    "            </div>\n" +
    "            <div class=\"checkbox__txt\">\n" +
    "              <p class=\"txt-small txt-black\">I have read, understood and agree to the above consent form.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"button__wrap\">\n" +
    "            <button type=\"submit\" ng-disabled=\"consentForm.$invalid\" class=\"bt-round bt-round--large bt-round--blue-dark\" class=\"btn btn-primary\"><span class=\"bt-content\">I consent</span></button>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end markup popup-->\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("components/results/pages/partials/info-products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/partials/info-products.tpl.html",
    "<div class=\"section-box-silver\">\n" +
    "  <div class=\"section-box-silver__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"title__wrap txt-center\">\n" +
    "        <div class=\"title-first txt-blue-dark\">Late onset Alzheimer’s disease</div>\n" +
    "      </div>\n" +
    "      <div class=\"container-exs\">\n" +
    "        <div class=\"txt__wrap txt-center\">\n" +
    "          <div class=\"txt txt-black\">While you wait on your results learn more about late onset Alzheimer’s diease.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"section__wrap-exs\">\n" +
    "        <div class=\"container-flex container-flex--column-sm\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"img__wrap img--center-sm\">\n" +
    "                <ng-include class=\"img img-middle--small\" src=\"'../assets/images/svg/head-medical-blue.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  What is dementia?\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt-middle txt-black\">\n" +
    "                  Dementia is the result of a malfunction of nerve cells in the brain, which in turn lose their connections with other neurons, ultimately resulting in a disconnect between parts of the brain that used to work together.  These malfunctions are the result of damage to or changes in the brain. Together your genetics, other medical conditions, and lifestyle and environmental factors influence your brain health and function, and are thus associated with your risk of developing dementia.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"img__wrap img--center-sm\">\n" +
    "                <ng-include class=\"img img-middle--small\" src=\"'../assets/images/svg/molecule.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  What is late-onset Alzheimer's disease?\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt-middle txt-black\">\n" +
    "                  Late-onset Alzheimer’s disease is a progressive form of dementia that is characterized by tau and plaques in the brain that result in brain cell death over time. Scientists believe that for most people the development of late-onset Alzheimer’s disease is caused by a combina.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"img__wrap img--center-sm\">\n" +
    "                <ng-include class=\"img img-middle--small\" src=\"'../assets/images/svg/dna-molecule.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  The latest science\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt-middle txt-black\">\n" +
    "                  Once Helix laboratories have analyzed your saliva sample and sequenced your DNA, they identify your SNP’s specific to the ApoE test (rs429358 and rs7412). This information is then transferred to ADx Healthcare and interpreted to develop your personalized Alzheimer’s ApoE Genetic Test report.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"section__wrap-md\">\n" +
    "        <div class=\"container-flex container-flex--column-sm\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"img--center-sm\">\n" +
    "                <ng-include src=\"'./assets/images/svg/notebook-and-pen.svg'\" class=\"img-middle--md\"></ng-include>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column-2\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"txt--space-top-sm\">\n" +
    "                <h3 class=\"txt-blue-dark\">Why learn if you are at risk for Alzheimer’s disease?</h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <p class=\"txt-middle txt-black\">Research indicates that lifestyle behaviors across your life span may contribute to the development of late-onset Alzheimer's disease. Also, changes occur in the brain up to two decades before the first symptoms develop. Because late-onset Alzheimer's disease is believed to be caused by a combination of environmental, genetic, medical, and lifestyle factors, learning your genetic risk can help you determine how aggressively you need to make lifestyle changes to reduce your risk.\n" +
    "                  \n" +
    "                  The earlier in your life that you commit to living a cognitively healthy lifestyle, the more you can reduce your risk for or delay the development of late-onset Alzheimer's disease.</p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"section__wrap-md\">\n" +
    "        <div class=\"container-flex container-flex--column-reverse-sm\">\n" +
    "          <div class=\"flex-column-2\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"txt--space-top-sm\">\n" +
    "                <h3 class=\"txt-blue-dark\">\n" +
    "                  Symptoms and diagnoses\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap\">\n" +
    "                <div class=\"txt-middle txt-black\">\n" +
    "                  Dementia is the term used to describe the symptoms of a loss of brain function. While memory loss is often the first symptom, dementia is actually when two or more brain functions are weakened together. These symptoms may include:\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <ul class=\"science-p-list science-p-list--not-padding\">\n" +
    "                  <li class=\"science-p-list__items\">\n" +
    "                    <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                      <p class=\"txt txt-black\">Memory loss</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                    <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                      <p class=\"txt txt-black\">Behavioral changes such as agitation, delusions, and hallucinations</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                    <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                      <p class=\"txt txt-black\">Loss of interest in previously enjoyed activities</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                    <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                      <p class=\"txt txt-black\">Difficulty with problem solving</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                    <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                      <p class=\"txt txt-black\">Difficulty performing tasks that were previously easy</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                    <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                      <p class=\"txt txt-black\">Personality changes</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                    <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                      <p class=\"txt txt-black\">Loss of social skills and tendency to withdraw or isolate self</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                    <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                      <p class=\"txt txt-black\">Language problems including forgetting names of familiar objects</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column align-vertical--center\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"img--center-sm\">\n" +
    "                <ng-include class=\"human-brain-cloud--bgc-white img-middle--md\" src=\"'./assets/images/svg/Apoe-white-bgc.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/results/pages/prePurchase.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/prePurchase.tpl.html",
    "<div class=\"products-p\">\n" +
    "  <div class=\"products-p-head__wrap\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap\">\n" +
    "        <div class=\"txt txt-bold txt-gray anim-content-transition\">Dashboard</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "        <div class=\"title-section__wrap anim-content-transition\">\n" +
    "          <h1 class=\"txt-blue-dark txt-center\">Our service & product</h1>\n" +
    "          <div class=\"products-p-head__body\">\n" +
    "            <div class=\"container-flex container-flex--column-sm\">\n" +
    "              <div class=\"flex-column\">\n" +
    "                <div class=\"img__wrap img--center-sm\">\n" +
    "                  <img src=\"./assets/images/products/service-product-img.png\" alt=\"\" class=\"img img-middle\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column align-vertical--center\">\n" +
    "                <div class=\"products-p-head-body__txt-wrap\">\n" +
    "                  <div class=\"title__wrap txt-center\">\n" +
    "                    <h3 class=\"txt-blue\">Alzheimers Genetic Test</h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt--indent-small txt-center\">\n" +
    "                    <div class=\"txt txt-black\">The Alzheimer's ApoE Genetic Test detects which two copies of the ApoE gene you have. The ApoE gene is the strongest genetic risk factor for Alzheimer's disease.\n" +
    "                      The ApoE gene comes in three forms called variants: ApoE-e2, ApoE-e3, and ApoE-e4.  </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"button__wrap button--center\">\n" +
    "                    <a ng-href=\"{{ globals.order_url_with_kit }}\" target=\"_blank\" class=\"bt-round bt-round--large bt-round--blue-dark\">Order</a>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"section__wrap\">\n" +
    "          <div class=\"container-flex container-flex--column-sm\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Link your accounts</h2>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <p class=\"txt txt-black txt-bold\">Have you purchased an ADx Healthcare Genetic Test already?</p>\n" +
    "                  <p class=\"txt txt-black\">\n" +
    "                    You should have received an email from ADx Healthcare to connect your Helix account. Follow the directions in the email.\n" +
    "                  </p>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <a href=\"\" class=\"txt-link txt-blue-2 txt-small txt-medium\">General Questions</a>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"container-flex\">\n" +
    "                  <div class=\"flex-column\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"img__wrap txt-center\">\n" +
    "                        <ng-include class=\"img-small\" src=\"'../assets/images/svg/mail-pointer.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-center\">\n" +
    "                        <a href=\"\" class=\"txt-link txt-blue-2 txt-small txt-medium\">\n" +
    "                          Check email\n" +
    "                        </a>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"flex-column\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"img__wrap txt-center\">\n" +
    "                        <ng-include class=\"img-small\" src=\"'../assets/images/svg/woman-link-account.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-center\">\n" +
    "                        <a href=\"\" class=\"txt-link txt-blue-2 txt-small txt-medium\">\n" +
    "                          Link account\n" +
    "                        </a>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"flex-column\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"img__wrap txt-center\">\n" +
    "                        <ng-include class=\"img-small\" src=\"'../assets/images/svg/laptop-success.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-center\">\n" +
    "                        <a href=\"\" class=\"txt-link txt-blue-2 txt-small txt-medium\">\n" +
    "                          Success\n" +
    "                        </a>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  \n" +
    "    </div>\n" +
    "  \n" +
    "    <div ng-include=\"'components/results/pages/partials/info-products.tpl.html'\"></div>\n" +
    "  \n" +
    "  </div>\n" +
    "  \n" +
    "");
}]);

angular.module("components/results/pages/result-consent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-consent.tpl.html",
    "<div class=\"pre-result\">\n" +
    "  <div class=\"result-head pre-result-head\">\n" +
    "    <div class=\"txt-rubric__wrap\">\n" +
    "      <div class=\"txt txt-bold txt-gray anim-content-transition\">Pre-Result</div>\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"pre-result-head__wrap\">\n" +
    "        <div class=\"container-flex\">\n" +
    "          <div class=\"flex-column content-txt\">\n" +
    "            <div class=\"title__wrap anim-content-transition\">\n" +
    "              <h1 class=\"txt-blue-dark\">Your results are ready</h1>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap pre-result-head-txt anim-content-transition\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                <span class=\"txt-bold\">Remember.</span> Before you get started, please read the following information so you can better understand what your Alzheimer’s ApoE genetic report does and does not tell you.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column pre-result-head-img hide-mobile anim-content-transition\">\n" +
    "            <ng-include class=\"img-middle--md\" src=\"'../assets/images/svg/notebook-pulse-blue.svg'\"> </ng-include>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!--section second with boxes-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard container-lg--dashboard--not-space-exlg\">\n" +
    "      <div class=\" \">\n" +
    "        <h1 class=\"txt-center txt-blue-dark anim-content-transition\">Remember</h1>\n" +
    "        <div class=\"txt--indent-small container-sub-head txt-center anim-content-transition\">\n" +
    "          <p class=\"txt txt-black\">Regardless of your results, we ask everyone to please read the important information below before you view your results. </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap boxes-row__wrap\">\n" +
    "        <div class=\"boxes__wrap boxes__wrap--large\">\n" +
    "          <div class=\"box-half-column box-half-column--mobile-flex box-shadow\">\n" +
    "            <div class=\"box-image__wrap\">\n" +
    "              <ng-include src=\"'./assets/images/svg/high-risk.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt\">\n" +
    "              <div class=\"box-title__wrap box-title__wrap--not-space-mobile\">\n" +
    "                <h4 class=\"txt-blue-dark txt-center\">Low risk does not mean no risk.</h4>\n" +
    "              </div>\n" +
    "              <div class=\"box-txt__wrap\">\n" +
    "                <div class=\"txt-small txt-black txt-center\">\n" +
    "                  Some people with the lowest risk Alzheimer’s ApoE genotype (ApoE-e2/e2) still develop Alzheimer’s disease.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-half-column box-half-column--mobile-flex box-shadow\">\n" +
    "            <div class=\"box-image__wrap boxes__wrap--large\">\n" +
    "              <ng-include src=\"'./assets/images/svg/low-risk.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt\">\n" +
    "              <div class=\"box-title__wrap box-title__wrap--not-space-mobile\">\n" +
    "                <h4 class=\"txt-blue-dark txt-center\">High risk does not mean certain development of Alzheimer’s disease.</h4>\n" +
    "              </div>\n" +
    "              <div class=\"box-txt__wrap\">\n" +
    "                <div class=\"txt-small txt-black txt-center\">\n" +
    "                  Some people with the highest risk Alzheimer’s ApoE genotype (ApoE-e4/e4) never develop Alzheimer’s disease.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"boxes__wrap boxes__wrap--large\">\n" +
    "          <div class=\"box-half-column box-half-column--mobile-flex box-shadow\">\n" +
    "            <div class=\"box-image__wrap\">\n" +
    "              <ng-include src=\"'./assets/images/svg/other-factors.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt\">\n" +
    "              <div class=\"box-title__wrap box-title__wrap--not-space-mobile\">\n" +
    "                <h4 class=\"txt-blue-dark txt-center\">Other factors influence your risk.</h4>\n" +
    "              </div>\n" +
    "              <div class=\"box-txt__wrap\">\n" +
    "                <div class=\"txt-small txt-black txt-center\">\n" +
    "                  Learning your ApoE-related genetic risk can be paired with your age, gender, medical health and lifestyle habits to help assess your overall risk for late-onset Alzheimer's disease, and to help you identify areas where you may be able to take action to reduce your risk or delay the onset of Alzheimer's disease.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-half-column box-half-column--mobile-flex box-shadow\">\n" +
    "            <div class=\"box-image__wrap boxes__wrap--large\">\n" +
    "              <ng-include src=\"'./assets/images/svg/first-aid-kit.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt\">\n" +
    "              <div class=\"box-title__wrap box-title__wrap--not-space-mobile\">\n" +
    "                <h4 class=\"txt-blue-dark txt-center\">Knowledge is power.</h4>\n" +
    "              </div>\n" +
    "              <div class=\"box-txt__wrap\">\n" +
    "                <div class=\"txt-small txt-black txt-center\">\n" +
    "                  Knowing your late-onset Alzheimer's disease risk may help you make lifestyle changes that may potentially improve your brain health.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <form action=\"\" name=\"consentResults\">\n" +
    "        <div class=\"boxes__wrap\">\n" +
    "          <div class=\"box-shadow\">\n" +
    "            <div class=\"title__wrap title__wrap--not-space-mobile\">\n" +
    "              <h3 class=\"txt-blue-dark txt-center\">Please consent before proceeding.</h3>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap pre-results-box-flex\">\n" +
    "              <div class=\"pre-results-box-flex-1 checkbox checkbox--not-space\">\n" +
    "                <input type=\"checkbox\" id=\"checkbox-results\" class=\"checkbox-input\" ng-model=\"consentResults.checkReview\" required=\"required\">\n" +
    "                <label for=\"checkbox-results\" class=\"checkbox-label checkbox-label--small\"></label>\n" +
    "              </div>\n" +
    "              <div class=\"pre-results-box-flex-2\">\n" +
    "                <div class=\"txt-small txt-black\">\n" +
    "                  I would like to <span class=\"txt-bold\">review the results on my own.</span>  I understand that I may still schedule a genetic counseling appointment if I have any questions after I view my results.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap pre-results-box-flex\">\n" +
    "              <div class=\"pre-results-box-flex-1 checkbox checkbox--not-space\">\n" +
    "                <input type=\"checkbox\" id=\"checkbox-private\" class=\"checkbox-input\" ng-model=\"consentResults.checkUnderstood\" required=\"required\">\n" +
    "                <label for=\"checkbox-private\" class=\"checkbox-label checkbox-label--small\"></label>\n" +
    "              </div>\n" +
    "              <div class=\"pre-results-box-flex-2\">\n" +
    "                <div class=\"txt-small txt-black\">\n" +
    "                  I have read and understood this information. I am in private, comfortable place and wish to view my results.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap--large-top button--center\">\n" +
    "              <button type=\"submit\" ui-sref=\"master_signedin.results.p1\" type=\"submit\" class=\"bt-round bt-round--large bt-round--blue-dark\" ng-disabled=\"consentResults.$invalid\" ng-click=\"viewResultsClicked(consentResults)\">View results</button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section second with boxes-->\n" +
    "</div>");
}]);

angular.module("components/results/pages/result-inconclusive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-inconclusive.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap anim-content-transition\">\n" +
    "        <div class=\"txt txt-bold txt-gray\">Results</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"anim-content-transition\">\n" +
    "        <div class=\"container-flex\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"title__wrap\">\n" +
    "                <h1 class=\"txt-blue-dark anim-content-transition\">Inconclusive results</h1>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap result-wrong-head-txt__wrap\">\n" +
    "                <p class=\"txt txt-black anim-content-transition\">\n" +
    "                  <b>We are sorry but the sequencing data was insufficient for us to determine your result.</b>\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <div class=\"flex-column pre-result-head-img hide-mobile anim-content-transition\">\n" +
    "                <ng-include class=\"img-middle--md\" src=\"'../assets/images/svg/notebook-pulse-blue.svg'\"> </ng-include>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section first-->\n" +
    "  <div class=\"section__wrap-sm section__wrap--space-bottom\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-wrong-content-txt__wrap\">\n" +
    "        <h2 class=\"txt-center txt-blue-dark anim-content-transition\">Contact us</h2>\n" +
    "        <div class=\"section__wrap-exs container-sub-head txt-center anim-content-transition\">\n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <p class=\"txt txt-black\">\n" +
    "              We take great pride in providing accurate results to our customers. Our system has automatically notified us of this issue.\n" +
    "              Please contact us and we will try to help you and answer your questions regarding your results.\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <div class=\"button__wrap--large-top button--center\">\n" +
    "            <button contacts-scroll class=\"bt-round bt-round--blue-dark\">Contact us</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "</div>");
}]);

angular.module("components/results/pages/result-p1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p1.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap anim-content-transition\">\n" +
    "        <div class=\"txt txt-bold txt-gray\">Results</div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ download_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div  class=\"download-button\"></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Download report</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__title anim-content-transition  txt-left-sm\">\n" +
    "       <div class=\"title__wrap\">\n" +
    "         <h1 class=\"txt-blue-dark anim-content-transition\">Your result </h1>\n" +
    "       </div>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <div    class=\"txt txt-black anim-content-transition\">\n" +
    "            <b>Your ApoE genetic test result indicate that you are at {{ riskLevel }} genetic risk for Alzheimer’s disease compared to the US population.</b>\n" +
    "            <br>\n" +
    "          </div>\n" +
    "          <div class=\"txt txt-black anim-content-transition\">\n" +
    "            Please remember that genetics is just one piece of your overall risk for Alzheimer’s disease.  The results of this test do not diagnose Alzheimer’s disease or any other type of dementia.\n" +
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
    "      <div class=\"result-section-first__img hide-xs-mobile anim-content-transition\">\n" +
    "        <div ng-show=\"results.name === 'e2/e2'\" ng-include=\"'assets/images/svg/e2-e2.svg'\"></div>\n" +
    "        <div ng-show=\"results.name === 'e2/e3'\" ng-include=\"'assets/images/svg/e2-e3.svg'\"></div>\n" +
    "        <div ng-show=\"results.name === 'e2/e4'\" ng-include=\"'assets/images/svg/e2-e4.svg'\"></div>\n" +
    "        <div ng-show=\"results.name === 'e3/e3'\" ng-include=\"'assets/images/svg/e3-e3.svg'\"></div>\n" +
    "        <div ng-show=\"results.name === 'e3/e4'\" ng-include=\"'assets/images/svg/e3-e4.svg'\"></div>\n" +
    "        <div ng-show=\"results.name === 'e4/e4'\" ng-include=\"'assets/images/svg/e4-e4.svg'\"></div>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap anim-content-transition\">\n" +
    "        <h1 class=\"txt-blue-dark\">{{ user.first_name }},</h1>\n" +
    "        <h3 class=\"txt-blue-dark txt-padding-top\">Your ApoE Genetic Test result is {{ results.name }}.</h3>\n" +
    "      </div>\n" +
    "      <div class=\"txt__wrap anim-content-transition\">\n" +
    "        <p class=\"txt txt-black\">\n" +
    "          Your ApoE genetic test result indicate that you are at <span class=\"txt-bold\">{{ riskLevel }}</span> genetic risk for Alzheimer’s disease compared to the US population.  It is important to note that although ApoE genotype is a powerful genetic risk factor for Alzheimer’s disease, the test itself is not diagnostic of the disease. Having a high-risk genotype (at least one copy of ApoE-e4) does not guarantee development of the disease, and having the lowest risk genotype (having the ApoE e2/e2 genotype) does not exclude the possibility of developing Alzheimer’s disease.\n" +
    "        </p>\n" +
    "        <div class=\"txt--indent\">\n" +
    "          <div class=\"txt txt-black\">\n" +
    "            Furthermore, other factors modify the risk, including both genetic and non-genetic factors. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>1-17</sup></a> <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'AG15')\"><sup>20-49</sup></a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <img style=\"width: 70%\" ng-if=\"gender === 'F'\"  src=\"assets/images/results-page/adx-infographic-female@3x.png\">\n" +
    "        <img style=\"width: 70%\" ng-if=\"gender === 'M'\"  src=\"assets/images/results-page/adx-infographic-male@3x.png\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <div class=\"box-shadow box-shadow--not-space-side box-shadow--result-p1-second\">\n" +
    "          <div class=\"box-shadow__wrap\">\n" +
    "            <h4 class=\"txt-blue-dark\">Limitations</h4>\n" +
    "            <div class=\"txt__wrap\">\n" +
    "              <p class=\"txt txt-black\">\n" +
    "                Most of the studies on ApoE and risk for Alzheimer’s have been done in European populations and may be less accurate for other ethnicities.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap\">\n" +
    "              <ul class=\"science-p-list science-p-list--space-side\">\n" +
    "                <li class=\"science-p-list__items\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">This test does not diagnose Alzheimer’s disease or dementia.</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">This test does not include all possible genes for early-onset or  late-onset Alzheimer’s disease.</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"section__wrap-md section__wrap-md--sm\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"title-first txt-blue-dark txt-center-sm\">Learn more</div>\n" +
    "      <div class=\"section-p1-learn__wrap\">\n" +
    "        <div class=\"container-flex container-flex--column-sm\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap flex-column__wrap--sm\">\n" +
    "              <div class=\"img__wrap-section-p1-learn txt-center\">\n" +
    "                <ng-include class=\"img-middle notebook-and-pen-svg--bgc-silver\" src=\"'../assets/images/svg/notebook-and-pen.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h4 class=\"txt-blue-dark\">About late-onset Alzheimer’s  disease</h4>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <p class=\"txt txt-black\">\n" +
    "                  What do we know about late-onset Alzheimer’s disease?\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap flex-column__wrap--sm\">\n" +
    "              <div class=\"img__wrap-section-p1-learn txt-center\">\n" +
    "                <ng-include class=\"img-middle\" src=\"'../assets/images/svg/human-brain-cloud.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h4 class=\"txt-blue-dark\">Take action</h4>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <p class=\"txt txt-black\">\n" +
    "                  Lifestyle and other factors can\n" +
    "                  also influence the\n" +
    "                  chances of developing late-\n" +
    "                  onset Alzheimer’s disease.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap flex-column__wrap--sm\">\n" +
    "              <div class=\"img__wrap-section-p1-learn txt-center\">\n" +
    "                <ng-include class=\"img-middle\" src=\"'../assets/images/svg/human-plus--bgc-silver.svg'\"></ng-include>\n" +
    "              </div>\n" +
    "              <div class=\"title__wrap txt-center\">\n" +
    "                <h4 class=\"txt-blue-dark\">Share results</h4>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <p class=\"txt txt-black\">\n" +
    "                  You may want to share your\n" +
    "                  results or your experience with\n" +
    "                  family or friends.\n" +
    "                </p>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"section__wrap-md section__wrap-md--sm-not-space\">\n" +
    "          <div class=\"container-flex container-flex--column-sm\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap flex-column__wrap--sm\">\n" +
    "                <div class=\"img__wrap-section-p1-learn txt-center\">\n" +
    "                  <ng-include class=\"img-middle dna-molecule--bgc-silver\" src=\"'../assets/images/svg/dna-molecule.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "                <div class=\"title__wrap txt-center\">\n" +
    "                  <h4 class=\"txt-blue-dark\">Science</h4>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap txt-center\">\n" +
    "                  <p class=\"txt txt-black\">\n" +
    "                    Learn about the science behind the Alzheimer’s ApoE Genetic Test.\n" +
    "                  </p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap flex-column__wrap--sm\">\n" +
    "                <div class=\"img__wrap-section-p1-learn txt-center\">\n" +
    "                  <ng-include class=\"img-middle\" src=\"'../assets/images/svg/medical-mail.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "                <div class=\"title__wrap txt-center\">\n" +
    "                  <h4 class=\"txt-blue-dark\">General questions</h4>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap txt-center\">\n" +
    "                  <p class=\"txt txt-black\">\n" +
    "                    Answers to your questions\n" +
    "                    about genetic testing,\n" +
    "                    counseling and your results.\n" +
    "                  </p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap flex-column__wrap--sm\">\n" +
    "                <div class=\"img__wrap-section-p1-learn txt-center\">\n" +
    "                  <ng-include class=\"img-middle\" src=\"'../assets/images/svg/doctor--bgc-silver.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "                <div class=\"title__wrap txt-center\">\n" +
    "                  <h4 class=\"txt-blue-dark\">Genetic counselor</h4>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap txt-center\">\n" +
    "                  <p class=\"txt txt-black\">\n" +
    "                    You are not in this alone. ADx\n" +
    "                    Healthcare provides genetic\n" +
    "                    counselors to go over your\n" +
    "                    report and answer any\n" +
    "                    questions you have.\n" +
    "                  </p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--section first end-->\n" +
    "  \n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver txt-center\">\n" +
    "      <a ui-sref=\"master_signedin.results({'page':'p2'})\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/results/pages/result-p2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p2.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap anim-content-transition\">\n" +
    "        <div class=\"txt txt-bold txt-gray\">About page</div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ download_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div  class=\"download-button\"></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Download report</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__title anim-content-transition txt-left-sm\">\n" +
    "       <div class=\"title__wrap\">\n" +
    "         <h1 class=\"txt-blue-dark anim-content-transition\">About late-onset Alzheimer's disease</h1>\n" +
    "       </div>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <div class=\"txt txt-black anim-content-transition\">\n" +
    "            What do we know about <b>late-onset Alzheimer's disease</b>?\n" +
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
    "  \n" +
    "  <div class=\"section__wrap-md section__wrap-md--sm\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <h2 class=\"txt-blue txt-center\">Symptoms and diagnoses</h2>\n" +
    "      <div class=\"txt__wrap txt-center\">\n" +
    "        <p class=\"txt-large txt-black\">Dementia is a term used to describe the symptoms of a loss of brain function. While memory loss is often the first symptom, dementia is actually when two or more brain functions are weakened together. These symptoms may include:</p>\n" +
    "      </div>\n" +
    "      <div class=\"section__wrap-md section__wrap-md--sm\">\n" +
    "        <div class=\"container-flex container-flex--column-sm\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"flex-column__wrap txt-center-sm\">\n" +
    "              <ng-include class=\"img-middle--md\" src=\"'../assets/images/svg/human-brain-cloud.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column-2\">\n" +
    "            <div class=\"flex-column__wrap\">\n" +
    "              <ul class=\"science-p-list science-p-list--space-side\">\n" +
    "                <li class=\"science-p-list__items\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">Memory loss</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">Behavioral changes such as agitation, delusions, and hallucinations</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">Loss of interest in previously enjoyed activities</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">Difficulty with problem solving</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">Difficulty performing tasks that were previously easy</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">Personality changes</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">Loss of social skills and tendency to withdraw or isolate self</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                    <p class=\"txt txt-black\">Language problems including forgetting names of familiar objects</p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"result-p2-section-silver__wrap\">\n" +
    "    <div class=\"result-p2-section-silver\">\n" +
    "      <div class=\"container-lg--dashboard\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h3 class=\"txt-blue-dark\">Understand ApoE</h3>\n" +
    "        </div>\n" +
    "        <div class=\"txt__wrap\">\n" +
    "          <p class=\"txt txt-black\"><span class=\"txt-bold\">You have ApoE genotype {{ results.name }}.</span> There are three common variants of the ApoE gene:</p>\n" +
    "          <ul class=\"txt--indent-small list-item-size\">\n" +
    "            <li><p class=\"txt txt-black\">ApoE-e2 (lowest risk)</p></li>\n" +
    "            <li><p class=\"txt txt-black\">ApoE-e3 (average risk)</p></li>\n" +
    "            <li><p class=\"txt txt-black\">ApoE-e4 (increased risk)</p></li>\n" +
    "          </ul>\n" +
    "          <p class=\"txt txt-black\">Like all genes, you have two copies of ApoE, one from your mother and one from your father.\n" +
    "            <span ng-if=\"results.name === 'e2/e3'\">You received a different variant of the gene from your mother than from your father, thus you are “heterozygous” for the ApoE gene (e2/e3). If you had received the same variant from each parent, then you would have had a “homozygous” genotype (such as e3/e3).</span>\n" +
    "            <span ng-if=\"results.name === 'e2/e2'\">You received the same variant from each parent, thus you have a “homozygous” genotype for the ApoE gene (e2/e2). If you had received a different variant of the gene from your mother than from your father, then you would have been “heterozygous” for the ApoE gene (e2/e3).</span>\n" +
    "            <span ng-if=\"results.name === 'e3/e3'\">You received the same variant from each parent, thus you have a “homozygous” genotype for the ApoE gene (e3/e3). If you had received a different variant of the gene from your mother than from your father, then you would have been “heterozygous” for the ApoE gene (e2/e3).</span>\n" +
    "            <span ng-if=\"results.name === 'e2/e4'\">You received a different variant of the gene from your mother than from your father, thus you are “heterozygous” for the ApoE gene (e2/e4). If you had received the same variant from each parent, then you would have had a “homozygous” genotype (such as e3/e3).</span>\n" +
    "            <span ng-if=\"results.name === 'e3/e4'\">You received a different variant of the gene from your mother than from your father, thus you are “heterozygous” for the ApoE gene (e3/e4). If you had received the same variant from each parent, then you would have had a “homozygous” genotype (such as e3/e3).</span>\n" +
    "            <span ng-if=\"results.name === 'e4/e4'\">You received the same variant from each parent, thus you have a “homozygous” genotype for the ApoE gene (e4/e4). If you had received a different variant of the gene from your mother than from your father, then you would have been “heterozygous” for the ApoE gene (e3/e4). This means that any children you have will also have at least one copy of the ApoE-e4 gene.  The support section of your report includes information about deciding if and how you want to share your results with your family.  Also, the genetic counselor can answer any questions you may have about your results.</span>\n" +
    "          </p>\n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <p class=\"txt txt-black\">\n" +
    "              <span ng-if=\"results.name === 'e2/e3'\">You are amongst the approximately 73% of the US population that does not carry a copy of the ApoE-e4 variant.  It is estimated that only about 27% of the total US population carries at least one copy of the ApoE-e4 variant. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>50,51</sup> </a></span>\n" +
    "              <span ng-if=\"results.name === 'e2/e2'\">You are amongst the approximately 73% of the US population that does not carry a copy of the ApoE-e4 variant.  It is estimated that only about 27% of the total US population carries at least one copy of the ApoE-e4 variant. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>50,51</sup> </a></span>\n" +
    "              <span ng-if=\"results.name === 'e3/e3'\">You are amongst the approximately 73% of the US population that does not carry a copy of the ApoE-e4 variant.  It is estimated that only about 27% of the total US population carries at least one copy of the ApoE-e4 variant. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>50,51</sup> </a></span>\n" +
    "              <span ng-if=\"results.name === 'e2/e4'\">It is estimated that about 27% of the total US population carries at least one copy of the ApoE-e4 variant. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>50,51</sup></a></span>\n" +
    "              <span ng-if=\"results.name === 'e3/e4'\">It is estimated that about 27% of the total US population carries at least one copy of the ApoE-e4 variant. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>50,51</sup></a></span>\n" +
    "              <span ng-if=\"results.name === 'e4/e4'\">It is estimated that about 27% of the total US population carries at least one copy of the ApoE-e4 variant. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>50,51</sup></a></span>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"result-p2-chart__wrap txt--indent\">\n" +
    "          <div class=\"chart__wrap anim-content-transition\">\n" +
    "            <ng-include class=\"img hide-mobile\" src=\"'./assets/images/charts/chart-donut-1.svg'\"></ng-include>\n" +
    "            <ng-include class=\"img hide-desktop\" src=\"'./assets/images/charts/chart-donut-mobile.svg'\"></ng-include>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"txt__wrap txt--indent\">\n" +
    "          <p class=\"txt txt-black\">\n" +
    "            When you look at the population based on disease status, two-thirds of the US population living with Alzheimer’s disease carry at least one copy of the ApoE-e4 variant. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>52,53</sup></a>\n" +
    "          </p>\n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <p class=\"txt txt-black\">Although not everyone who carries the ApoE-e4 variant will develop Alzheimer’s disease, those people with at least one copy of the ApoE-e4 variant have an increased risk for developing the disease.  While everyone should aim to live a cognitively healthy lifestyle, individuals with the high risk ApoE-e4 variant should seek their physician’s assistance to take action immediately by addressing modifiable lifestyle, environmental, and medical factors. </p>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <p class=\"txt txt-black\">The details of exactly how ApoE-e4 increases the risk for Alzheimer’s disease are still being worked out, but the fact that it does increase risk is well established.  This was first demonstrated over 20 years ago<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>54</sup></a> and has been confirmed in numerous studies.  ApoE genotype is the most important genetic factor for Alzheimer’s disease risk for most people (not including the rare “familial” Alzheimer’s disease genes that cause a much less common form of the disease).  Compared to the most common genotype (e3/e3), the presence of a single ApoE-e4 allele (e3/e4) increases an individual’s risk for Alzheimer’s disease about 3- to 4-fold, and the presence of two e4 alleles (e4/e4) increases the risk about 12- to 14-fold.55 In contrast to the e4 allele, the e2 allele is associated with reduced risk for Alzheimer’s disease.</p>\n" +
    "          </div>\n" +
    "  \n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <p class=\"txt txt-black\">Some medical conditions are solely determined by genetics  (for example muscular dystrophy), and disease outcome is unavoidable. Late-onset Alzheimer’s disease risk is influenced by factors in addition to genetics, so whether or not you carry the ApoE-e4 genetic variant does not tell the entire story for your Alzheimer’s disease risk.  Because a combination of genetic, medical, lifestyle, and environmental factors influence Alzheimer’s disease, people with the ApoE-e4 genetic variant do not always develop Alzheimer’s disease during their lifespan, and some people who develop Alzheimer’s disease do not carry the ApoE-e4 variant.  While your ApoE genotype is not a sole determinant of disease outcome, learning your genetic risk may help you decide on measured action to reduce your risk in other ways.</p>\n" +
    "          </div>\n" +
    "  \n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <p class=\"txt txt-black\">Your genetics stay the same as you age, but your risk for Alzheimer’s disease increases with age, and it increases at different rates depending on your ApoE genotype. The table and graph below<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>56</sup></a> show approximate lifetime risk for late-onset Alzheimer’s disease at various ages based on ApoE genotype (“lifetime risk” is the risk of developing Alzheimer’s disease at or before a certain age, e.g. ages 65, 75 and 85 in the charts below).  Note that these risk figures account only for ApoE genotype, without consideration of other genetic, medical or lifestyle factors that also may modify a person’s risk for Alzheimer’s disease.</p>\n" +
    "          </div>\n" +
    "  \n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <p class=\"txt txt-black\">To understand how this information relates to your genetic risk for Alzheimer’s disease:</p>\n" +
    "            <ul class=\"science-p-list txt--indent-small\">\n" +
    "              <li class=\"science-p-list__items\">\n" +
    "                <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                  <p class=\"txt txt-black\">Identify the graph below with your biologic gender at birth;</p>\n" +
    "                </div>\n" +
    "              </li>\n" +
    "              <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                  <p class=\"txt txt-black\">Locate the section that has your ApoE genotype listed on this report;</p>\n" +
    "                </div>\n" +
    "              </li>\n" +
    "              <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                  <p class=\"txt txt-black\">Refer to each age bar to find the ApoE associated risk for that age level. The bars above your genotype show how your lifetime risk for Alzheimer’s disease increases as you age. It is important to remember that the risk levels for Alzheimer’s disease in the charts below are only based on ApoE status. The influence of other factors, such as lifestyle, environment, and other genetic variants that also contribute to risk were evaluated separately in the research studies used to develop these charts and tables.</p>\n" +
    "                </div>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <section>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark txt-center\">Your Lifetime Risk (%) for Alzheimer’s disease by Age and ApoE Genotype</h3>\n" +
    "      </div>\n" +
    "      <div class=\"chart__wrap\">\n" +
    "        <div ng-if=\"gender == 'M' && results.name == 'e2/e2'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e2-male-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'M' && results.name == 'e2/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e4-male-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'M' && results.name == 'e2/e3'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e3-male-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'M' && results.name == 'e3/e3'\" class=\"img\" ng-include=\"'./assets/images/charts/e3-e3-male-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'M' && results.name == 'e3/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e3-e4-male-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'M' && results.name == 'e4/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e4-e4-male-chart.svg'\"></div>\n" +
    "\n" +
    "        <div ng-if=\"gender == 'F' && results.name == 'e2/e2'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e2-female-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'F' && results.name == 'e2/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e4-female-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'F' && results.name == 'e2/e3'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e3-female-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'F' && results.name == 'e3/e3'\" class=\"img\" ng-include=\"'./assets/images/charts/e3-e3-female-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'F' && results.name == 'e3/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e3-e4-female-chart.svg'\"></div>\n" +
    "        <div ng-if=\"gender == 'F' && results.name == 'e4/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e4-e4-female-chart.svg'\"></div>\n" +
    "      </div>\n" +
    "      <div class=\"section__wrap-md section__wrap-md--sm\">\n" +
    "        <p class=\"txt txt-black\">\n" +
    "          <span ng-if=\"gender === 'M' && results.name === 'e2/e3'\">For your specific case, a male who lives to age 75, and has an e2/e3 allele pair, has about a 1% ApoE-related risk for Alzheimer’s disease.  For a male with an e2/e3 ApoE allele pair who lives to age 85, the ApoE-related risk for Alzheimer’s disease increases to 5%.</span>\n" +
    "          <span ng-if=\"gender === 'M' && results.name === 'e2/e2'\">For your specific case, a male who lives to age 75, and has an e2/e2 allele pair, has about a 1% ApoE-related risk for Alzheimer’s disease.  For a male with an e2/e2 ApoE genotype who lives to age 85, the ApoE-related risk for Alzheimer’s disease increases to 5%.</span>\n" +
    "          <span ng-if=\"gender === 'M' && results.name === 'e3/e3'\">For your specific case, a male who lives to age 75, and has an e3/e3 allele pair, has about a 2% ApoE-related risk for Alzheimer’s disease.  For a male who lives to age 85, and has an e3/e3 allele pair, the ApoE-related risk for Alzheimer’s disease increases to 7%.</span>\n" +
    "          <span ng-if=\"gender === 'M' && results.name === 'e2/e4'\">For your specific case, a male who lives to age 75, and has an e2/e4 allele pair, has about a 5% ApoE-related risk for Alzheimer’s disease.  For a male who lives to age 85 and has an e2/e4 allele pair, the ApoE-related risk for Alzheimer’s disease increases to 19%.</span>\n" +
    "          <span ng-if=\"gender === 'M' && results.name === 'e3/e4'\">For your specific case, a male who lives to age 75, and has an e3/e4 allele pair, has about an 8% ApoE-related risk for Alzheimer’s disease. For a male who lives to age 85 and has an e3/e4 allele pair, the ApoE-related risk for Alzheimer’s disease increases to 22%.</span>\n" +
    "          <span ng-if=\"gender === 'M' && results.name === 'e4/e4'\">For your specific case, a male who lives to age 65, and has an e4/e4 allele pair, has about a 4% ApoE-related risk for Alzheimer’s disease.  For a male with an e4/e4 genotype who lives to age 75, the ApoE-related risk for Alzheimer’s disease increases to 31%.  The ApoE-related Alzheimer’s disease risk for a male with an e4/e4 genotype who lives to age 85 is 51%.</span>\n" +
    "\n" +
    "          <span ng-if=\"gender === 'F' && results.name === 'e2/e3'\">For your specific case, a female who lives to age 75, and has an e2/e3 allele pair, has about a 1% ApoE-related risk for Alzheimer’s disease.  For a female with an e2/e3 allele pair who lives to age 85, the ApoE-related risk for Alzheimer’s disease increases to 7%.</span>\n" +
    "          <span ng-if=\"gender === 'F' && results.name === 'e2/e2'\">For your specific case, a female who lives to age 75, and has an e2/e2 allele pair, has about a 1% ApoE-related risk for Alzheimer’s disease.  For a female with an e2/e2 allele pair who lives to age 85, the ApoE-related risk for Alzheimer’s disease increases to 7%.</span>\n" +
    "          <span ng-if=\"gender === 'F' && results.name === 'e3/e3'\">For your specific case, a female who lives to age 75, and has an e2/e3 allele pair, has about a 2% ApoE-related risk for Alzheimer’s disease.  For a female with an e2/e3 allele pair who lives to age 85, the ApoE-related risk for Alzheimer’s disease increases to 11%.</span>\n" +
    "          <span ng-if=\"gender === 'F' && results.name === 'e2/e4'\">For your specific case, a female who lives to age 75, and has an e2/e4 allele pair, has about a 5% ApoE-related risk for Alzheimer’s disease.  For a female with an e2/e4 allele pair who lives to age 85, the ApoE-related risk for Alzheimer’s disease increases to 29%.</span>\n" +
    "          <span ng-if=\"gender === 'F' && results.name === 'e3/e4'\">For your specific case, a female who lives to age 75, and has an e3/e4 allele pair, has about an 8% ApoE-related risk for Alzheimer’s disease.  For a female with an e3/e4 allele pair who lives to age 85, the ApoE-related risk for Alzheimer’s disease increases to 32%.</span>\n" +
    "          <span ng-if=\"gender === 'F' && results.name === 'e4/e4'\">For your specific case, a female who lives to age 65, and has an e4/e4 allele pair, has about a 2% ApoE-related risk for Alzheimer’s disease.  For a female with an e4/e4 allele pair who lives to age 75, the ApoE-related risk for Alzheimer’s disease increases to 30%.  The ApoE-related risk for a female with an e4/e4 genotype is 64% if she lives to age 85.</span>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "          <div class=\"chart__wrap\">\n" +
    "            <div ng-if=\"gender == 'M' && results.name == 'e2/e2'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e2-male-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'M' && results.name == 'e2/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e4-male-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'M' && results.name == 'e2/e3'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e3-male-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'M' && results.name == 'e3/e3'\" class=\"img\" ng-include=\"'./assets/images/charts/e3-e3-male-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'M' && results.name == 'e3/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e3-e4-male-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'M' && results.name == 'e4/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e4-e4-male-table.svg'\"></div>\n" +
    "\n" +
    "            <div ng-if=\"gender == 'F' && results.name == 'e2/e2'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e2-female-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'F' && results.name == 'e2/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e4-female-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'F' && results.name == 'e2/e3'\" class=\"img\" ng-include=\"'./assets/images/charts/e2-e3-female-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'F' && results.name == 'e3/e3'\" class=\"img\" ng-include=\"'./assets/images/charts/e3-e3-female-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'F' && results.name == 'e3/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e3-e4-female-table.svg'\"></div>\n" +
    "            <div ng-if=\"gender == 'F' && results.name == 'e4/e4'\" class=\"img\" ng-include=\"'./assets/images/charts/e4-e4-female-table.svg'\"></div>\n" +
    "          </div>\n" +
    "          <div class=\"section__wrap-md section__wrap-md--sm\">\n" +
    "            <p class=\"txt txt-black\">\n" +
    "              <span ng-if=\"results.name=='e2/e3'\">The APOE-e4 variant is associated with stroke and cardiovascular disease risk. Although you do not carry the ApoE-e4 variant, living a heart healthy lifestyle is still recommended for your overall health. There is strong scientific evidence that living a heart healthy lifestyle is also appropriate for a brain healthy lifestyle.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'AG16')\"> <sup>17</sup></a></span>\n" +
    "              <span ng-if=\"results.name=='e2/e2'\">The APOE-e4 variant is associated with stroke and cardiovascular disease risk. Although you do not carry the ApoE-e4 variant, living a heart healthy lifestyle is still recommended for your overall health. There is strong scientific evidence that living a heart healthy lifestyle is also appropriate for a brain healthy lifestyle.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'AG16')\"> <sup>17</sup></a></span>\n" +
    "              <span ng-if=\"results.name=='e3/e3'\">The APOE-e4 variant is associated with stroke and cardiovascular disease risk. Although you do not carry the ApoE-e4 variant, living a heart healthy lifestyle is still recommended for your overall health. There is strong scientific evidence that living a heart healthy lifestyle is also appropriate for a brain healthy lifestyle.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'AG16')\"> <sup>17</sup></a></span>\n" +
    "              <span ng-if=\"results.name=='e2/e4'\">The APOE-e4 variant is associated with stroke and cardiovascular disease risk. There is strong scientific evidence that living a heart healthy lifestyle is also appropriate for a brain healthy lifestyle. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'AG16')\"> <sup>17</sup></a> </span>\n" +
    "              <span ng-if=\"results.name=='e3/e4'\">The APOE-e4 variant is associated with stroke and cardiovascular disease risk. There is strong scientific evidence that living a heart healthy lifestyle is also appropriate for a brain healthy lifestyle. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'AG16')\"> <sup>17</sup></a> </span>\n" +
    "              <span ng-if=\"results.name=='e4/e4'\">The APOE-e4 variant is associated with stroke and cardiovascular disease risk. There is strong scientific evidence that living a heart healthy lifestyle is also appropriate for a brain healthy lifestyle. <a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'AG16')\"> <sup>17</sup></a> </span>\n" +
    "            </p>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"master_signedin.results({'page':'p1'})\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"master_signedin.results({'page':'p3'})\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
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
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap anim-content-transition\">\n" +
    "        <div class=\"txt txt-bold txt-gray\">Lifestyle</div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ download_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div  class=\"download-button\"></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Download report</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__title  txt-left-sm anim-content-transition\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h2 class=\"txt-blue-dark anim-content-transition\">Take Action</h2>\n" +
    "        </div>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <div class=\"txt txt-black anim-content-transition\">\n" +
    "            Lifestyle and other factors can also influence the\n" +
    "            chances of developing late-onset Alzheimer's disease.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"txt__wrap anim-content-transition\">\n" +
    "          <p class=\"txt-middle txt-blue-dark\">Consult with a healthcare professional before making any major lifestyle changes.</p>\n" +
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
    "  <div class=\"section__wrap-sm\">\n" +
    "    <div class=\"container-lg--dashboard container-lg--dashboard-not-space-sm\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"container-flex\">\n" +
    "          <div class=\"flex-column-tabs flex-column-tabs--hide-sm\">\n" +
    "            <div class=\"boxes__wrap boxes__wrap--padding-top anim-content-transition\">\n" +
    "              <div class=\"box-shadow box-shadow--tabs\">\n" +
    "                <ul class=\"box__wrap\">\n" +
    "                  <li class=\"box__item-link\">\n" +
    "                    <a href ng-click=\"setTab(1)\">\n" +
    "                      <h3 class=\"txt-blue-dark txt-center\">Stress</h3>\n" +
    "                      <div class=\"box-tab-image\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/human-brain-cloud.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                    </a>\n" +
    "                  </li>\n" +
    "                  <li class=\"box__item-link\">\n" +
    "                    <a href ng-click=\"setTab(2)\">\n" +
    "                      <h3 class=\"txt-blue-dark txt-center\">Exercise</h3>\n" +
    "                      <div class=\"box-tab-image\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/heart-red.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                    </a>\n" +
    "                  </li>\n" +
    "                  <li class=\"box__item-link\">\n" +
    "                    <a href ng-click=\"setTab(3)\">\n" +
    "                      <h3 class=\"txt-blue-dark txt-center\">Sleep</h3>\n" +
    "                      <div class=\"box-tab-image\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/moon.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                    </a>\n" +
    "                  </li>\n" +
    "                  <li class=\"box__item-link\">\n" +
    "                    <a href ng-click=\"setTab(4)\">\n" +
    "                      <h3 class=\"txt-blue-dark txt-center\">Nutrition</h3>\n" +
    "                      <div class=\"box-tab-image\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/broccoli.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                    </a>\n" +
    "                  </li>\n" +
    "                  <li class=\"box__item-link\">\n" +
    "                    <a href ng-click=\"setTab(5)\">\n" +
    "                      <h3 class=\"txt-blue-dark txt-center\">Brain Stimulation</h3>\n" +
    "                      <div class=\"box-tab-image\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/puzzle.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                    </a>\n" +
    "                  </li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          \n" +
    "          <div class=\"flex-column-tabs-body\">\n" +
    "            <div class=\"boxes__wrap boxes-wrap--results-p3 boxes__wrap--padding-top anim-content-transition\">\n" +
    "              <div class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(1)}\">\n" +
    "                <div class=\"box-shadow box-shadow--tabs\">\n" +
    "                  <div class=\"box-content\">\n" +
    "                    <div class=\"box-content__wrap\" ng-class=\"{'open-height': accordionIsOpen[0]}\">\n" +
    "                      <div class=\"title__wrap\">\n" +
    "                        <h3 class=\"txt-blue-dark txt-center\">Stress</h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/human-brain-cloud.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <h3 class=\"txt-blue txt-center-sm\">Health implications of stress</h3>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Excessive stress can negatively impact many systems in the human body, beyond the brain, that in turn still negatively impact memory and cognition, increasing the risk for cognitive decline.  Psychological stress has been shown to raise blood cholesterol levels.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>3, 4</sup></a> The elevation of cholesterol after a stressful event occurs within minutes of the stress exposure and can last for over 30 minutes.5 While these individual increases in cholesterol level are not large, they may contribute to atherosclerosis if they are sustained.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            The mechanisms for how stress impacts the brain were evaluated in a study where young mice were injected for seven days with a glucocorticoid similar to the body’s stress hormones (dexamethasone). Beta-amyloid protein levels in the mice’s brains increased by 60 percent, and the levels of another protein, called tau, also increased. Plaques form when beta-amyloid proteins mass together, and tau accumulation eventually leads to the formation of tangles in the brain, which are the two hallmark brain lesions of\n" +
    "                            Alzheimer’s disease.2\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Stress is also attributed to mental health decline, which is often already a symptom of cognitive impairment and dementia.  Vulnerability, perceived coping ability, and social support interact with stressful events to determine whether a person becomes depressed. Likewise, the effects of stressful life events on mental health are buffered by feelings of control and social support.16 Hence it is imperative to provide a sense of autonomy and control, as well as provide plenty of social support to reduce the impact of stressful events on depressive symptoms.  Individuals experiencing dementia also often suffer from anxiety, especially as the condition advances from mild to moderate and severe.  Like depression, anxiety can be lessened by providing the individual with a sense of control, routine, and social support, along with relaxation exercises to assist with the anxiety itself.16\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <h3 class=\"txt-blue txt-center-sm txt--indent-small\">Brain impacts of stress</h3>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            An important component of the stress cycle is what you do to deal with the source of stress and the impacts the stressor is having on you, which is called coping. Direct coping involves trying to eliminate or change the source of the stressor.1 Stress management can come in a variety of options including relaxation techniques, behavioral changes, and support.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Relaxation techniques that may improve your stress outlook include:\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <ul class=\"science-p-list science-p-list--space-side\">\n" +
    "                            <li class=\"science-p-list__items\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Yoga</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Stretching</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Meditation</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Progressive muscular relaxation</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Deep breathing techniques</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Spending time outdoors</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Engaging in activities of humor</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Music therapy</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Touch therapy (such as massage)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Journaling</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Art therapy</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                          </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Behavioral changes to reduce stress may include:\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <ul class=\"science-p-list science-p-list--space-side\">\n" +
    "                            <li class=\"science-p-list__items\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Stopping smoking</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Reduction of alcohol consumption</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Reduction of caffeine intake</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Engaging in physical exercise</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Getting adequate sleep</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Making lists or using reminder apps (for memory difficulties)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Developing routines (to combat anxiety)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Keeping a stress log to identify stressful situations and strategize a way to mitigate them</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Time management</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                          </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Support can include:\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <ul class=\"science-p-list science-p-list--space-side\">\n" +
    "                            <li class=\"science-p-list__items\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Seeking counseling (especially for grief and loss like divorce or death of a loved one)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Joining a support group of people with similar experiences</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Social support from a church or volunteer organization</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Positive social interaction with peers</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                          </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Also, for some people interacting with an animal, such as a cat or dog, provides a form of support and relaxation as well.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Experiment with different stress management techniques to see which one(s) work best for you, because including daily stress management in your routine is important for brain health.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div ng-click=\"accordionOpen(0)\" class=\"button-open\">\n" +
    "                      <div class=\"button__wrap button--center\">\n" +
    "                        <div class=\"txt txt-medium txt-static txt-blue-dark\">Read <span ng-show=\"!accordionIsOpen[0]\">more</span><span ng-show=\"accordionIsOpen[0]\">less</span></div>\n" +
    "                        <div class=\"box-body-button__arrow-down\" ng-class=\"{'rotate-arrow': accordionIsOpen[0]}\">\n" +
    "                          <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"tabs-link-bottom hide-mobile\">\n" +
    "                  <div class=\"tabs-link-bottom__wrap\" ng-click=\"setTab(2)\">\n" +
    "                    <div class=\"container-flex\">\n" +
    "                      <div class=\"box-tab-image box-tab-image--space-right\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/heart-red.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\">Read more about other lifestyle factors </p>\n" +
    "                        <p class=\"txt-large txt-blue-dark txt-medium\">Exercise & Alzheimer’s disease</p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div id=\"section-2\" class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(2)}\">\n" +
    "                <div class=\"box-shadow box-shadow--tabs\">\n" +
    "                  <div class=\"box-content\">\n" +
    "                    <div class=\"box-content__wrap\" ng-class=\"{'open-height': accordionIsOpen[1]}\">\n" +
    "                      <div class=\"title__wrap\">\n" +
    "                        <h3 class=\"txt-blue-dark txt-center\">Exercise</h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/heart-red.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <h3 class=\"txt-blue txt-center-sm\">Aerobic exercise benefits the brain both directly and indirectly.</h3>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            First, when you exercise, your muscles use glucose for fuel.  This results in lower blood glucose and insulin levels in your body. High blood glucose and insulin are risk factors for Alzheimer’s disease, so controlling them is important for brain health..\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt  txt-black\">\n" +
    "                            Secondly, regular aerobic exercise reduces inflammation levels in the body, which is another important aspect of cognitive health.1,2 Aerobic exercise also stimulates the release of growth factors, which are chemicals in the brain that stimulate the growth of new blood vessels in the brain and promote the health and survival of brain cells. 1\n" +
    "                            Also, aerobic exercise improves mood and sleep and reduces stress and anxiety. Depression, anxiety, stress, and poor sleep habits are all associated with increased risk of cognitive decline and Alzheimer’s disease. There is no one best exercise or routine. Choose activities you enjoy and incorporate movement into everyday activities whenever possible.  However, you should check with your healthcare provider to be sure certain types and duration of activity are safe for you.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt  txt-black\">\n" +
    "                            STRENGTH TRAINING BENEFITS FOR BRAIN HEALTH\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt  txt-black\">\n" +
    "                            People who do both aerobic and strength training exercise tend to have greater attention, faster information processing, and improved working memory compared to those who do aerobic exercise alone.5 For example, at the end of a 12 week strength training program, older women showed a 19% increase in cognitive capacity.6\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt  txt-black\">\n" +
    "                            As you age, strength training is important to maintain the muscle mass needed for daily activities such as: standing from a seated position, opening jars, lifting grocery bags, vacuuming, and emptying the dishwasher.2,5,7  Also, bone mineral density decreases with age, which increases your risk for breaking a bone. Strength training helps to maintain or increase bone mineral density levels. This is important because each year more than more than one-third of people aged 65 or older fall, so building strong bones will protect your overall health as you age.8  To enhance cognitive health and maintain muscle strength, participate in strength training exercises at least two times per week on non-consecutive days, if your healthcare provider feels strength training is safe for you.3\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt  txt-black txt-bold\">\n" +
    "                            You should always consult with your healthcare provider before beginning a new exercise program.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div ng-click=\"accordionOpen(1)\" class=\"button-open\">\n" +
    "                      <div class=\"button__wrap button--center\">\n" +
    "                        <div class=\"txt txt-medium txt-static txt-blue-dark\">Read <span ng-show=\"!accordionIsOpen[1]\">more</span><span ng-show=\"accordionIsOpen[1]\">less</span></div>\n" +
    "                        <div class=\"box-body-button__arrow-down\" ng-class=\"{'rotate-arrow': accordionIsOpen[1]}\">\n" +
    "                          <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"tabs-link-bottom hide-mobile\">\n" +
    "                  <div class=\"tabs-link-bottom__wrap\" ng-click=\"setTab(3)\">\n" +
    "                    <div class=\"container-flex\">\n" +
    "                      <div class=\"box-tab-image box-tab-image--space-right\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/moon.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\">Read more about other lifestyle factors </p>\n" +
    "                        <p class=\"txt-large txt-blue-dark txt-medium\">Sleep & Alzheimer’s disease</p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div id=\"section-3\" class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(3)}\">\n" +
    "                <div class=\"box-shadow box-shadow--tabs\">\n" +
    "                  <div class=\"box-content\">\n" +
    "                    <div class=\"box-content__wrap\" ng-class=\"{'open-height': accordionIsOpen[2]}\">\n" +
    "                      <div class=\"title__wrap\">\n" +
    "                        <h3 class=\"txt-blue-dark txt-center\">Stress</h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/moon.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <h3 class=\"txt-blue txt-center-sm\">Poor sleep may be both a cause and a symptom of Alzheimer’s disease.</h3>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Research indicates that 15% of Alzheimer’s cases may be attributable to disrupted sleep(1).  Research also indicates that older adults with disturbed sleep experience a faster decline in cognition than those who sleep well (2). Sleep is an opportunity for the body to repair and restore itself.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt  txt-black\">\n" +
    "                            Overall, it is recommended that you aim to sleep about 7 to 8 hours nightly. Ideally you should go to bed and rise at a similar time each day, as this will help set your body’s internal clock and lead to better sleep habits. Also, try to limit your exposure to electronics, including televisions, cell phones, computer screens, and back-lit reading devices such as a Kindle, for at least one hour prior to bed. The blue light emitted from these devices can impair your body’s natural ability to produce melatonin, and thus disrupt your sleep cycle (8). Also, if you often wake up feeling groggy, even after a full 7 to 8 hours of sleep each night, your partner complains of your snoring or you wake up with a sore throat frequently, share this information with your healthcare provider. They can help identify if you may be a candidate for a sleep study. Sleep Apnea, or disordered breathing during sleep,\n" +
    "                            increases the risk for stroke, heart disease, and cognitive disorders.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div ng-click=\"accordionOpen(2)\" class=\"button-open\">\n" +
    "                      <div class=\"button__wrap button--center\">\n" +
    "                        <div class=\"txt txt-medium txt-static txt-blue-dark\">Read <span ng-show=\"!accordionIsOpen[2]\">more</span><span ng-show=\"accordionIsOpen[2]\">less</span></div>\n" +
    "                        <div class=\"box-body-button__arrow-down\" ng-class=\"{'rotate-arrow': accordionIsOpen[2]}\">\n" +
    "                          <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"tabs-link-bottom hide-mobile\">\n" +
    "                  <div class=\"tabs-link-bottom__wrap\" ng-click=\"setTab(4)\">\n" +
    "                    <div class=\"container-flex\">\n" +
    "                      <div class=\"box-tab-image box-tab-image--space-right\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/broccoli.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\">Read more about other lifestyle factors </p>\n" +
    "                        <p class=\"txt-large txt-blue-dark txt-medium\">Nutrition & Alzheimer’s disease</p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div id=\"section-4\" class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(4)}\">\n" +
    "                <div class=\"box-shadow box-shadow--tabs\">\n" +
    "                  <div class=\"box-content\">\n" +
    "                    <div class=\"box-content__wrap\" ng-class=\"{'open-height': accordionIsOpen[3]}\">\n" +
    "                      <div class=\"title__wrap\">\n" +
    "                        <h3 class=\"txt-blue-dark txt-center\">Nutrition</h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/broccoli.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <h3 class=\"txt-blue txt-center-sm\">Researchers continue to investigate the relationship between Alzheimer’s disease and diet.</h3>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Tracking eating habits in individuals can be difficult and not everyone responds well to the same diet.  Research has found some benefit for some people on a few different diets, as well as a relationship between intake of certain foods and nutrients and cognitive health.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <h3 class=\"txt-blue txt-center-sm txt--indent-small\">Mediterranean Diet</h3>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            The Mediterranean Diet is one of the diets that has been associated with decreased risk of dementia, mild cognitive impairment, and Alzheimer’s disease (1-6).  The Mediterranean Diet focuses on:\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <ul class=\"science-p-list science-p-list--space-side\">\n" +
    "                            <li class=\"science-p-list__items\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Intake of fruits</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Intake of vegetables</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Intake of legumes</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Intake of grains/cereals</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Intake of unsaturated fatty acids (primarily olive oil)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Moderate to high intake of ﬁsh</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Low to moderate intake of dairy products</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Low intake of meat and saturated fatty acids</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Regular but moderate intake of alcohol</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                          </ul>\n" +
    "                        </div>\n" +
    "                        <h3 class=\"txt-blue txt-center-sm txt--indent-small\">MIND Diet</h3>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Researchers have also evaluated Neurodegenerative Delay (MIND) diet, which is a combination of the Mediterranean diet and the Dietary Approaches to Stop Hypertension (DASH) diet.  The goal of the MIND diet is to see how combining the concepts of heart healthy eating (DASH diet) and the concepts of the Mediterranean diet together impact cognitive function.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black txt-bold\">\n" +
    "                            The MIND Diet focuses on:\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Adequate intake of:\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <ul class=\"science-p-list science-p-list--space-side\">\n" +
    "                            <li class=\"science-p-list__items\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Green leafy vegetables (daily)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Other vegetables (daily)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Nuts (> 5x/week)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Berries (> 2x/week)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Beans (> 3x/week)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Whole grains (> 3x/day)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Fish (> 1x/week)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Poultry (> 2x/week)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Olive oil (primary cooking oil)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Wine (1 serving per day)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                          </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Low intake of:\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <ul class=\"science-p-list science-p-list--space-side\">\n" +
    "                            <li class=\"science-p-list__items\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Red meat (< 4 servings/week)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Butter/margarine (<1 Tbsp/day)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Cheese (<1 serving/week)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Sweets/pastries (<5/week)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Fried/fast foods (<1/week)</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                          </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Results from a MIND diet study of 923 people ages 58-98 years of age found that individuals who closely followed the MIND diet had a 53% decreased risk of Alzheimer’s disease compared to individuals who did not follow the MIND diet closely. Individuals who followed the MIND diet  moderately well or very well had a 35% reduced risk of ALzheimer’s disease compared to those who followed the MIND diet less than moderately well (7).\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <h3 class=\"txt-blue txt-center-sm txt--indent-small\">Ketogenic Diet</h3>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            A ketogenic diet is traditionally 80% to 90% fat that results in decreased glucose levels and increased ketone body production by the liver. The ketogenic diet has been used to treat epilepsy and is being studied for possible effects on Alzheimer’s disease, Parkinson’s disease, and other neurologic disorder. Researchers believe that ketones reduce the brain’s reliance on glucose for energy (8, 9).  The ketogenic diet is not for everyone and should be carefully followed by a physician, as some people experience gastrointestinal upset, hypercholesterolemia, hypoglycemia, and cardiomyopathy (9). Ketosis can also be achieved by fasting.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            In addition to these specific diets, a number of individual foods and nutrients have been associated with increased and decreased risk of cognitive decline (16):\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black txt-bold\">\n" +
    "                            Dietary Fat:\n" +
    "                          </p>\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            In a study of 5386 people without dementia, eating fish had a lower risk of developing dementia and Alzheimer’s over 2 years, while eating a diet higher in total fat, saturated fat, and dietary cholesterol was associated with an increased risk of dementia.17 In another study looking at the diets of 482 women aged 60 years and older, there was not an association between intake of saturated fat, trans fat, or dietary cholesterol and cognitive decline. However,  amongst those women who ate an increased amount of monounsaturated fatty acids, such as olive oil, nuts, and avocado, there was associated decrease of cognitive decline.18 Another study spanning 6.5 years  looked at the effects of eating a Mediterranean diet paired with consuming extra virgin olive oil per week, the Mediterranean diet paired with eating nuts per day, and eating a low-fat diet (controls) in a total of 522 people aged 60 to 80 years.  The individuals who ate the Mediterranean diet with nuts or with olive oil had higher  cognitive test scores when compared to the individuals eating the low-fat diet.2 Another study following the food intake of 8,065 people aged 65 years of age and older over a period of 4 years found that regular intake of omega-3 oils and fish reduced the risk of dementia by 60%, while regular intake of omega-6 fats without regular intake of omega-3 oils increased the risk for dementia for people who do NOT have an ApoE-e4 allele.19\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black txt-bold\">\n" +
    "                            Fish:\n" +
    "                          </p>\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Researchers evaluating the diets of 8,065 adults aged 65 and older found that those who ate fish 2 to 3 times weekly had a reduced risk of dementia and Alzheimer’s disease (19). Another study of 815 people ages 65 to 94 years old found that those who ate fish at least once weekly had a 60% reduced risk of Alzheimer’s disease over the study period compared to those who rarely or never ate fish. Many of the individuals with a higher total omega-3 and DHA intake also had a decreased risk of Alzheimer’s (21).\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black txt-bold\">\n" +
    "                            Vegetables:\n" +
    "                          </p>\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Research indicates that vegetable intake is associated with Alzheimer’s risk. In a study of 3718 people 65 years of age and older, cognitive decline was slowed by 38-40% over 6 years for those consuming between 2.8 and 4.1 servings of vegetables per day compared to those consuming less than 1 serving of vegetables per day. There was no association between fruit intake and cognitive function (22). In a study of 1,233 adults without dementia, vegetable intake of more than 1 cup/day reduced the risk of Mild Cognitive Impairment (23). Also, In an ongoing study of 8065 people 65 years of age and older, daily consumption of fruits and vegetables decreased the risk for all-cause dementia by 30% (19).\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black txt-bold\">\n" +
    "                            Berries:\n" +
    "                          </p>\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Researchers found that eating berries 2 or more times per week was associated with decreased rate of cognitive decline. (24)\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black txt-bold\">\n" +
    "                            Artificial Sweeteners:\n" +
    "                          </p>\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            A research study looking at nearly 1,500 adults over the age of 60 found an increased risk of stroke and dementia among those who drank soda sweetened with artificial sweeteners. (26)\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Overall, a brain healthy diet aims to manage blood glucose levels, provide fat calories from unsaturated fats, and be rich in plant-based foods, especially colorful vegetables. The following recommendations are encouraged:\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <ul class=\"science-p-list science-p-list--space-side\">\n" +
    "                            <li class=\"science-p-list__items\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">At least five ½ cup servings of vegetables/day, with at least 1 serving coming from leafy greens</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Focus on whole fruit instead of dried fruit or juices, with berries recommended 2 or more times per week</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Try to include healthy fats (nuts, seeds, avocado, olive oil, fatty fish) with each meal and snack</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Aim to also have protein with most meals and snacks, focusing on plant based proteins (beans and lentils 3 or more times a week), fatty fish (salmon, mackerel, or sardines 2 to 3 times a week), and poultry (2 to 3 times a week or more).</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                            <li class=\"science-p-list__items science-p-list__items--small-space-top\">\n" +
    "                              <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                                <p class=\"txt txt-black\">Choose single-ingredient starches or grains, such as oats, sweet potato, or quinoa (keep serving size to ½ c to 1 cup) and avoid processed carbohydrate products, baked goods, and sweets.</p>\n" +
    "                              </div>\n" +
    "                            </li>\n" +
    "                          </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            <span class=\"txt-bold\">Before making significant changes to your diet, you should consult with your healthcare provider, as no one single diet is right for all people.</span> Also, a ketogenic diet is not recommended without careful monitoring by a physician or dietitian.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div ng-click=\"accordionOpen(3)\" class=\"button-open\">\n" +
    "                      <div class=\"button__wrap button--center\">\n" +
    "                        <div class=\"txt txt-medium txt-static txt-blue-dark\">Read <span ng-show=\"!accordionIsOpen[3]\">more</span><span ng-show=\"accordionIsOpen[3]\">less</span></div>\n" +
    "                        <div class=\"box-body-button__arrow-down\" ng-class=\"{'rotate-arrow': accordionIsOpen[3]}\">\n" +
    "                          <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"tabs-link-bottom hide-mobile\">\n" +
    "                  <div class=\"tabs-link-bottom__wrap\" ng-click=\"setTab(5)\">\n" +
    "                    <div class=\"container-flex\">\n" +
    "                      <div class=\"box-tab-image box-tab-image--space-right\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/puzzle.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\">Read more about other lifestyle factors </p>\n" +
    "                        <p class=\"txt-large txt-blue-dark txt-medium\">Brain Stimulation & Alzheimer’s disease</p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div id=\"section-5\" class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(5)}\">\n" +
    "                <div class=\"box-shadow box-shadow--tabs\">\n" +
    "                  <div class=\"box-content\">\n" +
    "                    <div class=\"box-content__wrap\" ng-class=\"{'open-height': accordionIsOpen[4]}\">\n" +
    "                      <div class=\"title__wrap\">\n" +
    "                        <h3 class=\"txt-blue-dark txt-center\">Brain Stimulation</h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                        <ng-include class=\"img\" src=\"'../assets/images/svg/puzzle.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap\">\n" +
    "                        <h3 class=\"txt-blue txt-center-sm\">Life-long learning and engagement is important for brain health</h3>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Neuroplasticity, the brain’s ability to reorganize synaptic connections in response to learning, experience, or injury, occurs across the human lifespan. Educational attainment7-9 and a complex and challenging career7,8, 10 are associated with decreased rates of dementia.  Lifelong cognitive stimulation is critical for the health and function of the brain and can occur through many means, including social interaction and novel experiences (2).  Even simple experiences such as taking a new route when driving can be beneﬁcial for cognitive health.8 Other examples include puzzles, discussion groups, reading, computer use, game playing, playing musical instruments12-16 and learning a new language,11 all of which are associated with improvement of “cognitive reserve.”\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div ng-click=\"accordionOpen(4)\" class=\"button-open\">\n" +
    "                      <div class=\"button__wrap button--center\">\n" +
    "                        <div class=\"txt txt-medium txt-static txt-blue-dark\">Read <span ng-show=\"!accordionIsOpen[4]\">more</span><span ng-show=\"accordionIsOpen[4]\">less</span></div>\n" +
    "                        <div class=\"box-body-button__arrow-down\" ng-class=\"{'rotate-arrow': accordionIsOpen[4]}\">\n" +
    "                          <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        \n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section second-->\n" +
    "  \n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"master_signedin.results({'page':'p2'})\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"master_signedin.results({'page':'p4'})\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/results/pages/result-p4.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p4.tpl.html",
    "<div class=\"result\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap\">\n" +
    "        <div class=\"txt txt-bold txt-gray anim-content-transition\">Next steps</div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ download_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div  class=\"download-button\"></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Download report</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__title anim-content-transition txt-left-sm\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h2 class=\"txt-blue-dark anim-content-transition\">Next steps</h2>\n" +
    "        </div>\n" +
    "        <div class=\"title__wrap anim-content-transition\">\n" +
    "          <p class=\"txt txt-black\">\n" +
    "            Now that you know your late-onset Alzheimer's ApoE genetic risk, it's time to take the <span class=\"txt-bold\">next steps.</span>\n" +
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
    "  <div class=\"section__wrap-sm\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"container-flex container-flex--column-sm\">\n" +
    "        <div class=\"flex-column\">\n" +
    "          <div class=\"flex-column__wrap flex-column__wrap--not-left flex-column__wrap--not-space-sm\">\n" +
    "            <div class=\"img__wrap img__wrap--not-top-space-sm img--center-sm\">\n" +
    "              <ng-include class=\"img-middle--small doctor--bgc-white\" src=\"'../assets/images/svg/doctor--bgc-silver.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"title__wrap txt-center-sm\">\n" +
    "              <h3 class=\"txt-blue-dark anim-content-transition\">Contact Genetic Counselor</h3>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap txt-center-sm\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                Do you have questions about your results or how to use them to make health decisions? Do you have questions about how to discuss your results with your family?  Our genetic counselors are available to help answer your questions.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap txt-center-sm\">\n" +
    "              <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"download__wrap download__wrap--sm-center\">\n" +
    "                <div class=\"flex-column\">\n" +
    "                  <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "                </div>\n" +
    "                <span class=\"flex-column-2\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"flex-column\">\n" +
    "          <div class=\"flex-column__wrap flex-column__wrap--not-space-sm\">\n" +
    "            <div class=\"img__wrap img__wrap--not-top-space-sm img--center-sm\">\n" +
    "              <ng-include class=\"img-middle--small doctor--bgc-white\" src=\"'../assets/images/svg/dna-molecule.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"title__wrap txt-center-sm\">\n" +
    "              <h3 class=\"txt-blue-dark anim-content-transition\">Science</h3>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap txt-center-sm\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                The Alzheimer’s ApoE Genetic Test is a single gene test that looks at your genetic risk for Alzheimer’s disease. Read more about genetics and the science behind ApoE test by ADx Healthcare.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap\">\n" +
    "              <a ui-sref=\"master_signedin.results({'page':'science'})\" class=\"bt-round bt-round--blue\">Science</a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"flex-column\">\n" +
    "          <div class=\"flex-column__wrap flex-column__wrap--not-right flex-column__wrap--not-space-sm\">\n" +
    "            <div class=\"img__wrap img__wrap--not-top-space-sm img--center-sm\">\n" +
    "              <ng-include class=\"img-middle--small doctor--bgc-white\" src=\"'../assets/images/svg/questions-message.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"title__wrap txt-center-sm\">\n" +
    "              <h3 class=\"txt-blue-dark anim-content-transition\">General Questions</h3>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap txt-center-sm\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                The Alzheimer’s ApoE Genetic Test is a single gene test that looks at your genetic risk for Alzheimer’s disease. Take a look at our General questions section to read more about genetics, ApoE,  lifestylle changes and other important topics.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap\">\n" +
    "              <a ui-sref=\"master_signedin.results({'page':'questions'})\" class=\"bt-round bt-round--orange\">General Questions</a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"section__wrap-sm\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <h3 class=\"txt-blue-dark anim-content-transition\">Worried About Memory?</h3>\n" +
    "      <div class=\"sub-header-txt__wrap anim-content-transition\">\n" +
    "        <p class=\"txt-middle txt-black\">\n" +
    "          If you are worried about memory loss, please make an appointment with your healthcare provider to assess your cognitive health. Also, you may want to discuss your concerns about your family history of Alzheimer’s disease or another dementia type if there is one in your family.  Your healthcare provider knows your overall health best. Also, if you plan to make major lifestyle changes based on your test results, it is recommended you check-in with your healthcare provider to be sure those changes are safe based on your current health status.  They can evaluate your cognitive health and make recommendations based on your other medical conditions.</p>\n" +
    "      </div>\n" +
    "      <div class=\"txt--indent-small\">\n" +
    "        <a target=\"_blank\" ng-href=\"{{ download_link }}\"  class=\"txt-link txt-blue-2 txt-small txt-medium\">Download your results</a>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap anim-content-transition\">\n" +
    "        <h3 class=\"txt-blue-dark\">Sharing with Family  Members</h3>\n" +
    "      </div>\n" +
    "      <div class=\"sub-header-txt__wrap anim-content-transition\">\n" +
    "        <p class=\"txt-middle txt-black\">Having the social support of your loved ones can help you as you begin implementing new lifestyle behaviors into your routine. You can also print a copy of your results if you want to share them with family or your healthcare provider. Having support can be very helpful when making behavior changes.  Also, your relatives or friends may benefit from hearing about your experience, and may wish to consider ApoE testing themselves.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"txt--indent-small\">\n" +
    "        <a ui-sref=\"master_signedin.results({'page':'sharing'})\" class=\"txt-link txt-blue-2 txt-small txt-medium\">Learn about sharing with family</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"master_signedin.results({'page':'p3'})\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>");
}]);

angular.module("components/results/pages/result-questions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-questions.tpl.html",
    "<div class=\"result result--space-bottom\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap\">\n" +
    "        <div class=\"txt txt-bold txt-gray anim-content-transition\">General Questions</div>\n" +
    "      </div>\n" +
    "      <!--<div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ download_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div  class=\"download-button\"></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Download report</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>-->\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__title anim-content-transition txt-left-sm\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h2 class=\"txt-blue-dark anim-content-transition\">General Questions</h2>\n" +
    "        </div>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <p class=\"txt txt-black anim-content-transition\">\n" +
    "            “You are not in this alone. ADx Healthcare provides\n" +
    "            genetics counselors to go over your report and\n" +
    "            answer any questions you have.”\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--section first-->\n" +
    "  <div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <!--section dropdown txt-->\n" +
    "      <div class=\"section-dropdown-txt__wrap section-dropdown-txt__wrap--border-bottom\" uib-accordion close-others=\"false\">\n" +
    "\n" +
    "        <div uib-accordion close-others=\"false\">\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">You’re not alone</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                  From the independent physician review of your order, to the genetic counselors available to answer your questions about your test results, ADx Healthcare will support you through the process.\n" +
    "                <div class=\"txt--indent\">\n" +
    "                  For all the steps in between, our customer support team is available to discuss your questions about the science behind ApoE, ordering a test, completing your kit, or interpreting your results.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">Genetic counseling</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                You can choose to receive your results while speaking with a genetic counselor, or you can receive them on your own. You can always choose to speak with a genetic counselor after you have had time to review your results about what they mean for you or your family. We want to be sure you are getting the most from your Alzheimer’s ApoE Genetic Test and understand your results, so we offer genetic counseling to you at no additional charge.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">Emotions</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                Genetics is only one part of your risk for developing Alzheimer’s disease. While learning that you have a higher risk for developing a disease can be unsettling, there is also power in obtaining that knowledge.  Sometimes we find ourselves questioning if we would have made a choice earlier in life if we would have known the outcomes long-term.  Knowing that you have a high genetic risk for Alzheimer’s disease is unsettling, but it can help empower you to take measured action to live a cognitively healthy life in order to best protect your future self.\n" +
    "                <div class=\"txt--indent\">\n" +
    "                  Having the ApoE-e4 variant  (high genetic risk for late-onset Alzheimer’s disease) does not guarantee you will develop Alzheimer’s.  Learning your genetic risk can help you take measured steps towards improving your cognitive health, so you can reduce your risk for or delay the onset of Alzheimer’s disease.  Sometimes making lifestyle changes can be hard, but having a reason for why you are eating healthier, reducing your stress, and making fitness and sleep a priority can be motivating.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">Lifestyle changes</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                Stress management, nutrition, fitness, sleep, social engagement, ongoing brain training (music, games, reading, crafts, etc), and avoiding environmental toxins may improve your cognitive health. Living an overall healthier life may also help reduce your risk for or delay the onset of late-onset Alzheimer's disease.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">Connecting with community</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                The more support you have for implementing brain healthy lifestyle behaviors, the more likely you are to be successful at turning them into lifelong habits.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">What gene is being tested?</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                The Alzheimer’s APOE test is a single gene test that looks at your genetic risk for Alzheimer’s disease. Having the high risk copy of this gene (APOE e4) does not guarantee that you will develop Alzheimer’s disease. Likewise, not possessing a copy of the highest risk allele (APOE e4) does not mean you won’t ever develop Alzheimer’s disease. Alzheimer’s disease is influenced by genetics, environment, and lifestyle, so learning your genetic risk helps inform you how aggressively you want to address your lifestyle to optimize your cognitive health.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">What are the requirements for ordering a test?</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                ADx Healthcare contracts with PWNHealth, an independent provider for both physician authorization and genetic counseling for our Alzheimer’s ApoE Genetic Test.  A physician from PWNHealth will review your health history questions to ensure the test is right for you.  Someone from PWNHealth may reach out to you if they have any additional questions.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">Can I use my health insurance benefits to purchase this product?</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                This test is not covered by insurance or Medicaid at this time.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">How will the test results be delivered?</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                Your test results will be delivered in an electronic report. A genetic counselor from PWNHealth will be available to go through your results with you (at no additional charge) if you have any questions. A printable version of your report will be available to you to download.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">What will my test results tell me?</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                Your test results will explain which combination of the ApoE alleles you have. This genetic combination will be further interpreted, to help you identify your relative risk for developing late-onset Alzheimer’s disease, based on your genetics, gender and current age. Your ApoE status will not change as you age, but your chance of developing late-onset Alzheimer’s disease will increase at a different rate dependent on which ApoE combination you have. A genetic counselor will be available to go through your results with you if you have questions.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">Will someone be available to help me understand my results?</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                You will receive your test results in a clear report. However, if you have questions about what these results mean to you or your family, an appointment can be scheduled with a genetic counselor from PWNHealth, for no additional charge, to discuss your test results with you.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">What do I do with my test results?</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                Your test results are private. It is up to you if you want to share your test results with your family or healthcare provider.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">How can my test results help me make health decisions?</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                Learning your genetic risk for late-onset Alzheimer’s disease can help you determine how aggressively you want to start making lifestyle changes to improve your cognitive health, such as addressing sleep habits, stress, nutrition, exercise, ongoing learning, socialization, and your exposure to chemicals and pollutants. Also, if you are identified as having an e4 allele, you may be able to enroll in clinical trials, which are research studies searching for the cure to Alzheimer’s. Enrollment gives you access to cutting edge prevention therapies and lets you participate in the search for a cure.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "            <div uib-accordion-heading>\n" +
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark anim-content-transition\">Will my personal information be protected?</h2>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-txt__wrap\">\n" +
    "              <div class=\"txt txt-black\">\n" +
    "                Your data is protected throughout the process, including the physician approval and genetic counseling by PWNHealth, sequencing by Helix, and interpretation by ADx Healthcare.   As is explained in our Privacy Policy, your information will only be shared with the staff necessary for the review and processing of your order.  Your information will not be shared with anyone you do not authorize it to be shared with.\n" +
    "              </div>\n" +
    "              <div class=\"txt txt-black txt--indent\">\n" +
    "                You may be given the opportunity to contribute your genetic data to research studies related to Alzheimer’s disease, but the decision to participate is up to you. ADx Healthcare will not share your information with anyone, including your healthcare provider, without your written consent.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "      </div>\n" +
    "      <!-- end section dropdown txt-->\n" +
    "    </div>\n" +
    "    <!--end section first-->\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("components/results/pages/result-science.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-science.tpl.html",
    "<div class=\"result result--space-bottom\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap\">\n" +
    "        <div class=\"txt txt-bold txt-gray anim-content-transition\">Science</div>\n" +
    "      </div>\n" +
    "      <!--<div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ download_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div  class=\"download-button\"></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Download report</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>-->\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__title anim-content-transition txt-left-sm\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h2 class=\"txt-blue-dark anim-content-transition\">Science</h2>\n" +
    "        </div>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <p class=\"txt txt-black anim-content-transition\">\n" +
    "            The Alzheimer’s ApoE test is a single gene test that\n" +
    "            looks at your genetic risk for late-onset Alzheimer’s disease.\n" +
    "          </p>\n" +
    "          <p class=\"txt txt-black anim-content-transition\">\n" +
    "            Read more about genetics and the science behind the Alzheimer’s ApoE Genetic Test by ADx Healthcare.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section-first-->\n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <h3 class=\"txt-blue-dark anim-content-transition\">Learn about genetics</h3>\n" +
    "      <div class=\"sub-header-txt__wrap anim-content-transition\">\n" +
    "        <p class=\"txt txt-black\">\n" +
    "          ApoE comes in three forms: ApoE-e2, ApoE-e3, and ApoE-e4.  Having a high risk copy of this gene (ApoE-e4) does not guarantee that you will develop Alzheimer’s disease. Likewise, possessing a copy of the lowest risk variant (ApoE-e2) does not mean you won’t develop Alzheimer’s disease.  Learning your ApoE -related genetic risk can be paired with your age, gender, medical health and lifestyle habits to help assess your Alzheimer’s disease risk. Knowing your overall risk can help you decide how aggressively you want to address your cognitive health. Visit Genetics Home Reference to learn more about ApoE.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      \n" +
    "      <!--section dropdown txt-->\n" +
    "      <div class=\"section-dropdown-txt__wrap section-dropdown-txt__wrap--border-bottom\" uib-accordion close-others=\"false\">\n" +
    "        \n" +
    "        <!--dropdown content first-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content anim-content-transition\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">What are Genes?</h3>\n" +
    "              </div>\n" +
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
    "        <div uib-accordion-group class=\"dropdown-txt__content anim-content-transition\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">What is a DNA?</h3>\n" +
    "              </div>\n" +
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
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">How do genes and DNA function?</h3>\n" +
    "              </div>\n" +
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
    "      <h1 class=\"txt-blue-dark\">How do we interpret your results?</h1>\n" +
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
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">What do my results mean to me?</h3>\n" +
    "              </div>\n" +
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
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Ethnicity and population averages</h3>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              The ApoE test results are based on data for individuals of European descent.  If you are not of European descent, you are still expected to have a higher risk for developing Alzheimer’s disease than if you did not carry an ApoE-e4 allele. The exact percentage of risk may vary though from the percentages listed in your report. Also, non-genetic specific data demonstrates that older African Americans and Hispanics are more likely to develop Alzheimer’s disease than people of other ethnicities.\n" +
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
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Test details</h3>\n" +
    "              </div>\n" +
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
    "  \n" +
    "</div>");
}]);

angular.module("components/results/pages/result-sharing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-sharing.tpl.html",
    "<div class=\"result result--space-bottom\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap\">\n" +
    "        <div class=\"txt txt-bold txt-gray anim-content-transition\">Family</div>\n" +
    "      </div>\n" +
    "      <!--<div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ download_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div  class=\"download-button\"></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Download report</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>-->\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__title anim-content-transition txt-left-sm\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h2 class=\"txt-blue-dark anim-content-transition\">Sharing with family</h2>\n" +
    "        </div>\n" +
    "        <div class=\"title__wrap anim-content-transition\">\n" +
    "          <p class=\"txt txt-black\">\n" +
    "            You may want to share your results or your experience with family or friends\n" +
    "            so they understand the reason you are implementing new lifestyle behaviors.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"txt__wrap anim-content-transition\">\n" +
    "          <p class=\"txt-middle txt-blue-dark\">\n" +
    "            Having support can be very helpful when making behavior changes. Your relatives or friends may benefit\n" +
    "            from hearing about your experience, and may wish to consider ApoE testing themselves.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <!--section-second-->\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"title__wrap anim-content-transition\">\n" +
    "        <h2 class=\"txt-blue-dark\">Key points to consider before talking to friends or family about your results\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap anim-content-transition\">\n" +
    "        <h3 class=\"txt-blue-dark\">Do you and they have the support in place if there are questions?\n" +
    "        </h3>\n" +
    "      </div>\n" +
    "      <div class=\"txt__wrap anim-content-transition\">\n" +
    "        <p class=\"txt-middle txt-black\">\n" +
    "          Sharing the following information with someone you wish to share your results with may help answer any questions or concerns they have about your Alzheimer’s ApoE Genetic Test results.\n" +
    "        </p>\n" +
    "        <div class=\"txt--indent\">\n" +
    "          <p class=\"txt-middle txt-black\">\n" +
    "            Your genetics, lifestyle, environment, other medical conditions, and age all play a role in your Alzheimer’s disease risk. Your lifestyle and environmental risk factors may be reduced by implementing brain healthy behavior changes, which may also reduce the risk if you have any other medical factors influencing your Alzheimer’s risk. Many brain healthy behaviors are also good for your heart health, blood glucose control, and inflammation.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"txt--indent\">\n" +
    "          <p class=\"txt-middle txt-black\">\n" +
    "            Having a copy of the ApoE e4 variant does not guarantee that you will develop late-onset Alzheimer’s disease, and not carrying a copy does not guarantee that you won’t develop late-onset Alzheimer’s disease. The results of this test do not diagnose late-onset Alzheimer’s disease or any other medical condition.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"img__wrap txt-center\">\n" +
    "        <ng-include class=\"img img-large\" src=\"'./assets/images/svg/sharing-family.svg'\"></ng-include>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap anim-content-transition\">\n" +
    "        <h3 class=\"txt-blue-dark\">Is it possible for your relatives to have a different ApoE variant than you?\n" +
    "        </h3>\n" +
    "      </div>\n" +
    "      <div class=\"txt__wrap\">\n" +
    "        <p class=\"txt-middle txt-black\">\n" +
    "          Whether you are male or female, you are equally likely to pass on a copy of ApoE-e4 or inherit one. If you carry a single copy of ApoE-e4, there is a 50% chance your siblings and children carry one also. You can make lifestyle changes today that may reduce your risk for late-onset Alzheimer’s disease or slow the progression of memory decline.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  <!--end section-second-->\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"container-txt-share-results\">\n" +
    "        <h2 class=\"txt-blue-dark txt-center\">You are not in this alone. ADx Healthcare provides\n" +
    "          genetics counselors to go over your report and\n" +
    "          answer any questions you have.\n" +
    "        </h2>\n" +
    "        <div ng-if=\"download_link !== null\" class=\"button__wrap button--center\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ download_link }}\" class=\"bt-round bt-round--blue\">Download Report</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>");
}]);

angular.module("components/results/pages/result-view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-view.tpl.html",
    "<div class=\"result result--space-bottom\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap\">\n" +
    "        <div class=\"txt txt-bold txt-gray anim-content-transition\">Overview</div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a target=\"_blank\" ng-href=\"{{ download_link }}\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div  class=\"download-button\"></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Download report</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"result-head__title anim-content-transition txt-left-sm\">\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <h2 class=\"txt-blue-dark anim-content-transition\">Welcome back</h2>\n" +
    "        </div>\n" +
    "        <div class=\"title__wrap anim-content-transition\">\n" +
    "          <p class=\"txt txt-black\">\n" +
    "            You can view your results at anytime, or choose one of the options below.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap button--center anim-content-transition\">\n" +
    "          <a ui-sref=\"master_signedin.results({'page':'p1'})\" class=\"bt-round bt-round--blue-dark\">View results</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "  <!--section first-->\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h2 class=\"txt-blue-dark\">More products for your health</h2>\n" +
    "      </div>\n" +
    "      <div class=\"container-flex container-flex--column-sm\">\n" +
    "        <div class=\"flex-column anim-content-transition\">\n" +
    "          <div class=\"flex-column__wrap\">\n" +
    "            <div class=\"img__wrap txt-center\">\n" +
    "              <ng-include class=\"img img-middle--md\" src=\"'./assets/images/svg/doctor.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"title__wrap\">\n" +
    "              <h3 class=\"txt-blue-dark txt-center\">Genetic counseling</h3>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap txt-wrap-under-button\">\n" +
    "              <div class=\"txt txt-black txt-center\">\n" +
    "                ADx is here to answer any questions you have about the test and your results. Click below scheduling a genetic counseling session now.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <a target=\"_blank\" ng-href=\"{{ schedule_link }}\" class=\"bt-round bt-round--blue-dark\">Schedule session</a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"flex-column anim-content-transition\">\n" +
    "          <div class=\"flex-column__wrap\">\n" +
    "            <div class=\"img__wrap txt-center\">\n" +
    "              <ng-include class=\"img img-middle--md\" src=\"'./assets/images/svg/human-plus.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"title__wrap\">\n" +
    "              <h3 class=\"txt-blue-dark txt-center\">Refer a friend</h3>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap txt-wrap-under-button\">\n" +
    "              <div class=\"txt txt-black txt-center\">\n" +
    "                Worried about someone else in your family or know someone else who could benefits from taking the ADx ApoE genetic test?\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <a href=\"mailto:?subject=ADx Healthcare Alzheimer's test\" class=\"bt-round bt-round--blue\">Refer a friend</a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"flex-column anim-content-transition\">\n" +
    "          <div class=\"flex-column__wrap\">\n" +
    "            <div class=\"img__wrap txt-center\">\n" +
    "              <ng-include class=\"img img-middle--md\" src=\"'./assets/images/svg/email-icon.svg'\"></ng-include>\n" +
    "            </div>\n" +
    "            <div class=\"title__wrap\">\n" +
    "              <h3 class=\"txt-blue-dark txt-center\">Contact us</h3>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap txt-wrap-under-button\">\n" +
    "              <div class=\"txt txt-black txt-center\">\n" +
    "                ADx is dedicated to helping you with any questions you may have.\n" +
    "                Contact us with your questions or send us comments!\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <button contacts-scroll class=\"bt-round bt-round--orange\">Contact Us</button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  <!--end section first-->\n" +
    "</div>");
}]);

angular.module("components/results/pages/sequencingStatus.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/sequencingStatus.tpl.html",
    "<div class=\"sequencing-status-page\">\n" +
    "  <div class=\"products-head__wrap\">\n" +
    "    <div class=\"section__wrap\">\n" +
    "      <div class=\"container-lg--dashboard\">\n" +
    "        <div class=\"title__wrap anim-content-transition\">\n" +
    "          <h1 class=\"txt-blue-dark txt-center\">Current status of your genetic sample</h1>\n" +
    "        </div>\n" +
    "        <!--progress-bar-->\n" +
    "        <div class=\"status-progressbar__wrap anim-content-transition\">\n" +
    "          <ul class=\"status-progressbar-container\">\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[0], 'active--current': iconCurrent[0]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-car\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Physician\n" +
    "                  Review</p>\n" +
    "                <p class=\"txt-small txt-center txt-black\">A physician has determinted that this test is appropriate for you</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[1], 'active--current': iconCurrent[1]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-pc-pointer\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Kit\n" +
    "                  Registered</p>\n" +
    "                <p class=\"txt-small txt-center txt-black\">You have successfully registered your sample collection kit.</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[2], 'active--current': iconCurrent[2]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-forklift\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Sample\n" +
    "                  Uploaded</p>\n" +
    "                <p class=\"txt-small txt-center txt-black\">Your sample has been received by the lab</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[3], 'active--current': iconCurrent[3]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-test-tubes\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">DNA Extraction\n" +
    "                  Complete</p>\n" +
    "                <p class=\"txt-small txt-center txt-black\">Your sample is currently being processed by the lab</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[4], 'active--current': iconCurrent[4]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-pc-dna\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Data Delivery\n" +
    "                  Complete</p>\n" +
    "                <p class=\"txt-small txt-center txt-black\">Helix genomics has provided your sample data for reviewing and interpretation.</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[5], 'active--current': iconCurrent[5]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-pc-dna\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold txt-center progressbar-txt-color\">Results ready\n" +
    "                  for view</p>\n" +
    "                <p class=\"txt-small txt-center txt-black\">Follow the instructions below to view your results</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <!--end  progress-bar-->\n" +
    "        <div class=\"title__wrap txt-center anim-content-transition\">\n" +
    "          <div class=\"container-xs-button-flex container-xs-button-flex--center\">\n" +
    "            <div class=\"test-ok active\"></div>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'ldt_submitted'\">\n" +
    "              We will mail out your collection kit once the review process is completed\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'ldt_approved'\">\n" +
    "              A sample collection kit will be mailed out to you\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'kit_registered'\">\n" +
    "              Make sure to mail back the collection kit to start the sequencing process\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'manifest_uploaded'\">\n" +
    "              We are currently unpacking to start the sequencing process\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'dna_extraction_completed'\">\n" +
    "              We are currently extracting DNA from your sample\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'dna_delivery_completed' || seqStatus === 'ldt_results_sent'\">\n" +
    "              We are currently interpreting the results to generate your report\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'result_ready'\">\n" +
    "              Your results are ready\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'ldt_rejected'\">\n" +
    "              The physician has determined that the Alzheimer’s ApoE genetic test is not a good fit for you\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'account_closed'\">\n" +
    "              Your account has been closed\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'account_revoked'\">\n" +
    "              Your account has been revoked\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'order_cancelled'\">\n" +
    "              Your order was cancelled\n" +
    "            </h4>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"container-xs-button-flex\">\n" +
    "            <a ng-show=\"seqStatus === 'result_ready'\"\n" +
    "               ui-sref=\"master_signedin.results({'page':'p1'})\" class=\"bt-round bt-round--sm bt-round--header bt-round--blue-dark\">View Results</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div ng-include=\"'components/results/pages/partials/info-products.tpl.html'\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("components/results/results.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/results.tpl.html",
    "<div ui-view class=\"page-transition-anim\"></div>\n" +
    "\n" +
    "<div ng-show=\"page == 'consent'\" ng-include=\"'components/results/pages/result-consent.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'pre-purchase'\" ng-include=\"'components/results/pages/prePurchase.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'sequencing-status'\" ng-include=\"'components/results/pages/sequencingStatus.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'inconclusive'\" ng-include=\"'components/results/pages/result-inconclusive.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'p1'\" ng-include=\"'components/results/pages/result-p1.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'p2'\" ng-include=\"'components/results/pages/result-p2.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'p3'\" ng-include=\"'components/results/pages/result-p3.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'p4'\" ng-include=\"'components/results/pages/result-p4.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'sharing'\" ng-include=\"'components/results/pages/result-sharing.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'science'\" ng-include=\"'components/results/pages/result-science.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'questions'\" ng-include=\"'components/results/pages/result-questions.tpl.html'\"></div>\n" +
    "<div ng-show=\"page == 'view'\" ng-include=\"'components/results/pages/result-view.tpl.html'\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("components/science/science.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/science/science.tpl.html",
    "<update-meta property=\"og:title\" content=\"ADx Healthcare - The Alzheimer’s ApoE test is a single gene test that looks at your ApoE-related genetic risk for Alzheimer’s disease.\"></update-meta>\n" +
    "<update-meta name=\"twitter:title\" content=\"ADx Healthcare - The Alzheimer’s ApoE test is a single gene test that looks at your ApoE-related genetic risk for Alzheimer’s disease.\"></update-meta>\n" +
    "\n" +
    "<div class=\"science-p\">\n" +
    "  <div class=\"science-p-head\">\n" +
    "    <div class=\"container-fluid container-fluid--section\">\n" +
    "      <div class=\"container-lg\">\n" +
    "        <div class=\"science-p__wrap\">\n" +
    "          <div class=\"science-p-head__title txt-center anim-content-transition\">\n" +
    "            <h3 class=\"txt-blue\">How it works - Introduction</h3>\n" +
    "          </div>\n" +
    "          <div class=\"science-p-head__body anim-content-transition\">\n" +
    "            <div class=\"science-p-head-body__row\">\n" +
    "              <div class=\"container-flex align-items--center container-flex--column-reverse-sm\">\n" +
    "                <div class=\"flex-column anim-content-transition\">\n" +
    "                  <div class=\"flex-column__wrap\">\n" +
    "                    <div class=\"science-p-head__img anim-content-transition img--center-sm\">\n" +
    "                      <ng-include class=\"img-middle\" src=\"'./assets/images/svg/human-brain-medical.svg'\"></ng-include>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-column-2 anim-content-transition\">\n" +
    "                  <div class=\"flex-column__wrap\">\n" +
    "                    <h3 class=\"txt-blue-dark\">What causes dementia?</h3>\n" +
    "                    <div class=\"txt__wrap\">\n" +
    "                      <p class=\"txt txt-black\">Dementia is the result of a malfunction of nerve cells in the brain, which in turn lose their connections with other neurons, ultimately resulting in a disconnect between parts of the brain that used to work together.  These malfunctions are the result of damage to or changes in the brain. Together your genetics, other medical conditions, and lifestyle and environmental factors influence your brain health and function, and are thus associated with your risk of developing dementia.</p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"science-p-head-body__row anim-content-transition\">\n" +
    "              <div class=\"container-flex align-items--center container-flex--column-sm\">\n" +
    "                <div class=\"flex-column-2 anim-content-transition\">\n" +
    "                  <div class=\"flex-column__wrap\">\n" +
    "                    <div class=\"txt--space-top-sm\">\n" +
    "                      <h3 class=\"txt-blue-dark anim-content-transition\">What is Alzheimer’s disease?</h3>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt__wrap anim-content-transition\">\n" +
    "                      <p class=\"txt txt-black\">\n" +
    "                        When people discuss Alzheimer’s disease, they usually divide it into two classifications: early-onset Alzheimer’s disease and late-onset Alzheimer’s disease, with a subtype of early-onset called early-onset Familial Alzheimer’s disease (eFAD).\n" +
    "                      </p>\n" +
    "                      <p class=\"txt txt-black txt--indent-small\">\n" +
    "                        Neurologists believe that early-onset Alzheimer’s disease and late-onset Alzheimer’s disease function similarly, but are differentiated by age of onset. Early-onset Alzheimer’s disease is when symptoms occur before age 65 and late-onset Alzheimer’s disease is when symptoms begin at age 65 and older.\n" +
    "                      </p>\n" +
    "                      <p class=\"txt txt-black txt--indent-small\">\n" +
    "                        Early-onset Alzheimer’s disease is uncommon and only accounts for about 5-10% of all Alzheimer’s disease cases. eFAD is a rare subgroup of early-onset Alzheimer’s disease. eFAD is known to be linked to genetics and accounts for only about 1% of all cases of Alzheimer’s disease. The three known genes that cause eFAD are: amyloid precursor protein (APP), presenilin-1 (PS1), and presenilin-2 (PS2).\n" +
    "                      </p>\n" +
    "                      <p class=\"txt txt-black txt--indent-small\">\n" +
    "                        Late-onset Alzheimer’s disease is the most common form of Alzheimer’s  disease, with symptoms appearing on or after age 65.  Genetics is a risk factor for late-onset Alzheimer’s disease, but not everyone who carries the ApoE-e4 gene will develop late-onset Alzheimer’s disease and some of the people with late-onset Alzheimer’s disease do not have a copy of ApoE-e4.\n" +
    "                      </p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-column anim-content-transition\">\n" +
    "                  <div class=\"flex-column__wrap\">\n" +
    "                    <div class=\"science-p-head__img txt-right img--center-sm\">\n" +
    "                      <ng-include class=\"img-middle\" src=\"'./assets/images/svg/molecule.svg'\"></ng-include>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div class=\"science-p-section-second\">\n" +
    "      <div class=\"section-box-shadow\">\n" +
    "        <div class=\"container-lg\">\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h3 class=\"txt-blue txt-center\">Symptoms and diagnoses</h3>\n" +
    "          </div>\n" +
    "          <div class=\"txt__wrap txt-center\">\n" +
    "            <p class=\"txt-large txt-black\">\n" +
    "              Dementia is a decline in mental function severe enough to interfere with daily living.\n" +
    "              Scientists believe that for most people the development of late-onset Alzheimer’s disease is caused by a combination of age, genetic, medical, lifestyle, and environmental factors.\n" +
    "              <br>Some of the symptoms may include:\n" +
    "              <!--Late-onset Alzheimer’s disease is a progressive form of dementia that is characterized by tau and plaques in the brain that result in brain cell death over time. Scientists believe that for most people the development of late-onset Alzheimer’s disease is caused by a combina-->\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <div class=\"science-p__wrap\">\n" +
    "            <div class=\"container-flex container-flex--column-md\">\n" +
    "              <div class=\"flex-column align-vertical--center\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"science-p-section-second__img img--center-md\">\n" +
    "                    <ng-include class=\"img-middle\" src=\"'./assets/images/svg/Apoe.svg'\" alt=\"\"></ng-include>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column-2\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <ul class=\"science-p-list\">\n" +
    "                    <li class=\"science-p-list__items\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Memory loss</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Behavioral changes such as agitation, delusions, and hallucinations</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Loss of interest in previously enjoyed activities</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Difficulty with problem solving</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Difficulty performing tasks that were previously easy</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Personality changes</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Loss of social skills and tendency to withdraw or isolate self</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Language problems including forgetting names of familiar objects</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"science-p__wrap-bottom\">\n" +
    "            <div class=\"title__wrap txt-center\">\n" +
    "              <p class=\"txt-large txt-black txt-bold\">SOURCE: <a target=\"_blank\" href=\"https://www.medhelp.org/senior-care/articles/Dementia-vs-Alzheimers-Whats-theDifference/161\">https://www.medhelp.org/senior-care/articles/Dementia-vs-Alzheimers-Whats-theDifference/161</a></p>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap txt-center\">\n" +
    "              <p class=\"txt-large txt-black\">Unfortunately, there is not a single universally accepted standard of care for diagnosing or treating Alzheimer’s disease in the US. This leaves many people seeking answers alone.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"science-p-section-third\">\n" +
    "      <div class=\"section-box-silver\">\n" +
    "        <div class=\"container-lg\">\n" +
    "          <div class=\"science-p-section-third__wrap\">\n" +
    "            <div class=\"container-flex container-flex--column-sm\">\n" +
    "              <div class=\"flex-column-2\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"science-p-section-third__title\">\n" +
    "                    <h3 class=\"txt-blue\">Why learn if you are at risk for\n" +
    "                      Alzheimer’s disease?</h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\">\n" +
    "                      Research indicates that lifestyle behaviors across your life span may contribute to the development of late-onset Alzheimer’s disease. Also, changes occur in the brain up to two decades before the first symptoms develop. Because late-onset Alzheimer's disease is believed to be caused by a combination of environmental, genetic, medical, and lifestyle factors, learning your genetic risk can help you determine how aggressively you need to make lifestyle changes to reduce your risk. The earlier in your life that you commit to living a cognitively healthy lifestyle, the more you can reduce your risk for or delay the development of late-onset Alzheimer's disease.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column align-vertical--center\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"science-p-head__img txt-right img--center-sm\">\n" +
    "                    <ng-include class=\"img-middle\" src=\"'./assets/images/svg/medical-table-with-pen.svg'\"></ng-include>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"science-p-section-fourth\">\n" +
    "      <div class=\"section-box-shadow\">\n" +
    "        <div class=\"container-lg\">\n" +
    "          <div class=\"science-p-section-fourth__wrap\">\n" +
    "            <div class=\"title__wrap txt-center\">\n" +
    "              <h3 class=\"txt-blue\">Why haven’t I heard that I can reduce my risk for Alzheimer’s disease?</h3>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap\">\n" +
    "              <ul class=\"science-p-list\">\n" +
    "                <li class=\"science-p-list__items\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-md\">\n" +
    "                    <p class=\"txt txt-medium txt-black\">It takes awhile for emerging research to be communicated and integrated into medical practice.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-blue-md\">\n" +
    "                    <p class=\"txt txt-medium txt-black\">\n" +
    "                      There is not a single universally accepted standard of care for diagnosing or treating Alzheimer’s disease in the US.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"science-p-section-fifth\">\n" +
    "      <div class=\"section-box-silver\">\n" +
    "        <div class=\"section-box-head section-box-head--blue\">\n" +
    "          <div class=\"section-box-head__wrap\">\n" +
    "            <div class=\"container-flex align-items--center\">\n" +
    "              <div class=\"flex-column-2\">\n" +
    "                <div class=\"txt-left\">\n" +
    "                  <h3>How it works?</h3>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column hide-mobile\">\n" +
    "                <div class=\"txt-right\">\n" +
    "                  <h4 class=\"txt-blue-dark\">Part {{slideIndex}}</h4>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"container-lg hide-mobile\">\n" +
    "          <div uib-carousel class=\"carousel--arrow-silver\" active=\"active\"  no-wrap=\"false\">\n" +
    "            <div uib-slide index=\"0\">\n" +
    "              <div class=\"slider__wrap slider__wrap--science\">\n" +
    "                <div class=\"container-flex align-items--center container-flex--column-sm\">\n" +
    "                  <div class=\"flex-column txt-left\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"img__wrap img--center-sm\">\n" +
    "                        <ng-include class=\"img img-middle\" src=\"'./assets/images/svg/key-blue-dark.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"flex-column-2\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"container-exs\">\n" +
    "                        <div class=\"txt-left txt-center-md txt--space-top-sm\">\n" +
    "                          <h3 class=\"txt-blue-3\" >Security and Privacy: Your DNA is just for you</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black txt-left\">\n" +
    "                            ADx Healthcare is committed to maintaining your privacy, and we will not share your results with anyone but you. Your Alzheimer’s ApoE Genetic Test result will be delivered to you via a secure, electronic report.  You will also receive a printable copy of your results that you can share with anybody you choose, such as your healthcare provider or family and friends.  Our genetic counselors are available to go through your results with you too, if you choose.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"\">\n" +
    "                  <div class=\"container-flex align-items--center container-flex--column-reverse-sm\">\n" +
    "                    <div class=\"flex-column-2\">\n" +
    "                      <div class=\"flex-column__wrap\">\n" +
    "                        <div class=\"container-exs\">\n" +
    "                          <div class=\"txt-right txt-center-md title-space-top-md\">\n" +
    "                            <h3 class=\"txt-blue-3\">Your privacy is our priority</h3>\n" +
    "                          </div>\n" +
    "                          <div class=\"txt__wrap txt-right txt-left-sm\">\n" +
    "                            <p class=\"txt txt-black\">\n" +
    "                              We will never share your name or data and you will never be included in any Alzheimer’s research without your prior written consent. Your health information is fully encrypted and secure. Regular security scans are performed to make sure your data remains safe.\n" +
    "                            </p>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"flex-column txt-right\">\n" +
    "                      <div class=\"flex-column__wrap\">\n" +
    "                        <div class=\"img__wrap img--center-sm\">\n" +
    "                          <ng-include class=\"img-middle\" src=\"'./assets/images/svg/protection-blue-dark.svg'\"></ng-include>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div uib-slide index=\"1\">\n" +
    "              <div class=\"slider__wrap slider__wrap--science\">\n" +
    "                <div class=\"container-flex container-flex--column-sm\">\n" +
    "                  <div class=\"flex-column\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"img__wrap txt-center\">\n" +
    "                        <ng-include class=\"img-middle--md\" src=\"'./assets/images/svg/test-tube.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                      <div class=\"title__wrap\">\n" +
    "                        <h3 class=\"txt-blue-dark\">Easy to use</h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-center\">\n" +
    "                        <p class=\"txt txt-black\">\n" +
    "                          As simple as click, spit, and ship on your side.  The heavy lifting is our responsibility.  From physician review, to sample analysis, to data reporting, and genetic counselor interpretation, we\n" +
    "                          have you supported each step of the way.\n" +
    "                          I like this graphic from the Helix site to demonstrate the process. Can we use something like this to help demonstrate our process?\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"flex-column anim-content-transition\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"flex-column__wrap\">\n" +
    "                        <div class=\"img__wrap txt-center\">\n" +
    "                          <ng-include class=\"img-middle--md\" src=\"'./assets/images/svg/first-aid-kit.svg'\"></ng-include>\n" +
    "                        </div>\n" +
    "                        <div class=\"title__wrap\">\n" +
    "                          <h3 class=\"txt-blue-dark\">Data-Driven</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap txt-center\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Doctor ordered: At ADx Healthcare, we believe you should be in control of what health information you want to learn and whom you share it with. We also believe it is best to have a physician still be a part of the path, to ensure you understand what the results will and will not tell you, so they can help you decide if the test is a good fit for you. We offer comprehensive, physician-supervised genetic testing from the privacy of your own home.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"section__wrap-sm\">\n" +
    "                  <div class=\"container-flex container-flex--column-sm\">\n" +
    "                    <div class=\"flex-column\">\n" +
    "                      <div class=\"flex-column__wrap\">\n" +
    "                        <div class=\"img__wrap txt-center\">\n" +
    "                          <ng-include class=\"img-middle--md\" src=\"'./assets/images/svg/email-checked.svg'\"></ng-include>\n" +
    "                        </div>\n" +
    "                        <div class=\"title__wrap\">\n" +
    "                          <h3 class=\"txt-blue-dark\">Access Online </h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap txt-center\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Once your results are ready, you will receive an e-mail from ADx Healthcare.  When you are ready, simply log-in to your account to access your private results.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"flex-column\">\n" +
    "                      <div class=\"flex-column__wrap\">\n" +
    "                        <div class=\"img__wrap txt-center\">\n" +
    "                          <ng-include class=\"img-middle--md\" src=\"'./assets/images/svg/molecule-2-green.svg'\"></ng-include>\n" +
    "                        </div>\n" +
    "                        <div class=\"title__wrap\">\n" +
    "                          <h3 class=\"txt-blue-dark\">Sharable insights</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap txt-center\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Share your results with your physician, and your family members. In your secure results section, you can also access a PDF version of your Alzheimer’s disease ApoE genetic test results.  You can download and print this document to share with your healthcare provider.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div uib-slide index=\"2\">\n" +
    "              <div class=\"slider__wrap slider__wrap--science\">\n" +
    "                <div class=\"container-flex container-flex--column-sm\">\n" +
    "                  <div class=\"flex-column\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"img__wrap\">\n" +
    "                        <ng-include class=\"img-middle\" src=\"'./assets/images/svg/molecules-3.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"flex-column-2\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"title__wrap txt-left\">\n" +
    "                        <h3 class=\"txt-blue\">\n" +
    "                          The latest science (results you can trust)\n" +
    "                        </h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-left\">\n" +
    "                        <p class=\"txt txt-black\">\n" +
    "                          Once Helix laboratories have analyzed your saliva sample and sequenced your DNA, they identify your SNP’s specific to the ApoE test (rs429358 and rs7412). This information is then transferred to ADx Healthcare and interpreted to develop your personalized Alzheimer’s ApoE Genetic Test report.\n" +
    "                        </p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"container-flex container-flex--column-sm\">\n" +
    "                  <div class=\"flex-column align-vertical--center\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"img__wrap\">\n" +
    "                        <ng-include class=\"img-middle dna-molecule--bgc-silver\" src=\"'./assets/images/svg/dna-molecule.svg'\"></ng-include>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"flex-column-2\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"title__wrap txt-left\">\n" +
    "                        <h3 class=\"txt-blue\">\n" +
    "                          More about the test\n" +
    "                        </h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-left txt-center-sm\">\n" +
    "                        <p class=\"txt txt-black\">The Alzheimer’s ApoE test is a single gene test that looks at your genetic risk for Alzheimer’s disease. Genome-Wide Association Studies (GWAS) indicate that the e4 allele of ApoE is the strongest single genetic risk factor for Alzheimer’s disease.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>1,2</sup></a>  Apolipoprotein E (ApoE) is a protein that is involved in the metabolism of fats in your body and injury repair in your brain.3 ApoE is associated with both cardiovascular disease and Alzheimer’s disease risk.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>4</sup></a>  Researchers have identified that ApoE plays a role in Aβ (amyloid-beta) aggregation and clearance in the brain, synaptic plasticity, neuroinflammation, glucose metabolism, neuronal signaling, and mitochondrial function.4 ApoE also mediates cholesterol metabolism, with the ApoE-e4 allele associated with both hyperlipidaemia and hypercholesterolaemia, which can lead to atherosclerosis, coronary heart disease and stroke.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>5,6</sup></a>\n" +
    "                        </p>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Alzheimer's disease is influenced by genetics, environment, lifestyle, and other medical factors.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>7-16</sup></a>  Thus, having the high risk copy of this gene (ApoE-e4) does not guarantee that you will develop Alzheimer's disease and not possessing a copy of the highest risk allele (APOE e4) does not mean you won't ever develop Alzheimer's disease. You cannot change your genetics and your risk for Alzheimer’s disease increases as you age, but there is hope in the fight against Alzheimer’s.  Learning your genetic risk for Alzheimer’s disease before symptoms of memory loss begin helps inform you how aggressively you want to address your modifiable lifestyle factors to optimize your cognitive health.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"container-lg hide-desktop\">\n" +
    "          <div class=\"slider__wrap\">\n" +
    "            <div class=\"container-flex align-items--center container-flex--column-sm\">\n" +
    "              <div class=\"flex-column txt-left\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"img__wrap img--center-sm\">\n" +
    "                    <ng-include class=\"img img-middle\" src=\"'./assets/images/svg/key-blue-dark.svg'\"></ng-include>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column-2\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"container-exs\">\n" +
    "                    <div class=\"txt-left txt-center-md txt--space-top-sm\">\n" +
    "                      <h3 class=\"txt-blue-3\" >Security and privacy\n" +
    "                        Your DNA is just for you</h3>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt__wrap txt-center-sm\">\n" +
    "                      <p class=\"txt txt-black txt-left\">\n" +
    "                        Your Alzheimer’s genetic information will be delivered to you via a secure, electronic report.  These results will also be available for download. It is up to you whom you share your results with, including your healthcare provider or family.  Our genetics counselors are available to go through your results with you too, if you choose. You are in control of how you receive your genetic results and whom you share them with.\n" +
    "                      </p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"\">\n" +
    "              <div class=\"container-flex align-items--center container-flex--column-reverse-sm\">\n" +
    "                <div class=\"flex-column-2\">\n" +
    "                  <div class=\"flex-column__wrap\">\n" +
    "                    <div class=\"container-exs\">\n" +
    "                      <div class=\"txt-right txt-center-md title-space-top-md\">\n" +
    "                        <h3 class=\"txt-blue-3\">Your privacy is our priority</h3>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-right txt-left-sm txt-center-sm\">\n" +
    "                        <p class=\"txt txt-black\">\n" +
    "                          We will never share your name or data and you will never be included in any Alzheimer’s research without your\n" +
    "                          prior written consen\n" +
    "                        </p>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            From when you input your order to when your results are delivered, your health information is fully encrypted and secure. Regular security scans are performed to make\n" +
    "                            sure your data remains safe.\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-column txt-right\">\n" +
    "                  <div class=\"flex-column__wrap\">\n" +
    "                    <div class=\"img__wrap img--center-sm\">\n" +
    "                      <ng-include class=\"img-middle\" src=\"'./assets/images/svg/protection-blue-dark.svg'\"></ng-include>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            \n" +
    "            <!--slide second-->\n" +
    "            <div class=\"container-flex container-flex--column-sm\">\n" +
    "              <div class=\"flex-column\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"img__wrap txt-center\">\n" +
    "                    <ng-include class=\"img-middle--md img-middle--large-sm\" src=\"'./assets/images/svg/test-tube.svg'\"></ng-include>\n" +
    "                  </div>\n" +
    "                  <div class=\"title__wrap txt-center-sm\">\n" +
    "                    <h3 class=\"txt-blue-dark\">Easy to use</h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap txt-center\">\n" +
    "                    <p class=\"txt txt-black\">\n" +
    "                      As simple as click, spit, and ship on your side.  The heavy lifting is our responsibility.  From physician review, to sample analysis, to data reporting, and genetic counselor interpretation, we\n" +
    "                      have you supported each step of the way.\n" +
    "                      I like this graphic from the Helix site to demonstrate the process. Can we use something like this to help demonstrate our process?\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column anim-content-transition\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"flex-column__wrap\">\n" +
    "                    <div class=\"img__wrap txt-center\">\n" +
    "                      <ng-include class=\"img-middle--md img-middle--large-sm\" src=\"'./assets/images/svg/first-aid-kit.svg'\"></ng-include>\n" +
    "                    </div>\n" +
    "                    <div class=\"title__wrap txt-center-sm\">\n" +
    "                      <h3 class=\"txt-blue-dark\">Data-Driven</h3>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt__wrap txt-center\">\n" +
    "                      <p class=\"txt txt-black\">\n" +
    "                        Doctor ordered: At ADx Healthcare, we believe you should be in control of what health information you want to learn and whom you share it with. We also believe it is best to have a physician still be a part of the path, to ensure you understand what the results will and will not tell you, so they can help you decide if the test is a good fit for you. We offer comprehensive, physician-supervised genetic testing from the privacy of your own home.\n" +
    "                      </p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"section__wrap-sm\">\n" +
    "              <div class=\"container-flex container-flex--column-sm\">\n" +
    "                <div class=\"flex-column\">\n" +
    "                  <div class=\"flex-column__wrap\">\n" +
    "                    <div class=\"img__wrap txt-center\">\n" +
    "                      <ng-include class=\"img-middle--md img-middle--large-sm\" src=\"'./assets/images/svg/email-checked.svg'\"></ng-include>\n" +
    "                    </div>\n" +
    "                    <div class=\"title__wrap txt-center-sm\">\n" +
    "                      <h3 class=\"txt-blue-dark\">Access Online </h3>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt__wrap txt-center\">\n" +
    "                      <p class=\"txt txt-black\">\n" +
    "                        Once your results are ready, you will receive an e-mail from ADx Healthcare.  When you are ready, simply log-in to your account to access your private results.\n" +
    "                      </p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-column\">\n" +
    "                  <div class=\"flex-column__wrap\">\n" +
    "                    <div class=\"img__wrap txt-center\">\n" +
    "                      <ng-include class=\"img-middle--md img-middle--large-sm\" src=\"'./assets/images/svg/molecule-2-green.svg'\"></ng-include>\n" +
    "                    </div>\n" +
    "                    <div class=\"title__wrap txt-center-sm\">\n" +
    "                      <h3 class=\"txt-blue-dark\">Sharable insights</h3>\n" +
    "                    </div>\n" +
    "                    <div class=\"txt__wrap txt-center\">\n" +
    "                      <p class=\"txt txt-black\">\n" +
    "                        Share your results with your physician, and your family members. In your secure results section, you can also access a PDF version of your Alzheimer’s disease ApoE genetic test results.  You can download and print this document to share with your healthcare provider.\n" +
    "                      </p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            \n" +
    "            <!--slide third-->\n" +
    "            <div class=\"container-flex container-flex--column-sm\">\n" +
    "              <div class=\"flex-column\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"img__wrap img--center-sm\">\n" +
    "                    <ng-include class=\"img-middle\" src=\"'./assets/images/svg/molecules-3.svg'\"></ng-include>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column-2\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"title__wrap txt-left txt-center-sm\">\n" +
    "                    <h3 class=\"txt-blue\">\n" +
    "                      The latest science (results you can trust)\n" +
    "                    </h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap txt-left txt-center-sm\">\n" +
    "                    <p class=\"txt txt-black\">\n" +
    "                      Once Helix laboratories have analyzed your saliva sample and sequenced your DNA, they identify your SNP’s specific to the ApoE test (rs429358 and rs7412). This information is then transferred to ADx Healthcare and interpreted to develop your personalized Alzheimer’s ApoE Genetic Test report.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"container-flex container-flex--column-sm\">\n" +
    "              <div class=\"flex-column align-vertical--center\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"img__wrap img--center-sm\">\n" +
    "                    <ng-include class=\"img-middle dna-molecule--bgc-silver\" src=\"'./assets/images/svg/dna-molecule.svg'\"></ng-include>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column-2\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"title__wrap txt-left txt-center-sm\">\n" +
    "                    <h3 class=\"txt-blue\">\n" +
    "                      More about the test\n" +
    "                    </h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap txt-left txt-center-sm\">\n" +
    "                    <p class=\"txt txt-black\">The Alzheimer’s ApoE test is a single gene test that looks at your genetic risk for Alzheimer’s disease. Genome-Wide Association Studies (GWAS) indicate that the e4 allele of ApoE is the strongest single genetic risk factor for Alzheimer’s disease.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>1,2</sup></a>  Apolipoprotein E (ApoE) is a protein that is involved in the metabolism of fats in your body and injury repair in your brain.3 ApoE is associated with both cardiovascular disease and Alzheimer’s disease risk.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>4</sup></a>  Researchers have identified that ApoE plays a role in Aβ (amyloid-beta) aggregation and clearance in the brain, synaptic plasticity, neuroinflammation, glucose metabolism, neuronal signaling, and mitochondrial function.4 ApoE also mediates cholesterol metabolism, with the ApoE-e4 allele associated with both hyperlipidaemia and hypercholesterolaemia, which can lead to atherosclerosis, coronary heart disease and stroke.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>5,6</sup></a>\n" +
    "                    </p>\n" +
    "                    <div class=\"txt--indent-small\">\n" +
    "                      <p class=\"txt txt-black\">\n" +
    "                        Alzheimer's disease is influenced by genetics, environment, lifestyle, and other medical factors.<a class=\"references-number-highlight\" ng-click=\"refScroll($event, 'RS1')\"><sup>7-16</sup></a>  Thus, having the high risk copy of this gene (ApoE-e4) does not guarantee that you will develop Alzheimer's disease and not possessing a copy of the highest risk allele (APOE e4) does not mean you won't ever develop Alzheimer's disease. You cannot change your genetics and your risk for Alzheimer’s disease increases as you age, but there is hope in the fight against Alzheimer’s.  Learning your genetic risk for Alzheimer’s disease before symptoms of memory loss begin helps inform you how aggressively you want to address your modifiable lifestyle factors to optimize your cognitive health.\n" +
    "                      </p>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            \n" +
    "          </div>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    \n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
    "  \n" +
    "</div>");
}]);

angular.module("components/verify_email/verify_email.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/verify_email/verify_email.tpl.html",
    "<div class=\"verify-page login-bgc\">\n" +
    "    <div class=\"container-fluid container-fluid--section\">\n" +
    "        <div class=\"register-form__wrap\">\n" +
    "            <div class=\"register-form\">\n" +
    "                <div ng-if=\"complete === true\" class=\"register-complete\">\n" +
    "                    <h3 class=\"txt-medium txt-blue-dark txt-center\">Success!</h3>\n" +
    "                    <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\">You email address has been verified. Press Sign-in below to continue.</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"button__wrap button--center\">\n" +
    "                        <a href ui-sref=\"master.login\" class=\"bt-round bt-round--blue-dark\">\n" +
    "                            Sign-in\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-if=\"complete === false\" class=\"register-complete\">\n" +
    "                    <h3 class=\"txt-medium txt-blue-dark txt-center\">On No!</h3>\n" +
    "                    <div class=\"txt__wrap\">\n" +
    "                        <p class=\"txt txt-black\">There was a problem verifying your email address. The activation key is invalid.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("shared/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/footer/footer.tpl.html",
    "<footer class=\"footer\">\n" +
    "    <div class=\"container-fluid container-fluid--section\">\n" +
    "        <div class=\"container-lg container-exs\">\n" +
    "          <div class=\"container-flex container-flex--column-sm\">\n" +
    "            <div class=\"flex-column-2\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"txt-wrap-under-button\">\n" +
    "                  <div class=\"title__wrap txt-center-sm\">\n" +
    "                    <h4 class=\"txt-blue\">ABOUT ADx HEALTHCARE</h4>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap txt-center-sm\">\n" +
    "                    <div class=\"txt txt--exs-small txt-black\">\n" +
    "                      Visit ADxHealthcare.com to find out more about ADx Healthcare and our other offerings.\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"txt-wrap-under-button\">\n" +
    "                  <div class=\"title__wrap txt-center-sm\">\n" +
    "                    <a ui-sref=\"master.legal\" class=\"title-fourth txt-blue txt-uppercase\">LEGAL</a>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap txt-center-sm\">\n" +
    "                    <a ui-sref=\"master.legal\" class=\"txt txt--exs-small txt-bold txt-black\">Terms of Service</a>\n" +
    "                    <div class=\"link--indent\">\n" +
    "                      <a ui-sref=\"master.legal\" class=\"txt txt--exs-small txt-bold txt-black\">Privacy Policy</a>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      \n" +
    "      <!--title blue end-->\n" +
    "      <div class=\"footer-bottom\">\n" +
    "        <div class=\"footer-bottom__wrap\">\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h4  class=\"txt-blue-dark txt-center\">© 2018 ADx Healthcare. All rights reserved.</h4>\n" +
    "          </div>\n" +
    "          <div class=\"footer-bottom__link txt-center\">\n" +
    "            <button contacts-scroll class=\"btn-reset\"><span class=\"txt-large txt-bold txt-blue-dark\">Contact Us</span></button>\n" +
    "            <a ui-sref=\"master.about\" class=\"txt-large txt-bold txt-blue-dark\">About Us</a>\n" +
    "          </div>\n" +
    "          <div class=\"footer-bottom-link-icon__wrap\">\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"https://www.facebook.com/adxhealthcare/\" class=\"link-icon facebook\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"https://twitter.com/ADxHealthcare\" class=\"link-icon twitter\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"https://www.linkedin.com/company/adxhealthcare/\" class=\"link-icon linkedIn\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"https://www.instagram.com/adxhealthcare/\" class=\"link-icon instagram\"></a>\n" +
    "            </div>\n" +
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
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"header__wrap\">\n" +
    "        <!--logo-->\n" +
    "        <div class=\"header__logo\">\n" +
    "          <a ui-sref=\"master.home\" class=\"header-logo__link\">\n" +
    "            <div class=\"img-logo\" ng-include=\"'assets/images/adx-healthCare-logo.svg'\"></div>\n" +
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
    "                      <a ui-sref-active=\"active-mobile\" ui-sref=\"master.products.about\" ng-click=\"showMenu()\" class=\"header-nav-link\">Products</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ui-sref-active=\"active-mobile\" ui-sref=\"master.about\" ng-click=\"showMenu()\" class=\"header-nav-link\">About</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ui-sref-active=\"active-mobile\" ui-sref=\"master.science\" ng-click=\"showMenu()\" class=\"header-nav-link\">Science</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ui-sref-active=\"active-mobile\" ui-sref=\"master.FAQ\" ng-click=\"showMenu()\" class=\"header-nav-link\">FAQ</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ui-sref-active=\"active-mobile\" ui-sref=\"master.contact\" ng-click=\"showMenu()\" class=\"header-nav-link\">Contact</a>\n" +
    "                    </li>\n" +
    "                    <li ng-show=\"!logged\"  class=\"header-nav-item\">\n" +
    "                      <a ui-sref-active=\"active-mobile\" ui-sref=\"master.login\" ng-click=\"showMenu()\" class=\"header-nav-link\">Sign-in</a>\n" +
    "                    </li>\n" +
    "                    <li class=\"header-nav-item\">\n" +
    "                      <a ng-show=\"logged\" ui-sref=\"master_signedin.results\" ng-click=\"showMenu()\" class=\"header-nav-link\">My Results</a>\n" +
    "                      <a ng-show=\"!logged\" ui-sref=\"master.register\" ng-click=\"showMenu()\" class=\"header-nav-link\">Register</a>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "                </nav>\n" +
    "              </div>\n" +
    "              <!--end mobile menu-->\n" +
    "              \n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <!--desktop menu-->\n" +
    "          <nav class=\"header-nav__wrap hide-mobile\">\n" +
    "            <ul class=\"header-nav-wrap__inner\">\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref-active=\"active\" ui-sref=\"master.products.about\" class=\"header-nav-link txt-small txt-bold\">Products</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref-active=\"active\" ui-sref=\"master.about\" class=\"header-nav-link txt-small txt-bold\">About</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref-active=\"active\" ui-sref=\"master.science\" class=\"header-nav-link txt-small txt-bold\">Science</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref-active=\"active\" ui-sref=\"master.FAQ\" class=\"header-nav-link txt-small txt-bold\">FAQ</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ng-show=\"!logged\" ui-sref-active=\"active\" ui-sref=\"master.login\" class=\"header-nav-link txt-small txt-bold\">Sign-in</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </nav>\n" +
    "          <div class=\"header__button\">\n" +
    "            <div class=\"button__login\">\n" +
    "                  <a ng-class=\"{'ng-hide': !logged}\" ui-sref=\"master_signedin.results({'page':''})\" class=\"bt-round bt-round--sm bt-round--header bt-round--blue\">My Results</a>\n" +
    "                  <a ng-class=\"{'ng-hide': logged}\" ui-sref=\"master.register\" class=\"bt-round bt-round--header bt-round--blue hide-mobile\">Register</a>\n" +
    "            </div>\n" +
    "            <div class=\"button__purchase\">\n" +
    "              <a ng-class=\"{'ng-hide': !logged}\" ng-href=\"{{ globals.order_url_with_kit }}\" target=\"_blank\" class=\"bt-round bt-round--sm bt-round--header bt-round--blue-dark\">Order</a>\n" +
    "              <a ng-class=\"{'ng-hide': logged}\" ui-sref=\"master.logout\" class=\"bt-round bt-round--header bt-round--blue-dark hide-mobile\">Logout</a>\n" +
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

angular.module("templates/care_questions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/care_questions.tpl.html",
    "<div class=\"home-section-fourth section-box-shadow\">\n" +
    "  <div class=\"home-section-fourth__head\">\n" +
    "    <div class=\"home-section-fourth-head__title\">\n" +
    "      <h3 class=\"txt-blue txt-center\">Frequently asked questions</h3>\n" +
    "      <h1 class=\"txt-blue txt-center\">We care about you</h1>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <div class=\"txt txt-center\">\n" +
    "          Our customer support team is available\n" +
    "          by email or chat, and is happy to answer your\n" +
    "          questions about your test kit, results, and more.\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"home-section-fourth__content\">\n" +
    "    <div class=\"container-lg\">\n" +
    "      <div uib-accordion close-others=\"false\">\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">You’re not alone</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              From the independent physician review of your order to the genetic counselor available to answer your questions about your test results, ADx Healthcare is committed to providing you with support through the entire process of learning your ApoE genetic risk for Alzheimer’s disease.\n" +
    "              <div class=\"txt--indent\">\n" +
    "                For all the steps in between, our customer support team is available to discuss your questions about the science behind ApoE, ordering a test, completing your kit, or interpreting your results.\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent\">\n" +
    "                *ADx Healthcare contracts with PWNHealth for both the independent physician authorization and genetic counseling for our Alzheimer’s ApoE Genetic Test. Both services are included at no additional cost to you.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">Genetic counseling</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              You will receive your test results in a clear, electronic report. It is up to you if you receive these results with a genetic counselor or on your own. However, if you have additional questions about what these results mean to you or your family,  we offer genetic counseling with the independent provider network, PWNHealth, to you at no additional charge.We want to be sure you are getting the most from your Alzheimer’s ApoE Genetic Test and understand your results.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">Power of emotions</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              Genetics is only one part of your risk for developing Alzheimer’s disease. While learning that you have an increased risk of developing a disease can be unsettling, there is also power in obtaining that knowledge.  Sometimes we find ourselves questioning if we would have made a choice earlier in life if we had know the outcome long-term.  Knowing that you have an increased genetic risk for late-onset Alzheimer’s disease may empower you to take measured action to live a cognitively healthy life in order to best protect your future self.\n" +
    "              <div class=\"txt--indent\">\n" +
    "                Having the ApoE-e4 variant means that you have an increased genetic risk for late-onset Alzheimer's disease. This does not mean, however, that you will definitely develop Alzheimer's disease. Learning your genetic risk can help you take measured steps toward improving your cognitive health, so you can reduce your risk for or delay the onset of Alzheimer’s disease. Sometimes making lifestyle changes can be hard, but having a reason for why you are eating healthier, reducing your stress, and making fitness and sleep a priority can be motivating.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">Lifestyle changes</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              Stress management, nutrition, fitness, social engagement, ongoing brain training (music, games, reading, crafts, etc), and avoiding environmental toxins may improve your cognitive health. Living an overall healthier life may also help reduce your risk for or delay the onset of late-onset Alzheimer's disease.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h2 class=\"txt-blue-dark\">Connecting with community</h2>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt txt-black\">\n" +
    "              The more support you have for implementing brain healthy lifestyle behaviors, the more likely you are to be successful at turning them into lifelong habits.\n" +
    "            </div>\n" +
    "          <div class=\"footer-bottom-link-icon__wrap\">\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"https://www.facebook.com/adxhealthcare/\" class=\"link-icon facebook\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"https://twitter.com/ADxHealthcare\" class=\"link-icon twitter\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"https://www.linkedin.com/company/adxhealthcare/\" class=\"link-icon linkedIn\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"link-icon__wrap\">\n" +
    "              <a href=\"https://www.instagram.com/adxhealthcare/\" class=\"link-icon instagram\"></a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
