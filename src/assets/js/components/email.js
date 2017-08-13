const $ = require('jquery');
const menu = document.getElementById('emails-list');

class Email {
  constructor(email) {
    this.el             = email,
    this.createEmail    = this.createEmail.bind(this),
    this.createCheckbox = this.createCheckbox.bind(this)
  }

  createEmail(email) {
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
    list_item.classList.add('mdc-list-item-email', 'mdc-list-item', 'mdc-ripple-upgraded', 'normal', 'unread');
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
    this.createCheckbox(list_item);
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
  createCheckbox(element) {
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
}

export default Email