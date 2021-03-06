var Modal = function (otrasOpciones) {
    var _this = this;
    this.modal = null;
    this.backdrop = null;
    this.opciones = {
        contenido: "",
        backdrop: true
    };
    if (arguments[0] && typeof arguments[0] == "object") {
        this.opciones.contenido = arguments[0].contenido || this.opciones.contenido;
        this.opciones.backdrop = arguments[0].backdrop === undefined ? true : arguments[0].backdrop;
    }
    this.open = function () {
        if (_this.modal) {
            return;
        }
        _this.modal = document.createElement('div');
        _this.modal.className = 'modal';
        _this.modal.style.cssText = 'position:absolute;width:50%;height:50%;left:30%;background:grey;display:flex;align-content:center;flex-direction:column;';
        var modalText = document.createElement('h2');
        modalText.textContent = 'Por favor ingresa tus datos';
        //modalText.style.cssText = 'text-align: center;'
        var modaltxtNombre = document.createElement('input');
        modaltxtNombre.id = 'txtNombre';
        modaltxtNombre.placeholder = 'Ingrese su nombre';
        modaltxtNombre.style.cssText = 'placeholder:Ingresa tu nombre;align-content: center;width:50%;display:flex;margin-bottom: 15px;';
        var modaltxtEmpresa = document.createElement('input');
        modaltxtEmpresa.id = 'txtEmpresa';
        modaltxtEmpresa.placeholder = 'Ingrese su Empresa';
        modaltxtEmpresa.style.cssText = 'placeholder:Ingrese Empresa;align-content: center;width:50%;display:flex;margin-bottom: 15px;';
        var modaltxtEmail = document.createElement('input');
        modaltxtEmail.id = 'txtEmail';
        modaltxtEmail.placeholder = 'Ingrese su Email';
        modaltxtEmail.style.cssText = 'placeholder:Ingresa tu Email;width:50%;';
        var modalCancelAction = document.createElement('button');
        modalCancelAction.style.cssText = 'bg-red-500 font-bold;';
        modalCancelAction.textContent = 'Cancelar';
        modalCancelAction.className = 'btn btn--alt';
        modalCancelAction.addEventListener('click', _this.close);
        var modalConfirmAction = document.createElement('button');
        modalConfirmAction.textContent = 'Guardar';
        modalConfirmAction.className = 'btn';
        modalConfirmAction.addEventListener('click', _this.guardarDatos);
        _this.modal.append(modalText);
        _this.modal.append(modaltxtNombre);
        _this.modal.append(modaltxtEmpresa);
        _this.modal.append(modaltxtEmail);
        _this.modal.append(modalConfirmAction);
        _this.modal.append(modalCancelAction);
        document.body.append(_this.modal);
        if (_this.opciones.backdrop) {
            _this.backdrop = document.createElement('div');
            _this.backdrop.className = 'backdrop';
            document.body.append(_this.backdrop);
        }
        if (_this.opciones.backdrop === true) {
            _this.backdrop.addEventListener('click', _this.close);
        }
    };
    this.guardarDatos = function () {
        var nombre = document.getElementById("txtNombre").value;
        var empresa = document.getElementById("txtEmpresa").value;
        var email = document.getElementById("txtEmail").value;
        var empleador = { nombre: nombre, empresa: empresa, email: email };
        _this.close();
        alert("Gracias por contactarme " + empleador.nombre + " me pondr\u00E9 en contacto contigo a la brevedad");
    };
    this.close = function () {
        _this.modal.remove();
        _this.modal = null;
        _this.backdrop.remove();
        _this.backdrop = null;
    };
    return this;
};
var button = document.querySelector('button');
var unModal = Modal({ backdrop: true });
button.addEventListener('click', unModal.open);
