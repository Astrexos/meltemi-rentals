Meltemi Car Rentals — Web Platform and Booking Flow
===================================================

An elegant, mobile-first marketing and reservation platform built for Meltemi Car Rentals in Kos, Greece.

This platform allows tourists and visitors to explore vehicle fleets, check rental availability, calculate pricing dynamically, and submit verified reservation requests.

---------------------------------------------------

Key Features
------------

1. Dynamic Fleet and Vehicle Selection
* Categorized Vehicles: Clear presentation of economy, compact, and SUV vehicle tiers.
* Transparent Daily Pricing: Real-time pricing display with daily rates in euros per day.
* Feature Breakdown: Transmission type, seating capacity, AC status, and luggage allowances clearly labeled.

2. Tailored Car Rental Booking Engine
* Pickup and Drop-off Date Pickers: Side-by-side date selectors with automated date range constraints (return date cannot precede pickup date).
* Live Cost and Duration Calculator: Automatically computes rental days multiplied by daily rate to show the total amount in real time, reducing checkout friction.
* International Traveler Support: Integrated international phone selector supporting more than 200 country codes and strict national digit validation.

3. Lead Verification and Spam Protection
* Anti-Gibberish Name Filter: Algorithmic verification rejecting bot patterns, keyboard mashing, and nonsensical words.
* Email Verification (OTP): Verification workflow requiring a 6-digit one-time code to prevent fake reservations and ghost bookings.
* Digital Calendar Invite (.ics): Customers automatically receive an RFC-compliant calendar file to sync their reservation with Google Calendar or Apple Calendar.

---------------------------------------------------

Architecture and Security
-------------------------

* Decoupled Architecture (Hub and Spoke): The customer-facing website is completely separated from the core backend database. It contains zero secret API keys, ensuring maximum client-side safety.
* Seamless Embed Integration: Integrates with the central multi-tenant booking engine through a responsive, lightweight iframe wrapper.
* Row-Level Security (RLS): All data interactions are enforced at the PostgreSQL level to guarantee tenant isolation and customer data privacy.

---------------------------------------------------

Tech Stack
----------

* Frontend: React, TypeScript
* Build Tool: Vite
* Styling: Tailwind CSS
* Icons: Lucide React
* Date Utilities: date-fns

---------------------------------------------------

Getting Started Locally
-----------------------

Prerequisites:
* Node.js (version 18 or newer recommended)
* npm or yarn

Installation:

1. Clone the repository:
   git clone https://github.com/YOUR_USERNAME/meltemi-rentals.git
   cd meltemi-rentals

2. Install dependencies:
   npm install

3. Start the local development server:
   npm run dev

   Open your browser and navigate to http://localhost:5173

4. Build for production:
   npm run build

---------------------------------------------------

License
-------
This project is proprietary and developed for Meltemi Car Rentals.

===================================================

How to Update It on GitHub
--------------------------

Method 1: Using VS Code

1. Open README.md in VS Code.
2. Replace all existing text with the clean text above.
3. Save the file.
4. Run these terminal commands:
   git add README.md
   git commit -m "docs: update clean README"
   git push origin main

Method 2: Using the GitHub Website

1. Open your repository on GitHub.com.
2. Click on README.md.
3. Click the pencil icon to edit.
4. Replace the content with the text above.
5. Click "Commit changes..." to save.
