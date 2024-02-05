import React from "react";
import moment from "moment";

export default function StringToDate({ dateString } : { dateString: string }) {
    const [date, setNow] = React.useState<string>(new Date(dateString).toUTCString());

    return (
        <>
            { moment(date).format('Y') }
        </>
    )
}