import {TextHelpers} from "@/utils/text-helpers";
import {ContentType} from "contentful";
import Timeline from "@/components/fragments/timeline";
import Skills from "@/components/skills";

const textHelpers = new TextHelpers();
export default function About({ entry } : {entry: any}) {
    return (
        <>
            <div className={"container"}>
                <h1>About</h1>
                <div className={"row"}>
                    <div className={"col-12"}>
                        {entry.about && (
                            <div>
                                {textHelpers.renderRichText(entry.about)}
                            </div>
                        )}
                    </div>
                    {entry.skillsOverview.fields.skillCategories.map((skillCategories: any) => (
                        <>
                            <div key={skillCategories.sys.id} className={"col-md-4 col-12"}>
                                <h2>{skillCategories.fields.title}</h2>
                                {skillCategories && (
                                    <Skills entry={skillCategories.fields.skills} />
                                )}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}