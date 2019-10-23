import React from "react";
import { Segment } from "semantic-ui-react";

import CounterDisplay from "../components/CounterDisplay";
import CounterButtons from "../components/CounterButtons";
import { useCounterContext } from "../context/CounterContext";

export default function Counter() {
    return (
        <useCounterContext.Provider>
            <h3>Counter</h3>
            <Segment textAlign="center">
                <CounterDisplay/>
                <CounterButtons/>
            </Segment>
        </useCounterContext.Provider>
    );
}