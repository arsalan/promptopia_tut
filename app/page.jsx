import Feed from "@components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover The Intelligence, aka AI
        <br className="max-md:hidden" />
        <span className="green_gradient text-center">AI Power-Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is a way for you to discover the world of AI Prompts
      </p>

      <Feed />
    </section>
  );
}

export default Home;
