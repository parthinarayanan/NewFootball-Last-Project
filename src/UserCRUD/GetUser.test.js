import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "./GetUser";
import axios from "axios";

const BASE_URL = "https://localhost:7196/Api/User";

jest.mock("axios");

describe("Add User Component", () => {
  const mockEditUser = jest.fn();

  it("Should have all columns in the header", () => {
    render(<UserList editUser={mockEditUser} />);
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("EmailId")).toBeInTheDocument();
    expect(screen.getByText("MobileNo")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("PinCode")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
  it("should return users list while loading", async () => {
    const users = [
      {
        id: 1,
        firstName: "testfname1",
        lastName: "testlname2",
        emailId: "testemail1",
        mobileNo: "testmob1",
        address: "testAddress1",
        pinCode: "111111",
      },
      {
        id: 2,
        firstName: "testfname2",
        lastName: "testlname2",
        emailId: "testemail2",
        mobileNo: "testmob2",
        address: "testAddress2",
        pinCode: "222222",
      },
      {
        id: 4,
        firstName: "testtest",
        lastName: "test",
        emailId: "test",
        mobileNo: "9823947827364",
        address: "",
        pinCode: "234234",
        address: "23424",
      },
    ];
    // Mocking the Axios.get to return the Users value
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(users);

    // when
    render(<UserList editUser={mockEditUser} />);

    // then - verify that the get endpoint has been called
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/GetUserDetails`);
  });
});
