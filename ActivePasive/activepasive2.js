function convertToParticiple(verb) {
    /**
     * Convert a verb to its past participle form.
     * This is a basic implementation; a full version would use a verb conjugation library.
     */
    if (verb.endsWith("e")) {
        return verb + "d";
    } else {
        return verb + "ed";
    }
}

function activeToPassive(sentence) {
    /**
     * Convert an active voice sentence to passive voice.
     */
    // Tokenize the sentence (simple split for basic use case)
    const words = sentence.split(" ");
    
    // Initialize placeholders
    let subject = "";
    let verb = "";
    let object = "";
    let extras = [];

    // Define basic pronoun mappings
    const pronouns = { her: "she", him: "he", me: "I", us: "we", them: "they" };
    const inversePronouns = { she: "her", he: "him", I: "me", we: "us", they: "them" };

    // Simple parsing based on word positions
    // This assumes a basic sentence structure: Subject Verb Object (SVO)
    if (words.length >= 3) {
        subject = words[0];
        verb = words[1];
        object = words[2];
        extras = words.slice(3); // Collect any remaining words as "extras"
    } else {
        return "Cannot convert to passive: incomplete sentence structure.";
    }

    // Handle pronouns
    if (pronouns[subject.toLowerCase()]) {
        subject = pronouns[subject.toLowerCase()];
    }
    if (inversePronouns[object.toLowerCase()]) {
        object = inversePronouns[object.toLowerCase()];
    }

    // Convert the verb to past participle
    const participle = convertToParticiple(verb);

    // Construct the passive sentence
    let passiveSentence = `${object.charAt(0).toUpperCase() + object.slice(1)} was ${participle} by ${subject}`;
    if (extras.length > 0) {
        passiveSentence += " " + extras.join(" ");
    }
    return passiveSentence;
}

// Example Usage
const activeSentence = "The cat chased the mouse.";
const passiveSentence = activeToPassive(activeSentence);
console.log("Active:", activeSentence);
console.log("Passive:", passiveSentence);
