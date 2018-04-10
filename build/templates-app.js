angular.module("templates-app", ["components/about/about.tpl.html", "components/change_password/change_password.tpl.html", "components/contact/contact.tpl.html", "components/dashboard/dashboard.tpl.html", "components/faq/faq.tpl.html", "components/forgot_password/forgot_password.tpl.html", "components/home/home.tpl.html", "components/legal/legal.tpl.html", "components/login/login.tpl.html", "components/products/products.tpl.html", "components/products/productsDetail.tpl.html", "components/profile/profileEdit.tpl.html", "components/profile/profileView.tpl.html", "components/register/register.tpl.html", "components/results/results.tpl.html", "components/verify_email/verify_email.tpl.html", "shared/footer/footer.tpl.html", "shared/header/header.tpl.html"]);

angular.module("components/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/about/about.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <h1>This is page About</h1>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/change_password/change_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/change_password/change_password.tpl.html",
    "<div class=\"container\">\n" +
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
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>Contacts</h1>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/dashboard/dashboard.tpl.html",
    "<div class=\"container\">\n" +
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
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>Frequently asked questions.</h1>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/forgot_password/forgot_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/forgot_password/forgot_password.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-8 col-sm-offset-2\">\n" +
    "            <h1>Forgot Password</h1>\n" +
    "            <div class=\"panel\" ng-controller=\"ForgotPasswordCtrl\">\n" +
    "                <div ng-show=\"!success\">\n" +
    "                <form name=\"form\" novalidate ng-submit=\"forgotSubmit(userForm)\">\n" +
    "                    <p>Please enter your email address below:</p>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Email</label>\n" +
    "                        <input type=\"text\" name=\"email\" id=\"email\"  class=\"form-control\"  ng-model=\"forgotForm.email\" required>\n" +
    "                        <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                            <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                            <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"form.$invalid\">Submit</button>\n" +
    "                </form>\n" +
    "                </div>\n" +
    "                <div class=\"alert alert-danger\" ng-repeat=\"error in errors.password\">{{::error}}</div>\n" +
    "                <div class=\"alert alert-danger\" ng-if=\"error\">{{::error.detail}}</div>\n" +
    "                <div class=\"alert alert-success\" ng-if=\"success\">Great! Please check your email and click on the link to continue</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/home/home.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <h1>Home</h1>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("components/legal/legal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/legal/legal.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>This is page Legal</h1>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/login/login.tpl.html",
    "<div class=\"container\">\n" +
    "   <div class=\"row\">\n" +
    "       <div class=\"col-sm-8 col-sm-offset-2\">\n" +
    "            <h1>Login</h1>\n" +
    "            <div class=\"panel\">\n" +
    "                <form name=\"form\" novalidate ng-submit=\"loginUser(userForm)\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Email</label>\n" +
    "                        <input type=\"email\" name=\"email\" class=\"form-control\" required ng-model=\"userForm.email\">\n" +
    "                        <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                            <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                            <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Password</label>\n" +
    "                        <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"userForm.password\" required>\n" +
    "                    </div>\n" +
    "                    <button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"form.$invalid\" test-hook=\"login-button\">Login</button>\n" +
    "                </form>\n" +
    "\n" +
    "                <br>\n" +
    "\n" +
    "                <div class=\"alert alert-danger\" ng-repeat=\"error in errors.password\">{{::error}}</div>\n" +
    "                <div class=\"alert alert-danger\" ng-repeat=\"error in errors.non_field_errors\">{{::error}}</div>\n" +
    "                <div class=\"alert alert-danger\" ng-if=\"error\">{{::error.detail}}</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"forgot-password\">\n" +
    "                <a href ui-sref=\"forgot_password\">\n" +
    "                    Forgot Password\n" +
    "                </a>\n" +
    "            </div>\n" +
    "       </div>\n" +
    "   </div>\n" +
    "</div>");
}]);

angular.module("components/products/products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/products.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>This is page Products</h1>\n" +
    "    </div>\n" +
    "\n" +
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
    "<div class=\"container\">\n" +
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
    "<div class=\"container\">\n" +
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
    "<div class=\"container\">\n" +
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
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-8 col-sm-offset-2\">\n" +
    "            <h1 class=\"page-header\">Registration Form</h1>\n" +
    "            <div id=\"todoPanel\" class=\"panel\">\n" +
    "                <form name=\"form\"  ng-submit=\"submitForm(userForm)\" novalidate>\n" +
    "                    <div ng-show=\"!complete\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Firstname</label>\n" +
    "                            <input type=\"text\" name=\"first_name\" class=\"form-control\" ng-model=\"userForm.first_name\"  ng-minlength=\"3\" required>\n" +
    "                            <p ng-show=\"form.first_name.$error.minlength && !form.first_name.pristine\" class=\"error\">You firstname is too short</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Lastname</label>\n" +
    "                            <input type=\"text\" name=\"last_name\" class=\"form-control\" ng-model=\"userForm.last_name\"  ng-minlength=\"3\" required>\n" +
    "                            <p ng-show=\"form.last_name.$error.minlength && !form.last_name.pristine\" class=\"error\">You lastname is too short</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Email</label>\n" +
    "                            <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"userForm.email\" required>\n" +
    "                            <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                                <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                                <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Password</label>\n" +
    "                            <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"userForm.password\" ng-minlength=\"5\" required>\n" +
    "                            <div class=\"error\" ng-show=\"form.password.$dirty\">\n" +
    "                                <div class=\"error\" ng-show=\"form.password.$error.required\">This field is required</div>\n" +
    "                                <div class=\"error\" ng-show=\"form.password.$error.minlength && !form.password.pristine\">Password must be at least 5 characters long</div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label>Confirm Password</label>\n" +
    "                            <input type=\"password\" name=\"confirm_password\" class=\"form-control\" ng-model=\"userForm.confirm_password\" password-verify match-target=\"userForm.password\" required>\n" +
    "                            <div class=\"error\" ng-show=\"form.confirm_password.$error.match && form.confirm_password.$dirty\">Passwords do not match.</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"checkbox m-b-md m-t-none\" ng-show=\"!complete\">\n" +
    "                            <label class=\"i-checks\">\n" +
    "                                <input type=\"checkbox\" ng-model=\"userForm.terms\" required><i></i> Agree to the <a href=\"http://www.ixlayer.com/terms/\" target=\"_blank\">Terms and Conditions</a>\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <button test-hook=\"submit-register\" type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"form.$invalid\">Submit</button>\n" +
    "                    </div>\n" +
    "                \n" +
    "                    <br>\n" +
    "                \n" +
    "                    <div class=\"alert alert-danger\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "                \n" +
    "                    <div ng-if=\"complete == true\">\n" +
    "                        <div class=\"alert alert-success\">Great!  You've just registered.  You should receive an email shortly with instructions on how to activate your account.</div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"verify-email\">\n" +
    "            <a href ui-sref=\"verify_email\">\n" +
    "                Verify Email\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"popup\" ng-if=\"showPopup\" test-hook=\"tour-start-popover\">\n" +
    "        <div class=\"popup-content\" ng-class=\"showPopup = 'popup-content-animation'\">\n" +
    "            <div class=\"popup-condition-txt scrollme\" ng-scrollbar is-bar-shown=\"barShown\">\n" +
    "                <p class=\"popup-condition-txt__inner\">\n" +
    "                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus impedit pariatur quis sit unde, veniam? Accusamus aut facilis in labore laboriosam necessitatibus nisi optio porro quasi, ratione voluptas voluptatem, voluptatum!</span><span>Architecto culpa, deleniti dicta dolorum earum labore odit recusandae rerum sit! A at dolorem eligendi itaque perspiciatis vel voluptate! A consequuntur debitis esse ex illo inventore libero porro sed voluptates.</span><span>Architecto assumenda consequatur cupiditate dolorem, exercitationem explicabo fugit in necessitatibus quo! A dicta dolorem eaque error ipsam ipsum magnam mollitia nam optio provident quam quos, reprehenderit sunt totam vitae voluptate.</span><span>Aliquam aut deleniti dicta dolorem error esse exercitationem, hic inventore ipsum minus pariatur perferendis provident quaerat qui sequi veniam voluptate. Accusamus, blanditiis cumque dicta molestiae quibusdam repellat similique sunt vero.</span><span>Ab deserunt dolorem eos eveniet fugit labore laudantium necessitatibus, praesentium quia quis quos, repudiandae, voluptates! Alias dolores molestias quaerat qui quibusdam? Aperiam, ipsum minus. Ab consequuntur eaque iusto nemo rem?</span><span>A amet atque beatae, eligendi hic in itaque nesciunt quas repudiandae tempore totam veniam voluptate. Adipisci alias aliquid at exercitationem ipsam magni maiores nesciunt, obcaecati officiis provident suscipit tenetur vitae.</span><span>At excepturi mollitia odio. Beatae dolor esse explicabo incidunt iusto libero minus! Accusantium distinctio hic inventore itaque necessitatibus quidem reprehenderit sapiente tempore temporibus voluptatibus. Commodi deleniti sed sunt! Amet, aperiam!</span><span>Accusamus delectus magnam totam. Deleniti eaque et facilis fuga, incidunt nam natus officia quia velit veritatis. Animi autem consequatur ea illo veniam voluptatem. Alias dolorum in necessitatibus pariatur possimus quibusdam.</span><span>Adipisci animi assumenda at corporis dicta, dolor doloremque eaque error et ex exercitationem id ipsa labore laboriosam laborum nisi non nulla numquam odit quisquam repudiandae similique sit soluta tenetur vero.</span><span>Alias, aut cumque debitis delectus impedit magni nulla obcaecati odit quaerat qui, quidem rem suscipit totam. A adipisci architecto distinctio, eos est in iste minima necessitatibus, obcaecati sapiente sequi, unde!</span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <form class=\"form-popup\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                        <div class=\"form-check\">\n" +
    "                            <label class=\"i-checks\">\n" +
    "                                <input type=\"checkbox\" ng-model=\"checked\" required> <span>I agree</span>\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                        <button test-hook=\"tour-end-button\" class=\"btn btn-primary\" type=\"button\" ng-click=\"agree(checked)\">OK</button>\n" +
    "                        <button class=\"btn btn-warning\" type=\"button\" ng-click=\"noAgree()\">Cancel</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"error\" ng-show=\"notChecked\">You have not confirmed terms and condition</div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"popup-background\" ng-class=\"showPopup = 'popup-background-animation'\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/results/results.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/results/results.tpl.html",
    "<div class=\"container\">\n" +
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
    "<div class=\"container\">\n" +
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
    "    <div class=\"container\">\n" +
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
    "<div class=\"container\">\n" +
    "  <div class=\"navbar navbar-default\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle\" ng-init=\"menuCollapsed = true\"\n" +
    "              ng-click=\"menuCollapsed = ! menuCollapsed\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <div class=\"navbar-brand\">\n" +
    "        ixlayer\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" collapse=\"menuCollapsed\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li ui-sref-active=\"active\">\n" +
    "          <a href ui-sref=\"home\">\n" +
    "            Home\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ui-sref-active=\"active\">\n" +
    "          <a href ui-sref=\"about\">\n" +
    "            About\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ui-sref-active=\"active\">\n" +
    "          <a href ui-sref=\"products\">\n" +
    "            Products\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-if=\"logged\" ui-sref-active=\"active\">\n" +
    "          <a href ui-sref=\"profile\">\n" +
    "            Profile\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-if=\"logged\" ui-sref-active=\"active\">\n" +
    "          <a href ui-sref=\"dashboard\">\n" +
    "            Dashboard\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-if=\"!logged\" ui-sref-active=\"active\">\n" +
    "          <a href ui-sref=\"register\">\n" +
    "            Registration\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-if=\"!logged\" ui-sref-active=\"active\">\n" +
    "          <a href ui-sref=\"login\">\n" +
    "            Login\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-if=\"logged\" ui-sref-active=\"active\">\n" +
    "          <a test-hook=\"logout-button\" ng-click=\"logout()\">\n" +
    "            Logout\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
