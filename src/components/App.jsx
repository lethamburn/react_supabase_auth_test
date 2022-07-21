import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Signup } from "./Signup";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { AuthProvider } from "../contexts/Auth";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <div>
      <h1>supabase-auth-react</h1>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
