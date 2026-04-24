export const N = {
    bg: "#e0e5ec",

    /* Raised element — pops out of the surface */
    raised: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff",
    raisedSm: "4px 4px 10px #b8bec7, -4px -4px 10px #ffffff",
    raisedLg: "12px 12px 24px #b8bec7, -12px -12px 24px #ffffff",

    /* Inset / pressed — recedes into the surface */
    inset: "inset 4px 4px 10px #b8bec7, inset -4px -4px 10px #ffffff",
    insetDeep: "inset 6px 6px 14px #b8bec7, inset -6px -6px 14px #ffffff",

    /* Colors */
    teal: "#2a9d8f",
    tealDark: "#1e7268",
    tealDeep: "#264653",
    tealGlow: "rgba(42, 157, 143, 0.35)",

    /* Typography */
    text: "#4a5568",
    textLight: "#718096",
    textMuted: "#a0aec0",
    textWhite: "#ffffff",
    textTealLight: "#7ee8dc",
};

/* Reusable styled shadow helper */
export const neu = {
    raised: { boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff" },
    raisedSm: { boxShadow: "4px 4px 10px #b8bec7, -4px -4px 10px #ffffff" },
    raisedLg: { boxShadow: "12px 12px 24px #b8bec7, -12px -12px 24px #ffffff" },
    inset: { boxShadow: "inset 4px 4px 10px #b8bec7, inset -4px -4px 10px #ffffff" },
    insetDeep: { boxShadow: "inset 6px 6px 14px #b8bec7, inset -6px -6px 14px #ffffff" },
    card: {
        background: "#e0e5ec",
        borderRadius: "20px",
        boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff",
    },
    cardDark: {
        background: "#264653",
        borderRadius: "20px",
        boxShadow: "8px 8px 20px #a8aeb7, -4px -4px 12px #ffffff",
    },
    button: {
        background: "#2a9d8f",
        color: "#ffffff",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
        fontWeight: "700",
        fontFamily: "'Nunito', sans-serif",
        boxShadow: "6px 6px 14px #b8bec7, -2px -2px 8px #ffffff, 0 4px 14px rgba(42,157,143,0.35)",
        transition: "all 0.2s ease",
    },
    buttonPressed: {
        boxShadow: "inset 4px 4px 10px rgba(0,0,0,0.15), inset -2px -2px 6px rgba(255,255,255,0.1)",
        transform: "scale(0.97)",
    },
    iconButton: {
        background: "#e0e5ec",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "4px 4px 10px #b8bec7, -4px -4px 10px #ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "box-shadow 0.2s",
    },
    searchBar: {
        background: "#e0e5ec",
        borderRadius: "50px",
        boxShadow: "inset 6px 6px 14px #b8bec7, inset -6px -6px 14px #ffffff",
        display: "flex",
        alignItems: "center",
    },
    badge: {
        background: "#e0e5ec",
        boxShadow: "inset 4px 4px 10px #b8bec7, inset -4px -4px 10px #ffffff",
        borderRadius: "20px",
        display: "inline-block",
        fontSize: "10px",
        fontWeight: "800",
        letterSpacing: "1.5px",
        color: "#2a9d8f",
    },
    statChip: {
        background: "#e0e5ec",
        borderRadius: "12px",
        boxShadow: "inset 4px 4px 10px #b8bec7, inset -4px -4px 10px #ffffff",
    },
};

/* Custom hook for Neumorphic states */
import { useState } from 'react';

export const useNeuState = (baseStyle = neu.raised) => {
    const [pressed, setPressed] = useState(false);
    return {
        style: {
            ...baseStyle,
            ...(pressed ? neu.inset : baseStyle),
        },
        onMouseDown: () => setPressed(true),
        onMouseUp: () => setPressed(false),
        onMouseLeave: () => setPressed(false),
    };
};
