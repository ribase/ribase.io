import {TextHelpers} from "@/utils/text-helpers";
import Skills from "@/components/skills";
import Accordion from 'react-bootstrap/Accordion';

const textHelpers = new TextHelpers();
export default function About({ entry } : {entry: any}) {
    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2 className={"text-start ms-0"}>About me</h2>
                    </div>
                    <div className={"col-12"}>
                        {entry.fields.about && (
                            <>
                                <div className={"about--text"} key={"about"}>
                                    {textHelpers.renderRichText(entry.fields.about)}
                                </div>
                            </>
                        )}
                    </div>
                    <hr />
                    <div className={"col-12"}>
                        <h2 className={"text-start ms-0 mt-5"}>Skill summary</h2>
                    </div>
                    <div className={"col-12 mb-5"}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How I Determine My Skill Levels</Accordion.Header>
                                <Accordion.Body>
                                    {textHelpers.renderRichText(entry.fields.skillOverviewDisclaimer)}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    {entry.fields.skillsOverview.fields.skillCategories.map((skillCategories: any) => (
                        <>
                            <div key={skillCategories.sys.id} className={"col-md-6 col-12 mb-5"}>
                                <h3>{skillCategories.fields.title}</h3>
                                {skillCategories && (
                                    <Skills entry={skillCategories.fields.skills}/>
                                )}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}