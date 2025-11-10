import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/welcome'
    },
    {
        path: 'welcome',
        loadComponent: () => import('./pages/welcome/welcome').then(m => m.Welcome),
        children: [
            {
                path: 'authors',
                loadComponent: () => import('./pages/authors/authors').then(m => m.Authors)
            },
            {
                path: 'books',
                loadComponent: () => import('./pages/books/books').then(m => m.Books)
            },
            {
                path: 'users',
                loadComponent: () => import('./pages/users/users').then(m => m.Users)
            },
            {
                path: 'loans',
                loadComponent: () => import('./pages/loans/loans').then(m => m.Loans)
            }
        ]
    }
];