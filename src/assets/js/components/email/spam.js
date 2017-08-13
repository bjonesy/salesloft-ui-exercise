/**
 * @module src/assets/js/components/spam
 */
const $ = require('jquery');
/**
 * Send an email to the spam folder.
 * @return {event}
 */
export function spamEmail() {
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