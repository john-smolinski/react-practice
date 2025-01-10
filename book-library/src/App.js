import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { BooksProvider } from "./context/BooksProvider";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import NotFount from "./components/NotFound";
import SecretBookList from "./components/SecretBookList";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route
            path="/secret"
            element={<PrivateRoute Component={<SecretBookList />} />}
          />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
