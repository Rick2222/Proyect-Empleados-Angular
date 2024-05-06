import { Component, OnInit } from '@angular/core';
import { EmpleadosComponent } from '../empleados/empleados.component';

@Component({
  selector: 'app-empleado',
  imports: [EmpleadosComponent],
  standalone: true,
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
