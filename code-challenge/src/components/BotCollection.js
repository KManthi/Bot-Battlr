import React from "react";
import BotCard from "./BotCard";


function BotCollection({ bots, setSelectedBot, dischargeBot}) {
  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {bots.map (bot => (
          <BotCard 
          key={bot.id} 
          bot={bot} 
          setSelectedBot={setSelectedBot} 
          dischargeBot={dischargeBot}
           />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
