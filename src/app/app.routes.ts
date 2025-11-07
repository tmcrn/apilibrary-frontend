import { Routes } from '@angular/router';
import {Authors} from "./pages/authors/authors";
import {AUTHORS_ROUTES} from "./pages/authors/authors.routes";

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'authors', loadChildren: () => import('./pages/authors/authors.routes').then(m => m.AUTHORS_ROUTES) },
    { path: 'books', loadChildren: () => import('./pages/books/books.routes').then(m => m.BOOKS_ROUTES) },
    { path: 'users', loadChildren: () => import('./pages/users/users.routes').then(m => m.USERS_ROUTES) },
    { path: 'loans', loadChildren: () => import('./pages/loans/loans.routes').then(m => m.LOANS_ROUTES) },
];
