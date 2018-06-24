(function ($) {
    // remove leading and trailing blank lines in <pre> blocks
    $(document).ready(function () {
        $("pre").each(function (i, pre) {
            var $pre = $(pre);
            var $code = $pre.find('code');
            var $item = $code.length === 0 ? $pre : $code;
            $item.html($.trim($item.html()));
        });
    });
})(jQuery);
