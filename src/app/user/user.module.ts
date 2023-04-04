import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule, RouterModule.forChild(userRoutes)],
  declarations: [ProfileComponent, LoginComponent],
  providers: [],
})
export class UserModule {}
