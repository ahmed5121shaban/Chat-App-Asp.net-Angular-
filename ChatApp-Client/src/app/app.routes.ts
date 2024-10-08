import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { SettingComponent } from './setting/setting.component';
import { MessageBoxComponent } from './message-box/message-box.component';

export const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent,children:[
    {path:"chat",component:ChatBoxComponent,children:[
      {path:"message",component:MessageBoxComponent}
    ]},
    {path:"setting",component:SettingComponent}
  ]}
];
