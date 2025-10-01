'use client'

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Code snippets to display
    const codeSnippets = [
      'const', 'let', 'var', 'function', 'return', 'if', 'else',
      '=>', '{}', '[]', '()', '<>', '/>', 'import', 'export',
      'class', 'async', 'await', 'try', 'catch', 'new', 'this',
      '===', '!==', '&&', '||', 'map', 'filter', 'reduce',
      'useState', 'useEffect', 'props', 'state', 'render'
    ];

    // Create text sprites
    const textMeshes = [];

    for (let i = 0; i < 50; i++) {
      const code = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      
      // Create a new canvas for each sprite
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 128;
      
      // Style text
      context.font = 'bold 40px monospace';
      const r = 100 + Math.random() * 100;
      const g = 150 + Math.random() * 100;
      const b = 200 + Math.random() * 55;
      context.fillStyle = `rgb(${r}, ${g}, ${b})`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(code, canvas.width / 2, canvas.height / 2);
      
      // Create texture from canvas
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      
      // Create sprite material
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });
      
      const sprite = new THREE.Sprite(material);
      
      // Random position
      sprite.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      );
      
      // Random scale
      const scale = Math.random() * 1.5 + 0.5;
      sprite.scale.set(scale * 3, scale * 1.5, 1);
      
      // Store velocity for animation
      sprite.userData.velocity = {
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.05,
        rotation: (Math.random() - 0.5) * 0.02
      };
      
      textMeshes.push(sprite);
      scene.add(sprite);
    }

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Animate code snippets
      textMeshes.forEach((sprite) => {
        // Move sprite
        sprite.position.x += sprite.userData.velocity.x;
        sprite.position.y += sprite.userData.velocity.y;
        sprite.position.z += sprite.userData.velocity.z;
        
        // Wrap around edges
        if (Math.abs(sprite.position.x) > 50) sprite.position.x *= -0.95;
        if (Math.abs(sprite.position.y) > 50) sprite.position.y *= -0.95;
        if (Math.abs(sprite.position.z) > 50) sprite.position.z *= -0.95;
        
        // Subtle rotation effect
        sprite.material.rotation += sprite.userData.velocity.rotation;
      });

      // Mouse interaction
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      textMeshes.forEach((sprite) => {
        sprite.material.map.dispose();
        sprite.material.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
}

