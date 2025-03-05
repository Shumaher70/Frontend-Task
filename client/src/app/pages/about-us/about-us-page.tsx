import ErrorPage from "../error";
import LoadingPage from "../loading";
import { useGetInfo } from "@/features/constants";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

const AboutUsPage = () => {
  const { data: info, error, loading } = useGetInfo();

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage reload />;
  }

  return (
    <main className="mx-auto h-[calc(100vh-50px)] max-w-7xl px-10 pt-5 sm:pt-10">
      <header className="header mb-6">
        <h1 className="text-center text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
          About us
        </h1>
      </header>

      <section className="content mb-6">
        <article className="text-lg text-gray-700">{info}</article>
      </section>

      <div className="flex justify-center">
        <Button>
          <NavLink to="/profile">Click now</NavLink>
        </Button>
      </div>
    </main>
  );
};
export default AboutUsPage;
