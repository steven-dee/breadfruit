import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAuth = create(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,
      login: async (credentials) => {
        set({ loading: true, error: null });
        try {
          const response = await mockLogin(credentials);
          set({ user: response.user, loading: false });
          return response.user;
        } catch (error) {
          set({ error: error.message, loading: false });
          throw error;
        }
      },
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

// Mock function - replace with actual API call
const mockLogin = async (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === 'client@example.com' && credentials.password === 'password') {
        if (credentials.role === 'partner') {
          resolve({
            user: {
              id: 'p1',
              name: 'Insurance Partner',
              email: credentials.email,
              role: 'partner',
              companyName: 'SafeGuard Insurance',
              partnerId: 'PTN001'
            },
          });
        } else if (credentials.role === 'referral') {
          resolve({
            user: {
              id: 'r1',
              name: 'Referral Partner',
              email: credentials.email,
              role: 'referral',
              referralCode: 'JOHN1234',
              referralId: 'REF001'
            },
          });
        } else {
          resolve({
            user: {
              id: 'c1',
              name: 'John Smith',
              email: credentials.email,
              role: 'customer',
              customerId: 'CUS001'
            },
          });
        }
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export { useAuth };