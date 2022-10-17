import MainContent from "../../components/MainContent/MainConten";
import ToolsContent from "../../components/ToolsContent/ToolsContent";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="mainContent">
        <MainContent />
      </div>
      <div className="toolsContent">
        <ToolsContent />
      </div>
    </div>
  );
}

export default Home;
