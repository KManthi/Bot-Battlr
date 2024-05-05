import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const[selectedArmyBots, setSelectedArmyBots] = useState([]);
  const baseUrl = 'http://localhost:8002/bots';

  useEffect(() => {
    fetch(`${baseUrl}`)
     .then(response => response.json())
     .then(data => setBots(data))
     .catch(error => console.log('Error fetching bots:', error))
  }, []);

  const addToArmy = (bot) => {
    if(!selectedArmyBots.some(selectedArmyBot => selectedArmyBot.id === bot.id)) {
      setSelectedArmyBots([...selectedArmyBots, bot])
      setBots(bots.filter(b => b.id !== bot.id));
      console.log('Bot was added:', bot)
      console.log(selectedArmyBots)
    } else {
      console.log('Bot was already in army')
    }
  };

  const releaseArmyBot = (bot) => {
    setSelectedArmyBots(selectedArmyBots.filter(selectedArmyBot => selectedArmyBot.id!== bot.id));
    console.log('Bot was removed from army:', bot);
  };

  const dischargeBot = (bot) => {
    fetch(`${baseUrl}/${bot.id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if(response.ok) {
        console.log('Bot was discharged')
        console.log(bot)
        setBots(bots.filter(b => b.id !== bot.id));
      } else {
        console.error('Failed to discharge bot')
      }
    })
    .catch((error) => console.log('Error discharging bot:', error))
  }

  const handleSort = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => a[criteria] - b[criteria]);
    setBots(sortedBots);
  }

  return (
    <div>
      {!selectedBot && <SortBar onSort={handleSort} />}
      {selectedBot ? (
        <BotSpecs bot={selectedBot} setSelectedBot={setSelectedBot} addToArmy={addToArmy} />
      ) : (
        <div>
          <YourBotArmy selectedArmyBots={selectedArmyBots} releaseArmyBot={releaseArmyBot} />
          <BotCollection bots={bots} setSelectedBot={setSelectedBot} dischargeBot={dischargeBot}/>
       </div>
      )}
    </div>
  );
}

export default BotsPage;
