import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { RankingComponent } from './views/pages/ranking/ranking.component';
import { SobreComponent } from './views/pages/sobre/sobre.component';
import { ContatosComponent } from './views/pages/contatos/contatos.component';

const routes: Routes = [
  {
    path: '',
        redirectTo: 'home',
        pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'ranking',
      component: RankingComponent
  },
  {
      path: 'sobre',
      component: SobreComponent
  },
  {
      path: 'contatos',
      component: ContatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
