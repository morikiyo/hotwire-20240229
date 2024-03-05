// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// workaround for lazy loading issue
// https://github.com/hotwired/turbo/issues/886
document.addEventListener('turbo:load', () => {
  document
    .querySelectorAll('turbo-frame[loading="lazy"][complete]')
    .forEach((frame) => frame.removeAttribute('loading'));
});
