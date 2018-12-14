
$(document).ready(function () {
    $("#submit").click(function () {
        var empty = false;
        //Checks if any of the inputs is empty
        $('#form').find('input, textarea').each(function() {
            console.log($(this).val());
            if($(this).val() === ""){
                empty = true;
            }
        });
        if(empty){
            //Show error
            Swal({
                type: 'error',
                title: 'Emplena tots els camps del formulari',
                confirmButtonColor: '#28A745',
            })
        } else {
            //Show success
            Swal({
                type: 'success',
                title: 'Correu enviat exitosament!',
                showConfirmButton: false,
                timer: 2000
            })    
        }
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
    var curDay = new Date().getDay();
    //If Sunday
    if (curDay === 0){
        $('.day').eq(6).parent().addClass('text-warning');
    } else {
        $('.day').eq(curDay-1).parent().addClass('text-warning');
    }
    

});