export const mockCustomerPolicies = [
  {
    id: 1,
    policyNumber: 'POL-2023-001',
    type: 'Auto Insurance',
    status: 'Active',
    startDate: '2023-01-15',
    premium: 89.99,
    provider: 'SafeGuard Insurance'
  },
  {
    id: 2,
    policyNumber: 'POL-2023-002',
    type: 'Home Insurance',
    status: 'Pending',
    startDate: '2023-11-01',
    premium: 125.00,
    provider: 'Premier Protection'
  }
];

export const mockPartnerPolicies = [
  {
    id: 1,
    policyNumber: 'POL-2023-001',
    customerName: 'John Smith',
    type: 'Auto Insurance',
    status: 'Active',
    startDate: '2023-01-15',
    premium: 89.99
  },
  {
    id: 2,
    policyNumber: 'POL-2023-002',
    customerName: 'Sarah Johnson',
    type: 'Home Insurance',
    status: 'Active',
    startDate: '2023-02-20',
    premium: 125.00
  },
  {
    id: 3,
    policyNumber: 'POL-2023-003',
    customerName: 'Michael Brown',
    type: 'Auto Insurance',
    status: 'Pending',
    startDate: '2023-11-01',
    premium: 95.50
  }
];

export const mockPartnerStats = {
  activePolicies: 156,
  pendingApplications: 23,
  monthlyRevenue: 45280
};

export const mockCustomerStats = {
  activePolicies: 2,
  totalPremium: 214.99,
  nextPayment: '2023-12-01'
};