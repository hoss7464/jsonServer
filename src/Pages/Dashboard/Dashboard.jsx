import React, { useState, useEffect } from "react";
import { DashboardContainer, DashboardWrapper } from "./DahboardElements";

const Dashboard = () => {
  //States :
  const [listData, setListData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    number: "",
  });
  const [formData, setFormData] = useState([]);

  //handleChange function : 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setListData({
      ...listData,
      [name]: value,
    });
  };

  //handleSubmit function :
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.floor(Math.random() * 100).toString(); 
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...listData,
        id: newId,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("An error occurred in fetching data");
        }
        return res.json();
      })
      .then((data) => {
        setFormData([...formData, data]);
        setListData({
          firstName: "",
          lastName: "",
          address: "",
          number: "",
        });
      })
      .catch((error) => console.log("Check your internet connection:", error));
  };
  
  //To render data when page loads :
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("An error occurred in fetching data");
        }
        return res.json();
      })
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => console.log("Check your internet connection:", error));
  }, []);


  //To delete data based on id :
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to delete item with ID ${id}: ${errorMessage}`);
      }

      // Remove the deleted item from the local state
      setFormData(formData.filter((item) => item.id !== id));
      console.log(`Item with ID ${id} successfully deleted.`);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>
      <DashboardContainer>
        <DashboardWrapper>
          <form onSubmit={handleSubmit}>
            <div>
              <label> First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={listData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label> Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={listData.lastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label> Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={listData.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label> Number</label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Number"
                value={listData.number}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>

          <div>
            {formData.map((myData) => (
              <div key={myData.id}>
                <p>
                  {myData.firstName} {myData.lastName} - {myData.address} - {myData.number}
                </p>
                <button onClick={() => handleDelete(myData.id)}>Delete</button>
              </div>
            ))}
          </div>
        </DashboardWrapper>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
