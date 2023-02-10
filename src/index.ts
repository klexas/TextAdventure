import { User } from './model/user';
import PromptSync from 'prompt-sync';
import { Quest, QuestList } from './model/quests';
import Locale from './localization';

const prompt = PromptSync();

// Main 
async function main() {
    const locale = await Locale.load('en');
    console.log(locale.welcome);
    const user = prompt('Enter your Name: ');



}


// Run her
main();