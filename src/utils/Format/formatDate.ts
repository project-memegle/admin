import { format, isToday, isYesterday, differenceInDays } from 'date-fns';

export function formatDate(dateString: string, language: string): string {
    const date = new Date(dateString);
    const now = new Date();

    if (language === 'ko') {
        if (isToday(date)) {
            return format(date, 'HH:mm');
        } else if (isYesterday(date)) {
            return '어제 ' + format(date, 'HH:mm');
        } else if (differenceInDays(now, date) < 1) {
            return format(date, 'HH:mm');
        } else if (differenceInDays(now, date) < 365) {
            return format(date, 'M월 d일');
        } else {
            return format(date, 'yyyy년 M월 d일');
        }
    } else {
        if (isToday(date)) {
            return format(date, 'HH:mm');
        } else if (isYesterday(date)) {
            return 'Yesterday ' + format(date, 'HH:mm');
        } else if (differenceInDays(now, date) < 1) {
            return format(date, 'HH:mm');
        } else if (differenceInDays(now, date) < 365) {
            return format(date, 'MMM d');
        } else {
            return format(date, 'yyyy MMM d');
        }
    }
}

export function formatStaticDate(dateString: string, language: string): string {
    const date = new Date(dateString);

    if (language === 'ko') {
        return format(date, 'yyyy년 M월 d일 HH시 mm분');
    } else {
        return format(date, 'yyyy MMM d HH:mm');
    }
}
