import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from '@core/services/usuarios.service';
import { defaultData } from '@core/utils/forms';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.page.html',
  styleUrls: ['./registro-empleado.page.scss'],
})
export class RegistroEmpleadoPage implements OnInit {
 
@Input() id: number;
form: FormGroup;
  constructor(private formBuiler: FormBuilder , private usuarioService: UsuariosService) { }


  ngOnInit() {
    this.form = this.formBuiler.group({
    nombre_empleado: defaultData(),
    apellido_paterno: defaultData(),
    apellido_materno: defaultData(),
    telefono: defaultData(),
    correo: defaultData(),
    contrasena: defaultData(),
    clave_empresa: defaultData(),
    fk_empresa:defaultData(),
    fk_rol:defaultData(),
    fk_statususuario:defaultData(),
      
    });
  
  }
  save(): void{
    this.usuarioService.createUsuario(this.form.value).subscribe(
      () => {
      console.log("Se agrego Usuario correctamente");
    }, 
    error => console.error(error),
    );
  }

}
