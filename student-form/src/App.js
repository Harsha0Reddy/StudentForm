import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentForm() {
  const [studentData, setStudentData] = useState({
    name: "",
    dob: "",
    class: "",
    rollNumber: "",
    fatherName: "",
    phone: "",
    profilePicture: null,
    signature: null,
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,                      // student data change
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setStudentData({                              // student file change (pic and signature pic)
      ...studentData,
      [e.target.name]: e.target.files[0],
    });
  };
  const handleDeleteImage = (type) => {
    setStudentData({
      ...studentData,                            // deleting the preview pics
      [type]: null, 
    });
  };

  const handleSubmit = (e) => {                 // these is for submiting the data
    e.preventDefault();
    console.log("submitted data=>", studentData);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4 className="text-center">Student Details</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
              Student Name
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={studentData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
               Date of Birth
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  value={studentData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
              Class
                <input
                  type="text"
                  className="form-control"
                  id="class"
                  name="class"
                  value={studentData.class}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
       Roll Number
                <input
                  type="text"
                  className="form-control"
                  id="rollNumber"
                  name="rollNumber"
                  value={studentData.rollNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
    
              <div className="col-md-6 mb-3">
   Father Name
                <input
                  type="text"
                  className="form-control"
                  id="fatherName"
                  name="fatherName"
                  value={studentData.fatherName}
                  onChange={handleChange}
                  required
                />
              </div>

              
              <div className="col-md-6 mb-3">
             Phone Number
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={studentData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

          
            <div className="mb-3">
              Profile Picture
              <input
                type="file"
                className="form-control"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </div>

          
            <div className="mb-3">
         Signature
              <input
                type="file"
                className="form-control"
                id="signature"
                name="signature"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </div>

            
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>

      <div className="mt-4">
        <h3>Preview</h3>
        <p><strong>Name:</strong> {studentData.name}</p>
        <p><strong>Date of Birth:</strong> {studentData.dob}</p>
        <p><strong>Class:</strong> {studentData.class}</p>
        <p><strong>Roll Number:</strong> {studentData.rollNumber}</p>
        <p><strong>Father Name:</strong> {studentData.fatherName}</p>
        <p><strong>Phone Number:</strong> {studentData.phone}</p>

        {studentData.profilePicture && (
          <div>
            <h4>Profile Picture Preview:</h4>
            <img
              src={URL.createObjectURL(studentData.profilePicture)}
              alt="Profile Preview"
              width="120"
            />
            <br />
            <button
              type="button"
              className="btn btn-danger mt-2"
              onClick={() => handleDeleteImage("profilePicture")}
            >
              Delete Profile Picture
            </button>
          </div>
        )}
        {studentData.signature && (
          <div>
            <h4>Signature Preview:</h4>
            <img
              src={URL.createObjectURL(studentData.signature)}
              alt="Signature Preview"
              width="120"
            />
            <br />
            <button
              type="button"
              className="btn btn-danger mt-2"
              onClick={() => handleDeleteImage("signature")}
            >
              Delete Signature
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentForm;
