import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { empresaModel } from '@core/models/Empresas.model';

import { RolModel } from '@core/models/Rol';
import { StatusUsuarioModel } from '@core/models/statusUsuario';
import { Usuario } from '@core/models/Usuario.model';
import { ApiService } from '@core/services/api.service';
import { EmpresasService } from '@core/services/empresas.service';
import { RolsService } from '@core/services/rols.service';
import { StatususuariosService } from '@core/services/statususuarios.service';
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

  constructor(private formBuiler: FormBuilder ,
     private usuarioService: UsuariosService, 
     private apiEmpresa: EmpresasService, 
     private apiRol: RolsService,
     private apiStatus: StatususuariosService ) { }
  empresas!: empresaModel[];
  roles!: RolModel[];
  status!:StatusUsuarioModel[];


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
    
        this.apiEmpresa.getEmpresas().subscribe((data) => {
          this.empresas = data;
        });
        this.apiRol.getRol().subscribe((data) => {
          this.roles = data;
        });
        this.apiStatus.getStatus().subscribe((data) => {
          this.status = data;
        });
  }
  save(): void{

    this.form.value.fk_empresa = this.empresas.find( empresaadd => empresaadd.id = 16 );
    this.form.value.fk_rol = this.roles.find( roladd => roladd.id = 2 );
    this.form.value.fk_statususuario = this.status.find( statusadd => statusadd.id = 3 );
    this.usuarioService.createUsuario(this.form.value).subscribe(
      () => {
      console.log("Se agrego Usuario correctamente");
    }, 
    error => console.error(error),
    );
  }

}
