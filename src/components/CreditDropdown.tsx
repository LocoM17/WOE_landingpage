import { ExternalResource } from "@/interface/ExternalResource";
import React, { useState } from "react";

interface Props {
  title: string;
  credits: ExternalResource[];
}

const CreditsDropdown: React.FC<Props> = ({ title, credits }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#222",
          color: "#fff",
          padding: "0.5rem 1rem",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {title} {open ? "▲" : "▼"}
      </button>

      {open && (
        <ul
          style={{
            listStyle: "none",
            padding: "0.5rem",
            background: "#111",
            color: "#ccc",
          }}
        >
          {credits.map((credit, index) => (
            <li key={index}>
              <strong>{credit.relatedName}:</strong>{" "}
              <a
                href={credit.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#66f" }}
              >
                {credit.url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreditsDropdown;
