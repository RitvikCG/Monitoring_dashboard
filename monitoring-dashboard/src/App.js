import React from 'react';
import Sidebar from './Components/Sidebar';
import "./App.css";

const App = () => {
  const data = [
    { sno: 1, name: "Job1", status: "Pass" },
    { sno: 2, name: "Job2", status: "Fail" },
    { sno: 3, name: "Job3", status: "Pass" },
  ];

  return (
    <div style={{height:"100vh",display:"flex",flexDirection:"row"}}>
      <Sidebar />
      <table className='logTable'>
        <thead>
          <tr className='logTableData'>
            <th className='logTableData'>S.no</th>
            <th className='logTableData'>Job Name</th>
            <th className='logTableData'>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key} className='logTableData'>
              <td className='logTableData'>{val.sno}</td>
              <td className='logTableData'>{val.name}</td>
              <td className='logTableData'>{val.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
