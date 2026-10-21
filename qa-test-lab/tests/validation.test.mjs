import test from 'node:test';import assert from 'node:assert/strict';import {validateRegistration} from '../validation.mjs';
const good={name:'Alex Morgan',email:'alex@example.com',password:'securePass123',confirm:'securePass123'};
test('accepts valid registration',()=>assert.equal(validateRegistration(good).valid,true));
test('rejects empty name',()=>assert.match(validateRegistration({...good,name:''}).errors.join(' '),/name/i));
test('rejects malformed email',()=>assert.match(validateRegistration({...good,email:'not-an-email'}).errors.join(' '),/valid email/i));
test('rejects short password',()=>assert.match(validateRegistration({...good,password:'123',confirm:'123'}).errors.join(' '),/8 characters/i));
test('rejects mismatched passwords',()=>assert.match(validateRegistration({...good,confirm:'different'}).errors.join(' '),/do not match/i));
