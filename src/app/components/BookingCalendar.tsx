'use client';

import { useEffect, useState, useRef } from 'react';

export default function BookingCalendar() {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [iframeHeight, setIframeHeight] = useState(900);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        // Check if script already exists and is loaded
        const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
        if (existingScript) {
            setScriptLoaded(true);
            return;
        }

        // Load the script dynamically
        const script = document.createElement('script');
        script.src = 'https://link.msgsndr.com/js/form_embed.js';
        script.type = 'text/javascript';
        script.async = true;

        script.onload = () => {
            setScriptLoaded(true);
        };

        script.onerror = () => {
            // Still show iframe on error, it might work without the script
            setScriptLoaded(true);
        };

        document.body.appendChild(script);

        return () => {
            // Don't remove script on unmount to keep it cached
        };
    }, []);

    useEffect(() => {
        // Listen for postMessage from iframe to adjust height dynamically
        const handleMessage = (event: MessageEvent) => {
            // Accept messages from leadconnectorhq or msgsndr domains
            if (
                event.origin.includes('leadconnectorhq.com') ||
                event.origin.includes('msgsndr.com')
            ) {
                const data = event.data;

                // Handle different message formats that booking widgets typically use
                if (typeof data === 'object' && data !== null) {
                    if (data.height) {
                        setIframeHeight(data.height);
                    } else if (data.type === 'resize' && data.payload?.height) {
                        setIframeHeight(data.payload.height);
                    }
                } else if (typeof data === 'string') {
                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.height) {
                            setIframeHeight(parsed.height);
                        }
                    } catch {
                        // Not JSON, ignore
                    }
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    if (!scriptLoaded) {
        return (
            <div className="rounded-xl overflow-hidden min-h-[900px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-karia-cyan"></div>
            </div>
        );
    }

    return (
        <div className="rounded-xl overflow-auto">
            <iframe
                ref={iframeRef}
                src="https://api.leadconnectorhq.com/widget/booking/hFdQ2N1tTnj5T11P4ZN0"
                style={{
                    width: '100%',
                    border: 'none',
                    height: `${iframeHeight}px`,
                    minHeight: '900px',
                }}
                id="hFdQ2N1tTnj5T11P4ZN0_1770290217854"
            />
        </div>
    );
}
