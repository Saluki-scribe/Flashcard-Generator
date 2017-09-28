function ClozeCard(partial, cloze){
    
    this.partial = partial;
    this.cloze = cloze;
    this.fullText = partial.replace("...", " " + cloze + " ");

};

    module.exports = ClozeCard;