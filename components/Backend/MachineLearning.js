import DataSet from './datasets/DataSet'
// import DataSet from './datasets/MovieSet'
var natural = require('natural');
var NaiveBayesModel = new natural.BayesClassifier();




export function NaiveBayesPredict(input) {
    var sentenceInput = input.toLowerCase();
    
    // Add Feature to Labels
    AddFeatureLabel();

    // Train dataset
    NaiveBayesModel.train();

    // Predict Sentence

    
    console.log(NaiveBayesModel.classify(sentenceInput))
    return NaiveBayesModel.classify(sentenceInput)

}




// Adding Features and Labels
function AddFeatureLabel() {
    DataSet.forEach(data => {

        let sentence = data.sentence
        let label = data.class

        // sentence = sentence.toLowerCase();
        // sentence = sentence.

        NaiveBayesModel.addDocument(data.sentence.toLocaleLowerCase().replace('#', '').replace(/\@\w\w+\s?/g, '').replace(/(?:https?|ftp):\/\/[\n\S]+/g, '').replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " "), data.class)

        // console.log(data.sentence.replace(/\@\w\w+\s?/g, '').replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''))
    }, () => {
        console.log("Adding Features and Label Done")
    });

}














