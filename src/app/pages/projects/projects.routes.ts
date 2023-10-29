import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from 'src/app/pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
];
export const ROUTES = RouterModule.forChild(routes);
