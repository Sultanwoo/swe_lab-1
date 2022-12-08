import express from "express";
import {
    Login,
    Logout,
    getDoctorsForPatients,
    getDoctorForPatient,
    setDoctorForPatient,
    getDoctorSchedule,
    getDoctorsBySpec,
    PatientLogin,
    PatientLogout,
    DoctorLogin,
    DoctorLogout,
    GetPatientInfo,
    GetPatientAppointments,
} from "../controllers/Users.js";
import {
    getUsers,
    getDoctors,
    getDoctor,
    updateDoctor,
    addDoctor,
    deleteDoctor,
    getPatients,
    getPatient,
    addPatient,
    updatePatient,
    deletePatient,
    getPatientsTreatments,
} from "../controllers/Admin.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { verifyAdmin } from "../middleware/VerifyAdmin.js";
import { verifyUser } from "../middleware/VerifyUser.js";

const router = express.Router();

//admin auth routes
router.post("/login", Login);
router.delete("/logout", Logout);
router.get("/token", refreshToken);

//admin routes
router.get("/users", verifyAdmin, getUsers);

//admin doctor routes
router.get("/doctors", verifyAdmin, getDoctors);
router.get("/doctors/:id", verifyAdmin, getDoctor);
router.post("/doctors", verifyAdmin, addDoctor);
router.put("/doctors/update/:id", verifyAdmin, updateDoctor);
router.delete("/doctors/:id", verifyAdmin, deleteDoctor);

//admin patient routes
router.get("/patients", verifyAdmin, getPatients);
router.get("/patients/:id", verifyAdmin, getPatient);
router.post("/patients", verifyAdmin, addPatient);
router.put("/patients/update/:id", verifyAdmin, updatePatient);
router.delete("/patients/:id", verifyAdmin, deletePatient);

//patient routes
router.post("/patients/login", PatientLogin);
router.delete("/patients/account/logout", PatientLogout);
router.get("/patients/info/:iin", verifyUser, GetPatientInfo);
router.get("/patients/appointments/:iin", verifyUser, GetPatientAppointments);

//patient appointmnet routes
router.get("/appointment/doctors", getDoctorsForPatients);
router.get("/appointment/doctors/:id", getDoctorForPatient);
router.post("/appointment/doctors/:id", setDoctorForPatient);
router.get("/appointment/doctors/schedule/:id", getDoctorSchedule);
router.get("/appointment/doctors/spec/:spec_id", getDoctorsBySpec);

//doctor routes
router.post("/doctors/login", DoctorLogin);
router.delete("/doctors/logout", DoctorLogout);
router.get("/patientsTreatments", getPatientsTreatments);

export default router;
