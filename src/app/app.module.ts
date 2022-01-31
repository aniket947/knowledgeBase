import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { FormsModule } from '@angular/forms';
import { ObjectArrayComponent } from './knowledge-base/object-array/object-array.component';
import { ArrayForLoopComponent } from './knowledge-base/array-for-loop/array-for-loop.component';
import { ArrayFindFilterSomeComponent } from './knowledge-base/find-filter-some/find-filter-some.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { IfComponent } from './knowledge-base/ngIf/ngIf.component';
import { ForComponent } from './knowledge-base/ngFor/ngFor.component';
import { ngSwitchComponent } from './knowledge-base/ngSwitch/ngSwitch.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UxPipe } from './Pipes/ux.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { RedBlackDirective } from './custom-directives/redBlack.directive';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardChildComponent } from './child/dashboard-child/dashboard-child';
import { TemplateReferenceComponent } from './knowledge-base/template-reference/template-reference.component';
import { PipesComponent } from './knowledge-base/pipes/pipes.component';
import { NgClassStyleComponent } from './knowledge-base/ng-class-style/ng-class-style.component';
import { ViewChildComponent } from './knowledge-base/view-child/view-child.component';
import { HostListenerComponent } from './knowledge-base/host-listener/host-listener.component';
import { DataSharingViaServiceComponent } from './knowledge-base/data-sharing-via-service/data-sharing-via-service.component';
import { KbChildComponent } from './knowledge-base/kb-child/kb-child.component';
import { KbParentComponent } from './knowledge-base/kb-parent/kb-parent.component';
import { DataSharingServiceService } from './services/data-sharing-service.service';

@NgModule({
  declarations: [
    UxPipe,
    FilterPipe,
    DashboardComponent,
    DashboardChildComponent,
    ChildComponent,
    RedBlackDirective,
    AppComponent,
    KnowledgeBaseComponent,
    ObjectArrayComponent,
    ArrayForLoopComponent,
    IfComponent,
    ForComponent,
    ngSwitchComponent,
    ArrayFindFilterSomeComponent,
    UserDetailsComponent,
    TemplateReferenceComponent,
    PipesComponent,
    NgClassStyleComponent,
    ViewChildComponent,
    HostListenerComponent,
    DataSharingViaServiceComponent,
    KbChildComponent,
    KbParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [DataSharingServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
