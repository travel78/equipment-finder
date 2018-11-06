import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminPage } from './admin.page';

const routes: Routes = [
    {path: '', component: AdminPage},
    {path: 'fitmentN', loadChildren: './scan-nfc/scan-nfc.module#ScanNfcPageModule'},
    // {path: 'fitment/:id', loadChildren: './fitment/fitment.module#FitmentPageModule'},
    {path: 'fitment', loadChildren: './fitment/fitment.module#FitmentPageModule'}
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AdminPage]
})
export class AdminPageModule {
}
