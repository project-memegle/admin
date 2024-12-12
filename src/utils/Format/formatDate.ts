import { format, isToday, isYesterday, differenceInDays } from 'date-fns';

export function formatDate(dateString: string, language: string): string {
    const date = new Date(dateString);
    const now = new Date();
    let formattedDate = '';

    if (isToday(date)) {
        formattedDate = format(date, 'HH:mm');
    } else if (isYesterday(date)) {
        formattedDate =
            (language === 'ko' ? '어제 ' : 'Yesterday ') +
            format(date, 'HH:mm');
    } else if (differenceInDays(now, date) < 1) {
        formattedDate = format(date, 'HH:mm');
    } else if (differenceInDays(now, date) < 365) {
        formattedDate = format(date, language === 'ko' ? 'M월 d일' : 'MMM d');
    } else {
        formattedDate = format(
            date,
            language === 'ko' ? 'yyyy년 M월 d일' : 'yyyy MMM d'
        );
    }

    return formattedDate;
}

export function formatStaticDate(dateString: string, language: string): string {
    const date = new Date(dateString);

    if (language === 'ko') {
        return format(date, 'yyyy년 M월 d일 HH시 mm분');
    } else {
        return format(date, 'yyyy MMM d HH:mm');
    }
}
