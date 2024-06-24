import UrlShortenerForm from "../components/UrlShortenerForm.jsx";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        URL Shortener and QR Code Generator
      </h1>
      <UrlShortenerForm />
    </div>
  );
};

export default Home;
