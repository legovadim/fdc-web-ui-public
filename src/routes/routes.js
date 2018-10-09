import DashboardLayout from '../components/Common/Layout/DashboardLayout.vue'

import Authenticator from 'src/components/Home/Authenticator.vue'
import PasswordReset from 'src/components/Home/PasswordReset.vue'
import Logout from 'src/components/Home/Logout.vue'

import Affiliate from 'src/components/Account/Affiliate.vue'
import Billing from 'src/components/Account/Billing.vue'
import Profile from 'src/components/Account/Profile.vue'

import DailyDevLog from 'src/components/Act/DailyDevLog.vue'
import ManagerAccess from 'src/components/Act/ManagerAccess.vue'
import WhatIRead from 'src/components/Act/WhatIRead.vue'

import CurrentFocus from 'src/components/Grow/CurrentFocus.vue'
import ProfileEditor from 'src/components/Grow/ProfileEditor.vue'
import StrengthsOpportunities from 'src/components/Grow/StrengthsOpportunities.vue'
import WhatToRead from 'src/components/Grow/WhatToRead.vue'

import Income from 'src/components/Plan/Income.vue'
import Projects from 'src/components/Plan/Projects.vue'
import Time from 'src/components/Plan/Time.vue'

// // GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// // Common pages
// const Overview = () => import(/* webpackChunkName: "widgets" */ 'src/components/Common/Views/Common/Overview.vue')
// const Widgets = () => import(/* webpackChunkName: "widgets" */ 'src/components/Common/Views/Common/Widgets.vue')

// // Pages
// import User from 'src/components/Common/Views/Pages/UserProfile.vue'
// import TimeLine from 'src/components/Common/Views/Pages/TimeLinePage.vue'
// import Login from 'src/components/Common/Views/Pages/Login.vue'
// import Register from 'src/components/Common/Views/Pages/Register.vue'
// import Lock from 'src/components/Common/Views/Pages/Lock.vue'

// Components pages
// import Buttons from 'src/components/Common/Views/Components/Buttons.vue'
// import GridSystem from 'src/components/Common/Views/Components/GridSystem.vue'
// import Panels from 'src/components/Common/Views/Components/Panels.vue'
// import SweetAlert from 'src/components/Common/Views/Components/SweetAlert.vue'
// import Notifications from 'src/components/Common/Views/Components/Notifications.vue'
// import Icons from 'src/components/Common/Views/Components/Icons.vue'
// import Typography from 'src/components/Common/Views/Components/Typography.vue'

// // Forms pages
// const RegularForms  = () => import(/* webpackChunkName: "forms" */ 'src/components/Common/Views/Forms/RegularForms.vue')
// const ExtendedForms = () => import(/* webpackChunkName: "forms" */ 'src/components/Common/Views/Forms/ExtendedForms.vue');
// const ValidationForms = () => import(/* webpackChunkName: "forms" */ 'src/components/Common/Views/Forms/ValidationForms.vue')
// const Wizard = () => import(/* webpackChunkName: "forms" */ 'src/components/Common/Views/Forms/Wizard.vue');

// // TableList pages
// const RegularTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Common/Views/Tables/RegularTables.vue');
// const ExtendedTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Common/Views/Tables/ExtendedTables.vue');
// const PaginatedTables = () => import(/* webpackChunkName: "tables" */ 'src/components/Common/Views/Tables/PaginatedTables.vue');
// // Maps pages
// const GoogleMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Common/Views/Maps/GoogleMaps.vue')
// const FullScreenMap = () => import(/* webpackChunkName: "maps" */ 'src/components/Common/Views/Maps/FullScreenMap.vue')
// const VectorMaps = () => import(/* webpackChunkName: "maps" */ 'src/components/Common/Views/Maps/VectorMapsPage.vue');

// // Calendar
// import Calendar from 'src/components/Common/Views/Calendar/CalendarRoute.vue'
// // Charts
// const Charts = () => import(/* webpackChunkName: "widgets" */ 'src/components/Common/Views/Charts.vue')

let PlanMenu = {
  
  path: '/plan',
  component: DashboardLayout,
  children: [
    {
      path: 'time',
      name: 'Time',
      component: Time
    },
    {
      path: 'income',
      name: 'Income',
      component: Income
    },
    {
      path: 'projects',
      name: 'Projects',
      component: Projects
    }
  ]
}

let ActMenu = {
  
  path: '/act',
  component: DashboardLayout,
  children: [
    {
      path: 'dailydevlog',
      name: 'DailyDevLog',
      component: DailyDevLog
    },
    {
      path: 'whatiread',
      name: 'What I\'ve Read',
      component: WhatIRead
    },
    {
      path: 'manageraccess',
      name: 'Manager Access',
      component: ManagerAccess
    }
  ]
}
let GrowMenu = {
  
  path: '/grow',
  component: DashboardLayout,
  children: [
    {
      path: 'strengthsopportunities',
      name: 'Strengths & Opportunities',
      component: StrengthsOpportunities
    },
    {
      path: 'currentfocus',
      name: 'Current Focus',
      component: CurrentFocus
    },
    {
      path: 'whattoread',
      name: 'What to Read',
      component: WhatToRead
    },
    {
      path: 'profileeditor',
      name: 'Profile Editor',
      component: ProfileEditor
    }
  ]
}
let AccountMenu = {
  
  path: '/account',
  component: DashboardLayout,
  children: [
    {
      path: 'billing',
      name: 'Billing',
      component: Billing
    },
    {
      path: 'profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: 'affiliate',
      name: 'Affiliate',
      component: Affiliate
    }
  ]
}

let signinPage = {
  path: '/signin',
  name: 'Sign In',
  component: Authenticator
}

let signupPage = {
  path: '/signup',
  name: 'Sign Up',
  component: Authenticator
}

let logoutPage = {
  path:'/logout',
  name: 'Logout',
  component: Logout
}

let passwordResetPage = {
  path: '/passwordreset',
  name: 'Password Reset',
  component: PasswordReset
}

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/account/profile'
  },
  AccountMenu,
  PlanMenu,
  ActMenu,
  GrowMenu,
  signinPage,
  signupPage,
  logoutPage,
  passwordResetPage,
  {path: '*', component: NotFound}
];

export default routes
