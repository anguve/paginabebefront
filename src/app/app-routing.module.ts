import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back/back.component';

const routes: Routes = [
  // Otras rutas existentes
  { path: 'back', component: BackComponent }, // Ruta "back" asociada al componente BackComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
