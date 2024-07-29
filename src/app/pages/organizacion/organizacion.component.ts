import { Component, OnInit } from '@angular/core';
import { OrganizacionService } from 'src/app/services/organizacion.service';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.scss']
})
export class OrganizacionComponent implements OnInit {
  users: any[] = [];

  constructor(private organizacionService: OrganizacionService) { }

  ngOnInit(): void {
    this.organizacionService.getUsers().subscribe(
      data => {
        console.log('Data received:', data); // Verifica los datos recibidos
        this.users = data;
      },
      error => {
        console.error('Error:', error); // Verifica si hay algún error
      }
    );
  }
}
