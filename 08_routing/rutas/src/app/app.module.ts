// Modulos de Angular
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos de la aplicación
import { EnlacesModule } from './enlaces/enlaces.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { AutoresModule } from './autores/autores.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routing';

// Componentes del modulo principal
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, appRouting, SharedModule,
    HomeModule, AboutModule, AutoresModule,
    CatalogoModule, EnlacesModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
