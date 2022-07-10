import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div >
      <header>
        <h1 style={{ textAlign: 'center' }}>Testing i18next</h1>
      </header>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/invoices">Invoices</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
