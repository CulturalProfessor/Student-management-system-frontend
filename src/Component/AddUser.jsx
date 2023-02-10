import react, { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const initialValue = {
  _id: "",
  firstName: "",
  middleName: "",
  lastName: "",
  class: "",
  division: "",
  rollNumber: "",
  addressLine1: "",
  addressLine2: "",
  landmark: "",
  city: "",
  pincode: "",
  studentsProfilePicture: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
  let [user, setUser] = useState(initialValue);
  let navigate = useNavigate();

  useEffect(() => {
    let id = Math.random().toPrecision(5) * 100000;
    setUser({ ...user, _id: id });
  }, []);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    console.log(user);
    await addUser(user);
    navigate(-1);
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="firstName"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">MiddleName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="middleName"
          id="my-input"
        />
      </FormControl>{" "}
      <FormControl>
        <InputLabel htmlFor="my-input">LastName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="lastName"
          id="my-input"
        />
      </FormControl>{" "}
      <FormControl>
        <InputLabel htmlFor="my-input">Class only 1-12</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="class" id="my-input" />
      </FormControl>{" "}
      <FormControl>
        <InputLabel htmlFor="my-input">Division only A-E</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="division"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Roll Number only two digits</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="rollNumber"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Address Line 1</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="addressLine1"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Address Line 2</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="addressLine2"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Landmark</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="landmark"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">City</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="city" id="my-input" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Pincode only six digit</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="pincode"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">ProfilePicture</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="studentsProfilePicture"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => addUserDetails(e)}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
