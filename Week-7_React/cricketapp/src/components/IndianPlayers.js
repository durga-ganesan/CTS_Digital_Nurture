import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Rohit', 'Virat', 'Rahul', 'Pant'];
  const RanjiTrophyPlayers = ['Jadeja', 'Shami', 'Bumrah'];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  const [oddTeam, evenTeam] = allPlayers.reduce(
    ([odd, even], player, index) => {
      return index % 2 === 0
        ? [[...odd, player], even]
        : [odd, [...even, player]];
    },
    [[], []]
  );

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
