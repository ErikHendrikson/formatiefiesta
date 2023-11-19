import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationCreatorContainerComponent } from './containers/formation-creator-container/formation-creator-container.component';
import { FormationViewerContainerComponent } from './containers/formation-viewer-container/formation-viewer-container.component';

const routes: Routes = [
    { path: 'formatie', component: FormationViewerContainerComponent },
    { path: '', component: FormationCreatorContainerComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
