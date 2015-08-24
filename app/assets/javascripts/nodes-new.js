/*$('[data-widget]').each(function() {
  var $parent = $(this),
    $sections = $parent.find('[data-section]'),
    sections = {};

  var $breadcrumbs = $('#nodes-add-breadcrumbs');

  $sections.each(function() {
    var $section = $(this);

    sections[$section.attr('id')] = $section;
  });

  $parent.on('click', '[data-trigger="widget"]', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var section = getSectionFromElement(this);

    activateSection(section, event);
  });

  activateSection($sections.first());

  function activateSection(section, trigger) {
    var $section = $(section),
      $oldSection = $sections.filter('.active'),
      id = $section.attr('id'),
      promise = $.Deferred();

    if (trigger) {
      var $trigger = $(trigger.target);

      if ($trigger.attr('type') !== 'submit') {
        if (!checkBreadcrumbs(id))
          return;

        promise.resolve();
      } else {
        var $form = $section.closest('form');

        $.post($form.attr('action'), $form.serialize())
          .then(function() {
            promise.resolve();
          })
          .fail(function(jqXHR) {
            var errors = jqXHR.responseJSON.errors;

            console.log(errors);

            $.each(errors, function(key) {
              console.log($oldSection.find('[name="node[' + key + ']"]')[0], '[name="node[' + key + ']"]');
            });
          });

        return;
      }
    } else {
      promise.resolve();
    }

    promise.done(function() {
      updateBreadcrumbs(id);

      $sections.removeClass('active');
      $section.addClass('active');
    });
  }

  function updateBreadcrumbs(id) {
    var $items = $breadcrumbs.find('li'),
      $active = $items.find('[href="#' + id +'"]').closest('li');

    $items.removeClass('active done');
    $breadcrumbs.removeClass('done');

    // No item with given id could be found, so add class of whole breadcrumbs to done.
    // This happen when user reach the overview widget page.
    if ($active.length === 0)
      $breadcrumbs.addClass('done');
    else {
      $active.addClass('active');
      $active.prevAll().addClass('done');
    }
  }

  function checkBreadcrumbs(id) {
    var $items = $breadcrumbs.find('li'),
      $active = $items.find('[href="#' + id +'"]').closest('li');

    if ($breadcrumbs.hasClass('done'))
      return true;

    var $next = $active.next();

    return $next.hasClass('active') || $next.hasClass('done');
  }

  function getSection(hash) {
    return sections[hash.substr(hash.indexOf('#') + 1)];
  }

  function getSectionFromElement(element) {
    var $element = $(element);

    return getSection($element.attr('href') || $element.data('target'));
  }
});*/