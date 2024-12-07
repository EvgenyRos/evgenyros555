document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    const x = (e.clientX / window.innerWidth - 0.5) * 50; // Увеличьте значение для более сильного эффекта
    const y = (e.clientY / window.innerHeight - 0.5) * 50;


    layers.forEach(layer => {
        const depth = layer.dataset.depth || 0;
        const moveX = x * depth;
        const moveY = y * depth;
        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        function handleParallax(event) {
            const layers = document.querySelectorAll(".parallax-layer");
        
            layers.forEach((layer) => {
                const depth = layer.getAttribute("data-depth");
                const moveX = (event.pageX - window.innerWidth / 2) * depth * 0.25;
                const moveY = (event.pageY - window.innerHeight / 2) * depth * 0.25;
        
                layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
            function handleParallax(event) {
                const layers = document.querySelectorAll(".parallax-layer");
            
                layers.forEach((layer) => {
                    const depth = layer.getAttribute("data-depth");
                    const moveX = (event.pageX - window.innerWidth / 2) * depth * 0.50;
                    const moveY = (event.pageY - window.innerHeight / 2) * depth * 0.50;
            
                    layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                });
                function handleParallax(event) {
                    const layers = document.querySelectorAll(".parallax-layer");
                
                    layers.forEach((layer) => {
                        const depth = layer.getAttribute("data-depth");
                        const moveX = (event.pageX - window.innerWidth / 2) * depth * 0.90;
                        const moveY = (event.pageY - window.innerHeight / 2) * depth * 0.90;
                
                        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                    });
                    
                }
            }

        }
    });
});
const layers = document.querySelectorAll('.parallax-layer');

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            const { beta, gamma } = event; // Отримуємо нахили по вертикалі і горизонталі
            const tiltX = gamma / 45; // Нормалізація значень (-45 до 45 градусів)
            const tiltY = beta / 45;

            layers.forEach(layer => {
                const depth = layer.dataset.depth;
                const offsetX = tiltX * depth * 50; // Розрахунок зсуву
                const offsetY = tiltY * depth * 50;

                layer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        });
    } else {
        console.warn('DeviceOrientation не підтримується на цьому пристрої');
    }
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", (event) => {
            const tiltX = event.beta;  // Кут нахилу по X
            const tiltY = event.gamma; // Кут нахилу по Y

            document.querySelectorAll(".parallax-layer").forEach((layer) => {
                const depth = parseFloat(layer.dataset.depth);
                const xOffset = tiltY * depth;
                const yOffset = tiltX * depth;

                layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });
    }
    if (window.innerWidth < 480) {
        document.querySelectorAll(".parallax-layer").forEach((layer) => {
            layer.style.transform = "none";
        });
    }
    
              
          
      
  
