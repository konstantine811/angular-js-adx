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
    "<div class=\"container-fluid\">\n" +
    "  <!--section head-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-4\">\n" +
    "      <div class=\"container-box-shadow\">\n" +
    "        <div class=\"container-box-shadow__inner\">\n" +
    "          <h4 class=\"title-box\">Total Views</h4>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "              <div class=\"data-content\">\n" +
    "                <div class=\"data-content__count\">\n" +
    "                  <div class=\"data-content__top\">\n" +
    "                    <div class=\"data-count-title\">226K</div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"data-content__bottom\">\n" +
    "                  <div class=\"data-count-percent green\"><i class=\"fa fa-arrow-up\"></i>13,8%</div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "              <div class=\"data-content__chart\">\n" +
    "                <div class=\"chart\" id=\"chart\">There will be a chart</div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "      <div class=\"container-box-shadow\">\n" +
    "        <div class=\"container-box-shadow__inner\">\n" +
    "          <h4 class=\"title-box\">Total Views</h4>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "              <div class=\"data-content\">\n" +
    "                <div class=\"data-content__count\">\n" +
    "                  <div class=\"data-content__top\">\n" +
    "                    <div class=\"data-count-title\">226K</div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"data-content__bottom\">\n" +
    "                  <div class=\"data-count-percent red\"><i class=\"fa fa-arrow-down\"></i>13,8%</div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "              <div class=\"data-content__chart\">\n" +
    "                <div class=\"chart\">There will be a chart</div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "      <div class=\"container-box-shadow\">\n" +
    "        <div class=\"container-box-shadow__inner\">\n" +
    "          <h4 class=\"title-box\">Total Views</h4>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "              <div class=\"data-content\">\n" +
    "                <div class=\"data-content__count\">\n" +
    "                  <div class=\"data-content__top\">\n" +
    "                    <div class=\"data-count-title\">226K</div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"data-content__bottom\">\n" +
    "                  <div class=\"data-count-percent green\"><i class=\"fa fa-arrow-up\"></i>13,8%</div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "              <div class=\"data-content__chart\">\n" +
    "                <div class=\"chart\">There will be a chart</div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--section main-->\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-8\">\n" +
    "       <div class=\"container-title-section\">\n" +
    "         <div class=\"container-title-section-top border-silver\">\n" +
    "           <div class=\"container-title-section-top__title\">\n" +
    "             <h3 class=\"container-title txt-color-blue\">Title of section</h3>\n" +
    "           </div>\n" +
    "           <div class=\"container-title-section__bottom\">\n" +
    "             <div class=\"row\">\n" +
    "               <div class=\"col-sm-6\">\n" +
    "                 <div class=\"container-title__button\">\n" +
    "                   <button class=\"bt green\">Button</button>\n" +
    "                 </div>\n" +
    "               </div>\n" +
    "               <div class=\"col-sm-6\">\n" +
    "                 <div class=\"container-title__button\">\n" +
    "                   <button class=\"bt green\">Button</button>\n" +
    "                 </div>\n" +
    "               </div>\n" +
    "             </div>\n" +
    "           </div>\n" +
    "         </div>\n" +
    "         <div class=\"container-title-section-bottom\">\n" +
    "           <div class=\"row\">\n" +
    "             <div class=\"col-sm-6\">\n" +
    "               <div class=\"container-title-section-bottom-box border-silver\">\n" +
    "                 <div class=\"container-title-section-top__title\">\n" +
    "                   <h3 class=\"container-title txt-color-blue\">Title of section</h3>\n" +
    "                 </div>\n" +
    "                 <div class=\"container-title-section__bottom\">\n" +
    "                   <button class=\"bt grey\">Button</button>\n" +
    "                 </div>\n" +
    "               </div>\n" +
    "             </div>\n" +
    "             <div class=\"col-sm-6\">\n" +
    "               <div class=\"container-title-section-bottom-box border-silver\">\n" +
    "                 <div class=\"container-title-section-top__title\">\n" +
    "                   <h3 class=\"container-title txt-color-blue\">Title of section</h3>\n" +
    "                 </div>\n" +
    "                 <div class=\"container-title-section__bottom\">\n" +
    "                   <button class=\"bt grey\">Button</button>\n" +
    "                 </div>\n" +
    "               </div>\n" +
    "             </div>\n" +
    "           </div>\n" +
    "         </div>\n" +
    "       </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "      <div class=\"container-title-ixlayer\">\n" +
    "        <div class=\"container-title-ixlayer__inner\">\n" +
    "          <div class=\"container-title-ixlayer__header\">\n" +
    "            <div class=\"header-logo header-logo--small animation\">\n" +
    "              <div class=\"rect rect-top\">\n" +
    "                <div class=\"rect-txt\">\n" +
    "                  <span class=\"rect-top__txt\"> Platform layer</span>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"rect rect-middle-first\">\n" +
    "                <div class=\"rect-txt\">\n" +
    "                  <span class=\"rect-middle-first__txt\"> Backend layer</span>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"rect rect-middle-second\">\n" +
    "                <div class=\"rect-txt\">\n" +
    "                  <span class=\"rect-middle-second__txt\"> Operation layer</span>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"rect rect-bottom\">\n" +
    "                <div class=\"rect-txt\">\n" +
    "                  <span class=\"rect-bottom__txt\"> Helath service layer</span>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <h2 class=\"header-logo-txt header-logo-txt-large\">ixlayer</h2>\n" +
    "          </div>\n" +
    "          <div class=\"container-title-ixlayer__about-txt\">\n" +
    "            <h3 class=\"ixlayer-about__title txt-bold\">\n" +
    "              About IxLayer\n" +
    "            </h3>\n" +
    "            <div class=\"ixlayer-about__txt\">\n" +
    "              <p class=\"txt\">\n" +
    "                IxLayer End-to-end solution is everything you need to launch a genetic product. All that is needed from your side is the scientific claims and Ixlayer will provide you best in class, web and mobile, user friendly genetic products with in 3 weeks.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"ixlayer-about__button\">\n" +
    "              <button class=\"button-border-rounded\">Visit website</button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"container-title-ixlayer__about-txt\">\n" +
    "            <h3 class=\"ixlayer-about__title txt-bold\">\n" +
    "              Need help?\n" +
    "            </h3>\n" +
    "            <div class=\"ixlayer-about__txt\">\n" +
    "              <p class=\"txt\">\n" +
    "                IxLayer End-to-end solution is everything you need to launch a genetic product. All that is needed from your side is the scientific claims and Ixlayer will provide you best in class, web and mobile, user friendly genetic products with in 3 weeks.\n" +
    "              </p>\n" +
    "            </div>\n" +
    "            <div class=\"container-about-button\">\n" +
    "              <div class=\"ixlayer-about__button\">\n" +
    "                <button class=\"button-border-rounded\">Email</button>\n" +
    "              </div>\n" +
    "              <div class=\"ixlayer-about__button\">\n" +
    "                <button class=\"button-border-rounded\">Call: 415-254-2454</button>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
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
    "        <div class=\"login-form\">\n" +
    "          <div class=\"panel panel--login\">\n" +
    "            <div class=\"panel__title\">\n" +
    "              <h2 class=\"txt-brown txt-middle not-margin\">Sign in to Affirmativ</h2>\n" +
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
    "            <div class=\"register-form__wrap\">\n" +
    "                <div id=\"todoPanel\" class=\"panel panel--register\">\n" +
    "                    <div class=\"panel__title\">\n" +
    "                        <h1 class=\"txt-brown txt-middle\">Create account for Affirmativ</h1>\n" +
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
    "                     <h2 class=\"txt-bold txt-green\">User consent</h2>\n" +
    "                   </div>\n" +
    "                   <div class=\"popup-content__about-title\">\n" +
    "                     <h3 class=\"txt-middle txt-black-light txt-uppercase\">Client for Affirmativ</h3>\n" +
    "                   </div>\n" +
    "                   <div class=\"popup-content__about-txt\">\n" +
    "                     <p class=\"txt txt-middle txt-black-light\">Hi \"User Name\", Affirmativ is requesting access to your \"App\" account</p>\n" +
    "                   </div>\n" +
    "                 </div>\n" +
    "                 <div class=\"popup-content__txt-with-logo\">\n" +
    "                   <div class=\"txt-with-logo\">\n" +
    "                     <div class=\"txt-with-logo__wrap\">\n" +
    "                       <span class=\"txt-with-logo__logo\"><i class=\"fa fa-user fa--logo-with-txt\"></i></span>\n" +
    "                       <p class=\"txt txt-black-light txt-inline-block\">Profile: access to your email profile</p>\n" +
    "                     </div>\n" +
    "                   </div>\n" +
    "                   <div class=\"txt-with-logo\">\n" +
    "                     <div class=\"txt-with-logo__wrap\">\n" +
    "                       <span class=\"txt-with-logo__logo\"><i class=\"fa fa-shopping-bag fa--logo-with-txt\"></i></span>\n" +
    "                       <p class=\"txt txt-black-light txt-inline-block\">Posts: read and write your posts</p>\n" +
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
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar navbar-default\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <button type=\"button\" class=\"navbar-toggle\" ng-init=\"menuCollapsed = true\"\n" +
    "                        ng-click=\"menuCollapsed = ! menuCollapsed\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                </button>\n" +
    "                <div class=\"navbar-brand\">\n" +
    "                    Footer\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"collapse navbar-collapse\" collapse=\"menuCollapsed\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li ui-sref-active=\"active\">\n" +
    "                        <a href ui-sref=\"FAQ\">\n" +
    "                            FAQ\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li ui-sref-active=\"active\">\n" +
    "                        <a href ui-sref=\"contact\">\n" +
    "                            Contact\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li ui-sref-active=\"active\">\n" +
    "                        <a href ui-sref=\"legal\">\n" +
    "                            Legal\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </footer>");
}]);

angular.module("shared/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/header/header.tpl.html",
    "<header class=\"header\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"header__wrap\">\n" +
    "        <!--logo-->\n" +
    "        <div class=\"header__logo\">\n" +
    "          <div class=\"logo-affirmativ__wrap\">\n" +
    "            <div class=\"logo-affirmativ\"><span class=\"logo-affirmativ-cross\"></span></div>\n" +
    "          </div>\n" +
    "          <div class=\"logo-txt\">affirmativ</div>\n" +
    "        </div>\n" +
    "        <!--navigation-->\n" +
    "        <div class=\"header-nav\">\n" +
    "          <nav class=\"header-nav__wrap\">\n" +
    "            <ul class=\"header-nav-wrap__inner\">\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"about\" class=\"header-nav-link\">About</a>\n" +
    "              </li>\n" +
    "              <li class=\"header-nav-item\">\n" +
    "                <a ui-sref=\"products\" class=\"header-nav-link\">Products</a>\n" +
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
    "            <div class=\"button__register\">\n" +
    "              <a ui-sref=\"register\" class=\"bt-round bt-round--blue\"><span class=\"bt-content\">Register a kit</span></a>\n" +
    "            </div>\n" +
    "            <div class=\"button__login\">\n" +
    "              <a ui-sref=\"login\" class=\"bt-round bt-round--brown\"><span class=\"bt-content\">Sign in</span></a>\n" +
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
    "      <div class=\"side-navbar-header\">\n" +
    "        <div class=\"side-navbar-header__logo\">\n" +
    "          <div class=\"header-logo header-logo--small animation\">\n" +
    "            <div class=\"rect rect-top\">\n" +
    "              <div class=\"rect-txt\">\n" +
    "                <span class=\"rect-top__txt\"> Platform layer</span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"rect rect-middle-first\">\n" +
    "              <div class=\"rect-txt\">\n" +
    "                <span class=\"rect-middle-first__txt\"> Backend layer</span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"rect rect-middle-second\">\n" +
    "              <div class=\"rect-txt\">\n" +
    "                <span class=\"rect-middle-second__txt\"> Operation layer</span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"rect rect-bottom\">\n" +
    "              <div class=\"rect-txt\">\n" +
    "                <span class=\"rect-bottom__txt\"> Helath service layer</span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <h2 class=\"header-logo-txt\">ixlayer</h2>\n" +
    "          <p class=\"header-about-txt\">Analytics Platform</p>\n" +
    "        </div>\n" +
    "        <!--end logo header-->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <!--nav-top-->\n" +
    "      <div class=\"side-navbar-link\">\n" +
    "        <ul class=\"side-navbar-link__top\">\n" +
    "          <li ui-sref-active=\"active\" class=\"side-navbar-link__item\">\n" +
    "            <a href ui-sref=\"home\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-home\"></i>Dashboard</span></a>\n" +
    "          </li>\n" +
    "          <li ui-sref-active=\"active\" class=\"side-navbar-link__item\">\n" +
    "            <a href ui-sref=\"about\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-bar-chart\"></i>Overview</span></a>\n" +
    "          </li>\n" +
    "          <li ui-sref-active=\"active\" class=\"side-navbar-link__item side-navbar-link__item--users\">\n" +
    "            <a href ui-sref=\"profile\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-user-o\"></i>Users<i class=\"fa fa-angle-down\"></i></span></a>\n" +
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
    "            <a href ui-sref=\"dashboard\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-gear\"></i>Customizations</span></a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "        <!--nav-bottom-->\n" +
    "        <ul class=\"side-navbar-link__bottom\">\n" +
    "          <li  ui-sref-active=\"active\" class=\"side-navbar-link__item\">\n" +
    "            <a href ui-sref=\"register\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-image\"></i>Registration</span></a>\n" +
    "          </li>\n" +
    "          <li ui-sref-active=\"active\" class=\"side-navbar-link__item\">\n" +
    "            <a href ui-sref=\"login\" class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-image\"></i>Login</span></a>\n" +
    "          </li>\n" +
    "          <li  ui-sref-active=\"active\" class=\"side-navbar-link__item\">\n" +
    "            <a class=\"nav-link\"><span class=\"link-txt\"><i class=\"fa fa-user-circle-o\"></i>Account</span></a>\n" +
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
