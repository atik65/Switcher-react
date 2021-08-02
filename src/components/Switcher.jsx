import React, { useState, useEffect } from "react";

const Switcher = () => {
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState([]);
  let [index, setIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log("error in fetching data from jsonPlaceholder ");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (index) => {
    setIndex(index);
  };

  if (loading === true) {
    return (
      <div className="container pt-5">
        <h1 className="display-4 text-center pt-5 mt-5">Loading...</h1>
      </div>
    );
  }

  let { name, username, email, address, phone, website, company } = data[index];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 py-2">
            {data.map((user, value) => {
              return (
                <div
                  key={value}
                  class={` card text-left my-3 pointer ${
                    value === index ? "bg" : ""
                  }`}
                >
                  <div onClick={() => handleClick(value)} class="card-body">
                    {user.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-8 mt-5">
            <div className="container  mt-5 p-5">
              <h2>Name : {name}</h2>
              <h4> UserName : {username}</h4>
              <p> {email}</p>
              <p>
                <strong>Address:</strong> <br />
                <span> Street : {address.street}</span>
                <br />
                <span> Suite : {address.suite}</span>
                <br />
                <span> City : {address.city}</span>
                <br />
                <span> Zipcode : {address.zipcode}</span>
                <br />
              </p>

              <p>
                <strong>Phone : </strong> {phone}{" "}
              </p>
              <p>
                <strong>Website : </strong> {website}{" "}
              </p>

              <p>
                <strong>Company:</strong> <br />
                <span> Name : {company.name}</span>
                <br />
                <span> Catch Phrase : {company.catchPhrase}</span>
                <br />
                <span> Bs : {company.bs}</span>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Switcher;
