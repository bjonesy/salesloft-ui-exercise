/**
 * @module src/assets/js/components/sidebar/functions
 */
const $ = require('jquery');
/**
 * Show all emails
 * @return {event}
 */
export function showAllMail() {
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
export function showDeleted() {
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
export function showFavorite() {
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
export function showSpam() {
  $('#spam').on('click', function () {
    $('.mdc-list-item-email').hide();
    $('.mdc-list-item-email.spam').removeClass('selected');
    $('.mdc-list-item-email.spam').find('input').prop('checked', false);
    $('.mdc-list-item-email.spam').show();
  });
}