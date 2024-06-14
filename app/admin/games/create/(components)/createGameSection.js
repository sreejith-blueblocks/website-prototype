"use client";
import React, { useState } from "react";
import Form from "./form";

const CreateGameSection = ({ setRefreshGames, refereshGames }) => {
  const [triggerList, setTriggerList] = useState();
  return (
    <div className="my-10">
      <p className="font-bold text-[15px] mb-4">Create New Game</p>
      <Form setRefreshGames={setRefreshGames} refereshGames={refereshGames} />
    </div>
  );
};

export default CreateGameSection;
