const registrationForm = document.querySelector("#registrationForm");

registrationForm.onsubmit = (e) => {
  e.preventDefault();

  const userId = document.querySelector("#user-id");
  const password = document.querySelector("#password");
  const userName = document.querySelector("#user-name");
  const address = document.querySelector("#address");
  const country = document.querySelector("#country");
  const zipCode = document.querySelector("#zip-code");
  const email = document.querySelector("#email");
  const sex = document.querySelector('input[name="sex"]:checked');
  const language = document.querySelector('input[name="language"]:checked');
  const about = document.querySelector("#about");

  // Required all inputs
  //   if (
  //     userId.value == "" ||
  //     password.value == "" ||
  //     userName.value == "" ||
  //     address.value == "" ||
  //     country.value == "" ||
  //     zipCode.value == "" ||
  //     email.value == "" ||
  //     about.value == "" ||
  //     !language[0].checked ||
  //     !language[1].checked ||
  //     !sex[0].checked ||
  //     !sex[1].checked
  //   ) {

  //   }
  const userIdValue = userId.value;
  if (!userIdValue || userIdValue.length < 5 || userIdValue.length > 12) {
    const errorUserId = document.querySelector(".error-user-id");
    errorUserId.textContent = "Required and Must Be 5 to 12";
    const errorUserIdInterval = setInterval(() => {
      errorUserId.textContent = "";
      clearInterval(errorUserIdInterval);
    }, 2000);
  }

  const passwordValue = password.value;
  if (!passwordValue || passwordValue.length < 7 || passwordValue.length > 12) {
    const errorPassword = document.querySelector(".error-user-password");
    errorPassword.textContent = "Required and Must Be 7 to 12";
    const errorPasswordInterval = setInterval(() => {
      errorPassword.textContent = "";
      clearInterval(errorPasswordInterval);
    }, 2000);
  }

  const userNameValue = userName.value;
  const charIsLetter = (char) => {
    if (typeof char !== "string") {
      return false;
    }

    return /^[a-zA-Z]+$/.test(char);
  };
  if (!charIsLetter(userNameValue)) {
    const errorUserName = document.querySelector(".error-user-name");
    errorUserName.textContent = "Required and Alphabet Only";
    const errorUserNameInterval = setInterval(() => {
      errorUserName.textContent = "";
      clearInterval(errorUserNameInterval);
    }, 2000);
  }

  const countryValue = country.value;
  if (!countryValue) {
    const errorUserCountry = document.querySelector(".error-user-country");
    errorUserCountry.textContent = "Required & Must Select a country";
    const errorUserCountryInterval = setInterval(() => {
      errorUserCountry.textContent = "";
      clearInterval(errorUserCountryInterval);
    }, 2000);
  }

  const zipCodeValue = zipCode.value;
  if (isNaN(zipCodeValue) || !zipCodeValue) {
    const errorUserZipCode = document.querySelector(".error-user-zipCode");
    errorUserZipCode.textContent = "Required and Must be a 4 digit number";
    const errorUserZipCodeInterval = setInterval(() => {
      errorUserZipCode.textContent = "";
      clearInterval(errorUserZipCodeInterval);
    }, 2000);
  }

  const emailValue = email.value;
  if (!emailValue || !validateEmail(emailValue)) {
    const errorUserEmail = document.querySelector(".error-user-email");
    errorUserEmail.textContent = "Required and Must be a valid email";
    const errorUserEmailInterval = setInterval(() => {
      errorUserEmail.textContent = "";
      clearInterval(errorUserEmailInterval);
    }, 2000);
  }

  const validateEmail = (char) => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      char
    );
  };

  if (sex == null) {
    const errorUserSex = document.querySelector(".error-user-sex");
    errorUserSex.textContent = "* Required";
    const errorUserSexInterval = setInterval(() => {
      errorUserSex.textContent = "";
      clearInterval(errorUserSexInterval);
    }, 2000);
  }

  if (language == null) {
    const errorUserLanguage = document.querySelector(".error-user-language");
    errorUserLanguage.textContent = "* Required";
    const errorUserLanguageInterval = setInterval(() => {
      errorUserLanguage.textContent = "";
      clearInterval(errorUserLanguageIdInterval);
    }, 2000);
  }

  // Disable Button
  const registerButton = document.querySelector("#register-button");
  registerButton.disabled = true;
  const registerButtonInterval = setInterval(() => {
    registerButton.disabled = false;
    clearInterval(registerButtonInterval);
  }, 2000);
};

// CODE BY: MARK RESMA DACURAWAT
