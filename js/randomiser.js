

$('#btn-randomise').click(function () {
    randomise();
});


function randomise() {
    $(".randomise").each(function () {
        $(this).val(Math.floor(Math.random() * ($('#' + $(this).attr('id') + " option").length)));
    });

}