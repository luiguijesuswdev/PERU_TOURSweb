import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Afiliacion } from './pages/afiliacion/afiliacion';
import { SolicitudPaqueteComponent } from './pages/solicitud-paquete/solicitud-paquete';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'afiliacion', component: Afiliacion },
  { path: 'solicitud-paquete', component: SolicitudPaqueteComponent }
];