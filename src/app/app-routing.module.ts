import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'user', loadChildren: './user/user.module#UserPageModule'},
    {path: 'admin', loadChildren: './admin/admin.module#AdminPageModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
