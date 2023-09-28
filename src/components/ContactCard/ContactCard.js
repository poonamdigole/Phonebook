import React from "react";
import "./ContactCard.css"

export default function ContactCard({name, mobile}) {
    return (
<div className="contact-card">
    <h2 className="user-name">{name}</h2>
    <span>{mobile}</span>
</div>
    )
}