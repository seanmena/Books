import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Book from "./screens/Book";
// import Main from "./screens/Main";
import { UserAuthContextProvider } from "./components/UserAuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import Page from "./screens/Page";
import MyBooks from "./screens/MyBooks";
import LogOut from "./components/LogOut";
import NavBar from "./components/NavBar";

function App() {
  return (
    <UserAuthContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />

        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Book />
            </ProtectedRoute>
          }
        />
        <Route
          path="mybooks"
          element={
            <ProtectedRoute>
              <MyBooks />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
