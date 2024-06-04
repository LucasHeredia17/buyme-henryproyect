import { redirect } from "next/navigation";
import Home from "./home/page";

const LandingPage = () => {
  redirect("/home");
  return (
    <div>
      <Home />
    </div>
  );
};

export default LandingPage;
