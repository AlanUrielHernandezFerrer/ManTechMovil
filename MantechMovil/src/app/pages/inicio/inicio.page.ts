import { Component, OnInit } from '@angular/core';
import { Usuario } from '@core/models/Usuario.model';
import { UsuariosService } from '@core/services/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuarios: Usuario []=[];

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.usuarioService.getAllUsuario().subscribe(data=> {
      this.usuarios = data;
    });
  }

}
