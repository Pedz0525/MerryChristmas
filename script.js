function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = '❄';
        snowflake.className = 'snowflake';
        snowflake.style.cssText = `
            position: absolute;
            color: white;
            opacity: ${Math.random()};
            font-size: ${Math.random() * 20 + 10}px;
            left: ${Math.random() * 100}%;
            animation: fall ${Math.random() * 5 + 5}s linear infinite;
            animation-delay: -${Math.random() * 5}s;
        `;

        const keyframes = `
            @keyframes fall {
                0% {
                    transform: translateY(-100vh) rotate(0deg);
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = keyframes;
        document.head.appendChild(styleSheet);

        snowflakesContainer.appendChild(snowflake);
    }
}

// Initialize snowflakes when the page loads
document.addEventListener('DOMContentLoaded', createSnowflakes);
