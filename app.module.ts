import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { MaterialModule} from './material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { CameraComponent } from './camera/camera.component';
import { ComponentsComponent } from './components/components.component';
import { MapComponent } from './map/map.component';

import { StartscreenComponent } from './startscreen/startscreen.component';

import { AlertComponent } from './alert';


import { routing }        from './app.routing.module';
import { AuthGuard } from './guards';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AlertService, AuthenticationService, UserService } from './services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    ComponentsComponent,
    MapComponent,
    LoginComponent,
    StartscreenComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,

    IonicModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
