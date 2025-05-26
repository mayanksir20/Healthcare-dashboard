export const navigationItems = [
  { icon: 'dashboard', label: 'Dashboard', active: true },
  { icon: 'history', label: 'History' },
  { icon: 'calendar', label: 'Calendar' },
  { icon: 'clock', label: 'Appointments' },
  { icon: 'chart', label: 'Statistics' },
  { icon: 'test', label: 'Tests' },
  { icon: 'chat', label: 'Chat' },
  { icon: 'help', label: 'Support' },
  { icon: 'settings', label: 'Setting' }
];

export const healthData = [
  {
    id: 1,
    organ: 'Heart ',
    status: 'healthy',
    date: '10 Nov 2021',
    color: '#10b981',
    progress: 85
  },
  {
    id: 1,
    organ: 'Lungs',
    status: 'healthy',
    date: '15 Nov 2021',
    color: '#ef4444',
    progress: 85
  },
  {
    id: 2,
    organ: 'Teeth',
    status: 'needs attention',
    date: '20 Oct 2021',
    color: '#10b981',
    progress: 70
  },
  {
    id: 3,
    organ: 'Bone',
    status: 'healthy',
    date: '15 Oct 2021',
    color: '#f59e0b',
    progress: 90
  }
];

export const appointments = {
  thursday: [
    {
      id: 1,
      title: 'Health checkup complete',
      time: '11:00 AM',
      icon: 'Hospital',      // icon name descriptive string hai
      color: 'purple',
    },
    {
      id: 2,
      title: 'Ophthalmologist',
      time: '14:00 PM',
      icon: 'Ophthalmologist',
      color: 'blue',
    },
  ],
  saturday: [
    {
      id: 3,
      title: 'Cardiologist',
      time: '12:00 AM',
      icon: 'Heart',
      color: 'red',
    },
    {
      id: 4,
      title: 'Neurologist',
      time: '16:00 PM',
      icon: 'Brain',
      color: 'indigo',
    },
  ],
};


export const calendarData = [
  { day: 25, appointments: [] },
  { day: 26, appointments: ['09:00'] },
  { day: 27, appointments: ['12:00'] },
  { day: 28, appointments: ['11:00'] },
  { day: 29, appointments: ['14:00', '15:00'] },
  { day: 30, appointments: ['09:00'] },
  { day: 31, appointments: [] }
];


export const activityData = [
  { day: 'Mon', value: 60 },
  { day: 'Tues', value: 80 },
  { day: 'Wed', value: 40 },
  { day: 'Thurs', value: 100 },
  { day: 'Fri', value: 70 },
  { day: 'Sat', value: 90 },
  { day: 'Sun', value: 50 }
];