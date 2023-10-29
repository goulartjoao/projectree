import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ProjectsRoutes } from 'src/app/pages/projects/projects.routes';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ProjectsRoutes,
  ],
  declarations: [
    ProjectsComponent,
    ProjectsDetailsComponent
  ]
})
export class ProjectsModule { }
