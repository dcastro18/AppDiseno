import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/Administrador/administrador.service';

@Component({
  selector: 'app-home-instructor',
  templateUrl: './home-instructor.component.html',
  styleUrls: ['./home-instructor.component.css']
})
export class HomeInstructorComponent implements OnInit {

  listaServicios:any = []

  constructor(
    private _adminService: AdministradorService
  ) { }

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios(){ 
    this._adminService.getServicios().subscribe(
      data => {
        this.listaServicios = data
      }
    );
  }
}
