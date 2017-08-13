import '../scss/index.scss';
const menu = document.getElementById('emails-list');
var MDCCheckbox = global.mdc.checkbox.MDCCheckbox;
const axios = require('axios');
const $ = require('jquery');

/**
 * Load all the functions after the page loads.
 * @return {functions}
 */
window.onload = function () {
  // Toggle the toolbar menu
  toggleToolMenu();
  // Toggle the layout menu
  toggleLayoutMenu();
  // Toggle the main menu
  mainMenuToggle();
  // Create the email list
  getEmails();
  // Add change events to the email list items
  emailListChange();
  // Remove an email
  removeEmail();
  // Save an email
  saveEmail();
  // Spam email
  spamEmail();
  // Inbox
  emailInbox();
  // All mail
  allMail();
  // Select all
  selectAll();
  // Remove all selected
  removeAll();
  // Select read messages
  selectRead();
  // Expand email view
  emailFull();
  // Increase email text
  emailTextFull();
  // Email simple layout
  emailSimple();
  // Show all mail
  showAllMail();
  // Show deleted emails
  showDeleted();
  // Show Favorite Emails
  showFavorite();
  // Show Spam Emails
  showSpam();
  // Delete all read emails
  deleteRead();
  // Save all read emails
  saveRead();
  // Spam all read emails
  spamRead();
}

/**
 * Perform a GET request to the emails.json file in /db.
 * @return {object}
 */
function getEmails() {
  axios.get('/db/emails.json')
    .then(function (response) {
      Array.from(response.data['messages']).forEach(function (email) {
        // Create the email list from our emails.json file in /db
        createEmail(email);
        // Add sidebar tags
        sidebarTags(email);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * Create emails.
 * @return {HTML object}
 */
function createEmail(email) {
  // Create the list item
  const list_item = document.createElement('li');
  // Create the list item text
  const list_text = document.createElement('div');
  // Create the list item subject
  const list_subject = document.createElement('span');
  // Create the list sender
  const list_sender = document.createElement('span');
  // Create the list item message
  const list_message = document.createElement('span');
  const list_message_full = document.createElement('span');
  // Create the time stamp for the list item
  const list_end = document.createElement('span');

  // Add classes to the list item
  list_item.classList.add('mdc-list-item-email', 'mdc-list-item', 'mdc-ripple-upgraded', 'normal');
  // Add a class to the list item text container
  list_text.classList.add('mdc-list-item__text');
  // Add a class to the list item subject container
  list_subject.classList.add('mdc-list-item__subject');
  // Add a class to the list item sender
  list_sender.classList.add('mdc-list-item__sender');
  // Add a class to the list item message container
  list_message.classList.add('mdc-list-item__text__secondary', 'preview');
  list_message_full.classList.add('mdc-list-item__text__secondary', 'hidden');
  // Add a class to the list item timestamp container
  list_end.classList.add('mdc-list-item__end-detail');
  createCheckbox(list_item);
  list_sender.innerHTML = email['sender'];
  // Add the email subjects into the list item subject container
  list_text.innerHTML = email['subject'];
  // Limit the amount of characters in the message when previewing
  list_message.innerHTML = list_sender.outerHTML + email['body'].substring(0, 100) + '...';
  list_message_full.innerHTML = list_sender.outerHTML + email['body'];
  // Change the time stamp into a readable string
  list_end.innerHTML = new Date(email['date']).toLocaleString();
  //list_message_full.appendChild(list_sender);
  list_text.appendChild(list_message);
  list_text.appendChild(list_message_full);
  // Add the list item message
  list_item.appendChild(list_text);
  // Add the list item timestamp
  list_item.appendChild(list_end);
  menu.appendChild(list_item);
}

/**
 * Create emails checkbox.
 * @return {HTML object}
 */
function createCheckbox(element) {
  // Create the checkbox
  const divCheckbox = document.createElement('div');
  // Create the checkbox input
  const checkboxInput = document.createElement('input');
  const checkboxLabel = document.createElement('label');
  // Create the checkbox inner html
  const checkboxBg = document.createElement('div');
  const checkboxSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  const checkboxSvgPath = document.createElement('path');
  const checkboxMark = document.createElement('div');

  checkboxInput.setAttribute('type', 'checkbox');
  checkboxInput.classList.add('mdc-checkbox__native-control');
  checkboxLabel.classList.add('mdc-checkbox__label');
  // Build the checkox SVG
  checkboxBg.classList.add('mdc-checkbox__background');
  checkboxMark.classList.add('mdc-checkbox__mixedmark');
  checkboxSvg.classList.add('mdc-checkbox__checkmark');
  checkboxSvg.setAttribute('viewBox', '0 0 24 24');
  checkboxSvgPath.classList.add('mdc-checkbox__checkmark__path');
  checkboxSvgPath.setAttribute('fill', 'none');
  checkboxSvgPath.setAttribute('stroke', 'white');
  checkboxSvgPath.setAttribute('d', 'M1.73,12.91 8.1,19.28 22.79,4.59');
  checkboxSvg.appendChild(checkboxSvgPath);
  checkboxBg.appendChild(checkboxSvg);
  checkboxBg.appendChild(checkboxMark);
  divCheckbox.classList.add('mdc-checkbox');
  divCheckbox.appendChild(checkboxInput);
  divCheckbox.appendChild(checkboxLabel);
  divCheckbox.appendChild(checkboxBg);
  element.appendChild(divCheckbox);
}

/**
 * Add the email tags to the sidebar menu.
 * @return {object}
 */
function sidebarTags(email) {
  Array.from(email['tags']).forEach(function (tags) {
    $('#mdc-tags').append('<span class="mdc-tag">' + tags + '</span>');
  });
}

/**
 * Toggle toolbar menu.
 * @return {event}
 */
function toggleToolMenu() {
  // Toggle the menu
  const emailMenuEl = document.querySelector('#toolbar-menu');
  const emailMenu = new mdc.menu.MDCSimpleMenu(emailMenuEl);
  const emailMenuToggle = document.querySelector('.toggle');
  emailMenuToggle.addEventListener('click', function () {
    emailMenu.open = !emailMenu.open;
  });
}

/**
 * Toggle layout menu.
 * @return {event}
 */
function toggleLayoutMenu() {
  // Toggle the menu
  const lyMenuEl = document.querySelector('#layout-menu');
  const lyMenu = new mdc.menu.MDCSimpleMenu(lyMenuEl);
  const lyMenuToggle = document.querySelector('.layout-toggle');
  lyMenuToggle.addEventListener('click', function () {
    lyMenu.open = !lyMenu.open;
  });
}

/**
 * Toggle the main menu sidebar.
 * @return {event}
 */
function mainMenuToggle() {
  let drawerEl = document.querySelector('.mdc-persistent-drawer');
  let MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
  let drawer = new MDCPersistentDrawer(drawerEl);
  document.querySelector('.demo-menu').addEventListener('click', function () {
    drawer.open = !drawer.open;
  });
  drawerEl.addEventListener('MDCPersistentDrawer:open', function () {
    document.querySelector('.demo-menu').classList.add('open');
    document.querySelector('.demo-menu').innerHTML = 'clear';
  });
  drawerEl.addEventListener('MDCPersistentDrawer:close', function () {
    document.querySelector('.demo-menu').classList.remove('open');
    document.querySelector('.demo-menu').innerHTML = 'menu';
  });

  $('#sidebar-list-one').on('click', 'a', function(event) {
    $(this).removeClass('mdc-persistent-drawer--selected');

    if (!$(this).hasClass('mdc-persistent-drawer--selected')) {
      $(this).addClass('mdc-persistent-drawer--selected');
    }
    $(this).siblings().removeClass('mdc-persistent-drawer--selected');
    $('#sidebar-list-two').find('a').removeClass('mdc-persistent-drawer--selected');
  });

  $('#sidebar-list-two').on('click', 'a', function(event) {
    $(this).removeClass('mdc-persistent-drawer--selected');
    if (!$(this).hasClass('mdc-persistent-drawer--selected')) {
      $(this).addClass('mdc-persistent-drawer--selected');
    }
    $(this).siblings().removeClass('mdc-persistent-drawer--selected');
    $('#sidebar-list-one').find('a').removeClass('mdc-persistent-drawer--selected');
  });
}

/**
 * Toggle classes when each email is clicked.
 * @return {event}
 */
function emailListChange() {
  $('#emails-list').on('click', 'LI', function () {
    $(this).removeClass('selected');
    if (!$(this).hasClass('selected')) {
      $(this).addClass('selected');
      $(this).find('input').addClass('selected');
      $(this).find('input').prop('checked', true);
      if (!$(this).hasClass('read')) {
        $('#inbox-number').html(parseInt($('#inbox-number').html()) - 1);
      }
      $(this).addClass('read');
    }
    $(this).siblings().removeClass('selected');
    $(this).siblings().find('input').prop('checked', false);

  });
}

/**
 * Delete an email
 * @return {event}
 */
function removeEmail() {
  let count = 0;
  $('#delete-email').on('click', function () {
    $('.mdc-list-item-email.selected').addClass('deleted');
    $('.mdc-list-item-email.deleted').hide();
    $('.mdc-list-item-email.deleted').removeClass('selected');
    $('.mdc-list-item-email.deleted').removeClass('normal');
    $('.mdc-list-item-email.deleted').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let count = $('.mdc-list-item-email.deleted').length;
    $('#trash-number').html(count);
    $('#all-number').html(allcount);
    if ($('#all-number').html() < 0) {
      allcount  = 0;
      $('#all-number').html(parseInt(allcount));
    }
  });

  $('#delete-all').on('click', function () {
    $('.mdc-list-item-email.selected').addClass('deleted');
    let count = $('.mdc-list-item-email.selected.deleted').length;
    $('.mdc-list-item-email.selected.deleted').hide();
    $('.mdc-list-item-email.deleted').removeClass('selected');
    $('.mdc-list-item-email.deleted').removeClass('normal');
    $('.mdc-list-item-email.deleted').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.read').length;
    let trashcount = $('.mdc-list-item-email.deleted').length;
    $('#trash-number').html(trashcount);
    $('#inbox-number').html(inboxcount + allcount);
    $('#all-number').html(allcount);
    if ($('#all-number').html() < 0) {
      count  = 0;
      $('#all-number').html(parseInt(count));
    }
    if ($('#inbox-number').html() < 0) {
      count  = 0;
      $('#inbox-number').html(parseInt(count));
    }
    $('#delete-email').show();
    $(this).hide();
  });
}

/**
 * Save an email
 * @return {event}
 */
function saveEmail() {
  let count = 0;
  $('#save-email').on('click', function () {
    $('.mdc-list-item-email.selected').addClass('saved');
    $('.mdc-list-item-email.saved').hide();
    $('.mdc-list-item-email.saved').removeClass('selected');
    $('.mdc-list-item-email.saved').removeClass('normal');
    $('.mdc-list-item-email.saved').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.read').length;
    let count = $('.mdc-list-item-email.saved').length;
    $('#favorite-number').html(count);
    $('#all-number').html(allcount);
    $('#inbox-number').html(allcount + inboxcount);
  });

  $('#save-all').on('click', function () {
    $('.mdc-list-item-email.selected').addClass('saved');
    let count = $('.mdc-list-item-email.selected.saved').length;
    $('.mdc-list-item-email.saved').hide();
    $('.mdc-list-item-email.saved').removeClass('selected');
    $('.mdc-list-item-email.saved').removeClass('normal');
    $('.mdc-list-item-email.saved').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.read').length;
    let savecount = $('.mdc-list-item-email.saved').length;
    $('#favorite-number').html(savecount);
    $('#inbox-number').html(inboxcount + allcount);
    $('#all-number').html(allcount);
    if ($('#all-number').html() < 0) {
      count  = 0;
      $('#all-number').html(parseInt(count));
    }
    if ($('#inbox-number').html() < 0) {
      count  = 0;
      $('#inbox-number').html(parseInt(count));
    }
    $('#save-email').show();
    $(this).hide();
  });
}

/**
 * Send an email to the spam folder.
 * @return {event}
 */
function spamEmail() {
  let count = 0;
  $('#spam-email').on('click', function () {
    $('.mdc-list-item.selected').addClass('spam');
    $('.mdc-list-item.spam').hide();
    $('.mdc-list-item-email.spam').removeClass('selected');
    $('.mdc-list-item-email.spam').removeClass('normal');
    $('.mdc-list-item-email.spam').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.read').length;
    let count = $('.mdc-list-item.spam').length;
    $('#spam-number').html(count);
    $('#inbox-number').html(inboxcount + allcount);
    $('#all-number').html(allcount);
    if ($('#all-number').html() < 0) {
      count = 0;
      $('#all-number').html(parseInt(count));
    }
    if ($('#inbox-number').html() < 0) {
      count  = 0;
      $('#inbox-number').html(parseInt(count));
    }
  });

  $('#spam-all').on('click', function () {
    $('.mdc-list-item-email.selected').addClass('spam');
    let count = $('.mdc-list-item-email.selected.spam').length;
    $('.mdc-list-item-email.spam').hide();
    $('.mdc-list-item-email.spam').removeClass('selected');
    $('.mdc-list-item-email.spam').removeClass('normal');
    $('.mdc-list-item-email.spam').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.read').length;
    let spamcount = $('.mdc-list-item-email.spam').length;
    $('#spam-number').html(spamcount);
    $('#inbox-number').html(inboxcount + allcount);
    $('#all-number').html(allcount);
    if ($('#all-number').html() < 0) {
      count  = 0;
      $('#all-number').html(parseInt(count));
    }
    if ($('#inbox-number').html() < 0) {
      count  = 0;
      $('#inbox-number').html(parseInt(count));
    }
    $('#spam-email').show();
    $(this).hide();
  });
}

/**
 * Inbox number
 * @return {number}
 */
function emailInbox() {
  $('.mdc-list-item').each(function (index) {
    $('#inbox-number').html(index - 2);
  });
}

/**
 * All mail number
 * @return {number}
 */
function allMail() {
  $('.mdc-list-item').each(function (index) {
    $('#all-number').html(index - 2);
  });
}

/**
 * Select all emails at once
 * @return {event}
 */
function selectAll() {
  $('#select-all').on('click', function () {
    $('#delete-email').hide();
    $('#delete-read').hide();
    $('#delete-all').show();
    $('#save-email').hide();
    $('#save-all').show();
    $('#save-read').hide();
    $('#spam-email').hide();
    $('#spam-all').show();
    $('#save-read').hide();
    $('.mdc-list-item-email.normal').each(function (index) {
      $(this).find('input').prop('checked', true);
      $(this).addClass('selected');
    });
  });
}

/**
 * Delete all emails at once
 * @return {event}
 */
function deleteRead() {
  $('#delete-read').on('click', function () {
    $('.mdc-list-item-email.read').addClass('deleted');
    $('.mdc-list-item-email.selected.read.deleted').hide();
    $('.mdc-list-item-email.deleted').removeClass('selected');
    $('.mdc-list-item-email.deleted').removeClass('normal');
    $('.mdc-list-item-email.deleted').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.read').length;
    let trashcount = $('.mdc-list-item-email.deleted').length;
    $('#trash-number').html(trashcount);
    $('#inbox-number').html(inboxcount + allcount);
    $('#all-number').html(allcount);
    if ($('#all-number').html() < 0) {
      allcount  = 0;
      $('#all-number').html(parseInt(allcount));
    }
    if ($('#inbox-number').html() < 0) {
      inboxcount  = 0;
      $('#inbox-number').html(parseInt(inboxcount));
    }
    $('#delete-email').show();
    $('#delete-all').hide();
    $('#save-email').show();
    $('#save-all').hide();
    $('#save-read').hide();
    $('#spam-email').show();
    $('#spam-all').hide();
    $('#spam-read').hide();
    $(this).hide();
  });

}

/**
 * Delete all read emails at once
 * @return {event}
 */
function saveRead() {
  $('#save-read').on('click', function () {
    $('.mdc-list-item-email.read').addClass('saved');
    $('.mdc-list-item-email.selected.read.saved').hide();
    $('.mdc-list-item-email.saved').removeClass('selected');
    $('.mdc-list-item-email.saved').removeClass('normal');
    $('.mdc-list-item-email.saved').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.read').length;
    let savecount = $('.mdc-list-item-email.saved').length;
    $('#favorite-number').html(savecount);
    $('#inbox-number').html(inboxcount + allcount);
    $('#all-number').html(allcount);
    if ($('#all-number').html() < 0) {
      allcount  = 0;
      $('#all-number').html(parseInt(allcount));
    }
    if ($('#inbox-number').html() < 0) {
      inboxcount  = 0;
      $('#inbox-number').html(parseInt(inboxcount));
    }
    $('#delete-all').hide();
    $('#delete-email').show();
    $('#delete-read').hide();
    $('#save-email').show();
    $('#save-all').hide();
    $('#spam-email').show();
    $('#spam-all').hide();
    $('#spam-read').hide();
    $(this).hide();
  });

}

/**
 * Spam all read emails at once
 * @return {event}
 */
function spamRead() {
  $('#spam-read').on('click', function () {
    $('.mdc-list-item-email.read').addClass('spam');
    $('.mdc-list-item-email.selected.read.spam').hide();
    $('.mdc-list-item-email.spam').removeClass('selected');
    $('.mdc-list-item-email.spam').removeClass('normal');
    $('.mdc-list-item-email.spam').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.read').length;
    let spamcount = $('.mdc-list-item-email.spam').length;
    $('#spam-number').html(spamcount);
    $('#inbox-number').html(inboxcount + allcount);
    $('#all-number').html(allcount);
    if ($('#all-number').html() < 0) {
      allcount  = 0;
      $('#all-number').html(parseInt(allcount));
    }
    if ($('#inbox-number').html() < 0) {
      inboxcount  = 0;
      $('#inbox-number').html(parseInt(inboxcount));
    }
    $('#spam-email').show();
    $('#delete-all').hide();
    $('#delete-email').show();
    $('#delete-read').hide();
    $('#save-email').show();
    $('#save-all').hide();
    $('#save-read').hide();
    $('#spam-all').hide();
    $(this).hide();
  });

}

/**
 * Deselect all emails at once
 * @return {event}
 */
function removeAll() {
  $('#select-none').on('click', function () {
    $('.mdc-list-item-email').each(function (index) {
      $(this).find('input').prop('checked', false);
      $(this).removeClass('selected');
    });
  });
}

/**
 * Select all emails that have been read
 * @return {event}
 */
function selectRead() {
  $('#select-read').on('click', function () {
    $('#delete-email').hide();
    $('#delete-read').show();
    $('#spam-email').hide();
    $('#spam-read').show();
    $('#save-email').hide();
    $('#save-read').show();
    $('.mdc-list-item-email.normal').each(function (index) {
      if ($(this).hasClass('read')) {
        $(this).find('input').prop('checked', true);
        $(this).addClass('selected');
      }
    });
  });
}

/**
 * Expand the email to full view
 * @return {event}
 */
function emailFull() {
  $('#email-layout').on('click', function () {
    $('.mdc-list-item-email').each(function (index) {
      if ($(this).hasClass('expand')) {
        $(this).removeClass('expand');
      } else {
        $(this).addClass('expand');
      }
    });
  });
}

/**
 * Make the email font larger
 * @return {event}
 */
function emailTextFull() {
  $('#email-textfull').on('click', function () {
    $('.mdc-list-item-email').each(function (index) {
      if ($(this).hasClass('text-larger')) {
        $(this).removeClass('text-larger');
      } else {
        $(this).addClass('text-larger');
      }
    });
  });
}

/**
 * Make the email layout minimal
 * @return {event}
 */
function emailSimple() {
  $('#email-simple').on('click', function () {
    $('.mdc-list-item-email').each(function (index) {
      if ($(this).hasClass('simple')) {
        $(this).removeClass('simple');
      } else {
        $(this).addClass('simple');
      }
    });
  });
}

/**
 * Show all emails
 * @return {event}
 */
function showAllMail() {
  $('#all-mail').on('click', function () {
    $('.mdc-list-item-email').show();
    $('.mdc-list-item.deleted').hide();
    $('.mdc-list-item-email.saved').hide();
    $('.mdc-list-item-email.favorite').hide();
    $('.mdc-list-item-email.spam').hide();
  });

  $('#inbox').on('click', function () {
    $('.mdc-list-item-email').show();
    $('.mdc-list-item.read').hide();
    $('.mdc-list-item.deleted').hide();
    $('.mdc-list-item-email.saved').hide();
    $('.mdc-list-item-email.favorite').hide();
    $('.mdc-list-item-email.spam').hide();
  });
}

/**
 * Show all deleted emails
 * @return {event}
 */
function showDeleted() {
  $('#trash').on('click', function () {
    $('.mdc-list-item-email').hide();
    $('.mdc-list-item-email.deleted').removeClass('selected');
    $('.mdc-list-item-email.deleted').find('input').prop('checked', false);
    $('.mdc-list-item-email.deleted').show();
  });
}

/**
 * Show all favorited emails
 * @return {event}
 */
function showFavorite() {
  $('#favorite').on('click', function () {
    $('.mdc-list-item-email').hide();
    $('.mdc-list-item-email.saved').removeClass('selected');
    $('.mdc-list-item-email.saved').find('input').prop('checked', false);
    $('.mdc-list-item-email.saved').show();
  });
}

/**
 * Show all spam emails
 * @return {event}
 */
function showSpam() {
  $('#spam').on('click', function () {
    $('.mdc-list-item-email').hide();
    $('.mdc-list-item-email.spam').removeClass('selected');
    $('.mdc-list-item-email.spam').find('input').prop('checked', false);
    $('.mdc-list-item-email.spam').show();
  });
}