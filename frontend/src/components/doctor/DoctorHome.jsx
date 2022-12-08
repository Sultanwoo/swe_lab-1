import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReadOnlyRowPatientsTreatments from "./ReadOnlyRowPatientsTreatments";
import "../../App.css";

const DoctorHome = () => {
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");
    const [users, setUsers] = useState([]);
  
    const history = useNavigate();
  
    useEffect(() => {
      refreshToken();
      getUsers();
    }, []);
  
    const refreshToken = async () => {
      try {
        const response = await axios.get("http://localhost:5000/token");
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
  
        if (decoded.role !== "doctor") {
          history("/doctor_role");
        }
  
        setExpire(decoded.exp);
      } catch (error) {
        if (error.response) {
          history("/noauth");
        }
      }
    };
  
    const axiosJWT = axios.create();
  
    axiosJWT.interceptors.request.use(
      async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
          const response = await axios.get("http://localhost:5000/token");
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwt_decode(response.data.accessToken);
          setExpire(decoded.exp);
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  
    const logout = async (e) => {
      e.preventDefault();
      try {
        await axios.delete("http://localhost:5000/logout");
        history("/");
      } catch (error) {
        console.log(error);
      }
    }
  
    const getUsers = async () => {
      const response = await axiosJWT.get("http://localhost:5000/patientsTreatments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    };
  
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <h1 className="is-size-3 AdminText">Welcome Back Doctor</h1>
            <form className="mb-3">
                <div className="TableWrapper">
                    <div className="TableHead">
                        <p style={{ textAlign: "center", borderRight: "1px solid black" }}>Patients</p>
                        <p style={{ textAlign: "center", borderRight: "1px solid black" }}>Treatment</p>
                        <p style={{ textAlign: "center" }}>Treatment date</p>
                    </div>
                    <div className="TableBody">
                        {users.map((user, index) => (
                            <>{<ReadOnlyRowPatientsTreatments user={user} index={index} />}</>
                        ))}
                    </div>
                </div>
            </form>
            <a className="ml-5" href="/doctor/treatment">
                Assign Treatment
            </a>
            <button className="mt-1" style={{ float: "right" }} type="button" onClick={logout}>Logout</button>
        </div>
    );
  };
  

export default DoctorHome