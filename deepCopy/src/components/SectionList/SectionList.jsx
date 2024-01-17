import React from "react";
import { List } from "../List/List";
import { CORE_CONCEPTS } from "../../utils/CORE_CONCEPTS";
import { CoreExamples } from "../CoreExamples/CoreExamples";

export function SectionList() {
  return (
    <>
      <CoreExamples title={"Time to get started!"} id={"core-concepts"}>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((element) => (
            <List {...element} key={element.title} />
          ))}
        </ul>
      </CoreExamples>
    </>
  );
}
