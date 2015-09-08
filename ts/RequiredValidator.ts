/*
(function (root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(function () {
            return factory();
        });
    } else {
        // Global Variables
        root.RequiredValidator = factory();
    }
}(this, function () {
    function RequiredValidator(form, fieldList) {
        if (arguments.length < 1) {
            throw 'Le 1er param est obligatoire';
        }

        this.form = form;
        this.fieldList = fieldList || [];
    }

    RequiredValidator.prototype.validate = function () {
        var valid = true;
        var that = this;

        this.fieldList.forEach(function (field) {
            if (that.form[field].value === '') {
                valid = false;
            }
        });

        return valid;
    }

    return RequiredValidator;
}));
*/

class RequiredValidator {
    form: HTMLFormElement;
    fieldList: Array<String>;

    constructor(form: HTMLFormElement, fieldList?: Array<String>) {
        this.form = form;
        this.fieldList = fieldList || [];
    }
    validate(): boolean {
        var valid: boolean = true;
        var that: RequiredValidator = this;

        this.fieldList.forEach(function (field: string) {
            if (that.form[field].value === '') {
                valid = false;
            }
        });

        return valid;
    }
}

export = RequiredValidator;