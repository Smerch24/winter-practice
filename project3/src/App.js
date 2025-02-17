import React, { useState } from "react";
import "./App.css";
import copySound from "./src_notify.mp3";

const palettes = {
  American: ["#F39C12", "#E74C3C", "#8E44AD", "#2ECC71", "#3498DB"],
  Australian: ["#1ABC9C", "#16A085", "#2ECC71", "#27AE60", "#3498DB"],
  British: ["#2980B9", "#34495E", "#E67E22", "#D35400", "#C0392B"],
};

export default function FlatUIColors() {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const audio = new Audio(copySound);

  const copyToClipboard = (color) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        audio.play();
        alert(`Color ${color} copied to clipboard!`);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  if (selectedColor) {
    return (
      <div
        className="color-screen"
        style={{ backgroundColor: selectedColor }}
        onClick={() => setSelectedColor(null)}
      >
        <h1 className="color-text">{selectedColor}</h1>
      </div>
    );
  }

  if (selectedPalette) {
    return (
      <div className="palette-container">
        <button
          className="back-button"
          onClick={() => setSelectedPalette(null)}
        >
          Back
        </button>
        <div className="colors-grid">
          {palettes[selectedPalette].map((color) => (
            <div
              key={color}
              className="color-box"
              style={{ backgroundColor: color }}
              onClick={() => {
                setSelectedColor(color);
                copyToClipboard(color);
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="title">Flat UI Colors</h1>
      <div className="palettes-grid">
        {Object.keys(palettes).map((palette) => (
          <div
            key={palette}
            className="palette-box"
            onClick={() => setSelectedPalette(palette)}
          >
            <h2>{palette}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
