/**
 * Modals de SYSREC.
 */
class ModalSysrec {

    static openByHTML(title, html, textBtnConfirm, textBtnCancel, funPreConfirm) {
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
                showCancelButton: true,
                confirmButtonText: textBtnConfirm,
                cancelButtonText: textBtnCancel,
                preConfirm: funPreConfirm
            });
    }
}