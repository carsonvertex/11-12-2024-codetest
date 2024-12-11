import { useState } from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
import { User } from "@/interfaces/user";

const UserForm: React.FC<{ onUserAdded: (user: User) => void }> = ({ onUserAdded }) => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | string>("");
    const [gender, setGender] = useState<string>("");
    const [remarks, setRemarks] = useState<string>("");
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const newUser: User = {
        id: Date.now(), 
        name,
        age: Number(age),
        gender,
        remarks,
      };
  
      try {
        const response = await fetch("https://my-json-server.typicode.com/Kenzo800/interview-test-api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
  
        if (!response.ok) {
          throw new Error("Failed to post user data");
        }
  
        onUserAdded(newUser);
  
        // Reset form fields
        setName("");
        setAge("");
        setGender("");
        setRemarks("");
      } catch (error) {
        console.error("Error posting user:", error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
        <Typography variant="h6" gutterBottom>Add User</Typography>
        <div>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Age"
            type="number"
            variant="outlined"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            margin="normal"
          />
        </div>
        <div>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <MenuItem value="">
                <em>Select...</em>
              </MenuItem>
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            label="Remarks"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
    );
  };
  
  export default UserForm;