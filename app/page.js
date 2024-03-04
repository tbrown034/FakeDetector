"use client";
import { useState } from "react";
import MainMenu from "./Components/UI/MainMenu";
import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header";
import GameBoard from "./Components/UI/GameBoard";
import About from "./Components/UI/About"; // Assuming you have this

export default function Home() {
  // State to control which view to show
  const [currentView, setCurrentView] = useState("MainMenu");

  // Handlers to change the view
  const showMainMenu = () => setCurrentView("MainMenu");
  const showGameBoard = () => setCurrentView("GameBoard");
  const showAbout = () => setCurrentView("About");

  return (
    <main className="flex flex-col justify-between min-h-screen ">
      <Header showMainMenu={showMainMenu} />
      {/* Dynamically render components based on currentView state */}
      {currentView === "MainMenu" && (
        <MainMenu showGameBoard={showGameBoard} showAbout={showAbout} />
      )}
      {currentView === "GameBoard" && <GameBoard showMainMenu={showMainMenu} />}
      {currentView === "About" && <About showMainMenu={showMainMenu} />}
      <Footer />
    </main>
  );
}
