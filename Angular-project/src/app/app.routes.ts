import { Routes } from '@angular/router';
import { Project1Component } from './components/project1/project1.component';
import { HomeComponent } from './components/home/home.component';
import { Project2Component } from './components/project2/project2.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'project1',
        component: Project1Component
    },
    {
        path: 'project2',
        component: Project2Component,
        children:[
            {
                path: 'child1',
                component: HomeComponent
            }
        ]
    },
];

