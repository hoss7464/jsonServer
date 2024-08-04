import React, { useState, useEffect } from "react";
import {
  ForgotPasswordContainer,
  ForgotPasswordWrapper,
} from "./ForgotPassElements";

const ForgotPassword = () => {
  const [data, setData] = useState([]);

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
        setData(data);
      })
      .catch((error) =>
        console.log("An error has been occured in fetching data", error)
      );
  }, []);

  return (
    <>
      <ForgotPasswordContainer>
        <ForgotPasswordWrapper>
          {data.map((myData) => {
            return (
              <div key={myData.id}>
                <li>
                  {myData.firstName} {myData.lastName} - {myData.address} -
                  {myData.number}
                </li>
              </div>
            );
          })}
        </ForgotPasswordWrapper>
      </ForgotPasswordContainer>
    </>
  );
};

export default ForgotPassword;
