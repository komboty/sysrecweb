function alertError(title, text) {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'error',
        confirmButtonText: 'OK'
    });
}

function alertErrorRedirectLogin(title, text) {
    alertError(title, text)
        .then((result) => {
            window.location.replace(WEB_URL.VIEW_LOGIN);
        });
}