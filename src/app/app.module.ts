import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ManagementButtonsComponent } from './components/management-buttons/management-buttons.component';
import { ArtistsService } from './services/artists.service';
import { ArtistFormComponent } from './components/artist-form/artist-form.component';
import { RouterModule } from '@angular/router';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { StudioTattoComponent } from './components/studio-tatto/studio-tatto.component';
import { ComentsComponent } from './components/coments/coments.component';
import { CommentsService } from './services/comments.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitaFormComponent } from './components/cita-form/cita-form.component';
import { CitaService } from './services/cita.service';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { DesignsComponent } from './components/designs/designs.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ArtistComponent,
    ManagementButtonsComponent,
    CarrouselComponent,
    ArtistFormComponent,
    StudioTattoComponent,
    ComentsComponent,
    CitaFormComponent,
    ListCitasComponent,
    DesignsComponent,
    SignupComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  providers: [ArtistsService, CommentsService, CitaService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
