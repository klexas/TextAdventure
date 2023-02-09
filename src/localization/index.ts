import path from 'path';
import fs from 'fs';

const Locale = {
    load: (locale: string) => {
        const localePath = path.join(__dirname, `${locale}.json`);
        // if locale doesn't exist revert to en - TODO: I don't like defensive programming, but I don't know how to handle this better right now
        if (!fs.existsSync(localePath)) {
            console.warn(`Locale ${locale} does not exist, reverting to en`);
            locale = 'en';
        }

        const localeFile = fs.readFileSync(localePath, 'utf8');
        return JSON.parse(localeFile);
    }
};

export default Locale;