import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import { NavComponent } from './views/nav/nav.component';
import { FooterComponent } from './views/footer/footer.component';
import { RankingComponent } from './views/pages/ranking/ranking.component';
import { SobreComponent } from './views/pages/sobre/sobre.component';
import { ContatosComponent } from './views/pages/contatos/contatos.component';
import { OldRankingComponent } from './views/pages/old-ranking/old-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    RankingComponent,
    SobreComponent,
    ContatosComponent,
    OldRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
