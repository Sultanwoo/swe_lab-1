import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

export const Users = db.define(
    "users",
    {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        refresh_token: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
    },
    {
        freezeTableName: true,
    }
);

export const Doctors = db.define(
    "doctors",
    {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        iin: {
            type: DataTypes.BIGINT,
            validate: {
                len: [12],
            },
            allowNull: false,
        },
        contact_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dep_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spec_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        exp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

export const Patients = db.define(
    "patients",
    {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        iin: {
            type: DataTypes.BIGINT,
            validate: {
                len: [12],
            },
            allowNull: false,
        },
        contact_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emer_contact_number: {
            type: DataTypes.STRING,
        },
        blood_group: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marital_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

export const PatientsTreatments = db.define(
    "patientsTreatments",
    {
        doctor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        iin: {
            type: DataTypes.BIGINT,
            validate: {
                len: [12],
            },
            allowNull: false,
        },
        treatment_date: {
            type: DataTypes.DATE,
            allownull: true,
        },
        treatment: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        freezeTableName: true,
    }
);

export const DoctorSchedule = db.define(
    "doctorSchedule",
    {
        doc_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        patient_iin: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        first: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        second: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        third: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        fourth: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        fivth: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        sixth: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        seventh: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        eighth: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
})();
