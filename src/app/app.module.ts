import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CreateAgendaComponent } from './components/create-agenda/create-agenda.component';
import { ListAgendaComponent } from './components/list-agenda/list-agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    CreateAgendaComponent,
    ListAgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
