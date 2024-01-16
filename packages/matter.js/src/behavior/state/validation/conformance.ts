/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeatureSet, ValueModel } from "../../../model/index.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { astToFunction } from "./conformance-compiler.js";

/**
 * Creates a function that validates a field based on its conformance definition.
 *
 * This is the validator that enforces the presence of mandatory fields.  As such, only invokes {@link nextValidator} if
 * a value is present.
 */
export function createConformanceValidator(
    schema: ValueModel,
    featureMap: ValueModel,
    supportedFeatures: FeatureSet,
    nextValidator?: ValueSupervisor.Validate,
): ValueSupervisor.Validate {
    const validate = astToFunction(schema, featureMap, supportedFeatures);

    return (value, session, options) => {
        validate?.(value, session, options);
        if (value !== undefined) {
            nextValidator?.(value, session, options);
        }
    };
}
