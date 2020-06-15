import Alternative from "views/pages/dashboards/Alternative.jsx";
import Buttons from "views/pages/components/Buttons.jsx";
import Calendar from "views/pages/Calendar.jsx";
import Cards from "views/pages/components/Cards.jsx";
import Charts from "views/pages/Charts.jsx";
import Components from "views/pages/forms/Components.jsx";
import Dashboard from "views/pages/dashboards/Dashboard.jsx";
import Elements from "views/pages/forms/Elements.jsx";
import Google from "views/pages/maps/Google.jsx";
import Grid from "views/pages/components/Grid.jsx";
import Icons from "views/pages/components/Icons.jsx";
import Lock from "views/pages/auth/Lock.jsx";
import Login from "views/pages/auth/Login.jsx";
import Notifications from "views/pages/components/Notifications.jsx";
import Pricing from "views/pages/auth/Pricing.jsx";
import Profile from "views/pages/auth/Profile.jsx";
import ReactBSTables from "views/pages/tables/ReactBSTables.jsx";
import Register from "views/pages/auth/Register.jsx";
import Sortable from "views/pages/tables/Sortable.jsx";
import Tables from "views/pages/tables/Tables.jsx";
import Timeline from "views/pages/auth/Timeline.jsx";
import Typography from "views/pages/components/Typography.jsx";
import Validation from "views/pages/forms/Validation.jsx";
import Vector from "views/pages/maps/Vector.jsx";
import Widgets from "views/pages/Widgets.jsx";

//brand side
import BrandDashboard from "views/pages/brand/Dashboard";
import BrandProducts from "./views/pages/brand/Products";
import BrandServices from "./views/pages/brand/Services";
import BrandAllow from "./views/pages/brand/Allow";
import BrandSetting from "./views/pages/brand/Setting";
import BrandPayment from "./views/pages/brand/Payment";
import BrandOrders from "./views/pages/brand/Orders";
import BrandProfile from "./views/pages/brand/Profile";
//admin side
import ProductCategories from "views/pages/admin/ProductCategories";
import ServiceCategories from "views/pages/admin/ServiceCategories";
import Products from "views/pages/admin/Products";
import Qualify from "views/pages/admin/Qualify";
import Services from "views/pages/admin/Services";
import Allow from "views/pages/admin/Allow";
import Admins from "./views/pages/admin/Admins";
import Brands from "./views/pages/admin/Brands";
import Users from "./views/pages/admin/Users";

//user side
import Overview from 'views/Overview.jsx';
import Browser from 'views/Browser.jsx';
import Home from 'views/pages/home/Home.jsx';
import Content from 'views/pages/home/Content.jsx';


const routes = [
  // {
  //   collapse: true,
  //   name: "Dashboards",
  //   icon: "ni ni-shop text-primary",
  //   state: "dashboardsCollapse",
  //   visible: true,
  //   branch: "admin",
  //   views: [
  //     {
  //       path: "/dashboard",
  //       name: "Dashboard",
  //       component: Dashboard,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/alternative-dashboard",
  //       name: "Alternative",
  //       component: Alternative,
  //       branch: "admin",
  //       layout: "/admin"
  //     }
  //   ]
  // },
  {
    collapse: true,
    name: "Author",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    visible: true,
    branch: "auth",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        component: Pricing,
        layout: "/auth"
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
        layout: "/auth"
      },
      {
        path: "/lock",
        name: "Lock",
        component: Lock,
        layout: "/auth"
      },
      {
        path: "/timeline",
        name: "Timeline",
        component: Timeline,
        layout: "/admin"
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
        layout: "/admin"
      }
    ]
  },
  // {
  //   collapse: true,
  //   name: "Components",
  //   icon: "ni ni-ui-04 text-info",
  //   state: "componentsCollapse",
  //   visible: true,
  //   branch: "admin",
  //   views: [
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       component: Buttons,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/cards",
  //       name: "Cards",
  //       component: Cards,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/grid",
  //       name: "Grid",
  //       component: Grid,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       component: Notifications,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       component: Icons,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       component: Typography,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   icon: "ni ni-single-copy-04 text-pink",
  //   state: "formsCollapse",
  //   visible: true,
  //   branch: "admin",
  //   views: [
  //     {
  //       path: "/elements",
  //       name: "Elements",
  //       component: Elements,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/components",
  //       name: "Components",
  //       component: Components,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/validation",
  //       name: "Validation",
  //       component: Validation,
  //       branch: "admin",
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   icon: "ni ni-align-left-2 text-default",
  //   state: "tablesCollapse",
  //   visible: true,
  //   branch: "admin",
  //   views: [
  //     {
  //       path: "/tables",
  //       name: "Tables",
  //       component: Tables,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/sortable",
  //       name: "Sortable",
  //       component: Sortable,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/react-bs-table",
  //       name: "React BS Tables",
  //       component: ReactBSTables,
  //       branch: "admin",
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   icon: "ni ni-map-big text-primary",
  //   state: "mapsCollapse",
  //   visible: true,
  //   branch: "admin",
  //   views: [
  //     {
  //       path: "/google",
  //       name: "Google",
  //       component: Google,
  //       branch: "admin",
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/vector",
  //       name: "Vector",
  //       component: Vector,
  //       branch: "admin",
  //       layout: "/admin"
  //     }
  //   ]
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   icon: "ni ni-archive-2 text-green",
  //   component: Widgets,
  //   layout: "/admin",
  //   branch: "admin",
  //   visible: true,
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   icon: "ni ni-chart-pie-35 text-info",
  //   component: Charts,
  //   layout: "/admin",
  //   branch: "admin",
  //   visible: true,
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "ni ni-calendar-grid-58 text-red",
  //   component: Calendar,
  //   layout: "/admin",
  //   branch: "admin",
  //   visible: true,

  // },
  // user side routes
  {
    collapse: true,
    name: "User",
    visible: false,
    branch: "user",
    views: [
      {
        path: "/index",
        name: "Browser",
        component: Home,
        layout: "/home"
      },
      {
        path: "/product/:name/:id",
        name: "Browser",
        component: Content,
        layout: "/home"
      }
    ]
  },
  // admin side routes
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-world-2 text-warning",
    component: Dashboard,
    branch: "admin",
    layout: "/admin",
    visible: true,
  },
  {
    collapse: true,
    name: "Categories",
    icon: "ni ni-collection text-primary",
    component: BrandDashboard,
    state: "categoryCollapse",
    layout: "/admin",
    branch: "admin",
    visible: true,
    views: [
      {
        path: "/all-product-categories",
        name: "Products",
        component: ProductCategories,
        branch: "admin",
        layout: "/admin"
      },
      {
        path: "/all-service-categories",
        name: "Services",
        component: ServiceCategories,
        branch: "admin",
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Products",
    icon: "ni ni-collection text-info",
    state: "productsCollapse",
    layout: "/admin",
    branch: "admin",
    visible: true,
    views: [
      {
        path: "/all-products",
        name: "All products",
        component: Products,
        branch: "admin",
        layout: "/admin"
      },
      {
        path: "/allowed-products",
        name: "Qualify products",
        component: Qualify,
        branch: "admin",
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Services",
    icon: "ni ni-archive-2 text-red",
    state: "servicesCollapse",
    layout: "/admin",
    branch: "admin",
    visible: true,
    views: [
      {
        path: "/all-services",
        name: "All services",
        component: Services,
        branch: "admin",
        layout: "/admin"
      },
      {
        path: "/allowed-services",
        name: "Allowed services",
        component: Allow,
        branch: "admin",
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Users",
    icon: "ni ni-circle-08 text-success",
    state: "usersCollapse",
    layout: "/admin",
    branch: "admin",
    visible: true,
    views: [
      {
        path: "/administrators",
        name: "All Administrators",
        component: Admins,
        branch: "admin",
        layout: "/admin"
      },
      {
        path: "/brands",
        name: "All Brands",
        component: Brands,
        branch: "admin",
        layout: "/admin"
      },
      {
        path: "/users",
        name: "All Users",
        component: Users,
        branch: "admin",
        layout: "/admin"
      }
    ]
  },
  {
    path: "/dashboard",
    name: "Badges",
    icon: "ni ni-badge text-warning",
    component: BrandDashboard,
    branch: "admin",
    layout: "/admin",
    visible: true,
  },
  {
    path: "/dashboard",
    name: "Virtual Gift Card",
    icon: "ni ni-world-2 text-primary",
    component: BrandDashboard,
    branch: "admin",
    layout: "/admin",
    visible: true,
  },
  {
    path: "/dashboard",
    name: "Manage Plan",
    icon: "ni ni-credit-card text-info",
    component: BrandDashboard,
    branch: "admin",
    layout: "/admin",
    visible: true,
  },
  {
    path: "/dashboard",
    name: "Log out",
    icon: "ni ni-user-run text-default",
    component: BrandDashboard,
    branch: "admin",
    layout: "/admin",
    visible: true,
  },

  // Brand side routes
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-world-2 text-warning",
    component: BrandDashboard,
    branch: "brand",
    layout: "/brand",
    visible: true,
  },
  {
    collapse: true,
    name: "Products",
    icon: "ni ni-collection text-info",
    state: "productsCollapse",
    layout: "/brand",
    branch: "brand",
    visible: true,
    views: [
      {
        path: "/all-products",
        name: "All products",
        component: BrandProducts,
        branch: "brand",
        layout: "/brand"
      },
      {
        path: "/allowed-products",
        name: "Allowed products",
        component: BrandServices,
        branch: "brand",
        layout: "/brand"
      }
    ]
  },
  {
    collapse: true,
    name: "Services",
    icon: "ni ni-archive-2 text-success",
    state: "servicesCollapse",
    layout: "/brand",
    branch: "brand",
    visible: true,
    views: [
      {
        path: "/all-services",
        name: "All services",
        component: BrandServices,
        branch: "brand",
        layout: "/brand"
      },
      {
        path: "/allowed-services",
        name: "Allowed services",
        component: BrandAllow,
        branch: "brand",
        layout: "/brand"
      }
    ]
  },
  {
    path: "/order",
    name: "Order List",
    icon: "ni ni-cart text-red",
    component: BrandOrders,
    branch: "brand",
    layout: "/brand",
    visible: true,
  },
  {
    path: "/payment",
    name: "Payment",
    icon: "ni ni-credit-card text-blue",
    component: BrandPayment,
    branch: "brand",
    layout: "/brand",
    visible: true,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-warning",
    component: BrandProfile,
    branch: "brand",
    layout: "/brand",
    visible: true,
  },
  {
    path: "/setting",
    name: "Settings",
    icon: "ni ni-settings-gear-65 text-green",
    component: BrandSetting,
    branch: "brand",
    layout: "/brand",
    visible: true,
  },
  {
    path: "/log-out",
    name: "Log out",
    icon: "ni ni-user-run text-default",
    component: BrandDashboard,
    branch: "brand",
    layout: "/brand",
    visible: true,
  },

];

export default routes;
