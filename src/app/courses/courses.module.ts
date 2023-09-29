import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [  // Aqui é onde eu faço as importações sempre que eu queira usar alguma coisa do material.angula eu devo colocar aqui o import.
    CommonModule,
     CoursesRoutingModule,
     AppMaterialModule   // Importando todos o modulos da classse app-material.module em shared.
    ]
})
export class CoursesModule {}
