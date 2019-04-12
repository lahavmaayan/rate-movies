export function tagDisplayName(tag) {
    switch (tag.toLowerCase()) {
        case 'femaleLead'.toLowerCase():
            return 'Strong Female Lead';
        case 'minorityRepresentation'.toLowerCase():
            return 'Minority Group Representation';
        case 'sexualityRate'.toLowerCase():
            return 'Sexual Violante';
        case 'BechdelTest'.toLowerCase():
            return 'Bechdel Test';
    }
    return tag;
}
