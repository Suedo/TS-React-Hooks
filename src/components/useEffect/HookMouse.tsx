import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e: MouseEvent) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('UseEffect: Updating Mouse Co-ords');
    window.addEventListener('mousemove', logMousePosition)    
  }, []) // doesnt depend on any other prop/state, so dont call on re-render
  // thus, useEffect is only called once, and the mouse handler attached.

  return (
    <div>
      Hooks: x - {x}, Y - {y}
    </div>
  )
}

export default HookMouse