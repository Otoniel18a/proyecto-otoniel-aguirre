import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

interface Articulo {
  img: string;
  title: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, AfterViewInit {

  @ViewChild('contenedorArticulos') contenedorArticulos!: ElementRef;

  articulosDb: Articulo[] = [
    {
      img: 'https://www.trabajo.gob.hn/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-31-at-9.44.59-AM-1080x675.jpeg',
      title: 'Es Oficial: SIHCAL ya fue publicado en la Gaceta',
      date: 'feb, 1 2024 | Noticias',
      description: 'Todas las empresas tienen seis (6) meses a partir de dicha publicación para inscribirse al Sistema Hondureño de Casos Laborales y Registro Nacional Simplificado de Patronos, SRNSP. La agilización y automatización del acceso a información es vital para la protección de...'
    },
    {
      img: 'https://www.trabajo.gob.hn/wp-content/uploads/2023/02/SalarioMinimoEvento-6-1-1080x675.jpeg',
      title: 'Muchos exitos ministra',
      date: 'Jun 30, 2024 | Noticias',
      description: 'Seria, enfocada y altamente responsable de la investidura confiada a su persona por la primera mujer presidenta de Honduras, Xiomara Castro Sarmiento. Así se describe la fructífera gestión de la Abogada y Dra. Lesly Sarahí Cerna durante su paso por la Secretaría de...'
    },
    {
      img: 'https://www.trabajo.gob.hn/wp-content/uploads/2024/06/GettyImages-89266986.jpg',
      title: '15 años en Resistencia. Golpes de Estado nunca más.',
      date: 'Jun 28, 2024 | Noticias',
      description: 'Han sido quince años fuertes desde aquella madrugada de domingo, cuando en 2009 un contingente militar se abrió paso a tiros en la residencia del Presidente José Manuel «Mel» Zelaya Rosales y lo removió del poder por la fuerza de las armas. Fue un ejercicio brutal de...'
    },
    {
      img: 'https://www.trabajo.gob.hn/wp-content/uploads/2024/06/ILC-room-Palais-des-Nations-1000x667-1.jpg',
      title: 'Culmina la Conferencia Internacional del Trabajo en Suiza',
      date: 'Jun 24, 2024 | Noticias',
      description: 'Un éxito para Honduras resultó la 112 Conferencia Internacional del Trabajo, celebrada este mes en la sede de la Organización Internacional del Trabajo en Ginebra, Suiza. La Secretaria de Estado en los Despachos de Trabajo y Seguridad Social, Dra. Sarahí Cerna...'
    },
    {
      img: 'https://www.trabajo.gob.hn/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-18-at-2.34.08-PM-1080x675.jpeg',
      title: 'Servicio Integral de Empleo en Acción',
      date: 'Jun 19, 2024 | Noticias',
      description: 'El Servicio Integral de Empleo (Sí Empleo) es el servicio que presta la SETRASS para atender a ciudadanos en toda Honduras, en la delicada tarea de conseguir un empleo apropiado. Esta semana, se están celebrando Jornadas de Empleabilidad, Capacitación y...'
    }
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.renderArticulos();
  }

  renderArticulos(): void {
    this.articulosDb.forEach(articulo => {
      const articleElement = this.renderer.createElement('div');
      const imgElement = this.renderer.createElement('img');
      const titleElement = this.renderer.createElement('h2');
      const dateElement = this.renderer.createElement('p');
      const descriptionElement = this.renderer.createElement('p');

      this.renderer.setAttribute(imgElement, 'src', articulo.img);
      this.renderer.setProperty(titleElement, 'innerText', articulo.title);
      this.renderer.setProperty(dateElement, 'innerText', articulo.date);
      this.renderer.setProperty(descriptionElement, 'innerText', articulo.description);

      this.renderer.appendChild(articleElement, imgElement);
      this.renderer.appendChild(articleElement, titleElement);
      this.renderer.appendChild(articleElement, dateElement);
      this.renderer.appendChild(articleElement, descriptionElement);
      this.renderer.appendChild(this.contenedorArticulos.nativeElement, articleElement);
    });
  }
}
