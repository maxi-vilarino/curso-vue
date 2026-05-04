import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref();

  const API_URL = "https://jsonplaceholder.typicode.com/users/1";

  const fetchUser = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      user.value = data;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return {
    user,
    fetchUser,
  };
});
