import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CaftaComponent } from './pages/cafta/cafta.component';
import { OrganizacionComponent } from './pages/organizacion/organizacion.component';

const routes: Routes = [
  {path: 'index', component: InicioComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'cafta', component: CaftaComponent},
  {path: 'organizacion', component: OrganizacionComponent},

  {
    path: '**',
    redirectTo: '/index',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }

