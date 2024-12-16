import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useQuoteStore = create(
  persist(
    (set, get) => ({
      applications: [],
      addApplication: (application) => {
        const newApplication = {
          ...application,
          id: `APP-${Date.now()}`,
          status: 'Pending',
          submittedAt: new Date().toISOString()
        };
        set(state => ({
          applications: [...state.applications, newApplication]
        }));
        return newApplication;
      },
      updateApplicationStatus: (id, status) => {
        set(state => ({
          applications: state.applications.map(app =>
            app.id === id ? { ...app, status } : app
          )
        }));
      },
      getApplicationById: (id) => {
        return get().applications.find(app => app.id === id);
      }
    }),
    {
      name: 'quote-storage'
    }
  )
);