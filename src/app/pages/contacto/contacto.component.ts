import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  private map!: L.Map;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([14.0887448, -87.1891958], 15); // Coordenadas y nivel de zoom

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([14.0887448, -87.1891958]) // Coordenadas del marcador
      .addTo(this.map)
      .bindPopup('Centro Civico Gubernamental') // Contenido del popup
      .openPopup();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
        console.log('Formulario enviado', this.contactForm.value);
        this.formSubmitted = true;
        this.contactForm.reset(); 
        setTimeout(() => this.formSubmitted = false, 3000);
    }
}

}