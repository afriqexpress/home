import { TeamMembersData } from "./TeamMembersData";
import "./teammembers.css";

const TeamMembers = () => (
  <>
    <h2 className="teammembers__h2">Our Team Members</h2>
    <p className="teammembers__p1">Our proud team members</p>
    <div className="teammembers__wrapper2">
      {TeamMembersData.map((teammembers) => (
        <section className="teammembers">
          <div className="teammembers__wrapper">
            <img className="teammembers__image" src={teammembers.image} alt="Profiel Foto" />
            <h3 className="teammembers__h3">{teammembers.title}</h3>
            <p className="teammembers__p">{teammembers.text}</p>
          </div>
        </section>
      ))}
    </div>
  </>
);

export default TeamMembers;
