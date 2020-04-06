const { PerformanceObserver, performance } = require('perf_hooks');
const util =require('util')

function generateMemBuff(){
    var memasmFunc = new ArrayBuffer(1048576);
for (var base64ReverseLookup = new Uint8Array(123/*'z'+1*/), i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2);
    if (b64[bLength-2] == '=') --end;
    if (b64[bLength-1] == '=') --end;
    for (; i < bLength; i += 4, j += 3) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j+1 < end) uint8Array[j+1] = b1 << 4 | b2 >> 2;
      if (j+2 < end) uint8Array[j+2] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
var bufferView = new Uint8Array(memasmFunc);
base64DecodeToExistingUint8Array(bufferView, 65536, "dW5pbXBsZW1lbnRlZDogYWxpZ25tZW50IG9mIHR5cGV1bmltcGxlbWVudGVkOiAocmVmbGVjdC5UeXBlKS5FbGVtKClGaWVsZAAAAAAAAAByZWZsZWN0OiBmaWVsZCBpbmRleCBvdXQgb2YgcmFuZ2U8dW5pbXBsZW1lbnRlZD5MZW5OdW1GaWVsZAAAAAAAdW5pbXBsZW1lbnRlZDogc2l6ZSBvZiB0eXBlQm9vbENvbXBsZXhGbG9hdAAAAAAAcmVmbGVjdDogc2xpY2UgaW5kZXggb3V0IG9mIHJhbmdlAAAAAAAAAAAAAAAAAAAAcmVmbGVjdDogc3RyaW5nIGluZGV4IG91dCBvZiByYW5nZUluZGV4SW50AAAAAAAAdW5pbXBsZW1lbnRlZDogKHJlZmxlY3QuVmFsdWUpLkxlbigpAAAAAAAAAAAAAAAAdW5pbXBsZW1lbnRlZDogKHJlZmxlY3QuVmFsdWUpLlBvaW50ZXIoKVBvaW50ZXI8VD5VaW50cGFuaWM6IG91dCBvZiBtZW1vcnkAAAAAAABpbmRleCBvdXQgb2YgcmFuZ2UAAAAAAAAAAAAAAAAAAG5pbCBwb2ludGVyIGRlcmVmZXJlbmNldHJ1ZWZhbHNlaSlOYU4rSW5mLUluZm5pbGNvbXBhcmluZyB1bi1jb21wYXJhYmxlIHR5cGUAAAAAcGFuaWM6IHJ1bnRpbWUgZXJyb3I6IAAAAAAAAAAAAABzbGljZSBvdXQgb2YgcmFuZ2V1bmltcGxlbWVudGVkAPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHxAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwMDAwMDAwMDAwMDAyMDAzQEBARE8fHx8fHx8fHx8fGAv6C/gJ+Qv4CPAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5egAAAAAAAAAAAAAAADAwMDEwMjAzMDQwNTA2MDcwODA5MTAxMTEyMTMxNDE1MTYxNzE4MTkyMDIxMjIyMzI0MjUyNjI3MjgyOTMwMzEzMjMzMzQzNTM2MzczODM5NDA0MTQyNDM0NDQ1NDY0NzQ4NDk1MDUxNTI1MzU0NTU1NjU3NTg1OTYwNjE2MjYzNjQ2NTY2Njc2ODY5NzA3MTcyNzM3NDc1NzY3Nzc4Nzk4MDgxODI4Mzg0ODU4Njg3ODg4OTkwOTE5MjkzOTQ5NTk2OTc5ODk5bWVzc2FnZQBKYXZhU2NyaXB0IGVycm9yOiB1bmRlZmluZWRudWxsYm9vbGVhbm51bWJlcnN0cmluZ3N5bWJvbG9iamVjdGZ1bmN0aW9uAAAAAAAAAAAAAHN5c2NhbGwvanM6IFZhbHVlLkNhbGw6IHByb3BlcnR5IAAAAAAAAAAAAAAAAAAAACBpcyBub3QgYSBmdW5jdGlvbiwgZ290IFZhbHVlLkNhbGxWYWx1ZS5HZXRWYWx1ZS5JbmRleFZhbHVlLkludFZhbHVlLkludm9rZVZhbHVlLlNldFZhbHVlLlNldEluZGV4PHVuZGVmaW5lZD48bnVsbD48Ym9vbGVhbjogPG51bWJlcjogPjxzeW1ib2w+PG9iamVjdD48ZnVuY3Rpb24+YmFkIHR5cGUAAAAAAAAAVmFsdWVPZjogaW52YWxpZCB2YWx1ZV9wZW5kaW5nRXZlbnRpZHRoaXNhcmdzcmVzdWx0Y29uc29sZQAAAAAAAGNhbGwgdG8gcmVsZWFzZWQgZnVuY3Rpb25lcnJvck9iamVjdEFycmF5cHJvY2Vzc2ZzY29uc3RhbnRzVWludDhBcnJheU9fV1JPTkxZT19SRFdST19DUkVBVE9fVFJVTkNPX0FQUEVORE9fRVhDTO+/vTAxMjM0NTY3ODlhYmNkZWYKUG9va3kgc2F5cyBoaSEKAAAAAAAAAAAAAAAAAAByZWZsZWN0OiBjYWxsIG9mIHJlZmxlY3QuVmFsdWUuAHJlZmxlY3Q6IGNhbGwgb2YgcmVmbGVjdC5UeXBlLiBvbiBpbnZhbGlkIHR5cGUAAHN5c2NhbGwvanM6IGNhbGwgb2YgIG9uIAAAAAAAAAAAdG9kbzogYmxvY2sgb24gbG9ja2VkIG11dGV4AAAAAABzeW5jOiB1bmxvY2sgb2YgdW5sb2NrZWQgTXV0ZXhkLm54ICE9IDAAAAAAAAAAAABzdHJpbmdzLkJ1aWxkZXIuR3JvdzogbmVnYXRpdmUgY291bnQAAAAAAAAAAAAAAABzdHJpbmdzOiBpbGxlZ2FsIHVzZSBvZiBub24temVybyBCdWlsZGVyIGNvcGllZCBieSB2YWx1ZQAAAAAAAAAAAAAAAAQAAAAIAAAAEAAAABAAAAAUAAAAAwAAABgAAAApAAAABAAAABYIEIABAAAAAQBWAAEFHwQCBCIKBIQBEQEEIgoBACIWBQAJGABJGgAEHAAWHwDOASMGAAQsAAQxAIcEOwCHBEAAswJFALMCSwNyZWYFVmFsdWUGTWV0aG9kBFR5cGUBcwFoAXgCbngDbGVuCGZ1bmN0aW9uBHNpemUJYmxvY2tzaXplBG9wYWQEaXBhZAVvdXRlcgVpbm5lcg==");
base64DecodeToExistingUint8Array(bufferView, 67704, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
base64DecodeToExistingUint8Array(bufferView, 67776, "IgAAAIALAQAAAAAAAAAAACKuKNeYL4pCzWXvI5FEN3EvO03sz/vAtbzbiYGl27XpOLVI81vCVjkZ0AW28RHxWZtPGa+kgj+SGIFt2tVeHKtCAgOjmKoH2L5vcEUBW4MSjLLkTr6FMSTitP/Vw30MVW+Je/J0Xb5ysZYWO/6x3oA1Esclpwbcm5Qmac908ZvB0krxnsFpm+TjJU84hke+77XVjIvGncEPZZysd8yhDCR1AitZbyzpLYPkpm6qhHRK1PtBvdypsFy1UxGD2oj5dqvfZu5SUT6YEDK0LW3GMag/IfuYyCcDsOQO777Hf1m/wo+oPfML4MYlpwqTR5Gn1W+CA+BRY8oGcG4OCmcpKRT8L9JGhQq3JybJJlw4IRsu7SrEWvxtLE3fs5WdEw04U95jr4tUcwplqLJ3PLsKanbmru1HLsnCgTs1ghSFLHKSZAPxTKHov6IBMEK8S2YaqJGX+NBwi0vCML5UBqNRbMcYUu/WGeiS0RCpZVUkBpnWKiBxV4U1DvS40bsycKBqEMjQ0rgWwaQZU6tBUQhsNx6Z647fTHdIJ6hIm+G1vLA0Y1rJxbMMHDnLikHjSqrYTnPjY3dPypxbo7iy1vNvLmj8su9d7oKPdGAvF0NvY6V4cqvwoRR4yITsOWQaCALHjCgeYyP6/76Q6b2C3utsUKQVecay96P5vitTcuPyeHHGnGEm6s4+J8oHwsAhx7iG0R7r4M3WfdrqeNFu7n9PffW6bxdyqmfwBqaYyKLFfWMKrg35vgSYPxEbRxwTNQtxG4R9BCP1d9sokyTHQHuryjK8vskVCr6ePEwNEJzEZx1DtkI+y77UxUwqfmX8nCl/Wez61jqrb8tfF1hHSowZRGwJAA0AAQAgAIUAZQCgAIAW4BUAIAogAQAoICkgAQAvIF8gMAAAMAAwAQAAAAAAAAAAAAAAlAgBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIAABQCwEABwAAAAcAAAAAAAAAAAAAAAAAAAACAAAAAgAAAAEAAAADAAAAWwk0iQM=");
return memasmFunc
}

//// Generating in-class vars
var TextEncoder = util.TextEncoder
var TextDecoder = util.TextDecoder
let memory = generateMemBuff()
let _values = [NaN, 0, null, true, !1, global, memory, {}]
let _refs = new Map
var b = new TextEncoder("utf-8")
, e = new TextDecoder("utf-8")
, g = [];

////////
function c(){
    return new DataView(memory)
}
function f(b, flag=null) {
    if (!flag){
        var d = c().getFloat64(b, true);
        if (0 !== d) {
            if (!isNaN(d)){
                return d;
            }
            b = c().getUint32(b, true);
      
            return _values[b]
        }
    }else{
        var d = c().getFloat64(b, true);
        if (0 !== d) {
            if (!isNaN(d)){
                return d;
            }
            logger2('right there')
            b = c().getUint32(b, true);
            return a._values[b]
        }
    }
    
}
function d(b, d) {
  if ("number" === typeof d)
      isNaN(d) ? (c().setUint32(b + 4, 2146959360, true),
      c().setUint32(b, 0, true)) : 0 === d ? (c().setUint32(b + 4, 2146959360, true),
      c().setUint32(b, 1, true)) : c().setFloat64(b, d, true);
  else {
      switch (d) {
      case void 0:
          c().setFloat64(b, 0, true);
          return;
      case null:
          c().setUint32(b + 4, 2146959360, true);
          c().setUint32(b, 2, true);
          return;
      case true:
          c().setUint32(b + 4, 2146959360, true);
          c().setUint32(b, 3, true);
          return;
      case !1:
          c().setUint32(b + 4, 2146959360, true);
          c().setUint32(b, 4, true);z
          return
      }
      var f = a._refs.get(d);
      void 0 === f && (f = a._values.length,
      _values.push(d),
      _refs.set(d, f));
      var e = 0;
      switch (typeof d) {
      case "string":
          e = 1;
          break;
      case "symbol":
          e = 2;
          break;
      case "function":
          e = 3
      }
      c().setUint32(b + 4, 2146959360 | e, true);
      c().setUint32(b, f, true)
  }
}
function m(a, b, c) {
    c = Array(b);
    for (var d = 0; d < b; d++)
        c[d] = f(a + 8 * d);
    return c
}
function  l(b, c) {
    return e.decode(new DataView(a._inst.exports.memory.buffer,b,c))
}
let t = Date.now() - performance.now();


/////// IMPORT FUNCTIONS 

function fd_write(a, b, d, f) {
    if (1 == a)
    for (a = 0; a < d; a++) {
        var k = b + 8 * a
          , q = c().getUint32(k + 0, true);
        k = c().getUint32(k + 4, true);
        for (var h = 0; h < k; h++) {
            var p = c().getUint8(q + h);
            13 != p && (10 == p ? (p = e.decode(new Uint8Array(g)),
            g = [],
            console.log(p)) : g.push(p))
        }
    }
    else
        console.error("invalid file descriptor:", a);
    c().setUint32(f, 0, true);
    return 0
}
// syscall/js.valueLength
function syscall_js_valueLength(a){
    return f(a).length
}
//syscall/js.valueIndex
function syscall_js_valueIndex(a,b,c){
    d(a, Reflect.get(f(b), c))
}
//runtime.ticks
function runtime_ticks(){
    return t + performance.now()
}
//runtime.sleepTicks
function runtime_sleepTicks(){
    // setTimeout(go_scheduler, b)
}
//syscall/js.valueCall 1390
function syscall_js_valueCall(a, b, e, g, h, n, v){
    b = f(b)
    e = l(e, g);
    h = m(h, n, v);
    try {
        if (!b){
            var k = Reflect.get(crypto, e);
        }else{
            var k = Reflect.get(b, e);
        }
        d(a, Reflect.apply(k, b, h));
        c().setUint8(a + 8, 1)
    } catch (x) {
        d(a, x),
        c().setUint8(a + 8, 0)
    }
}
//syscall/js.valueGet
function syscall_js_valueGet(a, b, c, e){
    c = l(c, e);
    b = f(b);
    b = Reflect.get(b, c);
    d(a, b)
}
//syscall/js.valueNew
function syscall_js_valueNew(a,b,e,g,h){
    b = f(b);
    e = m(e, g, h);
    
    try {
        d(a, Reflect.construct(b, e)),
        c().setUint8(a + 8, 1)
    } catch (u) {
        d(a, u),
        c().setUint8(a + 8, 0)
    }
}
//syscall/js.valueSet
function syscall_js_valueSet(a,b,c,d){
    a = f(a);
    b = l(b, c);
    d = f(d);
    // console.log('_ticket: ' + d.replace('_ticket=', '').replace(';path=/',''))
    Reflect.set(a, b, d)
}
//syscall/js.valueSetIndex
function syscall_js_valueSetIndex(a,b,c){
    Reflect.set(f(a), b, f(c))
}
//syscall/js.stringVal
function syscall_js_stringVal(a,b,c){
    b = l(b, c);
    d(a, b)
}
//syscall/js.valuePrepareString
function syscall_js_valuePrepareString(a, e){
    e = String(f(e));
    e = b.encode(e);
    d(a, e);
    a += 8;
    e = e.length;
    c().setUint32(a + 0, e, true);
    c().setUint32(a + 4, Math.floor(e / 4294967296), true)
}
//syscall/js.valueLoadString
function syscall_js_valueLoadString(b, c, d, e){
    b = f(b);
    (new Uint8Array(a._inst.exports.memory.buffer,c,d)).set(b)
}
var tempRet0 = 0;
var setTempRet0 = function(value) {
  tempRet0 = value;
}
var getTempRet0 = function() {
  return tempRet0;
}
