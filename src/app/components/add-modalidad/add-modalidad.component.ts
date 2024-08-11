import { Component, OnInit } from '@angular/core';
import { ModalidadService } from '../../services/modalidad.service';
import { DeporteService } from '../../services/deporte.service';
import { Deporte } from '../../model/deporte';
import { FormsModule } from '@angular/forms';
import { Modalidad } from '../../model/modalidad';

@Component({
  selector: 'app-add-modalidad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-modalidad.component.html',
  styleUrl: './add-modalidad.component.css'
})
export class AddModalidadComponent implements OnInit{

  lstDeporte : Deporte[] = [];

  modalidad : Modalidad = {
    deporte : { idDeporte : -1 }
  };

  constructor(private serviceModalidad : ModalidadService, private serviceDeporte : DeporteService) {
    serviceDeporte.listaDeporte().subscribe(x => {
      this.lstDeporte = x;
    });
  }

  
  insertar() {
     this.serviceModalidad.insertaModalidad(this.modalidad).subscribe(x => alert(x.errores));
  }

  ngOnInit(): void {
    
  }


}
