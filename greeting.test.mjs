import {test} from 'node:test';
import assert from 'node:assert/strict';
import {greeting} from './greeting.mjs';
test('greets a name', () => assert.equal(greeting('Mark'), 'Hello, Mark!'));
