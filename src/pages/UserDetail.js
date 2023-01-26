import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchUser } from "../redux/action/Searchaction";

import {
  ArrowLeftOutlined,
  MailOutlined,
  EnvironmentOutlined,
  TwitterOutlined,
  TeamOutlined,
  CalendarOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./userDetail.css";
import { Tag } from "antd";

export const UserDetail = () => {
  const { key } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.user);
  const loading = data.loading;
  const user = data.user_details;
  useEffect(() => {
    dispatch(searchUser(key));
  }, [dispatch, key]);

  if (user) {
    if (user.follower > 1000) {
      let num = user.follower / 10000;
      num = num.toFixed(1);
      num = num + "k";
      user.follower = num;
    }
    if (user.following > 1000) {
      let num = user.following / 10000;
      num = num.toFixed(1);
      num = num + "k";
      user.following = num;
    }
    if (user.public_repo > 1000) {
      let num = user.public_repo / 10000;
      num = num.toFixed(1);
      num = num + "k";
      user.public_repo = num;
    }

    let date = new Date(user.join_date);
    let dateString = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    user.join_date = dateString;
  }

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="userDetails">
          <div className="nav">
            <ArrowLeftOutlined
              style={{ fontSize: "3rem", cursor: "pointer" }}
              onClick={handleClick}
            />
            {user.hirable ? (
              <Button
                type="primary"
                danger
                style={{ width: "10rem", height: "3rem", fontSize: "1.2rem" }}
              >
                Hire Me
              </Button>
            ) : (
              <div></div>
            )}
          </div>
          <div className="body">
            <div className="imageContainer">
              <img src={user.avatar} className="userImage" alt="user_img" />
            </div>
            <div className="bodyName">
              <h1>{user.name}</h1>
              <b>{user.email}</b>
            </div>
            <div className="follow">
              <div>
                <h2>{user.follower}</h2>
                <Tag
                  color="processing"
                  style={{
                    fontSize: "1rem",
                    padding: "5px 16px",
                    width: "8rem",
                    textAlign: "center",
                    border: "none",
                  }}
                >
                  Followers
                </Tag>
              </div>
              <div>
                <h2>{user.following}</h2>
                <Tag
                  color="processing"
                  style={{
                    fontSize: "1rem",
                    padding: "5px 16px",
                    width: "8rem",
                    textAlign: "center",
                    border: "none",
                  }}
                >
                  Following
                </Tag>
              </div>
              <div>
                <h2>{user.public_repo}</h2>
                <Tag
                  color="processing"
                  style={{
                    fontSize: "1rem",
                    padding: "5px 16px",
                    width: "8rem",
                    textAlign: "center",
                    border: "none",
                  }}
                >
                  Repositories
                </Tag>
              </div>
            </div>
            <div className="userinfoheader">
              <div className="userInfo">
                <div>
                  <div>
                    <div>
                      <MailOutlined /> Email
                    </div>
                    <b>{user.email}</b>
                  </div>
                  <div>
                    <div>
                      <EnvironmentOutlined /> Location
                    </div>
                    <b> {user.location}</b>
                  </div>
                  <div>
                    <div>
                      <TwitterOutlined /> Twitter
                    </div>
                    <b> {user.twitter}</b>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <TeamOutlined /> Organization
                    </div>
                    <b> {user.company}</b>
                  </div>
                  <div>
                    <div>
                      <CalendarOutlined /> Join Date
                    </div>
                    <b> {user.join_date}</b>
                  </div>
                  <div>
                    <div>
                      <GlobalOutlined /> Website
                    </div>
                    <b> {user.website}</b>
                  </div>
                </div>
              </div>
              <div className="userInfo1">
                <div className="bio_div">
                  <p>
                    <b>Bio</b>
                  </p>
                  <p>{user.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
