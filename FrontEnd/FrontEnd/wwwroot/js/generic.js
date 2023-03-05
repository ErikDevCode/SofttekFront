

function GuardarModal(titulo = "Seguro que deseas guardar?",
    texto = "Deseas Guardar los registros en la base de datos") {
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Guardar!'
    })
}
function correcto() {
    Swal.fire(
        'Buen trabajo!',
        'Se guardo correctamente!',
        'success'
    )
}

function error() {
    Swal.fire(
        'Ops!',
        'Ocurrio un error!',
        'error'
    )
}
function errorCampos() {
    Swal.fire(
        'Ops!',
        'Debe de Ingresar los campos!',
        'error'
    )
}

function EliminarModal(titulo = "Seguro que deseas eliminar?",
    texto = "Deseas Inactivar el registro en la base de datos") {
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
    })
}

function ActivarModal(titulo = "Seguro que deseas activar?",
    texto = "Deseas Activar el registro en la base de datos") {
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Activar!'
    })
}



function miDataTable() {
    $('#Tablas').DataTable({

        "language": {
            "emptyTable": "<i>No hay datos disponibles en la tabla.</i>",
            "info": "Del _START_ al _END_ de _TOTAL_ ",
            "infoEmpty": "Mostrando 0 registros de un total de 0.",
            "infoFiltered": "(filtrados de un total de _MAX_ registros)",
            "infoPostFix": "(actualizados)",
            "lengthMenu": "Mostrar _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "<span style='font-size:15px;'>Buscar:</span>",
            "searchPlaceholder": "Dato para buscar",
            "zeroRecords": "No se han encontrado coincidencias.",
            "paginate": {
                "first": "Primera",
                "last": "Última",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": "Ordenación ascendente",
                "sortDescending": "Ordenación descendente"
            }
        },

        "lengthMenu": [[6, 10, 20, 25, 50, -1], [6, 10, 20, 25, 50, "Todos"]],
        "iDisplayLength": 6,





    });
}

function miDataTableInactivo() {
    $('#TablaInactivo').DataTable({

        "language": {
            "emptyTable": "<i>No hay datos disponibles en la tabla.</i>",
            "info": "Del _START_ al _END_ de _TOTAL_ ",
            "infoEmpty": "Mostrando 0 registros de un total de 0.",
            "infoFiltered": "(filtrados de un total de _MAX_ registros)",
            "infoPostFix": "(actualizados)",
            "lengthMenu": "Mostrar _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "<span style='font-size:15px;'>Buscar:</span>",
            "searchPlaceholder": "Dato para buscar",
            "zeroRecords": "No se han encontrado coincidencias.",
            "paginate": {
                "first": "Primera",
                "last": "Última",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": "Ordenación ascendente",
                "sortDescending": "Ordenación descendente"
            }
        },

        "lengthMenu": [[6, 10, 20, 25, 50, -1], [6, 10, 20, 25, 50, "Todos"]],
        "iDisplayLength": 6,





    });
}
