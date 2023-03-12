alertError(CONST_MESSAGE_ALERT.USER_NOT_SESSION.TITLE, CONST_MESSAGE_ALERT.USER_NOT_SESSION.TEXT)
    .then((result) => {
        window.location.replace(WEB_URL.VIEW_LOGIN);
    });