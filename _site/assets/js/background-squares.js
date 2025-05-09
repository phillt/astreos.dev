document.addEventListener('DOMContentLoaded', () => {
    // Get NodeList
    const squaresNodeList = document.querySelectorAll('.bg-square');
    // Convert NodeList to Array for easier iteration if needed, but not strictly necessary
    const squares = Array.from(squaresNodeList);
    const threshold = 250; // Increased reach (was 150)
    const pullFactor = 0.35; // How much to pull squares towards mouse
    const initialStyles = new Map();
    const animationDuration = 4; // Match CSS animation duration in seconds
    const minOpacity = 0.02; // Minimum background alpha for calculations
    const maxOpacity = 0.40; // Increased max opacity (was 0.25)

    // Store initial computed styles & apply random animation delay
    squares.forEach(square => {
        // Check if it's an HTMLElement before accessing style
        if (square instanceof HTMLElement) {
            const computed = getComputedStyle(square);
            initialStyles.set(square, {
                transform: computed.transform,
                width: computed.width,
                height: computed.height,
                backgroundColor: computed.backgroundColor
            });
            // Ensure transform style exists for transitions
            if (computed.transform === 'none') {
                square.style.transform = 'rotate(0deg)';
                const initial = initialStyles.get(square);
                if (initial) initial.transform = 'rotate(0deg)';
            }
            // Apply random negative delay to stagger shimmer
            square.style.animationDelay = `-${Math.random() * animationDuration}s`;
        }
    });

    // Simple throttle function
    function throttle(func, limit) {
        let inThrottle;
        return function(event) {
            if (!inThrottle) {
                func(event);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    function handleMouseMove(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        squares.forEach(square => {
             // Check if it's an HTMLElement before accessing style/methods
            if (square instanceof HTMLElement) {
                const rect = square.getBoundingClientRect();
                const squareX = rect.left + rect.width / 2;
                const squareY = rect.top + rect.height / 2;
                const distance = Math.sqrt(Math.pow(mouseX - squareX, 2) + Math.pow(mouseY - squareY, 2));
                const initial = initialStyles.get(square);

                if (!initial) return; // Skip if initial styles not stored

                if (distance < threshold) {
                    square.classList.add('bg-square--ordered');

                    // Calculate opacity based on distance (linear interpolation)
                    // Clamp distance between 0 and threshold for calculation
                    const clampedDistance = Math.max(0, Math.min(distance, threshold));
                    // Closer distance = higher opacity (closer to maxOpacity)
                    const proximityOpacity = maxOpacity - (clampedDistance / threshold) * (maxOpacity - minOpacity);
                    square.style.setProperty('--sq-opacity', proximityOpacity.toFixed(3));

                    // Calculate pull transform
                    const dx = mouseX - squareX;
                    const dy = mouseY - squareY;
                    const pullX = dx * pullFactor;
                    const pullY = dy * pullFactor;
                    square.style.transform = `translate(${pullX}px, ${pullY}px) rotate(0deg)`;

                } else {
                    square.classList.remove('bg-square--ordered');
                    square.style.transform = initial.transform;
                    // Remove the JS-set opacity, revert to initial inline style value
                    square.style.removeProperty('--sq-opacity');
                }
            }
        });
    }

    // Attach throttled listener
    window.addEventListener('mousemove', throttle(handleMouseMove, 50)); // Update every 50ms

    // --- Background Fade Logic --- //
    const hero = document.querySelector('.hero');
    const backgroundContainer = document.querySelector('.background-squares');

    // Define start and end colors (RGB)
    const startColor = { r: 17, g: 24, b: 39 }; // #111827
    const endColor = { r: 0, g: 0, b: 0 }; // #000000

    let ticking = false;
    // Ensure hero is HTMLElement before getting offsetHeight
    let heroHeight = (hero instanceof HTMLElement) ? hero.offsetHeight : 0;

    function updateBackgroundColor() {
        if (!(hero instanceof HTMLElement) || !(backgroundContainer instanceof HTMLElement)) return;

        const scrollY = window.scrollY;
        // Calculate progress (0 to 1) within the hero section
        const currentHeroHeight = hero.offsetHeight; // Get current height in case it changes
        const progress = Math.min(1, Math.max(0, scrollY / (currentHeroHeight - 50)));

        // Interpolate RGB values
        const r = Math.round(startColor.r + (endColor.r - startColor.r) * progress);
        const g = Math.round(startColor.g + (endColor.g - startColor.g) * progress);
        const b = Math.round(startColor.b + (endColor.b - startColor.b) * progress);

        // Apply the style
        backgroundContainer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateBackgroundColor);
            ticking = true;
        }
    }

    function onResize() {
        // Recalculate height on resize
        heroHeight = (hero instanceof HTMLElement) ? hero.offsetHeight : 0;
        onScroll();
    }

    // Initial calculation
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
}); 