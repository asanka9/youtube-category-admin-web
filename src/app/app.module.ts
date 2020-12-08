import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {CreateItemsComponent} from './module/create-items/create-items.component';
import {CreateUserComponent} from './module/create-user/create-user.component';
import {HomeComponent} from './module/home/home.component';
import {AppsComponent} from './shared/steppers-create-user/apps/apps.component';
import {CategoryComponent} from './shared/steppers-create-user/category/category.component';
import {ItemsComponent} from './shared/steppers-create-user/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CategoryComponent,
    AppsComponent,
    HomeComponent,
    CreateItemsComponent,
    CreateUserComponent
  ],
  imports: [
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    ScrollingModule,
    MatStepperModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
