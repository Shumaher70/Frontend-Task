import { useGetInfo } from "@/features/constants";
import LoadingPage from "../loading";
import ErrorPage from "../error";

const AboutUsPage = () => {
  const { data: info, error, loading } = useGetInfo();

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage reload />;
  }

  return (
    <main className="p-5">
      <header className="header mb-6">
        <h1 className="text-3xl font-semibold">About us</h1>
      </header>

      <section className="content mb-6">
        <p className="text-lg text-gray-700">{info}</p>
      </section>
    </main>
  );
};
export default AboutUsPage;
