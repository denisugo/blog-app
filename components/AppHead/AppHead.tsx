import Head from "next/head";

interface IProps {
  title: string;
  description?: string;
}

function AppHead({ title, description }: IProps) {
  return (
    <Head>
      <title>Create Next App</title>
      <meta
        name="description"
        content={description ? description : "This is my awesome blog app"}
      />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  );
}

export default AppHead;

//TODO: Add icon
//TODO: Add Thumbnail
