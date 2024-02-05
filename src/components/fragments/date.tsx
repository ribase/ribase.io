import moment from "moment/moment";

export default function StringToDate({ dateString } : { dateString: string }) {
    return (
        <>
            {moment(dateString).format('Y')}
        </>
    )
}