/**
 * @module src/assets/js/components/delete
 */
const $ = require('jquery');
/**
 * Delete an email
 * @return {event}
 */
export function removeEmail() {
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
    let inboxcount = $('.mdc-list-item-email.normal.unread').length;
    let trashcount = $('.mdc-list-item-email.deleted').length;
    $('#trash-number').html(trashcount);
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
    $('#delete-email').show();
    $(this).hide();
  });

  $('#delete-read').on('click', function () {
    $('.mdc-list-item-email.read').addClass('deleted');
    $('.mdc-list-item-email.selected.read.deleted').hide();
    $('.mdc-list-item-email.deleted').removeClass('selected');
    $('.mdc-list-item-email.deleted').removeClass('normal');
    $('.mdc-list-item-email.deleted').removeClass('read');
    let allcount = $('.mdc-list-item-email.normal').length;
    let inboxcount = $('.mdc-list-item-email.normal.unread').length;
    let trashcount = $('.mdc-list-item-email.deleted').length;
    $('#trash-number').html(trashcount);
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
