import { create } from "zustand";
import { persist } from "zustand/middleware";
 const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isHydrated: false,

      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
      setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        state.setHydrated();
      },
    },
  ),
);
export default useAuthStore;
