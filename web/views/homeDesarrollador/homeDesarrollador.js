getSession(loadPage);

function loadPage(session) {
    console.log(session);
    setNameUser(session.correo.split('@')[0]);
}