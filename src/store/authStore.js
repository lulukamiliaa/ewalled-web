import { create } from "zustand";

const authStore = create((set, get) => ({
  users: JSON.parse(localStorage.getItem("users")) || [], // Load users from localStorage
  isAuthenticated: false,
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,

  // ✅ Function to register a user
  register: (userData) => {
    set((state) => {
      const updatedUsers = [...state.users, userData];
      localStorage.setItem("users", JSON.stringify(updatedUsers)); // Save users to localStorage
      return { users: updatedUsers };
    });
  },

  // ✅ Function to log in user
  login: (email, password) => {
    const user = get().users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user)); // Save logged-in user
      set({ isAuthenticated: true, currentUser: user });
      return true; // ✅ Indicate login success
    } else {
      return false; // ❌ Indicate login failure
    }
  },

  // ✅ Function to log out user
  logout: () => {
    localStorage.removeItem("currentUser");
    set({ isAuthenticated: false, currentUser: null });
  },
}));

export default authStore;
