import React, { useState, useEffect } from "react";
import { DashboardContainer, DashboardWrapper } from "./DahboardElements";

const Dashboard = () => {
  //states :
  const [listData, setListData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    number: "",
  });
  const [formData, setFormData] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null)
  

  //handleChange function :
  const handleChange = (e) => {
    const { name, value } = e.target;
    setListData({
      ...listData,
      [name]: value,
    });
  };

  //handleSubmit function
  const handlSubmit = (e) => {
    e.preventDefault();

    const url = editingItemId ? `http://localhost:5000/hossein/${editingItemId}` : "http://localhost:5000/hossein"
    const method = editingItemId ? "PUT" : "POST"

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...listData,
        id: editingItemId || Math.floor(Math.random() * 100).toString(),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(console.log("response is not ok"));
        }
        return res.json();
      })
      .then((data) => {
        if (editingItemId) {
          setFormData(formData.map((item) => item.id === editingItemId ? data : item))
          setEditingItemId(null)
        }
        else {
          setFormData([...formData, data]);
        }
       
        console.log("Data has been sent successfully :", data);
        setListData({
          firstName: "",
          lastName: "",
          address: "",
          number: "",
        });
      })
      .catch((error) =>
        console.log("An error has been occured in fetching data", error)
      );
  };

  //To fetch data when the page loads :
  useEffect(() => {
    fetch("http://localhost:5000/hossein", {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(console.log("response is not ok"));
        }
        return res.json();
      })
      .then((data) => {
        setFormData(data);
      })
      .catch((error) =>
        console.log("An error has been occured in fetching data", error)
      );
  }, [])

  //to delete data from server :
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/hossein/${id}`, {
      method : "DELETE"
    }).then((res) => {
      if (!res.ok) {
        throw new Error(console.log("response is not ok"));
      }
      setFormData(formData.filter((item) => item.id !== id ))
      console.log(`data with id : ${id} has been deleted`)
    }).catch((error) => console.log("An error has been occured in deleting data", error))
  }

  //To update data from server :
  const handleEdit = (item) => {
    setListData({
      firstName : item.firstName,
      lastName : item.lastName,
      address : item.address,
      number : item.number
    })
    setEditingItemId(item.id)
  }

  return (
    <>
      <DashboardContainer>
        <DashboardWrapper>
          <form onSubmit={handlSubmit}>
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

            <button type="submit">{editingItemId ? "Update" : "Submit"}</button>
          </form>
          <div>
            {formData.map((myData) => {
              return (
                <div key={myData.id}>
                  <li>
                    {myData.firstName} {myData.lastName} - {myData.address} -
                    {myData.number}
                  </li>
                  <button onClick={()=> handleDelete(myData.id)}>Delete</button>
                  <button onClick={() => handleEdit(myData)} >Update</button>
                </div>
              );
            })}
          </div>
        </DashboardWrapper>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
