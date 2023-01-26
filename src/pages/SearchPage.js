import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchUser } from "../redux/action/Searchaction";
import './searchPage.css'
import { useDispatch,useSelector } from "react-redux";
import { Button, Input, Space } from "antd";


export const SearchPage = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const[searchKey,setSearchkey]=useState("")
    
    const handleSubmit=async(e)=>{
       if(searchKey !==""){
        e.preventDefault()
        dispatch(searchUser(searchKey))
       }
    }
    const loading=useSelector(state=>state.user.loading)
    if(loading){
        navigate('/userdetail')
    }
    

  return (
    <div className="searchcontainer">
    

      <Space direction="horizontal">
        <Input
          size="large"
          status="warning"
          required
          onChange={e=>setSearchkey(e.target.value)}
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
  );
};

