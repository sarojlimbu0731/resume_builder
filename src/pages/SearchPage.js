import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchUser } from "../redux/action/Searchaction";
import "./searchPage.css";
import { useDispatch } from "react-redux";
import { Button, Input, Space } from "antd";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchKey, setSearchkey] = useState("");

  let regex = /^.{3,}$/;

  const handleSubmit = async (e) => {
    if (regex.test(searchKey)) {
      e.preventDefault();
      dispatch(searchUser(searchKey));
      navigate("/userdetail");
    }
  };

  return (
    <div className="searchcontainer">
      <div className="header">
        <h1>Github Profile</h1>
        <h3>Generate your Github Profile</h3>
      </div>
      <div>
        <Space direction="horizontal">
          <Input
            size="large"
            status="warning"
            required
            onChange={(e) => setSearchkey(e.target.value)}
            placeholder="Github Username"
            style={{ width: 400, height: 50 }}
          />

          <Button
            danger
            type="primary"
            onClick={handleSubmit}
            style={{ width: 200, height: 50, fontSize: 18 }}
          >
            Generate
          </Button>
        </Space>
      </div>
    </div>
  );
};
