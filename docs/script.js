var urlExp = "https://PW2021-APINode-facundorb.facundorb1.repl.co/experiencia-laboral";
fetch(urlExp, {
  method: "GET",
  headers: {
      "Content-Type": "application/json"
  },
}).then(function(response) {
  response.text().then(function(ans){
      let experiencia = JSON.parse(ans)['experiencia-laboral']
          if(experiencia[0]){
            
             fechaIntegra = experiencia[0].fechaInicio + " - " +experiencia[0].fechaFin;
             document.getElementById("fechaInt").textContent = fechaIntegra;
             document.getElementById("empresaInt").textContent = experiencia[0].empresa;
             document.getElementById("cargo").textContent = experiencia[0].puesto;
             document.getElementById("descripcion").textContent = experiencia[0].descripcion;
          }
      
  })
})
























var Modal = function(otrasOpciones) {
    this.modal = null;
    this.backdrop = true;
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
    
      if(this.opciones.backdrop) {
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'backdrop';
        this.backdrop.style.cssText = 'position:absolute;height:100%;width:100%;'
        document.body.append(this.backdrop);
      }

      this.modal = document.createElement('div');
      this.modal.className = 'modal';
      this.modal.style.cssText = 'position:absolute;width:50%;height:50%;left:30%;background:#1E90FF;display:flex;align-content:center;flex-direction:column;';
      

    
      const modalText = document.createElement('h2');
      modalText.textContent = 'Por favor ingresa tus datos';
      //modalText.style.cssText = 'text-align: center;'

      const modaltxtNombre = document.createElement('input');
      modaltxtNombre.id = 'txtNombre';
      modaltxtNombre.placeholder = 'Ingrese su nombre';
      modaltxtNombre.style.cssText = 'placeholder:Ingresa tu nombre;align-content: center;width:50%;display:flex;margin-bottom: 15px;'

      const modaltxtEmpresa = document.createElement('input');
      modaltxtEmpresa.id = 'txtEmpresa';
      modaltxtEmpresa.placeholder = 'Ingrese su Empresa';
      modaltxtEmpresa.style.cssText = 'placeholder:Ingrese Empresa;align-content: center;width:50%;display:flex;margin-bottom: 15px;';

      const modaltxtEmail = document.createElement('input');
      modaltxtEmail.id = 'txtEmail';
      modaltxtEmail.placeholder = 'Ingrese su Email';
      modaltxtEmail.style.cssText = 'placeholder:Ingresa tu Email;width:50%;'
       


      const modalCancelAction = document.createElement('button');
      modalCancelAction.textContent = 'Cancelar';
      modalCancelAction.className = 'btn btn--alt';
      modalCancelAction.addEventListener('click', this.close);
    
      const modalConfirmAction = document.createElement('button');
      modalConfirmAction.textContent = 'Guardar';
      modalConfirmAction.className = 'btn';
      modalConfirmAction.addEventListener('click', this.guardarDatos);

    
      this.modal.append(modalText);
      this.modal.append(modaltxtNombre);
      this.modal.append(modaltxtEmpresa);
      this.modal.append(modaltxtEmail);
      this.modal.append(modalConfirmAction);
      this.modal.append(modalCancelAction);
     
    
      document.body.append(this.modal);
    
    
      if (this.opciones.backdrop === true) {
        this.backdrop.addEventListener('click', this.close);
      }

    

    }

    this.guardarDatos = () => {
      let nombre = document.getElementById("txtNombre").value;
      let empresa = document.getElementById("txtEmpresa").value;
      let email = document.getElementById("txtEmail").value;
      let empleador = {nombre:nombre,empresa:empresa,email:email};
      
      var enviar = {
        nombreContacto: document.getElementById("txtNombre").value,
        empresa: document.getElementById("txtEmpresa").value,
        email: document.getElementById("txtEmail").value,
    };
      
    var jsonString = JSON.stringify(enviar);
    
    var url = "https://PW2021-APINode-facundorb.facundorb1.repl.co/enviar-formulario";
    fetch(url, {
        method: "POST",
        body: jsonString,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
      if(response.ok) {
        alert(`Gracias por contactarme ${empleador.nombre} me pondr?? en contacto contigo a la brevedad`);
    }else{
      alert(`Por favor compruebe los campos y vuelva a intentarlo`);
    }
    })["catch"](function (error) {
        console.error(error);
    });
      
      
      
      
      this.close();

      
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