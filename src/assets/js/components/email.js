const menu = document.getElementById('emails-list');
// Create the list item
const list_item = document.createElement('li');
// Create the list item text
const list_text = document.createElement('div');
// Create the list item subject
const list_subject = document.createElement('span');
// Create the list item message
const list_message = document.createElement('span');
const list_message_full = document.createElement('span');
// Create the time stamp for the list item
const list_end = document.createElement('span');

class Email {
  // Create Email
  createEmail(email) {
    // Add classes to the list item
    list_item.classList.add('mdc-list-item-email', 'mdc-list-item', 'mdc-ripple-upgraded');
    // Add a class to the list item text container
    list_text.classList.add('mdc-list-item__text');
    // Add a class to the list item subject container
    list_subject.classList.add('mdc-list-item__subject');
    // Add a class to the list item message container
    list_message.classList.add('mdc-list-item__text__secondary', 'preview');
    list_message_full.classList.add('mdc-list-item__text__secondary', 'hidden');
    // Add a class to the list item timestamp container
    list_end.classList.add('mdc-list-item__end-detail');
    // createCheckbox(list_item);
    // Add the email subjects into the list item subject container
    list_text.innerHTML = email['subject'];
    // Limit the amount of characters in the message when previewing
    list_message.innerHTML = email['body'].substring(0, 100) + '...';
    list_message_full.innerHTML = email['body'];
    // Change the time stamp into a readable string
    list_end.innerHTML = new Date(email['date']).toLocaleString();
    // Add the list item message inside the list item text container
    list_text.appendChild(list_message);
    list_text.appendChild(list_message_full);
    // Add the list item message
    list_item.appendChild(list_text);
    // Add the list item timestamp
    list_item.appendChild(list_end);
    menu.appendChild(list_item);
  }
}

export default Email;
