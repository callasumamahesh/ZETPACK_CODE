import React, { useState } from 'react';
import './project.css'


const Project = () => {
  const [tableData, setTableData] = useState([]);

  const addNewRow = () => {
    const newRow = {
      sl: tableData.length + 1,
      companyName: 'New Company',

      invoiceNo: 'New Invoice',
      date: 'New Date',
      invoice:'',
      LRreceipt:'',
      phone:'',
    };
    setTableData([...tableData, newRow]);
  };
  return (
    <div>
      <section>
        <header>
          <h2 id="all">All Invoice</h2>
          <button id="view">View All</button>
        </header>
        <div id="table-container">
          <table id="mytable">
            <thead>
              <tr>
                <th>Sl</th>
                <th>Company Name</th>
                <th>Invoice No</th>
                <th>Date</th>
                <th>Send Invoice</th>
                <th>LR receipt</th>
                <th>xxxxxxx</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.sl}</td>
                  <td>{row.companyName}</td>
                  <td>{row.invoiceNo}</td>
                  <td>{row.date}</td>
                  <td>{row.invoice}</td>
                  <td>{row.LRreceipt}</td>
                  <td>{row.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button id="button" onClick={addNewRow}>
          Add New Row
        </button>
      </section>
    </div>
  );
};

export default Project;
