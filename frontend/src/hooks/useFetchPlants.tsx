import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_BASE_URL || "";
// Custom hook to fetch plant data
const useFetchPlants = () => {
  const [plants, setPlants] = useState([]); // Store the fetched plants
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any error during fetch

  // useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch(`${API_URL}/api/plants`); // Replace with actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch plants");
        }
        const data = await response.json();
        setPlants(data); // Update the plants state with the fetched data
      } catch (err: any) {
        setError(err.messsage); // Update error state if the fetch fails
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchPlants(); // Call the function to fetch plants
  }, []); // Empty dependency array means this effect runs only once, on mount

  return { plants, loading, error }; // Return the data, loading, and error states
};

export default useFetchPlants;
