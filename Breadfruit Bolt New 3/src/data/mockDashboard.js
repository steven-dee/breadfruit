export const mockDashboardData = {
  stats: {
    totalApplications: 156,
    pendingApplications: 23,
    approvedApplications: 124,
    totalPolicies: 892,
    monthlyRevenue: 89250,
    customerRetention: 94
  },
  recentApplications: [
    {
      id: 'APP-2023-001',
      customerName: 'John Smith',
      vehicle: '2022 Toyota Camry',
      submittedAt: '2023-11-15T10:30:00Z',
      status: 'Pending',
      premium: 125.00
    },
    {
      id: 'APP-2023-002',
      customerName: 'Sarah Johnson',
      vehicle: '2021 Honda CR-V',
      submittedAt: '2023-11-14T15:45:00Z',
      status: 'Approved',
      premium: 142.50
    },
    {
      id: 'APP-2023-003',
      customerName: 'Michael Brown',
      vehicle: '2023 Nissan Altima',
      submittedAt: '2023-11-14T09:15:00Z',
      status: 'Pending',
      premium: 118.75
    }
  ],
  recentPolicies: [
    {
      id: 'POL-2023-001',
      customerName: 'David Wilson',
      type: 'Comprehensive Auto',
      startDate: '2023-11-01',
      premium: 135.00,
      status: 'Active'
    },
    {
      id: 'POL-2023-002',
      customerName: 'Emily Davis',
      type: 'Third Party Auto',
      startDate: '2023-11-05',
      premium: 89.99,
      status: 'Active'
    },
    {
      id: 'POL-2023-003',
      customerName: 'James Miller',
      type: 'Comprehensive Auto',
      startDate: '2023-11-10',
      premium: 142.50,
      status: 'Active'
    }
  ],
  activityLog: [
    {
      id: 1,
      action: 'Policy Approved',
      description: 'Auto insurance policy approved for Sarah Johnson',
      timestamp: '2023-11-15T14:30:00Z'
    },
    {
      id: 2,
      action: 'New Application',
      description: 'New application received from Michael Brown',
      timestamp: '2023-11-15T12:15:00Z'
    },
    {
      id: 3,
      action: 'Payment Received',
      description: 'Monthly premium payment received from David Wilson',
      timestamp: '2023-11-15T10:45:00Z'
    }
  ]
};