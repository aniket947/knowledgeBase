import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardGuard } from './guard.guard';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const appRoutes: Routes = [
  { path: 'knowledge-base', component: KnowledgeBaseComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'dashboard',canActivate:[GuardGuard], component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
