/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self' http://51.250.19.25:8000;
`;

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};
