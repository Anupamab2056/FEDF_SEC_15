import React, { useState } from "react";

function App() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [result, setResult] = useState([]);

  // Initialize matrices
  const initMatrices = () => {
    const emptyA = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    );
    const emptyB = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    );
    setMatrixA(emptyA);
    setMatrixB(emptyB);
    setResult([]);
  };

  // Handle input change
  const handleChange = (matrixSetter, r, c, value) => {
    matrixSetter((prev) => {
      const copy = prev.map((row) => [...row]);
      copy[r][c] = parseInt(value) || 0;
      return copy;
    });
  };

  // Calculate sum
  const calculateSum = () => {
    const res = matrixA.map((row, i) =>
      row.map((val, j) => val + matrixB[i][j])
    );
    setResult(res);
  };

  // Render a matrix
  const renderMatrix = (matrix, setMatrix) => (
    <table>
      <tbody>
        {matrix.map((row, r) => (
          <tr key={r}>
            {row.map((val, c) => (
              <td key={c}>
                <input
                  type="number"
                  value={val}
                  onChange={(e) => handleChange(setMatrix, r, c, e.target.value)}
                  style={{ width: "50px", textAlign: "center" }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Matrix Sum Calculator</h2>

      <label>
        Rows:{" "}
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value) || 0)}
        />
      </label>
      <label style={{ marginLeft: "10px" }}>
        Columns:{" "}
        <input
          type="number"
          value={cols}
          onChange={(e) => setCols(parseInt(e.target.value) || 0)}
        />
      </label>
      <button onClick={initMatrices} style={{ marginLeft: "10px" }}>
        Set Matrices
      </button>

      {matrixA.length > 0 && (
        <>
          <h3>Matrix A</h3>
          {renderMatrix(matrixA, setMatrixA)}

          <h3>Matrix B</h3>
          {renderMatrix(matrixB, setMatrixB)}

          <button onClick={calculateSum} style={{ marginTop: "10px" }}>
            Calculate Sum
          </button>
        </>
      )}

      {result.length > 0 && (
        <>
          <h3>Result Matrix</h3>
          <table>
            <tbody>
              {result.map((row, r) => (
                <tr key={r}>
                  {row.map((val, c) => (
                    <td key={c}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
