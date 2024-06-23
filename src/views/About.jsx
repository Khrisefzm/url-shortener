const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="mb-4">
        This is a simple URL shortener and QR code generator.
      </p>
      <p className="mb-2">
        To make this project, I used the following technologies:
      </p>
      <h2 className="text-xl font-bold mb-2">Frontend</h2>
      <ul className="mb-4">
        <li>React and Vite</li>
        <li>React Router DOM</li>
        <li>Tailwind</li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Backend</h2>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>QrCode</li>
      </ul>

      <p className="mt-4">Thanks for saw this project!</p>
    </div>
  );
};

export default About;
