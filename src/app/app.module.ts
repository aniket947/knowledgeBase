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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
