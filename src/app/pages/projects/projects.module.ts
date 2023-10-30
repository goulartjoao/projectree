import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { RelevantInfoComponent } from './relevant-info/relevant-info.component';
import { CreateRelevantInfoComponent } from './relevant-info/create-relevant-info/create-relevant-info.component';
import { ProjectsRoutes } from 'src/app/pages/projects/projects.routes';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    ProjectsRoutes,
  ],
  declarations: [
    ProjectsComponent,
    ProjectsDetailsComponent,
    RelevantInfoComponent,
    CreateRelevantInfoComponent,
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
})
export class ProjectsModule { }
