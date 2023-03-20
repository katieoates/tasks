import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface Color {
    setColor: (newColor: number) => void;
    color: number;
}

function ChangeColor({ color, setColor }: Color): JSX.Element {
    //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button onClick={() => setColor((1 + color) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ color }: Color): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [color, setColor] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor color={color} setColor={setColor}></ChangeColor>
                <ColorPreview color={color} setColor={setColor}></ColorPreview>
            </div>
        </div>
    );
}
