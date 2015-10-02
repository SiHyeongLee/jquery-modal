(function (window, $) {

    var Modal = function (elem, width, height) {
        this.elem = elem;
        this.$elem = $(elem);
        this.target = this.$elem.data('modal-trigger');
        this.targetName = '[data-modal-target]';
        this.width = width;
        this.height = height;
        this.metaWidth = this.$elem.data('modal-width');
        this.metaHeight = this.$elem.data('modal-height');
    };

    Modal.prototype = {

        defaults: {
            display: 'none',
            width: 100,
            height: 100
        },

        init: function () {
            this.options = {
                display: 'block',
                width: this.width,
                height: this.height
            };

            this.metadata = {
                width: this.metaWidth,
                height: this.metaHeight
            };

            this.config = $.extend({}, this.defaults, this.options, this.metadata);

            this.clearLayer();
            this.displayLayer();

            return this;
        },

        clearLayer: function () {
            $(this.targetName).css(this.defaults);
        },

        displayLayer: function () {
            this.targetName = '[data-modal-target=' + this.target + ']';

            $(this.targetName).css(this.config);
        }

    };

    Modal.defaults = Modal.prototype.defaults;

    $.fn.modal = function (width, height) {
        return this.each(function () {
            new Modal(this, width, height).init();
        });
    };

    window.Modal = Modal;

})(window, jQuery);


$(document).on('click', 'button', function () {
    $(this).modal(200, 100);
});