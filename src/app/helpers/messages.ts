import Swal from "sweetalert2";

export function successMessage(textoMensaje: string) {
    Swal.fire({
        title: textoMensaje,
        timer: 2000,
        showConfirmButton: false,
        icon: "success",
        toast: true,
        position: 'bottom'
    })
}

export function errorMessage(textoMensaje: string) {
    Swal.fire({
        title: textoMensaje,
        icon: "error",
    })
}