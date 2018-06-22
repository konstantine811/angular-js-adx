angular.module("templates-app", ["components/about/about.tpl.html", "components/change_password/change_password.tpl.html", "components/contact/contact.tpl.html", "components/dashboard/dashboard.tpl.html", "components/faq/faq.tpl.html", "components/forgot_password/forgot_password.tpl.html", "components/home/home.tpl.html", "components/legal/legal.tpl.html", "components/login/login.tpl.html", "components/master/master_signedin.tpl.html", "components/master/master.tpl.html", "components/products/pages/about-products.tpl.html", "components/products/products.tpl.html", "components/products/productsDetail.tpl.html", "components/profile/profileEdit.tpl.html", "components/profile/profileView.tpl.html", "components/register/register.tpl.html", "components/results/pages/prePurchase.tpl.html", "components/results/pages/result-p1.tpl.html", "components/results/pages/result-p2.tpl.html", "components/results/pages/result-p3.tpl.html", "components/results/pages/result-p4.tpl.html", "components/results/pages/result-questions.tpl.html", "components/results/pages/result-science.tpl.html", "components/results/pages/result-sharing.tpl.html", "components/results/pages/result-view.tpl.html", "components/results/pages/sequencingStatus.tpl.html", "components/results/results.tpl.html", "components/science/science.tpl.html", "components/verify_email/verify_email.tpl.html", "shared/footer/footer.tpl.html", "shared/header/header.tpl.html", "shared/side-navbar/side-navbar.tpl.html"]);

angular.module("components/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/about/about.tpl.html",
    "<section class=\"about-page-header\">\n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div uib-carousel active=\"active\"  no-wrap=\"false\">\n" +
    "      <div uib-slide index=\"0\">\n" +
    "        <div class=\"slider__wrap align-items--center container-flex\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"anim-content-transition txt-left\">\n" +
    "              <h1>Our mission</h1>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap anim-content-transition\">\n" +
    "              <div class=\"txt txt-left\">\n" +
    "                At ADx Healthcare, we seek to contribute to the scientific advancement of Alzheimer’s disease healthcare through collaborative technology offerings and research contributions. We also aim to provide individuals, families and healthcare providers with answers for Alzheimer’s disease  through screenings, education, advocacy, and support.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap text-left anim-content-transition\">\n" +
    "              <a class=\"button-border-rounded button-border-rounded--small-line-height\"><span class=\"txt-middle\">Learn about the science behind our platform</span></a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column hide-xs-mobile anim-content-transition hide-mobile\">\n" +
    "            <ng-include src=\"'./assets/images/svg/medical-bgc-drop-dark.svg'\"></ng-include>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div uib-slide index=\"1\">\n" +
    "        <div class=\"slider__wrap align-items--center container-flex\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"anim-content-transition txt-left\">\n" +
    "              <div class=\"title-first\">ADx Healthcare</div>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap anim-content-transition\">\n" +
    "              <div class=\"txt txt-left\">\n" +
    "                ADx Healthcare is a physician-owned company that provides individuals with personal access to their medical and genetic information by offering private pay testing, while still providing the highest standard of patient care.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column hide-xs-mobile anim-content-transition hide-mobile\">\n" +
    "            <ng-include src=\"'./assets/images/svg/adx-dropped.svg'\"></ng-include>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div uib-slide index=\"2\">\n" +
    "        <div class=\"slider__wrap align-items--center container-flex\">\n" +
    "          <div class=\"flex-column\">\n" +
    "            <div class=\"anim-content-transition txt-left\">\n" +
    "              <div class=\"title-first\">Our offerings</div>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap anim-content-transition\">\n" +
    "              <div class=\"txt txt-left\">\n" +
    "                In addition to offering Alzheimer’s disease genetic testing, our board certified neuropathologist provides brain autopsy services to families and loved ones seeking definitive answers and closure as provided through a conclusive, post-mortem dementia type diagnosis.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"flex-column hide-xs-mobile anim-content-transition hide-mobile\">\n" +
    "            <ng-include src=\"'./assets/images/svg/human-health-dropped.svg'\"></ng-include>\n" +
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
    "                Your case is carefully reviewed by an independent physician to determine if Alzheimer’s genetic testing is right for you.  If needed, a genetic counselor or physician may contact you to ask some additional questions.  We are committed to taking the extra step to ensure we are offering Alzheimer’s genetic testing to patients who understand the benefits and limitations of testing.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <h4 class=\"txt-blue-dark txt--space-top-middle-sm txt-center-sm\">Transparency</h4>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                We will not use your personal information for research without your written consent.  Likewise, we will never share or sell your personal information with anyone else.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row row--space-top\">\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <h4 class=\"txt-blue-dark txt-center-sm\">Collaborations</h4>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                The ADx Healthcare team has partnerships with researchers, physicians, and scientists who are continually engaged in research and patient care, aimed at improving the understanding of Alzheimer’s disease. Likewise, through both time and monetary assistance, we aid local and national Alzheimer’s organizations’ efforts for education, support, and advocacy for Alzheimer’s disease and other dementias.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6\">\n" +
    "            <h4 class=\"txt-blue-dark txt--space-top-middle-sm txt-center-sm\">Action</h4>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <p class=\"txt-middle txt-black\">\n" +
    "                While our doctors and scientists participate in the Alzheimer’s research to develop standards of care for both detection and treatment, the team at ADx Healthcare is committed to helping individuals and families learn their Alzheimer’s genetic risk and supporting them on their journey to improve their cognitive health and to reduce their risk for Alzheimer’s disease.\n" +
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
    "                  We believe that you shouldn’t have to wait until your memory begins to fade to learn you are at risk for Alzheimer’s disease. We want to provide individuals who want to know their genetic risk with the knowledge and tools to make behavior changes to improve their cognitive health. Know your risk, so you can start making lifestyle changes to reduce your risk and protect your future self!\n" +
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
    "              <p class=\"txt\">The ApoE gene comes in three variants – ApoE2, ApoE3, and ApoE4, and everyone has two copies of the gene.  Genotyping reveals what specific combination of the ApoE gene you have, which may be two copies of the same form (e.g. ApoE3/ApoE3), or two different forms (e.g. ApoE2/ApoE4).  The ApoE4 form is a major risk factor for Alzheimer’s disease. </p>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center anim-content-transition\">\n" +
    "              <a href=\"mailto:carrers@adxhealthcare.com\" class=\"button-border-rounded button-border-rounded--small-line-height\"><span class=\"txt-middle\">Jon Doe</span></a>\n" +
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
    "     <form action=\"\" class=\"form-space-top\">\n" +
    "       <div class=\"form-group-space-top\">\n" +
    "         <input class=\"form-control form-control-silver-border\" type=\"text\" placeholder=\"Name\">\n" +
    "       </div>\n" +
    "       <div class=\"form-group-space-top\">\n" +
    "         <input class=\"form-control form-control-silver-border\" type=\"text\" placeholder=\"Email adress\">\n" +
    "       </div>\n" +
    "       <div class=\"form-group-space-top\">\n" +
    "         <input class=\"form-control form-control-silver-border\" type=\"text\" placeholder=\"Subject\">\n" +
    "       </div>\n" +
    "       <div class=\"form-group-space-top\">\n" +
    "         <textarea rows=\"4\" cols=\"45\" class=\"form-control form-control-silver-border\" type=\"text\" placeholder=\"Message\"></textarea>\n" +
    "       </div>\n" +
    "       <div class=\"button__wrap button--center\">\n" +
    "         <button type=\"submit\" class=\"bt-round bt-round--blue\">Contact us</button>\n" +
    "       </div>\n" +
    "     </form>\n" +
    "   </div>\n" +
    "    <div class=\"about-section-fourth__data-map-overlap\">\n" +
    "      <p class=\"txt\">Custom Service</p>\n" +
    "      <p class=\"txt\">Email</p>\n" +
    "      <p class=\"txt\">support@adxhealthcare.com</p>\n" +
    "      <p class=\"txt\">Phone: 855-514-2273</p>\n" +
    "      <div class=\"txt--indent-small\">\n" +
    "        <p class=\"txt\">Corporate Office</p>\n" +
    "        <p class=\"txt\">3614 Meridian Street</p>\n" +
    "        <p class=\"txt\">Suite 101</p>\n" +
    "        <p class=\"txt\">Bellingham, WA 98225</p>\n" +
    "        <p class=\"txt\">United States</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section fourth with map-->\n" +
    "  \n" +
    "  <!--section fifth-->\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">You’re not alone</h2>\n" +
    "                </div>\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Genetic counseling</h2>\n" +
    "                </div>\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Power of emotions</h2>\n" +
    "                </div>\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Lifestyle changes</h2>\n" +
    "                </div>\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Connecting with community</h2>\n" +
    "                </div>\n" +
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
    "  <!--end section fifth-->\n" +
    "</div>\n" +
    "\n" +
    "");
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
    "                                        From the physician review of your order, to the genetics counselors available to answer questions about your test results, ADx Healthcare will support you through the process.\n" +
    "                                        <div class=\"txt--indent\">\n" +
    "                                            For all the steps in between, our customer support team is available to discuss your questions about the science behind ApoE,\n" +
    "                                            ordering a test, completing your kit, or interpreting your results.\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent\">\n" +
    "                                            You don’t need to navigate this alone. We are here to support you through each step.\n" +
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
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">Genetic counseling</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        You will receive your test results in a clear, electronic report. However, if you have additional questions about what these results mean to you or your family, we have Genetics Counselors available to discuss your results with you, for no additional charge. Also, we encourage you to share your report with your health care provider and review with them any additional questions or concerns you may have.\n" +
    "                \n" +
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
    "                                            <h2 class=\"txt-blue-dark anim-content-transition\">Power of emotions</h2>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"content-txt__wrap\">\n" +
    "                                    <div class=\"txt txt-black\">\n" +
    "                                        Genetics is only one part of your risk for developing Alzheimer’s disease. For many people, it can be hard to be motivated to exercise.  For others, nutrition is a struggle with busy work and family schedules.  For yet others, sleep is often viewed as an inconvenience and not given much priority. Finally, stress management is an issue for many, as approximately 55% of Americans reported not even taking all their paid vacation days. (source: http://www.projecttimeoff.com/research/state-american-vacation-2016).  Knowing that you have a high genetic risk for Alzheimer’s disease is unsettling, but it can help empower you to take measured action to live a cognitively healthy life in order to best protect your future self.\n" +
    "                                        <div class=\"txt--indent\">\n" +
    "                                            Having the ApoE-e4 variant  (high genetic risk for Alzheimer’s disease) does not guarantee you will develop late-onset Alzheimer’s disease.  Learning your genetic risk can help you take measured steps towards improving your cognitive health, so you can reduce your risk for or delay the onset of Alzheimer’s disease.  Sometimes making lifestyle changes can be hard, but having a reason for why you are eating healthier, reducing your stress, and making fitness and sleep a priority can be motivating.\n" +
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
    "                                        Sleep, stress, nutrition, fitness, social engagement, ongoing brain training (music, games, reading, crafts, etc.), and environmental toxins each can impact your cognitive health.  Living an overall healthier life may also help you reduce your risk for Alzheimer’s disease.\n" +
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
    "                                        We encourage you to share your results with your family and healthcare provider.  The more support you have for implementing brain healthy lifestyle behaviors, the more likely you are to be successful at turning them into lifelong habits.\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent\">\n" +
    "                                        <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Community</a>\n" +
    "                                        <div class=\"txt--indent\">\n" +
    "                                            <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Facebook</a>\n" +
    "                                            <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Twitter</a>\n" +
    "                                            <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Blog</a>\n" +
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

angular.module("components/forgot_password/forgot_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/forgot_password/forgot_password.tpl.html",
    "<section class=\"fp-p login-bgc\">\n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div class=\"fp-p__wrap\">\n" +
    "      <div class=\"fp-p-form\">\n" +
    "        <div class=\"fp-p-form__wrap\">\n" +
    "          <div class=\"panel panel--fp\" ng-controller=\"ForgotPasswordCtrl\">\n" +
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
    "                <p class=\"about-title-txt txt-black-light\">If your email address matches our records we will send an email with instructions to reset your account password</p>\n" +
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
    "<div class=\"container-fluid container-fluid--section\">\n" +
    "  <div class=\"home-head\">\n" +
    "    <div class=\"container-lg\">\n" +
    "      <div class=\"home-head__wrap\">\n" +
    "        <div class=\"head-title__wrap\">\n" +
    "          <div class=\"head-title txt-center-sm anim-content-transition\">\n" +
    "            <h1>Alzheimer's disease\n" +
    "              know you risk\n" +
    "            </h1>\n" +
    "            <h3 class=\"txt-padding-top\">Get an ApoE genetic test today</h3>\n" +
    "          </div>\n" +
    "          <div class=\"head-button__wrap txt-center-sm anim-content-transition\">\n" +
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
    "  <div class=\"home-head-bottom hide-xs-mobile\">\n" +
    "    <div class=\"container-lg\">\n" +
    "      <div class=\"home-head-bottom__wrap\">\n" +
    "        <div class=\"home-head-bottom__title anim-content-transition\">\n" +
    "          <h3 class=\"txt-fonts-circular-book\">Get an ApoE genetic test today</h3>\n" +
    "        </div>\n" +
    "        <div class=\"home-head-bottom__button anim-content-transition\">\n" +
    "          <div class=\"button__purchase\">\n" +
    "            <a ui-sref=\"\" class=\"bt-round bt-round--blue-dark\">Order</a>\n" +
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
    "            <br> It is never too early or too late to learn your genetic risk for late-onset Alzheimer’s disease!</div>\n" +
    "        </div>\n" +
    "        <div class=\"home-section-first__content\">\n" +
    "          <div class=\"container-flex container-flex--column-reverse-md\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h3 class=\"txt-blue-dark\">Why should I take this test?</h3>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <div class=\"txt txt-black\">\n" +
    "                    Changes begin happening in the brain about two decades before the first symptoms of memory decline. Your lifestyle, environment, and other medical conditions, along with your genetics and age influence your cognitive health. Don’t wait until your memory begins to fade. Find out your genetic risk for late-onset Alzheimer’s disease early, so you have the time to consider your options and make lifestyle changes that feel right for you. For individuals at high risk for Alzheimer’s disease, early action can make a difference.\n" +
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
    "                  <h3 class=\"txt-blue-dark\">What will the test tell me</h3>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <div class=\"txt txt-black\">\n" +
    "                    Your ApoE test results will explain which combination of the ApoE alleles you have, and what the associated risk of Alzheimer’s disease development is based on your ApoE alleles.\n" +
    "                    <div class=\"txt--indent\">\n" +
    "                      The test will also tell you how your lifetime risk for developing Alzheimer’s disease changes as you age.\n" +
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
    "        <div class=\"title-blue__inner txt-center\">\n" +
    "          <div class=\"txt-blue-dark title-first\">Slogan</div>\n" +
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
    "                  A physician will review your medical history and determine if the Alzheimer’s ApoE genetic test is right for you.  If they need any additional information, they will reach out to you.\n" +
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
    "                  Spit\n" +
    "                </h3>\n" +
    "              </div>\n" +
    "              <div class=\"txt__wrap txt-center\">\n" +
    "                <p class=\"txt txt-black txt-center\">\n" +
    "                  Once your test is approved, you will receive your testing kit in the mail. Collect your saliva sample and mail it back in the prepaid envelope.\n" +
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
    "                  Obtain your results privately and securely online. We’ll help you schedule your free genetic counseling session if you would like to review your results with a genetic counselor. You can also print a copy of your results if you want to share them with family or your doctor.\n" +
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
    "                  Get started reducing your risk for Alzheimer’s disease and improving your cognitive health by understanding your genetic risk.\n" +
    "                  The Alzheimer’s ApoE genetic test assesses the most common gene associated with genetic risk for late-onset (occurring after age 65) Alzheimer’s disease.  This test does not evaluate the rare “familial” Alzheimer’s disease mutations in PS1, PS2 or APP, which are associated with autosomal dominant early-onset Alzheimer’s disease, a rare subtype of the disease.\n" +
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
    "                    The Alzheimer’s ApoE test is a single gene test that looks at your ApoE-related genetic risk for Alzheimer’s disease. In addition to genetics, your Alzheimer’s disease risk is also influenced by your  other medical conditions, age, gender, and environmental and lifestyle factors.\n" +
    "                    <div class=\"txt--indent\">\n" +
    "                      ApoE comes in three forms: ApoE-e2, ApoE-e3, and ApoE-e4. Our Alzheimer’s ApoE genetic test combines your ApoE - related genetics with your age to help assess your Alzheimer’s disease risk. Other factors such as gender, medical health and lifestyle habits also influence your Alzheimer’s disease risk. We do not take these factors into your genetics risk.  Identifying your overall risk can help you decide how aggressively you want to address your cognitive health.\n" +
    "                    </div>\n" +
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
    "  \n" +
    "  <!--section fourth-->\n" +
    "  <div class=\"home-section-fourth section-box-shadow\">\n" +
    "    <div class=\"home-section-fourth__head\">\n" +
    "      <div class=\"home-section-fourth-head__title\">\n" +
    "        <h3 class=\"txt-blue txt-center\">Frequently asked questions</h3>\n" +
    "        <h1 class=\"txt-blue txt-center\">We care about you</h1>\n" +
    "        <div class=\"sub-header-txt__wrap\">\n" +
    "          <div class=\"txt txt-center\">\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">You’re not alone</h2>\n" +
    "                </div>\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Genetic counseling</h2>\n" +
    "                </div>\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Power of emotions</h2>\n" +
    "                </div>\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Lifestyle changes</h2>\n" +
    "                </div>\n" +
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
    "              <div class=\"accordion-heading-wrap\">\n" +
    "                <div class=\"cross-button-open__wrap\">\n" +
    "                  <div class=\"cross-button-open\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"content-title__wrap\">\n" +
    "                  <h2 class=\"txt-blue-dark\">Connecting with community</h2>\n" +
    "                </div>\n" +
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
    "                                    <p class=\"txt-middle txt-black anim-content-transition\">\n" +
    "                                        <span class=\"txt-bold\">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Quid nunc honeste dicit? Verba tu fingas et ea dicas, quae non sentias? Quod cum ille dixisset et satis disputatum videretur, in oppidum ad Pomponium perreximus omnes. Res enim se praeclare habebat, et quidem in utraque parte.\n" +
    "                                    </p>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black anim-content-transition\">\n" +
    "                                            <span class=\"txt-bold\">Duo Reges: constructio interrete.</span> Quorum altera prosunt, nocent altera. Frater et T. Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Te enim iudicem aequum puto, modo quae dicat ille bene noris. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Quocirca eodem modo sapiens erit affectus erga amicum, quo in se ipsum, quosque labores propter suam voluptatem susciperet, eosdem suscipiet propter amici voluptatem. Ex quo intellegitur officium medium quiddam esse, quod neque in bonis ponatur neque in contrariis. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-smal\">\n" +
    "                                        <p class=\"txt-middle txt-black anim-content-transition\">\n" +
    "                                            <span class=\"txt-bold\">Idne consensisse de Calatino plurimas</span> gentis arbitramur, primarium populi fuisse, quod praestantissimus fuisset in conficiendis voluptatibus? Scaevolam M. Sed in ceteris artibus cum dicitur artificiose, posterum quodam modo et consequens putandum est, quod illi §pigennhmatikÒn appellant; Sed ne, dum huic obsequor, vobis molestus sim. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Et nemo nimium beatus est; Atque ego: Scis me, inquam, istud idem sentire, Piso, sed a te opportune facta mentio est. Qui si ea, quae dicit, ita sentiret, ut verba significant, quid inter eum et vel Pyrrhonem vel Aristonem interesset? Ita fit cum gravior, tum etiam splendidior oratio. Oculorum, inquit Plato, est in nobis sensus acerrimus, quibus sapientiam non cernimus. Vives, inquit Aristo, magnifice atque praeclare, quod erit cumque visum ages, numquam angere, numquam cupies, numquam timebis. Hunc vos beatum; Ratio quidem vestra sic cogit. An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat?\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Se dicere inter honestum et turpe nimium quantum, nescio quid inmensum, inter ceteras res nihil omnino interesse. Ego vero volo in virtute vim esse quam maximam; Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit. Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Si est nihil\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <p class=\"txt-middle txt-black\">\n" +
    "                                        Idne consensisse de Calatino plurimas gentis arbitramur, primarium populi fuisse, quod praestantissimus fuisset in conficiendis voluptatibus? Scaevolam M. Sed in ceteris artibus cum dicitur artificiose, posterum quodam modo et consequens putandum est, quod illi §pigennhmatikÒn appellant; Sed ne, dum huic obsequor, vobis molestus sim. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Et nemo nimium beatus est; Atque ego: Scis me, inquam, istud idem sentire, Piso, sed a te opportune facta mentio est. Qui si ea, quae dicit, ita sentiret, ut verba significant, quid inter eum et vel Pyrrhonem vel Aristonem interesset? Ita fit cum gravior, tum etiam splendidior oratio. Oculorum, inquit Plato, est in nobis sensus acerrimus, quibus sapientiam non cernimus. Vives, inquit Aristo, magnifice atque praeclare, quod erit cumque visum ages, numquam angere, numquam cupies, numquam timebis. Hunc vos beatum; Ratio quidem vestra sic cogit. An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat?\n" +
    "                                    </p>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Se dicere inter honestum et turpe nimium quantum, nescio quid inmensum, inter ceteras res nihil omnino interesse. Ego vero volo in virtute vim esse quam maximam; Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit. Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quis non odit sordidos, vanos, leves, futtiles? Primum cur ista res digna odio est, nisi quod est turpis? Aeque enim contingit omnibus fidibus, ut incontentae sint. Sed ad bona praeterita redeamus. Cur id non ita fit?\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"txt--indent-small\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Conferam tecum, quam cuique verso rem subicias; Sed existimo te, sicut nostrum Triarium, minus ab eo delectari, quod ista Platonis, Aristoteli, Theophrasti orationis ornamenta neglexerit. Conferam tecum, quam cuique verso rem subicias; Numquam audivi in Epicuri schola Lycurgum, Solonem, Miltiadem, Themistoclem, Epaminondam nominari, qui in ore sunt ceterorum omnium philosophorum. Videsne igitur Zenonem tuum cum Aristone verbis concinere, re dissidere, cum Aristotele et illis re consentire, verbis discrepare? Nam quid possumus facere melius? Animadverti, ínquam, te isto modo paulo ante ponere, et scio ab Antiocho nostro dici sic solere; Dicimus aliquem hilare vivere; Quid, si reviviscant Platonis illi et deinceps qui eorum auditores fuerunt, et tecum ita loquantur?\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"section__wrap\">\n" +
    "                            <h3 class=\"txt-blue txt-center anim-content-transition\">Privacy</h3>\n" +
    "                            <div class=\"txt__wrap\">\n" +
    "                                <div class=\"row\">\n" +
    "                                    <div class=\"col-sm-6 anim-content-transition\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            <span class=\"txt-bold\">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Quid nunc honeste dicit? Verba tu fingas et ea dicas, quae non sentias? Quod cum ille dixisset et satis disputatum videretur, in oppidum ad Pomponium perreximus omnes. Res enim se praeclare habebat, et quidem in utraque parte.\n" +
    "                                        </p>\n" +
    "                                        <div class=\"txt--indent-small anim-content-transition\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">Duo Reges: constructio interrete.</span> Quorum altera prosunt, nocent altera. Frater et T. Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Te enim iudicem aequum puto, modo quae dicat ille bene noris. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Quocirca eodem modo sapiens erit affectus erga amicum, quo in se ipsum, quosque labores propter suam voluptatem susciperet, eosdem suscipiet propter amici voluptatem. Ex quo intellegitur officium medium quiddam esse, quod neque in bonis ponatur neque in contrariis. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-smal\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                <span class=\"txt-bold\">Idne consensisse de Calatino plurimas</span> gentis arbitramur, primarium populi fuisse, quod praestantissimus fuisset in conficiendis voluptatibus? Scaevolam M. Sed in ceteris artibus cum dicitur artificiose, posterum quodam modo et consequens putandum est, quod illi §pigennhmatikÒn appellant; Sed ne, dum huic obsequor, vobis molestus sim. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Et nemo nimium beatus est; Atque ego: Scis me, inquam, istud idem sentire, Piso, sed a te opportune facta mentio est. Qui si ea, quae dicit, ita sentiret, ut verba significant, quid inter eum et vel Pyrrhonem vel Aristonem interesset? Ita fit cum gravior, tum etiam splendidior oratio. Oculorum, inquit Plato, est in nobis sensus acerrimus, quibus sapientiam non cernimus. Vives, inquit Aristo, magnifice atque praeclare, quod erit cumque visum ages, numquam angere, numquam cupies, numquam timebis. Hunc vos beatum; Ratio quidem vestra sic cogit. An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat?\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                Se dicere inter honestum et turpe nimium quantum, nescio quid inmensum, inter ceteras res nihil omnino interesse. Ego vero volo in virtute vim esse quam maximam; Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit. Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Si est nihil\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <p class=\"txt-middle txt-black\">\n" +
    "                                            Idne consensisse de Calatino plurimas gentis arbitramur, primarium populi fuisse, quod praestantissimus fuisset in conficiendis voluptatibus? Scaevolam M. Sed in ceteris artibus cum dicitur artificiose, posterum quodam modo et consequens putandum est, quod illi §pigennhmatikÒn appellant; Sed ne, dum huic obsequor, vobis molestus sim. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Et nemo nimium beatus est; Atque ego: Scis me, inquam, istud idem sentire, Piso, sed a te opportune facta mentio est. Qui si ea, quae dicit, ita sentiret, ut verba significant, quid inter eum et vel Pyrrhonem vel Aristonem interesset? Ita fit cum gravior, tum etiam splendidior oratio. Oculorum, inquit Plato, est in nobis sensus acerrimus, quibus sapientiam non cernimus. Vives, inquit Aristo, magnifice atque praeclare, quod erit cumque visum ages, numquam angere, numquam cupies, numquam timebis. Hunc vos beatum; Ratio quidem vestra sic cogit. An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat?\n" +
    "                                        </p>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                Se dicere inter honestum et turpe nimium quantum, nescio quid inmensum, inter ceteras res nihil omnino interesse. Ego vero volo in virtute vim esse quam maximam; Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit. Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quis non odit sordidos, vanos, leves, futtiles? Primum cur ista res digna odio est, nisi quod est turpis? Aeque enim contingit omnibus fidibus, ut incontentae sint. Sed ad bona praeterita redeamus. Cur id non ita fit?\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"txt--indent-small\">\n" +
    "                                            <p class=\"txt-middle txt-black\">\n" +
    "                                                Conferam tecum, quam cuique verso rem subicias; Sed existimo te, sicut nostrum Triarium, minus ab eo delectari, quod ista Platonis, Aristoteli, Theophrasti orationis ornamenta neglexerit. Conferam tecum, quam cuique verso rem subicias; Numquam audivi in Epicuri schola Lycurgum, Solonem, Miltiadem, Themistoclem, Epaminondam nominari, qui in ore sunt ceterorum omnium philosophorum. Videsne igitur Zenonem tuum cum Aristone verbis concinere, re dissidere, cum Aristotele et illis re consentire, verbis discrepare? Nam quid possumus facere melius? Animadverti, ínquam, te isto modo paulo ante ponere, et scio ab Antiocho nostro dici sic solere; Dicimus aliquem hilare vivere; Quid, si reviviscant Platonis illi et deinceps qui eorum auditores fuerunt, et tecum ita loquantur?\n" +
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
    "<div class=\"login-page login-bgc\">\n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div class=\"login-form__wrap\">\n" +
    "        <div class=\"login-form\">\n" +
    "          <h6 class=\"txt-medium txt-blue-dark txt-center\">Sign in to ADx Health</h6>\n" +
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
    "                Forgot your password ?\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <button class=\"bt-round bt-round--large bt-round--blue-dark\" type=\"submit\" ng-disabled=\"form.$invalid\" test-hook=\"login-button\"><span class=\"txt-medium\">Sign in</span></button>\n" +
    "            </div>\n" +
    "            <div class=\"txt--indent-small txt-center\">\n" +
    "              <a href ui-sref=\"master.register\" class=\"link-underline txt-blue txt-small txt-bold\">\n" +
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

angular.module("components/master/master_signedin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/master/master_signedin.tpl.html",
    "<app-side-navbar ng-if=\"logged && hideSideNavBar\"></app-side-navbar>\n" +
    "<div class=\"page\" ng-class=\"{'logged-out' : !logged || !hideSideNavBar}\">\n" +
    "  <app-header ng-if=\"!logged || !hideSideNavBar\"></app-header>\n" +
    "  <div class=\"container-page page-transition-anim\" ui-view></div>\n" +
    "  <app-footer ng-if=\"!logged || !hideSideNavBar\"></app-footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/master/master.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/master/master.tpl.html",
    "<div class=\"page\" ng-class=\"{'logged-out' :  !hideSideNavBar}\">\n" +
    "  <app-header class=\"hideSideNavBar\"></app-header>\n" +
    "  <div class=\"container-page page-transition-anim\" ui-view></div>\n" +
    "  <app-footer ng-show=\"showFooter\"></app-footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/products/pages/about-products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/pages/about-products.tpl.html",
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
    "                <h1 class=\"txt-blue-dark\">Alzheimers Genetic Test</h1>\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent-small txt__wrap--border-bottom anim-content-transition\">\n" +
    "                <p class=\"txt txt-black\">In the fight against late-onset Alzheimer’s disease, early awareness about risk can empower you to make lifestyle changes now to protect your future self. Taking action before memories begin to fade may help you to reduce your risk for or delay the onset of Alzheimer’s.</p>\n" +
    "              </div>\n" +
    "              <div class=\"txt--indent-small txt__wrap--border-bottom anim-content-transition\">\n" +
    "                <div class=\"container-flex txt--indent-small\">\n" +
    "                  <div class=\"column\">\n" +
    "                    <p class=\"txt-large txt-black\">Alzheimer’s Genetic Test</p>\n" +
    "                  </div>\n" +
    "                  <div class=\"column\">\n" +
    "                    <p class=\"txt txt-black\">$249.00</p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"container-flex txt--indent-small\">\n" +
    "                  <div class=\"column\">\n" +
    "                    <p class=\"txt-large txt-black\">Helix DNA kit</p>\n" +
    "                  </div>\n" +
    "                  <div class=\"column\">\n" +
    "                    <p class=\"txt txt-black\">$89.00</p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"txt--indent-small\">\n" +
    "                  <p class=\"txt txt-black\">Required one time only so Helix can collect a saliva sample from you and sequence your DNA.</p>\n" +
    "                </div>\n" +
    "                <div class=\"txt--indent-small pre-results-box-flex\">\n" +
    "                  <div class=\"pre-results-box-flex-1 checkbox checkbox--not-space\">\n" +
    "                    <input type=\"checkbox\" id=\"checkbox-private\" class=\"checkbox-input\">\n" +
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
    "                  <div class=\"txt-large txt-large--exl txt-black\">$338.00</div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"button__wrap button__wrap--not-space-bottom-sm\">\n" +
    "                <button class=\"bt-round bt-round--all-width bt-round--blue-dark\"><span class=\"txt-large txt-bold\">Purchase with Helix</span></button>\n" +
    "              </div>\n" +
    "              <div class=\"button__wrap button__wrap--not-space-bottom-sm\">\n" +
    "                <button class=\"bt-round bt-round--all-width bt-round--gray\"><span class=\"txt-large txt-gray txt-bold\">Multiple order, contact us</span></button>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"txt__wrap anim-content-transition\">\n" +
    "          <p class=\"txt txt-black txt-center\">To use this product, you must be 18 or older and be a U.S. resident. Not available for residents of Alaska, Arkansas, Delaware,\n" +
    "            Hawaii, Idaho, Maine, Missouri, Nevada, New York, Tennessee, West Virgina, Wisconsin, or Wyoming. Clarify your diabetes diagnosis</p>\n" +
    "        </div>\n" +
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
    "              <div class=\"container-sub-head\">\n" +
    "                <h2 class=\"txt-blue-dark txt-center-md\">Is this test right for me?</h2>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <p class=\"txt txt-black txt-center-md\">The Alzheimer’s ApoE genetic test is developed to help individuals interested in learning their genetic risk for late-onset Alzheimer’s disease and how their Alzheimer’s disease risk changes with age.</p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div id=\"whyAdx\" class=\"title__wrap\">\n" +
    "            <h1 class=\"txt-blue txt-center\">Why should I take this test?</h1>\n" +
    "          </div>\n" +
    "          <div class=\"txt__wrap\">\n" +
    "            <p class=\"txt txt-black txt-center\">With knowledge comes power… the power to act and the power to plan.  Learning about genetic risk for Alzheimer’s disease isn’t for everyone, but if you are a proactive person who wants to be able to impact your future health as much as possible, then identifying your risk level for Alzheimer’s disease may be a good fit.  Having a reason to follow a set of lifestyle changes makes it easier to stick with it on those difficult days when you lack motivation. Learning your genetic risk for Alzheimer’s disease may be your first step towards protecting your future self.</p>\n" +
    "          </div>\n" +
    "          <div class=\"container-flex align-items--center txt__wrap  container-flex--column-reverse-md\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"img__wrap--md img--center-md\">\n" +
    "                <img class=\"img img--md\" src=\"./assets/images/products/icon-human.png\" alt=\"\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column-2\">\n" +
    "              <div class=\"container-sub-head\">\n" +
    "                <h2 class=\"txt-blue-dark txt-left-space txt-center-md\"> Actionable insights</h2>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <p class=\"txt txt-black txt-center-md\">Along with your ApoE genotype, your report will include brain healthy lifestyle recommendations and links to support organizations and sources for more information on Alzheimer’s disease.</p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"container-flex align-items--center txt__wrap container-flex--column-md\">\n" +
    "            <div class=\"flex-column-2\">\n" +
    "              <div class=\"container-sub-head\">\n" +
    "                <h2 class=\"txt-blue-dark txt-left-space txt-center-md\">Detailed explanations</h2>\n" +
    "                <div class=\"txt__wrap txt-center-md\">\n" +
    "                  <p class=\"txt txt-black\">Your report will provide a detailed explanation of: </p>\n" +
    "                  <p class=\"txt txt-black\">How ApoE works in your body;</p>\n" +
    "                  <p class=\"txt txt-black\">What your ApoE genotype is;</p>\n" +
    "                  <p class=\"txt txt-black\">How your risk for Alzheimer’s disease will change as you age;</p>\n" +
    "                  <p class=\"txt txt-black\">How your risk for Alzheimer’s disease compares to the population average;</p>\n" +
    "                  <p class=\"txt txt-black\">How you can get started making lifestyle changes to improve your cognitive health.</p>\n" +
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
    "            <div class=\"box-wrap\">\n" +
    "              <div class=\"box-with-header-colored\">\n" +
    "                <div class=\"box-colored-head box-colored-head--blue-dark\">\n" +
    "                  <h4 class=\"txt-center\">Us</h4>\n" +
    "                </div>\n" +
    "                <ul class=\"box-colored-content\">\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">Benefits</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">Another</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">More benefits</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">And again</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"box-colored-content__item\">\n" +
    "                    <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                    <div class=\"txt-wrap-space-left\">\n" +
    "                      <p class=\"txt-large txt-blue-dark\">Last benefit</p>\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "           <div class=\"box-wrap\">\n" +
    "             <div class=\"box-with-header-colored\">\n" +
    "               <div class=\"box-colored-head box-colored-head--blue\">\n" +
    "                 <h4 class=\"txt-center\">23&me</h4>\n" +
    "               </div>\n" +
    "               <ul class=\"box-colored-content\">\n" +
    "                 <li class=\"box-colored-content__item\">\n" +
    "                   <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                   <div class=\"txt-wrap-space-left\">\n" +
    "                     <p class=\"txt-large txt-blue-dark\">Benefits</p>\n" +
    "                   </div>\n" +
    "                 </li>\n" +
    "                 <li class=\"box-colored-content__item\">\n" +
    "                   <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                   <div class=\"txt-wrap-space-left\">\n" +
    "                     <p class=\"txt-large txt-blue-dark\">Another</p>\n" +
    "                   </div>\n" +
    "                 </li>\n" +
    "                 <li class=\"box-colored-content__item\">\n" +
    "                   <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                   <div class=\"txt-wrap-space-left\">\n" +
    "                     <p class=\"txt-large txt-blue-dark\">More benefits</p>\n" +
    "                   </div>\n" +
    "                 </li>\n" +
    "               </ul>\n" +
    "             </div>\n" +
    "           </div>\n" +
    "           <div class=\"box-wrap\">\n" +
    "             <div class=\"box-with-header-colored\">\n" +
    "               <div class=\"box-colored-head box-colored-head--blue\">\n" +
    "                 <h4 class=\"txt-center\">LifeExtension</h4>\n" +
    "               </div>\n" +
    "               <ul class=\"box-colored-content\">\n" +
    "                 <li class=\"box-colored-content__item\">\n" +
    "                   <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                   <div class=\"txt-wrap-space-left\">\n" +
    "                     <p class=\"txt-large txt-blue-dark\">Benefits</p>\n" +
    "                   </div>\n" +
    "                 </li>\n" +
    "                 <li class=\"box-colored-content__item\">\n" +
    "                   <span class=\"icon icon--large icon-checkbox-ok\"></span>\n" +
    "                   <div class=\"txt-wrap-space-left\">\n" +
    "                     <p class=\"txt-large txt-blue-dark\">Another</p>\n" +
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
    "                    <h3 class=\"txt-blue-dark txt-center\">Spit</h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt--indent-small txt-center\">\n" +
    "                    <p class=\"txt txt-black\">Collect your saliva sample and send the kit to us for processing. (Physician authorization will be required prior to lab processing)</p>\n" +
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
    "                    <p class=\"txt txt-black\">Obtain your results from your provider. We'll help you schedule your free genetic counseling session.</p>\n" +
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
    "                    <p class=\"txt txt-black\">Learn about lifestyle changes and modifiable risk factors to improve your cognitive health and reduce your risk. Visit AFFIRMATIVhealth.com</p>\n" +
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
    "                      <p class=\"txt txt-black\">xLayer product and design team will work together with you to create the interface and the experience that fits your users need. This includes product brainstorming, identifying value propositions, design that speaks for your brand and a feature rich product for your genetic application.</p>\n" +
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
    "    <div class=\"home-section-fourth section-box-shadow\">\n" +
    "      <div class=\"home-section-fourth__head\">\n" +
    "        <div class=\"home-section-fourth-head__title\">\n" +
    "          <h3 class=\"txt-blue txt-center\">Frequently asked questions</h3>\n" +
    "          <h1 class=\"txt-blue txt-center\">We care about you</h1>\n" +
    "          <div class=\"sub-header-txt__wrap\">\n" +
    "            <div class=\"sub-header-txt txt-center\">\n" +
    "              Our customer support team is available\n" +
    "              by email or chat, and is happy to answer your\n" +
    "              questions about your test kit, results, and more.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"home-section-fourth__content\">\n" +
    "        <div class=\"container-lg\">\n" +
    "          <div uib-accordion close-others=\"false\">\n" +
    "            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "              <div uib-accordion-heading>\n" +
    "                <div class=\"accordion-heading-wrap\">\n" +
    "                  <div class=\"cross-button-open__wrap\">\n" +
    "                    <div class=\"cross-button-open\"></div>\n" +
    "                  </div>\n" +
    "                  <div class=\"content-title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark\">You’re not alone</h2>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"content-txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  From the physician review of your order, to the genetics counselors available to answer questions about your test results, ADx Healthcare will support you through the process.\n" +
    "                  <div class=\"txt--indent\">\n" +
    "                    For all the steps in between, our customer support team is available to discuss your questions about the science behind ApoE,\n" +
    "                    ordering a test, completing your kit, or interpreting your results.\n" +
    "                  </div>\n" +
    "                  <div class=\"txt--indent\">\n" +
    "                    You don’t need to navigate this alone. We are here to support you through each step.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "              <div uib-accordion-heading>\n" +
    "                <div class=\"accordion-heading-wrap\">\n" +
    "                  <div class=\"cross-button-open__wrap\">\n" +
    "                    <div class=\"cross-button-open\"></div>\n" +
    "                  </div>\n" +
    "                  <div class=\"content-title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark\">Genetic counseling</h2>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"content-txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  You will receive your test results in a clear, electronic report. However, if you have additional questions about what these results mean to you or your family, we have Genetics Counselors available to discuss your results with you, for no additional charge. Also, we encourage you to share your report with your health care provider and review with them any additional questions or concerns you may have.\n" +
    "              \n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "              <div uib-accordion-heading>\n" +
    "                <div class=\"accordion-heading-wrap\">\n" +
    "                  <div class=\"cross-button-open__wrap\">\n" +
    "                    <div class=\"cross-button-open\"></div>\n" +
    "                  </div>\n" +
    "                  <div class=\"content-title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark\">Power of emotions</h2>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"content-txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  Genetics is only one part of your risk for developing Alzheimer’s disease. For many people, it can be hard to be motivated to exercise.  For others, nutrition is a struggle with busy work and family schedules.  For yet others, sleep is often viewed as an inconvenience and not given much priority. Finally, stress management is an issue for many, as approximately 55% of Americans reported not even taking all their paid vacation days. (source: http://www.projecttimeoff.com/research/state-american-vacation-2016).  Knowing that you have a high genetic risk for Alzheimer’s disease is unsettling, but it can help empower you to take measured action to live a cognitively healthy life in order to best protect your future self.\n" +
    "                  <div class=\"txt--indent\">\n" +
    "                    Having the ApoE-e4 variant  (high genetic risk for Alzheimer’s disease) does not guarantee you will develop late-onset Alzheimer’s disease.  Learning your genetic risk can help you take measured steps towards improving your cognitive health, so you can reduce your risk for or delay the onset of Alzheimer’s disease.  Sometimes making lifestyle changes can be hard, but having a reason for why you are eating healthier, reducing your stress, and making fitness and sleep a priority can be motivating.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "              <div uib-accordion-heading>\n" +
    "                <div class=\"accordion-heading-wrap\">\n" +
    "                  <div class=\"cross-button-open__wrap\">\n" +
    "                    <div class=\"cross-button-open\"></div>\n" +
    "                  </div>\n" +
    "                  <div class=\"content-title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark\">Lifestyle changes</h2>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"content-txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  Sleep, stress, nutrition, fitness, social engagement, ongoing brain training (music, games, reading, crafts, etc.), and environmental toxins each can impact your cognitive health.  Living an overall healthier life may also help you reduce your risk for Alzheimer’s disease.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div uib-accordion-group class=\"dropdown-txt__content\">\n" +
    "              <div uib-accordion-heading>\n" +
    "                <div class=\"accordion-heading-wrap\">\n" +
    "                  <div class=\"cross-button-open__wrap\">\n" +
    "                    <div class=\"cross-button-open\"></div>\n" +
    "                  </div>\n" +
    "                  <div class=\"content-title__wrap\">\n" +
    "                    <h2 class=\"txt-blue-dark\">Connecting with community</h2>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"content-txt__wrap\">\n" +
    "                <div class=\"txt txt-black\">\n" +
    "                  We encourage you to share your results with your family and healthcare provider.  The more support you have for implementing brain healthy lifestyle behaviors, the more likely you are to be successful at turning them into lifelong habits.\n" +
    "                </div>\n" +
    "                <div class=\"txt--indent\">\n" +
    "                  <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Community</a>\n" +
    "                  <div class=\"txt--indent\">\n" +
    "                    <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Facebook</a>\n" +
    "                    <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Twitter</a>\n" +
    "                    <a href=\"\" class=\"link-padding-right txt txt-blue-dark\">Blog</a>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
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

angular.module("components/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/register/register.tpl.html",
    "<div class=\"register-page login-bgc\">\n" +
    "  <div class=\"container-fluid container-fluid--section\">\n" +
    "    <div class=\"register-form__wrap\" ng-if=\"!showPopup\">\n" +
    "      <div class=\"register-form\">\n" +
    "        <form name=\"form\"  ng-submit=\"submitForm(userForm)\" novalidate>\n" +
    "          <div ng-show=\"!complete\">\n" +
    "            <div class=\"form-input\">\n" +
    "              <div class=\"form-input__register-wrap\">\n" +
    "                <h6 class=\"txt-medium txt-blue-dark txt-center\">Create an account</h6>\n" +
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
    "              <a href ui-sref=\"master.login\" class=\"link-underline txt-blue txt txt-small txt-bold\">\n" +
    "                I have an account\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <div class=\"alert alert-danger\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "          </div>\n" +
    "          <div ng-if=\"complete === true\" class=\"register-complete\">\n" +
    "            <h3 class=\"txt-medium txt-blue-dark txt-center\">Suceess!</h3>\n" +
    "            <div class=\"txt__wrap\">\n" +
    "              <p class=\"txt txt-black\">You registration was completed successfully. You should receive an email shortly with instruction on how to active your account.</p>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <a href ui-sref=\"master_signedin.dashboard\" class=\"bt-round bt-round--blue-dark\">\n" +
    "                Dashboard\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--start markup popup-->\n" +
    "  <div class=\"popup\" ng-if=\"showPopup\" test-hook=\"tour-start-popover\">\n" +
    "    <div class=\"popup-content\">\n" +
    "      <div class=\"popup-content__wrap\">\n" +
    "        <h6 class=\"txt-medium txt-blue-dark txt-center\">What you need to know before proceeding</h6>\n" +
    "        <div class=\"txt__wrap\">\n" +
    "          <h6 class=\"txt-medium txt-blue-dark\">Section title</h6>\n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <div class=\"txt-small txt-black\">Section title Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Quid nunc honeste dicit? Verba tu fingas et ea dicas, quae non sentias? Quod cum ille dixisset et satis disputatum videretur, in oppidum ad Pomponium perreximus omnes. Res enim se praeclare habebat, et quidem in utraque parte.\n" +
    "              <div class=\"txt--indent-small\">\n" +
    "                Duo Reges: constructio interrete. Quorum altera prosunt, nocent altera. Frater et T. Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Te enim iudicem aequum puto, modo quae dicat ille bene noris. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Quocirca eodem modo sapiens erit affectus erga amicum, quo in se ipsum, quosque labores propter suam voluptatem susciperet, eosdem suscipiet propter amici voluptatem. Ex quo intellegitur officium medium quiddam esse, quod neque in bonis ponatur neque in contrariis. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"txt--indent-small\">\n" +
    "            <h6 class=\"txt-medium txt-blue-dark\">Section title</h6>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <div class=\"txt-small txt-black\">Section title Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Quid nunc honeste dicit? Verba tu fingas et ea dicas, quae non sentias? Quod cum ille dixisset et satis disputatum videretur, in oppidum ad Pomponium perreximus omnes. Res enim se praeclare habebat, et quidem in utraque parte.\n" +
    "                <div class=\"txt--indent-small\">\n" +
    "                  Duo Reges: constructio interrete. Quorum altera prosunt, nocent altera. Frater et T. Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Te enim iudicem aequum puto, modo quae dicat ille bene noris. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Quocirca eodem modo sapiens erit affectus erga amicum, quo in se ipsum, quosque labores propter suam voluptatem susciperet, eosdem suscipiet propter amici voluptatem. Ex quo intellegitur officium medium quiddam esse, quod neque in bonis ponatur neque in contrariis. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n" +
    "                </div>\n" +
    "                <div class=\"txt--indent-small\">\n" +
    "                  Duo Reges: constructio interrete. Quorum altera prosunt, nocent altera. Frater et T. Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Te enim iudicem aequum puto, modo quae dicat ille bene noris. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Quocirca eodem modo sapiens erit affectus erga amicum, quo in se ipsum, quosque labores propter suam voluptatem susciperet, eosdem suscipiet propter amici voluptatem. Ex quo intellegitur officium medium quiddam esse, quod neque in bonis ponatur neque in contrariis. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
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
    "                    <div class=\"txt txt-black\">The ApoE gene comes in three variants: ApoE2, ApoE3, and ApoE4, and everyone has two copies.</div>\n" +
    "                  </div>\n" +
    "                  <div class=\"button__wrap button--center\">\n" +
    "                    <button class=\"bt-round bt-round--large bt-round--blue-dark\">Order</button>\n" +
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
    "                  <div class=\"txt txt-black\"><span class=\"txt-bold\">Have you purchased an ADx Genetic Test already</span>You should have recieved an email from ADx health to connect your Helix account. Follow the directions in the email.</div>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <a href=\"\" class=\"txt txt-blue link-underline\">Need help?</a>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <img src=\"./assets/images/products/product-integrate-manage-relax-img.png\" alt=\"\" class=\"img\">\n" +
    "                <ul class=\"product-p-items item-number-wrap\">\n" +
    "                  <li class=\"product-p-items__wrap\">\n" +
    "                    <div class=\"txt-large txt-black\">\n" +
    "                      Check your email\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"product-p-items__wrap\">\n" +
    "                    <div class=\"txt-large txt-black\">\n" +
    "                      click on the link account link\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                  <li class=\"product-p-items__wrap\">\n" +
    "                    <div class=\"txt-large txt-black\">\n" +
    "                      Success\n" +
    "                    </div>\n" +
    "                  </li>\n" +
    "                </ul>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  \n" +
    "    </div>\n" +
    "  \n" +
    "    <div class=\"section-box-silver\">\n" +
    "      <div class=\"section-box-silver__wrap\">\n" +
    "        <div class=\"container-lg--dashboard\">\n" +
    "          <div class=\"title__wrap txt-center\">\n" +
    "            <div class=\"title-first txt-blue-dark\">Late onset Alzheimer’s disease</div>\n" +
    "          </div>\n" +
    "          <div class=\"container-exs\">\n" +
    "            <div class=\"txt__wrap txt-center\">\n" +
    "              <div class=\"txt txt-black\">While you wait on your results learn more about late onset Alzheimer’s diease.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"section__wrap-exs\">\n" +
    "            <div class=\"container-flex container-flex--column-sm\">\n" +
    "              <div class=\"flex-column\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"img__wrap img--center-sm\">\n" +
    "                    <ng-include class=\"img img-middle--small\" src=\"'../assets/images/svg/head-medical-blue.svg'\"></ng-include>\n" +
    "                  </div>\n" +
    "                  <div class=\"title__wrap\">\n" +
    "                    <h3 class=\"txt-blue-dark\">\n" +
    "                      What is dementia?\n" +
    "                    </h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <div class=\"txt-middle txt-black\">\n" +
    "                      Dementia is the result of a malfunction of nerve cells in the brain, which in turn lose their connections with other neurons, ultimately resulting in a disconnect between parts of the brain that used to work together.  These malfunctions are the result of damage to or changes in the brain. Together your genetics, other medical conditions, and lifestyle and environmental factors influence your brain health and function, and are thus associated with your risk of developing dementia.\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"img__wrap img--center-sm\">\n" +
    "                    <ng-include class=\"img img-middle--small\" src=\"'../assets/images/svg/molecule.svg'\"></ng-include>\n" +
    "                  </div>\n" +
    "                  <div class=\"title__wrap\">\n" +
    "                    <h3 class=\"txt-blue-dark\">\n" +
    "                      What is Alzheimer’s disease?\n" +
    "                    </h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <div class=\"txt-middle txt-black\">\n" +
    "                      Late-onset Alzheimer’s disease is a progressive form of dementia that is characterized by tau and plaques in the brain that result in brain cell death over time. Scientists believe that for most people the development of late-onset Alzheimer’s disease is caused by a combina.\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"img__wrap img--center-sm\">\n" +
    "                    <ng-include class=\"img img-middle--small\" src=\"'../assets/images/svg/dna-molecule.svg'\"></ng-include>\n" +
    "                  </div>\n" +
    "                  <div class=\"title__wrap\">\n" +
    "                    <h3 class=\"txt-blue-dark\">\n" +
    "                      The latest science\n" +
    "                    </h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <div class=\"txt-middle txt-black\">\n" +
    "                      Once Helix laboratories have analyzed your saliva sample and sequenced your DNA, they identify your SNP’s specific to the ApoE test (rs429358 and rs7412). This information is then transferred to ADx Healthcare and interpreted to develop your personalized Alzheimer’s ApoE Genetic Test report.\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"section__wrap-md\">\n" +
    "            <div class=\"container-flex container-flex--column-sm\">\n" +
    "              <div class=\"flex-column\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"img--center-sm\">\n" +
    "                    <ng-include src=\"'./assets/images/svg/notebook-and-pen.svg'\" class=\"img-middle--md\"></ng-include>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column-2\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"txt--space-top-sm\">\n" +
    "                    <h3 class=\"txt-blue-dark\">Why learn if you are at risk for Alzheimer’s disease?</h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt-middle txt-black\">Research indicates that lifestyle behaviors across your life span may contribute to the development of Alzheimer’s disease. Also, changes occur in the brain up to two decades before the first symptoms develop. Because Alzheimer’s is believed to be caused by a combination of environmental, genetic, medical, and lifestyle factors, learning your genetic risk can help you determine how aggressively you need to make lifestyle changes to reduce your risk.\n" +
    "                \n" +
    "                      The earlier in your life that you commit to living a cognitively healthy lifestyle, the more you can reduce your risk for or delay the development of Alzheimer’s disease.</p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"section__wrap-md\">\n" +
    "            <div class=\"container-flex container-flex--column-reverse-sm\">\n" +
    "              <div class=\"flex-column-2\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"txt--space-top-sm\">\n" +
    "                    <h3 class=\"txt-blue-dark\">\n" +
    "                      Symptoms and diagnoses\n" +
    "                    </h3>\n" +
    "                  </div>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <div class=\"txt-middle txt-black\">\n" +
    "                      Late-onset Alzheimer’s disease is a progressive form of dementia that is characterized by tau and plaques in the brain that result in brain cell death over time. Scientists believe that for most people the development of late-onset Alzheimer’s disease is caused by a combina\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"title__wrap\">\n" +
    "                    <ul class=\"science-p-list science-p-list--not-padding\">\n" +
    "                      <li class=\"science-p-list__items\">\n" +
    "                        <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                          <p class=\"txt txt-black\">Memory loss</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                        <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                          <p class=\"txt txt-black\">Behavioral changes such as agitation, delusions, and hallucinations</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                        <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                          <p class=\"txt txt-black\">Loss of interest in previously enjoyed activities</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                        <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                          <p class=\"txt txt-black\">Difficulty with problem solving</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                        <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                          <p class=\"txt txt-black\">Difficulty performing tasks that were previously easy</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                        <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                          <p class=\"txt txt-black\">Personality changes</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                        <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                          <p class=\"txt txt-black\">Loss of social skills and tendency to withdraw or isolate self</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                        <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                          <p class=\"txt txt-black\">Language problems including forgetting names of familiar objects</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                    </ul>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"flex-column\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"img--center-sm\">\n" +
    "                    <ng-include class=\"human-brain-cloud--bgc-white img-middle--md\" src=\"'./assets/images/svg/human-brain-cloud.svg'\"></ng-include>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  \n" +
    "  </div>\n" +
    "  \n" +
    "");
}]);

angular.module("components/results/pages/result-p1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/pages/result-p1.tpl.html",
    "<div class=\"pre-result\" ng-if=\"!showResult\">\n" +
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
    "            <img class=\"pre-result-head-img__innner\" src=\"./assets/images/results-page/tablet-rounded.png\" />\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  \n" +
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
    "                  Learning your ApoE -related genetic risk can be paired with your age, gender, medical health and lifestyle habits to help assess your overall Alzheimer’s disease risk, and identify areas where you may be able to take action to reduce your risk or delay the onset of Alzheimer’s disease.\n" +
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
    "                  Knowing your Alzheimer’s disease risk can help you decide how aggressively you want to make lifestyle changes that can potentially improve your cognitive health.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      \n" +
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
    "              <button type=\"submit\" ui-sref=\"master_signedin.results.p1\" type=\"submit\" class=\"bt-round bt-round--large bt-round--blue-dark\" ng-disabled=\"consentResults.$invalid\" ng-click=\"showResults()\">View results</button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    \n" +
    "    \n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--end section second with boxes-->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"result\" ng-if=\"showResult\">\n" +
    "  <div class=\"result-head result-head--p1\">\n" +
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap anim-content-transition\">\n" +
    "        <div class=\"txt txt-bold txt-gray\">Results</div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
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
    "          <div class=\"txt txt-black anim-content-transition\">\n" +
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
    "      <div class=\"result-section-first__img hide-xs-mobile anim-content-transition\">\n" +
    "        <ng-include src=\"'./assets/images/svg/e2-e4.svg'\"></ng-include>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap anim-content-transition\">\n" +
    "        <h1 class=\"txt-blue-dark\">{{ user.first_name }},</h1>\n" +
    "        <h3 class=\"txt-blue-dark txt-padding-top\">Your ApoE Genotype is &lte2/e4&gt.</h3>\n" +
    "      </div>\n" +
    "      <div class=\"txt__wrap anim-content-transition\">\n" +
    "        <div class=\"txt txt-black\">\n" +
    "          Your ApoE genotype indicates that you are at a higher genetic risk for Alzheimer’s disease compared to the average population. It is important to note that although ApoE genotype is a powerful genetic risk factor for Alzheimer’s disease, the test itself is not diagnostic of the disease. Having a high-risk genotype (at least one copy of ApoE-e4) does not guarantee development of the disease, and having a low-risk genotype (having the ApoE e2/e2 genotype) does not exclude the possibility of developing the disease. Furthermore, as noted above, other factors modify the risk, including both genetic and non-genetic factors. 1-17, 20-49\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--section first end-->\n" +
    "  \n" +
    "  <!--section-seonond-->\n" +
    "  <div class=\"section__wrap section__wrap--small-pad-top clear-both\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <!--chart-->\n" +
    "      <div class=\"result-chart__wrap\">\n" +
    "        <div class=\"results-p1-tabs\">\n" +
    "          <div class=\"results-p1-tabs__wrap\">\n" +
    "            <uib-tabset active=\"activeTabGender\"  type=\"pills\" class=\"tabs\">\n" +
    "              <uib-tab  index=\"0\">\n" +
    "                <uib-tab-heading class=\"btn-tabs\">Male</uib-tab-heading>\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h3 class=\"txt-blue-dark txt-center\">Lifetime Risk (%) for Alzheimer’s disease by Age and ApoE Genotype</h3>\n" +
    "                </div>\n" +
    "                <div class=\"chart__wrap\">\n" +
    "                  <ng-include class=\"img hide-mobile\" src=\"'./assets/images/charts/chart-bar-male.svg'\"></ng-include>\n" +
    "                  <ng-include class=\"img hide-desktop\" src=\"'./assets/images/charts/chart-bar-female-mobile.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "              </uib-tab>\n" +
    "              <uib-tab index=\"1\">\n" +
    "                <uib-tab-heading class=\"btn-tabs\">Female</uib-tab-heading>\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h3 class=\"txt-blue-dark txt-center\">Lifetime Risk (%) for Alzheimer’s disease by Age and ApoE Genotype</h3>\n" +
    "                </div>\n" +
    "                <div class=\"chart__wrap\">\n" +
    "                  <ng-include class=\"img hide-mobile\" src=\"'./assets/images/charts/chart-bar-female.svg'\"></ng-include>\n" +
    "                  <ng-include class=\"img hide-desktop\" src=\"'./assets/images/charts/chart-bar-female-mobile.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "              </uib-tab>\n" +
    "            </uib-tabset>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!--charts end-->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--section second end-->\n" +
    "  \n" +
    "  <!--section third-->\n" +
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
    "            <div class=\"txt-small txt-black\">*Adapted from Genin et al.56 Listed rates are the average of Rochester and PAQUID incidence rates. Figures are rounded for simplicity and 95% confidence intervals are not show. Please see original publication for complete details.</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--section third end -->\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver txt-center\">\n" +
    "      <a ui-sref=\"master_signedin.results.p2\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
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
    "          <a href=\"\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a ng-href=\"{{ results[0].report }}\" class=\"download__wrap\">\n" +
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
    "         <h2 class=\"txt-blue-dark anim-content-transition\">About Alzheimer’s disease</h2>\n" +
    "       </div>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <div class=\"txt txt-black anim-content-transition\">\n" +
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
    "      <div class=\"title__wrap anim-content-transition\">\n" +
    "        <h3 class=\"txt-blue-dark txt-center\">ApoE Status of US Population</h3>\n" +
    "      </div>\n" +
    "      <div class=\"chart__wrap anim-content-transition\">\n" +
    "        <ng-include class=\"img hide-mobile\" src=\"'./assets/images/charts/chart-donut-1.svg'\"></ng-include>\n" +
    "        <ng-include class=\"img hide-desktop\" src=\"'./assets/images/charts/chart-donut-mobile.svg'\"></ng-include>\n" +
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
    "              <h3 class=\"txt-blue-dark\">How it’s inherited</h3>\n" +
    "              <div class=\"txt-padding-top\">\n" +
    "                <p class=\"txt-middle txt-black\">\n" +
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
    "              <h3 class=\"txt-blue-dark\">Limitations</h3>\n" +
    "              <div class=\"txt-padding-top\">\n" +
    "                <p class=\"txt-middle txt-black\">\n" +
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
    "            <h3 class=\"txt-blue-dark\">Late onset test</h3>\n" +
    "            <div class=\"box-txt__wrap\">\n" +
    "              <ul>\n" +
    "                <li class=\"txt--indent-small\"><p class=\"txt-middle txt-black\">Does not include all possible variants or genes associated with late-onset Alzheimer's disease.\n" +
    "                </p></li>\n" +
    "                <li class=\"txt--indent-small\"><p class=\"txt-middle txt-black\">Does not include all possible variants or genes associated with late-onset Alzheimer's disease.\n" +
    "                </p></li>\n" +
    "                <li class=\"txt--indent-small\"><p class=\"txt-middle txt-black\">Does not determine a person's full APOE genotype.\n" +
    "                </p></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"box-half-column box-shadow\">\n" +
    "            <div class=\"txt-wrap__border\">\n" +
    "              <h3 class=\"txt-blue-dark\">This test does not diagnose Alzheimer's disease or any other health conditions.</h3>\n" +
    "            </div>\n" +
    "            <div class=\"box-txt__wrap txt--indent-small\">\n" +
    "              <p class=\"txt-middle txt-black\">Please talk to a healthcare professional if this condition runs in your family, you think you might have this condition, or you have any concerns about your results.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"txt--indent-small\">\n" +
    "              <div class=\"txt--indent-small\"><a ui-sref=\"master.science\" class=\"txt-middle txt-blue link-underline\">See Scientific Details</a></div>\n" +
    "              <div class=\"txt--indent-small\"><a ui-sref=\"master.FAQ\" class=\"txt-middle txt-blue link-underline\">See Frequently Asked Questions</a></div>\n" +
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
    "          <a ui-sref=\"master_signedin.results.p1\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"master_signedin.results.p3\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
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
    "          <a href=\"\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a ng-href=\"{{ results[0].report }}\" class=\"download__wrap\">\n" +
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
    "          <h2 class=\"txt-blue-dark anim-content-transition\">Lifestyle & other factors</h2>\n" +
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
    "   <div class=\"section__wrap-sm\">\n" +
    "     <div class=\"container-lg--dashboard container-lg--dashboard-not-space-sm\">\n" +
    "       <div class=\"row\">\n" +
    "         <div class=\"container-flex\">\n" +
    "           <div class=\"flex-column-tabs flex-column-tabs--hide-sm\">\n" +
    "             <div class=\"boxes__wrap boxes__wrap--padding-top anim-content-transition\">\n" +
    "               <div class=\"box-shadow box-shadow--tabs\">\n" +
    "                 <ul class=\"box__wrap\">\n" +
    "                   <li class=\"box__item-link\">\n" +
    "                     <a href ng-click=\"setTab(1)\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Sleep</h3>\n" +
    "                       <div class=\"box-tab-image\">\n" +
    "                         <img class=\"img\" src=\"./assets/images/results-page/month-and-stars.png\" alt=\"\">\n" +
    "                       </div>\n" +
    "                     </a>\n" +
    "                   </li>\n" +
    "                   <li class=\"box__item-link\">\n" +
    "                     <a href ng-click=\"setTab(2)\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Exercise</h3>\n" +
    "                       <div class=\"box-tab-image\">\n" +
    "                         <img class=\"img\" src=\"./assets/images/results-page/heart-orange.png\" alt=\"\">\n" +
    "                       </div>\n" +
    "                     </a>\n" +
    "                   </li>\n" +
    "                   <li class=\"box__item-link\">\n" +
    "                     <a href ng-click=\"setTab(3)\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Stress</h3>\n" +
    "                       <div class=\"box-tab-image\">\n" +
    "                         <img class=\"img\" src=\"./assets/images/results-page/horse-blue.png\" alt=\"\">\n" +
    "                       </div>\n" +
    "                     </a>\n" +
    "                   </li>\n" +
    "                   <li class=\"box__item-link\">\n" +
    "                     <a href ng-click=\"setTab(4)\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Nutrition</h3>\n" +
    "                       <div class=\"box-tab-image\">\n" +
    "                         <img class=\"img\" src=\"./assets/images/results-page/cake-blue-dark.png\" alt=\"\">\n" +
    "                       </div>\n" +
    "                     </a>\n" +
    "                   </li>\n" +
    "                   <li class=\"box__item-link\">\n" +
    "                     <a href ng-click=\"setTab(5)\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Brain Stimulation</h3>\n" +
    "                       <div class=\"box-tab-image\">\n" +
    "                         <img class=\"img\" src=\"./assets/images/results-page/brain-orange.png\" alt=\"\">\n" +
    "                       </div>\n" +
    "                     </a>\n" +
    "                   </li>\n" +
    "                 </ul>\n" +
    "               </div>\n" +
    "             </div>\n" +
    "           </div>\n" +
    "  \n" +
    "           <div class=\"flex-column-tabs-body\">\n" +
    "             <div class=\"boxes__wrap boxes-wrap--results-p3 boxes__wrap--padding-top anim-content-transition\">\n" +
    "               <div class=\"box-shadow box-shadow--tabs\">\n" +
    "                 <div class=\"box-content\">\n" +
    "                   <div class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(1)}\">\n" +
    "                     <div class=\"title__wrap\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Sleep</h3>\n" +
    "                     </div>\n" +
    "                     <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                       <img class=\"img\" src=\"./assets/images/results-page/month-and-stars.png\" alt=\"\">\n" +
    "                     </div>\n" +
    "                     <div class=\"txt__wrap\">\n" +
    "                       <h3 class=\"txt-blue txt-center-sm\">Poor sleep may be both a cause and a symptom of Alzheimer’s disease. </h3>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           Poor sleep may be both a cause and a symptom of Alzheimer’s disease. Research indicates that 15% of Alzheimer’s cases may be attributable to disrupted sleep (1)  Research also indicates that older adults with disturbed sleep experience a faster decline in cognition than those who sleep well (2). Sleep is an opportunity for the body to repair and restore itself.\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           Overall, it is recommended that you aim to sleep about 7 to 8 hours nightly.  Ideally you should go to bed and rise at a similar time each day, as this will help set your body’s internal clock and lead to better sleep habits.  Also, try to limit your exposure to electronics, including televisions, cell phones, computer screens, and back-lit reading devices such as a Kindle, for at least one hour prior to bed.  The blue light emitted from these devices can impair your body’s natural ability to produce melatonin, and thus disrupt your sleep cycle (8). Also, if you often wake up feeling groggy, even after a full 7 to 8 hours of sleep each night, your partner complains of your snoring or you wake up with a sore throat frequently, share this information with your healthcare provider.  They can help identify if you may be a candidate for a sleep study.  §Sleep Apnea, or disordered breathing during sleep, increases the risk for stroke, heart disease, and cognitive disorders.16-20\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                     </div>\n" +
    "                     <a href=\"#section-2\" smooth-scroll class=\"box-body-anchor hide-desktop\">\n" +
    "                       <div class=\"box-body-anchor__wrap\">\n" +
    "                          <p class=\"txt txt-static txt-blue-dark\">Read more</p>\n" +
    "                         <div class=\"box-body-anchor__arrow-down\">\n" +
    "                           <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n" +
    "                         </div>\n" +
    "                       </div>\n" +
    "                     </a>\n" +
    "                   </div>\n" +
    "                   <div id=\"section-2\" class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(2)}\">\n" +
    "                     <div class=\"title__wrap\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Exercise</h3>\n" +
    "                     </div>\n" +
    "                     <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                       <img class=\"img\" src=\"./assets/images/results-page/heart-orange.png\" alt=\"\">\n" +
    "                     </div>\n" +
    "                     <div class=\"txt__wrap\">\n" +
    "                       <h3 class=\"txt-blue txt-center-sm\">Aerobic exercise benefits the brain both directly and indirectly. </h3>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           First, when you exercise, your muscles use glucose for fuel, which causes your blood glucose levels to go down. This results in lower blood glucose and insulin levels, which reduces your risk for Alzheimer’s disease.\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt  txt-black\">\n" +
    "                           Secondly, regular aerobic exercise reduces inflammation levels in the body, which is another important aspect of cognitive health.1,2\n" +
    "                           Aerobic exercise also stimulates the release of growth factors, which are chemicals in the brain that stimulate the growth of new blood vessels in the brain and promote the health and survival of brain cells.1\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           Finally, aerobic exercise also improves mood and sleep and reduces stress and anxiety. Depression, anxiety, stress, and poor sleep habits are all associated with increased risk of cognitive decline and Alzheimer’s disease.\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           You should always consult with your healthcare provider before beginning a new exercise program.\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                     </div>\n" +
    "                     <a href=\"#section-3\" smooth-scroll class=\"box-body-anchor hide-desktop\">\n" +
    "                       <div class=\"box-body-anchor__wrap\">\n" +
    "                         <p class=\"txt txt-static txt-blue-dark\">Read more</p>\n" +
    "                         <div class=\"box-body-anchor__arrow-down\">\n" +
    "                           <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n" +
    "                         </div>\n" +
    "                       </div>\n" +
    "                     </a>\n" +
    "                   </div>\n" +
    "                   <div id=\"section-3\" class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(3)}\">\n" +
    "                     <div class=\"title__wrap\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Stress</h3>\n" +
    "                     </div>\n" +
    "                     <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                       <img class=\"img\" src=\"./assets/images/results-page/dna-icon-orange.png\" alt=\"\">\n" +
    "                     </div>\n" +
    "                     <div class=\"txt__wrap\">\n" +
    "                       <h3 class=\"txt-blue txt-center-sm\">Brain Impact of Stress</h3>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           The mechanisms for how stress impacts the brain were evaluated in a study where young mice were injected for seven days with a glucocorticoid similar to the body’s stress hormones (dexamethasone). Beta-amyloid protein levels in the mice’s brains increased by 60 percent, and the levels of another protein, called tau, also increased. Plaques form when beta-amyloid proteins mass together, and tau accumulation eventually leads to the formation of tangles in the brain, which are the two hallmark brain lesions of Alzheimer’s disease.2\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                       <div class=\"txt--indent\">\n" +
    "                         <a href=\"\" class=\"txt txt-blue link-underline\">Read more about stress</a>\n" +
    "                       </div>\n" +
    "                     </div>\n" +
    "                     <a href=\"#section-4\" smooth-scroll class=\"box-body-anchor hide-desktop\">\n" +
    "                       <div class=\"box-body-anchor__wrap\">\n" +
    "                         <p class=\"txt txt-static txt-blue-dark\">Read more</p>\n" +
    "                         <div class=\"box-body-anchor__arrow-down\">\n" +
    "                           <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n" +
    "                         </div>\n" +
    "                       </div>\n" +
    "                     </a>\n" +
    "                   </div>\n" +
    "        \n" +
    "                   <div id=\"section-4\" class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(4)}\">\n" +
    "                     <div class=\"title__wrap\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Nutrition</h3>\n" +
    "                     </div>\n" +
    "                     <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                       <img class=\"img\" src=\"./assets/images/results-page/dna-icon-orange.png\" alt=\"\">\n" +
    "                     </div>\n" +
    "                     <div class=\"txt__wrap\">\n" +
    "                       <h3 class=\"txt-blue txt-center-sm\">Researchers continue to investigate the relationship between Alzheimer’s disease and diet.</h3>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           Tracking eating habits in individuals can be difficult and not everyone responds well to the same diet.  Research has found some benefit for some people on a few different diets, as well as a relationship between intake of certain foods and nutrients and cognitive health.\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           The Mediterranean Diet is one of the diets that has been associated with decreased risk of dementia, mild cognitive impairment, and Alzheimer’s disease (1-6).  The Mediterranean Diet focuses on:\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <ul class=\"item-number-wrap\">\n" +
    "                           <li class=\"item-number\">\n" +
    "                             <p class=\"txt txt-black\">Intake of fruits</p>\n" +
    "                           </li>\n" +
    "                           <li class=\"item-number\">\n" +
    "                             <p class=\"txt txt-black\">Intake of vegetables</p>\n" +
    "                           </li>\n" +
    "                           <li class=\"item-number\">\n" +
    "                             <p class=\"txt txt-black\">Intake of legumes</p>\n" +
    "                           </li>\n" +
    "                           <li class=\"item-number\">\n" +
    "                             <p class=\"txt txt-black\">Intake of grains/cereals</p>\n" +
    "                           </li>\n" +
    "                           <li class=\"item-number\">\n" +
    "                             <p class=\"txt txt-black\"> Intake of unsaturated fatty acids (primarily olive oil)</p>\n" +
    "                           </li>\n" +
    "                           <li class=\"item-number\">\n" +
    "                             <p class=\"txt txt-black\">Moderate to high intake of fish</p>\n" +
    "                           </li>\n" +
    "                           <li class=\"item-number\">\n" +
    "                             <p class=\"txt txt-black\">Low to moderate intake of dairy products\n" +
    "                             </p>\n" +
    "                           </li>\n" +
    "                           <li class=\"item-number\">\n" +
    "                             <p class=\"txt txt-black\">Low intake of meat and saturated fatty acids and\n" +
    "                             </p>\n" +
    "                           </li>\n" +
    "                           <li class=\"item-number\">\n" +
    "                             <p class=\"txt txt-black\">Regular but moderate intake of alcohol\n" +
    "                             </p>\n" +
    "                           </li>\n" +
    "                         </ul>\n" +
    "                       </div>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           Researchers have also evaluated a diet called the Mediterranean-DASH Intervention for Neurodegenerative Delay (MIND) diet, which is a combination of the Mediterranean diet and the Dietary Approaches to Stop Hypertension (DASH) diet.  The goal of the MIND diet is to see how combining the concepts of heart healthy eating (DASH diet) and the concepts of the Mediterranean diet together impact cognitive function.\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                     </div>\n" +
    "                     <a href=\"#section-5\" smooth-scroll class=\"box-body-anchor hide-desktop\">\n" +
    "                       <div class=\"box-body-anchor__wrap\">\n" +
    "                         <p class=\"txt txt-static txt-blue-dark\">Read more</p>\n" +
    "                         <div class=\"box-body-anchor__arrow-down\">\n" +
    "                           <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n" +
    "                         </div>\n" +
    "                       </div>\n" +
    "                     </a>\n" +
    "                   </div>\n" +
    "        \n" +
    "                   <div id=\"section-5\" class=\"hide-tabs hide-tabs--show-sm\" ng-class=\"{'showTab': isSet(5)}\">\n" +
    "                     <div class=\"title__wrap\">\n" +
    "                       <h3 class=\"txt-blue-dark txt-center\">Brain Stimulation</h3>\n" +
    "                     </div>\n" +
    "                     <div class=\"box-image__wrap box-image__wrap-padding-top\">\n" +
    "                       <img class=\"img\" src=\"./assets/images/results-page/dna-icon-orange.png\" alt=\"\">\n" +
    "                     </div>\n" +
    "                     <div class=\"txt__wrap\">\n" +
    "                       <h3 class=\"txt-blue txt-center-sm\">Aerobic exercise benefits the brain both directly and indirectly.</h3>\n" +
    "                       <div class=\"txt--indent-small\">\n" +
    "                         <p class=\"txt txt-black\">\n" +
    "                           Neuroplasticity, i.e. the brain’s ability to reorganize synaptic connections in response to learning, experience or injury, occurs across the human lifespan. Educational attainment7-9 and a complex and challenging career7,8, 10 are associated with decreased rates of dementia.  Lifelong cognitive stimulation is critical for the health and function of the brain and can occur through many means, including social interaction and novel experiences (2).  Even simple experiences such as taking a new route when driving can be beneficial for cognitive health.8 Other examples include puzzles, discussion groups, reading, computer use, game playing, playing musical instruments12-16 and learning a new language,11 all of which are associated with improvement of “cognitive reserve.”\n" +
    "                         </p>\n" +
    "                       </div>\n" +
    "                     </div>\n" +
    "                   </div>\n" +
    "      \n" +
    "                 </div>\n" +
    "               </div>\n" +
    "             </div>\n" +
    "           </div>\n" +
    "           \n" +
    "         </div>\n" +
    "       </div>\n" +
    "     </div>\n" +
    "   </div>\n" +
    "  <!--end section second-->\n" +
    "  \n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"master_signedin.results.p2\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
    "        </div>\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"master_signedin.results.p4\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--dna bt-round-right-icon bt-round-right-icon--arrow\">Next step</a>\n" +
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
    "    <div class=\"result-head__over\">\n" +
    "      <div class=\"txt-rubric__wrap\">\n" +
    "        <div class=\"txt txt-bold txt-gray anim-content-transition\">Next steps</div>\n" +
    "      </div>\n" +
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a hng-href=\"{{ results[0].report }}\" class=\"download__wrap\">\n" +
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
    "      <h3 class=\"txt-blue-dark anim-content-transition\">Talk to Genetic counselor</h3>\n" +
    "      <div class=\"sub-header-txt__wrap anim-content-transition\">\n" +
    "        <p class=\"txt-middle txt-black\">Do you have questions about your results or how to use them to make health decisions? Do you have questions about how to discuss your results with you family?  Our genetics counselors are available to help answer your questions.</p>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap anim-content-transition\">\n" +
    "        <h3 class=\"txt-blue-dark\">Talking to a doctor</h3>\n" +
    "      </div>\n" +
    "      <div class=\"sub-header-txt__wrap anim-content-transition\">\n" +
    "        <p class=\"txt-middle txt-black\">If you are worried about memory loss, please make an appointment with your healthcare provider to assess your cognitive health. Also, you may want to discuss your concerns about your family history of Alzheimer’s disease or another dementia type if there is one in your family. Overall, your primary healthcare provider knows your overall health best.  It is good to check-in with them to discuss your ApoE test results so your ApoE genetic data can be paired with information about your other medical conditions.  Together you and your healthcare provider can develop a plan to modify your lifestyle and environmental factors to best optimize your cognitive health.  You should always consult a healthcare provider before making major lifestyle changes.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"txt--indent-small\">\n" +
    "        <a href=\"\" class=\"txt txt-blue link-underline\">Download your results</a>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark\">Sharing with Family members</h3>\n" +
    "      </div>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <p class=\"txt-middle txt-black\">\n" +
    "          Having the social support of your loved ones can help you as you begin implementing new lifestyle behaviors into your routine. You can also print a copy of your results if you want to share them with family or your doctor. Having support can be very helpful when making behavior changes.  Also, your relatives or friends may benefit from hearing about your experience, and may wish to consider ApoE testing themselves.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"txt--indent-small\">\n" +
    "        <a ui-sref=\"master_signedin.results.sharing\" class=\"txt txt-blue link-underline\">Learn about sharing with family</a>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark\">\n" +
    "          Science\n" +
    "        </h3>\n" +
    "      </div>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <p class=\"txt-middle txt-black\">Learn about the science behind the ApoE test.</p>\n" +
    "      </div>\n" +
    "      <div class=\"txt--indent-small\">\n" +
    "        <a ui-sref=\"master.science\" class=\"txt txt-blue link-underline\">Read more about science</a>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap\">\n" +
    "        <h3 class=\"txt-blue-dark\">\n" +
    "          General questions\n" +
    "        </h3>\n" +
    "      </div>\n" +
    "      <div class=\"sub-header-txt__wrap\">\n" +
    "        <p class=\"txt-middle txt-black\">Read about topics that may be helpful to answer your initial questions.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"txt--indent-small\">\n" +
    "        <a ui-sref=\"master.FAQ\" class=\"txt txt-blue link-underline\">Go to general questions page</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"section-bgc--silver\">\n" +
    "      <div class=\"container-md container-md-button-flex\">\n" +
    "        <div class=\"button__wrap--step\">\n" +
    "          <a ui-sref=\"master_signedin.results.p3\" class=\"bt-round bt-round--blue-dark bt-round-left-icon bt-round-left-icon--arrow bt-round-right-icon bt-round-right-icon--dna\">Previous</a>\n" +
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
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
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
    "  \n" +
    "  <!--section first-->\n" +
    "  <div>\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <!--section dropdown txt-->\n" +
    "      <div class=\"section-dropdown-txt__wrap section-dropdown-txt__wrap--border-bottom\" uib-accordion close-others=\"false\">\n" +
    "    \n" +
    "        <!--dropdown content first-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content anim-content-transition\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Does this result mean I am not at risk for developing Alzheimer’s disease?</h3>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt-middle txt-black\">\n" +
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
    "        <div uib-accordion-group class=\"dropdown-txt__content anim-content-transition\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">Who will see my test results?</h3>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <div class=\"txt-middle txt-black\">\n" +
    "              Your test results are delivered privately to you.  It is up to you whom you share them with after that.  However, we encourage you to discuss them with your primary health care provider or one of our genetics counselors if you have any questions about your results or how you can take action to reduce your Alzheimer’s risk.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        <!--end dropdown content second-->\n" +
    "    \n" +
    "        <!--dropdown content third-->\n" +
    "        <div uib-accordion-group class=\"dropdown-txt__content anim-content-transition\">\n" +
    "          <div uib-accordion-heading>\n" +
    "            <div class=\"accordion-heading-wrap\">\n" +
    "              <div class=\"cross-button-open__wrap\">\n" +
    "                <div class=\"cross-button-open\"></div>\n" +
    "              </div>\n" +
    "              <div class=\"content-title__wrap\">\n" +
    "                <h3 class=\"txt-blue-dark\">What else can cause late-onset Alzheimer’s beside the genetics?</h3>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"content-txt__wrap\">\n" +
    "            <p class=\"txt-middle txt-black\">\n" +
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
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
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
    "          <h2 class=\"txt-blue-dark anim-content-transition\">Science</h2>\n" +
    "        </div>\n" +
    "        <div class=\"title__wrap\">\n" +
    "          <p class=\"txt txt-black anim-content-transition\">\n" +
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
    "                <h3 class=\"txt-blue-dark\">What is a DNA?</h3>\n" +
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
    "      <div class=\"result-head__download-button anim-content-transition\">\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
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
    "          Your genetics, lifestyle, environment, other medical conditions, and age all play a role in your Alzheimer’s disease risk. Your lifestyle and environmental risk factors can be reduced by implementing brain healthy behavior changes, which may also reduce the risk if you have by any other medical factors influencing your Alzheimer’s risk.  Many brain healthy behaviors are also good for your heart health and inflammation.\n" +
    "        </p>\n" +
    "        <div class=\"txt--indent\">\n" +
    "          <p class=\"txt-middle txt-black\">\n" +
    "            Having a copy of the ApoE e4 variant does not guarantee that you will develop Alzheimer’s disease, and not carrying a copy does not guarantee that you won’t develop Alzheimer’s disease. The results of this test do not diagnose Alzheimer’s disease or any other medical condition.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"img__wrap txt-center\">\n" +
    "        <ng-include class=\"img img-large\" src=\"'./assets/images/svg/sharing-family.svg'\"></ng-include>\n" +
    "      </div>\n" +
    "      <div class=\"title__wrap anim-content-transition\">\n" +
    "        <h3 class=\"txt-blue-dark\">It is possible for your relatives to have a different ApoE variant than you?\n" +
    "        </h3>\n" +
    "      </div>\n" +
    "      <div class=\"txt__wrap\">\n" +
    "        <p class=\"txt-middle txt-black\">\n" +
    "          Whether you are male or female, you are equally likely to pass on a copy of ApoE e4 or inherit one.\n" +
    "          If you carry a single copy of ApoE-e4, there is a 50% chance your siblings and children carry one also. You can make lifestyle changes today to begin reducing your risk for Alzheimer’s disease or slowing the progression of memory decline.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  <!--end section-second-->\n" +
    "  \n" +
    "  <div class=\"section__wrap\">\n" +
    "    <div class=\"container-lg--dashboard\">\n" +
    "      <h2 class=\"txt-blue-dark txt-center\">You are not in this alone. ADx Healthcare provides\n" +
    "        genetics counselors to go over your report and\n" +
    "        answer any questions you have.\n" +
    "      </h2>\n" +
    "      <div class=\"button__wrap button--center\">\n" +
    "        <a href=\"\" class=\"bt-round bt-round--blue\">Download Reports</a>\n" +
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
    "          <a href=\"\" class=\"download__wrap\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"comments-button\"><i class=\"fa fa-comments comments-button__inner\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <span class=\"flex-column-2 hide-mobile\">\n" +
    "                <p class=\"txt txt-blue-dark txt-bold\">Contact genetic counselor</p>\n" +
    "              </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"result-button-head__wrap\">\n" +
    "          <a href=\"\" class=\"download__wrap\">\n" +
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
    "          <button class=\"bt-round bt-round--blue-dark\">View results</button>\n" +
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
    "                ADx is here to answer any questions you have about the test and your results. Contact us about scheduling a genetic counseling session now.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"button__wrap button--center\">\n" +
    "              <button class=\"bt-round bt-round--blue-dark\">View results</button>\n" +
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
    "              <button class=\"bt-round bt-round--blue\">View results</button>\n" +
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
    "              <button class=\"bt-round bt-round--orange\">View results</button>\n" +
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
    "          <h1 class=\"txt-blue-dark txt-center\">Current status on your DNA samples</h1>\n" +
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
    "                <p class=\"txt-small txt-center progressbar-txt-color\">A physician is determining if this test is appropriate for you</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[1], 'active--current': iconCurrent[1]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-pc-pointer\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Kit\n" +
    "                  Registered</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">You have successfully registered your sample collection kit</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[2], 'active--current': iconCurrent[2]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-forklift\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Manifest\n" +
    "                  Uploaded</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">Your sample has been received by the lab</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[3], 'active--current': iconCurrent[3]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-test-tubes\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">DNA Extraction\n" +
    "                  Complete</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">Your sample is currently being processed by the lab</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[4], 'active--current': iconCurrent[4]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-pc-dna\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold progressbar-txt-color txt-center\">Data Delivery\n" +
    "                  Complete</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">Helix genomics services is now providing variant data for your sample</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"status-progressbar-item\" ng-class=\"{'active': iconStatus[5], 'active--current': iconCurrent[5]}\">\n" +
    "              <div class=\"status-progressbar-inner\"></div>\n" +
    "              <div class=\"status-progressbar-icon icon-pc-dna\"></div>\n" +
    "              <div class=\"status-progressbar-txt\">\n" +
    "                <p class=\"txt txt-bold txt-center progressbar-txt-color\">Results ready\n" +
    "                  for view</p>\n" +
    "                <p class=\"txt-small txt-center progressbar-txt-color\">Follow the instructions below to view your results</p>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <!--end  progress-bar-->\n" +
    "        <div class=\"title__wrap txt-center anim-content-transition\">\n" +
    "          <div class=\"container-xs-button-flex\">\n" +
    "            <div class=\"test-ok active\"></div>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'physician_review'\">\n" +
    "              We will mail out your collection kit once the review process is completed\n" +
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
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'dna_delivery_completed'\">\n" +
    "              We are currently interpreting the results to generate your report\n" +
    "            </h4>\n" +
    "            <h4 class=\"txt-blue-dark align-vertical--center anim-content-transition\" ng-if=\"seqStatus === 'result_ready'\">\n" +
    "              Your results are ready\n" +
    "            </h4>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--\n" +
    "        <div class=\"button__wrap--large-top button--center anim-content-transition\">\n" +
    "          <button class=\"button-border-rounded button-border-rounded--long button-border-rounded--blue-dark\">Your results will be ready in 2-3 weeks</button>\n" +
    "        </div>\n" +
    "        <div class=\"txt--indent txt-wrap-under-button anim-content-transition\">\n" +
    "          <p class=\"txt-small txt-black  txt-center anim-content-transition\" ng-if=\"seqStatus === 'physician_review'\">\n" +
    "              We will mail out your collection kit once the review process is completed.\n" +
    "          </p>\n" +
    "          <p class=\"txt-small txt-black  txt-center anim-content-transition\" ng-if=\"seqStatus === 'kit_registered'\">\n" +
    "              Make sure to mail back the collection kit to start the sequencing process.\n" +
    "          </p>\n" +
    "          <p class=\"txt-small txt-black  txt-center anim-content-transition\" ng-if=\"seqStatus === 'manifest_uploaded'\">\n" +
    "              We are currently unpacking to start the sequencing process.\n" +
    "          </p>\n" +
    "          <p class=\"txt-small txt-black  txt-center anim-content-transition\" ng-if=\"seqStatus === 'dna_extraction_completed'\">\n" +
    "              We are currently extracting DNA from your sample.\n" +
    "          </p>\n" +
    "          <p class=\"txt-small txt-black  txt-center anim-content-transition\" ng-if=\"seqStatus === 'dna_delivery_completed'\">\n" +
    "              We are currently interpreting the results to generate your report.\n" +
    "          </p>\n" +
    "          <p class=\"txt-small txt-black  txt-center anim-content-transition\" ng-if=\"seqStatus === 'result_ready'\">\n" +
    "              Your DNA sample test results are now ready.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"section-box-silver\">\n" +
    "    <div class=\"section-box-silver__wrap\">\n" +
    "      <div class=\"container-lg--dashboard\">\n" +
    "        <div class=\"title__wrap txt-center\">\n" +
    "          <div class=\"title-first txt-blue-dark\">Late onset Alzheimer’s disease</div>\n" +
    "        </div>\n" +
    "        <div class=\"container-exs\">\n" +
    "          <div class=\"txt__wrap txt-center\">\n" +
    "            <div class=\"txt txt-black\">While you wait on your results learn more about late onset Alzheimer’s diease.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"section__wrap-exs\">\n" +
    "          <div class=\"container-flex container-flex--column-sm\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"img__wrap img--center-sm\">\n" +
    "                  <ng-include class=\"img img-middle--small\" src=\"'../assets/images/svg/head-medical-blue.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h3 class=\"txt-blue-dark\">\n" +
    "                    What is dementia?\n" +
    "                  </h3>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <div class=\"txt-middle txt-black\">\n" +
    "                    Dementia is the result of a malfunction of nerve cells in the brain, which in turn lose their connections with other neurons, ultimately resulting in a disconnect between parts of the brain that used to work together.  These malfunctions are the result of damage to or changes in the brain. Together your genetics, other medical conditions, and lifestyle and environmental factors influence your brain health and function, and are thus associated with your risk of developing dementia.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"img__wrap img--center-sm\">\n" +
    "                  <ng-include class=\"img img-middle--small\" src=\"'../assets/images/svg/molecule.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h3 class=\"txt-blue-dark\">\n" +
    "                    What is Alzheimer’s disease?\n" +
    "                  </h3>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <div class=\"txt-middle txt-black\">\n" +
    "                    Late-onset Alzheimer’s disease is a progressive form of dementia that is characterized by tau and plaques in the brain that result in brain cell death over time. Scientists believe that for most people the development of late-onset Alzheimer’s disease is caused by a combina.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"img__wrap img--center-sm\">\n" +
    "                  <ng-include class=\"img img-middle--small\" src=\"'../assets/images/svg/dna-molecule.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <h3 class=\"txt-blue-dark\">\n" +
    "                    The latest science\n" +
    "                  </h3>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <div class=\"txt-middle txt-black\">\n" +
    "                    Once Helix laboratories have analyzed your saliva sample and sequenced your DNA, they identify your SNP’s specific to the ApoE test (rs429358 and rs7412). This information is then transferred to ADx Healthcare and interpreted to develop your personalized Alzheimer’s ApoE Genetic Test report.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"section__wrap-md\">\n" +
    "          <div class=\"container-flex container-flex--column-sm\">\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"img--center-sm\">\n" +
    "                  <ng-include src=\"'./assets/images/svg/notebook-and-pen.svg'\" class=\"img-middle--md\"></ng-include>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column-2\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"txt--space-top-sm\">\n" +
    "                  <h3 class=\"txt-blue-dark\">Why learn if you are at risk for Alzheimer’s disease?</h3>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <p class=\"txt-middle txt-black\">Research indicates that lifestyle behaviors across your life span may contribute to the development of Alzheimer’s disease. Also, changes occur in the brain up to two decades before the first symptoms develop. Because Alzheimer’s is believed to be caused by a combination of environmental, genetic, medical, and lifestyle factors, learning your genetic risk can help you determine how aggressively you need to make lifestyle changes to reduce your risk.\n" +
    "                    \n" +
    "                    The earlier in your life that you commit to living a cognitively healthy lifestyle, the more you can reduce your risk for or delay the development of Alzheimer’s disease.</p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"section__wrap-md\">\n" +
    "          <div class=\"container-flex container-flex--column-reverse-sm\">\n" +
    "            <div class=\"flex-column-2\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"txt--space-top-sm\">\n" +
    "                  <h3 class=\"txt-blue-dark\">\n" +
    "                    Symptoms and diagnoses\n" +
    "                  </h3>\n" +
    "                </div>\n" +
    "                <div class=\"txt__wrap\">\n" +
    "                  <div class=\"txt-middle txt-black\">\n" +
    "                    Late-onset Alzheimer’s disease is a progressive form of dementia that is characterized by tau and plaques in the brain that result in brain cell death over time. Scientists believe that for most people the development of late-onset Alzheimer’s disease is caused by a combina\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"title__wrap\">\n" +
    "                  <ul class=\"science-p-list science-p-list--not-padding\">\n" +
    "                    <li class=\"science-p-list__items\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Memory loss</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Behavioral changes such as agitation, delusions, and hallucinations</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Loss of interest in previously enjoyed activities</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Difficulty with problem solving</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Difficulty performing tasks that were previously easy</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Personality changes</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Loss of social skills and tendency to withdraw or isolate self</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"science-p-list__items science-p-list__items--small-top-padding\">\n" +
    "                      <div class=\"science-p-list-items science-p-list-items--circle-blue-sm\">\n" +
    "                        <p class=\"txt txt-black\">Language problems including forgetting names of familiar objects</p>\n" +
    "                      </div>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"flex-column\">\n" +
    "              <div class=\"flex-column__wrap\">\n" +
    "                <div class=\"img--center-sm\">\n" +
    "                  <ng-include class=\"human-brain-cloud--bgc-white img-middle--md\" src=\"'./assets/images/svg/human-brain-cloud.svg'\"></ng-include>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("components/results/results.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/results.tpl.html",
    "<div ui-view class=\"page-transition-anim\"></div>\n" +
    "<!--this is new end-->\n" +
    "\n" +
    "<!--this is old  To be deleted -->\n" +
    "<!--<div class=\"row\">\n" +
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
    "</div>\n" +
    "-->");
}]);

angular.module("components/science/science.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/science/science.tpl.html",
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
    "                    <h3 class=\"txt-blue-dark\">What is dementia?</h3>\n" +
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
    "                      <p class=\"txt txt-black\">Late-onset Alzheimer’s disease is a progressive form of dementia that is characterized by tau and plaques in the brain that result in brain cell death over time. Scientists believe that for most people the development of late-onset Alzheimer’s disease is caused by a combina.</p>\n" +
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
    "              Late-onset Alzheimer’s disease is a progressive form of dementia that is characterized by tau and plaques in the brain that result in brain cell death over time. Scientists believe that for most people the development of late-onset Alzheimer’s disease is caused by a combina\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <div class=\"science-p__wrap\">\n" +
    "            <div class=\"container-flex container-flex--column-md\">\n" +
    "              <div class=\"flex-column align-vertical--center\">\n" +
    "                <div class=\"flex-column__wrap\">\n" +
    "                  <div class=\"science-p-section-second__img img--center-md\">\n" +
    "                    <ng-include class=\"img-middle\" src=\"'./assets/images/svg/human-brain-cloud.svg'\"></ng-include>\n" +
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
    "              <p class=\"txt-large txt-black txt-bold\">SOURCE: www.medhelp.org/senior-care/articles/Dementia-vs-Alzheimers-Whats-theDifference/161</p>\n" +
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
    "                  <h3 class=\"txt-blue\">Why learn if you are at risk for\n" +
    "                    Alzheimer’s disease?</h3>\n" +
    "                  <div class=\"txt__wrap\">\n" +
    "                    <p class=\"txt txt-black\">\n" +
    "                      Research indicates that lifestyle behaviors across your life span may contribute to the development of Alzheimer’s disease. Also, changes occur in the brain up to two decades before the first symptoms develop. Because Alzheimer’s is believed to be caused by a combination of environmental, genetic, medical, and lifestyle factors, learning your genetic risk can help you determine how aggressively you need to make lifestyle changes to reduce your risk. The earlier in your life that you commit to living a cognitively healthy lifestyle, the more you can reduce your risk for or delay the development of Alzheimer’s disease.\n" +
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
    "            <div class=\"title__wrap txt-center container-exs\">\n" +
    "              <h3 class=\"txt-blue\">Why haven’t I heard that I can reduce\n" +
    "                my risk for Alzheimer’s disease?</h3>\n" +
    "            </div>\n" +
    "            <div class=\"txt__wrap\">\n" +
    "              <ul class=\"science-p-list\">\n" +
    "                <li class=\"science-p-list__items\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-silver-md\">\n" +
    "                    <p class=\"txt txt-black\">Emerging research can take a while to be accepted by mainstream\n" +
    "                      healthcare providers.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-silver-md\">\n" +
    "                    <p class=\"txt txt-black\">You may have seen headlines on news shows or on the internet highlighting some of the scientific breakthroughs on modifiable risk factors for Alzheimer’s disease, but may have not heard about them elsewhere yet.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-silver-md\">\n" +
    "                    <p class=\"txt txt-black\">Also, because genetic testing for Alzheimer’s disease is still not covered by insurance, many medical practices are not equipped to handle these evaluation paths yet. </p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-silver-md\">\n" +
    "                    <p class=\"txt txt-black\">\n" +
    "                      There is not a single universally accepted standard of care for diagnosing or treating Alzheimer’s disease in the US.\n" +
    "                      This leaves many patients seeking answers alone.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "                <li class=\"science-p-list__items\">\n" +
    "                  <div class=\"science-p-list-items science-p-list-items--circle-silver-md\">\n" +
    "                    <p class=\"txt txt-black\">You aren’t limited by what your doctor’s office offers or what your insurance will cover.  Genetic testing is now available through private pay. What sets ADx Healthcare apart is a physician will review your medical history to help you determine if the Alzheimer’s disease genetic test is a good fit for you, and genetics counselors are available to help you understand your results… all at no additional cost to you.\n" +
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
    "          <div uib-carousel active=\"active\"  no-wrap=\"false\">\n" +
    "            <div uib-slide index=\"0\">\n" +
    "              <div class=\"slider__wrap\">\n" +
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
    "                          <h3 class=\"txt-blue-3\" >Security and privacy\n" +
    "                            Your DNA is just for you</h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"txt__wrap\">\n" +
    "                          <p class=\"txt txt-black txt-left\">\n" +
    "                            Your Alzheimer’s genetic information will be delivered to you via a secure, electronic report.  These results will also be available for download. It is up to you whom you share your results with, including your healthcare provider or family.  Our genetics counselors are available to go through your results with you too, if you choose. You are in control of how you receive your genetic results and whom you share them with.\n" +
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
    "                              We will never share your name or data and you will never be included in any Alzheimer’s research without your\n" +
    "                              prior written consen\n" +
    "                            </p>\n" +
    "                            <div class=\"txt--indent-small\">\n" +
    "                              <p class=\"txt txt-black\">\n" +
    "                                From when you input your order to when your results are delivered, your health information is fully encrypted and secure. Regular security scans are performed to make\n" +
    "                                sure your data remains safe.\n" +
    "                              </p>\n" +
    "                            </div>\n" +
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
    "              <div class=\"slider__wrap\">\n" +
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
    "                          *I like this graphic from the Helix site to demonstrate the process. Can we use something like this to help demonstrate our process?\n" +
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
    "                          <h3 class=\"txt-blue-dark\">Sharable insignts</h3>\n" +
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
    "              <div class=\"slider__wrap\">\n" +
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
    "                        <p class=\"txt txt-black\">How your DNA becomes a report\n" +
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
    "                      <div class=\"txt__wrap txt-left\">\n" +
    "                        <p class=\"txt txt-black\">HThe Alzheimer’s ApoE test is a single gene test that looks at your genetic risk for Alzheimer’s disease. Genome-Wide Association Studies (GWAS) indicate that the e4 allele of ApoE is the strongest single genetic risk factor for Alzheimer’s disease.1,2 Apolipoprotein E (ApoE) is a protein that is involved in the metabolism of fats in your body and injury repair in your brain.3 ApoE is associated with both cardiovascular disease and Alzheimer’s disease risk.4 Researchers have identified that ApoE plays a role in Aβ (amyloid-beta) aggregation and clearance in the brain, synaptic plasticity, neuroinflammation, glucose metabolism, neuronal signaling, and mitochondrial function.4 ApoE also mediates cholesterol metabolism, with the ApoE-e4 allele associated with both hyperlipidaemia and hypercholesterolaemia, which can lead to atherosclerosis, coronary heart disease and stroke.5,6\n" +
    "                        </p>\n" +
    "                        <div class=\"txt--indent-small\">\n" +
    "                          <p class=\"txt txt-black\">\n" +
    "                            Alzheimer's disease is influenced by genetics, environment, lifestyle, and other medical factors.7-24 Thus, having the high risk copy of this gene (ApoE-e4) does not guarantee that you will develop Alzheimer's disease and not possessing a copy of the highest risk allele (APOE e4) does not mean you won't ever develop Alzheimer's disease. You cannot change your genetics and your risk for Alzheimer’s disease increases as you age, but there is hope in the fight against Alzheimer’s.  Learning your genetic risk for Alzheimer’s disease before symptoms of memory loss begin helps inform you how aggressively you want to address your modifiable lifestyle factors to optimize your cognitive health.\n" +
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
    "                      *I like this graphic from the Helix site to demonstrate the process. Can we use something like this to help demonstrate our process?\n" +
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
    "                      <h3 class=\"txt-blue-dark\">Sharable insignts</h3>\n" +
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
    "                    <p class=\"txt txt-black\">How your DNA becomes a report\n" +
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
    "                    <p class=\"txt txt-black\">HThe Alzheimer’s ApoE test is a single gene test that looks at your genetic risk for Alzheimer’s disease. Genome-Wide Association Studies (GWAS) indicate that the e4 allele of ApoE is the strongest single genetic risk factor for Alzheimer’s disease.1,2 Apolipoprotein E (ApoE) is a protein that is involved in the metabolism of fats in your body and injury repair in your brain.3 ApoE is associated with both cardiovascular disease and Alzheimer’s disease risk.4 Researchers have identified that ApoE plays a role in Aβ (amyloid-beta) aggregation and clearance in the brain, synaptic plasticity, neuroinflammation, glucose metabolism, neuronal signaling, and mitochondrial function.4 ApoE also mediates cholesterol metabolism, with the ApoE-e4 allele associated with both hyperlipidaemia and hypercholesterolaemia, which can lead to atherosclerosis, coronary heart disease and stroke.5,6\n" +
    "                    </p>\n" +
    "                    <div class=\"txt--indent-small\">\n" +
    "                      <p class=\"txt txt-black\">\n" +
    "                        Alzheimer's disease is influenced by genetics, environment, lifestyle, and other medical factors.7-24 Thus, having the high risk copy of this gene (ApoE-e4) does not guarantee that you will develop Alzheimer's disease and not possessing a copy of the highest risk allele (APOE e4) does not mean you won't ever develop Alzheimer's disease. You cannot change your genetics and your risk for Alzheimer’s disease increases as you age, but there is hope in the fight against Alzheimer’s.  Learning your genetic risk for Alzheimer’s disease before symptoms of memory loss begin helps inform you how aggressively you want to address your modifiable lifestyle factors to optimize your cognitive health.\n" +
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
    "            <div class=\"container-flex container-flex--column-sm\">\n" +
    "                <div class=\"flex-column-1-half\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"title__wrap txt-center-sm\">\n" +
    "                        <h4 class=\"txt-blue txt-uppercase\">Provider order required</h4>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-center-sm\">\n" +
    "                        <div class=\"txt txt-black\">\n" +
    "                          ApoE testing must be approved by your physician or other qualified health care provider.\n" +
    "                          If you don’t have a health care provider ADx Healthcare can assist in helping you find a licensed provider.\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-column\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"title__wrap txt-center-sm\">\n" +
    "                        <h4 class=\"txt-blue txt-uppercase\">PARTNER WITH US</h4>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-center-sm\">\n" +
    "                        <a href=\"\" class=\"txt txt-bold txt-black\">Affiliates</a>\n" +
    "                        <div class=\"link--indent\">\n" +
    "                          <a href=\"\" class=\"txt txt-bold txt-black\">Providers</a>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-column\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"title__wrap txt-center-sm\">\n" +
    "                        <a ui-sref=\"master.legal\" class=\"title-fourth txt-blue txt-uppercase\">LEGAL</a>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-center-sm\">\n" +
    "                        <a href=\"\" class=\"txt txt-bold txt-black\">Tems of Service</a>\n" +
    "                        <div class=\"link--indent\">\n" +
    "                          <a href=\"\" class=\"txt txt-bold txt-black\">Privacy Policy</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"link--indent\">\n" +
    "                          <a href=\"\" class=\"txt txt-bold txt-black\">Informed Consent</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"link--indent\">\n" +
    "                          <a href=\"\" class=\"txt txt-bold txt-black\">Research Consent</a>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"flex-column\">\n" +
    "                    <div class=\"flex-column__wrap\">\n" +
    "                      <div class=\"title__wrap txt-center-sm\">\n" +
    "                        <h4 class=\"txt-blue txt-uppercase\">JOIN OUR EMAIL LIST</h4>\n" +
    "                      </div>\n" +
    "                      <div class=\"txt__wrap txt-center-sm\">\n" +
    "                        <div class=\"txt txt-black\">\n" +
    "                          Join our email list to receive news and updates on various advances in Alzheimer's disease research.\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      \n" +
    "      <!--title blue end-->\n" +
    "      <div class=\"footer-bottom\">\n" +
    "        <div class=\"footer-bottom__wrap\">\n" +
    "          <div class=\"title__wrap\">\n" +
    "            <h4  class=\"txt-blue-dark txt-center\">© 2018 ADx Healthcare. All rights reserved.</h4>\n" +
    "          </div>\n" +
    "          <div class=\"footer-bottom__link txt-center\">\n" +
    "            <a ng-click=\"scrollToContacts($event)\" target=\"_self\" class=\"txt txt-blue-dark\">Contact Us</a>\n" +
    "            <a  ui-sref=\"master.about\" class=\"txt txt-blue-dark\">About Us</a>\n" +
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
    "  <div class=\"container-fluid\">\n" +
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
    "                      <a ng-show=\"logged\" ui-sref=\"master_signedin.dashboard\" ng-click=\"showMenu()\" class=\"header-nav-link\">My Results</a>\n" +
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
    "          <div class=\"header__button hide-mobile\">\n" +
    "            <div class=\"button__login\">\n" +
    "                  <a ng-show=\"logged\" ui-sref=\"master_signedin.dashboard\" class=\"bt-round bt-round--header bt-round--blue\">My Results</a>\n" +
    "                  <a ng-show=\"!logged\" ui-sref=\"master.register\" class=\"bt-round bt-round--header bt-round--blue\">Register</a>\n" +
    "            </div>\n" +
    "            <div class=\"button__purchase\">\n" +
    "              <a ng-show=\"!logged\" ui-sref=\"master_signedin.results.pre-purchase\" class=\"bt-round bt-round--header bt-round--blue-dark\">Order</a>\n" +
    "              <a ng-show=\"logged\" ui-sref=\"master.logout\" class=\"bt-round bt-round--header bt-round--blue-dark\">Logout</a>\n" +
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
    "        <a ui-sref=\"master.home\" class=\"header-logo__link\">\n" +
    "          <img class=\"img\" src=\"./assets/images/logo-img.png\" alt=\"\">\n" +
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
    "          <a ui-sref=\"master_signedin.profile\" ng-click=\"showMenu()\" class=\"button-circle\" uib-tooltip=\"Profile\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\n" +
    "          <button uib-tooltip=\"Logout\" ui-sref=\"master.logout\"  class=\"button-circle\" ng-click=\"showMenu()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"side-navbar__navigation\">\n" +
    "        <div class=\"side-navbar-navigation__wrap\">\n" +
    "          <div class=\"bgc-wrap-content bgc-wrap-content--blue bgc-wrap-content--justify-left\">\n" +
    "            <div class=\"status-icon__wrap\">\n" +
    "              <i class=\"icon user-white\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"status-txt__wrap\">\n" +
    "              <div class=\"txt\">{{statusTitle}}</div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"side-navbar-navigation__link\">\n" +
    "            <ul class=\"side-navbar-navigation-link__wrap\">\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref-active=\"active-number-blue\" ui-sref=\"master_signedin.results.p1\" ng-click=\"showMenu()\" class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">1</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt-small txt-blue-dark\">Your result</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref-active=\"active-number-blue\" ui-sref=\"master_signedin.results.p2\" ng-click=\"showMenu()\" class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">2</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt-small txt-blue-dark\">About Alzheimer’s disease</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref-active=\"active-number-blue\" ui-sref=\"master_signedin.results.p3\" ng-click=\"showMenu()\" class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">3</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt-small txt-blue-dark\">Lifestyle & other factor</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item\">\n" +
    "                <a ui-sref-active=\"active-number-blue\" ui-sref=\"master_signedin.results.p4\" ng-click=\"showMenu()\" class=\"navbar-link\">\n" +
    "                  <span class=\"number-bgc\">4</span>\n" +
    "                  <span class=\"side-navbar-link__txt\">\n" +
    "                    <span class=\"txt-small txt-blue-dark\">Next steps</span>\n" +
    "                  </span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"side-navbar-navigation-link__wrap\">\n" +
    "              <li class=\"side-navbar-navigation-link__item side-navbar-navigation-link__item--not-space\">\n" +
    "                <a ui-sref-active=\"active-bgc-blue\" ui-sref=\"master_signedin.results.science\" ng-click=\"showMenu()\" class=\"navbar-link navbar-link--second\">\n" +
    "                  <span class=\"link-icon-inline\">\n" +
    "                    <ng-include class=\"link-icon--inner\" src=\"'./assets/images/icon/dna-blue.svg'\"></ng-include>\n" +
    "                  </span>\n" +
    "                  <span class=\"txt txt-black\">Science</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item side-navbar-navigation-link__item--not-space\">\n" +
    "                <a ui-sref-active=\"active-bgc-blue\" ui-sref=\"master_signedin.results.sharing\" ng-click=\"showMenu()\" class=\"navbar-link navbar-link--second\">\n" +
    "                  <span class=\"link-icon-inline\">\n" +
    "                    <ng-include class=\"link-icon--inner\" src=\"'./assets/images/icon/users.svg'\"></ng-include>\n" +
    "                  </span>\n" +
    "                  <span class=\"txt txt-black\">Share results</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li class=\"side-navbar-navigation-link__item side-navbar-navigation-link__item--not-space\">\n" +
    "                <a ui-sref-active=\"active-bgc-blue\" ui-sref=\"master_signedin.results.questions\" ng-click=\"showMenu()\" class=\"navbar-link navbar-link--second\">\n" +
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
