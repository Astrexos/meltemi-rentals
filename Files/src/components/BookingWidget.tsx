import React from "react";

// 🔴 IMPORTANT: Paste Meltemi's Business ID from your BSystem Dashboard here!
const MELTEMI_BUSINESS_ID = "eaef9e84-7975-40c2-8e8e-47bd18de895e";

export function BookingWidget({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden min-h-[600px] border border-neutral-100">
      <iframe 
        src="https://rad-banoffee-18f799.netlify.app/book/${MELTEMI_BUSINESS_ID}"
        width="100%" 
        height={compact ? "650px" : "750px"} 
        style={{ border: "none" }}
        title="Meltemi Live Booking Engine"
      />
    </div>
  );
}