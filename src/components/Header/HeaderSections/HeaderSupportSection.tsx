import Button from "../../UI/Button";
import Dropdown from "../../UI/Dropdown";

import searchImg from "../../../assets/search.svg";
import supportImg from "../../../assets/support.svg";
import settingsImg from "../../../assets/settings.svg";

const HeaderSupportSection: React.FC = () => {
  return (
    <section className="flex items-center justify-between gap-4">
      <Dropdown />
      <Button>
        <img src={searchImg} alt="Find appointment" />
      </Button>
      <Button>
        <img src={supportImg} alt="Support team" />
      </Button>
      <Button>
        <img src={settingsImg} alt="Settings menu" />
      </Button>
    </section>
  );
};

export default HeaderSupportSection;
