import React, { useState } from "react";
import { BOARD_SIZE, NUMBER_IN_ROW } from "../constants/index";
import { Form, Label, Col, Input, FormGroup, Row, Button } from "reactstrap";

const GameForm = ({ game: initialGame, setData }) => {
    const [game, setGame] = useState(initialGame);
    // let updatedGame;
    const handleChange = (e) => {
        const { name } = e.target;
        const change = {
            [name]: e.target.value,
        };
        setGame({ ...game, ...change });
        setData({ ...game, ...change });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(game);
        // onSave(game);
    };

    const handleReset = () => {
        setGame(initialGame);
    };

    const boardSizeItems = BOARD_SIZE.map((item, index) => (
        <option key={index}>{item}</option>
    ));

    const numberInRowItems = NUMBER_IN_ROW.map((item, index) => (
        <option key={index}>{item}</option>
    ));

    return (
        <div>
            <h2 className="mb-4">Tic-Tac-Toe</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className="px-5" sm={6}>
                        <FormGroup>
                            <Label for="boardSize">Borad Size</Label>
                            <Input
                                id="boardSize"
                                name="boardSize"
                                type="select"
                                value={game.boardSize}
                                onChange={handleChange}
                            >
                                {boardSizeItems}
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col className="px-5" sm={6}>
                        <FormGroup>
                            <Label for="numInRow">Number in Row</Label>
                            <Input
                                id="numInRow"
                                name="numInRow"
                                type="select"
                                value={game.numInRow}
                                onChange={handleChange}
                            >
                                {numberInRowItems}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Button size="lg" color="primary">
                            Start Game
                        </Button>
                    </Col>
                    <Col sm={6}>
                        <Button
                            size="lg"
                            color="secondary"
                            onClick={handleReset}
                            type="button"
                        >
                            Reset
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default GameForm;
