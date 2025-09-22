'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------------
        Partner Slider (Não usado, mantido para compatibilidade)
    ----------------------- */
    $(".partner-logo").owlCarousel({
        items: 6,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        margin: 116,
        responsive: {
            320: { items: 2 },
            480: { items: 3 },
            768: { items: 4 },
            992: { items: 5 },
            1200: { items: 6 }
        }
    });

    /*------------------------
        Testimonial Slider (Não usado, mantido para compatibilidade)
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 2,
        dots: false,
        autoplay: false,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            320: { items: 1 },
            768: { items: 2 }
        }
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    var timerdate = "2025/09/11";
    $("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Dias</p> "));
    });

    // ---
    // NOVO CÓDIGO PARA CARREGAR A GALERIA DE FOTOS
    // ---
        $(document).ready(function() {
        const jsonUrl = 'js/galeria.json';
        const galeriaContainerIndex = $('#galeria-fotos-index');
        const galeriaContainerFull = $('#galeria-fotos');

        // Carregar e exibir a galeria na página inicial (limitado a 6)
        if (galeriaContainerIndex.length) {
            fetch(jsonUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar o JSON: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    // Limita a 6 fotos na página inicial
                    const photosToDisplay = data.slice(0, 6);

                    let htmlContent = '';
                    photosToDisplay.forEach(photo => {
                        htmlContent += `
                            <div class="col-lg-4 col-md-6 col-sm-12 gallery-item">
                                <figure class="gallery-photo">
                                    <a href="${photo.path}" data-lightbox="galeria-smece" data-title="Créditos: ${photo.credits}">
                                        <img src="${photo.thumbPath}" alt="${photo.alt}" class="img-fluid">
                                    </a>
                                    <figcaption class="photo-credits">
                                        Créditos: ${photo.credits}
                                    </figcaption>
                                </figure>
                            </div>
                        `;
                    });

                    galeriaContainerIndex.html(htmlContent);
                })
                .catch(error => {
                    console.error('Houve um problema com a operação fetch:', error);
                    galeriaContainerIndex.html('<p>Não foi possível carregar as fotos no momento. Por favor, tente novamente mais tarde.</p>');
                });
        }

        // Carregar e exibir a galeria completa na página de galeria
        if (galeriaContainerFull.length) {
            fetch(jsonUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar o JSON: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    let htmlContent = '';
                    data.forEach(photo => { // Exibe todas as fotos
                        htmlContent += `
                            <div class="col-lg-4 col-md-6 col-sm-12 gallery-item">
                                <figure class="gallery-photo">
                                    <a href="${photo.path}" data-lightbox="galeria-smece" data-title="Créditos: ${photo.credits}">
                                        <img src="${photo.thumbPath}" alt="${photo.alt}" class="img-fluid">
                                    </a>
                                    <figcaption class="photo-credits">
                                        Créditos: ${photo.credits}
                                    </figcaption>
                                </figure>
                            </div>
                        `;
                    });

                    galeriaContainerFull.html(htmlContent);
                })
                .catch(error => {
                    console.error('Houve um problema com a operação fetch:', error);
                    galeriaContainerFull.html('<p>Não foi possível carregar as fotos no momento. Por favor, tente novamente mais tarde.</p>');
                });
        }
    });

})(jQuery);