import { Component, OnInit } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component'

@Component({
  selector: 'app-empleados',
  imports: [EmpleadoComponent],
  standalone: true,
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
