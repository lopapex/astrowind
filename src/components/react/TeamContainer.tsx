import { motion } from 'framer-motion';

type TeamMember = {
  id: string;
  nickname: string,
  name: string;
  roles: string[];
  skills: string[];
  image: string;
  description?: string;
};

type Team = {
  team: TeamMember[];
  skillsLabel: string;
  rolesLabel: string;
};

const TeamContainer = ({ team, skillsLabel, rolesLabel }: Team) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {team.map((member) => (
        <motion.div
          className="relative flex md:flex-col border md:border-none md:justify-start"
          key={member.id}
          whileHover="animate"
          variants={{
            animate: { scale: 0.95 },
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-1/2 md:w-full md:min-h-[630px] flex items-center justify-center overflow-hidden">
            <motion.img
              src={member.image}
              alt={member.name}
              className="my-auto max-h-full max-w-full"
              variants={{
                initial: { scale: 1 },
                animate: { scale: 0.9, translateY: '-7.5%' },
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="text-left w-1/2 md:mt-[-16px] md:w-full p-5 md:p-0 md:text-center md:text-white z-10">
            <div className="w-auto inline-block md:bg-gray-500 md:px-3 md:py-1 rounded-full text-sm font-semibold uppercase">
              {member.nickname}
            </div>
            <div className="text-left text-xs border-b pb-2">
              <div className="mt-2 font-medium uppercase">{member.name}</div>
            </div>
            <div className="text-left text-xs border-b">
              <div className="mt-2 font-medium uppercase">{rolesLabel}:</div>
              <div className="text-gray-300 md:h-[65px] md:line-clamp-3">{member.roles.join(', ')}</div>
            </div>
            <div className="text-left text-xs border-b">
              <div className="mt-2 font-medium uppercase">{skillsLabel}:</div>
              <div className="text-gray-300 md:h-[65px] md:line-clamp-3">{member.skills.join(', ')}</div>
            </div>
            {member.description && (
              <div className="text-left text-xs mt-2">
                <div
                  className="prose prose-sm text-gray-300"
                  dangerouslySetInnerHTML={{ __html: member.description }}
                />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamContainer;
