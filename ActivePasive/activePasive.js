const nlp = require('compromise');

// Pronoun mapping for active/passive conversion
const pronouns = { 'her': 'she', 'him': 'he', 'whom': 'who', 'me': 'I', 'us': 'we', 'them': 'they' };

function convertToActive(sentence) {
    let doc = nlp(sentence);
    let isPassive = doc.match('(is|was|were|been|be) #Adverb? #PastTense').found;
    
    if (isPassive) {
        let agent = doc.match('by *').out('text').replace('by ', '');
        let verb = doc.match('#PastTense').verbs().toInfinitive().out('text');
        let recipient = doc.match('!by *').not('#Auxiliary').out('text');
        
        // Adjust pronouns
        if (agent.toLowerCase() in pronouns) {
            agent = pronouns[agent.toLowerCase()];
        }

        return `${agent} ${verb} ${recipient}`.trim();
    }

    return sentence; // Return original if not passive
}

// Test the function
let sentence = "The ball was thrown by her.";
let activeSentence = convertToActive(sentence);

console.log("Passive Voice:", sentence);
console.log("Active Voice:", activeSentence);
