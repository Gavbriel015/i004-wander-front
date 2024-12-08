import { useEffect, useState, useContext } from "react";
import HeaderPanel from "../HeaderPanel";
import ExperienceCardProvider from "./ExperienceCardProvider";
import { AuthContext } from "../../../contexts/auth.context";

function PanelProvider() {
  const { user } = useContext(AuthContext);
  const userId = user?._id;
  const [experiences, setExperiences] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/experiences/host/${userId}`);
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchExperiences();
    }
  }, []);

  

  return (
    <div>
      <HeaderPanel title="Mis Experiencias" />
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen gap-2">
          <div className="w-6 h-6 border-b-2 border-current rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="mt-5">
          {experiences.map((experience) => (
            <ExperienceCardProvider experienceId={experience.id} status={experience.status} price={experience.price} title={experience.title} key={experience.id}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default PanelProvider;