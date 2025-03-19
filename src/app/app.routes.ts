import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'projects', pathMatch: 'full'
      },
      {
        path: 'projects',
        component: ProjectComponent
      }
    ]
  }

];
