# Text Adventure Engine

I like Workflow-Engines. So I want to create one from scratch. Text adventure games seems like a good place to start. 

As generic as possible while being as approachable as possible. Languages used are evident of that, TS. 
JS would work but having Types saves code 'ramp-up' time. Also I shoot myself in the foot too often with JS .
Using a Compiled language didn't seem fair as the compiler & settings are both doing some of the 'magic' which I would spend too much time on. 

# Why ?

No clue. But why not. I love point and click games. I abuse fixed camera story intensive games ([SIGNALIS](https://store.steampowered.com/app/1262350/SIGNALIS/)), so Some 'thoughts" though: 

## Everyone is building physic engines

There's a lot of amazing working being done on physic engines, I really appreciate where they find the optimizations in areas that just look "it's just like that". Doom, Quake HL and so many more unsung hero's have done that far better. Add to all that the incredible things which are being done to take advantage of the GPU's, I can't contribute to that field in a meaningful way. I do know workflow engines though.  

### Skyrim 
For the sole person who doesn't know, Skyrim is a game based heavily on the Quest->Quest model. it breaks and bricks the playthrough more than it should.  (insert : it just works: meme). This repo is to see how easy/hard it is to build a quest workflow that 'cant' (famous last words) fail. 

# Get Setup

Project should be self sufficient, minimal deps, (working on replacing 'prompt' ) 

## Setup
Clone repo. Jump into folder. 

`npm install`

This should set you up. If not, you will nee the following packages : 
"typescript" 			- Transpile TypeScript to JS
"ts-node"				- See above JIT 
"rimraf"					- Cleanup lib to use 'rm -rf' in node 
"copyfiles"				- Copy files, needed for 'localization.json' files


## TODO

- Builder
- Host service
- Everything. 