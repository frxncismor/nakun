import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";
const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate : [NologinGuard] },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate : [AuthGuard] },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'notificaciones', loadChildren: './pages/notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'plane', loadChildren: './pages/plane/plane.module#PlanePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate : [AuthGuard]},
  { path: 'destacado', loadChildren: './pages/destacado/destacado.module#DestacadoPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'comunidad', loadChildren: './pages/comunidad/comunidad.module#ComunidadPageModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
  { path: 'configuracion', loadChildren: './pages/configuracion/configuracion.module#ConfiguracionPageModule' },
  { path: 'soporte-tecnico', loadChildren: './pages/soporte-tecnico/soporte-tecnico.module#SoporteTecnicoPageModule' },
  { path: 'bienvenido', loadChildren: './pages/bienvenido/bienvenido.module#BienvenidoPageModule' },

  // { path: '**', redirectTo: 'login'},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
