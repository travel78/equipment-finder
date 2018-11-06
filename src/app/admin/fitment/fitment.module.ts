import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { FitmentPage } from './fitment.page';
import { GetLocationPage } from '../get-location/get-location.page';
import { Camera } from '@ionic-native/camera/ngx';



const routes: Routes = [
    {
        path: '',
        component: FitmentPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        AgmCoreModule
    ],
    declarations: [
        FitmentPage,
        GetLocationPage
    ],
    providers: [
        Geolocation,
        Camera
    ],
    entryComponents: [
        GetLocationPage
    ]
})
export class FitmentPageModule {
}
