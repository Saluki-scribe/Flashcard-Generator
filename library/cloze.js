function ClozeCard(partial, cloze){
    
    this.partial = partial;
    this.cloze = cloze;
    this.fullText = "";
    this.presentFullText = function() {

        var full = partial.replace("...", " " + cloze + " ");
        console.log("Full: " + full);
        this.fullText += full;
        console.log("this.fullText: " + this.fullText);
    
    };    
};

    module.exports = ClozeCard;