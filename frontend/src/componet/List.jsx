import React, { useEffect, useState } from 'react';
import axios from "axios";

function Table() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);

  return (
    <div id="blood-donor-list" className="overflow-x-auto bg-neutral text-white">
      <table  className="table">
        {/* Table Head */}
        <thead>
          <tr className="bg-cyan-500 text-white">
            <th>S.no</th>
            <th>Donation Name</th>
            <th>Blood Group</th>
            <th>District</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={joke.id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{joke.title}</div>
                  </div>
                </div>
              </td>
              <td>{joke.content}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{joke.District}</div>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
