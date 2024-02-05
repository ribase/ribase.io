import moment from "moment/moment";
import {useEffect, useState} from "react";

export default function StringToDate({ dateString } : { dateString: string }) {
    var [date,setDate] = useState(moment(dateString).format('Y'));
    return (
        <>
            {date}
        </>
    )
}