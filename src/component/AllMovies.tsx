import axios from "axios";
import React, { useEffect, useState } from "react";

interface Cinema{
    id:number,
    title:string,
    poster:string,
    year:string
}


export default function AllMovies() {
  const [movies, setMovies] = useState<Cinema[]>([]);
  useEffect(() => {
    axios.get<Cinema[]>("http://localhost:7007/movies").then((res) => {
      setMovies(res.data);
      //console.log(res.data[0].url);
    });
  },[]);
  return (
    <div className="card-deck">
        {movies.map(cinema=>(
            <div className="card">
            <img className="card-img-top" style={{width:300,
                height:300
            }} src={cinema.poster} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{cinema.title}</h5>
              <p className="card-text">
                {cinema.year}
                 </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        )

        )}
      
    </div>
  );
}
