import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { User } from "@/interfaces/user";

interface EditUserModalProps {
  user: User | null;
  onUpdate: (updatedUser: User) => void;
  onClose: () => void;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditUserModal: React.FC<EditUserModalProps> = ({
  user,
  onUpdate,
  onClose,
}) => {
  const [name, setName] = useState<string>(user ? user.name : "");
  const [age, setAge] = useState<number | string>(user ? user.age : "");
  const [gender, setGender] = useState<string>(user ? user.gender : "");
  const [remarks, setRemarks] = useState<string>(user ? user.remarks : "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedUser: User = {
      ...user!,
      name,
      age: Number(age),
      gender,
      remarks,
    };

    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/Kenzo800/interview-test-api/users/${
          user!.id
        }`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      onUpdate(updatedUser);
      onClose(); // Close the modal after update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Modal open={!!user} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2">
          Edit User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            margin="normal"
          />
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

          <TextField
            label="Remarks"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Update User
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
