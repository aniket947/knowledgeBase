import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CssFlipkartComponent } from './css-flipkart/css-flipkart.component';
import { CSSComponent } from './css/css.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardGuard } from './guard.guard';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SubjectComponent } from './subject/subject.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const appRoutes: Routes = [
  { path: 'knowledge-base', children:[
    { path: '',component: KnowledgeBaseComponent},                 //it means go to //localhost:4200/knowledge-base 
    { path: 'user-details', component: UserDetailsComponent },
  ] },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'css', component: CSSComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'dashboard',canActivate:[GuardGuard], component: DashboardComponent },
  { path: 'ng-content', component: NgContentComponent },
  { path: 'css-flipkart', component: CssFlipkartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{
    preloadingStrategy:PreloadAllModules                // PreLoading in angular
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
