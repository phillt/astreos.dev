document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.bg-square');
    const threshold = 150; // Proximity distance in pixels
    const pullFactor = 0.35; // How much to pull squares towards mouse (INCREASED from 0.15)
    const initialStyles = new Map();

    // Simple throttle function
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    function handleMouseMove(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        squares.forEach(square => {
            const rect = square.getBoundingClientRect();
            // Calculate center of the square
            const squareX = rect.left + rect.width / 2;
            const squareY = rect.top + rect.height / 2;

            // Calculate distance
            const distance = Math.sqrt(Math.pow(mouseX - squareX, 2) + Math.pow(mouseY - squareY, 2));

            // Toggle class based on distance
            if (distance < threshold) {
                square.classList.add('bg-square--ordered');
            } else {
                square.classList.remove('bg-square--ordered');
            }
        });
    }

    // Attach throttled listener
    window.addEventListener('mousemove', throttle(handleMouseMove, 100)); // Update every 100ms
}); 