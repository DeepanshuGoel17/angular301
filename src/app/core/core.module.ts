import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { AppRoutingModule } from './../app-routing.module';
import { UserDetailService } from 'src/app/core/services/userDetails.service';
import { HeaderComponent } from './shell/header/header.component';
import { AuthService } from 'angular-6-social-login';
import { AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login';
import { SignInService } from '../core/shell/header/service/signin.service';
import { MovieDropdownsComponent } from './shell/movie-dropdowns/movie-dropdowns.component';
import { SharedModule } from '../shared/shared.module';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('211481144823-tvupluah139i5bdcqdpnaeqdmeu9rfbd.apps.googleusercontent.com')
    }
  ]);
  return config;
}

@NgModule({
  declarations: [ShellComponent, HeaderComponent, MovieDropdownsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [UserDetailService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    SignInService,
    AuthService
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
