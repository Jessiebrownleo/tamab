export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In a real app, this should be a hashed password
  avatar: string;
  memberSince: string;
  totalOrders: number;
  role?: 'user' | 'admin';
}

export const sampleUsers: User[] = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@gmail.com',
    password: 'admin123', // In a real app, never store plain text passwords
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    memberSince: 'January 2023',
    totalOrders: 12,
    role: 'user'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password123',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    memberSince: 'March 2023',
    totalOrders: 5,
    role: 'admin'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    password: 'password123',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    memberSince: 'May 2023',
    totalOrders: 2,
    role: 'user'
  }
];

// Helper function to find user by email and password
export const authenticateUser = (email: string, password: string): User | null => {
  const user = sampleUsers.find(
    user => user.email.toLowerCase() === email.toLowerCase() && 
           user.password === password
  );
  return user || null;
};
