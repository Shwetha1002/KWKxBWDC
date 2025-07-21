<script>
    import TitleCard from '../lib/TitleCard.svelte';
    import { onMount } from 'svelte';

    let cardRef;
    let contentElement;

    function checkIfCentered() {
        if (!cardRef) return;
        
        // Get the content element if we haven't already
        if (!contentElement) {
            contentElement = cardRef.querySelector('.content');
            if (!contentElement) return;
        }

        const rect = contentElement.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        // Smooth scaling based on distance from center
        const scale = Math.min(1.2, 1 + (0.2 * (1 - distance/100)));
        contentElement.style.transform = `scale(${scale})`;
    }

    onMount(() => {
        window.addEventListener('scroll', checkIfCentered);
        // Initial check
        setTimeout(checkIfCentered, 100);
        return () => window.removeEventListener('scroll', checkIfCentered);
    });
</script>

<TitleCard 
    bindRef={cardRef}
    intro="Welcome to my"
    title="KWKxBWDC"
    subtitle="Data Analysis!"
/>
