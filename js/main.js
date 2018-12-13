
$(document).ready(function () {
    $('.day').eq(new Date().getDay()-1).parent().addClass('text-warning');
    $("#submit").click(function () {
        $(":text, textarea").each(function() {
            if($(this).val() === ""){
                Swal({
                    type: 'error',
                    title: 'Emplena tots els camps del formulari',
                    confirmButtonColor: '#28A745',
                })
            } else {
                Swal({
                    type: 'success',
                    title: 'Correu enviat exitosament!',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
         });
        
    });
    $("#clear").click(function () {
        Swal({
            title: 'Vols esborrar el formulari?',
            text: "Perdràs totes les dades.",
            type: 'warning',
            confirmButtonColor: '#28A745',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.value) {
                $('#form').trigger("reset");
            }
        })
    });
    

});