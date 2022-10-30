import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DescComponent } from './desc/desc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './post/post.component';
import { VendreComponent } from './vendre/vendre.component';
import { LouerComponent } from './louer/louer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PostMdComponent } from './post-md/post-md.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescComponent,
    PostComponent,
    VendreComponent,
    LouerComponent,
    CarouselComponent,
    PostMdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
