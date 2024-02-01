import Head from 'next/head'
import {ContentType, createClient} from 'contentful';
import Timeline from '../components/fragments/timeline';
import SkateboardComponent from "../components/fragments/skateboard";
import Front from "@/components/front";
import About from "@/components/about";
import Cv from "@/components/cv";

export async function getStaticProps() {
    if (process.env.SPACE && process.env.DELIVERY_ACCESS_TOKEN) {
        const client = createClient({
            space: process.env.SPACE,
            accessToken: process.env.DELIVERY_ACCESS_TOKEN,
        });

        const res = await client.getEntries({ content_type: 'landingPage', include: 3 });
        return {
            props: {
                entries: res.items,
            },
        };
    }
}

export default function Home({ entries }: {entries:Array<any>}) {
  return (
    <>
      <Head>
        <title>ribase.io</title>
        <meta name="description" content="ribase.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

                        <div>
                            <SkateboardComponent animationType={"kickflip"}/>
                        </div>

                        <div id={"skills"}>
                            <About entry={entry.fields} />
                        </div>

                        <div>
                            <SkateboardComponent animationType={"kickflip"}/>
                        </div>

                        <div id={"cv--entries"}>
                            <Cv entry={entry.fields.cvOverviewRelation} />
                        </div>

                        <div className={"pt-5"}>
                            <SkateboardComponent animationType={"ollie"}/>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </>
  )
}
