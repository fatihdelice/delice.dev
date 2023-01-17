const title = `Fatih Delice`;
const description = `Fatih Delice; Computer Engineer — Developer`;
const domain = `delice.dev`;
const twitter = `@fatihdelice_`;
const meta = `Computer Engineer, developer`;

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
