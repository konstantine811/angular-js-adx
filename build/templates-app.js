angular.module("templates-app", ["components/about/about.tpl.html", "components/contact/contact.tpl.html", "components/dashboard/dashboard.tpl.html", "components/faq/faq.tpl.html", "components/forgot_password/forgot_password.tpl.html", "components/home/home.tpl.html", "components/legal/legal.tpl.html", "components/login/login.tpl.html", "components/products/products.tpl.html", "components/profile/profile.tpl.html", "components/profile/profileEdit.tpl.html", "components/register/register.tpl.html", "components/verify_email/verify_email.tpl.html", "shared/footer/footer.tpl.html", "shared/header/header.tpl.html"]);

angular.module("components/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/about/about.tpl.html",
    "<div class=\"conteiner\">\n" +
    "  <div class=\"row\">\n" +
    "    <h1>This is page About</h1>\n" +
    "  </div>\n" +
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
    "        <h1>Dashboard</h1>\n" +
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
    "        <h1>forgot password</h1>\n" +
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
    "            <div class=\"panel\" ng-controller=\"LoginCtrl\">\n" +
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
    "                    <button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"form.$invalid\">Login</button>\n" +
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
    "                    forgot password\n" +
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
    "    <div ng-repeat=\"product in products\">\n" +
    "        <div>{{ product.name }}</div>\n" +
    "        <div>{{ product.description }}</div>\n" +
    "        <div>{{ product.price }}</div>\n" +
    "        <hr>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/profile/profile.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <p>First Name: {{user.first_name}}</p>\n" +
    "        <p>Last Name: {{ user.last_name }}</p>\n" +
    "        <p>Email: {{ user.email }}</p>\n" +
    "        <button class=\"btn btn-primary\" ui-sref=\"profileEdit\">Edit</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/profile/profileEdit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/profile/profileEdit.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1>Edit Profile</h1>\n" +
    "        <form name=\"form\"  ng-submit=\"submitForm(user)\" novalidate>\n" +
    "            <div ng-show=\"!complete\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>Firstname</label>\n" +
    "                    <input type=\"text\" name=\"first_name\" class=\"form-control\" ng-model=\"user.first_name\"  ng-minlength=\"3\" required>\n" +
    "                    <p ng-show=\"form.first_name.$error.minlength && !form.first_name.pristine\" class=\"error\">You firstname is too short</p>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>Lastname</label>\n" +
    "                    <input type=\"text\" name=\"last_name\" class=\"form-control\" ng-model=\"user.last_name\"  ng-minlength=\"3\" required>\n" +
    "                    <p ng-show=\"form.last_name.$error.minlength && !form.last_name.pristine\" class=\"error\">You lastname is too short</p>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>Email</label>\n" +
    "                    <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"user.email\" required>\n" +
    "                    <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                        <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                        <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <br>\n" +
    "        <button class=\"btn btn-primary\" ui-sref=\"profile\">Back on profile</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/register/register.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"col-sm-8 col-sm-offset-2\">\n" +
    "        <h1 class=\"page-header\">Registration Form</h1>\n" +
    "        <div id=\"todoPanel\" class=\"panel\" ng-controller=\"RegisterCtrl\">\n" +
    "            <form name=\"form\"  ng-submit=\"submitForm(userForm)\" novalidate>\n" +
    "                <div ng-show=\"!complete\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Firstname</label>\n" +
    "                        <input type=\"text\" name=\"first_name\" class=\"form-control\" ng-model=\"userForm.first_name\"  ng-minlength=\"3\" required>\n" +
    "                        <p ng-show=\"form.first_name.$error.minlength && !form.first_name.pristine\" class=\"error\">You firstname is too short</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Lastname</label>\n" +
    "                        <input type=\"text\" name=\"last_name\" class=\"form-control\" ng-model=\"userForm.last_name\"  ng-minlength=\"3\" required>\n" +
    "                        <p ng-show=\"form.last_name.$error.minlength && !form.last_name.pristine\" class=\"error\">You lastname is too short</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Email</label>\n" +
    "                        <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"userForm.email\" required>\n" +
    "                        <div class=\"error\" ng-show=\"form.email.$invalid && form.email.$dirty\">\n" +
    "                            <span ng-show=\"form.email.$error.email\">Please enter a valid email address</span>\n" +
    "                            <span ng-show=\"form.email.$error.required\">Please enter a value</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Password</label>\n" +
    "                        <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"userForm.password\" ng-minlength=\"5\" required>\n" +
    "                        <div class=\"error\" ng-show=\"form.password.$dirty\">\n" +
    "                            <div class=\"error\" ng-show=\"form.password.$error.required\">This field is required</div>\n" +
    "                            <div class=\"error\" ng-show=\"form.password.$error.minlength && !form.password.pristine\">Password must be at least 5 characters long</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Confirm Password</label>\n" +
    "                        <input type=\"password\" name=\"confirm_password\" class=\"form-control\" ng-model=\"userForm.confirm_password\" password-verify match-target=\"userForm.password\" required>\n" +
    "                        <div class=\"error\" ng-show=\"form.confirm_password.$error.match && form.confirm_password.$dirty\">Passwords do not match.</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"checkbox m-b-md m-t-none\" ng-show=\"!complete\">\n" +
    "                        <label class=\"i-checks\">\n" +
    "                            <input type=\"checkbox\" ng-model=\"userForm.terms\" required><i></i> Agree to the <a href=\"http://www.ixlayer.com/terms/\" target=\"_blank\">Terms and Conditions</a>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"form.$invalid\">Submit</button>\n" +
    "                </div>\n" +
    "\n" +
    "                <br>\n" +
    "\n" +
    "                <div class=\"alert alert-danger\" ng-repeat=\"error in errors\">{{error}}</div>\n" +
    "\n" +
    "                <div ng-if=\"complete == true\">\n" +
    "                    <div class=\"alert alert-success\">Great!  You've just registered.  You should receive an email shortly with instructions on how to activate your account.</div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"verify-email\">\n" +
    "        <a href ui-sref=\"verify_email\">\n" +
    "            Verify Email\n" +
    "        </a>\n" +
    "    </div>\n" +
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
    "    <div class=\"navbar navbar-default\">\n" +
    "      <div class=\"navbar-header\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle\" ng-init=\"menuCollapsed = true\"\n" +
    "          ng-click=\"menuCollapsed = ! menuCollapsed\">\n" +
    "          <span class=\"sr-only\">Toggle navigation</span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <div class=\"navbar-brand\">\n" +
    "          ixlayer\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"collapse navbar-collapse\" collapse=\"menuCollapsed\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "          <li ui-sref-active=\"active\">\n" +
    "            <a href ui-sref=\"home\">\n" +
    "              Home\n" +
    "            </a>\n" +
    "          </li>\n" +
    "          <li ui-sref-active=\"active\">\n" +
    "            <a href ui-sref=\"about\">\n" +
    "              About\n" +
    "            </a>\n" +
    "          </li>\n" +
    "          <li ng-if=\"logged\" ui-sref-active=\"active\">\n" +
    "            <a href ui-sref=\"products\">\n" +
    "              Products\n" +
    "            </a>\n" +
    "          </li>\n" +
    "          <li ng-if=\"logged\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"profile\">\n" +
    "                Profile\n" +
    "              </a>\n" +
    "          </li>\n" +
    "          <li ng-if=\"!logged\" ui-sref-active=\"active\">\n" +
    "            <a href ui-sref=\"register\">\n" +
    "                Registration\n" +
    "            </a>\n" +
    "          </li>\n" +
    "          <li ng-if=\"!logged\" ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"login\">\n" +
    "                Login\n" +
    "              </a>\n" +
    "          </li>\n" +
    "          <li ng-if=\"logged\" ui-sref-active=\"active\">\n" +
    "            <a ng-click=\"logout()\">\n" +
    "              Logout\n" +
    "            </a>\n" +
    "        </li>\n" +
    "          <li ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"dashboard\">\n" +
    "                Dashboard\n" +
    "              </a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>");
}]);
