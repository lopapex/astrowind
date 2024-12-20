import { useState } from 'react';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  description?: string;
};

type Team = {
  team: TeamMember[];
};

const TeamContainer = ({ team }: Team) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {team.map((member) => (
        <div key={member.id}>{member.name}</div>
      ))}
      <div className="card">
        <button
          onClick={() =>
            setCount((count) => {
              console.log(count);
              return count + 1;
            })
          }
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more ss</p>
    </div>
  );
};

export default TeamContainer;
