import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    // Inicializamos el form aquí para evitar el error de inicialización.
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      asunto: [''],
      mensaje: ['']
    });
  }

  ngOnInit(): void {
    // Inicializamos el form también aquí para asegurarnos que está configurado en ngOnInit.
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      asunto: [''],
      mensaje: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor.
    }
  }
}