import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationCreatorContainerComponent } from './containers/formation-creator-container/formation-creator-container.component';

const routes: Routes = [
    { path: '', component: FormationCreatorContainerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
