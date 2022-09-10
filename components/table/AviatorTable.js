import React from "react";
import styles from "../../styles/table/AviatorTable.module.css";
const AviatorTable = () => {
  return (
    <div className={`mt-5 mb-5 `}>
      <div className="row">
        <div className="col-12">
          <div className={styles.tableContainer}>
            <div class="table-responsive">
              <table className="table  table-dark text-center">
                <thead>
                  <tr className="table-dark rounded-3">
                    <th scope="col">User</th>
                    <th scope="col">Bet</th>
                    <th scope="col">Mult</th>
                    <th scope="col">Cash Out</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Mark</th>
                    <td>100$</td>
                    <td>1.5</td>
                    <td>120$</td>
                  </tr>
                  <tr>
                    <th scope="row">David</th>
                    <td>50$</td>
                    <td>1.5</td>
                    <td>90$</td>
                  </tr>
                  <tr>
                    <th scope="row">Anoop</th>
                    <td>58$</td>
                    <td>1.7</td>
                    <td>75$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviatorTable;
