let cardArrayValues = [],
  cardArraySuits = [];

export default class Rank{
    constructor()
    {}

        getScore(cardArray) 
        {
            const emptyVariables = () => 
            {
                cardArrayValues.length = 0;
                cardArraySuits.length = 0;
            }

            const isTrill = (cardArrayValues) => 
            {
                return cardArrayValues.every((val, i, arr) => val === arr[0]);
            }

             const  isPureSequence = (cardArrayValues, cardArraySuits) =>
            {
                if (!(cardArraySuits.every((val, i, arr) => val === arr[0])))
                return 0;
            
                if (cardArrayValues[2] == cardArrayValues[1] + 1 && cardArrayValues[1] == cardArrayValues[0] + 1)
                return 1;
                return 0;
            }
            
            const isImPureSequence = (cardArrayValues) =>
            {
                cardArrayValues.sort((a, b) => a - b);
                
                if (cardArrayValues[2] == cardArrayValues[1] + 1 && cardArrayValues[1] == cardArrayValues[0] + 1)
                return 1;
                return 0;
            }
            
            const isColor = (cardArraySuits) =>
                {
                return cardArraySuits.every((val, i, arr) => val === arr[0]);
            }
            
            const isPair = (cardArrayValues) => 
            {            
                cardArrayValues.sort();
                if (cardArrayValues[0] == cardArrayValues[1] || cardArrayValues[1] == cardArrayValues[2])
                return 1;
                return 0;
            }

            for(let i=0; i<cardArray.length; i++){
                cardArrayValues.push(Number(cardArray[i].value));
                cardArraySuits.push(cardArray[i].suit);
            }


            if (isTrill(cardArrayValues)){
                emptyVariables();
                return 1;
            }
            else if (isPureSequence(cardArrayValues,cardArraySuits))
            {
                emptyVariables();
                return 2;
            }
            else if (isImPureSequence(cardArrayValues))
            {
                emptyVariables();
                
                return 3;
            }
            else if (isColor(cardArraySuits))
            {
                emptyVariables();
                return 4;
            }
            else if (isPair(cardArrayValues))
            {
                emptyVariables();
                return 5;

            }
            emptyVariables();
            return 6;

        }
    }
