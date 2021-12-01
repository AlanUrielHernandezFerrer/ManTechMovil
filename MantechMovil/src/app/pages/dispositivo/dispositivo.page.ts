import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '@core/models/Dispositivo';
import { DispositivosService } from '@core/services/dispositivos.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {
  dispositivo: Dispositivo[]=[];
  constructor(private dispositivoService: DispositivosService) { }

  ngOnInit() {
  }

}
