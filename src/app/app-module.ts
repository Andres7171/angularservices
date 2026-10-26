import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comics';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { PersonasComponent } from './components/personas-component/personas-component';
import { ServicioPersona } from './services/service.persona';
import { MenuComponent } from './components/menu-component/menu-component';

@NgModule({
  declarations: [App, ComicsComponent, PersonasComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicioPersona,
    ServiceComics,
  ],
  bootstrap: [App],
})
export class AppModule {}
