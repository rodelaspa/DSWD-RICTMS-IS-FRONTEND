import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { MainSidebarComponent } from './shared/components/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './shared/components/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './shared/components/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { PreLoaderComponent } from './shared/components/pre-loader/pre-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    PreLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
