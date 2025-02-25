import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes"; // Importando as rotas

// Componente principal da aplicação
function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <AppRoutes /> {/* Aqui utilizamos o componente que gerencia as rotas */}
      </main>
      <Footer />
    </div>
  );
}

export default App;