/**
 * Modals de SYSREC.
 */
class ModalSysrec {

    /**
     * Abre Modal con HTML.
     * @param {object} param0
     * @param {string} param0.title Titulo del Modal.
     * @param {string} param0.html HTML a mostrar en el Modal.
     * @param {string} param0.sizeX Ancho del Modal.
     * @param {string} param0.textBtnConfirm Texto que muestra el boton para confirmar.
     * @param {string} param0.textBtnCancel Texto que muestra el boton para cancelar.
     * @param {} param0.fundidOpen Funcion que se ejecuta mientras este abierto el Modal.
     * @param {} param0.funPreConfirm Funcion que se ejecuta al dar confirmar y antes de regresar los valores.
     * @returns {Promise} con Modal.
     */
    static openByHTML({ title, html, sizeX, textBtnConfirm, textBtnCancel, fundidOpen, funPreConfirm }) {
        return Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-primary btn-lg mx-3',
                    cancelButton: 'btn btn-secondary btn-lg'
                },
                buttonsStyling: false
            })
            .fire({
                title: title,
                html: html,
                width: sizeX,
                showCancelButton: true,
                confirmButtonText: textBtnConfirm,
                cancelButtonText: textBtnCancel,
                didOpen: fundidOpen,
                preConfirm: funPreConfirm,
            });
    }

    /**
     * Obtiene los valores de un Modal si se dio en confirmar.
     * @param {*} resModal Respuesta de Modal.
     * @returns valores del modal si se dio en confirmar, de lo contrario se manda Excepcion.
     */
    static getValues(resModal) {
        // Si se cancelo se manda a catch.
        if (!resModal.isConfirmed) {
            throw new Error(MODAL.ACTION_CANCEL);
        }
        // Si no se cancelo se regresan los valores del Modal.
        return resModal.value;
    }
}