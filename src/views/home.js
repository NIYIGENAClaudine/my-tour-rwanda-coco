import React from "react";
import Nav from "../component/navbar";

import gorill from "../assets/images/gorilla.jpg";
import ima from "../assets/images/img.jpg";
import kiv from "../assets/images/kivu.jpg";
import "./Home.css";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Footer from "../component/footer";
import HomeLayout from "../component/HomeLayout";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

const Home=()=>{
  return (
    <>
  <div className="home-container">
  
  
    <div className="home-content">
      <h1 className="heading-title">Rwanda Booking Tour</h1>
      <div className="carousel-img">
      <Carousel autoplay>
        <img src={gorill} alt="gorilla"/>
        <img src={ima} alt="img"/>
        <img src={kiv} alt="kivu"/>
      </Carousel>

      <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
    <h3 className="toptour">Top Tours</h3>
    <hr className="align"></hr>
      </div>
    </div>
  
    </div>
    

    </>
  )
};
export default Home;