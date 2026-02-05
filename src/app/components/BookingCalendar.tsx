'use client';

import { useEffect, useState } from 'react';

export default function BookingCalendar() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Load the script dynamically
        const script = document.createElement('script');
        script.src = 'https://link.msgsndr.com/js/form_embed.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    if (!mounted) {
        return (
            <div className="rounded-xl overflow-hidden min-h-[900px] flex items-center justify-center">
                <div className="text-foreground/40 text-sm">Cargando calendario...</div>
            </div>
        );
    }

    return (
        <div className="rounded-xl overflow-hidden">
            <iframe
                src="https://api.leadconnectorhq.com/widget/booking/hFdQ2N1tTnj5T11P4ZN0"
                style={{
                    width: '100%',
                    border: 'none',
                    overflow: 'hidden',
                    minHeight: '900px',
                    height: 'auto'
                }}
                scrolling="no"
                id="hFdQ2N1tTnj5T11P4ZN0_1770290217854"
            />
        </div>
    );
}
