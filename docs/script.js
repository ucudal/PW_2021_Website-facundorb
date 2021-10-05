var Modal = function(otrasOpciones) {
    this.modal = null;
    this.backdrop = null;
    this.opciones = {
      contenido: "",
      backdrop: true
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
    
      const modalText = document.createElement('p');
      modalText.textContent = this.opciones.contenido;
    
      const modalCancelAction = document.createElement('button');
      modalCancelAction.textContent = 'Cancelar';
      modalCancelAction.className = 'btn btn--alt';
      modalCancelAction.addEventListener('click', this.close);
    
      const modalConfirmAction = document.createElement('button');
      modalConfirmAction.textContent = 'Confirmar';
      modalConfirmAction.className = 'btn';
      modalConfirmAction.addEventListener('click', this.close);
    
      this.modal.append(modalText);
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
  const unModal = Modal({contenido: "SI?", backdrop: false});
  button.addEventListener('click', unModal.open);