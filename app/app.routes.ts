export const routes = [
  { path: '', loadChildren: () => require('./home/home.module')['HomeModule'] },
  { path: 'films', loadChildren: () => require('./films/films.module')['FilmsModule'] },
];
