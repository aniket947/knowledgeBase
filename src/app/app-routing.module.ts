import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const appRoutes: Routes = [
  { path: 'knowledge-base', component: KnowledgeBaseComponent},
  { path: 'activities', component: KnowledgeBaseComponent},
  { path: 'user-details', component: UserDetailsComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
