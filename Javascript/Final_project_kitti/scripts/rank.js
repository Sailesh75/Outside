let cardArrayValues = [],
  cardArraySuits = [];

export default class Rank {
  constructor() {}

  getScore(cardArray) {
    const emptyVariables = () => {
      cardArrayValues.length = 0;
      cardArraySuits.length = 0;
    };

    for (let i = 0; i < cardArray.length; i++) {
      cardArrayValues.push(Number(cardArray[i].value));
      cardArraySuits.push(cardArray[i].suit);
    }

    cardArrayValues.sort((a, b) => b - a);

    if (
      cardArrayValues[0] == cardArrayValues[1] &&
      cardArrayValues[1] == cardArrayValues[2]
    ) {
      switch (cardArrayValues[0]) {
        case 14:
          emptyVariables();
          return 1.1;
        case 13:
          emptyVariables();
          return 1.2;
        case 12:
          emptyVariables();
          return 1.3;
        case 11:
          emptyVariables();
          return 1.4;
        case 10:
          emptyVariables();
          return 1.5;
        case 9:
          emptyVariables();
          return 1.6;
        case 8:
          emptyVariables();
          return 1.7;
        case 7:
          emptyVariables();
          return 1.8;
        case 6:
          emptyVariables();
          return 1.9;
        case 5:
          emptyVariables();
          return 1.91;
        case 4:
          emptyVariables();
          return 1.92;
        case 3:
          emptyVariables();
          return 1.93;
        case 2:
          emptyVariables();
          return 1.94;
      }
    }

    //checking pure sequence
    if (cardArraySuits.every((val, i, arr) => val === arr[0])) {
      if (
        cardArrayValues[0] == 14 &&
        cardArrayValues[1] == 3 &&
        cardArrayValues == 2
      )
        return 2.15;
      if (
        cardArrayValues[0] == cardArrayValues[1] + 1 &&
        cardArrayValues[1] == cardArrayValues[2] + 1
      ) {
        switch (cardArrayValues[0]) {
          case 14:
            emptyVariables();
            return 2.1;
          case 13:
            emptyVariables();
            return 2.2;
          case 12:
            emptyVariables();
            return 2.3;
          case 11:
            emptyVariables();
            return 2.4;
          case 10:
            emptyVariables();
            return 2.5;
          case 9:
            emptyVariables();
            return 2.6;
          case 8:
            emptyVariables();
            return 2.7;
          case 7:
            emptyVariables();
            return 2.8;
          case 6:
            emptyVariables();
            return 2.9;
          case 5:
            emptyVariables();
            return 2.91;
          case 4:
            emptyVariables();
            return 2.92;
          case 3:
            emptyVariables();
            return 2.93;
          case 2:
            emptyVariables();
            return 2.94;
        }
      }
    }

    //checking impure sequence
    if (!cardArraySuits.every((val, i, arr) => val === arr[0])) {
      if (
        cardArrayValues[0] == cardArrayValues[1] + 1 &&
        cardArrayValues[1] == cardArrayValues[2] + 1
      ) {
        switch (cardArrayValues[0]) {
          case 14:
            emptyVariables();
            return 3.1;
          case 13:
            emptyVariables();
            return 3.2;
          case 12:
            emptyVariables();
            return 3.3;
          case 11:
            emptyVariables();
            return 3.4;
          case 10:
            emptyVariables();
            return 3.5;
          case 9:
            emptyVariables();
            return 3.6;
          case 8:
            emptyVariables();
            return 3.7;
          case 7:
            emptyVariables();
            return 3.8;
          case 6:
            emptyVariables();
            return 3.9;
          case 5:
            emptyVariables();
            return 3.91;
          case 4:
            emptyVariables();
            return 3.92;
          case 3:
            emptyVariables();
            return 3.93;
          case 2:
            emptyVariables();
            return 3.94;
        }
      }
    }

    //checking flush
    if (cardArraySuits.every((val, i, arr) => val === arr[0])) {
      switch (cardArrayValues[0]) {
        case 14:
          emptyVariables();
          return 4.1;
        case 13:
          emptyVariables();
          return 4.2;
        case 12:
          emptyVariables();
          return 4.3;
        case 11:
          emptyVariables();
          return 4.4;
        case 10:
          emptyVariables();
          return 4.5;
        case 9:
          emptyVariables();
          return 4.6;
        case 8:
          emptyVariables();
          return 4.7;
        case 7:
          emptyVariables();
          return 4.8;
        case 6:
          emptyVariables();
          return 4.9;
        case 5:
          emptyVariables();
          return 4.91;
        case 4:
          emptyVariables();
          return 4.92;
        case 3:
          emptyVariables();
          return 4.93;
        case 2:
          emptyVariables();
          return 4.94;
      }
    }

    //check pair
    if (
      cardArrayValues[0] == cardArrayValues[1] ||
      cardArrayValues[1] == cardArrayValues[2]
    ) {
      switch (cardArrayValues[0]) {
        case 14:
          emptyVariables();

          return 5.1;
        case 13:
          emptyVariables();

          return 5.2;
        case 12:
          emptyVariables();

          return 5.3;
        case 11:
          emptyVariables();

          return 5.4;
        case 10:
          emptyVariables();

          return 5.5;
        case 9:
          emptyVariables();

          return 5.6;
        case 8:
          emptyVariables();

          return 5.7;
        case 7:
          emptyVariables();

          return 5.8;
        case 6:
          emptyVariables();

          return 5.9;
        case 5:
          emptyVariables();

          return 5.91;
        case 4:
          emptyVariables();

          return 5.92;
        case 3:
          emptyVariables();

          return 5.93;
        case 2:
          emptyVariables();

          return 5.94;
      }
    }

    //For A,2,3
    if (
      cardArrayValues[0] == 14 &&
      cardArrayValues[1] == 3 &&
      cardArrayValues == 2
    )
      return 3.15;

    //highcard
    switch (cardArrayValues[0]) {
      case 14:
        emptyVariables();

        return 6.1;
      case 13:
        emptyVariables();

        return 6.2;
      case 12:
        emptyVariables();

        return 6.3;
      case 11:
        emptyVariables();

        return 6.4;
      case 10:
        emptyVariables();

        return 6.5;
      case 9:
        emptyVariables();

        return 6.6;
      case 8:
        emptyVariables();

        return 6.7;
      case 7:
        emptyVariables();

        return 6.8;
      case 6:
        emptyVariables();

        return 6.9;
      case 5:
        emptyVariables();

        return 6.91;
      case 4:
        emptyVariables();

        return 6.92;
      case 3:
        emptyVariables();

        return 6.93;
      case 2:
        emptyVariables();

        return 6.94;
    }
  }
}
