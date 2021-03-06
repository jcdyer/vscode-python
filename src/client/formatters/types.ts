// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Uri } from 'vscode';
import { IFormattingSettings } from '../common/configSettings';
import { ExecutionInfo, Product } from '../common/types';

export const IFormatterHelper = Symbol('IFormatterHelper');

export type FormatterId = 'autopep8' | 'yapf';

export type FormatterSettingsPropertyNames = {
    argsName: keyof IFormattingSettings;
    pathName: keyof IFormattingSettings;
};

export interface IFormatterHelper {
    translateToId(formatter: Product): FormatterId;
    getSettingsPropertyNames(formatter: Product): FormatterSettingsPropertyNames;
    getExecutionInfo(formatter: Product, customArgs: string[], resource?: Uri): ExecutionInfo;
}
