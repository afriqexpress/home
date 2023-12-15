import "./teammembers.css";

type TeamMember = { image: string, name: string, title: string }

type Props = {
  teamMembers: TeamMember[]
}

const TeamMembers = ({ teamMembers }: Props) => (
  <>
    <h2 className="teammembers__h2">Our Team Members</h2>
    <p className="teammembers__p1">Our proud team members</p>
    <div className="teammembers__wrapper2">
      {teamMembers.map((teamMember) => (
        <section className="teammembers">
          <div className="teammembers__wrapper">
            <img className="teammembers__image" src={teamMember.image} alt={`Picture of ${teamMember.name}`} />
            <h3 className="teammembers__h3">{teamMember.name}</h3>
            <p className="teammembers__p">{teamMember.title}</p>
          </div>
        </section>
      ))}
    </div>
  </>
);

export default TeamMembers;
