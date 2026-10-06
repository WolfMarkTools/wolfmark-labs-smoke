import {test} from 'node:test';
import assert from 'node:assert/strict';
import {greeting, welcome} from './greeting.mjs';

test('greets a name', () => assert.equal(greeting('Mark'), 'Hello, Mark!'));

test('greeting behaviour is unchanged', () => {
  assert.equal(greeting('Mark'), 'Hello, Mark!');
  assert.equal(greeting(' Ada '), 'Hello,  Ada !');
});

test('welcomes an ordinary name', () => {
  assert.equal(welcome('Mark'), 'Welcome, Mark!');
});

test('welcomes a whitespace-padded name trimmed', () => {
  assert.equal(welcome('  Ada  '), 'Welcome, Ada!');
  assert.equal(welcome('\tGrace\n'), 'Welcome, Grace!');
});

test('welcome rejects empty and whitespace-only strings with RangeError', () => {
  assert.throws(() => welcome(''), RangeError);
  assert.throws(() => welcome('   '), RangeError);
  assert.throws(() => welcome('\t\n '), RangeError);
});

test('welcome rejects non-string inputs with TypeError', () => {
  assert.throws(() => welcome(undefined), TypeError);
  assert.throws(() => welcome(null), TypeError);
  assert.throws(() => welcome(42), TypeError);
  assert.throws(() => welcome({}), TypeError);
  assert.throws(() => welcome(['Mark']), TypeError);
});
