import breadmilk from '../assets/projects/breadmilk.jpg'
import barbershopLanding from '../assets/certifications/barbershop/my landing page.jpeg.png'

export const projects = [
  {
    id: 'bread-inventory',
    title: 'Bread Inventory Management System',
    secondTitle: 'terisitas reservation barbershops',
    secondProjectId: 'terisitas-barbershop',
    secondGithubUrl: 'https://github.com/mikee111',
    images: [breadmilk, barbershopLanding],
    githubUrl: 'https://github.com/mikee111/My-Portfolio-',
    caseStudyUrl: 'https://your-case-study-url.com',
    leadDeveloper: 'Mike Arvin Cruz',
    architecture: 'Client-Server Architecture',
    type: 'Web Platform',
    contributors: [
      'Mike Arvin Cruz',
      'AI Assistance for optimization and automation'
    ],
    techStack: [
      'React JS',
      'Node JS',
      'HTML',
      'SQL'
    ],
    objectivesIntro: 'The Bread Inventory Management System was designed to automate manual paperwork and improve operational efficiency through intelligent tracking and forecasting.',
    objectives: [
      {
        title: 'Automate Manual Processes',
        description: 'Replace manual writing and paperwork with a secure digital system for accurate record keeping.'
      },
      {
        title: 'Product Tracking',
        description: 'Track all bread products in real-time, identify fast-moving and slow-moving inventory.'
      },
      {
        title: 'Seasonal Forecasting',
        description: 'Predict the strongest performing products for each season (winter, summer, etc.) to optimize production.'
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamline workflows and improve decision-making through data-driven insights.'
      }
    ]
  },
  {
    id: 'terisitas-barbershop',
    title: 'terisitas reservation barbershops',
    images: [barbershopLanding],
    githubUrl: 'https://github.com/mikee111',
    caseStudyUrl: 'https://your-case-study-url.com',
    leadDeveloper: 'Mike Arvin Cruz',
    architecture: 'Client-Server Architecture',
    type: 'Web Platform',
    contributors: [
      'Mike Arvin Cruz',
      'AI Assistance for optimization and automation'
    ],
    techStack: [
      'React JS',
      'Node JS',
      'HTML',
      'CSS',
      'SUPABASE'
    ],
    objectivesIntro: 'The Terisitas Barbershop Reservation System was designed to automate appointment booking and improve operational efficiency through intelligent scheduling and centralized management.',
    objectives: [
      {
        title: 'Admin Dashboard',
        description: 'Monitor barbershop sales, revenue, bookings, customers, and staff performance through a centralized management overview.'
      },
      {
        title: 'Online Reservation',
        description: 'Allow clients to easily book haircut appointments online with preferred barbers anytime.'
      },
      {
        title: 'Queue & Scheduling',
        description: 'Organize daily schedules, reduce in-shop wait times, and prevent scheduling conflicts.'
      },
      {
        title: 'Prevent Double Bookings',
        description: 'Keep accurate, real-time track of available and occupied barber schedules.'
      },
      {
        title: 'Improve Customer Convenience',
        description: 'Enable customers to book appointments seamlessly without having to visit or call the barbershop.'
      }
    ],
    hideFromGrid: true
  }
]
