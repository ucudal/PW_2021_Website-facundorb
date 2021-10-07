var Modal = function(otrasOpciones) {
    this.modal = null;
    this.backdrop = null;
    this.opciones = {
      contenido: "",
      backdrop: true
    }

    this.guardarDatos = () => {
      this.close();
    }
  
    if(arguments[0] && typeof arguments[0] == "object") {
      this.opciones.contenido = arguments[0].contenido || this.opciones.contenido;
      this.opciones.backdrop = arguments[0].backdrop === undefined ? true : arguments[0].backdrop;
    }
  


  
    this.open = () => {
      if (this.modal) {
        return;
      }
    
      this.modal = document.createElement('div');
      this.modal.className = 'modal';
      this.modal.style.cssText = 'position:absolute;width:50%;height:100%;opacity:1;left:30%;background:green';
      

    
      const modalText = document.createElement('h2');
      modalText.textContent = 'Por favor ingresa tus datos';
      modalText.style.cssText = 'text-align: center;'

      const modaltxtNombre = document.createElement('input');
      modaltxtNombre.className = 'txtNombre';
      modaltxtNombre.placeholder = 'Ingrese su nombre';
      modaltxtNombre.style.cssText = 'align-content: center;'
      modaltxtNombre.style.cssText = 'placeholder:Ingresa tu nombre;'
    
      const modalCancelAction = document.createElement('button');
      modalCancelAction.style.cssText = 'bg-red-500 font-bold;';
      modalCancelAction.textContent = 'Cancelar';
      modalCancelAction.className = 'btn btn--alt';
      modalCancelAction.addEventListener('click', this.close);
    
      const modalConfirmAction = document.createElement('button');
      modalConfirmAction.textContent = 'Guardar';
      modalConfirmAction.className = 'btn';
      modalConfirmAction.addEventListener('click', this.guardarDatos);
    
      this.modal.append(modalText);
      this.modal.append(modaltxtNombre);
      this.modal.append(modalCancelAction);
      this.modal.append(modalConfirmAction);
    
      document.body.append(this.modal);
    
      if(this.opciones.backdrop) {
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'backdrop';
        document.body.append(this.backdrop);
      }
    
      if (this.opciones.backdrop === true) {
        this.backdrop.addEventListener('click', this.close);
      }
    }
  
    this.close = () => {
      this.modal.remove();
      this.modal = null;
      this.backdrop.remove();
      this.backdrop = null;
    }


    return this;
  }
  
  const button = document.querySelector('button');
  const unModal = Modal({backdrop: true});
  button.addEventListener('click', unModal.open);