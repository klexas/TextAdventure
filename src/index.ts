import { User } from './model/user';
import PromptSync from 'prompt-sync';
import { Quest, QuestList } from './model/quests';
import Locale from './localization';

const prompt = PromptSync();

// Main 
async function main() {
    const locale = await Locale.load('en');

    console.log(locale.start);
    const user = prompt('Enter your Name: ');

    console.log(locale.welcome, user);

}


// Run her
main();