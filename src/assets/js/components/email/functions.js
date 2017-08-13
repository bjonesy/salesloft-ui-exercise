/**
 * @module src/assets/js/components/email/functions
 */
const $ = require('jquery');
/**
 * Toggle classes when each email is clicked.
 * @return {event}
 */
export function emailListChange() {
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
