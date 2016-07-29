import { Locale } from './locale';
import * as availableLocales from './locales';

export function init(locales: { [name: string]: Locale }) {
    for (var property in availableLocales) {
        if (availableLocales.hasOwnProperty(property)) {
            let locale = new ((availableLocales as any)[property]) as Locale;
            locales[property] = locale;
        }
    }
}