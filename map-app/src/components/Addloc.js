import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function LocationForm() {
    const [name, setName] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [submitted, setSubmitted] = useState(false); // State to track form submission

    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            await axios.post('http://127.0.0.1:8000/location/', {
                name: name,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude)
            });
            // Handle success, maybe show a success message or redirect
            setSubmitted(true); // Set submitted to true after successful submission
        } catch (error) {
            // Handle error, show an error message
        }
    };

    // If form is submitted successfully, navigate to the home page
    if (submitted) {
        return <Navigate to="/" />;
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}> {/* Centering the form both horizontally and vertically */}
            <h1 className="mb-4">Add Location</h1>
            <form onSubmit={handleSubmit} className="col-sm-8" style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px" }}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-4 col-form-label text-end">Name</label>
                    <div className="col-sm-5">
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="latitude" className="col-sm-4 col-form-label text-end">Latitude</label>
                    <div className="col-sm-5">
                        <input type="text" className="form-control" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder="Enter latitude" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="longitude" className="col-sm-4 col-form-label text-end">Longitude</label>
                    <div className="col-sm-5">
                        <input type="text" className="form-control" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder="Enter longitude" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 offset-sm-5"> {/* Offset the button to align with input fields */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LocationForm;    