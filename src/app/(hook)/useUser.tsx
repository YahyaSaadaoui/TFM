"use client"; // Add this directive

import useSWR from "swr";

export default function useUser() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/current-user",
    async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      return json.user; // Assuming your API returns { user: ... }
    }
  );

  return { user: data, isLoading, error, mutate };
};