import moment from "moment";
import { TextHelpers } from "@/utils/text-helpers";
import Skills from "../skills";

const textHelpers = new TextHelpers();

export default function Timeline({ entry } : {entry:any}) {
    return (
        <>
            {entry.fields.title}
            {entry.fields.cvEntries && (
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                            <ul className="timeline timeline-centered">
                                {entry.fields.cvEntries.map((cvEntry: any) => (
                                    <li key={cvEntry.sys.id}  className="timeline-item">
                                        <div className="timeline-info">
                                            <span>
                                                {moment(cvEntry.fields.startDate).format('Y')} - {moment(cvEntry.fields.endDate).format('Y')}
                                            </span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="timeline-title">
                                                {cvEntry.fields.title} - <br />
                                                {cvEntry.fields.company}
                                            </h3>
                                            {textHelpers.renderRichText(cvEntry.fields.description)}
                                        </div>

                                        <div className="timeline-content">
                                            <h4 className="timeline-title">
                                                Technology usages
                                            </h4>
                                            <Skills entry={cvEntry.fields.skills} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
