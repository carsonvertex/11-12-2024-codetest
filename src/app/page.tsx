// task 3.1: complete the getUsers() function to retrieve the data from API 
// API URL = "https://my-json-server.typicode.com/Kenzo800/interview-test-api/users"

import User from "@/interfaces/user"
import Card from "@/components/card"
import { useState, useEffect } from "react";

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://my-json-server.typicode.com/Kenzo800/interview-test-api/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: User[] = await response.json();
  return data;
}

// task 3.2: handle the data and show it in card view correctly
export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!users.length) return <p>No profile data</p>;

  return (
    <main className="m-4">
      <div className="grid grid-cols-4 gap-2">
        {users.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}