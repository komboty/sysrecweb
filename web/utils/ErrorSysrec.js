/**
 * Excepcion de SYSREC.
 */
class ErrorSysrec extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}