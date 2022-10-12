import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { FooterComponent } from './footer/footer.component';
import { BinBuddyComponent } from './project-pop-ups/bin-buddy/bin-buddy.component';
import { AvaComponent } from './project-pop-ups/ava/ava.component';
import { CarRentalDatabaseComponent } from './project-pop-ups/car-rental-database/car-rental-database.component';
import { StockAlertComponent } from './project-pop-ups/stock-alert/stock-alert.component';
import { TeachingToddlersComponent } from './project-pop-ups/teaching-toddlers/teaching-toddlers.component';
import { DownForMaintenanceComponent } from './down-for-maintenance/down-for-maintenance.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, AboutMeComponent, ContactMeComponent, ProjectsPageComponent, FooterComponent, BinBuddyComponent, AvaComponent, CarRentalDatabaseComponent, StockAlertComponent, TeachingToddlersComponent, DownForMaintenanceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
