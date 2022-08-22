const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<div ng-if="!isUserLoggedin">
            <a href="#" ng-click="loginFormRedirect()">{{formName}}</a>

            <!-- Registration form -->
            <form ng-if="!isLoginFormDisplayed" ng-submit="btnClick(registrationId, registrationPWD)" name="registrationForm" id="registrationForm">
                <h1>Register</h1>
                <label for="registrationId">Email Id:</label><br/>
                <input type="text" id="registrationId" name="registrationId" ng-model="registrationId" /><br/>
                <label for="registrationPWD">password:</label><br />
                <input type="password" id="registrationPWD" name="registrationPWD" ng-model="registrationPWD" ng-pattern="validatePassword"/><br /><br />
                <button value="Submit">Sign Up</button>
            </form>

            <!-- Login form -->
            <form ng-if="isLoginFormDisplayed" ng-submit="login(loginId, loginPWD)" name="loginForm" id="loginForm">
                <h1>Login</h1>
                <label for="loginId">Email Id:</label><br/>
                <input type="text" id="loginId" name="loginId" ng-model="loginId" ng-pattern="emailValidator"/><br/>
                <label for="loginPWD">password:</label><br/>
                <input type="password" id="loginPWD" name="loginPWD" ng-model="loginPWD" ng-pattern="validatePassword"/><br/><br/>
                <span class="error" ng-show="loginForm.emailid.$error.pattern">Please enter a proper email id</span>
                <!-- <span class="error" id="mobile_no_err" ng-show="loginForm.password.$error.pattern">Your password should contain atleast 8 characters, at least one capital letter, one small letter, one number and one special character</span><br> -->
                <button value="Submit">Login</button>
            </form>

            <form ng-submit="verifyOTP(OTP)" id="OTP-modal" style="display: none">
                <label for ="OTP">Please enter the OTP</label><br/>
                <input type="text" id="OTP" name="OTP" ng-model="OTP">
                <button value="submit" ng-click="">Submit</button>
            </form>
        </div>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);