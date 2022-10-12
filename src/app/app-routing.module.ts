import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DownForMaintenanceComponent } from './down-for-maintenance/down-for-maintenance.component';
import { HomeComponent } from './home/home.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'about-me', component: AboutMeComponent },
  // { path: 'contact-me', component: ContactMeComponent },
  // { path: 'projects', component: ProjectsPageComponent },
  { path: 'about-me', component: DownForMaintenanceComponent },
  { path: 'contact-me', component: DownForMaintenanceComponent },
  { path: 'projects', component: DownForMaintenanceComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
