import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const [title, setTitle] = useState("enter title");
  const [poster, setPoster] = useState("");
  const [year, setYear] = useState("");

  const mgitNav = useNavigate();

  const handleSubmitt = (e: FormEvent) => {
    e.preventDefault();
    console.log("title--->" + title);
    console.log("poster--->" + poster);
    console.log("year--->" + year);
    const movie = { title, poster, year };
    axios
      .post("http://localhost:7007/movies", movie)
      .then((res) => console.log(res));
    mgitNav("/all");
  };

  const handleTitle = (e:any)=>{
    setTitle(e.target.value);
  }

  return (
    <div>
      <div>
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form onSubmit={handleSubmitt}>
                  <h3 className="text-center text-info">ADD Movie</h3>

                  <div className="form-group">
                    <label className="text-info">Movie Title:</label>
                    <input
                      type="text"
                      value={title}
                      onChange={handleTitle}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-info">Poster URL</label>
                    <input
                      type="text"
                      value={poster}
                      onChange={(e) => setPoster(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-info">Year</label>
                    <input
                      type="text"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-info"></label>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
