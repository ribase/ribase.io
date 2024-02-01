import { ContentType } from "contentful";
import Timeline from "@/components/fragments/timeline";

export default function Cv({ entry } : {entry: []}) {
    // @ts-ignore
    return (
        <>
            {entry && (
                <div>
                    {entry.map((child: ContentType) => (
                        <div key={child.sys.id}>
                            <Timeline entry={child}/>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}