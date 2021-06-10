import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'main' 
      },
      { 
        path: 'main', 
        component: MainComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
