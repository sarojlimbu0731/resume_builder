import React, { useState } from "react";
import './searchPage.css'

import { Button, Input, Space } from "antd";

export const SearchPage = () => {
    const[searchKey,setSearchkey]=useState("")
    
    const handleSubmit=e=>{
       if(searchKey !==""){
        e.preventDefault()
        console.log("button clicked")
       }
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

