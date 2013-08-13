(function ($) {

  var CustomSelect = function (element, options) {
    var $select = this.$select = $(element);

    this.options = options;

    this.$element = null;
    this.$button = null;
    this.$menu = null;

    //If we have no title yet, check the attribute 'title' (this is missed by jq as its not a data-attribute
    if (this.options.title == null)
      this.options.title = $select.attr('title');

    this.multiple = $select.prop('multiple');

    this.build();
    this.resize();
    this.attach();

    this.render();
  };

  $.extend(CustomSelect.prototype, {

    attach: function() {
      var self = this,
        id = self.$select.attr('id');

      if (self.options.size == 'auto')
        $(window).on('resize.customSelect scroll.customSelect', $.proxy(self.resize, self));

      $('body').on('touchstart.customSelect', '.dropdown-menu', function (e) {
        e.stopPropagation();
      });

      self.$element.on('click.customSelect', 'li a', function (e) {
        var $this = $(this),
          $select = self.$select,
          rel = $this.attr('rel'),
          $options, $option;

        e.preventDefault();

        if (!rel || $select.is(':disabled') || self.$button.hasClass('disabled')) return;

        $options = $select.find('option');
        $option = $options.eq(rel);

        if (!self.multiple) {
          prop('selected', $options, false);
          prop('selected', $option, true);

        } else {
          prop('selected', $option, !$option.prop('selected'));

          // Don't close dropdown, if multiple select
          e.stopPropagation();
        }

        $select.trigger('change');

        // Focus button "after" we close dropdown
        self.$button.focus();
      });

      self.$select.on('change.customSelect', $.proxy(self.render, self));

      $('label[for="' + id + '"]').on('click.customSelect', function (e) {
        self.$button.focus();

        e.preventDefault();
      });
    },

    resize: function() {
      var toggleVisibility = !this.$element.hasClass('open'),
        $items,
        itemHeight, menuOffset, menuHeight, menuExtras,
        $realItems, lastIndex;

      if (toggleVisibility) this.$element.addClass('open');

      $items = this.$menu.find('li');

      if (this.options.size == 'auto') {
        itemHeight = $items.first().outerHeight();
        menuOffset = this.$button.offset().top - $(window).scrollTop() + this.$button.outerHeight(true),
        menuExtras = this.$menu.outerHeight(true) - this.$menu.height();
        menuHeight = $(window).height() - menuOffset - menuExtras;

        //if (!this.$menu.hasClass('dropup'))
        //  menuHeight = $(window).height() - menuHeight;

        this.$menu.css({ maxHeight: menuHeight + 'px', overflowY: 'auto', minHeight: itemHeight + 'px' });
      } else {
        $realItems = $items.not(':divider');

        if ($realItems.length > this.options.size) {
          lastIndex = $items.index($realItems.index(this.option.size - 1));
          menuHeight = 0;

          $items.slice(0, lastIndex).each(function() {
            menuHeight += $(this).outerHeight(true);
          });

          this.$menu.css({ height: menuHeight + 'px', overflowY: 'scroll' });
        }
      }

      if (toggleVisibility) this.$element.removeClass('open');
    },

    build: function() {
      var $select = this.$select,
        $options = this.$select.find('option'),
        $element, $dropdown, $menu, $button;

      $dropdown = this.createDropdown();
      $menu = this.$menu = this.createMenu();

      $dropdown.append($menu);

      // btn dropdown-toggle clearfix
      // btn dropdown-toggle clearfix btn-info

      $select.hide().after($dropdown);

      $element = this.$element = $dropdown;
      $button = this.$button = $element.find('> button');

      $button.attr('id', $select.attr('id')).attr('tabindex', $select.attr('tabindex'));
      $element.addClass($select.prop('className')).removeClass('custom-select');

      if (this.multiple)
        $element.addClass('show-tick');

      if (this.$select.is(':disabled')) {
        $button.addClass('disabled');
        $button.click(function (e) {
          e.preventDefault();
        });
      }

      if ($options.filter(':selected').length == 0 && !this.options.title)
        select($options.first());
    },

    createDropdown: function() {
      var drop =
        '<div class="btn-group bootstrap-select">' +
          '<button class="btn btn-info dropdown-toggle clearfix" data-toggle="dropdown">' +
            '<span class="icon-tags"></span><span class="filter-option pull-left"></span>&nbsp;' +
            '<span class="caret"></span>' +
          '</button>' +
        '</div>';

      return $(drop);
    },

    createMenu: function() {
      var self = this,
        $options = this.$select.find('option'),
        $menu = $('<ul class="dropdown-menu" role="menu"></ul>');

      $options.each(function (index) {
        var $this = $(this),
          $item = $('<li></li>'),
          $anchor;

        if ($this.data('divider') == true)
          return $item.addClass('divider');



        $anchor = self.createAnchor($this.text());
        $anchor
          .addClass($this.prop('className'))
          .attr('rel', index);

        $menu.append($item.html($anchor));
      });

      return $menu;
    },

    createAnchor: function(text) {
      var anchor =
        '<a tabindex="-1" href="#">' +
          '<span class="pull-left">' + text + '</span>' +
          '<i class="icon-ok pull-right check-mark"></i>' +
        '</a>';

      return $(anchor);
    },

    render: function () {
      var self = this,
        title = self.options.title,
        selectedOptions, count;

      //Update the LI to match the SELECT
      this.$select.find('option').each(function (index) {
        self.eq(index)
          .toggleClass('disabled', $(this).is(':disabled') || $(this).parent().is(':disabled'))
          .toggleClass('selected', $(this).is(':selected'));
      });

      if (self.multiple && self.options.selectedTextFormat == 'count') {
        selectedOptions = this.$select.find('option:selected').map(function () {
          var $this = $(this);
          return $this.attr('title') || $this.text();
        }).toArray();

        if (selectedOptions.length == 0)
          title = title || self.options.noneSelectedText;
        else if (self.options.selectedTitleCount < selectedOptions.length)
          title = '<span class="counter">' + selectedOptions.length + '</span> ' + title;
        else
          title = selectedOptions.join(", ");
      }

      self.$button.find('.filter-option').html(title);
    },

    val: function (value) {
      if (value != undefined)
        this.$select.val(value).trigger('change');

      return this.$select.val()
    },

    eq: function(index) {
      return this.$menu.find('a[rel="' + index + '"]').parent();
    }

  });

  function prop(prop, $elements, flag) {
    $elements.prop(prop, flag);

    if (flag) $elements.attr(prop, prop);
    else $elements.removeAttr(prop);
  }

  $.fn.customSelect = function (option) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data('selectpicker'),
        options = $.extend({}, $.fn.customSelect.defaults, $this.data(), typeof option == 'object' && option);

      if (!data)
        $this.data('selectpicker', (data = new CustomSelect($this, options)));

      if (typeof option == 'string')
        data[option].apply(data);
    });
  };

  $.fn.customSelect.constructor = CustomSelect;

  $.fn.customSelect.defaults = {
    style: null,
    size: 'auto',
    title: null,
    selectedTitleFormat: 'values',
    noneSelectedText: 'Nothing selected',
    selectedTitleCount: 3,
    dropdownTemplate:
      '<div class="btn-group bootstrap-select">' +
        '<button class="btn dropdown-toggle clearfix" data-toggle="dropdown">' +
          '<span class="icon-tags"></span><span class="filter-option pull-left"></span>&nbsp;' +
          '<span class="caret"></span>' +
        '</button>' +
        '<ul class="dropdown-menu" role="menu"></ul>' +
      '</div>',
    linkTemplate:
      '<a tabindex="-1" href="#">' +
        '<span class="pull-left"></span>' +
        '<i class="icon-ok pull-right check-mark"></i>' +
      '</a>'
  }

})(jQuery);