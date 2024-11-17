import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const data = [
    {
      instrumentSymbol: "AAPL",
      instrumentName: "Apple Inc.",
      eventDescription: "Quarterly Earnings Report",
      eventDate: "2024-11-25",
      eventPublishDate: "2024-11-17",
      roe: 0,
      roce: 1,
      debtToEquity: 1,
      epsGrowth: 0,
    },
    {
      instrumentSymbol: "TSLA",
      instrumentName: "Tesla Inc.",
      eventDescription: "Annual Shareholder Meeting",
      eventDate: "2024-12-10",
      eventPublishDate: "2024-11-20",
      roe: 1,
      roce: 0,
      debtToEquity: 0,
      epsGrowth: 1,
    },
    {
      instrumentSymbol: "MSFT",
      instrumentName: "Microsoft Corp.",
      eventDescription: "New Product Launch",
      eventDate: "2024-12-01",
      eventPublishDate: "2024-11-15",
      roe: 0,
      roce: 1,
      debtToEquity: 0,
      epsGrowth: 1,
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white text-center py-3">
        <h1>RK Research And Analytics</h1>
      </header>

      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Home
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <table className="table table-bordered table-striped mt-3">
          <thead className="thead-light">
            <tr>
              <th scope="col">Instrument Symbol</th>
              <th scope="col">Instrument Name</th>
              <th scope="col">Event Description</th>
              <th scope="col">Event Date</th>
              <th scope="col">Event Publish Date</th>
              <th scope="col">ROE</th>
              <th scope="col">ROCE</th>
              <th scope="col">Debt To Equity</th>
              <th scope="col">EPS Growth</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.instrumentSymbol}</td>
                <td>{row.instrumentName}</td>
                <td>{row.eventDescription}</td>
                <td>{row.eventDate}</td>
                <td>{row.eventPublishDate}</td>
                <td>
                  {row.roe === 0 ? (
                    <input checked type="checkbox" style={{ accentColor: "red" }} />
                  ) : (
                    <input checked type="checkbox" style={{ accentColor: "green" }} />
                  )}
                </td>
                <td>
                  {row.roce === 0 ? (
                    <input checked type="checkbox" style={{ accentColor: "red" }} />
                  ) : (
                    <input checked type="checkbox" style={{ accentColor: "green" }} />
                  )}
                </td>
                <td>
                  {row.debtToEquity === 0 ? (
                    <input checked type="checkbox" style={{ accentColor: "red" }} />
                  ) : (
                    <input checked type="checkbox" style={{ accentColor: "green" }} />
                  )}
                </td>
                <td>
                  {row.epsGrowth === 0 ? (
                    <input checked type="checkbox" style={{ accentColor: "red" }} />
                  ) : (
                    <input checked type="checkbox" style={{ accentColor: "green" }} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
