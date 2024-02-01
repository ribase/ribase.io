export default function Skills({ entry } : {entry: any}) {
    // @ts-ignore
    return (
        <>
            {entry.map((skill: any) => (
                <div key={skill.sys.id} className="progress mt-2" style={{height: "30px"}}>
                    <div className="progress-bar" role="progressbar" style={{width: skill.fields.level+"%"}} aria-valuenow={skill.fields.level}
                     aria-valuemin={0} aria-valuemax={100}>{skill.fields.name}</div>
                </div>
            ))}
        </>
    )
}