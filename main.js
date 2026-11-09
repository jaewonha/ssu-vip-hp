// Mark the current page in the nav
(function () {
  var page = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  document.querySelectorAll('nav > a:not(.nav-brand)').forEach(function (a) {
    if (a.getAttribute('href').replace(/\.html$/, '') === page) a.classList.add('active');
  });
})();

// Sections with class="collapsible" get a "more" toggle
document.querySelectorAll('.collapsible').forEach(function (section) {
  var button = document.createElement('button');
  button.className = 'collapse-button';
  button.type = 'button';
  button.textContent = section.dataset.more || 'Show more';
  section.appendChild(button);
  button.addEventListener('click', function () {
    var expanded = section.classList.toggle('expanded');
    section.style.maxHeight = expanded ? section.scrollHeight + 'px' : null;
    button.textContent = expanded ? 'Show less' : (section.dataset.more || 'Show more');
    if (!expanded) section.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
});

// Research cards: "Learn More" expands the description and related work
document.querySelectorAll('.area-card').forEach(function (card) {
  var button = card.querySelector('.learn-more');
  if (!button) return;
  button.addEventListener('click', function () {
    var open = card.classList.toggle('open');
    button.textContent = open ? 'Show less' : 'Learn More';
    button.setAttribute('aria-expanded', open);
  });
});
