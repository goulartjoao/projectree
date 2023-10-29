import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent, title: 'Projects' },
  { path: ':id/details', component: ProjectsDetailsComponent, title: 'Project details' },
];
export const ProjectsRoutes = RouterModule.forChild(routes);
