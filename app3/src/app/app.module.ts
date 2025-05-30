import { ApplicationRef, NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent,MainComponent,HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/app3' }],
  bootstrap:[AppComponent]
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef): void {
    // Let single-spa handle bootstrapping
    appRef.bootstrap(AppComponent);         
  }
 }
