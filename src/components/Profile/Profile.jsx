import "./Profile.css";
import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/3");
      if (response.ok) {
        const users = await response.json();
        setUser(users);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt="User-Profile"
                      />
                    </div>
                    <h6 className="f-w-600">{user.username}</h6>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="f-w-600">Email</p>
                        <h6 className="m-b-10 text-muted f-w-400">
                          {user.email}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="f-w-600">Phone</p>
                        <h6 className="m-b-10 text-muted f-w-400">
                          98979989898
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
