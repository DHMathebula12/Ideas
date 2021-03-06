import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolModalModule } from '@solar/components';

import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeasComponent } from './ideas/ideas.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IdeasService } from './ideas.service';
import { CreateIdeaComponent } from './create-idea/create-idea.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { SolarHeaderModule} from '@solar/components';

const appRoutes: Routes = [
  { path: '', component: IdeasComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'create-idea', component: CreateIdeaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    IdeasComponent,
    HeaderComponent,
    CreateIdeaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SolModalModule,
    FormsModule,
    HttpModule,
    SolarHeaderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IdeasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
