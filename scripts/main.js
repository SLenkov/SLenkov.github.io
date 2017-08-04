$(document).ready(function () {

    (function () {
        var bodyPage = $('body');
        var openBtn = $('.mob-nav-btn');
        var nav = $('.nav');

        openBtn.on('click', function () {
           openBtn.toggleClass('open');
           nav.toggleClass('open');
           bodyPage.toggleClass('nav-open');
        });
    })();


    (function () {
        $('.enable-card').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            var card = $this.closest('.card');
            var input = card.find('.form-input');
            var headNotice = card.find('.head__title');

            card.removeClass('card--disable').addClass('card--enable ');
            if (input.val() == 0) {
                input.focus();
                headNotice.addClass('head__title--alert ');
            }
        });
    })();

    (function () {

        $('.form-input').on('keyup', function () {
            var $this = $(this);
            var inputType = $this.attr('type');
            var labelInput = $this.siblings('.input-label');
            var card = $this.closest('.card');

            if (inputType == 'password') {
                labelInput.text($this.val().replace(/[\s\S]/g, "*"));
            } else {
                labelInput.text($this.val());
            }

        });

        $('.form-input').keydown(function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                return false;
            }
        });
    })();

    (function () {
        $('.form-input').on('focusout', function () {
            var $this = $(this);
            var inputValue = $this.val();
            var inputID = $this.attr('id');
            var card = $this.closest('.card');
            var headNotice = card.find('.head__title');
            var progressBar = $('.progress-bar');
            var count = $('.progress-bar').data('count');
            var countBlock = $('.count__block');
            var dashSets = $('.dash__sets');


            if (inputValue.length > 0) {

                if (!headNotice.hasClass('head__title--success')) {
                    headNotice.removeClass('head__title--alert').addClass('head__title--success');

                    count += 20;
                    progressBar.data('count', count);
                    progressBar.attr('data-count', count);
                    dashSets.addClass(inputID);

                    countBlock.text(count);


                } else {
                    count += 0;
                    progressBar.data('count', count);
                    progressBar.attr('data-count', count);
                    countBlock.text(count);

                }

            } else {

                if (!headNotice.hasClass('head__title--alert')) {
                    headNotice.removeClass('head__title--success').addClass('head__title--alert');
                    count -= 20;
                    progressBar.data('count', count);
                    progressBar.attr('data-count', count);
                    countBlock.text(count);
                    dashSets.removeClass(inputID);

                } else {
                    count -= 0;
                    progressBar.data('count', count);
                    progressBar.attr('data-count', count);
                    countBlock.text(count);

                }

            }
        });

    })();
});