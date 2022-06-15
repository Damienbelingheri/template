import AdminPage from './page/Admin';
import Dashboard from './page/Dashboard';

const routes = [
    {
        label: 'Administration',
        menu: false,
        icon: 'cog',
        props: {
            link: '/admin',
            path: '/admin/:admin?/:id?',
            exact: true,
            component: AdminPage,
        },
    },
    {
        label: 'Accueil',
        menu: true,
        icon: 'home',
        props: {
            path: '/',
            component: Dashboard,
        },
    },
];

export default routes;
