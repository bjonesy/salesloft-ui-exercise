/**
 * @module src/assets/js/components/sidebar/menus
 */
const $ = require('jquery');
/**
 * Toggle the main menu sub menus.
 * @return {event}
 */
export function sidebarMenus() {
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
 * Inbox number
 * @return {number}
 */
export function emailInbox() {
  $('.mdc-list-item').each(function (index) {
    $('#inbox-number').html(index - 2);
  });
}

/**
 * All mail number
 * @return {number}
 */
export function allMail() {
  $('.mdc-list-item').each(function (index) {
    $('#all-number').html(index - 2);
  });
}
