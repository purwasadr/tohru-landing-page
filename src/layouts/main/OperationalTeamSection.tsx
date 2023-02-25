import CardProfile from '@/common/components/CardProfile';
import Sidebar from '@/common/components/Sidebar';
import { operationalTeams } from '@/common/constants';

const OperationalTeamSection = () => {
  return (
    <section className="">
      <h2 className="text-center">Operational Team</h2>
      <p className="text-center text-secondary mt-4">44 team members from Indonesia, India, Singopuran, and Swiss</p>
      <div className="mt-10">
        <li className="flex flex-wrap justify-center items-stretch gap-6">
          {operationalTeams.map((profile) => (
            <CardProfile className="z-10" key={profile.id}  profile={profile} />
          ))}
        </li>
      </div>
    </section>
  );
}

export default OperationalTeamSection;