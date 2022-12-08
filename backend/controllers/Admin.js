import { Doctors, Patients, Users, PatientsTreatments, } from "../models/UserModel.js";

//User functions
export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ["id", "password", "role", "full_name"],
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};

//Doctor functions
export const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctors.findAll();
        res.json(doctors);
    } catch (error) {
        console.log(error);
    }
};

export const getDoctor = async (req, res) => {
    try {
        const doctor = await Doctors.findOne({ where: { id: req.params.id } });
        res.json(doctor);
    } catch (error) {
        console.log(error);
    }
};

export const addDoctor = async (req, res) => {
    try {
        const newDoctor = await Doctors.create({
            full_name: req.body.full_name,
            birth_date: req.body.birth_date,
            iin: req.body.iin,
            contact_number: req.body.contact_number,
            dep_id: req.body.dep_id,
            spec_id: req.body.spec_id,
            exp: req.body.exp,
            img: req.body.img,
            category: req.body.category,
            price: req.body.price,
            degree: req.body.degree,
            rating: req.body.rating,
            address: req.body.address,
            password: req.body.password,
        });
        res.json(newDoctor);
    } catch (error) {
        res.status(404).json({ error });
    }
};

export const updateDoctor = async (req, res) => {
    try {
        await Doctors.update(
            {
                full_name: req.body.full_name,
                birth_date: req.body.birth_date,
                iin: req.body.iin,
                contact_number: req.body.contact_number,
                dep_id: req.body.dep_id,
                spec_id: req.body.spec_id,
                exp: req.body.exp,
                img: req.body.img,
                category: req.body.category,
                price: req.body.price,
                degree: req.body.degree,
                rating: req.body.rating,
                address: req.body.address,
                password: req.body.password,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
    } catch (error) {
        res.status(404).json({ msg: "Cannot update doctor" });
    }
};

export const deleteDoctor = async (req, res) => {
    try {
        await Doctors.destroy({
            where: {
                id: req.params.id,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: "Cannot delete user" });
    }
};

//Patient functions
export const getPatients = async (req, res) => {
    try {
        const patients = await Patients.findAll();
        res.json(patients);
    } catch (error) {
        console.log(error);
    }
};

export const getPatientsTreatments = async (req, res) => {
    try {
        const patientsTreatments = await PatientsTreatments.findAll();
        res.json(patientsTreatments);
    } catch (error) {
        console.log(error);
    }
};

export const getPatient = async (req, res) => {
    try {
        const patient = await Patients.findOne({
            where: { id: req.params.id },
        });
        res.json(patient);
    } catch (error) {
        console.log(error);
    }
};

export const addPatient = async (req, res) => {
    try {
        const newPatient = await Patients.create({
            full_name: req.body.full_name,
            birth_date: req.body.birth_date,
            iin: req.body.iin,
            contact_number: req.body.contact_number,
            emer_contact_number: req.body.emer_contact_number,
            blood_group: req.body.blood_group,
            marital_status: req.body.marital_status,
            address: req.body.address,
            password: req.body.password,
        });
        res.json(newPatient);
    } catch (error) {
        res.status(404).json({ error });
    }
};

export const updatePatient = async (req, res) => {
    try {
        await Patients.update(
            {
                full_name: req.body.full_name,
                birth_date: req.body.birth_date,
                iin: req.body.iin,
                contact_number: req.body.contact_number,
                emer_contact_number: req.body.emer_contact_number,
                blood_group: req.body.blood_group,
                marital_status: req.body.marital_status,
                address: req.body.address,
                password: req.body.password,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
    } catch (error) {
        res.status(404).json({ msg: "Cannot update patient" });
    }
};

export const deletePatient = async (req, res) => {
    try {
        await Patients.destroy({
            where: {
                id: req.params.id,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: "Cannot delete patient" });
    }
};
