# Brain Training

Brain Training is designed to be a game that pushes you to your limits, and lets you compete against your most worthy foe, yourself.

You have 3 levels to choose from where you will have to match cards to their corresponding match in as little time, and as little moves as possible. Once you've completed the levels, feel free to share your scores with your friends and push each other to improve!

[View the live project here!](https://stonemasons4106.github.io/brain-training/)

## UX

This site is designed for everyone of every age to enjoy and to test their skills. It's minimalist in features, focusing on the game itself along with a help menu and a dark mode feature.

For inspiration, I referenced sites like [Helpful Games](https://www.helpfulgames.com/subjects/brain-training/memory.html).

The basic functionality and level progression is how I pictured it, but I put my own spin on the design itself.

Design Features Include:

* **Press Start 2P Font** - This makes it feel very much like NES and like a throwback 90s game, which is intended.

* **Darkmode** - This gives the user to change the color theme based on their preference.

* **How to Play** - A quick instructional is provided on the home page so the user knows exactly what they are getting into before they play.

* **Fixed Hero Images** - Striking hero images give the site a uniform and beautiful display.

* **Mobile Menu** - Consolidating the menu down for mobile devices lets it be flexible for device size.

* **Facebook Login** - Login for Facebook available so you can receive your scores to the email that is on your Facebook profile.

Types of users along with their needs are as follows:

* User Stories - End User
    * As someone who enjoys playing online games, I want it to be challenging enough to hold my attention.
    * As someone who enjoys playing online games, I want to be able to keep track of my scores and see myself improve.
    * As someone who enjoys playing online games, I want it to be visually appealing and easy to navigate.
    * As someone who enjoys playing online games, there should be something that shows you how to play the game.

* User Stories - Creator of the Site
    * As the creator of the game, I want people to enjoy playing the game. So it has to be both visually appealing and challenging enough to hold someone's attention.
    * As the creator of the game, I want people to not feel like it is impossible to beat either.
    * As the creator of the game, I want people to be able to keep track of their scores to see themselves improve.

Here are some links to wireframes that I had drawn up during the process:

[Brain Training - Desktop](brain_training_desktop.pdf)

[Brain Training - Tablet](brain_training_tablet.pdf)

[Brain Training - Mobile](brain_training_mobile.pdf)

## Features

* Responsive on nearly every conceivable device size.
* Interactive elements.
* Connection to Facebook through JS SDK.
* Connection to emailJS to receive scores after completion of a level. (Requires login to Facebook)

## Technologies Used

**Languages Used**

* HTML5
* CSS3
* JavaScript

**Frameworks, Libraries & Programs Used**

1. [Bootstrap 5.0.0](https://getbootstrap.com/)
    * Bootstrap was used to assist with the responsiveness and styling of the website.

2. [Google Fonts](https://fonts.google.com/)
    *  Google fonts were used to import the 'Press Start' font into the style.css file which is used on across the project to give it a retro NES feel.

3. [Font Awesome](https://fontawesome.com/)
    * Font Awesome was used on all pages throughout the website to add icons for aesthetic purposes.

4. [Git](https://git-scm.com/)
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

5. [GitHub](https://github.com/)
    * GitHub is used to store the project's code after being pushed from Git.

6. [Balsamiq](https://balsamiq.com/)
    * Balsamiq was used to create the wireframes during the design process.

7. [JQuery](https://jquery.com/)
    * JQuery was used to write shorter, simpler Javascript.

8. [Facebook](https://www.facebook.com/)
    * Facebook is used so people can log in and receive their scores at the email associated with their profile.

9. [EmailJS](https://www.emailjs.com/)
    * EmailJS is the service that controls sending the scores to the players.

10. [Hover.css](https://ianlunn.github.io/Hover/)
    * Hover.css is used in the buttons to levels 1 2 and 3 changing the text color to white upon hovering over them.
       
## Testing

I used the W3C Markup Validator and W3C CSS Validator Services to validate every page of the project and ensure there were no syntax errors in the project.

[W3C Markup Validator](https://validator.w3.org/)

[W3C CSS Validator](http://jigsaw.w3.org/css-validator/)

### Testing User Stories from UX Section

* End User
    * As someone who enjoys playing online games, I want it to be challenging enough to hold my attention.
        * There are 3 levels with increasing levels of difficulty to hold the players attention.
    * As someone who enjoys playing online games, I want to be able to keep track of my scores and see myself improve.
        * You can log into Facebook and email yourself your recent scores so you can go back to try to beat yourself.
    * As someone who enjoys playing online games, I want it to be visually appealing and easy to navigate.
        * Striking hero images and colorful design make it visually appealing, and each section is clearly marked so first time users can navigate with ease.
    * As someone who enjoys playing online games, there should be something that shows you how to play the game.
        * There is a how to play modal on the home page to give an overview before you play.

* Creator
    * As the creator of the game, I want people to enjoy playing the game. So it has to be both visually appealing and challenging enough to hold someone's attention.
        * Striking hero images and colorful design make it visually appealing, and levels that increase in difficulty make it challenging for the player.
    * As the creator of the game, I want people to not feel like it is impossible to beat either.
        * There are varying levels for varying skillsets for people to choose and improve.
    * As the creator of the game, I want people to be able to keep track of their scores to see themselves improve.
        * One can easily log into Facebook and email themselves their scores.

### Further Testing
    
* The site was tested on a variety of devices from desktop to mobile to tablet. Other devices were simulated through Chrome dev tools.
    
* Lighthouse was used to test the pages of this site.
    * No category tested lower than 79. Performance was lower due to the amount of images loaded for the cards on each level.
    
* Browsers used to test include Chrome, Edge, Safari, and Samsung Internet.
    
* All links were properly tested and operational.

### Known Bugs

* On mobile devices, the hero image will resize when the URL bar disappears or reappears.
    
## Deployment

### Github Pages

This project was deployed to GitHub Pages using the steps below:

1. Log into GitHub and locate the [GitHub Repository](https://github.com/StoneMasons4106/brain-training).
2. Locate the Repository settings wheel, not the page settings wheel, and click it.
3. Scroll until you see the GitHub pages section.
4. Instead of 'None', select 'Master Branch'.
5. After the page refreshes, scroll down until you see the link to the now deployed page.

### Forking the Repository

You can fork the repository and create a copy for yourself in your own account.

1. Log into GitHub and locate the [GitHub Repository](https://github.com/StoneMasons4106/brain-training).
2. Locate the Fork button, next to the repository settings button.
3. Go to your repositories, and you should see a copy made for you to edit as you please.

### Local Clone

If you'd like to have a copy on your local machine, follow the steps below:

1. Log into GitHub and locate the [GitHub Repository](https://github.com/StoneMasons4106/brain-training).
2. Under the name of the repository, click 'Clone or Download'.
3. Click 'Clone with HTTPS', and copy the link.
4. Open Git Bash on your local computer.
5. Change the directory to where you want the clone located.
6. Type ```git clone``` and paste the URL from step 3.
7. Hit enter. A local clone was now created in the directory you specified.

## Credits

#### Media

* All images came from [Pixabay](https://pixabay.com/).

#### Content

* All content was written by the developer.

#### Code

* [Bootstrap 5.0.0](https://getbootstrap.com/) was used throughout the project mainly to make the site responsive using the Bootstrap Grid System.

* [Font Awesome](https://fontawesome.com/) was used to make the icons in the navigation bar, the Facebook button, as well as the winning modal.

* Putting variables in local storage came from this [Stack Overflow](https://stackoverflow.com/questions/16245536/setting-a-variable-in-local-storage) post.

* The code for the timer in my levels came from this [CodePen](https://codepen.io/reynnor/pen/vmNaeM) post.

* The code for getting my cards to flip came from this [Dev.to](https://dev.to/mugas/flip-cards-with-javascript-2ad0) post.

* The algorithm for shuffling an array in Javascript came from this [Medium.com](https://medium.com/@khaledhassan45/how-to-shuffle-an-array-in-javascript-6ca30d53f772) post.

#### Acknowledgments

* My mentor for continuous and helpful support/design suggestions.