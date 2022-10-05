
export const get_age = (date) => {
    let age = (new Date(date)).getFullYear()
    let today = (new Date()).getFullYear()
    return today - age;
}

export const get_date_time = (stamp) => {
    let target = (new Date(stamp))
    let date = target.toDateString()
    let time = target.toTimeString().substring(0,8)
    return {
        date, time
    };
}