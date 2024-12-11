
export interface User { 
    id: number;
    name: string;
    age: number;
    gender: string;
    remarks: string;
}

export interface CardProps {
    user: User;
    onDelete: (id: number) => void;
    onEdit: (user: User) => void; // New prop for editing
  }
