import {test} from 'node:test';
import assert from 'node:assert/strict';
import {greeting} from './greeting.mjs';

test('greets a name', () => assert.equal(greeting('Mark'), 'Hello, Mark!'));
test('greets Labs', () => assert.equal(greeting('Labs'), 'Hello, Labs!'));
test('trims leading and trailing whitespace', () => assert.equal(greeting(' Mark '), 'Hello, Mark!'));
test('empty string throws RangeError', () => assert.throws(() => greeting(''), RangeError));
test('whitespace-only string throws RangeError', () => assert.throws(() => greeting('   '), RangeError));
test('null throws TypeError', () => assert.throws(() => greeting(null), TypeError));
test('number throws TypeError', () => assert.throws(() => greeting(42), TypeError));
