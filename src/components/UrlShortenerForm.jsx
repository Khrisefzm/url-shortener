import { useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";

const UrlShortenerForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://url-shortener-api-xdre.onrender.com",
        {
          url,
        }
      );
      setShortUrl(response.data.shortUrl);
      setQrCode(response.data.shortUrl);
    } catch (error) {
      console.error(error);
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
          Shorten URL
        </button>
      </form>
      {shortUrl && (
        <div className="mt-4 text-center">
          <p className="mb-2">
            Shortened URL:{" "}
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </p>
          <QRCodeCanvas className="mx-auto" value={qrCode} />
        </div>
      )}
    </div>
  );
};

export default UrlShortenerForm;
