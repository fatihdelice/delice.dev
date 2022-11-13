const title = `Fatih Delice`;
const description = `Fatih Delice; Computer Engineer — Developer, Creator, Writer.`;
const domain = `delice.dev`;
const twitter = `@fatihdew`;
const meta = `Computer Engineer, developer, creator`;

export const seo = {
  title: title + " — " + meta,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
};
