import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🪁" | "🎄" | "🥳" | "🎂" | "🪔";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎂");
    const alphabet = ["🎂", "🎄", "🪔", "🥳", "🪁"];
    const year = ["🥳", "🪁", "🎂", "🪔", "🎄"];

    function alphNext(current_holidy: string): string {
        const index = alphabet.findIndex(
            (actual_holidy: string): boolean => current_holidy === actual_holidy
        );
        if (index !== 4) {
            return alphabet[index + 1];
        } else {
            return alphabet[0];
        }
    }

    function nextYear(current_holiday: string): string {
        const index = year.findIndex(
            (actual_holiday: string): boolean =>
                current_holiday === actual_holiday
        );
        if (index !== 4) {
            return year[index + 1];
        } else {
            return year[0];
        }
    }
    return (
        <div>
            <div>Holiday: {holiday} </div>
            <div>
                <Button onClick={() => setHoliday(alphNext(holiday))}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => setHoliday(nextYear(holiday))}>
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
