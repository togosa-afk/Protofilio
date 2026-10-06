import NavBar from "./components/navbar/NavBar";
import Main from "./components/main/Main";
import Fotter from "./components/fotter/Fotter";

export default function Home() {
  return (
    <div
      className="bg-surface font-body-md text-on-surface antialiased min-h-screen selection:bg-surface-container-high selection:text-primary"
    >
      <NavBar />
      <Main />
      <Fotter />
    </div>
  );
}
