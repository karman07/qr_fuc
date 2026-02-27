"use client";

import React from "react";
import { MapPin, MessageCircle, Instagram } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        {/* Profile Section */}
        <div className="profile-section">
          {/* Logo */}
          <Image
            src="/Sky dreamer Logo.png"
            alt="Sky Dreamer Logo"
            width={80}
            height={80}
            className="logo"
          />
          <div>
            <h1 className="business-name">Sky Dreamer</h1>
            <p className="description">
              Dream big, reach higher. Your journey to the sky starts here.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="links-section">
          <button
            className="link-button"
            onClick={() => window.open("https://maps.app.goo.gl/z4SQX3MjT2hK5CzNA")}
          >
            <MapPin className="link-icon" />
            Our Location
          </button>

          <button
            className="link-button"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            <MessageCircle className="link-icon" />
            WhatsApp Us
          </button>

          <button
            className="link-button"
            onClick={() => window.open("https://instagram.com/yourusername", "_blank")}
          >
            <Instagram className="link-icon" />
            Follow on Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
