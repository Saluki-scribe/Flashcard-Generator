function ClozeCard(partial, cloze){
    
    this.partial = partial;
    this.cloze = cloze;
    //this.fullText = "";
    this.presentFullText = function() {

        var full = partial.replace("...", " " + cloze + " ");
        console.log(full);
        //this.fullText += full;    
    };    
};

    module.exports = ClozeCard;