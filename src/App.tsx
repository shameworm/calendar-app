import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="h-screen flex gap-10">
        <Sidebar />
      </main>
    </>
  );
};

export default App;
