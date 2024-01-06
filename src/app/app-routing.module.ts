import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterMembersComponent } from './pages/register-members/register-members.component';
import { EditMembersComponent } from './pages/edit-members/edit-members.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cadastro', component: RegisterMembersComponent},
  { path: 'editar/:id', component: EditMembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
