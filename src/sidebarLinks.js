export default [
 
  {
    name: 'Home',
    icon: 'nc-icon nc-bank',
    collapsed: false,
    children: [
      
      {
        name: 'Sign Up',
        path: '/signup'
      },
      {
        name: 'Sign In',
        path: '/signin'
      },
      {
        name: 'Password Reset',
        path: '/passwordreset'
      }
    ]
  },
  {
    name: 'Plan',
    icon: 'nc-icon nc-single-copy-04',
    collapsed: false,
    children: [{
      name: 'Time',
      path: '/plan/time'
    },
    {
      name: 'Income',
      path: '/plan/income'
    },
    {
      name: 'Projects',
      path: '/plan/projects'
    }
    ]
  },
  {
    name: 'Act',
    icon: 'nc-icon nc-tile-56',
    collapsed: false,
    children: [{
      name: 'Daily Dev Log',
      path: '/act/dailydevlog'
    },
    {
      name: 'What I\'ve Read',
      path: '/act/whatiread'
    },
    {
      name: 'Manager Access',
      path: '/act/manageraccess'
    }
    ]
  },
  {
    name: 'Grow',
    icon: 'nc-icon nc-spaceship',
    collapsed: false,
    children: [{
      name: 'Strengths & Opportunities',
      path: '/grow/strengthsopportunities'
    },
    {
      name: 'Current Focus',
      path: '/grow/currentfocus'
    },
    {
      name: 'What to Read',
      path: '/grow/whattoread'
    },
    {
      name: 'Profile Editor',
      path: '/grow/profileeditor'
    }
    ]
  },
  {
    name: 'Account',
    icon: 'nc-icon nc-single-02',
    collapsed: false,
    children: [{
      name: 'Billing',
      path: '/account/billing'
    },
    {
      name: 'Profile',
      icon: 'nc-icon nc-box',
      path: '/account/profile'
    },
    {
      name: 'Affiliate',
      path: '/account/affiliate'
    }
    ]
  },
  
]
