/**
 * @module src/assets/js/components/menus
 */
const $ = require('jquery');
/**
 * Toggle toolbar menu.
 * @return {event}
 */
export function toggleToolMenu() {
    // Toggle the menu
  const emailMenuEl = document.querySelector('#toolbar-menu');
  const emailMenu = new mdc.menu.MDCSimpleMenu(emailMenuEl);
  const emailMenuToggle = document.querySelector('.toggle');
  emailMenuToggle.addEventListener('click', function () {
    emailMenu.open = !emailMenu.open;
  });
}

/**
 * Toggle layout menu.
 * @return {event}
 */
export function toggleLayoutMenu() {
  // Toggle the menu
  const lyMenuEl = document.querySelector('#layout-menu');
  const lyMenu = new mdc.menu.MDCSimpleMenu(lyMenuEl);
  const lyMenuToggle = document.querySelector('.layout-toggle');
  lyMenuToggle.addEventListener('click', function () {
    lyMenu.open = !lyMenu.open;
  });
}

/**
 * Toggle the main menu.
 * @return {event}
 */
export function mainMenuToggle() {
  let drawerEl = document.querySelector('.mdc-persistent-drawer');
  let MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
  let drawer = new MDCPersistentDrawer(drawerEl);
  document.querySelector('.demo-menu').addEventListener('click', function () {
    drawer.open = !drawer.open;
  });
  drawerEl.addEventListener('MDCPersistentDrawer:open', function () {
    document.querySelector('.demo-menu').classList.add('open');
    document.querySelector('.demo-menu').innerHTML = 'clear';
  });
  drawerEl.addEventListener('MDCPersistentDrawer:close', function () {
    document.querySelector('.demo-menu').classList.remove('open');
    document.querySelector('.demo-menu').innerHTML = 'menu';
  });
}
