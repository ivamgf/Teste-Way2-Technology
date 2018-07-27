import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { RankingComponent } from './views/pages/ranking/ranking.component';
import { SobreComponent } from './views/pages/sobre/sobre.component';
import { ContatosComponent } from './views/pages/contatos/contatos.component';
import { OldRankingComponent } from './views/pages/old-ranking/old-ranking.component';

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
  },
  {
      path: 'old-ranking',
      component: OldRankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
