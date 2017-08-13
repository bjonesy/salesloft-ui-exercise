import '../scss/index.scss';
const axios = require('axios');
import {
  toggleToolMenu,
  toggleLayoutMenu,
  mainMenuToggle
} from '../js/components/toolbar/menus';
import {
  selectAll,
  removeAll,
  selectRead,
  emailFull,
  emailTextFull,
  emailSimple
} from '../js/components/toolbar/functions';
import Email from '../js/components/Email';
import {removeEmail} from '../js/components/email/delete';
import {saveEmail} from '../js/components/email/favorite';
import {spamEmail} from '../js/components/email/spam';
import {emailListChange} from '../js/components/email/functions';
import Sidebar from '../js/components/Sidebar';
import {
  sidebarMenus,
  emailInbox,
  allMail
} from '../js/components/sidebar/menus';
import {
  showAllMail,
  showDeleted,
  showFavorite,
  showSpam
} from '../js/components/sidebar/functions';

document.addEventListener("DOMContentLoaded", () => {

  axios.get('/db/emails.json')
  .then(function (response) {
    Array.from(response.data['messages']).forEach(function (email) {
      // Create the email list from our emails.json file in /db
      // Add the sidebar tags
      let newMail = new Email(email);
      let newSidebar = new Sidebar(email);
      newMail.createEmail(email);
      newSidebar.sidebarTags(email);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

  // Activate the menus
  toggleToolMenu();
  toggleLayoutMenu();
  mainMenuToggle();

  // Toolbar functions
  selectAll();
  removeAll();
  selectRead();
  emailFull();
  emailTextFull();
  emailSimple();

  // Email functions
  emailListChange();
  removeEmail();
  saveEmail();
  spamEmail();

  // Sidebar menus
  sidebarMenus();
  emailInbox();
  allMail();

  // Sidebar functions
  showAllMail();
  showDeleted();
  showFavorite();
  showSpam();
});