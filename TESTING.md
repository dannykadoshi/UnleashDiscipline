# Unleash Discipline 🏃🏻‍♀️🏃🏻‍♂️

### Deployed Site: [Unleash Discipline](https://dannykadoshi.github.io/UnleashDiscipline/index.html)

<img width="976" alt="am I responsive" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/979439f7-68c7-4d58-959f-3f8543cb6861">

---

## TABLE OF CONTENTS

* [TESTING AND FEEDBACK](testing-and-feedback)

* [AUTOMATED TESTING](automated-testing)
  * [W3C Validator](w3c-validator)
  * [Jigsaw Validator](jigsaw-validator)
  * [JavaScript Validator](javascript-validator)
  * [Lighthouse](lighthouse)

* [MANUAL TESTING](manual-testing)
  * [Testing User Objectives](testing-user-objectives)
  * [Device Testing](device-testing)
  * [Browser Compatibility Testing](browser-compatibility-testing)
  * [User Feedback Testing](user-feedback-testing)

* [KNOWN BUGS](known-bugs)

---

## TESTING AND FEEDBACK

* Throughout the development process of this project, rigorous testing was conducted to ensure the functionality, design, and accessibility of the website. The primary tool used for testing was `Chrome DevTools`, which provided valuable insights into the behavior of the website and allowed for debugging and optimization.

* In addition to testing in the development environment, the website was deployed in the early stages. This allowed for real-time testing and evaluation on various devices and screen sizes, including both computers and mobile devices. By deploying the website, in the early stages I was able to simulate the actual user experience and ensure that all functionalities were working as intended.

* To gather feedback and insights from others, the link to the deployed website was shared with friends and family. Their input and feedback played a vital role in identifying any issues, and providing valuable perspectives on the website's functionalities, design, and accessibility. This iterative process of sharing the website and incorporating feedback helped in refining and enhancing the overall quality of the project.

---

## AUTOMATED TESTING

During the development process, I meticulously tested the website to ensure its high quality and adherence to web standards.

### W3C Validator

No errors were returned when testing the pages.
The following HTML validation tests were performed using the W3 HTML validator:

<img width="1014" alt="W3C-validator" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/4086bb02-5cd5-4975-9e04-d24b6c214af0">

- [Index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdannykadoshi.github.io%2FUnleashDiscipline%2Findex.html)

- [Contact-html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdannykadoshi.github.io%2FUnleashDiscipline%2Fcontact.html)

- [Quiz.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdannykadoshi.github.io%2FUnleashDiscipline%2Fquiz.html)

- [Thankyou.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdannykadoshi.github.io%2FUnleashDiscipline%2Fthankyou.html)

- [404.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdannykadoshi.github.io%2FUnleashDiscipline%2F404.html)

### Jigsaw Validator

During the testing process, the website's CSS code was also validated using the Jigsaw CSS Validator. The validation results can be found at the following link:

<img width="1016" alt="jigsaw-validator" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/ec34c4c7-90be-4ba0-a2cb-5d89c4e40332">

[style.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdannykadoshi.github.io%2FUnleashDiscipline%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### JavaScript Validator

During the testing process, the JavaScript code of the website was analyzed using JSHint to ensure code quality and identify any potential issues. 

Here are the results for each JavaScript file:

`random-quotes.js`
- One unused variable was identified, which refers to the array of quotes used in quiz.js.

<img width="1113" alt="random-quotes js" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/987e7e22-d331-4b75-95cd-2bcfcfd2e679">

`index.js`
- Two undefined variables were detected, both related to the array of quotes defined in quiz.js.

<img width="1115" alt="index js" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/48fb0acc-415b-4507-acb7-7c1f9b03ab20">

`menu.js`
- All code passed the JSHint analysis, indicating that there were no issues or errors detected in this file.

<img width="1112" alt="menu js" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/39ed5d81-57b2-4c97-9359-4564696aa927">

`quiz-questions.js`
- One unused variable was found, which pertains to the questions used in quiz.js.

<img width="1123" alt="quiz-questions js" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/d5da6324-cc48-495d-af3f-08c76bb35e16">

`quiz.js`
- Two unused variables were identified, both referring to the array of quotes used in quiz-questions.js.

<img width="1119" alt="quiz js" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/9858aad7-dfc3-4890-bb67-08496cdcf24e">

---

### Lighthouse

I used Chrome Developer Tools' Lighthouse to test the Performance, Accessibility, Best practices and SEO of the website.

* Main Page
  * Desktop
    <img width="1030" alt="index-desk" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/44c85afc-5290-4d80-8b8e-fd8a01eb2fc9">
    * Mobile
    <img width="1032" alt="index-mob" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/0423ae81-afc6-497d-a011-a101092b1311">


* Quiz Page
  * Desktop
    <img width="1021" alt="quiz-desk" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/ac3d6d39-0db4-4184-9db3-da4330e81857">
    * Mobile
    <img width="1009" alt="quiz-mob" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/25b2d2da-4d36-4c7b-85b6-4ed101d8c7ad">

* Contact Page
  * Desktop
    <img width="1026" alt="contact-desk" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/f2ba0cfc-99c9-4276-a0ae-2638683c8380">
    * Mobile
    <img width="1010" alt="contact-mob" src="https://github.com/dannykadoshi/UnleashDiscipline/assets/129149596/38da2dc0-a668-4771-a008-09df0bb77578">

---

Certainly! Here's a table summarizing the manual testing conducted for your website based on the information we have discussed:

## MANUAL TESTING

### Testing User Objectives

| Goals | How are they achieved? |
| :--- | :--- |
| I want the website to be responsive on different devices. | The website was developed with responsiveness in mind, ensuring it looks and functions well on various devices and screen sizes. |
| I want easy navigation throughout the website. | The website consists of multiple pages, including the main page, quiz page, contact form page, thank you page, and error page. Clear navigation buttons and links are provided on each page, allowing users to easily move between sections and return to the main page or quiz as needed. |
| I want to see the Quote of the Day by Andy Frisella. | The website displays the Quote of the Day on the main page, showcasing a new inspirational quote by Andy Frisella every day. |
| I want to generate random quotes about discipline and consistency. | The website features a random quote generator that utilizes an array of inspirational quotes specifically related to discipline and consistency. Each time the user interacts with the generator, a new quote is generated for their inspiration. |
| I want to play a quiz about quotes and guess the author. | The website offers a quiz section where users are presented with various quotes and have to guess the author. The quiz includes interactive buttons for selecting options, providing immediate feedback on the correctness of their answers, and displaying the score during and after the quiz. |
| I want to view the leaderboard and track my quiz scores. | A leaderboard is implemented within the quiz section, storing the top scores achieved by users locally on their devices. This allows users to view and compare their performance from previous games played. |
| I want to access the game rules. | The website provides a button to access the game rules, allowing users to review them before starting the quiz. |
| I want to share my success story. | The website includes a form where users can share their success stories related to discipline and consistency. Upon submission, a thank you message is displayed to acknowledge their contribution. |

### Device Testing

* **Goal**: Ensure responsiveness to different devices.

Tested the website on various devices and screen sizes, including:

  * Laptop:
    * 14-inch MacBook Pro.
    * Browsers: Google Chrome, Firefox, and Safari.

  * Desktop:
    * Browsers: Google Chrome, Firefox, and Safari.
    * iMac 27" 4k.

  * Mobile:
    * iPhone 14 Pro Max.
      * Browser: Safari.

    * Samsung S22 Ultra.
      * Browsers: Samsung, Chrome.

    * Samsung Note 20 Ultra.
      * Browsers: Samsung, Chrome.

Verified that the website displays properly and functions well on all tested devices and browsers.

* **Goal**: Provide easy navigation throughout the website.

Checked that the site consists of three main pages and two hidden pages:

  * Index.html: Landing page.
  * Quiz.html: Quiz page.
  * Contact.html: Contact form page.
  * Thankyou.html: Thank you message for completing the contact form.
  * 404.html: Error page.

Ensured that the logo serves as a link to the main page, and buttons in each page allow users to navigate to the desired functions.

### Browser Compatibility Testing

* Tested the website on multiple browsers, including:
  * Google Chrome
  * Firefox
  * Safari

### User Feedback Testing

* Involved family and friends in testing the website on various devices, screen sizes, and browsers.
* Gathered feedback to identify any issues or usability concerns.
* No significant issues were reported, indicating a smooth user experience.

By conducting manual testing across different devices, browsers, and user scenarios, the website has been thoroughly evaluated for responsiveness, functionality, and user satisfaction.

---

## KNOWN BUGS

To my knowledge and after all the testing done, there are no known bugs in the website at the time of this writing. The development process and thorough testing have ensured a smooth and bug-free user experience. However, if you encounter any issues or identify any bugs, please feel free to report them so that they can be addressed promptly.

---

BACK TO [README.md](README.md) file
