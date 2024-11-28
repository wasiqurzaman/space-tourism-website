import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-home-desktop h-screen bg-cover bg-no-repeat">
      <h2 className="">So, You want to travel to</h2>
      <h1 className="">Home</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <div>
        <Link to="/destination">Explore</Link>
      </div>
    </div>
  );
}

export default Homepage;
