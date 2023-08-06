import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { MainSidebarComponent } from './shared/components/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './shared/components/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './shared/components/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';
import { PreLoaderComponent } from './shared/components/pre-loader/pre-loader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    PreLoaderComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaV3Module
  ],
  providers: [httpInterceptorProviders, 
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6Lf4H4YnAAAAABKpJ9f8K2iwtzdDn98QbKRYAiOJ',
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
