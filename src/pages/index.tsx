import Head from 'next/head'
import { createClient } from 'contentful';
import SkateboardComponent from "../components/fragments/skateboard";
import Front from "@/components/front";
import About from "@/components/about";
import Cv from "@/components/cv";

export async function getStaticProps() {
    console.log("getStaticProps is running...");
    console.log("process.env.SPACE:", process.env.SPACE ? "Set" : "Not Set");
    console.log("process.env.DELIVERY_ACCESS_TOKEN:", process.env.DELIVERY_ACCESS_TOKEN ? "Set" : "Not Set");

    if (process.env.SPACE && process.env.DELIVERY_ACCESS_TOKEN) {
        const client = createClient({
            space: process.env.SPACE,
            accessToken: process.env.DELIVERY_ACCESS_TOKEN,
        });

        try {
            const res = await client.getEntries({ content_type: 'landingPage', include: 3 });
            console.log("Contentful entries fetched successfully. Count:", res.items.length);
            return {
                props: {
                    entries: res.items,
                },
            };
        } catch (error) {
            console.error("Error fetching Contentful entries:", error);
            return {
                props: {
                    entries: [],
                },
            };
        }
    } else {
        console.warn("Contentful environment variables (SPACE or DELIVERY_ACCESS_TOKEN) are not set.");
    }

    return {
        props: {
            entries: [],
        },
    };
}

export default function Home({ entries }: {entries:Array<any>}) {
  return (
    <>
      <Head>
        <title>ribase.io</title>
        <meta name="description" content="ribase.io" />
        <meta name="viewport" content="width=device-scale, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <nav className="navbar navbar-expand fixed-top">
                <div className="container-fluid">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#front">Home</a>
                        <a className="nav-link" href="#skills">About</a>
                        <a className="nav-link" href="#cv--entries">CV</a>
                    </div>
                </div>
            </nav>
            <div>
                {entries.map((entry) => (
                    <div key={entry.sys.id}>
                        <div id={"front"}>
                            <Front/>
                        </div>

                        <div className={"skateboard--divider"}>
                            <SkateboardComponent animationType={"kickflip"}/>
                        </div>

                        <div id={"skills"}>
                            <About entry={entry} key={"about"}/>
                        </div>

                        <div className={"skateboard--divider"}>
                            <SkateboardComponent animationType={"kickflip"}/>
                        </div>

                        <div id={"cv--entries"}>
                            <Cv entry={entry.fields.cvOverviewRelation}/>
                        </div>

                        <div className={"skateboard--divider pt-5"}>
                            <SkateboardComponent animationType={"ollie"}/>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </>
  )
}