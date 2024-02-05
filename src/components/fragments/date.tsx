import moment from "moment/moment";
import React from "react";

export default function StringToDate({ dateString } : { dateString: string }) {
    const [date, setNow] = React.useState<number>(new Date(dateString).getFullYear());

    return (
        <>
            { date }
        </>
    )
}