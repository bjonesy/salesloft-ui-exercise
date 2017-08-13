/**
 * @module src/assets/js/components/toolbar/functions
 */
const $ = require('jquery');
/**
 * Select all emails at once
 * @return {event}
 */
export function selectAll() {
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
 * Deselect all emails at once
 * @return {event}
 */
export function removeAll() {
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
export function selectRead() {
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
export function emailFull() {
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
export function emailTextFull() {
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
export function emailSimple() {
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