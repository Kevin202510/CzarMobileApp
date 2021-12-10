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
  },  {
    path: 'major',
    loadChildren: () => import('./tabpages/major/major.module').then( m => m.MajorPageModule)
  },
  {
    path: 'gener-ed',
    loadChildren: () => import('./tabpages/gener-ed/gener-ed.module').then( m => m.GenerEdPageModule)
  },
  {
    path: 'profes-ed',
    loadChildren: () => import('./tabpages/profes-ed/profes-ed.module').then( m => m.ProfesEdPageModule)
  },
  {
    path: 'eng',
    loadChildren: () => import('./major/eng/eng.module').then( m => m.EngPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
