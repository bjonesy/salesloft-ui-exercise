/**
 * @module src/assets/js/components/favorite
 */
const $ = require('jquery');
/**
 * Save an email
 * @return {event}
 */
export function saveEmail() {
  let count = 0;
  $('#save-email').on('click', function () {
    $('.mdc-list-item-email.selected').addClass('saved');
    $('.mdc-list-item-email.saved').hide();
    $('.mdc-list-item-email.saved').removeClass('selected');
    $('.mdc-list-item-email.saved').removeClass('normal');
    $('.mdc-list-item-email.saved').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.normal.unread').length;
    let count = $('.mdc-list-item-email.saved').length;
    $('#favorite-number').html(count);
    $('#all-number').html(allcount);
    $('#inbox-number').html(inboxcount);
  });

  $('#save-all').on('click', function () {
    $('.mdc-list-item-email.selected').addClass('saved');
    let count = $('.mdc-list-item-email.selected.saved').length;
    $('.mdc-list-item-email.saved').hide();
    $('.mdc-list-item-email.saved').removeClass('selected');
    $('.mdc-list-item-email.saved').removeClass('normal');
    $('.mdc-list-item-email.saved').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.normal.unread').length;
    let savecount = $('.mdc-list-item-email.saved').length;
    $('#favorite-number').html(savecount);
    $('#inbox-number').html(inboxcount);
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

  $('#save-read').on('click', function () {
    $('.mdc-list-item-email.read').addClass('saved');
    $('.mdc-list-item-email.selected.read.saved').hide();
    $('.mdc-list-item-email.saved').removeClass('selected');
    $('.mdc-list-item-email.saved').removeClass('normal');
    $('.mdc-list-item-email.saved').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.normal.unread').length;
    let savecount = $('.mdc-list-item-email.saved').length;
    $('#favorite-number').html(savecount);
    $('#inbox-number').html(inboxcount);
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