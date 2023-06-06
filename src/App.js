import { MainPage } from "./pages/MainPage";
import { CocktailPage } from "./pages/CocktailPage";
import { CategoryPage } from "./pages/CategoryPage";
import { Routes, Route, Link, BrowserRouter, useLocation, Navigate } from 'react-router-dom'
import { MainHeader } from "./components/Header/MainHeader";
import { NamePage } from "./pages/NamePage";

function App() {
  return (
    <>
        <AppContent />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {(pathname != '/main') ? 
        <MainHeader/> 
        : null}

      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/cocktail/:id" element={<CocktailPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/name/:category" element={<NamePage />} />
        <Route path="*" element={<Navigate to="/main" replace/>} />
      </Routes>
    </>
  );
}

export default App;