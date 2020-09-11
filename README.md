# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- See package.json for additional dependencies

## used tools and languages 

- javascript
- ajax
- jQuery
- html
- css 

## Functionalties 
Primarily a client-side Single Page App (SPA)
The client-side app communicates with a server via AJAX

## Display Requirements

### Navigation Bar:

- fixed to the top
- contains Compose button

### Compose Tweet box:

- display above the list of tweets
- contains a form for submitting tweets, which itself contains:
    - textarea for new tweet content
    - left-aligned button for submitting new tweets
- contains a Character Counter, right-aligned, which by default shows 140

### List of Tweets:

- displays tweets in reverse-chronological order (that is, by creation time descending)

### Individual Tweets:

- have a header, which contains the user's:
    - avatar, on the left
    - name, on the left and after the avatar
    - handle, on the right
    - have a body, which contains the tweet text
    - have a footer, which displays:
    how long ago the tweet was created, on the left
- "Flag", "Re-tweet" and "Like" icons upon hovering over the tweet, on the right

## Behaviour

### Character Counter
- When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type 
- The Character Counter turns red when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

### Compose Tweet
- When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed
- When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)

### Compose button
- When a user clicks the Compose button in the Navigation Bar:
    - if the Compose Tweet box is currently hidden, then it is shown.
    - if the Compose Tweet box is currently showing, then it is hidden in either case, transitions between 'shown' and 'hidden' states should be animated
    
### Second Toggle Button
- When a user scrolls a second button appears in the lower right hand corner:
    - if the user clicks this button they are brought back up to the top of the page

The fianl Project :
!["Showes error msg"](https://github.com/SwaniEryani/tweeter/blob/master/Docs/Screen%20Shot%202020-09-10%20at%209.25.12%20PM.png)
!["screen recoed"](https://github.com/SwaniEryani/tweeter/blob/master/Docs/screenrecord.gif)
!["shows the toggle btn"](https://github.com/SwaniEryani/tweeter/blob/master/Docs/Screen%20Shot%202020-09-10%20at%209.30.05%20PM.png)
