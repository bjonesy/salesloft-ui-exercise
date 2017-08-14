const $ = require('jquery');

class Sidebar {
  constructor(email) {
    this.el          = email,
    this.sidebarTags = this.sidebarTags.bind(this)
  }

  /**
   * Add the email tags to the sidebar menu.
   * @return {object}
   */
  sidebarTags(email) {
    Array.from(email['tags']).forEach(function (tags) {
      $('#mdc-tags').append('<span class="mdc-tag">' + tags + '</span>');
    });
  }

}

export default Sidebar