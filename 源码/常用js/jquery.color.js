/**
 * 封装JQuery对象方法的一个插件
 */
;
(function($) {
    $.fn.extend({"color": function(value) {
            if (typeof value === undefined) {
                return this.css('color');
            } else {
                return this.css("color", value);
            }
        }});
})(jQuery);
/**
 * 封装JQuery对象方法的一组插件
 */
;
(function($) {
    $.fn.extend({"color": function(value) {
            if (typeof value === undefined) {
                return this.css('color');
            } else {
                return this.css("color", value);
            }
        }, "border": function(value) {
            return this.css('border', value);
        }});
})(jQuery);
/**
 * 封装全局函数的插件
 */
;
(function($) {
    $.extend({ltrim: function(text) {
            return (text || '').replace(/^\s+/g, '');
        }, rtrim: function(text) {
            return (text || '').replace(/\s+$/g, '');
        }});
})(jQuery);