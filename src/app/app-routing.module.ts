import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch:'full' },
    { path:'project', redirectTo:'/project', pathMatch:'full'},
    { path:'tasklist', redirectTo:'/tasklists', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
