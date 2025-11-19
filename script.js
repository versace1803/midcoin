// mid coin - minimal interactivity
// it's fine

document.addEventListener('DOMContentLoaded', () => {
    const coin = document.querySelector('.coin');

    // Coin hover effect - subtle
    coin.addEventListener('mouseenter', () => {
        coin.style.transform = 'scale(1.05) rotate(5deg)';
    });

    coin.addEventListener('mouseleave', () => {
        coin.style.transform = 'scale(1) rotate(0deg)';
    });

    // Random mid fact generator (optional)
    const midFacts = [
        'mid coin: perfectly average since 2024',
        'not too hot, not too cold. just mid.',
        'the coin that says "meh"',
        'mid coin: it exists',
        'average returns for average people'
    ];

    // Subtle animation on load
    const elements = document.querySelectorAll('.feature, .coin');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

