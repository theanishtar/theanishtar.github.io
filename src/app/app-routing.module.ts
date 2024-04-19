import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CertComponent } from './cert/cert.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cert', component: CertComponent },
  // { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to cert component by default
  // { path: '**', component: PageNotFoundComponent } // Handle 404 - Page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
