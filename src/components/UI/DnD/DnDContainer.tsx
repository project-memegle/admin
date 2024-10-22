import { faker as Faker } from '@faker-js/faker';
import update from 'immutability-helper';
import type { CSSProperties } from 'react';
import { Component } from 'react';

import { Card } from './DnDItem';

const style: CSSProperties = {
    width: 400,
};

interface CardItem {
    id: number;
    text: string;
}

export interface CardState {
    cardsById: Record<string, CardItem>;
    cardsByIndex: CardItem[];
}

function buildCardData() {
    const cardsById: Record<string, CardItem> = {};
    const cardsByIndex: CardItem[] = [];

    for (let i = 0; i < 9; i += 1) {
        const card = {
            id: i,
            text: Faker.internet.displayName(),
        };
        cardsById[card.id] = card;
        cardsByIndex[i] = card;
    }

    return { cardsById, cardsByIndex };
}

class DnDContainer extends Component<{}, CardState> {
    constructor(props: {}) {
        super(props);
        this.state = buildCardData();
    }

    moveCard = (dragIndex: number, hoverIndex: number) => {
        const { cardsByIndex } = this.state;
        const dragCard = cardsByIndex[dragIndex];

        this.setState(
            update(this.state, {
                cardsByIndex: {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                },
            })
        );
    };

    render() {
        const { cardsByIndex } = this.state;

        return (
            <div style={style}>
                {cardsByIndex.map((card, index) => (
                    <Card
                        key={card.id}
                        index={index}
                        id={card.id}
                        text={card.text}
                        moveCard={this.moveCard}
                    />
                ))}
            </div>
        );
    }
}

export default DnDContainer;
