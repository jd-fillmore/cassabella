/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const myNav = document.getElementsByClassName("sticky-top")

window.onscroll = function() {
  if (document.body.scrollTop >= 200) {
    myNav.css("background", "transparent")
  } else {
    myNav.css("background", "red")
  }
}
