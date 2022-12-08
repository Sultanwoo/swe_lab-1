import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ForAdmin from "./components/ForAdmin";
import Login from "./components/Login"
import AdminHome from "./components/admin/AdminHome"
import AdminDoctor from "./components/admin/doctor/AdminDoctor"
import AdminDoctorCreate from "./components/admin/doctor/AdminDoctorCreate"
import AdminPatient from "./components/admin/patient/AdminPatient";
import AdminPatientCreate from "./components/admin/patient/AdminPatientCreate";
import Appointment from "./components/appointment/Appointment";
import AppointmentDoctor from "./components/appointment/AppointmentDoctor";
import BySpecilization from "./components/appointment/BySpecilization";
import PatientLogin from "./components/user/PatientLogin"
import DoctorLogin from "./components/doctor/DoctorLogin";
import DoctorHome from "./components/doctor/DoctorHome";
import PatientHome from "./components/user/PatientHome";
import PatientAppointments from "./components/user/PatientAppointments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/admin_access" element={<ForAdmin />}></Route>
        <Route exact path="/login" element={<Login />}></Route>

        <Route exact path="/admin" element={<AdminHome />}></Route>

        <Route exact path="/admin/doctors" element={<AdminDoctor />}></Route>
        <Route exact path="/admin/doctors/create" element={<AdminDoctorCreate />}></Route>
        <Route exact path="/admin/doctors/update/:id" element={<AdminDoctorCreate />}></Route>

        <Route exact path="/admin/patients" element={<AdminPatient />}></Route>
        <Route exact path="/admin/patients/create" element={<AdminPatientCreate />}></Route>
        <Route exact path="/admin/patients/update/:id" element={<AdminPatientCreate />}></Route>

        <Route exact path="/patients/login" element={<PatientLogin />}></Route>
        <Route exact path="/patients/:iin" element={<PatientHome />}></Route>
        <Route exact path="/patients/appointments/:iin" element={<PatientAppointments />}></Route>

        <Route exact path="/doctors/login" element={<DoctorLogin />}></Route>
        <Route exact path="/doctors/home" element={<DoctorHome />}></Route>

        <Route exact path="/appointment" element={<Appointment />}></Route>
        <Route exact path="/appointment/doctors/:id" element={<AppointmentDoctor />}></Route>
        <Route exact path="/appointment/spec/:spec_id" element={<BySpecilization />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
