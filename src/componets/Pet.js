import React from "react";
import happypet from "../assets/pet-happy.png";
import sadpet from "../assets/pet-sad.png";
import tiredpet from "../assets/pet-tired.png";

export default function Pet({mood}){
    const petImages = {
        happy: happypet,
        sad: sadpet,
        tired: tiredpet
    };

    return(
        <section>
            <img src={petImages[mood]} alt="pet Mood" width="150"></img>
            <p>Your Pet feels {mood}</p>
        </section>
    );
}

