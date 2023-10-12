import React, { useState, useEffect } from "react";

const LunaComponent: React.FC = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvasElement = document.querySelector("#luna") as HTMLCanvasElement;
    if (canvasElement) {
      setCanvas(canvasElement);
      const context = canvasElement.getContext("2d");
      if (context) {
        setCtx(context);
      }
    }
  }, []);

  useEffect(() => {
    if (!canvas || !ctx) {
      return;
    }

    // Resto del código de dibujo de la luna y los cráteres...
     // Dibuja la luna
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  // Dibuja las sombras
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 90, 0, 2 * Math.PI);
  ctx.fillStyle = "#000000";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, 2 * Math.PI);
  ctx.fillStyle = "#222222";
  ctx.fill();

  // Dibuja los cráteres
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 20;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.fill();
  }

  }, [canvas, ctx]);

  return <canvas id="luna" width={200} height={200} style={{ background: "" }}></canvas>;
};

export default LunaComponent;

