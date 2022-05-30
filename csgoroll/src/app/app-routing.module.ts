import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxDetailsComponent } from './components/box-details/box-details.component';
import { BoxGridComponent } from './components/box-grid/box-grid.component';

const routes: Routes = [
  { path: 'boxes', component: BoxGridComponent },
  { path: 'boxes/:id', component: BoxDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'boxes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
