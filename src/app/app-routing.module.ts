import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-cusco',
    loadChildren: () => import('./about-cusco/about-cusco.module').then( m => m.AboutCuscoPageModule)
  },
  {
    path: 'calendario-fiestas',
    loadChildren: () => import('./calendario-fiestas/calendario-fiestas.module').then( m => m.CalendarioFiestasPageModule)
  },
  {
    path: 'calendario-detalle',
    loadChildren: () => import('./calendario-detalle/calendario-detalle.module').then( m => m.CalendarioDetallePageModule)
  },
  {
    path: 'cultura',
    loadChildren: () => import('./cultura/cultura.module').then( m => m.CulturaPageModule)
  },
  {
    path: 'cultura-detalle',
    loadChildren: () => import('./cultura-detalle/cultura-detalle.module').then( m => m.CulturaDetallePageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'blog-detalle',
    loadChildren: () => import('./blog-detalle/blog-detalle.module').then( m => m.BlogDetallePageModule)
  },
  {
    path: 'turismo',
    loadChildren: () => import('./turismo/turismo.module').then( m => m.TurismoPageModule)
  },
  {
    path: 'puntos-interes-detalle',
    loadChildren: () => import('./puntos-interes-detalle/puntos-interes-detalle.module').then( m => m.PuntosInteresDetallePageModule)
  },
  {
    path: 'solidarity',
    loadChildren: () => import('./solidarity/solidarity.module').then( m => m.SolidarityPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'transporte',
    loadChildren: () => import('./transporte/transporte.module').then( m => m.TransportePageModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./seguridad/seguridad.module').then( m => m.SeguridadPageModule)
  },
  {
    path: 'municipalidad',
    loadChildren: () => import('./municipalidad/municipalidad.module').then( m => m.MunicipalidadPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
