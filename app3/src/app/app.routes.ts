import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: '',
        component:MainComponent,
        children:[
            {
                path: 'home',
                component:HomeComponent
            }
        ]
    }
];
