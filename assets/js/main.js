// HIDDEN AND VISIBLE INPUT FOR PASSWORD
$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});
// INTERACTION HEART FILL AND OUTLINE
document.querySelectorAll('.set-heart-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const outline = icon.getAttribute('data-outline');
      const filled = icon.getAttribute('data-filled');
      const currentSrc = icon.getAttribute('src');

      icon.setAttribute('src', currentSrc.includes(outline) ? filled : outline);
    });
});

$(document).ready(function() {
    $('.set-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.set-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});