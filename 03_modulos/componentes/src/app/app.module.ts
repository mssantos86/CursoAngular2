// Módulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Módulos de la aplicación
import { SharedModule } from './shared/shared.module';

// Componentes del módulo principal
import { AppComponent } from './app.component';
import { LadoComponent } from './lado/lado.component';

@NgModule({
  declarations: [
    AppComponent,
    LadoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
