import { useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import { ClipLoader } from "react-spinners";

const UrlShortenerForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeoutMessage, setTimeoutMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const timer = setTimeout(() => {
      setTimeoutMessage(true);
    }, 5000);

    try {
      const response = await axios.post(
        "https://url-shortener-api-xdre.onrender.com/api/shorten",
        {
          url,
        }
      );
      setShortUrl(response.data.shortUrl);
      setQrCode(response.data.shortUrl);
    } catch (error) {
      console.error(error);
      setError("Error generating short URL. Please try again. Error: " + error);
    } finally {
      setLoading(false);
      setTimeoutMessage(false);
      clearTimeout(timer);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          {loading ? "Generating..." : "Shorten URL"}
        </button>
      </form>
      {loading ? (
        <div className="mt-4 flex flex-col items-center">
          {timeoutMessage && (
            <p className="my-2 text-center">
              Your request is taking longer than usual...
            </p>
          )}
          <ClipLoader size={35} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        (error && (
          <div className="mt-4 text-red-500">
            <p>{error}</p>
          </div>
        )) ||
        (shortUrl && (
          <div className="mt-4 text-center">
            <p className="mb-2">
              Shortened URL:{" "}
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            </p>
            <QRCodeCanvas className="mx-auto" value={qrCode} />
          </div>
        ))
      )}
    </div>
  );
};

export default UrlShortenerForm;
