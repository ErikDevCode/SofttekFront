
window.onload = function () {

    listarVentas();
    ListarProducto();

}

var token = document.getElementById("txttoken");

function ListarProducto() {

    fetch("http://localhost:9350/api/Ventas/ListarProductos", {
        headers: {
            "Authorization": `Bearer ${token.defaultValue}`
        }
    }).then(res => res.json())
        .then(res => {
            llenarComboProducto(res);
        })
}

function llenarComboProducto(res) {
    var contenido = "<option value=''>--Seleccione--</option>";
    for (var i = 0; i < res.length; i++) {
        contenido += "<option value='" + res[i].idProducto + "'>" + res[i].descProducto + "</option>";
    }
    document.getElementById("cboproducto").innerHTML = contenido;
}

function GuardarModalVenta(titulo = "Seguro que deseas guardar?",
    texto = "Deseas Guardar el canto en la base de datos") {
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


function RegistrarVenta() {

    var Producto = document.getElementById('cboproducto');
    var Cantidad = document.getElementById('txtcantidad').value;
    var fechaactual = new Date();



    GuardarModalVenta().then(res => {
        if (res.value) {
            APIBaseUrl = "http://localhost:9350/api/Ventas/RegistrarVenta";

            fetch(APIBaseUrl, {
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token.defaultValue}` },
                method: 'POST',
                body: JSON.stringify({
                    "idVenta": "",
                    "idProducto": Producto.value,
                    "cantidad": Cantidad,
                    "fechaVenta": fechaactual,
                    "idUsuarioVenta": 1,
                    "fechaRegistro": fechaactual
                })
            })

                .then(res => {
                    console.log("ok");
                    correcto();
                    setTimeout(function () {
                        location.reload();
                    }, 3000);

                })
                .catch(error => {
                    console.log(error);
                    incorrecto();

                });
        }
    })
}

function correcto() {
    Swal.fire(
        'Buen trabajo!',
        'Gestión correcta',
        'success'
    )
}



function incorrecto() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingresar toda la información correcta!',

    })
}

function listarVentas() {

    fetch("http://localhost:9350/api/Ventas/ListarVentas", {
        headers: {
            "Authorization": `Bearer ${token.defaultValue}`
           }
        })
        .then(res => res.json())
        .then(res => {
            crearlistado(res);
        });
}

function crearlistado(res) {
    var contenido = "";

    contenido += "<table id='TablaRes' class='display nowrap' style='width:100%'>";
    contenido += "<thead>";
    contenido += "<tr>";
    //contenido += "<th style='width:50px;'>Id </th>";

    contenido += "<th>IdProducto</th>";
    contenido += "<th>Nombre Producto</th>";
    contenido += "<th>Cantidad </th>";
    contenido += "<th>Monto Total </th>";
    contenido += "<th>Fecha Venta </th>";
    contenido += "<th>Usuario Venta</th>";

    contenido += "</tr>";
    contenido += "</thead>";

    contenido += "<tbody>";
    for (var i = 0; i < res.length; i++) {
        contenido += "<tr class='TrFondo'>";

        contenido += "<td>" + res[i].idProducto+ "</td>";
        contenido += "<td>" + res[i].descripcionProducto + "</td>";
        contenido += "<td>" + res[i].cantidad + "</td>";
        contenido += "<td>" + res[i].montoTotal + "</td>";
        contenido += "<td>" + res[i].fechaVenta + "</td>";
        contenido += "<td>" + res[i].nombreUsuario + "</td>";

        contenido += "</tr>";

    }

    contenido += "</tbody>";
    contenido += "</table>";
    document.getElementById("divTabla").innerHTML = contenido;



    $('#TablaRes').DataTable({
        responsive: true,

        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'excelHtml5',
                text: '<i class="fas fa-file-excel"></i>',
                titleAttr: 'Exportar a Excel',
                title: 'ListarVentas',
                className: 'btn btn-success'
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fas fa-file-pdf"></i>',
                titleAttr: 'Exportar a PDF',
                title: 'ListarVentas',
                className: 'btn btn-danger'
            },
            {
                extend: 'print',
                text: '<i class="fa fa-print"></i>',
                titleAttr: 'Imprimir',
                title: 'ListarVentas',
                className: 'btn btn-info'
            },
            {
                extend: 'csvHtml5',
                text: '<i class="fas fa-file-csv"></i>',
                titleAttr: 'Exportar a CSV',
                fieldSeparator: '|',
                fieldBoundary: '',
                title: 'ListarVentas',
                className: 'btn btn-warning'
            }
        ]

        , "language": {
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

        "lengthMenu": [[ 10, 20, 25, 50, -1], [ 10, 20, 25, 50, "Todos"]],
        "iDisplayLength": 10


    });

}

