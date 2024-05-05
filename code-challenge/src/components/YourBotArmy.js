import React from "react";

function YourBotArmy({ selectedArmyBots, releaseArmyBot }) {

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {selectedArmyBots.map(bot => (
            <div key={bot.id} className="bot ui card" onClick={() =>releaseArmyBot(bot)}>
              <div className="image">
                <img alt={bot.name} src={bot.avatar_url} />
              </div>
              <div className="content">
                <div className="header">{bot.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
