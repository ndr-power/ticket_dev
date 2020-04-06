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


  var scratchBuffer = new ArrayBuffer(8);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      
  function legalimport$wasm2js_scratch_load_i64() {
    if (typeof setTempRet0 === 'function') setTempRet0(i32ScratchView[1]);
    return i32ScratchView[0];
  }
      
  function legalimport$wasm2js_scratch_store_i64(low, high) {
    i32ScratchView[0] = low;
    i32ScratchView[1] = high;
  }
      
  function wasm2js_scratch_load_f32() {
    return f32ScratchView[0];
  }
      
function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 var fimport$0 = env.fd_write;
 var fimport$1 = env.syscall_js_valueLength;
 var fimport$2 = env.syscall_js_valueIndex;
 var fimport$3 = env.runtime_ticks;
 var fimport$4 = env.runtime_sleepTicks;
 var fimport$5 = env.syscall_js_valueCall;
 var fimport$6 = env.syscall_js_valueGet;
 var fimport$7 = env.syscall_js_valueNew;
 var fimport$8 = env.syscall_js_valueSet;
 var fimport$9 = env.syscall_js_valueSetIndex;
 var fimport$10 = env.syscall_js_stringVal;
 var fimport$11 = env.syscall_js_valuePrepareString;
 var fimport$12 = env.syscall_js_valueLoadString;
 var getTempRet0 = env.getTempRet0;
 var global$0 = 65536;
 var global$1 = 67736;
 var global$2 = 68621;
 var global$3 = 67776;
 var global$4 = 68616;
 var global$5 = 67780;
 var global$6 = 65536;
 var global$7 = 68621;
 var global$8 = 1024;
 var i64toi32_i32$HIGH_BITS = 0;
 function $0() {
  
 }
 
 function $1($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $4_1 = 0, $6_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, $6$hi = 0, i64toi32_i32$3 = 0, $5_1 = 0, $14_1 = 0, $104$hi = 0;
  label$1 : {
   if (!$2_1) {
    break label$1
   }
   HEAP8[$0_1 >> 0] = $1_1;
   $3_1 = $2_1 + $0_1 | 0;
   HEAP8[($3_1 + -1 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 3 >>> 0) {
    break label$1
   }
   HEAP8[($0_1 + 2 | 0) >> 0] = $1_1;
   HEAP8[($0_1 + 1 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -2 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 7 >>> 0) {
    break label$1
   }
   HEAP8[($0_1 + 3 | 0) >> 0] = $1_1;
   HEAP8[($3_1 + -4 | 0) >> 0] = $1_1;
   if ($2_1 >>> 0 < 9 >>> 0) {
    break label$1
   }
   $4_1 = (0 - $0_1 | 0) & 3 | 0;
   $3_1 = $0_1 + $4_1 | 0;
   $1_1 = Math_imul($1_1 & 255 | 0, 16843009);
   HEAP32[$3_1 >> 2] = $1_1;
   $4_1 = ($2_1 - $4_1 | 0) & -4 | 0;
   $2_1 = $3_1 + $4_1 | 0;
   HEAP32[($2_1 + -4 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 9 >>> 0) {
    break label$1
   }
   HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 4 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -8 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -12 | 0) >> 2] = $1_1;
   if ($4_1 >>> 0 < 25 >>> 0) {
    break label$1
   }
   HEAP32[($3_1 + 24 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 20 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 16 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 12 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -16 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -20 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -24 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + -28 | 0) >> 2] = $1_1;
   $5_1 = $3_1 & 4 | 0 | 24 | 0;
   $2_1 = $4_1 - $5_1 | 0;
   if ($2_1 >>> 0 < 32 >>> 0) {
    break label$1
   }
   i64toi32_i32$0 = 0;
   $6_1 = $1_1;
   $6$hi = i64toi32_i32$0;
   i64toi32_i32$2 = $1_1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 32;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $14_1 = 0;
   } else {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $14_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
   $104$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $6$hi;
   i64toi32_i32$1 = $104$hi;
   i64toi32_i32$0 = $14_1;
   i64toi32_i32$2 = $6$hi;
   i64toi32_i32$3 = $6_1;
   i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
   $6_1 = i64toi32_i32$0 | $6_1 | 0;
   $6$hi = i64toi32_i32$2;
   $1_1 = $3_1 + $5_1 | 0;
   label$2 : while (1) {
    i64toi32_i32$2 = $6$hi;
    i64toi32_i32$0 = $1_1;
    HEAP32[$1_1 >> 2] = $6_1;
    HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$2;
    i64toi32_i32$0 = $1_1 + 24 | 0;
    HEAP32[i64toi32_i32$0 >> 2] = $6_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
    i64toi32_i32$0 = $1_1 + 16 | 0;
    HEAP32[i64toi32_i32$0 >> 2] = $6_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
    i64toi32_i32$0 = $1_1 + 8 | 0;
    HEAP32[i64toi32_i32$0 >> 2] = $6_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$2;
    $1_1 = $1_1 + 32 | 0;
    $2_1 = $2_1 + -32 | 0;
    if ($2_1 >>> 0 > 31 >>> 0) {
     continue label$2
    }
    break label$2;
   };
  }
  return $0_1 | 0;
 }
 
 function $2($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0, $10_1 = 0, $9_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $12_1 = 0, i64toi32_i32$1 = 0;
  label$1 : {
   label$2 : {
    if (!$2_1) {
     break label$2
    }
    if (!($1_1 & 3 | 0)) {
     break label$2
    }
    $3_1 = $0_1;
    label$3 : while (1) {
     HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
     $4_1 = $2_1 + -1 | 0;
     $3_1 = $3_1 + 1 | 0;
     $1_1 = $1_1 + 1 | 0;
     if (($2_1 | 0) == (1 | 0)) {
      break label$1
     }
     $2_1 = $4_1;
     if ($1_1 & 3 | 0) {
      continue label$3
     }
     break label$1;
    };
   }
   $4_1 = $2_1;
   $3_1 = $0_1;
  }
  label$4 : {
   label$5 : {
    $2_1 = $3_1 & 3 | 0;
    if ($2_1) {
     break label$5
    }
    label$6 : {
     label$7 : {
      if ($4_1 >>> 0 >= 16 >>> 0) {
       break label$7
      }
      $2_1 = $4_1;
      break label$6;
     }
     $2_1 = $4_1 + -16 | 0;
     label$8 : while (1) {
      HEAP32[$3_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
      HEAP32[($3_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      HEAP32[($3_1 + 8 | 0) >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
      HEAP32[($3_1 + 12 | 0) >> 2] = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
      $3_1 = $3_1 + 16 | 0;
      $1_1 = $1_1 + 16 | 0;
      $4_1 = $4_1 + -16 | 0;
      if ($4_1 >>> 0 > 15 >>> 0) {
       continue label$8
      }
      break label$8;
     };
    }
    label$9 : {
     if (!($2_1 & 8 | 0)) {
      break label$9
     }
     i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
     HEAP32[$3_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
     HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$1;
     $1_1 = $1_1 + 8 | 0;
     $3_1 = $3_1 + 8 | 0;
    }
    label$10 : {
     if (!($2_1 & 4 | 0)) {
      break label$10
     }
     HEAP32[$3_1 >> 2] = HEAP32[$1_1 >> 2] | 0;
     $1_1 = $1_1 + 4 | 0;
     $3_1 = $3_1 + 4 | 0;
    }
    label$11 : {
     if (!($2_1 & 2 | 0)) {
      break label$11
     }
     HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
     HEAP8[($3_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
     $3_1 = $3_1 + 2 | 0;
     $1_1 = $1_1 + 2 | 0;
    }
    if (!($2_1 & 1 | 0)) {
     break label$4
    }
    HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    return $0_1 | 0;
   }
   label$12 : {
    if ($4_1 >>> 0 < 32 >>> 0) {
     break label$12
    }
    $2_1 = $2_1 + -1 | 0;
    if ($2_1 >>> 0 > 2 >>> 0) {
     break label$12
    }
    label$13 : {
     switch ($2_1 | 0) {
     default:
      HEAP8[($3_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
      $5_1 = HEAP32[$1_1 >> 2] | 0;
      HEAP8[$3_1 >> 0] = $5_1;
      HEAP8[($3_1 + 2 | 0) >> 0] = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
      $6_1 = $4_1 + -3 | 0;
      $7_1 = $3_1 + 3 | 0;
      $8_1 = ($4_1 + -20 | 0) & -16 | 0;
      $2_1 = 0;
      label$16 : while (1) {
       $3_1 = $7_1 + $2_1 | 0;
       $9_1 = $1_1 + $2_1 | 0;
       $10_1 = HEAP32[($9_1 + 4 | 0) >> 2] | 0;
       HEAP32[$3_1 >> 2] = $10_1 << 8 | 0 | ($5_1 >>> 24 | 0) | 0;
       $5_1 = HEAP32[($9_1 + 8 | 0) >> 2] | 0;
       HEAP32[($3_1 + 4 | 0) >> 2] = $5_1 << 8 | 0 | ($10_1 >>> 24 | 0) | 0;
       $10_1 = HEAP32[($9_1 + 12 | 0) >> 2] | 0;
       HEAP32[($3_1 + 8 | 0) >> 2] = $10_1 << 8 | 0 | ($5_1 >>> 24 | 0) | 0;
       $5_1 = HEAP32[($9_1 + 16 | 0) >> 2] | 0;
       HEAP32[($3_1 + 12 | 0) >> 2] = $5_1 << 8 | 0 | ($10_1 >>> 24 | 0) | 0;
       $2_1 = $2_1 + 16 | 0;
       $6_1 = $6_1 + -16 | 0;
       if ($6_1 >>> 0 > 16 >>> 0) {
        continue label$16
       }
       break label$16;
      };
      $3_1 = $7_1 + $2_1 | 0;
      $1_1 = ($1_1 + $2_1 | 0) + 3 | 0;
      $4_1 = ($4_1 - $8_1 | 0) + -19 | 0;
      break label$12;
     case 1:
      $5_1 = HEAP32[$1_1 >> 2] | 0;
      HEAP8[$3_1 >> 0] = $5_1;
      HEAP8[($3_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
      $6_1 = $4_1 + -2 | 0;
      $7_1 = $3_1 + 2 | 0;
      $8_1 = ($4_1 + -20 | 0) & -16 | 0;
      $2_1 = 0;
      label$17 : while (1) {
       $3_1 = $7_1 + $2_1 | 0;
       $9_1 = $1_1 + $2_1 | 0;
       $10_1 = HEAP32[($9_1 + 4 | 0) >> 2] | 0;
       HEAP32[$3_1 >> 2] = $10_1 << 16 | 0 | ($5_1 >>> 16 | 0) | 0;
       $5_1 = HEAP32[($9_1 + 8 | 0) >> 2] | 0;
       HEAP32[($3_1 + 4 | 0) >> 2] = $5_1 << 16 | 0 | ($10_1 >>> 16 | 0) | 0;
       $10_1 = HEAP32[($9_1 + 12 | 0) >> 2] | 0;
       HEAP32[($3_1 + 8 | 0) >> 2] = $10_1 << 16 | 0 | ($5_1 >>> 16 | 0) | 0;
       $5_1 = HEAP32[($9_1 + 16 | 0) >> 2] | 0;
       HEAP32[($3_1 + 12 | 0) >> 2] = $5_1 << 16 | 0 | ($10_1 >>> 16 | 0) | 0;
       $2_1 = $2_1 + 16 | 0;
       $6_1 = $6_1 + -16 | 0;
       if ($6_1 >>> 0 > 17 >>> 0) {
        continue label$17
       }
       break label$17;
      };
      $3_1 = $7_1 + $2_1 | 0;
      $1_1 = ($1_1 + $2_1 | 0) + 2 | 0;
      $4_1 = ($4_1 - $8_1 | 0) + -18 | 0;
      break label$12;
     case 2:
      break label$13;
     };
    }
    $5_1 = HEAP32[$1_1 >> 2] | 0;
    HEAP8[$3_1 >> 0] = $5_1;
    $6_1 = $4_1 + -1 | 0;
    $7_1 = $3_1 + 1 | 0;
    $8_1 = ($4_1 + -20 | 0) & -16 | 0;
    $2_1 = 0;
    label$18 : while (1) {
     $3_1 = $7_1 + $2_1 | 0;
     $9_1 = $1_1 + $2_1 | 0;
     $10_1 = HEAP32[($9_1 + 4 | 0) >> 2] | 0;
     HEAP32[$3_1 >> 2] = $10_1 << 24 | 0 | ($5_1 >>> 8 | 0) | 0;
     $5_1 = HEAP32[($9_1 + 8 | 0) >> 2] | 0;
     HEAP32[($3_1 + 4 | 0) >> 2] = $5_1 << 24 | 0 | ($10_1 >>> 8 | 0) | 0;
     $10_1 = HEAP32[($9_1 + 12 | 0) >> 2] | 0;
     HEAP32[($3_1 + 8 | 0) >> 2] = $10_1 << 24 | 0 | ($5_1 >>> 8 | 0) | 0;
     $5_1 = HEAP32[($9_1 + 16 | 0) >> 2] | 0;
     HEAP32[($3_1 + 12 | 0) >> 2] = $5_1 << 24 | 0 | ($10_1 >>> 8 | 0) | 0;
     $2_1 = $2_1 + 16 | 0;
     $6_1 = $6_1 + -16 | 0;
     if ($6_1 >>> 0 > 18 >>> 0) {
      continue label$18
     }
     break label$18;
    };
    $3_1 = $7_1 + $2_1 | 0;
    $1_1 = ($1_1 + $2_1 | 0) + 1 | 0;
    $4_1 = ($4_1 - $8_1 | 0) + -17 | 0;
   }
   label$19 : {
    if (!($4_1 & 16 | 0)) {
     break label$19
    }
    $12_1 = HEAPU8[$1_1 >> 0] | 0 | ((HEAPU8[($1_1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$3_1 >> 0] = $12_1;
    HEAP8[($3_1 + 1 | 0) >> 0] = $12_1 >>> 8 | 0;
    HEAP8[($3_1 + 2 | 0) >> 0] = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
    HEAP8[($3_1 + 3 | 0) >> 0] = HEAPU8[($1_1 + 3 | 0) >> 0] | 0;
    HEAP8[($3_1 + 4 | 0) >> 0] = HEAPU8[($1_1 + 4 | 0) >> 0] | 0;
    HEAP8[($3_1 + 5 | 0) >> 0] = HEAPU8[($1_1 + 5 | 0) >> 0] | 0;
    HEAP8[($3_1 + 6 | 0) >> 0] = HEAPU8[($1_1 + 6 | 0) >> 0] | 0;
    HEAP8[($3_1 + 7 | 0) >> 0] = HEAPU8[($1_1 + 7 | 0) >> 0] | 0;
    HEAP8[($3_1 + 8 | 0) >> 0] = HEAPU8[($1_1 + 8 | 0) >> 0] | 0;
    HEAP8[($3_1 + 9 | 0) >> 0] = HEAPU8[($1_1 + 9 | 0) >> 0] | 0;
    HEAP8[($3_1 + 10 | 0) >> 0] = HEAPU8[($1_1 + 10 | 0) >> 0] | 0;
    HEAP8[($3_1 + 11 | 0) >> 0] = HEAPU8[($1_1 + 11 | 0) >> 0] | 0;
    HEAP8[($3_1 + 12 | 0) >> 0] = HEAPU8[($1_1 + 12 | 0) >> 0] | 0;
    HEAP8[($3_1 + 13 | 0) >> 0] = HEAPU8[($1_1 + 13 | 0) >> 0] | 0;
    HEAP8[($3_1 + 14 | 0) >> 0] = HEAPU8[($1_1 + 14 | 0) >> 0] | 0;
    HEAP8[($3_1 + 15 | 0) >> 0] = HEAPU8[($1_1 + 15 | 0) >> 0] | 0;
    $3_1 = $3_1 + 16 | 0;
    $1_1 = $1_1 + 16 | 0;
   }
   label$20 : {
    if (!($4_1 & 8 | 0)) {
     break label$20
    }
    HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    HEAP8[($3_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    HEAP8[($3_1 + 2 | 0) >> 0] = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
    HEAP8[($3_1 + 3 | 0) >> 0] = HEAPU8[($1_1 + 3 | 0) >> 0] | 0;
    HEAP8[($3_1 + 4 | 0) >> 0] = HEAPU8[($1_1 + 4 | 0) >> 0] | 0;
    HEAP8[($3_1 + 5 | 0) >> 0] = HEAPU8[($1_1 + 5 | 0) >> 0] | 0;
    HEAP8[($3_1 + 6 | 0) >> 0] = HEAPU8[($1_1 + 6 | 0) >> 0] | 0;
    HEAP8[($3_1 + 7 | 0) >> 0] = HEAPU8[($1_1 + 7 | 0) >> 0] | 0;
    $3_1 = $3_1 + 8 | 0;
    $1_1 = $1_1 + 8 | 0;
   }
   label$21 : {
    if (!($4_1 & 4 | 0)) {
     break label$21
    }
    HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    HEAP8[($3_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    HEAP8[($3_1 + 2 | 0) >> 0] = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
    HEAP8[($3_1 + 3 | 0) >> 0] = HEAPU8[($1_1 + 3 | 0) >> 0] | 0;
    $3_1 = $3_1 + 4 | 0;
    $1_1 = $1_1 + 4 | 0;
   }
   label$22 : {
    if (!($4_1 & 2 | 0)) {
     break label$22
    }
    HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
    HEAP8[($3_1 + 1 | 0) >> 0] = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
    $3_1 = $3_1 + 2 | 0;
    $1_1 = $1_1 + 2 | 0;
   }
   if (!($4_1 & 1 | 0)) {
    break label$4
   }
   HEAP8[$3_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
  }
  return $0_1 | 0;
 }
 
 function $3($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $4_1 = 0, $3_1 = 0, i64toi32_i32$0 = 0, $2_1 = 0, $9_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0;
  $1_1 = global$0 - 80 | 0;
  global$0 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 68 | 0) >> 2] = 0;
  HEAP32[($1_1 + 72 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 60 | 0) >> 2] = 0;
  HEAP32[($1_1 + 64 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 52 | 0) >> 2] = 5;
  HEAP32[($1_1 + 56 | 0) >> 2] = i64toi32_i32$0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 48 | 0;
  HEAP32[($1_1 + 48 | 0) >> 2] = $2_1;
  label$1 : {
   label$2 : {
    label$3 : while (1) {
     $3_1 = ($4($0_1 | 0) | 0) + -1 | 0;
     if ($3_1 >>> 0 > 25 >>> 0) {
      break label$2
     }
     $4_1 = 4;
     label$4 : {
      switch ($3_1 | 0) {
      default:
       $4_1 = 1;
       break label$1;
      case 3:
      case 8:
       $4_1 = 2;
       break label$1;
      case 25:
       $5_1 = $5($0_1 | 0) | 0;
       $3_1 = 0;
       $6_1 = $1_1 + 64 | 0;
       $7_1 = $1_1 + 60 | 0;
       $8_1 = $1_1 + 56 | 0;
       $4_1 = 1;
       label$8 : while (1) {
        if (($3_1 | 0) >= ($5_1 | 0)) {
         break label$1
        }
        $6($1_1 + 8 | 0 | 0, $0_1 | 0, $3_1 | 0);
        HEAP32[$6_1 >> 2] = HEAP32[($1_1 + 28 | 0) >> 2] | 0;
        HEAP32[$7_1 >> 2] = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
        HEAP32[$8_1 >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
        $9_1 = $3(HEAP32[($1_1 + 24 | 0) >> 2] | 0 | 0) | 0;
        $4_1 = ($9_1 | 0) > ($4_1 | 0) ? $9_1 : $4_1;
        $3_1 = $3_1 + 1 | 0;
        continue label$8;
       };
      case 1:
      case 4:
      case 5:
      case 6:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 24:
       break label$1;
      case 23:
       break label$2;
      case 22:
       break label$4;
      };
     }
     $0_1 = $7($0_1 | 0) | 0;
     continue label$3;
    };
   }
   $4_1 = $8(8 | 0) | 0;
   HEAP32[($1_1 + 68 | 0) >> 2] = $4_1;
   HEAP32[($1_1 + 72 | 0) >> 2] = $4_1;
   HEAP32[($4_1 + 4 | 0) >> 2] = 32;
   HEAP32[$4_1 >> 2] = 65536;
   $9(34 | 0, $4_1 | 0);
   abort();
  }
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  global$0 = $1_1 + 80 | 0;
  return $4_1 | 0;
 }
 
 function $4($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = $0_1 >>> 1 | 0;
  label$1 : {
   if ($0_1 & 1 | 0) {
    break label$1
   }
   return $1_1 & 31 | 0 | 0;
  }
  return ($1_1 & 7 | 0) + 19 | 0 | 0;
 }
 
 function $5($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$0 = 0, $2_1 = 0;
  $1_1 = global$0 - 32 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 28 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 20 | 0) >> 2] = 0;
  HEAP32[($1_1 + 24 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = 4;
  HEAP32[($1_1 + 16 | 0) >> 2] = i64toi32_i32$0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 8 | 0;
  HEAP32[($1_1 + 8 | 0) >> 2] = $2_1;
  label$1 : {
   if (($4($0_1 | 0) | 0 | 0) == (26 | 0)) {
    break label$1
   }
   $0_1 = $8(8 | 0) | 0;
   HEAP32[(($1_1 + 8 | 0) + 8 | 0) >> 2] = $0_1;
   HEAP32[($1_1 + 20 | 0) >> 2] = $0_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = 8;
   HEAP32[$0_1 >> 2] = 65667;
   $9(5093 | 0, $0_1 | 0);
   abort();
  }
  $0_1 = ($10($0_1 | 0) | 0) + 67552 | 0;
  HEAP32[($1_1 + 24 | 0) >> 2] = $0_1;
  $11($1_1 | 0, $0_1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 28 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
  $0_1 = HEAP32[$1_1 >> 2] | 0;
  global$0 = $1_1 + 32 | 0;
  return $0_1 | 0;
 }
 
 function $6($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $16_1 = 0, $13_1 = 0, $14_1 = 0, $23_1 = 0, $10_1 = 0, $12_1 = 0, $18_1 = 0, $19_1 = 0, $11_1 = 0, $15_1 = 0, $17_1 = 0, $20_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0;
  $3_1 = global$0 - 144 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 140 | 0) >> 2] = 0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 132 | 0) >> 2] = 0;
  HEAP32[($3_1 + 136 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 124 | 0) >> 2] = 0;
  HEAP32[($3_1 + 128 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 116 | 0) >> 2] = 0;
  HEAP32[($3_1 + 120 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 108 | 0) >> 2] = 0;
  HEAP32[($3_1 + 112 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 100 | 0) >> 2] = 0;
  HEAP32[($3_1 + 104 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 92 | 0) >> 2] = 12;
  HEAP32[($3_1 + 96 | 0) >> 2] = i64toi32_i32$0;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1 + 88 | 0;
  HEAP32[($3_1 + 88 | 0) >> 2] = $4_1;
  label$1 : {
   label$2 : {
    label$3 : {
     if (($4($1_1 | 0) | 0 | 0) != (26 | 0)) {
      break label$3
     }
     $1_1 = ($10($1_1 | 0) | 0) + 67552 | 0;
     HEAP32[(($3_1 + 88 | 0) + 16 | 0) >> 2] = $1_1;
     $11($3_1 + 40 | 0 | 0, $1_1 | 0);
     $1_1 = HEAP32[($3_1 + 44 | 0) >> 2] | 0;
     HEAP32[($3_1 + 108 | 0) >> 2] = $1_1;
     if ((HEAP32[($3_1 + 40 | 0) >> 2] | 0) >>> 0 <= $2_1 >>> 0) {
      break label$2
     }
     i64toi32_i32$1 = $3_1 + 56 | 0;
     i64toi32_i32$0 = 0;
     HEAP32[i64toi32_i32$1 >> 2] = 0;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$1 = ($3_1 + 48 | 0) + 16 | 0;
     i64toi32_i32$0 = 0;
     HEAP32[i64toi32_i32$1 >> 2] = 0;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$1 = $3_1 + 69 | 0;
     i64toi32_i32$0 = 0;
     $23_1 = 0;
     HEAP8[i64toi32_i32$1 >> 0] = $23_1;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $23_1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $23_1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $23_1 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     HEAP32[($3_1 + 80 | 0) >> 2] = 0;
     i64toi32_i32$1 = $3_1;
     i64toi32_i32$0 = 0;
     HEAP32[($3_1 + 48 | 0) >> 2] = 0;
     HEAP32[($3_1 + 52 | 0) >> 2] = i64toi32_i32$0;
     HEAP32[($3_1 + 120 | 0) >> 2] = $3_1 + 48 | 0;
     $5_1 = $3_1 + 132 | 0;
     $6_1 = $3_1 + 136 | 0;
     $7_1 = $3_1 + 140 | 0;
     $8_1 = $3_1 + 124 | 0;
     $9_1 = $3_1 + 128 | 0;
     $10_1 = 0;
     $11_1 = 0;
     $12_1 = 0;
     $13_1 = 0;
     $14_1 = 0;
     $15_1 = 0;
     $16_1 = 0;
     $17_1 = 0;
     $18_1 = 0;
     $19_1 = 0;
     $20_1 = 0;
     label$4 : {
      label$5 : while (1) {
       if (($20_1 | 0) > ($2_1 | 0)) {
        break label$4
       }
       if (!$1_1) {
        break label$1
       }
       $16_1 = HEAPU8[$1_1 >> 0] | 0;
       $11($3_1 + 32 | 0 | 0, $1_1 + 1 | 0 | 0);
       $1_1 = HEAP32[($3_1 + 36 | 0) >> 2] | 0;
       HEAP32[$5_1 >> 2] = $1_1;
       $14_1 = HEAP32[($3_1 + 32 | 0) >> 2] | 0;
       HEAP32[($3_1 + 64 | 0) >> 2] = $14_1;
       $12_1 = 0;
       $13_1 = $3($14_1 | 0) | 0;
       $10_1 = (($19_1 + $13_1 | 0) + -1 | 0) & (0 - $13_1 | 0) | 0;
       HEAP32[($3_1 + 80 | 0) >> 2] = $10_1;
       $19_1 = $12($14_1 | 0) | 0;
       $11($3_1 + 24 | 0 | 0, $1_1 | 0);
       $1_1 = HEAP32[($3_1 + 28 | 0) >> 2] | 0;
       HEAP32[$6_1 >> 2] = $1_1;
       $13($3_1 + 16 | 0 | 0, HEAP32[($3_1 + 24 | 0) >> 2] | 0 | 0);
       $18_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
       HEAP32[$7_1 >> 2] = $18_1;
       $11_1 = $16_1 & 1 | 0;
       HEAP8[($3_1 + 76 | 0) >> 0] = $11_1;
       $17_1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
       HEAP32[($3_1 + 52 | 0) >> 2] = $17_1;
       HEAP32[($3_1 + 48 | 0) >> 2] = $18_1;
       $13_1 = 65664;
       label$6 : {
        if (!($16_1 & 2 | 0)) {
         break label$6
        }
        $11($3_1 + 8 | 0 | 0, $1_1 | 0);
        $1_1 = HEAP32[($3_1 + 12 | 0) >> 2] | 0;
        HEAP32[$8_1 >> 2] = $1_1;
        $13($3_1 | 0, HEAP32[($3_1 + 8 | 0) >> 2] | 0 | 0);
        $13_1 = HEAP32[$3_1 >> 2] | 0;
        HEAP32[$9_1 >> 2] = $13_1;
        $12_1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
       }
       $19_1 = $10_1 + $19_1 | 0;
       HEAP32[($3_1 + 72 | 0) >> 2] = $12_1;
       HEAP32[($3_1 + 68 | 0) >> 2] = $13_1;
       $16_1 = $16_1 & 4 | 0;
       $15_1 = $16_1 ? 0 : 15;
       HEAP32[($3_1 + 60 | 0) >> 2] = $15_1;
       $16_1 = $16_1 ? 65664 : 65649;
       HEAP32[($3_1 + 56 | 0) >> 2] = $16_1;
       $20_1 = $20_1 + 1 | 0;
       continue label$5;
      };
     }
     HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
     HEAP32[($0_1 + 32 | 0) >> 2] = $10_1;
     HEAP8[($0_1 + 28 | 0) >> 0] = $11_1 & 1 | 0;
     HEAP32[($0_1 + 24 | 0) >> 2] = $12_1;
     HEAP32[($0_1 + 20 | 0) >> 2] = $13_1;
     HEAP32[($0_1 + 16 | 0) >> 2] = $14_1;
     HEAP32[($0_1 + 12 | 0) >> 2] = $15_1;
     HEAP32[($0_1 + 8 | 0) >> 2] = $16_1;
     HEAP32[($0_1 + 4 | 0) >> 2] = $17_1;
     HEAP32[$0_1 >> 2] = $18_1;
     global$0 = $3_1 + 144 | 0;
     return;
    }
    $1_1 = $8(8 | 0) | 0;
    HEAP32[(($3_1 + 88 | 0) + 8 | 0) >> 2] = $1_1;
    HEAP32[($3_1 + 100 | 0) >> 2] = $1_1;
    HEAP32[($1_1 + 4 | 0) >> 2] = 5;
    HEAP32[$1_1 >> 2] = 65604;
    $9(5093 | 0, $1_1 | 0);
    abort();
   }
   $1_1 = $8(8 | 0) | 0;
   HEAP32[($3_1 + 112 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 116 | 0) >> 2] = $1_1;
   HEAP32[($1_1 + 4 | 0) >> 2] = 33;
   HEAP32[$1_1 >> 2] = 65616;
   $9(34 | 0, $1_1 | 0);
   abort();
  }
  $14();
  abort();
 }
 
 function $7($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$0 = 0, $2_1 = 0, $3_1 = 0;
  $1_1 = global$0 - 32 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 28 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 20 | 0) >> 2] = 0;
  HEAP32[($1_1 + 24 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = 4;
  HEAP32[($1_1 + 16 | 0) >> 2] = i64toi32_i32$0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 8 | 0;
  HEAP32[($1_1 + 8 | 0) >> 2] = $2_1;
  label$1 : {
   $3_1 = ($4($0_1 | 0) | 0) + -19 | 0;
   if ($3_1 >>> 0 > 4 >>> 0) {
    break label$1
   }
   label$2 : {
    switch ($3_1 | 0) {
    default:
     $0_1 = $10($0_1 | 0) | 0;
     HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
     global$0 = $1_1 + 32 | 0;
     return $0_1 | 0;
    case 1:
     break label$1;
    case 4:
     break label$2;
    };
   }
   $0_1 = ($10($0_1 | 0) | 0) + 67544 | 0;
   HEAP32[($1_1 + 16 | 0) >> 2] = $0_1;
   $11($1_1 | 0, $0_1 | 0);
   HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
   HEAP32[($1_1 + 20 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
   $0_1 = HEAP32[$1_1 >> 2] | 0;
   global$0 = $1_1 + 32 | 0;
   return $0_1 | 0;
  }
  $0_1 = $8(8 | 0) | 0;
  HEAP32[($1_1 + 24 | 0) >> 2] = $0_1;
  HEAP32[($1_1 + 28 | 0) >> 2] = $0_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = 36;
  HEAP32[$0_1 >> 2] = 65568;
  $9(34 | 0, $0_1 | 0);
  abort();
 }
 
 function $8($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $6_1 = 0, $5_1 = 0, $3_1 = 0, $4_1 = 0, $1_1 = 0;
  label$1 : {
   if (!$0_1) {
    break label$1
   }
   $1_1 = ($0_1 + 15 | 0) >>> 4 | 0;
   $2_1 = HEAP32[(0 + 67716 | 0) >> 2] | 0;
   $3_1 = $2_1;
   $4_1 = 0;
   $5_1 = 0;
   label$2 : while (1) {
    label$3 : {
     if (($3_1 | 0) != ($2_1 | 0)) {
      break label$3
     }
     $2_1 = $5_1 & 255 | 0;
     $5_1 = 1;
     label$4 : {
      if ($2_1 >>> 0 > 1 >>> 0) {
       break label$4
      }
      label$5 : {
       switch ($2_1 | 0) {
       case 1:
        break label$5;
       default:
        break label$3;
       };
      }
      $6_1 = 0;
      $2_1 = 0;
      label$6 : {
       label$7 : {
        label$8 : while (1) {
         if ($2_1 >>> 0 >= (HEAP32[(0 + 67776 | 0) >> 2] | 0) >>> 0) {
          break label$7
         }
         label$9 : {
          if (!((1 << ($2_1 & 7 | 0) | 0) & (HEAPU8[(($2_1 >>> 3 | 0) + 68616 | 0) >> 0] | 0) | 0)) {
           break label$9
          }
          $5_1 = $6_1 + (HEAP32[(0 + 67780 | 0) >> 2] | 0) | 0;
          if (!$5_1) {
           break label$6
          }
          $42(HEAP32[$5_1 >> 2] | 0 | 0);
         }
         $6_1 = $6_1 + 4 | 0;
         $2_1 = $2_1 + 1 | 0;
         continue label$8;
        };
       }
       $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
       label$10 : while (1) {
        label$11 : {
         if ($2_1) {
          break label$11
         }
         $5_1 = 0;
         $2_1 = 0;
         label$12 : while (1) {
          label$13 : {
           if ($2_1 >>> 0 < (HEAP32[(0 + 67720 | 0) >> 2] | 0) >>> 0) {
            break label$13
           }
           $5_1 = 2;
           break label$3;
          }
          label$14 : {
           $6_1 = (($43($2_1 | 0) | 0) & 255 | 0) + -1 | 0;
           if ($6_1 >>> 0 > 2 >>> 0) {
            break label$14
           }
           label$15 : {
            switch ($6_1 | 0) {
            case 1:
             $6_1 = $5_1 & 1 | 0;
             $5_1 = 0;
             if (!$6_1) {
              break label$14
             }
            default:
             $44($2_1 | 0);
             $5_1 = 1;
             break label$14;
            case 2:
             break label$15;
            };
           }
           $6_1 = ($2_1 >>> 2 | 0) + 68621 | 0;
           if (!$6_1) {
            break label$6
           }
           HEAP8[$6_1 >> 0] = (HEAPU8[$6_1 >> 0] | 0) & ((2 << (($2_1 << 1 | 0) & 6 | 0) | 0) ^ -1 | 0) | 0;
           $5_1 = 0;
          }
          $2_1 = $2_1 + 1 | 0;
          continue label$12;
         };
        }
        $6_1 = $2_1 + 8 | 0;
        $45($6_1 | 0, $6_1 + ((HEAP32[($2_1 + 4 | 0) >> 2] | 0) << 2 | 0) | 0 | 0);
        $2_1 = HEAP32[$2_1 >> 2] | 0;
        continue label$10;
       };
      }
      $14();
      abort();
     }
     $46(65933 | 0, 13 | 0);
     abort();
    }
    label$18 : {
     label$19 : {
      $6_1 = ($3_1 | 0) == (HEAP32[(0 + 67720 | 0) >> 2] | 0 | 0);
      $2_1 = $6_1 ? 0 : $3_1;
      if (!(($43($2_1 | 0) | 0) & 255 | 0)) {
       break label$19
      }
      $3_1 = $2_1 + 1 | 0;
      $4_1 = 0;
      break label$18;
     }
     $3_1 = $2_1 + 1 | 0;
     $4_1 = $6_1 ? 1 : $4_1 + 1 | 0;
     if (($4_1 | 0) != ($1_1 | 0)) {
      break label$18
     }
     HEAP32[(0 + 67716 | 0) >> 2] = $3_1;
     $6_1 = $3_1 - $1_1 | 0;
     $47($6_1 | 0, 1 | 0);
     $2_1 = ($2_1 - $1_1 | 0) + 2 | 0;
     label$20 : {
      label$21 : while (1) {
       if (($2_1 | 0) == (HEAP32[(0 + 67716 | 0) >> 2] | 0 | 0)) {
        break label$20
       }
       $47($2_1 | 0, 2 | 0);
       $2_1 = $2_1 + 1 | 0;
       continue label$21;
      };
     }
     $2_1 = (HEAP32[(0 + 67724 | 0) >> 2] | 0) + ($6_1 << 4 | 0) | 0;
     $35($2_1 | 0, $0_1 | 0);
     return $2_1 | 0;
    }
    $2_1 = HEAP32[(0 + 67716 | 0) >> 2] | 0;
    continue label$2;
   };
  }
  return 67712 | 0;
 }
 
 function $9($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $31(65926 | 0, 7 | 0);
  $32($0_1 | 0, $1_1 | 0);
  $33();
  abort();
 }
 
 function $10($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = $0_1 >>> 5 | 0;
  label$1 : {
   label$2 : {
    if (!($0_1 & 16 | 0)) {
     break label$2
    }
    $0_1 = ($1_1 << 2 | 0) + 67504 | 0;
    if (!$0_1) {
     break label$1
    }
    return HEAP32[$0_1 >> 2] | 0 | 0;
   }
   return $1_1 | 0;
  }
  $14();
  abort();
 }
 
 function $11($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0;
  $2_1 = 0;
  $3_1 = 0;
  label$1 : {
   label$2 : while (1) {
    if (!$1_1) {
     break label$1
    }
    $4_1 = HEAP8[$1_1 >> 0] | 0;
    $2_1 = ($4_1 & 127 | 0) << $3_1 | 0 | $2_1 | 0;
    $5_1 = $1_1 + 1 | 0;
    $1_1 = $5_1;
    $3_1 = $3_1 + 7 | 0;
    if (($4_1 | 0) <= (-1 | 0)) {
     continue label$2
    }
    break label$2;
   };
   HEAP32[($0_1 + 4 | 0) >> 2] = $5_1;
   HEAP32[$0_1 >> 2] = $2_1;
   return;
  }
  $14();
  abort();
 }
 
 function $12($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, $2_1 = 0, $7_1 = 0, $3_1 = 0;
  $1_1 = global$0 - 112 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 108 | 0) >> 2] = 0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 100 | 0) >> 2] = 0;
  HEAP32[($1_1 + 104 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 92 | 0) >> 2] = 0;
  HEAP32[($1_1 + 96 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 84 | 0) >> 2] = 6;
  HEAP32[($1_1 + 88 | 0) >> 2] = i64toi32_i32$0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 80 | 0;
  HEAP32[($1_1 + 80 | 0) >> 2] = $2_1;
  label$1 : {
   label$2 : {
    $3_1 = ($4($0_1 | 0) | 0) + -1 | 0;
    if ($3_1 >>> 0 > 25 >>> 0) {
     break label$2
    }
    $4_1 = 1;
    label$3 : {
     switch ($3_1 | 0) {
     case 3:
     case 8:
      $4_1 = 2;
      break label$1;
     case 15:
      $4_1 = 16;
      break label$1;
     case 1:
     case 4:
     case 6:
     case 9:
     case 11:
     case 12:
     case 17:
     case 18:
     case 20:
     case 24:
      $4_1 = 4;
      break label$1;
     case 21:
      $4_1 = 12;
      break label$1;
     case 5:
     case 10:
     case 13:
     case 14:
     case 16:
     case 19:
      $4_1 = 8;
      break label$1;
     case 22:
      $4_1 = $12($7($0_1 | 0) | 0 | 0) | 0;
      $0_1 = $15($0_1 | 0) | 0;
      HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
      global$0 = $1_1 + 112 | 0;
      return Math_imul($0_1, $4_1) | 0;
     case 23:
      break label$2;
     case 25:
      break label$3;
     default:
      break label$1;
     };
    }
    label$10 : {
     $4_1 = $5($0_1 | 0) | 0;
     if ($4_1) {
      break label$10
     }
     $4_1 = 0;
     break label$1;
    }
    i64toi32_i32$1 = ($1_1 + 40 | 0) + 8 | 0;
    i64toi32_i32$0 = 0;
    HEAP32[i64toi32_i32$1 >> 2] = 0;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = ($1_1 + 40 | 0) + 16 | 0;
    i64toi32_i32$0 = 0;
    HEAP32[i64toi32_i32$1 >> 2] = 0;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$1 = $1_1 + 61 | 0;
    i64toi32_i32$0 = 0;
    $7_1 = 0;
    HEAP8[i64toi32_i32$1 >> 0] = $7_1;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $7_1 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $7_1 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $7_1 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    HEAP32[($1_1 + 72 | 0) >> 2] = 0;
    i64toi32_i32$1 = $1_1;
    i64toi32_i32$0 = 0;
    HEAP32[($1_1 + 40 | 0) >> 2] = 0;
    HEAP32[($1_1 + 44 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[(($1_1 + 80 | 0) + 8 | 0) >> 2] = $1_1 + 40 | 0;
    $6($1_1 | 0, $0_1 | 0, $4_1 + -1 | 0 | 0);
    HEAP32[($1_1 + 100 | 0) >> 2] = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
    HEAP32[(($1_1 + 80 | 0) + 16 | 0) >> 2] = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
    HEAP32[($1_1 + 92 | 0) >> 2] = HEAP32[$1_1 >> 2] | 0;
    $4_1 = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
    $0_1 = $12(HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0) | 0;
    HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
    global$0 = $1_1 + 112 | 0;
    return $0_1 + $4_1 | 0 | 0;
   }
   $2_1 = $8(8 | 0) | 0;
   HEAP32[($1_1 + 104 | 0) >> 2] = $2_1;
   HEAP32[($1_1 + 108 | 0) >> 2] = $2_1;
   HEAP32[($2_1 + 4 | 0) >> 2] = 27;
   HEAP32[$2_1 >> 2] = 65680;
   $9(34 | 0, $2_1 | 0);
   abort();
  }
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  global$0 = $1_1 + 112 | 0;
  return $4_1 | 0;
 }
 
 function $13($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  $11($2_1 | 0, $1_1 + 67616 | 0 | 0);
  $1_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
  HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
  $3_1 = HEAP32[$2_1 >> 2] | 0;
  HEAP32[($2_1 + 12 | 0) >> 2] = $3_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $3_1;
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $14() {
  $46(65984 | 0, 23 | 0);
  abort();
 }
 
 function $15($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, i64toi32_i32$0 = 0, $2_1 = 0;
  $1_1 = global$0 - 64 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 60 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 52 | 0) >> 2] = 0;
  HEAP32[($1_1 + 56 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 44 | 0) >> 2] = 0;
  HEAP32[($1_1 + 48 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 36 | 0) >> 2] = 6;
  HEAP32[($1_1 + 40 | 0) >> 2] = i64toi32_i32$0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 32 | 0;
  HEAP32[($1_1 + 32 | 0) >> 2] = $2_1;
  label$1 : {
   if (($4($0_1 | 0) | 0 | 0) == (23 | 0)) {
    break label$1
   }
   i64toi32_i32$0 = 0;
   HEAP32[($1_1 + 24 | 0) >> 2] = 0;
   HEAP32[($1_1 + 28 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[(($1_1 + 32 | 0) + 8 | 0) >> 2] = $1_1 + 24 | 0;
   $0_1 = $8(8 | 0) | 0;
   HEAP32[($1_1 + 44 | 0) >> 2] = $0_1;
   HEAP32[($1_1 + 48 | 0) >> 2] = $0_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = 3;
   HEAP32[$0_1 >> 2] = 65664;
   $9(159 | 0, $0_1 | 0);
   abort();
  }
  $0_1 = ($10($0_1 | 0) | 0) + 67544 | 0;
  HEAP32[($1_1 + 52 | 0) >> 2] = $0_1;
  $11($1_1 + 16 | 0 | 0, $0_1 | 0);
  $0_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
  HEAP32[($1_1 + 56 | 0) >> 2] = $0_1;
  $11($1_1 + 8 | 0 | 0, $0_1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 60 | 0) >> 2] = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  $0_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  global$0 = $1_1 + 64 | 0;
  return $0_1 | 0;
 }
 
 function $16($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 36 | 0) >> 2] = 0;
  HEAP32[($3_1 + 40 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3_1 + 28 | 0) >> 2] = 3;
  HEAP8[($3_1 + 16 | 0) >> 0] = $2_1;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1 + 24 | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $4_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 32 | 0) >> 2] = $3_1 + 8 | 0;
  label$1 : {
   label$2 : {
    if (($17($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0) != (1 | 0)) {
     break label$2
    }
    label$3 : {
     if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
      break label$3
     }
     if (!$1_1) {
      break label$1
     }
     $1_1 = HEAPU8[$1_1 >> 0] | 0;
     HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
     global$0 = $3_1 + 48 | 0;
     return $1_1 | 0;
    }
    HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
    global$0 = $3_1 + 48 | 0;
    return ($1_1 | 0) != (0 | 0) | 0;
   }
   $1_1 = $8(8 | 0) | 0;
   HEAP32[($3_1 + 36 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 40 | 0) >> 2] = $1_1;
   HEAP32[($1_1 + 4 | 0) >> 2] = 4;
   HEAP32[$1_1 >> 2] = 65707;
   $9(4069 | 0, $1_1 | 0);
   abort();
  }
  $14();
  abort();
 }
 
 function $17($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP8[($3_1 + 8 | 0) >> 0] = 0;
  HEAP32[$3_1 >> 2] = 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = 0;
  $0_1 = $4($21($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0) | 0;
  global$0 = $3_1 + 16 | 0;
  return $0_1 | 0;
 }
 
 function $18($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP8[($3_1 + 8 | 0) >> 0] = 0;
  HEAP32[$3_1 >> 2] = 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = 0;
  return $2_1 & 1 | 0 | 0;
 }
 
 function $19($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, i64toi32_i32$0 = 0, $5_1 = 0, $6_1 = 0, $7_1 = Math_fround(0), $8_1 = 0.0;
  $4_1 = global$0 - 48 | 0;
  global$0 = $4_1;
  i64toi32_i32$0 = 0;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  HEAP32[($4_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($4_1 + 36 | 0) >> 2] = 0;
  HEAP32[($4_1 + 40 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($4_1 + 28 | 0) >> 2] = 3;
  HEAP32[($4_1 + 12 | 0) >> 2] = $1_1;
  $5_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $4_1 + 24 | 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = $5_1;
  HEAP8[($4_1 + 20 | 0) >> 0] = $3_1;
  HEAP32[($4_1 + 16 | 0) >> 2] = $2_1;
  HEAP32[($4_1 + 32 | 0) >> 2] = $4_1 + 12 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      $6_1 = ($17($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0) + -15 | 0;
      if ($6_1 >>> 0 > 1 >>> 0) {
       break label$4
      }
      switch ($6_1 | 0) {
      case 1:
       break label$2;
      default:
       break label$3;
      };
     }
     $2_1 = $8(8 | 0) | 0;
     HEAP32[($4_1 + 36 | 0) >> 2] = $2_1;
     HEAP32[($4_1 + 40 | 0) >> 2] = $2_1;
     HEAP32[($2_1 + 4 | 0) >> 2] = 7;
     HEAP32[$2_1 >> 2] = 65711;
     $9(4069 | 0, $2_1 | 0);
     abort();
    }
    $18($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0;
    if (!$2_1) {
     break label$1
    }
    $7_1 = Math_fround(HEAPF32[$2_1 >> 2]);
    HEAP32[(0 + 67736 | 0) >> 2] = $5_1;
    HEAPF64[($0_1 + 8 | 0) >> 3] = +Math_fround(HEAPF32[($2_1 + 4 | 0) >> 2]);
    HEAPF64[$0_1 >> 3] = +$7_1;
    global$0 = $4_1 + 48 | 0;
    return;
   }
   if (!$2_1) {
    break label$1
   }
   HEAP32[(0 + 67736 | 0) >> 2] = $5_1;
   $8_1 = +HEAPF64[$2_1 >> 3];
   HEAPF64[($0_1 + 8 | 0) >> 3] = +HEAPF64[($2_1 + 8 | 0) >> 3];
   HEAPF64[$0_1 >> 3] = $8_1;
   global$0 = $4_1 + 48 | 0;
   return;
  }
  $14();
  abort();
 }
 
 function $20($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $9_1 = 0, $6_1 = 0, $13_1 = 0, $8_1 = 0, $10_1 = 0, $7_1 = 0;
  $5_1 = global$0 - 224 | 0;
  global$0 = $5_1;
  i64toi32_i32$1 = $5_1 + 77 | 0;
  i64toi32_i32$0 = 0;
  $13_1 = 0;
  HEAP8[i64toi32_i32$1 >> 0] = $13_1;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $13_1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $13_1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $13_1 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 40 | 0) >> 2] = 0;
  HEAP32[($5_1 + 44 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 172 | 0) >> 2] = 0;
  HEAP32[($5_1 + 176 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($5_1 + 220 | 0) >> 2] = 0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 212 | 0) >> 2] = 0;
  HEAP32[($5_1 + 216 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 204 | 0) >> 2] = 0;
  HEAP32[($5_1 + 208 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 196 | 0) >> 2] = 0;
  HEAP32[($5_1 + 200 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 188 | 0) >> 2] = 0;
  HEAP32[($5_1 + 192 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 180 | 0) >> 2] = 0;
  HEAP32[($5_1 + 184 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($5_1 + 164 | 0) >> 2] = 14;
  HEAP32[($5_1 + 88 | 0) >> 2] = 0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 56 | 0) >> 2] = 0;
  HEAP32[($5_1 + 60 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 64 | 0) >> 2] = 0;
  HEAP32[($5_1 + 68 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 72 | 0) >> 2] = 0;
  HEAP32[($5_1 + 76 | 0) >> 2] = i64toi32_i32$0;
  $6_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $5_1 + 160 | 0;
  HEAP32[($5_1 + 160 | 0) >> 2] = $6_1;
  HEAP32[($5_1 + 44 | 0) >> 2] = $2_1;
  HEAP32[($5_1 + 168 | 0) >> 2] = $5_1 + 40 | 0;
  HEAP32[($5_1 + 172 | 0) >> 2] = $5_1 + 56 | 0;
  HEAP8[($5_1 + 48 | 0) >> 0] = $3_1;
  HEAP32[($5_1 + 40 | 0) >> 2] = $1_1;
  $6($5_1 | 0, $21($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0, $4_1 | 0);
  HEAP32[($5_1 + 80 | 0) >> 2] = HEAP32[($5_1 + 24 | 0) >> 2] | 0;
  $7_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
  HEAP32[($5_1 + 68 | 0) >> 2] = $7_1;
  $4_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
  HEAP32[($5_1 + 188 | 0) >> 2] = $4_1;
  $8_1 = HEAP32[$5_1 >> 2] | 0;
  HEAP32[($5_1 + 176 | 0) >> 2] = $8_1;
  $9_1 = HEAP32[($5_1 + 20 | 0) >> 2] | 0;
  HEAP32[($5_1 + 184 | 0) >> 2] = $9_1;
  HEAP32[($5_1 + 180 | 0) >> 2] = $4_1;
  $10_1 = HEAP32[($5_1 + 32 | 0) >> 2] | 0;
  HEAP32[($5_1 + 88 | 0) >> 2] = $10_1;
  HEAP32[($5_1 + 76 | 0) >> 2] = $9_1;
  $9_1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
  HEAP32[($5_1 + 72 | 0) >> 2] = $9_1;
  HEAP32[($5_1 + 64 | 0) >> 2] = $4_1;
  HEAP32[($5_1 + 60 | 0) >> 2] = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
  HEAP32[($5_1 + 56 | 0) >> 2] = $8_1;
  HEAP8[($5_1 + 84 | 0) >> 0] = (HEAPU8[($5_1 + 28 | 0) >> 0] | 0) & 1 | 0;
  $8_1 = $12($21($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0) | 0;
  $4_1 = $12($9_1 | 0) | 0;
  $1_1 = $18($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0;
  $3_1 = $7_1 ? $3_1 & -3 | 0 : $3_1;
  label$1 : {
   label$2 : {
    label$3 : {
     if ($4_1 >>> 0 > 4 >>> 0) {
      break label$3
     }
     if ($1_1 & 1 | 0) {
      break label$3
     }
     if (!$4_1) {
      break label$2
     }
     if ($8_1 >>> 0 >= 5 >>> 0) {
      break label$1
     }
     HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
     HEAP8[($5_1 + 152 | 0) >> 0] = 0;
     $2_1 = (-1 >>> (32 - ($4_1 << 3 | 0) | 0) | 0) & ($2_1 >>> ($10_1 << 3 | 0) | 0) | 0;
     HEAP32[($5_1 + 220 | 0) >> 2] = $2_1;
     HEAP32[($5_1 + 216 | 0) >> 2] = $2_1;
     i64toi32_i32$1 = $5_1;
     i64toi32_i32$0 = 0;
     HEAP32[($5_1 + 144 | 0) >> 2] = 0;
     HEAP32[($5_1 + 148 | 0) >> 2] = i64toi32_i32$0;
     HEAP32[($5_1 + 212 | 0) >> 2] = $5_1 + 144 | 0;
     HEAP8[($0_1 + 8 | 0) >> 0] = $3_1;
     HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
     HEAP32[$0_1 >> 2] = $9_1;
     global$0 = $5_1 + 224 | 0;
     return;
    }
    HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
    HEAP8[($5_1 + 104 | 0) >> 0] = 0;
    i64toi32_i32$1 = $5_1;
    i64toi32_i32$0 = 0;
    HEAP32[($5_1 + 96 | 0) >> 2] = 0;
    HEAP32[($5_1 + 100 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[($5_1 + 192 | 0) >> 2] = $5_1 + 96 | 0;
    HEAP8[($0_1 + 8 | 0) >> 0] = $3_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = $2_1 + $10_1 | 0;
    HEAP32[$0_1 >> 2] = $9_1;
    global$0 = $5_1 + 224 | 0;
    return;
   }
   HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
   HEAP8[($5_1 + 120 | 0) >> 0] = 0;
   i64toi32_i32$1 = $5_1;
   i64toi32_i32$0 = 0;
   HEAP32[($5_1 + 112 | 0) >> 2] = 0;
   HEAP32[($5_1 + 116 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($5_1 + 196 | 0) >> 2] = $5_1 + 112 | 0;
   HEAP8[($0_1 + 8 | 0) >> 0] = $3_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = 0;
   HEAP32[$0_1 >> 2] = $9_1;
   global$0 = $5_1 + 224 | 0;
   return;
  }
  $3_1 = $22($2_1 + $10_1 | 0 | 0, $4_1 | 0) | 0;
  HEAP32[($5_1 + 200 | 0) >> 2] = $3_1;
  HEAP32[($5_1 + 208 | 0) >> 2] = $3_1;
  HEAP8[($5_1 + 136 | 0) >> 0] = 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
  HEAP32[($5_1 + 204 | 0) >> 2] = $5_1 + 128 | 0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 128 | 0) >> 2] = 0;
  HEAP32[($5_1 + 132 | 0) >> 2] = i64toi32_i32$0;
  HEAP8[($0_1 + 8 | 0) >> 0] = 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = $3_1;
  HEAP32[$0_1 >> 2] = $9_1;
  global$0 = $5_1 + 224 | 0;
 }
 
 function $21($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 16 | 0;
  HEAP8[($3_1 + 8 | 0) >> 0] = 0;
  HEAP32[$3_1 >> 2] = 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = 0;
  return $0_1 | 0;
 }
 
 function $22($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $3_1 = 0;
  $2_1 = 0;
  $3_1 = 0;
  label$1 : {
   label$2 : {
    label$3 : while (1) {
     if (!$1_1) {
      break label$2
     }
     if (!$0_1) {
      break label$1
     }
     $1_1 = $1_1 + -1 | 0;
     $2_1 = (HEAPU8[$0_1 >> 0] | 0) << $3_1 | 0 | $2_1 | 0;
     $0_1 = $0_1 + 1 | 0;
     $3_1 = $3_1 + 8 | 0;
     continue label$3;
    };
   }
   return $2_1 | 0;
  }
  $14();
  abort();
 }
 
 function $23($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, $5_1 = 0, $6_1 = Math_fround(0), $7_1 = 0.0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 36 | 0) >> 2] = 0;
  HEAP32[($3_1 + 40 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 28 | 0) >> 2] = 0;
  HEAP32[($3_1 + 32 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 5;
  HEAP32[($3_1 + 4 | 0) >> 2] = $0_1;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1 + 16 | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
  HEAP8[($3_1 + 12 | 0) >> 0] = $2_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = $3_1 + 4 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      $5_1 = ($17($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) + -13 | 0;
      if ($5_1 >>> 0 > 1 >>> 0) {
       break label$4
      }
      switch ($5_1 | 0) {
      case 1:
       break label$2;
      default:
       break label$3;
      };
     }
     $1_1 = $8(8 | 0) | 0;
     HEAP32[($3_1 + 28 | 0) >> 2] = $1_1;
     HEAP32[($3_1 + 32 | 0) >> 2] = $1_1;
     HEAP32[($1_1 + 4 | 0) >> 2] = 5;
     HEAP32[$1_1 >> 2] = 65718;
     $9(4069 | 0, $1_1 | 0);
     abort();
    }
    label$5 : {
     if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
      break label$5
     }
     if (!$1_1) {
      break label$1
     }
     $6_1 = Math_fround(HEAPF32[$1_1 >> 2]);
     HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
     global$0 = $3_1 + 48 | 0;
     return +(+$6_1);
    }
    HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
    $2_1 = $3_1 + 8 | 0;
    HEAP32[($3_1 + 36 | 0) >> 2] = $2_1;
    HEAP32[($3_1 + 40 | 0) >> 2] = $2_1;
    global$0 = $3_1 + 48 | 0;
    return +(+(wasm2js_scratch_store_i32(0, $1_1), wasm2js_scratch_load_f32()));
   }
   $18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
   if (!$1_1) {
    break label$1
   }
   HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
   $7_1 = +HEAPF64[$1_1 >> 3];
   global$0 = $3_1 + 48 | 0;
   return +$7_1;
  }
  $14();
  abort();
 }
 
 function $24($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, i64toi32_i32$0 = 0, $7_1 = 0, $6_1 = 0, $8_1 = 0;
  $5_1 = global$0 - 256 | 0;
  global$0 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 8 | 0) >> 2] = 0;
  HEAP32[($5_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 25;
  HEAP32[($5_1 + 144 | 0) >> 2] = 0;
  HEAP32[($5_1 + 148 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 152 | 0) >> 2] = 0;
  HEAP32[($5_1 + 156 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($5_1 + 248 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 240 | 0) >> 2] = 0;
  HEAP32[($5_1 + 244 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 232 | 0) >> 2] = 0;
  HEAP32[($5_1 + 236 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 224 | 0) >> 2] = 0;
  HEAP32[($5_1 + 228 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 216 | 0) >> 2] = 0;
  HEAP32[($5_1 + 220 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 208 | 0) >> 2] = 0;
  HEAP32[($5_1 + 212 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 200 | 0) >> 2] = 0;
  HEAP32[($5_1 + 204 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 192 | 0) >> 2] = 0;
  HEAP32[($5_1 + 196 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 184 | 0) >> 2] = 0;
  HEAP32[($5_1 + 188 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 176 | 0) >> 2] = 0;
  HEAP32[($5_1 + 180 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 168 | 0) >> 2] = 0;
  HEAP32[($5_1 + 172 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 160 | 0) >> 2] = 0;
  HEAP32[($5_1 + 164 | 0) >> 2] = i64toi32_i32$0;
  HEAP8[($5_1 + 16 | 0) >> 0] = $3_1;
  $6_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $5_1 + 144 | 0;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
  HEAP32[($5_1 + 144 | 0) >> 2] = $6_1;
  HEAP32[($5_1 + 152 | 0) >> 2] = $5_1 + 8 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          $7_1 = ($17($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0) + -17 | 0;
          if ($7_1 >>> 0 > 6 >>> 0) {
           break label$8
          }
          switch ($7_1 | 0) {
          case 6:
           break label$5;
          case 5:
           break label$7;
          case 1:
          case 2:
          case 3:
          case 4:
           break label$8;
          default:
           break label$6;
          };
         }
         $2_1 = $8(8 | 0) | 0;
         HEAP32[($5_1 + 220 | 0) >> 2] = $2_1;
         HEAP32[($5_1 + 224 | 0) >> 2] = $2_1;
         HEAP32[($2_1 + 4 | 0) >> 2] = 5;
         HEAP32[$2_1 >> 2] = 65810;
         $9(4069 | 0, $2_1 | 0);
         abort();
        }
        HEAP32[($5_1 + 32 | 0) >> 2] = 0;
        i64toi32_i32$0 = 0;
        HEAP32[($5_1 + 24 | 0) >> 2] = 0;
        HEAP32[($5_1 + 28 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[($5_1 + 156 | 0) >> 2] = $5_1 + 24 | 0;
        if (!$2_1) {
         break label$4
        }
        HEAP32[($5_1 + 32 | 0) >> 2] = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
        $8_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
        HEAP32[($5_1 + 28 | 0) >> 2] = $8_1;
        $7_1 = HEAP32[$2_1 >> 2] | 0;
        HEAP32[($5_1 + 24 | 0) >> 2] = $7_1;
        if ($8_1 >>> 0 > $4_1 >>> 0) {
         break label$1
        }
        $2_1 = $8(8 | 0) | 0;
        HEAP32[($5_1 + 160 | 0) >> 2] = $2_1;
        HEAP32[($5_1 + 164 | 0) >> 2] = $2_1;
        HEAP32[($2_1 + 4 | 0) >> 2] = 33;
        HEAP32[$2_1 >> 2] = 65728;
        $9(34 | 0, $2_1 | 0);
        abort();
       }
       i64toi32_i32$0 = 0;
       HEAP32[($5_1 + 56 | 0) >> 2] = 0;
       HEAP32[($5_1 + 60 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[($5_1 + 180 | 0) >> 2] = $5_1 + 56 | 0;
       if (!$2_1) {
        break label$4
       }
       $3_1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
       HEAP32[($5_1 + 60 | 0) >> 2] = $3_1;
       $2_1 = HEAP32[$2_1 >> 2] | 0;
       HEAP32[($5_1 + 56 | 0) >> 2] = $2_1;
       if ($3_1 >>> 0 <= $4_1 >>> 0) {
        break label$3
       }
       HEAP8[($5_1 + 72 | 0) >> 0] = 0;
       $2_1 = $2_1 + $4_1 | 0;
       HEAP32[($5_1 + 200 | 0) >> 2] = $2_1;
       HEAP32[($5_1 + 196 | 0) >> 2] = $2_1;
       i64toi32_i32$0 = 0;
       HEAP32[($5_1 + 64 | 0) >> 2] = 0;
       HEAP32[($5_1 + 68 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[($5_1 + 192 | 0) >> 2] = $5_1 + 64 | 0;
       if (!$2_1) {
        break label$4
       }
       $2_1 = HEAPU8[$2_1 >> 0] | 0;
       HEAP32[($5_1 + 228 | 0) >> 2] = $2_1;
       HEAP32[($5_1 + 232 | 0) >> 2] = $2_1;
       HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
       HEAP8[($0_1 + 8 | 0) >> 0] = 0;
       HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
       HEAP32[$0_1 >> 2] = 16;
       global$0 = $5_1 + 256 | 0;
       return;
      }
      $7_1 = $12($7($21($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0) | 0 | 0) | 0;
      $8_1 = $12($21($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0) | 0;
      if ($8_1) {
       break label$2
      }
      HEAP8[($5_1 + 88 | 0) >> 0] = 0;
      i64toi32_i32$0 = 0;
      HEAP32[($5_1 + 80 | 0) >> 2] = 0;
      HEAP32[($5_1 + 84 | 0) >> 2] = i64toi32_i32$0;
      HEAP32[($5_1 + 204 | 0) >> 2] = $5_1 + 80 | 0;
      $2_1 = $7($21($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0) | 0;
      HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
      HEAP8[($0_1 + 8 | 0) >> 0] = $3_1;
      HEAP32[($0_1 + 4 | 0) >> 2] = 0;
      HEAP32[$0_1 >> 2] = $2_1;
      global$0 = $5_1 + 256 | 0;
      return;
     }
     $14();
     abort();
    }
    $2_1 = $8(8 | 0) | 0;
    HEAP32[($5_1 + 184 | 0) >> 2] = $2_1;
    HEAP32[($5_1 + 188 | 0) >> 2] = $2_1;
    HEAP32[($2_1 + 4 | 0) >> 2] = 34;
    HEAP32[$2_1 >> 2] = 65776;
    $9(34 | 0, $2_1 | 0);
    abort();
   }
   label$9 : {
    label$10 : {
     if ($7_1 >>> 0 > 4 >>> 0) {
      break label$10
     }
     if ($8_1 >>> 0 > 4 >>> 0) {
      break label$9
     }
     HEAP8[($5_1 + 136 | 0) >> 0] = 0;
     i64toi32_i32$0 = 0;
     HEAP32[($5_1 + 128 | 0) >> 2] = 0;
     HEAP32[($5_1 + 132 | 0) >> 2] = i64toi32_i32$0;
     HEAP32[($5_1 + 208 | 0) >> 2] = $5_1 + 128 | 0;
     $1_1 = $7($21($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0) | 0;
     $2_1 = (-1 >>> (32 - ($7_1 << 3 | 0) | 0) | 0) & ($2_1 >>> (Math_imul($7_1, $4_1) << 3 | 0) | 0) | 0;
     HEAP32[($5_1 + 212 | 0) >> 2] = $2_1;
     HEAP32[($5_1 + 216 | 0) >> 2] = $2_1;
     HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
     HEAP8[($0_1 + 8 | 0) >> 0] = $3_1;
     HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
     HEAP32[$0_1 >> 2] = $1_1;
     global$0 = $5_1 + 256 | 0;
     return;
    }
    HEAP8[($5_1 + 104 | 0) >> 0] = 0;
    i64toi32_i32$0 = 0;
    HEAP32[($5_1 + 96 | 0) >> 2] = 0;
    HEAP32[($5_1 + 100 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[($5_1 + 236 | 0) >> 2] = $5_1 + 96 | 0;
    $1_1 = $7($21($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0) | 0;
    HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
    HEAP8[($0_1 + 8 | 0) >> 0] = $3_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = $2_1 + Math_imul($7_1, $4_1) | 0;
    HEAP32[$0_1 >> 2] = $1_1;
    global$0 = $5_1 + 256 | 0;
    return;
   }
   HEAP8[($5_1 + 120 | 0) >> 0] = 0;
   i64toi32_i32$0 = 0;
   HEAP32[($5_1 + 112 | 0) >> 2] = 0;
   HEAP32[($5_1 + 116 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($5_1 + 240 | 0) >> 2] = $5_1 + 112 | 0;
   $1_1 = $7($21($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0) | 0;
   $2_1 = $22($2_1 + Math_imul($7_1, $4_1) | 0 | 0, $7_1 | 0) | 0;
   HEAP32[($5_1 + 244 | 0) >> 2] = $2_1;
   HEAP32[($5_1 + 248 | 0) >> 2] = $2_1;
   HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
   HEAP8[($0_1 + 8 | 0) >> 0] = $3_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
   HEAP32[$0_1 >> 2] = $1_1;
   global$0 = $5_1 + 256 | 0;
   return;
  }
  HEAP8[($5_1 + 48 | 0) >> 0] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 40 | 0) >> 2] = 0;
  HEAP32[($5_1 + 44 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($5_1 + 168 | 0) >> 2] = $5_1 + 40 | 0;
  $1_1 = $7($21($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0) | 0;
  $3_1 = $3_1 | 1 | 0;
  $2_1 = $12($21($1_1 | 0, 0 | 0, $3_1 | 0) | 0 | 0) | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
  $2_1 = Math_imul($2_1, $4_1) + $7_1 | 0;
  HEAP32[($5_1 + 172 | 0) >> 2] = $2_1;
  HEAP32[($5_1 + 176 | 0) >> 2] = $2_1;
  HEAP8[($0_1 + 8 | 0) >> 0] = $3_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $5_1 + 256 | 0;
 }
 
 function $25($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$2 = 0, $3_1 = 0, i64toi32_i32$3 = 0, $4_1 = 0, $5_1 = 0, $11_1 = 0, $12_1 = 0, $13_1 = 0, $14_1 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 36 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 40 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = 3;
  HEAP8[(i64toi32_i32$1 + 16 | 0) >> 0] = $2_1;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = i64toi32_i32$1 + 24 | 0;
  HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] = $4_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = $1_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 32 | 0) >> 2] = i64toi32_i32$1 + 8 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         $5_1 = ($17($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) + -2 | 0;
         if ($5_1 >>> 0 > 4 >>> 0) {
          break label$7
         }
         switch ($5_1 | 0) {
         case 4:
          break label$2;
         case 3:
          break label$3;
         case 2:
          break label$4;
         case 1:
          break label$5;
         default:
          break label$6;
         };
        }
        $1_1 = $8(8 | 0) | 0;
        HEAP32[($3_1 + 36 | 0) >> 2] = $1_1;
        HEAP32[($3_1 + 40 | 0) >> 2] = $1_1;
        HEAP32[($1_1 + 4 | 0) >> 2] = 3;
        HEAP32[$1_1 >> 2] = 65815;
        $9(4069 | 0, $1_1 | 0);
        abort();
       }
       label$8 : {
        if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
         break label$8
        }
        if (!$1_1) {
         break label$1
        }
        i64toi32_i32$2 = $1_1;
        i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
        i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
        HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
        global$0 = $3_1 + 48 | 0;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$0 | 0;
       }
       HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
       global$0 = $3_1 + 48 | 0;
       i64toi32_i32$1 = $1_1;
       i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
       return i64toi32_i32$1 | 0;
      }
      label$9 : {
       if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
        break label$9
       }
       if (!$1_1) {
        break label$1
       }
       i64toi32_i32$2 = $1_1;
       i64toi32_i32$1 = HEAP8[$1_1 >> 0] | 0;
       i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
       HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
       global$0 = $3_1 + 48 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
       return i64toi32_i32$1 | 0;
      }
      HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
      global$0 = $3_1 + 48 | 0;
      i64toi32_i32$1 = 0;
      i64toi32_i32$2 = $1_1;
      i64toi32_i32$0 = 0;
      i64toi32_i32$3 = 56;
      i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
       i64toi32_i32$0 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
       $11_1 = 0;
      } else {
       i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
       $11_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
      }
      i64toi32_i32$1 = $11_1;
      i64toi32_i32$2 = 0;
      i64toi32_i32$3 = 56;
      i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
       i64toi32_i32$2 = i64toi32_i32$0 >> 31 | 0;
       $12_1 = i64toi32_i32$0 >> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$2 = i64toi32_i32$0 >> i64toi32_i32$4 | 0;
       $12_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$1 = $12_1;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
      return i64toi32_i32$1 | 0;
     }
     label$10 : {
      if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
       break label$10
      }
      if (!$1_1) {
       break label$1
      }
      i64toi32_i32$0 = $1_1;
      i64toi32_i32$1 = HEAP16[i64toi32_i32$0 >> 1] | 0;
      i64toi32_i32$2 = i64toi32_i32$1 >> 31 | 0;
      HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
      global$0 = $3_1 + 48 | 0;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
      return i64toi32_i32$1 | 0;
     }
     HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
     global$0 = $3_1 + 48 | 0;
     i64toi32_i32$1 = 0;
     i64toi32_i32$0 = $1_1;
     i64toi32_i32$2 = 0;
     i64toi32_i32$3 = 48;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
      $13_1 = 0;
     } else {
      i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
      $13_1 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
     }
     i64toi32_i32$1 = $13_1;
     i64toi32_i32$0 = 0;
     i64toi32_i32$3 = 48;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$0 = i64toi32_i32$2 >> 31 | 0;
      $14_1 = i64toi32_i32$2 >> i64toi32_i32$4 | 0;
     } else {
      i64toi32_i32$0 = i64toi32_i32$2 >> i64toi32_i32$4 | 0;
      $14_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
     }
     i64toi32_i32$1 = $14_1;
     i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
     return i64toi32_i32$1 | 0;
    }
    label$11 : {
     if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
      break label$11
     }
     if (!$1_1) {
      break label$1
     }
     i64toi32_i32$2 = $1_1;
     i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
     i64toi32_i32$0 = i64toi32_i32$1 >> 31 | 0;
     HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
     global$0 = $3_1 + 48 | 0;
     i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
     return i64toi32_i32$1 | 0;
    }
    HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
    global$0 = $3_1 + 48 | 0;
    i64toi32_i32$0 = $1_1;
    i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
    return i64toi32_i32$0 | 0;
   }
   $18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
   if (!$1_1) {
    break label$1
   }
   HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
   i64toi32_i32$2 = $1_1;
   i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
   global$0 = $3_1 + 48 | 0;
   i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
   return i64toi32_i32$0 | 0;
  }
  $14();
  abort();
 }
 
 function $26($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[$3_1 >> 2] = 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 36 | 0) >> 2] = 0;
  HEAP32[($3_1 + 40 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 28 | 0) >> 2] = 0;
  HEAP32[($3_1 + 32 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3_1 + 20 | 0) >> 2] = 5;
  HEAP8[($3_1 + 8 | 0) >> 0] = $2_1;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1 + 16 | 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = $4_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = $1_1;
  HEAP32[$3_1 >> 2] = $0_1;
  HEAP32[($3_1 + 24 | 0) >> 2] = $3_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       $5_1 = $17($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
       if ($5_1 >>> 0 > 25 >>> 0) {
        break label$5
       }
       if ((1 << $5_1 | 0) & 36438016 | 0) {
        break label$4
       }
       if (($5_1 | 0) == (22 | 0)) {
        break label$3
       }
       if (($5_1 | 0) == (24 | 0)) {
        break label$2
       }
      }
      $1_1 = $8(8 | 0) | 0;
      HEAP32[($3_1 + 36 | 0) >> 2] = $1_1;
      HEAP32[($3_1 + 40 | 0) >> 2] = $1_1;
      HEAP32[($1_1 + 4 | 0) >> 2] = 7;
      HEAP32[$1_1 >> 2] = 65912;
      $9(4069 | 0, $1_1 | 0);
      abort();
     }
     label$6 : {
      if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
       break label$6
      }
      if (!$1_1) {
       break label$1
      }
      $1_1 = HEAP32[$1_1 >> 2] | 0;
      HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
      global$0 = $3_1 + 48 | 0;
      return $1_1 | 0;
     }
     HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
     global$0 = $3_1 + 48 | 0;
     return $1_1 | 0;
    }
    if (!$1_1) {
     break label$1
    }
    $1_1 = HEAP32[$1_1 >> 2] | 0;
    HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
    global$0 = $3_1 + 48 | 0;
    return $1_1 | 0;
   }
   $1_1 = $8(8 | 0) | 0;
   HEAP32[($3_1 + 28 | 0) >> 2] = $1_1;
   HEAP32[($3_1 + 32 | 0) >> 2] = $1_1;
   HEAP32[($1_1 + 4 | 0) >> 2] = 40;
   HEAP32[$1_1 >> 2] = 65872;
   $9(34 | 0, $1_1 | 0);
   abort();
  }
  $14();
  abort();
 }
 
 function $27($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $24_1 = 0;
  $4_1 = global$0 - 16 | 0;
  global$0 = $4_1;
  i64toi32_i32$1 = $4_1;
  i64toi32_i32$0 = 0;
  HEAP32[$4_1 >> 2] = 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($4_1 + 4 | 0) >> 2] = $2_1;
  HEAP8[($4_1 + 8 | 0) >> 0] = $3_1;
  HEAP32[$4_1 >> 2] = $1_1;
  label$1 : {
   label$2 : {
    if (($17($1_1 | 0, $2_1 | 0, $3_1 | 0) | 0 | 0) != (17 | 0)) {
     break label$2
    }
    if (!$2_1) {
     break label$1
    }
    i64toi32_i32$0 = HEAP32[$2_1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
    $24_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $24_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    global$0 = $4_1 + 16 | 0;
    return;
   }
   HEAP32[($0_1 + 4 | 0) >> 2] = 3;
   HEAP32[$0_1 >> 2] = 65919;
   global$0 = $4_1 + 16 | 0;
   return;
  }
  $14();
  abort();
 }
 
 function $28($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $3_1 = 0, $4_1 = 0, $5_1 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 36 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 40 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = 3;
  HEAP8[(i64toi32_i32$1 + 16 | 0) >> 0] = $2_1;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = i64toi32_i32$1 + 24 | 0;
  HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] = $4_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = $1_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 32 | 0) >> 2] = i64toi32_i32$1 + 8 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          $5_1 = ($17($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) + -7 | 0;
          if ($5_1 >>> 0 > 5 >>> 0) {
           break label$8
          }
          switch ($5_1 | 0) {
          case 4:
           break label$2;
          case 3:
           break label$3;
          case 2:
           break label$5;
          case 1:
           break label$6;
          case 5:
           break label$7;
          default:
           break label$4;
          };
         }
         $1_1 = $8(8 | 0) | 0;
         HEAP32[($3_1 + 36 | 0) >> 2] = $1_1;
         HEAP32[($3_1 + 40 | 0) >> 2] = $1_1;
         HEAP32[($1_1 + 4 | 0) >> 2] = 4;
         HEAP32[$1_1 >> 2] = 65922;
         $9(4069 | 0, $1_1 | 0);
         abort();
        }
        label$9 : {
         if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
          break label$9
         }
         if (!$1_1) {
          break label$1
         }
         i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
         i64toi32_i32$1 = 0;
         HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
         global$0 = $3_1 + 48 | 0;
         i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
         return i64toi32_i32$0 | 0;
        }
        HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
        global$0 = $3_1 + 48 | 0;
        i64toi32_i32$0 = 0;
        i64toi32_i32$1 = $1_1;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
        return i64toi32_i32$1 | 0;
       }
       label$10 : {
        if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
         break label$10
        }
        if (!$1_1) {
         break label$1
        }
        i64toi32_i32$1 = HEAPU8[$1_1 >> 0] | 0;
        i64toi32_i32$0 = 0;
        HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
        global$0 = $3_1 + 48 | 0;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
        return i64toi32_i32$1 | 0;
       }
       HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
       global$0 = $3_1 + 48 | 0;
       i64toi32_i32$1 = 0;
       i64toi32_i32$0 = $1_1;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
       return $1_1 | 0;
      }
      label$11 : {
       if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
        break label$11
       }
       if (!$1_1) {
        break label$1
       }
       i64toi32_i32$0 = HEAPU16[$1_1 >> 1] | 0;
       i64toi32_i32$1 = 0;
       HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
       global$0 = $3_1 + 48 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
       return i64toi32_i32$0 | 0;
      }
      HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
      global$0 = $3_1 + 48 | 0;
      i64toi32_i32$0 = 0;
      i64toi32_i32$1 = $1_1;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
      return i64toi32_i32$1 | 0;
     }
     label$12 : {
      if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
       break label$12
      }
      if (!$1_1) {
       break label$1
      }
      i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
      i64toi32_i32$0 = 0;
      HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
      global$0 = $3_1 + 48 | 0;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
      return i64toi32_i32$1 | 0;
     }
     HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
     global$0 = $3_1 + 48 | 0;
     i64toi32_i32$1 = 0;
     i64toi32_i32$0 = $1_1;
     i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
     return $1_1 | 0;
    }
    label$13 : {
     if (!(($18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0) & 1 | 0)) {
      break label$13
     }
     if (!$1_1) {
      break label$1
     }
     i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
     i64toi32_i32$1 = 0;
     HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
     global$0 = $3_1 + 48 | 0;
     i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
     return i64toi32_i32$0 | 0;
    }
    HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
    global$0 = $3_1 + 48 | 0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = $1_1;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
    return i64toi32_i32$1 | 0;
   }
   $18($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
   if (!$1_1) {
    break label$1
   }
   HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
   i64toi32_i32$1 = HEAP32[$1_1 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
   global$0 = $3_1 + 48 | 0;
   i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
   return i64toi32_i32$1 | 0;
  }
  $14();
  abort();
 }
 
 function $29($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0;
  $3_1 = global$0 - 32 | 0;
  HEAP8[($3_1 + 16 | 0) >> 0] = 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = $1_1;
 }
 
 function $30($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0;
  $3_1 = $1_1;
  $4_1 = $0_1;
  label$1 : {
   label$2 : {
    label$3 : while (1) {
     if (!$2_1) {
      break label$2
     }
     if (!$3_1) {
      break label$1
     }
     if (!$4_1) {
      break label$1
     }
     HEAP8[$0_1 >> 0] = HEAPU8[$1_1 >> 0] | 0;
     $1_1 = $1_1 + 1 | 0;
     $0_1 = $0_1 + 1 | 0;
     $2_1 = $2_1 + -1 | 0;
     $3_1 = $3_1 + 1 | 0;
     $4_1 = $4_1 + 1 | 0;
     continue label$3;
    };
   }
   return;
  }
  $14();
  abort();
 }
 
 function $31($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = 0;
  label$1 : {
   label$2 : while (1) {
    if (($2_1 | 0) >= ($1_1 | 0)) {
     break label$1
    }
    $52(HEAPU8[($0_1 + $2_1 | 0) >> 0] | 0 | 0);
    $2_1 = $2_1 + 1 | 0;
    continue label$2;
   };
  }
 }
 
 function $32($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, $4_1 = 0, $5$hi = 0, $5_1 = 0, $3_1 = 0, $16_1 = 0, $17_1 = 0, $18_1 = 0, $6_1 = Math_fround(0), $7_1 = Math_fround(0), $8_1 = 0.0, $9_1 = 0.0;
  $2_1 = global$0 - 160 | 0;
  global$0 = $2_1;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 148 | 0) >> 2] = 0;
  HEAP32[($2_1 + 152 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 140 | 0) >> 2] = 0;
  HEAP32[($2_1 + 144 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 132 | 0) >> 2] = 0;
  HEAP32[($2_1 + 136 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 124 | 0) >> 2] = 0;
  HEAP32[($2_1 + 128 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 116 | 0) >> 2] = 0;
  HEAP32[($2_1 + 120 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 108 | 0) >> 2] = 11;
  HEAP32[($2_1 + 112 | 0) >> 2] = i64toi32_i32$0;
  $3_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1 + 104 | 0;
  HEAP32[($2_1 + 104 | 0) >> 2] = $3_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             label$12 : {
              label$13 : {
               label$14 : {
                label$15 : {
                 label$16 : {
                  label$17 : {
                   label$18 : {
                    label$19 : {
                     label$20 : {
                      label$21 : {
                       label$22 : {
                        label$23 : {
                         label$24 : {
                          label$25 : {
                           label$26 : {
                            if (($0_1 | 0) > (62 | 0)) {
                             break label$26
                            }
                            $4_1 = $0_1 + -2 | 0;
                            if ($4_1 >>> 0 > 32 >>> 0) {
                             break label$2
                            }
                            switch ($4_1 | 0) {
                            case 32:
                             break label$11;
                            case 30:
                             break label$12;
                            case 28:
                             break label$13;
                            case 26:
                             break label$14;
                            case 24:
                             break label$15;
                            case 22:
                             break label$16;
                            case 20:
                             break label$17;
                            case 12:
                            case 18:
                             break label$18;
                            case 16:
                             break label$19;
                            case 1:
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                            case 15:
                            case 17:
                            case 19:
                            case 21:
                            case 23:
                            case 25:
                            case 27:
                            case 31:
                             break label$2;
                            case 14:
                             break label$20;
                            case 10:
                             break label$21;
                            case 2:
                            case 8:
                             break label$22;
                            case 6:
                             break label$23;
                            case 4:
                             break label$24;
                            case 29:
                             break label$4;
                            default:
                             break label$25;
                            };
                           }
                           label$27 : {
                            if (($0_1 | 0) > (4068 | 0)) {
                             break label$27
                            }
                            if (($0_1 | 0) == (63 | 0)) {
                             break label$10
                            }
                            if (($0_1 | 0) == (3045 | 0)) {
                             break label$6
                            }
                            break label$2;
                           }
                           if (($0_1 | 0) == (4069 | 0)) {
                            break label$7
                           }
                           if (($0_1 | 0) == (5093 | 0)) {
                            break label$8
                           }
                           if (($0_1 | 0) != (6117 | 0)) {
                            break label$2
                           }
                           if ($1_1) {
                            break label$9
                           }
                           break label$3;
                          }
                          label$28 : {
                           if (!($1_1 & 1 | 0)) {
                            break label$28
                           }
                           $31(66007 | 0, 4 | 0);
                           break label$1;
                          }
                          $31(66011 | 0, 5 | 0);
                          break label$1;
                         }
                         $53(($1_1 << 24 | 0) >> 24 | 0 | 0);
                         break label$1;
                        }
                        $53(($1_1 << 16 | 0) >> 16 | 0 | 0);
                        break label$1;
                       }
                       $53($1_1 | 0);
                       break label$1;
                      }
                      label$29 : {
                       i64toi32_i32$2 = $1_1;
                       i64toi32_i32$0 = HEAP32[$1_1 >> 2] | 0;
                       i64toi32_i32$1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
                       $5_1 = i64toi32_i32$0;
                       $5$hi = i64toi32_i32$1;
                       i64toi32_i32$2 = i64toi32_i32$0;
                       i64toi32_i32$0 = -1;
                       i64toi32_i32$3 = -1;
                       if ((i64toi32_i32$1 | 0) > (i64toi32_i32$0 | 0)) {
                        $16_1 = 1
                       } else {
                        if ((i64toi32_i32$1 | 0) >= (i64toi32_i32$0 | 0)) {
                         if (i64toi32_i32$2 >>> 0 <= i64toi32_i32$3 >>> 0) {
                          $17_1 = 0
                         } else {
                          $17_1 = 1
                         }
                         $18_1 = $17_1;
                        } else {
                         $18_1 = 0
                        }
                        $16_1 = $18_1;
                       }
                       if ($16_1) {
                        break label$29
                       }
                       $52(45 | 0);
                       i64toi32_i32$2 = $5$hi;
                       i64toi32_i32$2 = 0;
                       i64toi32_i32$3 = 0;
                       i64toi32_i32$1 = $5$hi;
                       i64toi32_i32$0 = $5_1;
                       i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0) + i64toi32_i32$1 | 0;
                       i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
                       $5_1 = i64toi32_i32$3 - i64toi32_i32$0 | 0;
                       $5$hi = i64toi32_i32$5;
                      }
                      i64toi32_i32$5 = $5$hi;
                      $55($5_1 | 0, i64toi32_i32$5 | 0);
                      break label$1;
                     }
                     $54($1_1 & 255 | 0 | 0);
                     break label$1;
                    }
                    $54($1_1 & 65535 | 0 | 0);
                    break label$1;
                   }
                   $54($1_1 | 0);
                   break label$1;
                  }
                  i64toi32_i32$2 = $1_1;
                  i64toi32_i32$5 = HEAP32[$1_1 >> 2] | 0;
                  i64toi32_i32$3 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
                  $55(i64toi32_i32$5 | 0, i64toi32_i32$3 | 0);
                  break label$1;
                 }
                 $56($1_1 | 0);
                 break label$1;
                }
                $51(+(+(wasm2js_scratch_store_i32(0, $1_1), wasm2js_scratch_load_f32())));
                break label$1;
               }
               $51(+(+HEAPF64[$1_1 >> 3]));
               break label$1;
              }
              $6_1 = Math_fround(HEAPF32[($1_1 + 4 | 0) >> 2]);
              $7_1 = Math_fround(HEAPF32[$1_1 >> 2]);
              $52(40 | 0);
              $51(+(+$7_1));
              $51(+(+$6_1));
              $31(66016 | 0, 2 | 0);
              break label$1;
             }
             $8_1 = +HEAPF64[($1_1 + 8 | 0) >> 3];
             $9_1 = +HEAPF64[$1_1 >> 3];
             $52(40 | 0);
             $51(+$9_1);
             $51(+$8_1);
             $31(66016 | 0, 2 | 0);
             break label$1;
            }
            $31(HEAP32[$1_1 >> 2] | 0 | 0, HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0);
            break label$1;
           }
           i64toi32_i32$2 = $1_1;
           i64toi32_i32$3 = HEAP32[$1_1 >> 2] | 0;
           i64toi32_i32$5 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
           $57($2_1 + 16 | 0 | 0, i64toi32_i32$3 | 0, i64toi32_i32$5 | 0);
           $1_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
           $0_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
           break label$5;
          }
          $0_1 = HEAP32[$1_1 >> 2] | 0;
          HEAP32[($2_1 + 112 | 0) >> 2] = $0_1;
          $1_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
          break label$5;
         }
         if (!$1_1) {
          break label$3
         }
         $0_1 = HEAP32[$1_1 >> 2] | 0;
         HEAP32[($2_1 + 116 | 0) >> 2] = $0_1;
         $58($2_1 + 32 | 0 | 0, 67232 | 0, 30 | 0, $0_1 | 0, HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0);
         $58($2_1 + 24 | 0 | 0, HEAP32[($2_1 + 32 | 0) >> 2] | 0 | 0, HEAP32[($2_1 + 36 | 0) >> 2] | 0 | 0, 67262 | 0, 16 | 0);
         $1_1 = HEAP32[($2_1 + 28 | 0) >> 2] | 0;
         $0_1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
         break label$5;
        }
        if (!$1_1) {
         break label$3
        }
        $0_1 = HEAP32[$1_1 >> 2] | 0;
        HEAP32[(($2_1 + 104 | 0) + 16 | 0) >> 2] = $0_1;
        $58($2_1 + 48 | 0 | 0, 67200 | 0, 31 | 0, $0_1 | 0, HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0);
        $58($2_1 + 40 | 0 | 0, HEAP32[($2_1 + 48 | 0) >> 2] | 0 | 0, HEAP32[($2_1 + 52 | 0) >> 2] | 0 | 0, 67262 | 0, 16 | 0);
        $1_1 = HEAP32[($2_1 + 44 | 0) >> 2] | 0;
        $0_1 = HEAP32[($2_1 + 40 | 0) >> 2] | 0;
        break label$5;
       }
       if (!$1_1) {
        break label$3
       }
       $0_1 = HEAP32[$1_1 >> 2] | 0;
       HEAP32[(($2_1 + 104 | 0) + 20 | 0) >> 2] = $0_1;
       $58($2_1 + 80 | 0 | 0, 67280 | 0, 20 | 0, $0_1 | 0, HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0);
       $58($2_1 + 72 | 0 | 0, HEAP32[($2_1 + 80 | 0) >> 2] | 0 | 0, HEAP32[($2_1 + 84 | 0) >> 2] | 0 | 0, 67300 | 0, 4 | 0);
       $0_1 = HEAP32[($2_1 + 76 | 0) >> 2] | 0;
       $4_1 = HEAP32[($2_1 + 72 | 0) >> 2] | 0;
       $59($2_1 + 64 | 0 | 0, HEAP32[($1_1 + 8 | 0) >> 2] | 0 | 0);
       $1_1 = HEAP32[($2_1 + 64 | 0) >> 2] | 0;
       HEAP32[($2_1 + 128 | 0) >> 2] = $1_1;
       $58($2_1 + 56 | 0 | 0, $4_1 | 0, $0_1 | 0, $1_1 | 0, HEAP32[($2_1 + 68 | 0) >> 2] | 0 | 0);
       $1_1 = HEAP32[($2_1 + 60 | 0) >> 2] | 0;
       $0_1 = HEAP32[($2_1 + 56 | 0) >> 2] | 0;
      }
      HEAP32[($2_1 + 132 | 0) >> 2] = $0_1;
      $31($0_1 | 0, $1_1 | 0);
      break label$1;
     }
     $60($2_1 + 8 | 0 | 0, $1_1 | 0);
     $0_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
     HEAP32[($2_1 + 136 | 0) >> 2] = $0_1;
     $31($0_1 | 0, HEAP32[($2_1 + 12 | 0) >> 2] | 0 | 0);
     break label$1;
    }
    $14();
    abort();
   }
   HEAP32[($2_1 + 100 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + 96 | 0) >> 2] = $0_1;
   HEAP32[($2_1 + 88 | 0) >> 2] = $0_1;
   HEAP32[($2_1 + 92 | 0) >> 2] = $1_1;
   HEAP32[($2_1 + 152 | 0) >> 2] = $2_1 + 96 | 0;
   HEAP32[($2_1 + 148 | 0) >> 2] = $2_1 + 96 | 0;
   HEAP32[($2_1 + 140 | 0) >> 2] = $2_1 + 96 | 0;
   HEAP32[(($2_1 + 104 | 0) + 40 | 0) >> 2] = $2_1 + 88 | 0;
   $52(40 | 0);
   $54($0_1 | 0);
   $52(58 | 0);
   $56($1_1 | 0);
   $52(41 | 0);
  }
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
  global$0 = $2_1 + 160 | 0;
 }
 
 function $33() {
  $52(13 | 0);
  $52(10 | 0);
 }
 
 function $34() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $0_1 = 0, $1_1 = 0, $2_1 = 0, $19_1 = 0, $20_1 = 0, $23_1 = 0;
  $0_1 = __wasm_memory_size() << 16 | 0;
  HEAP32[(0 + 67728 | 0) >> 2] = $0_1;
  $1_1 = ($0_1 - 68621 | 0) >>> 6 | 0;
  $2_1 = ($1_1 + 68636 | 0) & -16 | 0;
  HEAP32[(0 + 67724 | 0) >> 2] = $2_1;
  HEAP32[(0 + 67720 | 0) >> 2] = ($0_1 - $2_1 | 0) >>> 4 | 0;
  $35(68621 | 0, $1_1 | 0);
  $7(6757 | 0) | 0;
  i64toi32_i32$0 = 2146959360;
  i64toi32_i32$0 = $36(5 | 0, i64toi32_i32$0 | 0, 67070 | 0, 6 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $19_1 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$0 + 67752 | 0) >> 2] = $19_1;
  HEAP32[(i64toi32_i32$0 + 67756 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = 2146959360;
  i64toi32_i32$1 = $36(5 | 0, i64toi32_i32$1 | 0, 67076 | 0, 5 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $20_1 = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  HEAP32[(i64toi32_i32$1 + 67744 | 0) >> 2] = $20_1;
  HEAP32[(i64toi32_i32$1 + 67748 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 2146959360;
  i64toi32_i32$0 = $36(5 | 0, i64toi32_i32$0 | 0, 67081 | 0, 7 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$1 = 2146959360;
  i64toi32_i32$1 = $36(5 | 0, i64toi32_i32$1 | 0, 67088 | 0, 2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$0 = $36(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0, 67090 | 0, 9 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $23_1 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$0 + 67768 | 0) >> 2] = $23_1;
  HEAP32[(i64toi32_i32$0 + 67772 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = 2146959360;
  i64toi32_i32$1 = $36(5 | 0, i64toi32_i32$1 | 0, 67099 | 0, 10 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 67768 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 67772 | 0) >> 2] | 0;
  i64toi32_i32$1 = $36(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 67109 | 0, 8 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $37(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 67768 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 67772 | 0) >> 2] | 0;
  i64toi32_i32$1 = $36(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 67117 | 0, 6 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $37(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 67768 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 67772 | 0) >> 2] | 0;
  i64toi32_i32$1 = $36(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 67123 | 0, 7 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $37(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 67768 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 67772 | 0) >> 2] | 0;
  i64toi32_i32$1 = $36(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 67130 | 0, 7 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $37(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 67768 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 67772 | 0) >> 2] | 0;
  i64toi32_i32$1 = $36(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 67137 | 0, 8 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $37(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 67768 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 67772 | 0) >> 2] | 0;
  i64toi32_i32$1 = $36(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, 67145 | 0, 6 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $37(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0) | 0;
  $38($0_1 | 0, 0 | 0);
  $39();
 }
 
 function $35($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = $0_1;
  label$1 : {
   label$2 : {
    label$3 : while (1) {
     if (!$1_1) {
      break label$2
     }
     if (!$2_1) {
      break label$1
     }
     HEAP8[$0_1 >> 0] = 0;
     $0_1 = $0_1 + 1 | 0;
     $1_1 = $1_1 + -1 | 0;
     $2_1 = $2_1 + 1 | 0;
     continue label$3;
    };
   }
   return;
  }
  $14();
  abort();
 }
 
 function $36($0_1, $0$hi, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, i64toi32_i32$1 = 0, $5_1 = 0;
  $3_1 = global$0 - 48 | 0;
  global$0 = $3_1;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 36 | 0) >> 2] = 0;
  HEAP32[($3_1 + 40 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3_1 + 28 | 0) >> 2] = 3;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $3_1;
  HEAP32[$3_1 >> 2] = $0_1;
  HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1 + 24 | 0;
  HEAP32[($3_1 + 24 | 0) >> 2] = $4_1;
  HEAP32[($3_1 + 32 | 0) >> 2] = $3_1;
  label$1 : {
   $5_1 = $64($0_1 | 0, i64toi32_i32$0 | 0) | 0;
   if (($5_1 | 1 | 0 | 0) == (7 | 0)) {
    break label$1
   }
   $4_1 = $8(12 | 0) | 0;
   HEAP32[(($3_1 + 24 | 0) + 12 | 0) >> 2] = $4_1;
   HEAP32[($3_1 + 40 | 0) >> 2] = $4_1;
   HEAP32[($4_1 + 8 | 0) >> 2] = $5_1;
   HEAP32[($4_1 + 4 | 0) >> 2] = 9;
   HEAP32[$4_1 >> 2] = 66834;
   $9(3045 | 0, $4_1 | 0);
   abort();
  }
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  fimport$6($3_1 + 16 | 0 | 0, $3_1 + 8 | 0 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0, $3_1 | 0);
  i64toi32_i32$0 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 20 | 0) >> 2] | 0;
  i64toi32_i32$1 = $65(i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $0_1 = i64toi32_i32$1;
  $0$hi = i64toi32_i32$0;
  HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
  global$0 = $3_1 + 48 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $37($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var $1_1 = 0, $2_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, $3_1 = 0.0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $1_1 = global$0 - 48 | 0;
  global$0 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 32 | 0) >> 2] = 0;
  HEAP32[($1_1 + 36 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 20 | 0) >> 2] = 6;
  i64toi32_i32$0 = $0$hi;
  HEAP32[$1_1 >> 2] = $0_1;
  HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 16 | 0;
  HEAP32[($1_1 + 16 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 24 | 0) >> 2] = $1_1;
  HEAP32[($1_1 + 44 | 0) >> 2] = $1_1 + 8 | 0;
  HEAP32[($1_1 + 40 | 0) >> 2] = $1_1 + 8 | 0;
  HEAP32[($1_1 + 28 | 0) >> 2] = $1_1 + 8 | 0;
  HEAP32[($1_1 + 8 | 0) >> 2] = $0_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  label$1 : {
   label$2 : {
    if (!(($80($0_1 | 0, i64toi32_i32$0 | 0) | 0) & 1 | 0)) {
     break label$2
    }
    label$3 : {
     i64toi32_i32$0 = $0$hi;
     if (($0_1 | 0) == (1 | 0) & (i64toi32_i32$0 | 0) == (2146959360 | 0) | 0) {
      break label$3
     }
     label$4 : {
      wasm2js_scratch_store_i32(0 | 0, $0_1 | 0);
      wasm2js_scratch_store_i32(1 | 0, $0$hi | 0);
      $3_1 = +wasm2js_scratch_load_f64();
      if (!(Math_abs($3_1) < 2147483648.0)) {
       break label$4
      }
      $4_1 = ~~$3_1;
      break label$1;
     }
     $4_1 = -2147483648;
     break label$1;
    }
    $4_1 = 0;
    break label$1;
   }
   $2_1 = $8(12 | 0) | 0;
   HEAP32[($1_1 + 32 | 0) >> 2] = $2_1;
   HEAP32[($1_1 + 36 | 0) >> 2] = $2_1;
   (wasm2js_i32$0 = $2_1, wasm2js_i32$1 = $64($0_1 | 0, $0$hi | 0) | 0), HEAP32[(wasm2js_i32$0 + 8 | 0) >> 2] = wasm2js_i32$1;
   HEAP32[($2_1 + 4 | 0) >> 2] = 9;
   HEAP32[$2_1 >> 2] = 66854;
   $9(3045 | 0, $2_1 | 0);
   abort();
  }
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  global$0 = $1_1 + 48 | 0;
  return $4_1 | 0;
 }
 
 function $38($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $9_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, $11_1 = 0, $18_1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$6 = 0, $19_1 = 0, i64toi32_i32$5 = 0, $21_1 = 0, $20_1 = 0, $16_1 = 0, $4_1 = 0, $6_1 = 0, $6$hi = 0, $17_1 = 0, $14_1 = 0, $15_1 = 0, $7_1 = 0, $38_1 = 0, $7$hi = 0, $28_1 = 0, $39_1 = 0, i64toi32_i32$2 = 0.0, $8_1 = 0, $8$hi = 0, $13_1 = 0, $12_1 = 0, $29_1 = 0, $5_1 = 0.0, $65_1 = 0, $66_1 = 0, $67_1 = 0, $68_1 = 0, $69_1 = 0, $70_1 = 0, $71_1 = 0, $72_1 = 0, $73_1 = 0, $74_1 = 0, $75_1 = 0, $76_1 = 0, $77_1 = 0, $78_1 = 0, $79_1 = 0, $80_1 = 0, $24_1 = 0, $25_1 = 0, $26_1 = 0, $3_1 = 0, $81_1 = 0, $82_1 = 0, $83_1 = 0, $84_1 = 0, $85_1 = 0, $86_1 = 0, $87_1 = 0, $88_1 = 0, $89_1 = 0, $90_1 = 0, $91_1 = 0, $92_1 = 0, $93_1 = 0, $94_1 = 0, $95_1 = 0, $96_1 = 0, $97_1 = 0, $98_1 = 0, $99_1 = 0, $100_1 = 0, $101 = 0, $22_1 = 0, $23_1 = 0, $27_1 = 0, $102 = 0, $127$hi = 0, $10_1 = 0, $10$hi = 0, $156 = 0, $156$hi = 0, $159$hi = 0, $181 = 0, $181$hi = 0, $183 = 0, $183$hi = 0, $205 = 0, $205$hi = 0, $206 = 0, $206$hi = 0, $220$hi = 0, $358 = 0, $30_1 = 0, $31_1 = 0, $32_1 = 0, $33_1 = 0, $34_1 = 0, $35_1 = 0, $36_1 = 0, $37_1 = 0;
  $2_1 = global$0 - 912 | 0;
  global$0 = $2_1;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 680 | 0) >> 2] = 0;
  HEAP32[($2_1 + 684 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 672 | 0) >> 2] = 0;
  HEAP32[($2_1 + 676 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 664 | 0) >> 2] = 0;
  HEAP32[($2_1 + 668 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 656 | 0) >> 2] = 0;
  HEAP32[($2_1 + 660 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 648 | 0) >> 2] = 0;
  HEAP32[($2_1 + 652 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 640 | 0) >> 2] = 0;
  HEAP32[($2_1 + 644 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 632 | 0) >> 2] = 0;
  HEAP32[($2_1 + 636 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 624 | 0) >> 2] = 0;
  HEAP32[($2_1 + 628 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 616 | 0) >> 2] = 0;
  HEAP32[($2_1 + 620 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 608 | 0) >> 2] = 0;
  HEAP32[($2_1 + 612 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 600 | 0) >> 2] = 0;
  HEAP32[($2_1 + 604 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 592 | 0) >> 2] = 0;
  HEAP32[($2_1 + 596 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 584 | 0) >> 2] = 0;
  HEAP32[($2_1 + 588 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 576 | 0) >> 2] = 0;
  HEAP32[($2_1 + 580 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 568 | 0) >> 2] = 0;
  HEAP32[($2_1 + 572 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 560 | 0) >> 2] = 0;
  HEAP32[($2_1 + 564 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 552 | 0) >> 2] = 0;
  HEAP32[($2_1 + 556 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 544 | 0) >> 2] = 0;
  HEAP32[($2_1 + 548 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 536 | 0) >> 2] = 0;
  HEAP32[($2_1 + 540 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 528 | 0) >> 2] = 0;
  HEAP32[($2_1 + 532 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 520 | 0) >> 2] = 0;
  HEAP32[($2_1 + 524 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 512 | 0) >> 2] = 0;
  HEAP32[($2_1 + 516 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 504 | 0) >> 2] = 0;
  HEAP32[($2_1 + 508 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 496 | 0) >> 2] = 0;
  HEAP32[($2_1 + 500 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 488 | 0) >> 2] = 0;
  HEAP32[($2_1 + 492 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 480 | 0) >> 2] = 0;
  HEAP32[($2_1 + 484 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 472 | 0) >> 2] = 0;
  HEAP32[($2_1 + 476 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 464 | 0) >> 2] = 0;
  HEAP32[($2_1 + 468 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 456 | 0) >> 2] = 0;
  HEAP32[($2_1 + 460 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 448 | 0) >> 2] = 0;
  HEAP32[($2_1 + 452 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 440 | 0) >> 2] = 0;
  HEAP32[($2_1 + 444 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 118;
  HEAP32[($2_1 + 432 | 0) >> 2] = 0;
  HEAP32[($2_1 + 436 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 904 | 0) >> 2] = 0;
  HEAP32[($2_1 + 908 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 896 | 0) >> 2] = 0;
  HEAP32[($2_1 + 900 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 888 | 0) >> 2] = 0;
  HEAP32[($2_1 + 892 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 880 | 0) >> 2] = 0;
  HEAP32[($2_1 + 884 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 872 | 0) >> 2] = 0;
  HEAP32[($2_1 + 876 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 864 | 0) >> 2] = 0;
  HEAP32[($2_1 + 868 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 856 | 0) >> 2] = 0;
  HEAP32[($2_1 + 860 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 848 | 0) >> 2] = 0;
  HEAP32[($2_1 + 852 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 840 | 0) >> 2] = 0;
  HEAP32[($2_1 + 844 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 832 | 0) >> 2] = 0;
  HEAP32[($2_1 + 836 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 824 | 0) >> 2] = 0;
  HEAP32[($2_1 + 828 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 816 | 0) >> 2] = 0;
  HEAP32[($2_1 + 820 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 808 | 0) >> 2] = 0;
  HEAP32[($2_1 + 812 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 800 | 0) >> 2] = 0;
  HEAP32[($2_1 + 804 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 792 | 0) >> 2] = 0;
  HEAP32[($2_1 + 796 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 784 | 0) >> 2] = 0;
  HEAP32[($2_1 + 788 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 776 | 0) >> 2] = 0;
  HEAP32[($2_1 + 780 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 768 | 0) >> 2] = 0;
  HEAP32[($2_1 + 772 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 760 | 0) >> 2] = 0;
  HEAP32[($2_1 + 764 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 752 | 0) >> 2] = 0;
  HEAP32[($2_1 + 756 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 744 | 0) >> 2] = 0;
  HEAP32[($2_1 + 748 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 736 | 0) >> 2] = 0;
  HEAP32[($2_1 + 740 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 728 | 0) >> 2] = 0;
  HEAP32[($2_1 + 732 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 720 | 0) >> 2] = 0;
  HEAP32[($2_1 + 724 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 712 | 0) >> 2] = 0;
  HEAP32[($2_1 + 716 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 704 | 0) >> 2] = 0;
  HEAP32[($2_1 + 708 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 696 | 0) >> 2] = 0;
  HEAP32[($2_1 + 700 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 688 | 0) >> 2] = 0;
  HEAP32[($2_1 + 692 | 0) >> 2] = i64toi32_i32$0;
  $3_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[($2_1 + 432 | 0) >> 2] = $3_1;
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1 + 432 | 0;
  $4_1 = $8(176 | 0) | 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = 1;
  HEAP32[$4_1 >> 2] = 2;
  HEAP32[($2_1 + 440 | 0) >> 2] = $4_1;
  HEAP32[($2_1 + 840 | 0) >> 2] = $4_1;
  label$1 : {
   label$2 : {
    $5_1 = +fimport$3();
    if (!(Math_abs($5_1) < 9223372036854775808.0)) {
     break label$2
    }
    i64toi32_i32$2 = $5_1;
    if (Math_abs(i64toi32_i32$2) >= 1.0) {
     if (i64toi32_i32$2 > 0.0) {
      $81_1 = ~~Math_min(Math_floor(i64toi32_i32$2 / 4294967296.0), 4294967296.0 - 1.0) >>> 0
     } else {
      $81_1 = ~~Math_ceil((i64toi32_i32$2 - +(~~i64toi32_i32$2 >>> 0 >>> 0)) / 4294967296.0) >>> 0
     }
     $82_1 = $81_1;
    } else {
     $82_1 = 0
    }
    i64toi32_i32$0 = $82_1;
    $6_1 = ~~i64toi32_i32$2 >>> 0;
    $6$hi = i64toi32_i32$0;
    break label$1;
   }
   i64toi32_i32$0 = -2147483648;
   $6_1 = 0;
   $6$hi = i64toi32_i32$0;
  }
  i64toi32_i32$0 = $6$hi;
  i64toi32_i32$1 = 0;
  i64toi32_i32$1 = __wasm_i64_mul($6_1 | 0, i64toi32_i32$0 | 0, 1e6 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $7_1 = i64toi32_i32$1;
  $7$hi = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$1 = __wasm_i64_sdiv($7_1 | 0, i64toi32_i32$0 | 0, 1e9 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $6_1 = i64toi32_i32$1;
  $6$hi = i64toi32_i32$0;
  i64toi32_i32$1 = -1;
  i64toi32_i32$1 = __wasm_i64_mul($6_1 | 0, i64toi32_i32$0 | 0, -1e9 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $127$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $7$hi;
  i64toi32_i32$0 = $127$hi;
  i64toi32_i32$3 = i64toi32_i32$1;
  i64toi32_i32$1 = $7$hi;
  i64toi32_i32$4 = $7_1;
  i64toi32_i32$5 = i64toi32_i32$3 + i64toi32_i32$4 | 0;
  i64toi32_i32$6 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
  if (i64toi32_i32$5 >>> 0 < i64toi32_i32$4 >>> 0) {
   i64toi32_i32$6 = i64toi32_i32$6 + 1 | 0
  }
  $8_1 = i64toi32_i32$5;
  $8$hi = i64toi32_i32$6;
  $9_1 = $4_1 + 72 | 0;
  label$3 : {
   label$4 : {
    i64toi32_i32$6 = $6$hi;
    i64toi32_i32$0 = $6_1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$4 = -1612679296;
    i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$4 | 0;
    i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$3 | 0;
    if (i64toi32_i32$1 >>> 0 < i64toi32_i32$4 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    $10_1 = i64toi32_i32$1;
    $10$hi = i64toi32_i32$5;
    i64toi32_i32$6 = i64toi32_i32$1;
    i64toi32_i32$0 = 2;
    i64toi32_i32$4 = 0;
    if (i64toi32_i32$5 >>> 0 < i64toi32_i32$0 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 < i64toi32_i32$4 >>> 0 | 0) | 0) {
     break label$4
    }
    $11_1 = $4_1 + 120 | 0;
    i64toi32_i32$5 = $11_1;
    i64toi32_i32$6 = 0;
    HEAP32[$11_1 >> 2] = 0;
    HEAP32[($11_1 + 4 | 0) >> 2] = i64toi32_i32$6;
    HEAP32[($11_1 + 16 | 0) >> 2] = 0;
    i64toi32_i32$5 = $11_1 + 8 | 0;
    i64toi32_i32$6 = 0;
    HEAP32[i64toi32_i32$5 >> 2] = 0;
    HEAP32[(i64toi32_i32$5 + 4 | 0) >> 2] = i64toi32_i32$6;
    i64toi32_i32$6 = $6$hi;
    i64toi32_i32$4 = $6_1;
    i64toi32_i32$5 = 14;
    i64toi32_i32$0 = 2006054656;
    i64toi32_i32$3 = i64toi32_i32$4 + i64toi32_i32$0 | 0;
    i64toi32_i32$1 = i64toi32_i32$6 + i64toi32_i32$5 | 0;
    if (i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
    }
    $7_1 = i64toi32_i32$3;
    $7$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $8$hi;
    i64toi32_i32$6 = $8_1;
    i64toi32_i32$4 = 0;
    i64toi32_i32$0 = 32;
    i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$6 << i64toi32_i32$5 | 0;
     $83_1 = 0;
    } else {
     i64toi32_i32$4 = ((1 << i64toi32_i32$5 | 0) - 1 | 0) & (i64toi32_i32$6 >>> (32 - i64toi32_i32$5 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$5 | 0) | 0;
     $83_1 = i64toi32_i32$6 << i64toi32_i32$5 | 0;
    }
    i64toi32_i32$1 = $83_1;
    i64toi32_i32$6 = 0;
    i64toi32_i32$0 = 32;
    i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$6 = i64toi32_i32$4 >> 31 | 0;
     $84_1 = i64toi32_i32$4 >> i64toi32_i32$5 | 0;
    } else {
     i64toi32_i32$6 = i64toi32_i32$4 >> i64toi32_i32$5 | 0;
     $84_1 = (((1 << i64toi32_i32$5 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$5 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$5 | 0) | 0;
    }
    $6_1 = $84_1;
    $6$hi = i64toi32_i32$6;
    break label$3;
   }
   $11_1 = $4_1 + 96 | 0;
   i64toi32_i32$1 = $11_1;
   i64toi32_i32$6 = 0;
   HEAP32[$11_1 >> 2] = 0;
   HEAP32[($11_1 + 4 | 0) >> 2] = i64toi32_i32$6;
   HEAP32[($11_1 + 16 | 0) >> 2] = 0;
   i64toi32_i32$1 = $11_1 + 8 | 0;
   i64toi32_i32$6 = 0;
   HEAP32[i64toi32_i32$1 >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$6;
   i64toi32_i32$6 = $10$hi;
   i64toi32_i32$4 = $10_1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$0 = 30;
   i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = i64toi32_i32$4 << i64toi32_i32$5 | 0;
    $85_1 = 0;
   } else {
    i64toi32_i32$1 = ((1 << i64toi32_i32$5 | 0) - 1 | 0) & (i64toi32_i32$4 >>> (32 - i64toi32_i32$5 | 0) | 0) | 0 | (i64toi32_i32$6 << i64toi32_i32$5 | 0) | 0;
    $85_1 = i64toi32_i32$4 << i64toi32_i32$5 | 0;
   }
   $156 = $85_1;
   $156$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $8$hi;
   i64toi32_i32$6 = $8_1;
   i64toi32_i32$4 = 0;
   i64toi32_i32$0 = 32;
   i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
    i64toi32_i32$4 = i64toi32_i32$6 << i64toi32_i32$5 | 0;
    $86_1 = 0;
   } else {
    i64toi32_i32$4 = ((1 << i64toi32_i32$5 | 0) - 1 | 0) & (i64toi32_i32$6 >>> (32 - i64toi32_i32$5 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$5 | 0) | 0;
    $86_1 = i64toi32_i32$6 << i64toi32_i32$5 | 0;
   }
   i64toi32_i32$1 = $86_1;
   i64toi32_i32$6 = 0;
   i64toi32_i32$0 = 32;
   i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
    i64toi32_i32$6 = i64toi32_i32$4 >> 31 | 0;
    $87_1 = i64toi32_i32$4 >> i64toi32_i32$5 | 0;
   } else {
    i64toi32_i32$6 = i64toi32_i32$4 >> i64toi32_i32$5 | 0;
    $87_1 = (((1 << i64toi32_i32$5 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$5 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$5 | 0) | 0;
   }
   $159$hi = i64toi32_i32$6;
   i64toi32_i32$6 = $156$hi;
   i64toi32_i32$4 = $156;
   i64toi32_i32$1 = $159$hi;
   i64toi32_i32$0 = $87_1;
   i64toi32_i32$1 = i64toi32_i32$6 | i64toi32_i32$1 | 0;
   i64toi32_i32$6 = i64toi32_i32$4 | i64toi32_i32$0 | 0;
   i64toi32_i32$4 = -2147483648;
   i64toi32_i32$0 = 0;
   i64toi32_i32$4 = i64toi32_i32$1 | i64toi32_i32$4 | 0;
   $6_1 = i64toi32_i32$6 | i64toi32_i32$0 | 0;
   $6$hi = i64toi32_i32$4;
   i64toi32_i32$4 = $7$hi;
   i64toi32_i32$1 = $7_1;
   i64toi32_i32$6 = 0;
   i64toi32_i32$0 = 1;
   i64toi32_i32$6 = i64toi32_i32$4 | i64toi32_i32$6 | 0;
   $7_1 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
   $7$hi = i64toi32_i32$6;
  }
  i64toi32_i32$1 = $9_1 + 16 | 0;
  i64toi32_i32$6 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$6;
  i64toi32_i32$1 = $9_1 + 8 | 0;
  i64toi32_i32$6 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$6;
  i64toi32_i32$1 = $9_1;
  i64toi32_i32$6 = 0;
  HEAP32[$9_1 >> 2] = 0;
  HEAP32[($9_1 + 4 | 0) >> 2] = i64toi32_i32$6;
  HEAP32[($4_1 + 88 | 0) >> 2] = 68504;
  i64toi32_i32$6 = $7$hi;
  i64toi32_i32$1 = $4_1;
  HEAP32[(i64toi32_i32$1 + 80 | 0) >> 2] = $7_1;
  HEAP32[(i64toi32_i32$1 + 84 | 0) >> 2] = i64toi32_i32$6;
  i64toi32_i32$6 = $6$hi;
  HEAP32[(i64toi32_i32$1 + 72 | 0) >> 2] = $6_1;
  HEAP32[(i64toi32_i32$1 + 76 | 0) >> 2] = i64toi32_i32$6;
  label$5 : {
   i64toi32_i32$4 = $6_1;
   i64toi32_i32$1 = -1;
   i64toi32_i32$0 = -1;
   if ((i64toi32_i32$6 | 0) > (i64toi32_i32$1 | 0)) {
    $88_1 = 1
   } else {
    if ((i64toi32_i32$6 | 0) >= (i64toi32_i32$1 | 0)) {
     if (i64toi32_i32$4 >>> 0 <= i64toi32_i32$0 >>> 0) {
      $89_1 = 0
     } else {
      $89_1 = 1
     }
     $90_1 = $89_1;
    } else {
     $90_1 = 0
    }
    $88_1 = $90_1;
   }
   if ($88_1) {
    break label$5
   }
   i64toi32_i32$4 = $6$hi;
   i64toi32_i32$0 = $6_1;
   i64toi32_i32$6 = 0;
   i64toi32_i32$1 = 30;
   i64toi32_i32$5 = i64toi32_i32$1 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
    i64toi32_i32$6 = 0;
    $91_1 = i64toi32_i32$4 >>> i64toi32_i32$5 | 0;
   } else {
    i64toi32_i32$6 = i64toi32_i32$4 >>> i64toi32_i32$5 | 0;
    $91_1 = (((1 << i64toi32_i32$5 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$5 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$5 | 0) | 0;
   }
   i64toi32_i32$4 = $91_1;
   i64toi32_i32$0 = 1;
   i64toi32_i32$1 = -1;
   i64toi32_i32$0 = i64toi32_i32$6 & i64toi32_i32$0 | 0;
   i64toi32_i32$6 = i64toi32_i32$4 & i64toi32_i32$1 | 0;
   i64toi32_i32$4 = 13;
   i64toi32_i32$1 = -676233344;
   i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
   i64toi32_i32$3 = i64toi32_i32$0 + i64toi32_i32$4 | 0;
   if (i64toi32_i32$5 >>> 0 < i64toi32_i32$1 >>> 0) {
    i64toi32_i32$3 = i64toi32_i32$3 + 1 | 0
   }
   $7_1 = i64toi32_i32$5;
   $7$hi = i64toi32_i32$3;
  }
  label$6 : {
   label$7 : {
    label$8 : {
     label$9 : {
      label$10 : {
       label$11 : {
        label$12 : {
         i64toi32_i32$3 = $6$hi;
         i64toi32_i32$0 = $6_1;
         i64toi32_i32$6 = 0;
         i64toi32_i32$1 = 1073741823;
         i64toi32_i32$6 = i64toi32_i32$3 & i64toi32_i32$6 | 0;
         $181 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
         $181$hi = i64toi32_i32$6;
         i64toi32_i32$6 = $7$hi;
         i64toi32_i32$0 = 0;
         i64toi32_i32$0 = __wasm_i64_mul($7_1 | 0, i64toi32_i32$6 | 0, 1e9 | 0, i64toi32_i32$0 | 0) | 0;
         i64toi32_i32$6 = i64toi32_i32$HIGH_BITS;
         $183 = i64toi32_i32$0;
         $183$hi = i64toi32_i32$6;
         i64toi32_i32$6 = $181$hi;
         i64toi32_i32$3 = $181;
         i64toi32_i32$0 = $183$hi;
         i64toi32_i32$1 = $183;
         i64toi32_i32$4 = i64toi32_i32$3 + i64toi32_i32$1 | 0;
         i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
         if (i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0) {
          i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
         }
         i64toi32_i32$6 = i64toi32_i32$4;
         i64toi32_i32$3 = -1582169109;
         i64toi32_i32$1 = 1025114112;
         i64toi32_i32$0 = i64toi32_i32$4 + i64toi32_i32$1 | 0;
         i64toi32_i32$4 = i64toi32_i32$5 + i64toi32_i32$3 | 0;
         if (i64toi32_i32$0 >>> 0 < i64toi32_i32$1 >>> 0) {
          i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
         }
         $8_1 = i64toi32_i32$0;
         $8$hi = i64toi32_i32$4;
         i64toi32_i32$6 = 0;
         i64toi32_i32$6 = __wasm_i64_sdiv(i64toi32_i32$0 | 0, i64toi32_i32$4 | 0, 1e9 | 0, i64toi32_i32$6 | 0) | 0;
         i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
         $6_1 = i64toi32_i32$6;
         $6$hi = i64toi32_i32$4;
         i64toi32_i32$5 = i64toi32_i32$6;
         i64toi32_i32$6 = 0;
         i64toi32_i32$1 = 99;
         if (i64toi32_i32$4 >>> 0 > i64toi32_i32$6 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$6 | 0) & i64toi32_i32$5 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0) {
          break label$12
         }
         i64toi32_i32$5 = $6$hi;
         $9_1 = $6_1;
         if (($9_1 | 0) < (10 | 0)) {
          break label$11
         }
         $9_1 = $9_1 << 1 | 0;
         if ($9_1 >>> 0 > 198 >>> 0) {
          break label$8
         }
         $12_1 = $9_1 + 66464 | 0;
         $13_1 = 2;
         break label$9;
        }
        $14_1 = $8(65 | 0) | 0;
        HEAP32[($2_1 + 444 | 0) >> 2] = $14_1;
        i64toi32_i32$5 = $6$hi;
        i64toi32_i32$5 = 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$4 = $6$hi;
        i64toi32_i32$6 = $6_1;
        i64toi32_i32$3 = i64toi32_i32$1 - i64toi32_i32$6 | 0;
        i64toi32_i32$0 = (i64toi32_i32$1 >>> 0 < i64toi32_i32$6 >>> 0) + i64toi32_i32$4 | 0;
        i64toi32_i32$0 = i64toi32_i32$5 - i64toi32_i32$0 | 0;
        $205 = i64toi32_i32$3;
        $205$hi = i64toi32_i32$0;
        i64toi32_i32$0 = i64toi32_i32$4;
        $206 = i64toi32_i32$6;
        $206$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $8$hi;
        i64toi32_i32$5 = $8_1;
        i64toi32_i32$1 = -1;
        i64toi32_i32$6 = -999999999;
        if ((i64toi32_i32$0 | 0) < (i64toi32_i32$1 | 0)) {
         $92_1 = 1
        } else {
         if ((i64toi32_i32$0 | 0) <= (i64toi32_i32$1 | 0)) {
          if (i64toi32_i32$5 >>> 0 >= i64toi32_i32$6 >>> 0) {
           $93_1 = 0
          } else {
           $93_1 = 1
          }
          $94_1 = $93_1;
         } else {
          $94_1 = 0
         }
         $92_1 = $94_1;
        }
        i64toi32_i32$4 = $92_1;
        i64toi32_i32$5 = $205$hi;
        i64toi32_i32$0 = $206$hi;
        i64toi32_i32$1 = i64toi32_i32$4 ? $205 : $206;
        i64toi32_i32$6 = i64toi32_i32$4 ? i64toi32_i32$5 : i64toi32_i32$0;
        $6_1 = i64toi32_i32$1;
        $6$hi = i64toi32_i32$6;
        $15_1 = $14_1 + -2 | 0;
        $16_1 = 65;
        label$13 : while (1) {
         i64toi32_i32$6 = $6$hi;
         i64toi32_i32$4 = $6_1;
         i64toi32_i32$1 = 0;
         i64toi32_i32$0 = 1e9;
         if (i64toi32_i32$6 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$6 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0 | 0) | 0) {
          break label$10
         }
         $17_1 = $15_1 + $16_1 | 0;
         i64toi32_i32$4 = $6$hi;
         i64toi32_i32$6 = 0;
         i64toi32_i32$6 = __wasm_i64_udiv($6_1 | 0, i64toi32_i32$4 | 0, 1e9 | 0, i64toi32_i32$6 | 0) | 0;
         i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
         $7_1 = i64toi32_i32$6;
         $7$hi = i64toi32_i32$4;
         i64toi32_i32$6 = -1;
         i64toi32_i32$6 = __wasm_i64_mul($7_1 | 0, i64toi32_i32$4 | 0, -1e9 | 0, i64toi32_i32$6 | 0) | 0;
         i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
         $220$hi = i64toi32_i32$4;
         i64toi32_i32$4 = $6$hi;
         i64toi32_i32$4 = $220$hi;
         i64toi32_i32$0 = i64toi32_i32$6;
         i64toi32_i32$6 = $6$hi;
         i64toi32_i32$1 = $6_1;
         i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
         i64toi32_i32$3 = i64toi32_i32$4 + i64toi32_i32$6 | 0;
         if (i64toi32_i32$5 >>> 0 < i64toi32_i32$1 >>> 0) {
          i64toi32_i32$3 = i64toi32_i32$3 + 1 | 0
         }
         $11_1 = i64toi32_i32$5;
         $9_1 = 0;
         label$14 : {
          label$15 : while (1) {
           if (($9_1 | 0) == (-8 | 0)) {
            break label$14
           }
           $18_1 = ($11_1 >>> 0) / (100 >>> 0) | 0;
           $19_1 = $16_1 + $9_1 | 0;
           if (($19_1 + -1 | 0) >>> 0 > 64 >>> 0) {
            break label$6
           }
           $11_1 = ($11_1 - Math_imul($18_1, 100) | 0) << 1 | 0;
           $20_1 = $11_1 | 1 | 0;
           if ($20_1 >>> 0 >= 200 >>> 0) {
            break label$6
           }
           $21_1 = $17_1 + $9_1 | 0;
           HEAP8[($21_1 + 1 | 0) >> 0] = HEAPU8[($20_1 + 66464 | 0) >> 0] | 0;
           if (($19_1 + -2 | 0) >>> 0 >= 65 >>> 0) {
            break label$6
           }
           HEAP8[$21_1 >> 0] = HEAPU8[($11_1 + 66464 | 0) >> 0] | 0;
           $9_1 = $9_1 + -2 | 0;
           $11_1 = $18_1;
           continue label$15;
          };
         }
         $16_1 = ($16_1 + $9_1 | 0) + -1 | 0;
         if ($16_1 >>> 0 > 64 >>> 0) {
          break label$6
         }
         $11_1 = $11_1 << 1 | 0 | 1 | 0;
         if ($11_1 >>> 0 >= 200 >>> 0) {
          break label$6
         }
         HEAP8[(($17_1 + $9_1 | 0) + 1 | 0) >> 0] = HEAPU8[($11_1 + 66464 | 0) >> 0] | 0;
         i64toi32_i32$3 = $7$hi;
         $6_1 = $7_1;
         $6$hi = i64toi32_i32$3;
         continue label$13;
        };
       }
       $12_1 = $9_1 + 66416 | 0;
       $13_1 = 1;
       break label$9;
      }
      $9_1 = $16_1 + -1 | 0;
      i64toi32_i32$3 = $6$hi;
      $11_1 = $6_1;
      label$16 : {
       label$17 : while (1) {
        if ($11_1 >>> 0 < 100 >>> 0) {
         break label$16
        }
        $18_1 = ($11_1 >>> 0) / (100 >>> 0) | 0;
        if ($9_1 >>> 0 > 64 >>> 0) {
         break label$6
        }
        $11_1 = ($11_1 - Math_imul($18_1, 100) | 0) << 1 | 0;
        $19_1 = $11_1 | 1 | 0;
        if ($19_1 >>> 0 >= 200 >>> 0) {
         break label$6
        }
        $20_1 = $14_1 + $9_1 | 0;
        HEAP8[$20_1 >> 0] = HEAPU8[($19_1 + 66464 | 0) >> 0] | 0;
        if (($9_1 + -1 | 0) >>> 0 >= 65 >>> 0) {
         break label$6
        }
        HEAP8[($20_1 + -1 | 0) >> 0] = HEAPU8[($11_1 + 66464 | 0) >> 0] | 0;
        $9_1 = $9_1 + -2 | 0;
        $11_1 = $18_1;
        continue label$17;
       };
      }
      if ($9_1 >>> 0 > 64 >>> 0) {
       break label$6
      }
      $19_1 = $11_1 << 1 | 0;
      $18_1 = $19_1 | 1 | 0;
      if ($18_1 >>> 0 >= 200 >>> 0) {
       break label$6
      }
      $20_1 = $14_1 + $9_1 | 0;
      HEAP8[$20_1 >> 0] = HEAPU8[($18_1 + 66464 | 0) >> 0] | 0;
      label$18 : {
       if ($11_1 >>> 0 <= 9 >>> 0) {
        break label$18
       }
       $9_1 = $9_1 + -1 | 0;
       if ($9_1 >>> 0 > 64 >>> 0) {
        break label$6
       }
       HEAP8[($20_1 + -1 | 0) >> 0] = HEAPU8[($19_1 + 66464 | 0) >> 0] | 0;
      }
      label$19 : {
       i64toi32_i32$3 = $8$hi;
       i64toi32_i32$4 = $8_1;
       i64toi32_i32$0 = -1;
       i64toi32_i32$1 = -1e9;
       if ((i64toi32_i32$3 | 0) > (i64toi32_i32$0 | 0)) {
        $95_1 = 1
       } else {
        if ((i64toi32_i32$3 | 0) >= (i64toi32_i32$0 | 0)) {
         if (i64toi32_i32$4 >>> 0 <= i64toi32_i32$1 >>> 0) {
          $96_1 = 0
         } else {
          $96_1 = 1
         }
         $97_1 = $96_1;
        } else {
         $97_1 = 0
        }
        $95_1 = $97_1;
       }
       if ($95_1) {
        break label$19
       }
       $9_1 = $9_1 + -1 | 0;
       if ($9_1 >>> 0 > 64 >>> 0) {
        break label$6
       }
       HEAP8[($14_1 + $9_1 | 0) >> 0] = 45;
      }
      $358 = $14_1 + $9_1 | 0;
      $9_1 = 65 - $9_1 | 0;
      $70($2_1 + 424 | 0 | 0, $358 | 0, $9_1 | 0, $9_1 | 0);
      $12_1 = HEAP32[($2_1 + 424 | 0) >> 2] | 0;
      HEAP32[($2_1 + 448 | 0) >> 2] = $12_1;
      $13_1 = HEAP32[($2_1 + 428 | 0) >> 2] | 0;
     }
     i64toi32_i32$3 = $4_1;
     i64toi32_i32$4 = 0;
     HEAP32[(i64toi32_i32$3 + 168 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$3 + 172 | 0) >> 2] = i64toi32_i32$4;
     $9_1 = $8(8 | 0) | 0;
     i64toi32_i32$3 = $9_1;
     i64toi32_i32$4 = 1953391981;
     $65_1 = 1969450852;
     HEAP8[$9_1 >> 0] = $65_1;
     HEAP8[($9_1 + 1 | 0) >> 0] = $65_1 >>> 8 | 0;
     HEAP8[($9_1 + 2 | 0) >> 0] = $65_1 >>> 16 | 0;
     HEAP8[($9_1 + 3 | 0) >> 0] = $65_1 >>> 24 | 0;
     HEAP8[($9_1 + 4 | 0) >> 0] = i64toi32_i32$4;
     HEAP8[($9_1 + 5 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
     HEAP8[($9_1 + 6 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
     HEAP8[($9_1 + 7 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
     HEAP32[($2_1 + 452 | 0) >> 2] = $9_1;
     $70($2_1 + 416 | 0 | 0, $9_1 | 0, 8 | 0, 8 | 0);
     $9_1 = HEAP32[($2_1 + 416 | 0) >> 2] | 0;
     HEAP32[($2_1 + 460 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 456 | 0) >> 2] = $9_1;
     i64toi32_i32$4 = 2146959360;
     i64toi32_i32$4 = $36(5 | 0, i64toi32_i32$4 | 0, $9_1 | 0, HEAP32[($2_1 + 420 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
     $6_1 = i64toi32_i32$4;
     $6$hi = i64toi32_i32$3;
     i64toi32_i32$4 = $4_1;
     i64toi32_i32$3 = 0;
     HEAP32[(i64toi32_i32$4 + 160 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$4 + 164 | 0) >> 2] = i64toi32_i32$3;
     i64toi32_i32$3 = $6$hi;
     HEAP32[(i64toi32_i32$4 + 168 | 0) >> 2] = $6_1;
     HEAP32[(i64toi32_i32$4 + 172 | 0) >> 2] = i64toi32_i32$3;
     $9_1 = $8(10 | 0) | 0;
     $98_1 = 31073;
     HEAP8[($9_1 + 8 | 0) >> 0] = $98_1;
     HEAP8[($9_1 + 9 | 0) >> 0] = $98_1 >>> 8 | 0;
     i64toi32_i32$4 = $9_1;
     i64toi32_i32$3 = 1920090424;
     $66_1 = 1953392981;
     HEAP8[$9_1 >> 0] = $66_1;
     HEAP8[($9_1 + 1 | 0) >> 0] = $66_1 >>> 8 | 0;
     HEAP8[($9_1 + 2 | 0) >> 0] = $66_1 >>> 16 | 0;
     HEAP8[($9_1 + 3 | 0) >> 0] = $66_1 >>> 24 | 0;
     HEAP8[($9_1 + 4 | 0) >> 0] = i64toi32_i32$3;
     HEAP8[($9_1 + 5 | 0) >> 0] = i64toi32_i32$3 >>> 8 | 0;
     HEAP8[($9_1 + 6 | 0) >> 0] = i64toi32_i32$3 >>> 16 | 0;
     HEAP8[($9_1 + 7 | 0) >> 0] = i64toi32_i32$3 >>> 24 | 0;
     HEAP32[(($2_1 + 432 | 0) + 32 | 0) >> 2] = $9_1;
     $70($2_1 + 408 | 0 | 0, $9_1 | 0, 10 | 0, 10 | 0);
     $9_1 = HEAP32[($2_1 + 408 | 0) >> 2] | 0;
     HEAP32[($2_1 + 472 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 468 | 0) >> 2] = $9_1;
     i64toi32_i32$3 = 2146959360;
     i64toi32_i32$3 = $36(5 | 0, i64toi32_i32$3 | 0, $9_1 | 0, HEAP32[($2_1 + 412 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     $6_1 = i64toi32_i32$3;
     $6$hi = i64toi32_i32$4;
     i64toi32_i32$3 = $4_1;
     i64toi32_i32$4 = 32;
     HEAP32[(i64toi32_i32$3 + 144 | 0) >> 2] = 4;
     HEAP32[(i64toi32_i32$3 + 148 | 0) >> 2] = i64toi32_i32$4;
     i64toi32_i32$4 = $6$hi;
     i64toi32_i32$4 = $82($6_1 | 0, i64toi32_i32$4 | 0, i64toi32_i32$3 + 144 | 0 | 0, 1 | 0) | 0;
     i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
     $6_1 = i64toi32_i32$4;
     $6$hi = i64toi32_i32$3;
     i64toi32_i32$4 = $4_1;
     HEAP32[(i64toi32_i32$4 + 160 | 0) >> 2] = $6_1;
     HEAP32[(i64toi32_i32$4 + 164 | 0) >> 2] = i64toi32_i32$3;
     $9_1 = $8(6 | 0) | 0;
     $99_1 = 30575;
     HEAP8[($9_1 + 4 | 0) >> 0] = $99_1;
     HEAP8[($9_1 + 5 | 0) >> 0] = $99_1 >>> 8 | 0;
     $67_1 = 1684957559;
     HEAP8[$9_1 >> 0] = $67_1;
     HEAP8[($9_1 + 1 | 0) >> 0] = $67_1 >>> 8 | 0;
     HEAP8[($9_1 + 2 | 0) >> 0] = $67_1 >>> 16 | 0;
     HEAP8[($9_1 + 3 | 0) >> 0] = $67_1 >>> 24 | 0;
     HEAP32[($2_1 + 476 | 0) >> 2] = $9_1;
     $70($2_1 + 400 | 0 | 0, $9_1 | 0, 6 | 0, 6 | 0);
     $9_1 = HEAP32[($2_1 + 400 | 0) >> 2] | 0;
     HEAP32[($2_1 + 484 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 480 | 0) >> 2] = $9_1;
     i64toi32_i32$3 = 2146959360;
     i64toi32_i32$3 = $36(5 | 0, i64toi32_i32$3 | 0, $9_1 | 0, HEAP32[($2_1 + 404 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     $7_1 = i64toi32_i32$3;
     $7$hi = i64toi32_i32$4;
     $9_1 = $8(6 | 0) | 0;
     $100_1 = 28532;
     HEAP8[($9_1 + 4 | 0) >> 0] = $100_1;
     HEAP8[($9_1 + 5 | 0) >> 0] = $100_1 >>> 8 | 0;
     $68_1 = 1887007331;
     HEAP8[$9_1 >> 0] = $68_1;
     HEAP8[($9_1 + 1 | 0) >> 0] = $68_1 >>> 8 | 0;
     HEAP8[($9_1 + 2 | 0) >> 0] = $68_1 >>> 16 | 0;
     HEAP8[($9_1 + 3 | 0) >> 0] = $68_1 >>> 24 | 0;
     HEAP32[($2_1 + 488 | 0) >> 2] = $9_1;
     $70($2_1 + 392 | 0 | 0, $9_1 | 0, 6 | 0, 6 | 0);
     $9_1 = HEAP32[($2_1 + 392 | 0) >> 2] | 0;
     HEAP32[($2_1 + 496 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 492 | 0) >> 2] = $9_1;
     i64toi32_i32$4 = $36(i64toi32_i32$3 | 0, i64toi32_i32$4 | 0, $9_1 | 0, HEAP32[($2_1 + 396 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
     $7_1 = i64toi32_i32$4;
     $7$hi = i64toi32_i32$3;
     $9_1 = $8(15 | 0) | 0;
     HEAP8[($9_1 + 14 | 0) >> 0] = 115;
     $101 = 25973;
     HEAP8[($9_1 + 12 | 0) >> 0] = $101;
     HEAP8[($9_1 + 13 | 0) >> 0] = $101 >>> 8 | 0;
     $69_1 = 1818318445;
     HEAP8[($9_1 + 8 | 0) >> 0] = $69_1;
     HEAP8[($9_1 + 9 | 0) >> 0] = $69_1 >>> 8 | 0;
     HEAP8[($9_1 + 10 | 0) >> 0] = $69_1 >>> 16 | 0;
     HEAP8[($9_1 + 11 | 0) >> 0] = $69_1 >>> 24 | 0;
     i64toi32_i32$4 = $9_1;
     i64toi32_i32$3 = 1868852833;
     $70_1 = 1383359847;
     HEAP8[$9_1 >> 0] = $70_1;
     HEAP8[($9_1 + 1 | 0) >> 0] = $70_1 >>> 8 | 0;
     HEAP8[($9_1 + 2 | 0) >> 0] = $70_1 >>> 16 | 0;
     HEAP8[($9_1 + 3 | 0) >> 0] = $70_1 >>> 24 | 0;
     HEAP8[($9_1 + 4 | 0) >> 0] = i64toi32_i32$3;
     HEAP8[($9_1 + 5 | 0) >> 0] = i64toi32_i32$3 >>> 8 | 0;
     HEAP8[($9_1 + 6 | 0) >> 0] = i64toi32_i32$3 >>> 16 | 0;
     HEAP8[($9_1 + 7 | 0) >> 0] = i64toi32_i32$3 >>> 24 | 0;
     HEAP32[($2_1 + 500 | 0) >> 2] = $9_1;
     $70($2_1 + 384 | 0 | 0, $9_1 | 0, 15 | 0, 15 | 0);
     $11_1 = HEAP32[($2_1 + 384 | 0) >> 2] | 0;
     HEAP32[($2_1 + 508 | 0) >> 2] = $11_1;
     HEAP32[($2_1 + 504 | 0) >> 2] = $11_1;
     $18_1 = HEAP32[($2_1 + 388 | 0) >> 2] | 0;
     i64toi32_i32$4 = $4_1;
     i64toi32_i32$3 = 0;
     HEAP32[(i64toi32_i32$4 + 152 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$4 + 156 | 0) >> 2] = i64toi32_i32$3;
     $9_1 = $8(8 | 0) | 0;
     HEAP32[($2_1 + 512 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 516 | 0) >> 2] = $9_1;
     i64toi32_i32$3 = $6$hi;
     i64toi32_i32$4 = $9_1;
     HEAP32[$9_1 >> 2] = $6_1;
     HEAP32[($9_1 + 4 | 0) >> 2] = i64toi32_i32$3;
     HEAP32[($4_1 + 156 | 0) >> 2] = $9_1;
     HEAP32[($4_1 + 152 | 0) >> 2] = 31;
     i64toi32_i32$3 = $7$hi;
     i64toi32_i32$3 = $66($7_1 | 0, i64toi32_i32$3 | 0, $11_1 | 0, $18_1 | 0, $4_1 + 152 | 0 | 0, 1 | 0) | 0;
     i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     $9_1 = $8(8 | 0) | 0;
     i64toi32_i32$3 = $9_1;
     i64toi32_i32$4 = 1735289202;
     $71_1 = 1951625076;
     HEAP8[$9_1 >> 0] = $71_1;
     HEAP8[($9_1 + 1 | 0) >> 0] = $71_1 >>> 8 | 0;
     HEAP8[($9_1 + 2 | 0) >> 0] = $71_1 >>> 16 | 0;
     HEAP8[($9_1 + 3 | 0) >> 0] = $71_1 >>> 24 | 0;
     HEAP8[($9_1 + 4 | 0) >> 0] = i64toi32_i32$4;
     HEAP8[($9_1 + 5 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
     HEAP8[($9_1 + 6 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
     HEAP8[($9_1 + 7 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
     HEAP32[($2_1 + 520 | 0) >> 2] = $9_1;
     $70($2_1 + 376 | 0 | 0, $9_1 | 0, 8 | 0, 8 | 0);
     $9_1 = HEAP32[($2_1 + 376 | 0) >> 2] | 0;
     HEAP32[($2_1 + 528 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 524 | 0) >> 2] = $9_1;
     i64toi32_i32$4 = $6$hi;
     i64toi32_i32$4 = $66($6_1 | 0, i64toi32_i32$4 | 0, $9_1 | 0, HEAP32[($2_1 + 380 | 0) >> 2] | 0 | 0, 0 | 0, 0 | 0) | 0;
     i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
     $78($2_1 + 368 | 0 | 0, i64toi32_i32$4 | 0, i64toi32_i32$3 | 0);
     $9_1 = HEAP32[($2_1 + 368 | 0) >> 2] | 0;
     HEAP32[($2_1 + 716 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 532 | 0) >> 2] = $9_1;
     $11_1 = HEAP32[($2_1 + 372 | 0) >> 2] | 0;
     $91($2_1 + 360 | 0 | 0);
     $18_1 = HEAP32[($2_1 + 360 | 0) >> 2] | 0;
     HEAP32[($2_1 + 536 | 0) >> 2] = $18_1;
     $88($2_1 + 344 | 0 | 0, $9_1 | 0, $11_1 | 0, $18_1 | 0, HEAP32[($2_1 + 364 | 0) >> 2] | 0 | 0);
     HEAP32[($2_1 + 540 | 0) >> 2] = HEAP32[($2_1 + 344 | 0) >> 2] | 0;
     label$20 : {
      if ((HEAP32[($2_1 + 348 | 0) >> 2] | 0 | 0) != (37 | 0)) {
       break label$20
      }
      i64toi32_i32$3 = $6$hi;
      i64toi32_i32$3 = $66($6_1 | 0, i64toi32_i32$3 | 0, 67170 | 0, 16 | 0, 0 | 0, 0 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     }
     $22_1 = $4_1 + 168 | 0;
     $91($2_1 + 336 | 0 | 0);
     $18_1 = HEAP32[($2_1 + 336 | 0) >> 2] | 0;
     HEAP32[($2_1 + 544 | 0) >> 2] = $18_1;
     $88($2_1 + 320 | 0 | 0, $9_1 | 0, $11_1 | 0, $18_1 | 0, HEAP32[($2_1 + 340 | 0) >> 2] | 0 | 0);
     HEAP32[($2_1 + 548 | 0) >> 2] = HEAP32[($2_1 + 320 | 0) >> 2] | 0;
     label$21 : {
      label$22 : {
       if ((HEAP32[($2_1 + 324 | 0) >> 2] | 0 | 0) == (32 | 0)) {
        break label$22
       }
       $9_1 = $8(4 | 0) | 0;
       HEAP32[($2_1 + 568 | 0) >> 2] = $9_1;
       HEAP32[($2_1 + 572 | 0) >> 2] = $9_1;
       HEAP32[($2_1 + 564 | 0) >> 2] = $9_1;
       HEAP32[($2_1 + 560 | 0) >> 2] = $9_1;
       HEAP32[($2_1 + 556 | 0) >> 2] = $9_1;
       HEAP32[($2_1 + 552 | 0) >> 2] = $9_1;
       label$23 : {
        label$24 : {
         i64toi32_i32$4 = $8$hi;
         $11_1 = $8_1;
         if (($11_1 | 0) > (127 | 0)) {
          break label$24
         }
         $18_1 = 0;
         HEAP32[($4_1 + 60 | 0) >> 2] = 0;
         $19_1 = 1;
         $20_1 = 0;
         $21_1 = 0;
         break label$23;
        }
        label$25 : {
         if (($11_1 | 0) > (2047 | 0)) {
          break label$25
         }
         $20_1 = 0;
         HEAP32[($4_1 + 56 | 0) >> 2] = 0;
         $18_1 = $11_1 & 63 | 0 | -128 | 0;
         $19_1 = 2;
         $11_1 = $11_1 >>> 6 | 0 | -64 | 0;
         $21_1 = 0;
         break label$23;
        }
        label$26 : {
         if (($11_1 | 0) > (65535 | 0)) {
          break label$26
         }
         $21_1 = 0;
         HEAP32[($4_1 + 52 | 0) >> 2] = 0;
         $20_1 = $11_1 & 63 | 0 | -128 | 0;
         $18_1 = ($11_1 >>> 6 | 0) & 63 | 0 | -128 | 0;
         $19_1 = 3;
         $11_1 = $11_1 >>> 12 | 0 | -32 | 0;
         break label$23;
        }
        label$27 : {
         if (($11_1 | 0) > (1114111 | 0)) {
          break label$27
         }
         HEAP32[($4_1 + 48 | 0) >> 2] = 0;
         $21_1 = $11_1 & 63 | 0 | -128 | 0;
         $20_1 = ($11_1 >>> 6 | 0) & 63 | 0 | -128 | 0;
         $18_1 = ($11_1 >>> 12 | 0) & 63 | 0 | -128 | 0;
         $19_1 = 4;
         $11_1 = $11_1 >>> 18 | 0 | -16 | 0;
         break label$23;
        }
        $21_1 = 0;
        HEAP32[($4_1 + 44 | 0) >> 2] = 0;
        $19_1 = 3;
        $20_1 = 189;
        $18_1 = 191;
        $11_1 = 239;
       }
       HEAP8[$9_1 >> 0] = $11_1;
       i64toi32_i32$3 = $4_1;
       i64toi32_i32$4 = 0;
       HEAP32[(i64toi32_i32$3 + 64 | 0) >> 2] = 0;
       HEAP32[(i64toi32_i32$3 + 68 | 0) >> 2] = i64toi32_i32$4;
       HEAP8[($9_1 + 1 | 0) >> 0] = $18_1;
       HEAP8[($9_1 + 2 | 0) >> 0] = $20_1;
       HEAP8[($9_1 + 3 | 0) >> 0] = $21_1;
       $71($2_1 + 304 | 0 | 0, $9_1 | 0, $19_1 | 0);
       $23_1 = 1;
       $24_1 = HEAP32[($2_1 + 312 | 0) >> 2] | 0;
       $25_1 = HEAP32[($2_1 + 308 | 0) >> 2] | 0;
       $26_1 = HEAP32[($2_1 + 304 | 0) >> 2] | 0;
       break label$21;
      }
      $71($2_1 + 288 | 0 | 0, $9_1 | 0, $11_1 | 0);
      $23_1 = 0;
      $24_1 = HEAP32[($2_1 + 296 | 0) >> 2] | 0;
      $25_1 = HEAP32[($2_1 + 292 | 0) >> 2] | 0;
      $26_1 = HEAP32[($2_1 + 288 | 0) >> 2] | 0;
     }
     i64toi32_i32$1 = $22_1;
     i64toi32_i32$4 = HEAP32[i64toi32_i32$1 >> 2] | 0;
     i64toi32_i32$3 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
     $6_1 = i64toi32_i32$4;
     $6$hi = i64toi32_i32$3;
     $92($2_1 + 280 | 0 | 0);
     $9_1 = HEAP32[($2_1 + 280 | 0) >> 2] | 0;
     HEAP32[($2_1 + 720 | 0) >> 2] = $9_1;
     i64toi32_i32$3 = $36(i64toi32_i32$4 | 0, i64toi32_i32$3 | 0, $9_1 | 0, HEAP32[($2_1 + 284 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     $78($2_1 + 272 | 0 | 0, i64toi32_i32$3 | 0, i64toi32_i32$4 | 0);
     $27_1 = HEAP32[($2_1 + 272 | 0) >> 2] | 0;
     HEAP32[($2_1 + 724 | 0) >> 2] = $27_1;
     $28_1 = HEAP32[($2_1 + 276 | 0) >> 2] | 0;
     $11_1 = $8(16 | 0) | 0;
     HEAP32[($2_1 + 728 | 0) >> 2] = $11_1;
     $93($11_1 | 0);
     label$28 : {
      label$29 : {
       label$30 : {
        if (($28_1 | 0) <= (-1 | 0)) {
         break label$30
        }
        $9_1 = HEAP32[($11_1 + 4 | 0) >> 2] | 0;
        HEAP32[($2_1 + 740 | 0) >> 2] = $9_1;
        HEAP32[($2_1 + 744 | 0) >> 2] = $9_1;
        label$31 : {
         if (((HEAP32[($11_1 + 12 | 0) >> 2] | 0) - (HEAP32[($11_1 + 8 | 0) >> 2] | 0) | 0 | 0) >= ($28_1 | 0)) {
          break label$31
         }
         $94($11_1 | 0, $28_1 | 0);
        }
        $29_1 = $4_1 + 24 | 0;
        $30_1 = $2_1 + 764 | 0;
        $31_1 = $2_1 + 756 | 0;
        $32_1 = $2_1 + 760 | 0;
        $33_1 = $2_1 + 768 | 0;
        $34_1 = $2_1 + 772 | 0;
        $35_1 = $2_1 + 776 | 0;
        $36_1 = $2_1 + 748 | 0;
        $37_1 = $2_1 + 752 | 0;
        $14_1 = 0;
        label$32 : while (1) {
         label$33 : {
          label$34 : {
           if (($28_1 | 0) > ($14_1 | 0)) {
            break label$34
           }
           $18_1 = 0;
           $9_1 = 0;
           break label$33;
          }
          label$35 : {
           label$36 : {
            $20_1 = $27_1 + $14_1 | 0;
            $9_1 = HEAPU8[$20_1 >> 0] | 0;
            $19_1 = ($9_1 << 24 | 0) >> 24 | 0;
            if (($19_1 | 0) < (0 | 0)) {
             break label$36
            }
            $18_1 = 1;
            break label$35;
           }
           $21_1 = $28_1 - $14_1 | 0;
           label$37 : {
            label$38 : {
             if (($19_1 & -32 | 0 | 0) != (-64 | 0)) {
              break label$38
             }
             if ($21_1 >>> 0 < 2 >>> 0) {
              break label$37
             }
             $9_1 = ($19_1 & 31 | 0) << 6 | 0 | ((HEAPU8[($20_1 + 1 | 0) >> 0] | 0) & 63 | 0) | 0;
             $18_1 = 2;
             break label$35;
            }
            label$39 : {
             if (($19_1 & -16 | 0 | 0) != (-32 | 0)) {
              break label$39
             }
             if ($21_1 >>> 0 < 3 >>> 0) {
              break label$37
             }
             $9_1 = ((HEAPU8[($20_1 + 1 | 0) >> 0] | 0) & 63 | 0) << 6 | 0 | (($19_1 & 15 | 0) << 12 | 0) | 0 | ((HEAPU8[($20_1 + 2 | 0) >> 0] | 0) & 63 | 0) | 0;
             $18_1 = 3;
             break label$35;
            }
            $18_1 = 1;
            $9_1 = 65533;
            if ($21_1 >>> 0 < 4 >>> 0) {
             break label$35
            }
            if (($19_1 & 248 | 0 | 0) != (240 | 0)) {
             break label$35
            }
            $9_1 = ((HEAPU8[($20_1 + 1 | 0) >> 0] | 0) & 63 | 0) << 12 | 0 | (($19_1 & 7 | 0) << 18 | 0) | 0 | (((HEAPU8[($20_1 + 2 | 0) >> 0] | 0) & 63 | 0) << 6 | 0) | 0 | ((HEAPU8[($20_1 + 3 | 0) >> 0] | 0) & 63 | 0) | 0;
            $18_1 = 4;
            break label$35;
           }
           $18_1 = 1;
           $9_1 = 65533;
          }
          $14_1 = $18_1 + $14_1 | 0;
          $18_1 = 1;
         }
         label$40 : {
          label$41 : {
           label$42 : {
            label$43 : {
             label$44 : {
              label$45 : {
               if (!($18_1 & 1 | 0)) {
                break label$45
               }
               label$46 : {
                if ($9_1 >>> 0 > 255 >>> 0) {
                 break label$46
                }
                $18_1 = $9_1 + -9 | 0;
                if ($18_1 >>> 0 <= 23 >>> 0) {
                 break label$44
                }
                break label$41;
               }
               $20_1 = HEAP32[(0 + 68576 | 0) >> 2] | 0;
               HEAP32[$36_1 >> 2] = $20_1;
               label$47 : {
                $18_1 = HEAP32[(0 + 68580 | 0) >> 2] | 0;
                $19_1 = HEAP32[(0 + 68600 | 0) >> 2] | 0;
                if (($18_1 | 0) <= ($19_1 | 0)) {
                 break label$47
                }
                if (!$18_1) {
                 break label$6
                }
                $21_1 = $20_1 + Math_imul($18_1 + -1 | 0, 6) | 0;
                if (!$21_1) {
                 break label$7
                }
                if (($9_1 | 0) > (HEAPU16[($21_1 + 2 | 0) >> 1] | 0 | 0)) {
                 break label$47
                }
                if ($18_1 >>> 0 > (HEAP32[(0 + 68584 | 0) >> 2] | 0) >>> 0) {
                 break label$8
                }
                if ($18_1 >>> 0 < $19_1 >>> 0) {
                 break label$8
                }
                $15_1 = $18_1 - $19_1 | 0;
                $38_1 = $20_1 + Math_imul($19_1, 6) | 0;
                $16_1 = $9_1 & 65535 | 0;
                if ($16_1 >>> 0 < 256 >>> 0) {
                 break label$43
                }
                if (($15_1 | 0) < (19 | 0)) {
                 break label$43
                }
                $18_1 = 0;
                $19_1 = $15_1;
                label$48 : while (1) {
                 if (($19_1 | 0) <= ($18_1 | 0)) {
                  break label$40
                 }
                 $20_1 = (($19_1 - $18_1 | 0 | 0) / (2 | 0) | 0) + $18_1 | 0;
                 if ($20_1 >>> 0 >= $15_1 >>> 0) {
                  break label$6
                 }
                 $17_1 = $38_1 + Math_imul($20_1, 6) | 0;
                 if (!$17_1) {
                  break label$7
                 }
                 label$49 : {
                  $39_1 = HEAPU16[$17_1 >> 1] | 0;
                  $21_1 = $39_1 >>> 0 > $16_1 >>> 0;
                  if ($21_1) {
                   break label$49
                  }
                  if ((HEAPU16[($17_1 + 2 | 0) >> 1] | 0) >>> 0 < $16_1 >>> 0) {
                   break label$49
                  }
                  $18_1 = HEAPU16[($17_1 + 4 | 0) >> 1] | 0;
                  if (($18_1 | 0) == (1 | 0)) {
                   continue label$32
                  }
                  if (!(((($9_1 - $39_1 | 0) & 65535 | 0) >>> 0) % ($18_1 >>> 0) | 0)) {
                   continue label$32
                  }
                  break label$40;
                 }
                 $18_1 = $21_1 ? $18_1 : $20_1 + 1 | 0;
                 $19_1 = $21_1 ? $20_1 : $19_1;
                 continue label$48;
                };
               }
               $15_1 = HEAP32[(0 + 68588 | 0) >> 2] | 0;
               HEAP32[$37_1 >> 2] = $15_1;
               $38_1 = HEAP32[(0 + 68592 | 0) >> 2] | 0;
               if (($38_1 | 0) < (1 | 0)) {
                break label$40
               }
               if (!$15_1) {
                break label$7
               }
               if ((HEAP32[$15_1 >> 2] | 0 | 0) <= ($9_1 | 0)) {
                break label$42
               }
               break label$40;
              }
              $9_1 = HEAP32[($11_1 + 4 | 0) >> 2] | 0;
              HEAP32[($2_1 + 784 | 0) >> 2] = $9_1;
              HEAP32[($2_1 + 780 | 0) >> 2] = $9_1;
              $18_1 = HEAP32[($11_1 + 8 | 0) >> 2] | 0;
              $11_1 = $8(1 | 0) | 0;
              HEAP8[$11_1 >> 0] = 59;
              HEAP32[($2_1 + 788 | 0) >> 2] = $11_1;
              $70($2_1 + 264 | 0 | 0, $11_1 | 0, 1 | 0, 1 | 0);
              $11_1 = HEAP32[($2_1 + 264 | 0) >> 2] | 0;
              HEAP32[($2_1 + 796 | 0) >> 2] = $11_1;
              HEAP32[($2_1 + 792 | 0) >> 2] = $11_1;
              $88($2_1 + 248 | 0 | 0, $9_1 | 0, $18_1 | 0, $11_1 | 0, HEAP32[($2_1 + 268 | 0) >> 2] | 0 | 0);
              $9_1 = HEAP32[($2_1 + 248 | 0) >> 2] | 0;
              HEAP32[($2_1 + 800 | 0) >> 2] = $9_1;
              $14_1 = $9_1 + 8 | 0;
              $20_1 = HEAP32[($2_1 + 252 | 0) >> 2] | 0;
              $16_1 = $2_1 + 804 | 0;
              $17_1 = $2_1 + 808 | 0;
              $15_1 = $2_1 + 576 | 0;
              $11_1 = -1;
              label$50 : while (1) {
               $9_1 = $14_1 + ($11_1 << 3 | 0) | 0;
               label$51 : {
                label$52 : while (1) {
                 $11_1 = $11_1 + 1 | 0;
                 if (($11_1 | 0) >= ($20_1 | 0)) {
                  break label$51
                 }
                 if ($11_1 >>> 0 >= $20_1 >>> 0) {
                  break label$6
                 }
                 if (!$9_1) {
                  break label$7
                 }
                 $19_1 = HEAP32[$9_1 >> 2] | 0;
                 HEAP32[$16_1 >> 2] = $19_1;
                 $18_1 = HEAP32[($9_1 + 4 | 0) >> 2] | 0;
                 $95($2_1 + 40 | 0 | 0);
                 $21_1 = HEAP32[($2_1 + 40 | 0) >> 2] | 0;
                 HEAP32[$17_1 >> 2] = $21_1;
                 $9_1 = $9_1 + 8 | 0;
                 if (($23_1 | (($86($19_1 | 0, $18_1 | 0, $21_1 | 0, HEAP32[($2_1 + 44 | 0) >> 2] | 0 | 0) | 0) ^ -1 | 0) | 0) & 1 | 0) {
                  continue label$52
                 }
                 break label$52;
                };
                $95($2_1 + 32 | 0 | 0);
                $21_1 = HEAP32[($2_1 + 32 | 0) >> 2] | 0;
                HEAP32[$15_1 >> 2] = $21_1;
                label$53 : {
                 $9_1 = HEAP32[($2_1 + 36 | 0) >> 2] | 0;
                 if (!(($86($19_1 | 0, $18_1 | 0, $21_1 | 0, $9_1 | 0) | 0) & 1 | 0)) {
                  break label$53
                 }
                 if ($18_1 >>> 0 < $9_1 >>> 0) {
                  break label$8
                 }
                 $18_1 = $18_1 - $9_1 | 0;
                 $19_1 = $19_1 + $9_1 | 0;
                }
                $71($2_1 + 16 | 0 | 0, $19_1 | 0, $18_1 | 0);
                $24_1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
                $25_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
                $26_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
                continue label$50;
               }
               break label$50;
              };
              $14_1 = 64;
              $9_1 = $8(64 | 0) | 0;
              HEAP32[($2_1 + 580 | 0) >> 2] = $9_1;
              HEAP32[($2_1 + 584 | 0) >> 2] = $9_1;
              i64toi32_i32$3 = $9_1;
              i64toi32_i32$4 = 892944710;
              $72_1 = 959989057;
              HEAP8[($9_1 + 56 | 0) >> 0] = $72_1;
              HEAP8[($9_1 + 57 | 0) >> 0] = $72_1 >>> 8 | 0;
              HEAP8[($9_1 + 58 | 0) >> 0] = $72_1 >>> 16 | 0;
              HEAP8[($9_1 + 59 | 0) >> 0] = $72_1 >>> 24 | 0;
              HEAP8[($9_1 + 60 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($9_1 + 61 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($9_1 + 62 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($9_1 + 63 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $9_1;
              i64toi32_i32$4 = 825770549;
              $73_1 = 1160787763;
              HEAP8[($9_1 + 48 | 0) >> 0] = $73_1;
              HEAP8[($9_1 + 49 | 0) >> 0] = $73_1 >>> 8 | 0;
              HEAP8[($9_1 + 50 | 0) >> 0] = $73_1 >>> 16 | 0;
              HEAP8[($9_1 + 51 | 0) >> 0] = $73_1 >>> 24 | 0;
              HEAP8[($9_1 + 52 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($9_1 + 53 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($9_1 + 54 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($9_1 + 55 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $9_1;
              i64toi32_i32$4 = 1145385522;
              $74_1 = 1160855861;
              HEAP8[($9_1 + 40 | 0) >> 0] = $74_1;
              HEAP8[($9_1 + 41 | 0) >> 0] = $74_1 >>> 8 | 0;
              HEAP8[($9_1 + 42 | 0) >> 0] = $74_1 >>> 16 | 0;
              HEAP8[($9_1 + 43 | 0) >> 0] = $74_1 >>> 24 | 0;
              HEAP8[($9_1 + 44 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($9_1 + 45 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($9_1 + 46 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($9_1 + 47 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $9_1;
              i64toi32_i32$4 = 1111639603;
              $75_1 = 1161967681;
              HEAP8[($9_1 + 32 | 0) >> 0] = $75_1;
              HEAP8[($9_1 + 33 | 0) >> 0] = $75_1 >>> 8 | 0;
              HEAP8[($9_1 + 34 | 0) >> 0] = $75_1 >>> 16 | 0;
              HEAP8[($9_1 + 35 | 0) >> 0] = $75_1 >>> 24 | 0;
              HEAP8[($9_1 + 36 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($9_1 + 37 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($9_1 + 38 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($9_1 + 39 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $9_1;
              i64toi32_i32$4 = 1145190209;
              $76_1 = 1127757381;
              HEAP8[($9_1 + 24 | 0) >> 0] = $76_1;
              HEAP8[($9_1 + 25 | 0) >> 0] = $76_1 >>> 8 | 0;
              HEAP8[($9_1 + 26 | 0) >> 0] = $76_1 >>> 16 | 0;
              HEAP8[($9_1 + 27 | 0) >> 0] = $76_1 >>> 24 | 0;
              HEAP8[($9_1 + 28 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($9_1 + 29 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($9_1 + 30 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($9_1 + 31 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $9_1;
              i64toi32_i32$4 = 893530935;
              $77_1 = 1094206017;
              HEAP8[($9_1 + 16 | 0) >> 0] = $77_1;
              HEAP8[($9_1 + 17 | 0) >> 0] = $77_1 >>> 8 | 0;
              HEAP8[($9_1 + 18 | 0) >> 0] = $77_1 >>> 16 | 0;
              HEAP8[($9_1 + 19 | 0) >> 0] = $77_1 >>> 24 | 0;
              HEAP8[($9_1 + 20 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($9_1 + 21 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($9_1 + 22 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($9_1 + 23 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $9_1;
              i64toi32_i32$4 = 875968821;
              $78_1 = 842086209;
              HEAP8[($9_1 + 8 | 0) >> 0] = $78_1;
              HEAP8[($9_1 + 9 | 0) >> 0] = $78_1 >>> 8 | 0;
              HEAP8[($9_1 + 10 | 0) >> 0] = $78_1 >>> 16 | 0;
              HEAP8[($9_1 + 11 | 0) >> 0] = $78_1 >>> 24 | 0;
              HEAP8[($9_1 + 12 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($9_1 + 13 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($9_1 + 14 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($9_1 + 15 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $9_1;
              i64toi32_i32$4 = 892612921;
              $79_1 = 825573957;
              HEAP8[$9_1 >> 0] = $79_1;
              HEAP8[($9_1 + 1 | 0) >> 0] = $79_1 >>> 8 | 0;
              HEAP8[($9_1 + 2 | 0) >> 0] = $79_1 >>> 16 | 0;
              HEAP8[($9_1 + 3 | 0) >> 0] = $79_1 >>> 24 | 0;
              HEAP8[($9_1 + 4 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($9_1 + 5 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($9_1 + 6 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($9_1 + 7 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              $21_1 = $8(48 | 0) | 0;
              HEAP32[($2_1 + 668 | 0) >> 2] = $21_1;
              HEAP32[($2_1 + 672 | 0) >> 2] = $21_1;
              HEAP32[($2_1 + 588 | 0) >> 2] = $21_1;
              $75($2_1 + 240 | 0 | 0);
              $18_1 = HEAP32[($2_1 + 244 | 0) >> 2] | 0;
              HEAP32[($2_1 + 624 | 0) >> 2] = $18_1;
              HEAP32[($2_1 + 616 | 0) >> 2] = $18_1;
              HEAP32[($2_1 + 592 | 0) >> 2] = $18_1;
              $15_1 = HEAP32[($2_1 + 240 | 0) >> 2] | 0;
              HEAP32[($21_1 + 36 | 0) >> 2] = $18_1;
              HEAP32[($21_1 + 32 | 0) >> 2] = $15_1;
              $75($2_1 + 232 | 0 | 0);
              $16_1 = HEAP32[($2_1 + 236 | 0) >> 2] | 0;
              HEAP32[($2_1 + 656 | 0) >> 2] = $16_1;
              HEAP32[($2_1 + 604 | 0) >> 2] = $16_1;
              HEAP32[($2_1 + 600 | 0) >> 2] = $16_1;
              HEAP32[($2_1 + 596 | 0) >> 2] = $16_1;
              $17_1 = HEAP32[($2_1 + 232 | 0) >> 2] | 0;
              HEAP32[($21_1 + 44 | 0) >> 2] = $16_1;
              HEAP32[($21_1 + 40 | 0) >> 2] = $17_1;
              if (!$16_1) {
               break label$7
              }
              label$54 : {
               $11_1 = HEAP32[($16_1 + 208 | 0) >> 2] | 0;
               $19_1 = $11_1 + -14 | 0;
               if ($19_1 >>> 0 <= 1 >>> 0) {
                break label$54
               }
               if (($11_1 | 0) != (6 | 0)) {
                break label$29
               }
               $11_1 = 48;
               break label$28;
              }
              $11_1 = 32;
              label$55 : {
               switch ($19_1 | 0) {
               case 1:
                break label$28;
               default:
                break label$55;
               };
              }
              $11_1 = 28;
              break label$28;
             }
             if ((1 << $18_1 | 0) & 8388639 | 0) {
              continue label$32
             }
             break label$41;
            }
            $21_1 = ($18_1 - $19_1 | 0) + 1 | 0;
            $18_1 = $38_1 + 2 | 0;
            $19_1 = 0;
            label$56 : while (1) {
             if (($19_1 | 0) >= ($15_1 | 0)) {
              break label$40
             }
             $19_1 = $19_1 + 1 | 0;
             if (($21_1 | 0) == ($19_1 | 0)) {
              break label$6
             }
             if (($18_1 | 0) == (2 | 0)) {
              break label$7
             }
             $17_1 = HEAPU16[($18_1 + -2 | 0) >> 1] | 0;
             if ($17_1 >>> 0 > $16_1 >>> 0) {
              break label$40
             }
             $20_1 = HEAPU16[$18_1 >> 1] | 0;
             $38_1 = $18_1 + 6 | 0;
             $18_1 = $38_1;
             if ($20_1 >>> 0 < $16_1 >>> 0) {
              continue label$56
             }
             break label$56;
            };
            $18_1 = HEAPU16[($38_1 + -4 | 0) >> 1] | 0;
            if (($18_1 | 0) == (1 | 0)) {
             continue label$32
            }
            if (!(((($9_1 - $17_1 | 0) & 65535 | 0) >>> 0) % ($18_1 >>> 0) | 0)) {
             continue label$32
            }
            break label$40;
           }
           label$57 : {
            if (($38_1 | 0) < (19 | 0)) {
             break label$57
            }
            $18_1 = 0;
            $19_1 = $38_1;
            label$58 : while (1) {
             if (($19_1 | 0) <= ($18_1 | 0)) {
              break label$40
             }
             HEAP32[($4_1 + 40 | 0) >> 2] = 0;
             i64toi32_i32$3 = $4_1;
             i64toi32_i32$4 = 0;
             HEAP32[(i64toi32_i32$3 + 32 | 0) >> 2] = 0;
             HEAP32[(i64toi32_i32$3 + 36 | 0) >> 2] = i64toi32_i32$4;
             $20_1 = (($19_1 - $18_1 | 0 | 0) / (2 | 0) | 0) + $18_1 | 0;
             if ($20_1 >>> 0 >= $38_1 >>> 0) {
              break label$6
             }
             $16_1 = $15_1 + Math_imul($20_1, 12) | 0;
             $21_1 = HEAP32[$16_1 >> 2] | 0;
             $17_1 = HEAP32[($16_1 + 4 | 0) >> 2] | 0;
             $39_1 = HEAP32[($16_1 + 8 | 0) >> 2] | 0;
             HEAP32[($4_1 + 40 | 0) >> 2] = $39_1;
             HEAP32[($4_1 + 36 | 0) >> 2] = $17_1;
             HEAP32[($4_1 + 32 | 0) >> 2] = $21_1;
             label$59 : {
              $16_1 = $9_1 >>> 0 < $21_1 >>> 0;
              if ($16_1) {
               break label$59
              }
              if ($17_1 >>> 0 < $9_1 >>> 0) {
               break label$59
              }
              if (($39_1 | 0) == (1 | 0)) {
               continue label$32
              }
              if (!((($9_1 - $21_1 | 0) >>> 0) % ($39_1 >>> 0) | 0)) {
               continue label$32
              }
              break label$40;
             }
             $18_1 = $16_1 ? $18_1 : $20_1 + 1 | 0;
             $19_1 = $16_1 ? $20_1 : $19_1;
             continue label$58;
            };
           }
           $18_1 = $15_1 + -4 | 0;
           $19_1 = $38_1 + 1 | 0;
           label$60 : while (1) {
            $19_1 = $19_1 + -1 | 0;
            if (!$19_1) {
             break label$40
            }
            $21_1 = HEAP32[($18_1 + 4 | 0) >> 2] | 0;
            if ($9_1 >>> 0 < $21_1 >>> 0) {
             break label$40
            }
            $20_1 = $18_1 + 8 | 0;
            $16_1 = $18_1 + 12 | 0;
            $18_1 = $16_1;
            if ((HEAP32[$20_1 >> 2] | 0) >>> 0 < $9_1 >>> 0) {
             continue label$60
            }
            break label$60;
           };
           $18_1 = HEAP32[$16_1 >> 2] | 0;
           if (($18_1 | 0) == (1 | 0)) {
            continue label$32
           }
           if (!((($9_1 - $21_1 | 0) >>> 0) % ($18_1 >>> 0) | 0)) {
            continue label$32
           }
           break label$40;
          }
          if (($9_1 | 0) == (133 | 0)) {
           continue label$32
          }
          if (($9_1 | 0) == (160 | 0)) {
           continue label$32
          }
         }
         $93($11_1 | 0);
         $19_1 = HEAP32[($11_1 + 4 | 0) >> 2] | 0;
         HEAP32[$30_1 >> 2] = $19_1;
         HEAP32[$31_1 >> 2] = $19_1;
         $18_1 = HEAP32[($11_1 + 8 | 0) >> 2] | 0;
         label$61 : {
          label$62 : {
           if (($9_1 | 0) > (127 | 0)) {
            break label$62
           }
           HEAP32[$29_1 >> 2] = 0;
           HEAP8[$29_1 >> 0] = $9_1;
           $69($2_1 | 0, $19_1 | 0, $29_1 | 0, $18_1 | 0, HEAP32[($11_1 + 12 | 0) >> 2] | 0 | 0, 1 | 0);
           $18_1 = HEAP32[$2_1 >> 2] | 0;
           HEAP32[$32_1 >> 2] = $18_1;
           $9_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
           HEAP32[($11_1 + 8 | 0) >> 2] = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
           HEAP32[($11_1 + 4 | 0) >> 2] = $18_1;
           break label$61;
          }
          HEAP32[$33_1 >> 2] = HEAP32[($11_1 + 4 | 0) >> 2] | 0;
          label$63 : {
           if (((HEAP32[($11_1 + 12 | 0) >> 2] | 0) - $18_1 | 0 | 0) > (3 | 0)) {
            break label$63
           }
           $94($11_1 | 0, 4 | 0);
          }
          $19_1 = HEAP32[($11_1 + 4 | 0) >> 2] | 0;
          HEAP32[$34_1 >> 2] = $19_1;
          if ($18_1 >>> 0 > -5 >>> 0) {
           break label$8
          }
          if (($18_1 + 4 | 0) >>> 0 > (HEAP32[($11_1 + 12 | 0) >> 2] | 0) >>> 0) {
           break label$8
          }
          $19_1 = $19_1 + $18_1 | 0;
          label$64 : {
           label$65 : {
            label$66 : {
             if ($9_1 >>> 0 < 2048 >>> 0) {
              break label$66
             }
             $21_1 = 65533;
             label$67 : {
              if ($9_1 >>> 0 > 1114111 >>> 0) {
               break label$67
              }
              if (($9_1 & -2048 | 0 | 0) == (55296 | 0)) {
               break label$67
              }
              if ($9_1 >>> 0 >= 65536 >>> 0) {
               break label$65
              }
              $21_1 = $9_1;
             }
             if (!$19_1) {
              break label$7
             }
             HEAP8[$19_1 >> 0] = $21_1 >>> 12 | 0 | 224 | 0;
             HEAP8[($19_1 + 1 | 0) >> 0] = ($21_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
             $19_1 = $19_1 + 2 | 0;
             $20_1 = 3;
             $9_1 = $21_1;
             break label$64;
            }
            if (!$19_1) {
             break label$7
            }
            HEAP8[$19_1 >> 0] = $9_1 >>> 6 | 0 | 192 | 0;
            $19_1 = $19_1 + 1 | 0;
            $20_1 = 2;
            break label$64;
           }
           if (!$19_1) {
            break label$7
           }
           HEAP8[$19_1 >> 0] = $9_1 >>> 18 | 0 | 240 | 0;
           HEAP8[($19_1 + 2 | 0) >> 0] = ($9_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
           HEAP8[($19_1 + 1 | 0) >> 0] = ($9_1 >>> 12 | 0) & 63 | 0 | 128 | 0;
           $19_1 = $19_1 + 3 | 0;
           $20_1 = 4;
          }
          HEAP8[$19_1 >> 0] = $9_1 & 63 | 0 | 128 | 0;
          $19_1 = HEAP32[($11_1 + 4 | 0) >> 2] | 0;
          HEAP32[$35_1 >> 2] = $19_1;
          $18_1 = $20_1 + $18_1 | 0;
          $9_1 = HEAP32[($11_1 + 12 | 0) >> 2] | 0;
          if ($18_1 >>> 0 > $9_1 >>> 0) {
           break label$8
          }
          HEAP32[($11_1 + 8 | 0) >> 2] = $18_1;
          HEAP32[($11_1 + 4 | 0) >> 2] = $19_1;
         }
         HEAP32[($11_1 + 12 | 0) >> 2] = $9_1;
         continue label$32;
        };
       }
       $9_1 = $8(8 | 0) | 0;
       HEAP32[($2_1 + 732 | 0) >> 2] = $9_1;
       HEAP32[($2_1 + 736 | 0) >> 2] = $9_1;
       HEAP32[($9_1 + 4 | 0) >> 2] = 36;
       HEAP32[$9_1 >> 2] = 67392;
       $9(34 | 0, $9_1 | 0);
       abort();
      }
      $11_1 = 64;
     }
     HEAP32[$21_1 >> 2] = $11_1;
     label$68 : {
      label$69 : {
       if (($17_1 | 0) == (9189 | 0)) {
        break label$69
       }
       $11_1 = 128;
       HEAP32[($21_1 + 4 | 0) >> 2] = 128;
       break label$68;
      }
      $11_1 = HEAP32[($16_1 + 4 | 0) >> 2] | 0;
      HEAP32[($21_1 + 4 | 0) >> 2] = $11_1;
      if (($11_1 | 0) < (0 | 0)) {
       break label$8
      }
     }
     $19_1 = $8($11_1 | 0) | 0;
     HEAP32[($2_1 + 644 | 0) >> 2] = $19_1;
     HEAP32[($2_1 + 660 | 0) >> 2] = $19_1;
     HEAP32[($2_1 + 640 | 0) >> 2] = $19_1;
     HEAP32[($2_1 + 632 | 0) >> 2] = $19_1;
     HEAP32[($2_1 + 608 | 0) >> 2] = $19_1;
     HEAP32[($21_1 + 28 | 0) >> 2] = $11_1;
     HEAP32[($21_1 + 24 | 0) >> 2] = $11_1;
     HEAP32[($21_1 + 20 | 0) >> 2] = $19_1;
     $20_1 = $8($11_1 | 0) | 0;
     HEAP32[($2_1 + 648 | 0) >> 2] = $20_1;
     HEAP32[($2_1 + 652 | 0) >> 2] = $20_1;
     HEAP32[($2_1 + 636 | 0) >> 2] = $20_1;
     HEAP32[($2_1 + 612 | 0) >> 2] = $20_1;
     HEAP32[($21_1 + 16 | 0) >> 2] = $11_1;
     HEAP32[($21_1 + 12 | 0) >> 2] = $11_1;
     HEAP32[($21_1 + 8 | 0) >> 2] = $20_1;
     label$70 : {
      if (($11_1 | 0) > (63 | 0)) {
       break label$70
      }
      $96($2_1 + 216 | 0 | 0, $18_1 | 0, $9_1 | 0, 64 | 0, 64 | 0, $15_1 | 0);
      HEAP32[($2_1 + 620 | 0) >> 2] = HEAP32[($2_1 + 224 | 0) >> 2] | 0;
      $97($2_1 + 200 | 0 | 0, $18_1 | 0, 0 | 0, 0 | 0, $15_1 | 0);
      $9_1 = HEAP32[($2_1 + 200 | 0) >> 2] | 0;
      HEAP32[($2_1 + 628 | 0) >> 2] = $9_1;
      $14_1 = HEAP32[($2_1 + 204 | 0) >> 2] | 0;
     }
     $18_1 = $14_1 >>> 0 > $11_1 >>> 0 ? $11_1 : $14_1;
     $50($19_1 | 0, $9_1 | 0, $18_1 | 0);
     $50($20_1 | 0, $9_1 | 0, $18_1 | 0);
     $9_1 = 0;
     label$71 : {
      label$72 : while (1) {
       if (($9_1 | 0) >= ($11_1 | 0)) {
        break label$71
       }
       if (($11_1 | 0) == ($9_1 | 0)) {
        break label$6
       }
       $18_1 = $19_1 + $9_1 | 0;
       HEAP8[$18_1 >> 0] = (HEAPU8[$18_1 >> 0] | 0) ^ 54 | 0;
       $9_1 = $9_1 + 1 | 0;
       continue label$72;
      };
     }
     $9_1 = 0;
     label$73 : {
      label$74 : while (1) {
       if (($9_1 | 0) >= ($11_1 | 0)) {
        break label$73
       }
       if (($11_1 | 0) == ($9_1 | 0)) {
        break label$6
       }
       $18_1 = $20_1 + $9_1 | 0;
       HEAP8[$18_1 >> 0] = (HEAPU8[$18_1 >> 0] | 0) ^ 92 | 0;
       $9_1 = $9_1 + 1 | 0;
       continue label$74;
      };
     }
     $96($2_1 + 184 | 0 | 0, $16_1 | 0, $19_1 | 0, $11_1 | 0, $11_1 | 0, $17_1 | 0);
     HEAP32[($2_1 + 664 | 0) >> 2] = HEAP32[($2_1 + 192 | 0) >> 2] | 0;
     $96($2_1 + 168 | 0 | 0, $21_1 | 0, $26_1 | 0, $25_1 | 0, $24_1 | 0, 9189 | 0);
     HEAP32[($2_1 + 676 | 0) >> 2] = HEAP32[($2_1 + 176 | 0) >> 2] | 0;
     $71($2_1 + 152 | 0 | 0, $12_1 | 0, $13_1 | 0);
     $9_1 = HEAP32[($2_1 + 152 | 0) >> 2] | 0;
     HEAP32[($2_1 + 680 | 0) >> 2] = $9_1;
     $96($2_1 + 136 | 0 | 0, $21_1 | 0, $9_1 | 0, $13_1 | 0, $13_1 | 0, 9189 | 0);
     HEAP32[($2_1 + 684 | 0) >> 2] = HEAP32[($2_1 + 144 | 0) >> 2] | 0;
     i64toi32_i32$1 = $22_1;
     i64toi32_i32$4 = HEAP32[i64toi32_i32$1 >> 2] | 0;
     i64toi32_i32$3 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
     $6_1 = i64toi32_i32$4;
     $6$hi = i64toi32_i32$3;
     $92($2_1 + 128 | 0 | 0);
     $38_1 = HEAP32[($2_1 + 128 | 0) >> 2] | 0;
     HEAP32[($2_1 + 688 | 0) >> 2] = $38_1;
     $28_1 = HEAP32[($2_1 + 132 | 0) >> 2] | 0;
     $9_1 = $8(1 | 0) | 0;
     HEAP8[$9_1 >> 0] = 95;
     HEAP32[($2_1 + 692 | 0) >> 2] = $9_1;
     $70($2_1 + 120 | 0 | 0, $9_1 | 0, 1 | 0, 1 | 0);
     $9_1 = HEAP32[($2_1 + 120 | 0) >> 2] | 0;
     HEAP32[($2_1 + 700 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 696 | 0) >> 2] = $9_1;
     $11_1 = HEAP32[($2_1 + 124 | 0) >> 2] | 0;
     $95($2_1 + 112 | 0 | 0);
     $18_1 = HEAP32[($2_1 + 112 | 0) >> 2] | 0;
     HEAP32[($2_1 + 704 | 0) >> 2] = $18_1;
     $58($2_1 + 104 | 0 | 0, $9_1 | 0, $11_1 | 0, $18_1 | 0, HEAP32[($2_1 + 116 | 0) >> 2] | 0 | 0);
     $39_1 = HEAP32[($2_1 + 108 | 0) >> 2] | 0;
     $29_1 = HEAP32[($2_1 + 104 | 0) >> 2] | 0;
     $9_1 = 0;
     $97($2_1 + 88 | 0 | 0, $21_1 | 0, 0 | 0, 0 | 0, 9189 | 0);
     $16_1 = HEAP32[($2_1 + 88 | 0) >> 2] | 0;
     HEAP32[($2_1 + 708 | 0) >> 2] = $16_1;
     $18_1 = HEAP32[($2_1 + 92 | 0) >> 2] | 0;
     $21_1 = $18_1 << 1 | 0;
     if (($21_1 | 0) <= (-1 | 0)) {
      break label$8
     }
     $17_1 = $8($21_1 | 0) | 0;
     HEAP32[($2_1 + 712 | 0) >> 2] = $17_1;
     $14_1 = 0 - $16_1 | 0;
     $15_1 = $18_1 & 2147483647 | 0;
     $11_1 = 0;
     label$75 : {
      label$76 : while (1) {
       if (($9_1 | 0) >= ($18_1 | 0)) {
        break label$75
       }
       if (($18_1 | 0) == ($9_1 | 0)) {
        break label$6
       }
       if (($14_1 | 0) == ($9_1 | 0)) {
        break label$7
       }
       if (($15_1 | 0) == ($9_1 | 0)) {
        break label$6
       }
       $19_1 = $17_1 + $11_1 | 0;
       $20_1 = HEAPU8[($16_1 + $9_1 | 0) >> 0] | 0;
       HEAP8[$19_1 >> 0] = HEAPU8[(($20_1 >>> 4 | 0) + 67154 | 0) >> 0] | 0;
       if (($11_1 + 1 | 0) >>> 0 >= $21_1 >>> 0) {
        break label$6
       }
       HEAP8[($19_1 + 1 | 0) >> 0] = HEAPU8[(($20_1 & 15 | 0) + 67154 | 0) >> 0] | 0;
       $9_1 = $9_1 + 1 | 0;
       $11_1 = $11_1 + 2 | 0;
       continue label$76;
      };
     }
     $70($2_1 + 80 | 0 | 0, $17_1 | 0, $21_1 | 0, $21_1 | 0);
     $9_1 = HEAP32[($2_1 + 80 | 0) >> 2] | 0;
     HEAP32[($2_1 + 816 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 812 | 0) >> 2] = $9_1;
     $58($2_1 + 72 | 0 | 0, $29_1 | 0, $39_1 | 0, $9_1 | 0, HEAP32[($2_1 + 84 | 0) >> 2] | 0 | 0);
     $58($2_1 + 64 | 0 | 0, HEAP32[($2_1 + 72 | 0) >> 2] | 0 | 0, HEAP32[($2_1 + 76 | 0) >> 2] | 0 | 0, $12_1 | 0, $13_1 | 0);
     $11_1 = HEAP32[($2_1 + 68 | 0) >> 2] | 0;
     $18_1 = HEAP32[($2_1 + 64 | 0) >> 2] | 0;
     $9_1 = $8(7 | 0) | 0;
     HEAP8[($9_1 + 6 | 0) >> 0] = 47;
     $102 = 15720;
     HEAP8[($9_1 + 4 | 0) >> 0] = $102;
     HEAP8[($9_1 + 5 | 0) >> 0] = $102 >>> 8 | 0;
     $80_1 = 1952542779;
     HEAP8[$9_1 >> 0] = $80_1;
     HEAP8[($9_1 + 1 | 0) >> 0] = $80_1 >>> 8 | 0;
     HEAP8[($9_1 + 2 | 0) >> 0] = $80_1 >>> 16 | 0;
     HEAP8[($9_1 + 3 | 0) >> 0] = $80_1 >>> 24 | 0;
     HEAP32[($2_1 + 820 | 0) >> 2] = $9_1;
     $70($2_1 + 56 | 0 | 0, $9_1 | 0, 7 | 0, 7 | 0);
     $9_1 = HEAP32[($2_1 + 56 | 0) >> 2] | 0;
     HEAP32[($2_1 + 828 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 824 | 0) >> 2] = $9_1;
     $58($2_1 + 48 | 0 | 0, $18_1 | 0, $11_1 | 0, $9_1 | 0, HEAP32[($2_1 + 60 | 0) >> 2] | 0 | 0);
     i64toi32_i32$1 = $2_1;
     i64toi32_i32$3 = HEAP32[($2_1 + 48 | 0) >> 2] | 0;
     i64toi32_i32$4 = HEAP32[($2_1 + 52 | 0) >> 2] | 0;
     $7_1 = i64toi32_i32$3;
     $7$hi = i64toi32_i32$4;
     $9_1 = $8(8 | 0) | 0;
     HEAP32[($2_1 + 832 | 0) >> 2] = $9_1;
     HEAP32[($2_1 + 836 | 0) >> 2] = $9_1;
     i64toi32_i32$3 = $9_1;
     HEAP32[$9_1 >> 2] = $7_1;
     HEAP32[($9_1 + 4 | 0) >> 2] = i64toi32_i32$4;
     i64toi32_i32$4 = $6$hi;
     $63($6_1 | 0, i64toi32_i32$4 | 0, $38_1 | 0, $28_1 | 0, 34 | 0, $9_1 | 0);
     $9_1 = $68($4_1 | 0) | 0;
     HEAP32[($2_1 + 844 | 0) >> 2] = $9_1;
     HEAP32[($9_1 + 8 | 0) >> 2] = 1e3;
     $5_1 = +fimport$3();
     $9_1 = HEAP32[(0 + 68480 | 0) >> 2] | 0;
     HEAP32[($2_1 + 848 | 0) >> 2] = $9_1;
     label$77 : {
      if ($9_1) {
       break label$77
      }
      HEAPF64[(0 + 67704 | 0) >> 3] = $5_1;
     }
     $9_1 = 68480;
     $19_1 = $2_1 + 852 | 0;
     $20_1 = $2_1 + 856 | 0;
     $21_1 = $2_1 + 860 | 0;
     $16_1 = $2_1 + 864 | 0;
     $17_1 = $2_1 + 868 | 0;
     $14_1 = $2_1 + 872 | 0;
     $15_1 = $2_1 + 876 | 0;
     $38_1 = $2_1 + 880 | 0;
     $28_1 = $2_1 + 884 | 0;
     label$78 : {
      label$79 : while (1) {
       $11_1 = HEAP32[$9_1 >> 2] | 0;
       HEAP32[$19_1 >> 2] = $11_1;
       if (!$11_1) {
        break label$78
       }
       $11_1 = $68($4_1 | 0) | 0;
       HEAP32[$20_1 >> 2] = $11_1;
       $11_1 = HEAP32[($11_1 + 8 | 0) >> 2] | 0;
       $18_1 = HEAP32[$9_1 >> 2] | 0;
       HEAP32[$21_1 >> 2] = $18_1;
       $18_1 = $68($18_1 | 0) | 0;
       HEAP32[$16_1 >> 2] = $18_1;
       if ($11_1 >>> 0 < (HEAP32[($18_1 + 8 | 0) >> 2] | 0) >>> 0) {
        break label$78
       }
       $11_1 = $68($4_1 | 0) | 0;
       HEAP32[$17_1 >> 2] = $11_1;
       $18_1 = HEAP32[$9_1 >> 2] | 0;
       HEAP32[$14_1 >> 2] = $18_1;
       $18_1 = $68($18_1 | 0) | 0;
       HEAP32[$15_1 >> 2] = $18_1;
       HEAP32[($11_1 + 8 | 0) >> 2] = (HEAP32[($11_1 + 8 | 0) >> 2] | 0) - (HEAP32[($18_1 + 8 | 0) >> 2] | 0) | 0;
       $9_1 = HEAP32[$9_1 >> 2] | 0;
       HEAP32[$38_1 >> 2] = $9_1;
       $9_1 = $68($9_1 | 0) | 0;
       HEAP32[$28_1 >> 2] = $9_1;
       continue label$79;
      };
     }
     $11_1 = HEAP32[$9_1 >> 2] | 0;
     HEAP32[($2_1 + 888 | 0) >> 2] = $11_1;
     label$80 : {
      if (!$11_1) {
       break label$80
      }
      $11_1 = HEAP32[$9_1 >> 2] | 0;
      HEAP32[($2_1 + 892 | 0) >> 2] = $11_1;
      $11_1 = $68($11_1 | 0) | 0;
      HEAP32[($2_1 + 896 | 0) >> 2] = $11_1;
      $18_1 = $68($4_1 | 0) | 0;
      HEAP32[($2_1 + 900 | 0) >> 2] = $18_1;
      HEAP32[($11_1 + 8 | 0) >> 2] = (HEAP32[($11_1 + 8 | 0) >> 2] | 0) - (HEAP32[($18_1 + 8 | 0) >> 2] | 0) | 0;
     }
     $11_1 = $68($4_1 | 0) | 0;
     HEAP32[($2_1 + 904 | 0) >> 2] = $11_1;
     $18_1 = HEAP32[$9_1 >> 2] | 0;
     HEAP32[($2_1 + 908 | 0) >> 2] = $18_1;
     HEAP32[$11_1 >> 2] = $18_1;
     HEAP32[$9_1 >> 2] = $4_1;
     HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
     HEAP8[($4_1 + 20 | 0) >> 0] = 0;
     global$0 = $2_1 + 912 | 0;
     return;
    }
    $67();
    abort();
   }
   $14();
   abort();
  }
  $49();
  abort();
 }
 
 function $39() {
  var $0_1 = 0, $15_1 = 0, i64toi32_i32$0 = 0, $17_1 = 0, $18_1 = 0, $1_1 = 0, $2_1 = 0.0, $3_1 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $13_1 = 0, $14_1 = 0, $16_1 = 0.0;
  $0_1 = global$0 - 80 | 0;
  global$0 = $0_1;
  i64toi32_i32$0 = 15;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  HEAP32[($0_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($0_1 + 72 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 64 | 0) >> 2] = 0;
  HEAP32[($0_1 + 68 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 56 | 0) >> 2] = 0;
  HEAP32[($0_1 + 60 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 48 | 0) >> 2] = 0;
  HEAP32[($0_1 + 52 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 40 | 0) >> 2] = 0;
  HEAP32[($0_1 + 44 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 32 | 0) >> 2] = 0;
  HEAP32[($0_1 + 36 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 24 | 0) >> 2] = 0;
  HEAP32[($0_1 + 28 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = 0;
  HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  $1_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $0_1 + 8 | 0;
  HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
  $2_1 = 0.0;
  $3_1 = $0_1 + 16 | 0;
  $4_1 = $0_1 + 20 | 0;
  $5_1 = $0_1 + 72 | 0;
  $6_1 = $0_1 + 44 | 0;
  $7_1 = $0_1 + 48 | 0;
  $8_1 = $0_1 + 52 | 0;
  $9_1 = $0_1 + 56 | 0;
  $10_1 = $0_1 + 24 | 0;
  $11_1 = $0_1 + 28 | 0;
  $12_1 = $0_1 + 32 | 0;
  $13_1 = $0_1 + 36 | 0;
  $14_1 = $0_1 + 40 | 0;
  label$1 : while (1) {
   $15_1 = HEAP32[(0 + 68480 | 0) >> 2] | 0;
   HEAP32[$3_1 >> 2] = $15_1;
   label$2 : {
    if (!$15_1) {
     break label$2
    }
    $2_1 = +fimport$3();
   }
   $15_1 = HEAP32[(0 + 68480 | 0) >> 2] | 0;
   HEAP32[$4_1 >> 2] = $15_1;
   label$3 : {
    if (!$15_1) {
     break label$3
    }
    $15_1 = HEAP32[(0 + 68480 | 0) >> 2] | 0;
    HEAP32[$10_1 >> 2] = $15_1;
    $16_1 = +HEAPF64[(0 + 67704 | 0) >> 3];
    $15_1 = $68($15_1 | 0) | 0;
    HEAP32[$11_1 >> 2] = $15_1;
    if ($2_1 - $16_1 < +((HEAP32[($15_1 + 8 | 0) >> 2] | 0) >>> 0)) {
     break label$3
    }
    $17_1 = HEAP32[(0 + 68480 | 0) >> 2] | 0;
    HEAP32[$12_1 >> 2] = $17_1;
    $15_1 = $68($17_1 | 0) | 0;
    HEAP32[$13_1 >> 2] = $15_1;
    HEAPF64[(0 + 67704 | 0) >> 3] = +HEAPF64[(0 + 67704 | 0) >> 3] + +((HEAP32[($15_1 + 8 | 0) >> 2] | 0) >>> 0);
    $18_1 = HEAP32[$15_1 >> 2] | 0;
    HEAP32[(0 + 68480 | 0) >> 2] = $18_1;
    HEAP32[$14_1 >> 2] = $18_1;
    HEAP32[$15_1 >> 2] = 0;
    $41($17_1 | 0);
   }
   $15_1 = HEAP32[(0 + 68492 | 0) >> 2] | 0;
   HEAP32[$5_1 >> 2] = $15_1;
   HEAP32[$6_1 >> 2] = $15_1;
   label$4 : {
    if (!$15_1) {
     break label$4
    }
    $18_1 = $68($15_1 | 0) | 0;
    HEAP32[$7_1 >> 2] = $18_1;
    $17_1 = HEAP32[$18_1 >> 2] | 0;
    HEAP32[$8_1 >> 2] = $17_1;
    HEAP32[$9_1 >> 2] = $17_1;
    HEAP32[(0 + 68492 | 0) >> 2] = $17_1;
    label$5 : {
     if ($17_1) {
      break label$5
     }
     HEAP32[(0 + 68496 | 0) >> 2] = 0;
    }
    HEAP32[$18_1 >> 2] = 0;
    FUNCTION_TABLE[HEAP32[$15_1 >> 2] | 0]($15_1);
    continue label$1;
   }
   break label$1;
  };
  $15_1 = HEAP32[(0 + 68480 | 0) >> 2] | 0;
  HEAP32[($0_1 + 60 | 0) >> 2] = $15_1;
  label$6 : {
   if (!$15_1) {
    break label$6
   }
   $15_1 = HEAP32[(0 + 68480 | 0) >> 2] | 0;
   HEAP32[($0_1 + 64 | 0) >> 2] = $15_1;
   $15_1 = $68($15_1 | 0) | 0;
   HEAP32[($0_1 + 68 | 0) >> 2] = $15_1;
   fimport$4(+(+HEAPF64[(0 + 67704 | 0) >> 3] - $2_1 + +((HEAP32[($15_1 + 8 | 0) >> 2] | 0) >>> 0)));
   HEAP32[(0 + 67736 | 0) >> 2] = $1_1;
   global$0 = $0_1 + 80 | 0;
   return;
  }
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1;
  global$0 = $0_1 + 80 | 0;
 }
 
 function $40($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if ($0_1) {
    break label$1
   }
   return;
  }
  $41($0_1 | 0);
 }
 
 function $41($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  label$1 : {
   label$2 : {
    if (HEAP32[(0 + 68496 | 0) >> 2] | 0) {
     break label$2
    }
    $1_1 = 68492;
    $2_1 = 68496;
    break label$1;
   }
   $2_1 = $68(HEAP32[(0 + 68496 | 0) >> 2] | 0 | 0) | 0;
   $1_1 = 68496;
  }
  HEAP32[$2_1 >> 2] = $0_1;
  HEAP32[$1_1 >> 2] = $0_1;
 }
 
 function $42($0_1) {
  $0_1 = $0_1 | 0;
  var $2_1 = 0, $1_1 = 0, $3_1 = 0, $4_1 = 0;
  label$1 : {
   $1_1 = HEAP32[(0 + 67724 | 0) >> 2] | 0;
   if ($1_1 >>> 0 > $0_1 >>> 0) {
    break label$1
   }
   if ((HEAP32[(0 + 67728 | 0) >> 2] | 0) >>> 0 <= $0_1 >>> 0) {
    break label$1
   }
   $2_1 = ($0_1 - $1_1 | 0) >>> 4 | 0;
   if (!(($43($2_1 | 0) | 0) & 255 | 0)) {
    break label$1
   }
   $1_1 = ($2_1 << 4 | 0) + 16 | 0;
   $0_1 = $2_1;
   label$2 : while (1) {
    $1_1 = $1_1 + -16 | 0;
    $3_1 = $43($0_1 | 0) | 0;
    $4_1 = $0_1 + -1 | 0;
    $0_1 = $4_1;
    if (($3_1 & 255 | 0 | 0) == (2 | 0)) {
     continue label$2
    }
    break label$2;
   };
   $0_1 = $4_1 + 1 | 0;
   if ((($43($0_1 | 0) | 0) & 255 | 0 | 0) == (3 | 0)) {
    break label$1
   }
   $47($0_1 | 0, 3 | 0);
   label$3 : {
    label$4 : {
     if ((($43($2_1 | 0) | 0) & 255 | 0 | 0) == (1 | 0)) {
      break label$4
     }
     if ((($43($2_1 | 0) | 0) & 255 | 0 | 0) != (3 | 0)) {
      break label$3
     }
    }
    $2_1 = $2_1 + 1 | 0;
   }
   $0_1 = ($2_1 << 4 | 0) + -16 | 0;
   label$5 : while (1) {
    $0_1 = $0_1 + 16 | 0;
    $3_1 = $43($2_1 | 0) | 0;
    $2_1 = $2_1 + 1 | 0;
    if (($3_1 & 255 | 0 | 0) == (2 | 0)) {
     continue label$5
    }
    break label$5;
   };
   $3_1 = HEAP32[(0 + 67724 | 0) >> 2] | 0;
   $45($3_1 + $1_1 | 0 | 0, $3_1 + $0_1 | 0 | 0);
  }
 }
 
 function $43($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  label$1 : {
   $1_1 = ($0_1 >>> 2 | 0) + 68621 | 0;
   if ($1_1) {
    break label$1
   }
   $14();
   abort();
  }
  return ((HEAPU8[$1_1 >> 0] | 0) >>> (($0_1 << 1 | 0) & 6 | 0) | 0) & 3 | 0 | 0;
 }
 
 function $44($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  label$1 : {
   $1_1 = ($0_1 >>> 2 | 0) + 68621 | 0;
   if ($1_1) {
    break label$1
   }
   $14();
   abort();
  }
  HEAP8[$1_1 >> 0] = (HEAPU8[$1_1 >> 0] | 0) & ((3 << (($0_1 << 1 | 0) & 6 | 0) | 0) ^ -1 | 0) | 0;
 }
 
 function $45($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  label$1 : {
   label$2 : {
    label$3 : while (1) {
     if (($1_1 | 0) == ($0_1 | 0)) {
      break label$2
     }
     if (!$0_1) {
      break label$1
     }
     $42(HEAP32[$0_1 >> 2] | 0 | 0);
     $0_1 = $0_1 + 4 | 0;
     continue label$3;
    };
   }
   return;
  }
  $14();
  abort();
 }
 
 function $46($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $31(66064 | 0, 22 | 0);
  $31($0_1 | 0, $1_1 | 0);
  $33();
  abort();
 }
 
 function $47($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  label$1 : {
   $2_1 = ($0_1 >>> 2 | 0) + 68621 | 0;
   if ($2_1) {
    break label$1
   }
   $14();
   abort();
  }
  HEAP8[$2_1 >> 0] = HEAPU8[$2_1 >> 0] | 0 | ($1_1 << (($0_1 << 1 | 0) & 6 | 0) | 0) | 0;
 }
 
 function $48() {
  $39();
 }
 
 function $49() {
  $46(65952 | 0, 18 | 0);
  abort();
 }
 
 function $50($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, $4_1 = 0, $5_1 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if ($0_1 >>> 0 < $1_1 >>> 0) {
      break label$3
     }
     $1_1 = $1_1 + -1 | 0;
     $3_1 = $0_1 + -1 | 0;
     $0_1 = 0;
     label$4 : while (1) {
      if (($2_1 | 0) == ($0_1 | 0)) {
       break label$2
      }
      $4_1 = $1_1 + $2_1 | 0;
      if (!$4_1) {
       break label$1
      }
      $5_1 = $3_1 + $2_1 | 0;
      if (!$5_1) {
       break label$1
      }
      HEAP8[$5_1 >> 0] = HEAPU8[$4_1 >> 0] | 0;
      $0_1 = $0_1 + 1 | 0;
      $1_1 = $1_1 + -1 | 0;
      $3_1 = $3_1 + -1 | 0;
      continue label$4;
     };
    }
    $30($0_1 | 0, $1_1 | 0, $2_1 | 0);
   }
   return;
  }
  $14();
  abort();
 }
 
 function $51($0_1) {
  $0_1 = +$0_1;
  var $1_1 = 0, $2_1 = 0, $4_1 = 0, $6_1 = 0, $3_1 = 0.0, $8_1 = 0, $9_1 = 0, i64toi32_i32$0 = 0, $5_1 = 0, $7_1 = 0, $17_1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $13_1 = 0, $14_1 = 0, $15_1 = 0;
  $1_1 = global$0 - 32 | 0;
  global$0 = $1_1;
  label$1 : {
   label$2 : {
    label$3 : {
     $2_1 = $0_1 == $0_1;
     if (!$2_1) {
      break label$3
     }
     $3_1 = $0_1 + $0_1;
     label$4 : {
      label$5 : {
       if ($0_1 <= 0.0) {
        break label$5
       }
       if (!($3_1 != $0_1 & ($3_1 == $3_1 & $2_1 | 0) | 0)) {
        break label$4
       }
      }
      label$6 : {
       label$7 : {
        if ($0_1 >= 0.0) {
         break label$7
        }
        if (!($3_1 != $0_1 & ($3_1 == $3_1 & $2_1 | 0) | 0)) {
         break label$6
        }
       }
       i64toi32_i32$0 = 0;
       $17_1 = 0;
       HEAP16[($1_1 + 6 | 0) >> 1] = $17_1;
       HEAP16[($1_1 + 8 | 0) >> 1] = $17_1 >>> 16 | 0;
       HEAP16[($1_1 + 10 | 0) >> 1] = i64toi32_i32$0;
       HEAP16[($1_1 + 12 | 0) >> 1] = i64toi32_i32$0 >>> 16 | 0;
       i64toi32_i32$0 = 0;
       HEAP32[$1_1 >> 2] = 43;
       HEAP32[($1_1 + 4 | 0) >> 2] = i64toi32_i32$0;
       label$8 : {
        if ($0_1 != 0.0 & $2_1 | 0) {
         break label$8
        }
        $4_1 = 0;
        $5_1 = 43;
        if (1.0 / $0_1 >= 0.0 ^ 1 | 0) {
         break label$2
        }
        break label$1;
       }
       $5_1 = 43;
       label$9 : {
        if ($0_1 >= 0.0) {
         break label$9
        }
        $5_1 = 45;
        HEAP8[$1_1 >> 0] = 45;
        $0_1 = 0.0 - $0_1;
       }
       $4_1 = 0;
       label$10 : while (1) {
        label$11 : {
         if ($0_1 < 10.0 ^ 1 | 0) {
          break label$11
         }
         label$12 : {
          label$13 : while (1) {
           if ($0_1 >= 1.0) {
            break label$12
           }
           $0_1 = $0_1 * 10.0;
           $4_1 = $4_1 + -1 | 0;
           continue label$13;
          };
         }
         $0_1 = $0_1 + 5.000000000000001e-07;
         if ($0_1 < 10.0) {
          break label$1
         }
         $0_1 = $0_1 / 10.0;
         $4_1 = $4_1 + 1 | 0;
         break label$1;
        }
        $0_1 = $0_1 / 10.0;
        $4_1 = $4_1 + 1 | 0;
        continue label$10;
       };
      }
      $31(66025 | 0, 4 | 0);
      global$0 = $1_1 + 32 | 0;
      return;
     }
     $31(66021 | 0, 4 | 0);
     global$0 = $1_1 + 32 | 0;
     return;
    }
    $31(66018 | 0, 3 | 0);
    global$0 = $1_1 + 32 | 0;
    return;
   }
   $5_1 = 45;
   HEAP8[$1_1 >> 0] = 45;
  }
  $6_1 = $1_1 | 2 | 0;
  $2_1 = 0;
  label$14 : while (1) {
   label$15 : {
    label$16 : {
     label$17 : {
      if (($2_1 | 0) == (7 | 0)) {
       break label$17
      }
      $7_1 = $6_1 + $2_1 | 0;
      if (!(Math_abs($0_1) < 2147483648.0)) {
       break label$16
      }
      $8_1 = ~~$0_1;
      break label$15;
     }
     HEAP8[($1_1 + 9 | 0) >> 0] = 101;
     $8_1 = HEAPU8[($1_1 + 2 | 0) >> 0] | 0;
     HEAP8[($1_1 + 2 | 0) >> 0] = 46;
     HEAP8[($1_1 + 1 | 0) >> 0] = $8_1;
     $2_1 = 0;
     $7_1 = ($4_1 | 0) < (0 | 0) ? 45 : 43;
     HEAP8[($1_1 + 10 | 0) >> 0] = $7_1;
     $6_1 = $4_1 >> 31 | 0;
     $6_1 = ($4_1 + $6_1 | 0) ^ $6_1 | 0;
     $4_1 = (($6_1 | 0) / (100 | 0) | 0) + 48 | 0;
     HEAP8[($1_1 + 11 | 0) >> 0] = $4_1;
     $9_1 = ($6_1 | 0) / (10 | 0) | 0;
     $6_1 = ($6_1 - Math_imul($9_1, 10) | 0) + 48 | 0;
     HEAP8[($1_1 + 13 | 0) >> 0] = $6_1;
     $9_1 = (($9_1 & 255 | 0) >>> 0) % (10 >>> 0) | 0 | 48 | 0;
     HEAP8[($1_1 + 12 | 0) >> 0] = $9_1;
     $10_1 = HEAPU8[($1_1 + 8 | 0) >> 0] | 0;
     $11_1 = HEAPU8[($1_1 + 7 | 0) >> 0] | 0;
     $12_1 = HEAPU8[($1_1 + 6 | 0) >> 0] | 0;
     $13_1 = HEAPU8[($1_1 + 5 | 0) >> 0] | 0;
     $14_1 = HEAPU8[($1_1 + 4 | 0) >> 0] | 0;
     $15_1 = HEAPU8[($1_1 + 3 | 0) >> 0] | 0;
     label$18 : while (1) {
      label$19 : {
       if (($2_1 | 0) != (14 | 0)) {
        break label$19
       }
       global$0 = $1_1 + 32 | 0;
       return;
      }
      HEAP8[($1_1 + 31 | 0) >> 0] = $6_1;
      HEAP8[($1_1 + 30 | 0) >> 0] = $9_1;
      HEAP8[($1_1 + 29 | 0) >> 0] = $4_1;
      HEAP8[($1_1 + 28 | 0) >> 0] = $7_1;
      HEAP8[($1_1 + 27 | 0) >> 0] = 101;
      HEAP8[($1_1 + 26 | 0) >> 0] = $10_1;
      HEAP8[($1_1 + 25 | 0) >> 0] = $11_1;
      HEAP8[($1_1 + 24 | 0) >> 0] = $12_1;
      HEAP8[($1_1 + 23 | 0) >> 0] = $13_1;
      HEAP8[($1_1 + 22 | 0) >> 0] = $14_1;
      HEAP8[($1_1 + 21 | 0) >> 0] = $15_1;
      HEAP8[($1_1 + 20 | 0) >> 0] = 46;
      HEAP8[($1_1 + 19 | 0) >> 0] = $8_1;
      HEAP8[($1_1 + 18 | 0) >> 0] = $5_1;
      $52(HEAPU8[(($1_1 + 18 | 0) + $2_1 | 0) >> 0] | 0 | 0);
      $2_1 = $2_1 + 1 | 0;
      continue label$18;
     };
    }
    $8_1 = -2147483648;
   }
   HEAP8[$7_1 >> 0] = $8_1 + 48 | 0;
   $2_1 = $2_1 + 1 | 0;
   $0_1 = ($0_1 - +($8_1 | 0)) * 10.0;
   continue label$14;
  };
 }
 
 function $52($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP8[(0 + 67732 | 0) >> 0] = $0_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = 0;
  fimport$0(1 | 0, 68484 | 0, 1 | 0, $1_1 + 12 | 0 | 0) | 0;
  global$0 = $1_1 + 16 | 0;
 }
 
 function $53($0_1) {
  $0_1 = $0_1 | 0;
  label$1 : {
   if (($0_1 | 0) > (-1 | 0)) {
    break label$1
   }
   $52(45 | 0);
   $0_1 = 0 - $0_1 | 0;
  }
  $54($0_1 | 0);
 }
 
 function $54($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0, $4_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP16[($1_1 + 8 | 0) >> 1] = 0;
  HEAP32[$1_1 >> 2] = 0;
  HEAP32[($1_1 + 4 | 0) >> 2] = 0;
  $2_1 = 9;
  $3_1 = 9;
  label$1 : {
   label$2 : while (1) {
    label$3 : {
     if (($3_1 | 0) > (-1 | 0)) {
      break label$3
     }
     label$4 : while (1) {
      if (($2_1 | 0) >= (10 | 0)) {
       break label$1
      }
      $52(HEAPU8[($1_1 + $2_1 | 0) >> 0] | 0 | 0);
      $2_1 = $2_1 + 1 | 0;
      continue label$4;
     };
    }
    $4_1 = ($0_1 >>> 0) / (10 >>> 0) | 0;
    $0_1 = $0_1 - Math_imul($4_1, 10) | 0 | 48 | 0;
    HEAP8[($1_1 + $3_1 | 0) >> 0] = $0_1;
    $2_1 = ($0_1 & 255 | 0 | 0) == (48 | 0) ? $2_1 : $3_1;
    $3_1 = $3_1 + -1 | 0;
    $0_1 = $4_1;
    continue label$2;
   };
  }
  global$0 = $1_1 + 16 | 0;
 }
 
 function $55($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0;
  label$1 : {
   i64toi32_i32$0 = $0$hi;
   i64toi32_i32$2 = $0_1;
   i64toi32_i32$1 = 0;
   if (i64toi32_i32$0 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 < 10 >>> 0 | 0) | 0) {
    break label$1
   }
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$0 = 0;
   i64toi32_i32$0 = __wasm_i64_udiv($0_1 | 0, i64toi32_i32$2 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
   i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
   $55(i64toi32_i32$0 | 0, i64toi32_i32$2 | 0);
  }
  i64toi32_i32$2 = $0$hi;
  i64toi32_i32$0 = 0;
  i64toi32_i32$0 = __wasm_i64_urem($0_1 | 0, i64toi32_i32$2 | 0, 10 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
  $52(i64toi32_i32$0 | 48 | 0 | 0);
 }
 
 function $56($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0;
  label$1 : {
   if (!$0_1) {
    break label$1
   }
   $52(48 | 0);
   $52(120 | 0);
   $1_1 = 8;
   label$2 : {
    label$3 : while (1) {
     if (!$1_1) {
      break label$2
     }
     $2_1 = $0_1 >>> 28 | 0;
     $52(($2_1 >>> 0 < 10 >>> 0 ? $2_1 | 48 | 0 : $2_1 + 87 | 0) | 0);
     $1_1 = $1_1 + -1 | 0;
     $0_1 = $0_1 << 4 | 0;
     continue label$3;
    };
   }
   return;
  }
  $31(66029 | 0, 3 | 0);
 }
 
 function $57($0_1, $1_1, $1$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  var $2_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $3_1 = 0, $4_1 = 0, $35_1 = 0;
  $2_1 = global$0 - 48 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 44 | 0) >> 2] = 0;
  HEAP32[($2_1 + 36 | 0) >> 2] = 2;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 24 | 0) >> 2] = 0;
  HEAP32[($2_1 + 28 | 0) >> 2] = i64toi32_i32$0;
  $3_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1 + 32 | 0;
  HEAP32[($2_1 + 32 | 0) >> 2] = $3_1;
  HEAP32[($2_1 + 40 | 0) >> 2] = $2_1 + 24 | 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = $36($1_1 | 0, i64toi32_i32$0 | 0, 66664 | 0, 7 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $78($2_1 + 16 | 0 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0);
  $4_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
  HEAP32[($2_1 + 44 | 0) >> 2] = $4_1;
  $58($2_1 + 8 | 0 | 0, 66672 | 0, 18 | 0, $4_1 | 0, HEAP32[($2_1 + 20 | 0) >> 2] | 0 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  $35_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $0_1;
  HEAP32[i64toi32_i32$1 >> 2] = $35_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  global$0 = $2_1 + 48 | 0;
 }
 
 function $58($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, $8_1 = 0, i64toi32_i32$0 = 0, $6_1 = 0, $7_1 = 0;
  $5_1 = global$0 - 64 | 0;
  global$0 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 56 | 0) >> 2] = 0;
  HEAP32[($5_1 + 60 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 48 | 0) >> 2] = 0;
  HEAP32[($5_1 + 52 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($5_1 + 36 | 0) >> 2] = 6;
  HEAP32[($5_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = $2_1;
  HEAP32[($5_1 + 16 | 0) >> 2] = $3_1;
  HEAP32[($5_1 + 20 | 0) >> 2] = $4_1;
  $6_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $5_1 + 32 | 0;
  HEAP32[($5_1 + 32 | 0) >> 2] = $6_1;
  HEAP32[($5_1 + 40 | 0) >> 2] = $5_1 + 8 | 0;
  HEAP32[($5_1 + 44 | 0) >> 2] = $5_1 + 16 | 0;
  label$1 : {
   label$2 : {
    if (!$2_1) {
     break label$2
    }
    if (!$4_1) {
     break label$1
    }
    $7_1 = $4_1 + $2_1 | 0;
    $8_1 = $8($7_1 | 0) | 0;
    HEAP32[($5_1 + 56 | 0) >> 2] = $8_1;
    HEAP32[($5_1 + 60 | 0) >> 2] = $8_1;
    HEAP32[($5_1 + 48 | 0) >> 2] = $8_1;
    $30($8_1 | 0, $1_1 | 0, $2_1 | 0);
    $30($8_1 + $2_1 | 0 | 0, $3_1 | 0, $4_1 | 0);
    HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
    i64toi32_i32$0 = 0;
    HEAP32[($5_1 + 24 | 0) >> 2] = 0;
    HEAP32[($5_1 + 28 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[($5_1 + 52 | 0) >> 2] = $5_1 + 24 | 0;
    HEAP32[($0_1 + 4 | 0) >> 2] = $7_1;
    HEAP32[$0_1 >> 2] = $8_1;
    global$0 = $5_1 + 64 | 0;
    return;
   }
   HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = $4_1;
   HEAP32[$0_1 >> 2] = $3_1;
   global$0 = $5_1 + 64 | 0;
   return;
  }
  HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $5_1 + 64 | 0;
 }
 
 function $59($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $4_1 = 0, $5_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 12 | 0) >> 2] = 0;
  HEAP32[($2_1 + 4 | 0) >> 2] = 2;
  HEAP32[($2_1 + 8 | 0) >> 2] = 0;
  $3_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  HEAP32[$2_1 >> 2] = $3_1;
  label$1 : {
   if ($1_1 >>> 0 > 7 >>> 0) {
    break label$1
   }
   $4_1 = 9;
   $5_1 = 66690;
   label$2 : {
    label$3 : {
     switch ($1_1 | 0) {
     case 1:
      $4_1 = 4;
      $5_1 = 66699;
      break label$2;
     case 2:
      $4_1 = 7;
      $5_1 = 66703;
      break label$2;
     case 3:
      $4_1 = 6;
      $5_1 = 66710;
      break label$2;
     case 4:
      $4_1 = 6;
      $5_1 = 66716;
      break label$2;
     case 5:
      $4_1 = 6;
      $5_1 = 66722;
      break label$2;
     case 6:
      $4_1 = 6;
      $5_1 = 66728;
      break label$2;
     case 7:
      break label$3;
     default:
      break label$2;
     };
    }
    $4_1 = 8;
    $5_1 = 66734;
   }
   HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = $4_1;
   HEAP32[$0_1 >> 2] = $5_1;
   global$0 = $2_1 + 16 | 0;
   return;
  }
  $1_1 = $8(8 | 0) | 0;
  HEAP32[($2_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($2_1 + 12 | 0) >> 2] = $1_1;
  HEAP32[($1_1 + 4 | 0) >> 2] = 8;
  HEAP32[$1_1 >> 2] = 66961;
  $9(34 | 0, $1_1 | 0);
  abort();
 }
 
 function $60($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $12_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $78($2_1 + 8 | 0 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0);
  i64toi32_i32$2 = $2_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  $12_1 = i64toi32_i32$1;
  i64toi32_i32$1 = $0_1;
  HEAP32[i64toi32_i32$1 >> 2] = $12_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  global$0 = $2_1 + 16 | 0;
 }
 
 function $61($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var $6_1 = 0, i64toi32_i32$0 = 0, $8_1 = 0, i64toi32_i32$1 = 0, $16_1 = 0, i64toi32_i32$2 = 0, $7_1 = 0, $15_1 = 0, i64toi32_i32$3 = 0, $9$hi = 0, $10$hi = 0, $11_1 = 0.0, $12_1 = 0.0, $22_1 = 0, $9_1 = 0, $10_1 = 0, $17_1 = 0, $18_1 = 0, $19_1 = 0, $20_1 = 0, $21_1 = 0, $13_1 = 0.0, $14_1 = 0.0;
  $6_1 = global$0 - 224 | 0;
  global$0 = $6_1;
  i64toi32_i32$1 = $6_1;
  i64toi32_i32$0 = 0;
  HEAP32[($6_1 + 120 | 0) >> 2] = 0;
  HEAP32[($6_1 + 124 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $6_1;
  i64toi32_i32$0 = 0;
  HEAP32[($6_1 + 136 | 0) >> 2] = 0;
  HEAP32[($6_1 + 140 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $6_1;
  i64toi32_i32$0 = 0;
  HEAP32[($6_1 + 180 | 0) >> 2] = 0;
  HEAP32[($6_1 + 184 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($6_1 + 220 | 0) >> 2] = 0;
  i64toi32_i32$1 = $6_1;
  i64toi32_i32$0 = 0;
  HEAP32[($6_1 + 212 | 0) >> 2] = 0;
  HEAP32[($6_1 + 216 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $6_1;
  i64toi32_i32$0 = 0;
  HEAP32[($6_1 + 204 | 0) >> 2] = 0;
  HEAP32[($6_1 + 208 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $6_1;
  i64toi32_i32$0 = 0;
  HEAP32[($6_1 + 196 | 0) >> 2] = 0;
  HEAP32[($6_1 + 200 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $6_1;
  i64toi32_i32$0 = 0;
  HEAP32[($6_1 + 188 | 0) >> 2] = 0;
  HEAP32[($6_1 + 192 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($6_1 + 172 | 0) >> 2] = 12;
  HEAP8[($6_1 + 128 | 0) >> 0] = $2_1;
  HEAP8[($6_1 + 144 | 0) >> 0] = $5_1;
  $7_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $6_1 + 168 | 0;
  HEAP32[($6_1 + 168 | 0) >> 2] = $7_1;
  HEAP32[($6_1 + 120 | 0) >> 2] = $0_1;
  HEAP32[($6_1 + 124 | 0) >> 2] = $1_1;
  HEAP32[($6_1 + 136 | 0) >> 2] = $3_1;
  HEAP32[($6_1 + 140 | 0) >> 2] = $4_1;
  HEAP32[($6_1 + 176 | 0) >> 2] = $6_1 + 120 | 0;
  HEAP32[($6_1 + 180 | 0) >> 2] = $6_1 + 136 | 0;
  label$1 : {
   if (!($21($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0)) {
    break label$1
   }
   if (!($21($3_1 | 0, $4_1 | 0, $5_1 | 0) | 0)) {
    break label$1
   }
   $8_1 = 0;
   label$2 : {
    if (($21($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0) != ($21($3_1 | 0, $4_1 | 0, $5_1 | 0) | 0 | 0)) {
     break label$2
    }
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        $8_1 = ($4($21($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0) | 0) + -1 | 0;
        if ($8_1 >>> 0 > 25 >>> 0) {
         break label$6
        }
        label$7 : {
         switch ($8_1 | 0) {
         default:
          $1_1 = $16($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
          $0_1 = $16($3_1 | 0, $4_1 | 0, $5_1 | 0) | 0;
          HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
          global$0 = $6_1 + 224 | 0;
          return ($1_1 ^ $0_1 | 0) ^ 1 | 0 | 0;
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
          i64toi32_i32$0 = $25($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
          i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
          $9_1 = i64toi32_i32$0;
          $9$hi = i64toi32_i32$1;
          i64toi32_i32$1 = $25($3_1 | 0, $4_1 | 0, $5_1 | 0) | 0;
          i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
          $10_1 = i64toi32_i32$1;
          $10$hi = i64toi32_i32$0;
          HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
          global$0 = $6_1 + 224 | 0;
          i64toi32_i32$0 = $9$hi;
          i64toi32_i32$0 = $10$hi;
          i64toi32_i32$0 = $9$hi;
          i64toi32_i32$2 = $9_1;
          i64toi32_i32$1 = $10$hi;
          i64toi32_i32$3 = $10_1;
          return (i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) | 0 | 0;
         case 6:
         case 7:
         case 8:
         case 9:
         case 10:
         case 11:
          i64toi32_i32$2 = $28($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
          i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
          $9_1 = i64toi32_i32$2;
          $9$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $28($3_1 | 0, $4_1 | 0, $5_1 | 0) | 0;
          i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
          $10_1 = i64toi32_i32$0;
          $10$hi = i64toi32_i32$2;
          HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
          global$0 = $6_1 + 224 | 0;
          i64toi32_i32$2 = $9$hi;
          i64toi32_i32$2 = $10$hi;
          i64toi32_i32$2 = $9$hi;
          i64toi32_i32$3 = $9_1;
          i64toi32_i32$0 = $10$hi;
          i64toi32_i32$1 = $10_1;
          return (i64toi32_i32$3 | 0) == (i64toi32_i32$1 | 0) & (i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) | 0 | 0;
         case 12:
         case 13:
          $11_1 = +$23($0_1 | 0, $1_1 | 0, $2_1 | 0);
          $12_1 = +$23($3_1 | 0, $4_1 | 0, $5_1 | 0);
          HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
          global$0 = $6_1 + 224 | 0;
          return $11_1 == $12_1 | ($11_1 != $11_1 | $12_1 != $12_1 | 0) | 0 | 0;
         case 14:
         case 15:
          $19($6_1 + 24 | 0 | 0, $0_1 | 0, $1_1 | 0, $2_1 | 0);
          $11_1 = +HEAPF64[($6_1 + 24 | 0) >> 3];
          $12_1 = +HEAPF64[($6_1 + 32 | 0) >> 3];
          $19($6_1 + 8 | 0 | 0, $3_1 | 0, $4_1 | 0, $5_1 | 0);
          HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
          $13_1 = +HEAPF64[($6_1 + 16 | 0) >> 3];
          $14_1 = +HEAPF64[($6_1 + 8 | 0) >> 3];
          global$0 = $6_1 + 224 | 0;
          return $11_1 == $14_1 & $12_1 == $13_1 | 0 | 0;
         case 16:
          $27($6_1 + 48 | 0 | 0, $0_1 | 0, $1_1 | 0, $2_1 | 0);
          $15_1 = HEAP32[($6_1 + 48 | 0) >> 2] | 0;
          HEAP32[($6_1 + 200 | 0) >> 2] = $15_1;
          $16_1 = HEAP32[($6_1 + 52 | 0) >> 2] | 0;
          $27($6_1 + 40 | 0 | 0, $3_1 | 0, $4_1 | 0, $5_1 | 0);
          $4_1 = HEAP32[($6_1 + 40 | 0) >> 2] | 0;
          HEAP32[($6_1 + 204 | 0) >> 2] = $4_1;
          $8_1 = 0;
          if (($16_1 | 0) != (HEAP32[($6_1 + 44 | 0) >> 2] | 0 | 0)) {
           break label$2
          }
          $1_1 = 0;
          label$14 : while (1) {
           if (($1_1 | 0) >= ($16_1 | 0)) {
            break label$3
           }
           $0_1 = $4_1 + $1_1 | 0;
           $2_1 = $15_1 + $1_1 | 0;
           $1_1 = $1_1 + 1 | 0;
           $8_1 = 0;
           if ((HEAPU8[$2_1 >> 0] | 0 | 0) == (HEAPU8[$0_1 >> 0] | 0 | 0)) {
            continue label$14
           }
           break label$2;
          };
         case 22:
          break label$4;
         case 25:
          break label$5;
         case 19:
         case 21:
         case 23:
         case 24:
          break label$6;
         case 17:
         case 18:
         case 20:
          break label$7;
         };
        }
        $1_1 = $26($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
        $0_1 = $26($3_1 | 0, $4_1 | 0, $5_1 | 0) | 0;
        HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
        global$0 = $6_1 + 224 | 0;
        return ($1_1 | 0) == ($0_1 | 0) | 0;
       }
       $46(66032 | 0, 28 | 0);
       abort();
      }
      HEAP32[($6_1 + 196 | 0) >> 2] = $6_1 + 152 | 0;
      $17_1 = $6_1 + 160 | 0;
      $18_1 = $6_1 + 216 | 0;
      $19_1 = $6_1 + 220 | 0;
      $16_1 = 0;
      label$15 : while (1) {
       HEAP8[$17_1 >> 0] = 0;
       i64toi32_i32$2 = $6_1;
       i64toi32_i32$3 = 0;
       HEAP32[($6_1 + 152 | 0) >> 2] = 0;
       HEAP32[($6_1 + 156 | 0) >> 2] = i64toi32_i32$3;
       if (($16_1 | 0) >= ($5($21($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0) | 0 | 0)) {
        break label$3
       }
       $20($6_1 + 104 | 0 | 0, $0_1 | 0, $1_1 | 0, $2_1 | 0, $16_1 | 0);
       $15_1 = HEAP32[($6_1 + 108 | 0) >> 2] | 0;
       HEAP32[$18_1 >> 2] = $15_1;
       $20_1 = HEAPU8[($6_1 + 112 | 0) >> 0] | 0;
       $21_1 = HEAP32[($6_1 + 104 | 0) >> 2] | 0;
       $20($6_1 + 88 | 0 | 0, $3_1 | 0, $4_1 | 0, $5_1 | 0, $16_1 | 0);
       $22_1 = HEAP32[($6_1 + 92 | 0) >> 2] | 0;
       HEAP32[$19_1 >> 2] = $22_1;
       $16_1 = $16_1 + 1 | 0;
       $8_1 = 0;
       if (($61($21_1 | 0, $15_1 | 0, $20_1 | 0, HEAP32[($6_1 + 88 | 0) >> 2] | 0 | 0, $22_1 | 0, HEAPU8[($6_1 + 96 | 0) >> 0] | 0 | 0) | 0) & 1 | 0) {
        continue label$15
       }
       break label$2;
      };
     }
     HEAP32[($6_1 + 184 | 0) >> 2] = $6_1 + 152 | 0;
     $16_1 = 0;
     $17_1 = $6_1 + 160 | 0;
     $18_1 = $6_1 + 208 | 0;
     $19_1 = $6_1 + 212 | 0;
     label$16 : while (1) {
      HEAP8[$17_1 >> 0] = $2_1;
      i64toi32_i32$2 = $6_1;
      i64toi32_i32$3 = 0;
      HEAP32[($6_1 + 152 | 0) >> 2] = 0;
      HEAP32[($6_1 + 156 | 0) >> 2] = i64toi32_i32$3;
      HEAP32[($6_1 + 156 | 0) >> 2] = $1_1;
      HEAP32[($6_1 + 152 | 0) >> 2] = $0_1;
      label$17 : {
       label$18 : {
        label$19 : {
         label$20 : {
          label$21 : {
           label$22 : {
            label$23 : {
             $8_1 = ($4($21($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0) | 0) + -17 | 0;
             if ($8_1 >>> 0 > 6 >>> 0) {
              break label$23
             }
             switch ($8_1 | 0) {
             case 6:
              break label$19;
             case 5:
              break label$22;
             case 1:
             case 2:
             case 3:
             case 4:
              break label$23;
             default:
              break label$21;
             };
            }
            $1_1 = $8(8 | 0) | 0;
            HEAP32[($6_1 + 188 | 0) >> 2] = $1_1;
            HEAP32[($6_1 + 192 | 0) >> 2] = $1_1;
            HEAP32[($1_1 + 4 | 0) >> 2] = 36;
            HEAP32[$1_1 >> 2] = 65824;
            $9(34 | 0, $1_1 | 0);
            abort();
           }
           if (!$1_1) {
            break label$20
           }
           break label$18;
          }
          if ($1_1) {
           break label$18
          }
         }
         $14();
         abort();
        }
        $8_1 = $15($21($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0 | 0) | 0;
        break label$17;
       }
       $8_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      }
      if (($16_1 | 0) >= ($8_1 | 0)) {
       break label$3
      }
      $24($6_1 + 72 | 0 | 0, $0_1 | 0, $1_1 | 0, $2_1 | 0, $16_1 | 0);
      $15_1 = HEAP32[($6_1 + 76 | 0) >> 2] | 0;
      HEAP32[$18_1 >> 2] = $15_1;
      $20_1 = HEAPU8[($6_1 + 80 | 0) >> 0] | 0;
      $21_1 = HEAP32[($6_1 + 72 | 0) >> 2] | 0;
      $24($6_1 + 56 | 0 | 0, $3_1 | 0, $4_1 | 0, $5_1 | 0, $16_1 | 0);
      $22_1 = HEAP32[($6_1 + 60 | 0) >> 2] | 0;
      HEAP32[$19_1 >> 2] = $22_1;
      $16_1 = $16_1 + 1 | 0;
      $8_1 = 0;
      if (($61($21_1 | 0, $15_1 | 0, $20_1 | 0, HEAP32[($6_1 + 56 | 0) >> 2] | 0 | 0, $22_1 | 0, HEAPU8[($6_1 + 64 | 0) >> 0] | 0 | 0) | 0) & 1 | 0) {
       continue label$16
      }
      break label$2;
     };
    }
    $8_1 = 1;
   }
   HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
   global$0 = $6_1 + 224 | 0;
   return $8_1 | 0;
  }
  $1_1 = $21($0_1 | 0, $1_1 | 0, $2_1 | 0) | 0;
  $0_1 = $21($3_1 | 0, $4_1 | 0, $5_1 | 0) | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
  global$0 = $6_1 + 224 | 0;
  return ($1_1 | 0) == ($0_1 | 0) | 0;
 }
 
 function $62() {
  var $0_1 = 0, $3_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $5_1 = 0, $6_1 = 0, $4_1 = 0, $12_1 = 0, $16_1 = 0, $7_1 = 0, $2_1 = 0, $10_1 = 0, $14_1 = 0, $16$hi = 0, $2$hi = 0, $13_1 = 0, $1_1 = 0, $15_1 = 0, $15$hi = 0, $8_1 = 0, $9_1 = 0, $11_1 = 0, $259 = 0;
  $0_1 = global$0 - 176 | 0;
  global$0 = $0_1;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 24;
  HEAP32[($0_1 + 72 | 0) >> 2] = 0;
  HEAP32[($0_1 + 76 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 128 | 0) >> 2] = 0;
  HEAP32[($0_1 + 132 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 112 | 0) >> 2] = 0;
  HEAP32[($0_1 + 116 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 168 | 0) >> 2] = 0;
  HEAP32[($0_1 + 172 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 160 | 0) >> 2] = 0;
  HEAP32[($0_1 + 164 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 152 | 0) >> 2] = 0;
  HEAP32[($0_1 + 156 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 144 | 0) >> 2] = 0;
  HEAP32[($0_1 + 148 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 136 | 0) >> 2] = 0;
  HEAP32[($0_1 + 140 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 120 | 0) >> 2] = 0;
  HEAP32[($0_1 + 124 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 104 | 0) >> 2] = 0;
  HEAP32[($0_1 + 108 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 96 | 0) >> 2] = 0;
  HEAP32[($0_1 + 100 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 88 | 0) >> 2] = 0;
  HEAP32[($0_1 + 92 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 80 | 0) >> 2] = 0;
  HEAP32[($0_1 + 84 | 0) >> 2] = i64toi32_i32$0;
  $1_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $0_1 + 72 | 0;
  HEAP32[($0_1 + 72 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 132 | 0) >> 2] = $0_1 + 40 | 0;
  HEAP32[($0_1 + 116 | 0) >> 2] = $0_1 + 32 | 0;
  HEAP32[($0_1 + 112 | 0) >> 2] = $0_1 + 24 | 0;
  HEAP32[($0_1 + 80 | 0) >> 2] = $0_1 + 16 | 0;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[($0_1 + 16 | 0) >> 2] = 0;
  HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 2146959360;
  i64toi32_i32$0 = $36(6 | 0, i64toi32_i32$0 | 0, 66998 | 0, 13 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $2_1 = i64toi32_i32$0;
  $2$hi = i64toi32_i32$1;
  i64toi32_i32$0 = $0_1;
  HEAP32[($0_1 + 16 | 0) >> 2] = $2_1;
  HEAP32[($0_1 + 20 | 0) >> 2] = i64toi32_i32$1;
  label$1 : {
   label$2 : {
    i64toi32_i32$2 = $2_1;
    i64toi32_i32$0 = 2146959360;
    if ((i64toi32_i32$2 | 0) != (2 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$0 | 0) | 0) {
     break label$2
    }
    $40($0_1 | 0);
    break label$1;
   }
   $3_1 = $8(8 | 0) | 0;
   HEAP32[($0_1 + 84 | 0) >> 2] = $3_1;
   HEAP32[($0_1 + 88 | 0) >> 2] = $3_1;
   i64toi32_i32$1 = $3_1;
   i64toi32_i32$2 = 2146959360;
   HEAP32[$3_1 >> 2] = 2;
   HEAP32[($3_1 + 4 | 0) >> 2] = i64toi32_i32$2;
   i64toi32_i32$2 = 2146959360;
   $63(6 | 0, i64toi32_i32$2 | 0, 66998 | 0, 13 | 0, 31 | 0, $3_1 | 0);
   i64toi32_i32$2 = $2$hi;
   i64toi32_i32$2 = $36($2_1 | 0, i64toi32_i32$2 | 0, 67011 | 0, 2 | 0) | 0;
   i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
   $3_1 = $37(i64toi32_i32$2 | 0, i64toi32_i32$1 | 0) | 0;
   if (!$3_1) {
    break label$1
   }
   label$3 : {
    label$4 : {
     label$5 : {
      label$6 : {
       label$7 : {
        label$8 : {
         label$9 : {
          if (HEAPU8[(0 + 67760 | 0) >> 0] | 0) {
           break label$9
          }
          HEAP8[(0 + 67760 | 0) >> 0] = 1;
          HEAP32[($0_1 + 56 | 0) >> 2] = $3_1;
          $3_1 = HEAPU8[(0 + 68572 | 0) >> 0] | 0;
          $4_1 = -2128831035;
          $5_1 = $0_1 + 56 | 0;
          $6_1 = $5_1;
          label$10 : {
           label$11 : while (1) {
            if (!$3_1) {
             break label$10
            }
            if (!$6_1) {
             break label$8
            }
            $3_1 = $3_1 + -1 | 0;
            $6_1 = $6_1 + 1 | 0;
            $4_1 = Math_imul($4_1 ^ (HEAPU8[$5_1 >> 0] | 0) | 0, 16777619);
            $5_1 = $5_1 + 1 | 0;
            continue label$11;
           };
          }
          $3_1 = HEAP32[(0 + 68564 | 0) >> 2] | 0;
          HEAP32[($0_1 + 100 | 0) >> 2] = $3_1;
          $7_1 = $3_1 + Math_imul((((HEAPU8[(0 + 68573 | 0) >> 0] | 0) + (HEAPU8[(0 + 68572 | 0) >> 0] | 0) | 0) << 3 | 0) + 12 | 0, $4_1 & ((-1 << (HEAPU8[(0 + 68574 | 0) >> 0] | 0) | 0) ^ -1 | 0) | 0) | 0;
          $3_1 = $4_1 >>> 24 | 0;
          $8_1 = (!$3_1 + $3_1 | 0) & 255 | 0;
          label$12 : {
           label$13 : {
            label$14 : while (1) {
             if (!$7_1) {
              break label$13
             }
             $9_1 = $7_1 + 12 | 0;
             $10_1 = 0;
             label$15 : {
              label$16 : while (1) {
               if (($10_1 | 0) == (8 | 0)) {
                break label$15
               }
               label$17 : {
                label$18 : {
                 if ((HEAPU8[($7_1 + $10_1 | 0) >> 0] | 0 | 0) != ($8_1 | 0)) {
                  break label$18
                 }
                 $3_1 = HEAPU8[(0 + 68572 | 0) >> 0] | 0;
                 $11_1 = ((($3_1 << 3 | 0) + Math_imul($10_1, HEAPU8[(0 + 68573 | 0) >> 0] | 0) | 0) + $7_1 | 0) + 12 | 0;
                 $3_1 = Math_imul($10_1, $3_1);
                 $5_1 = ($3_1 + $7_1 | 0) + 12 | 0;
                 $6_1 = $9_1 + $3_1 | 0;
                 $3_1 = HEAPU8[(0 + 68572 | 0) >> 0] | 0;
                 $4_1 = $0_1 + 56 | 0;
                 $12_1 = $4_1;
                 label$19 : while (1) {
                  if (!$3_1) {
                   break label$17
                  }
                  if (!$12_1) {
                   break label$8
                  }
                  if (!$5_1) {
                   break label$8
                  }
                  $13_1 = HEAPU8[$4_1 >> 0] | 0;
                  $3_1 = $3_1 + -1 | 0;
                  $4_1 = $4_1 + 1 | 0;
                  $12_1 = $12_1 + 1 | 0;
                  $5_1 = $5_1 + 1 | 0;
                  $14_1 = HEAPU8[$6_1 >> 0] | 0;
                  $6_1 = $6_1 + 1 | 0;
                  if (($14_1 | 0) == ($13_1 & 255 | 0 | 0)) {
                   continue label$19
                  }
                  break label$19;
                 };
                }
                $10_1 = $10_1 + 1 | 0;
                continue label$16;
               }
               break label$16;
              };
              $30($0_1 + 64 | 0 | 0, $11_1 | 0, HEAPU8[(0 + 68573 | 0) >> 0] | 0 | 0);
              $3_1 = 1;
              break label$12;
             }
             $7_1 = HEAP32[($7_1 + 8 | 0) >> 2] | 0;
             continue label$14;
            };
           }
           $3_1 = 0;
           $35($0_1 + 64 | 0 | 0, HEAPU8[(0 + 68573 | 0) >> 0] | 0 | 0);
          }
          if (!(HEAPU8[(0 + 67760 | 0) >> 0] | 0)) {
           break label$7
          }
          $13_1 = HEAP32[($0_1 + 64 | 0) >> 2] | 0;
          $12_1 = HEAP32[($0_1 + 68 | 0) >> 2] | 0;
          HEAP8[(0 + 67760 | 0) >> 0] = 0;
          if (!$3_1) {
           break label$5
          }
          i64toi32_i32$2 = $0_1;
          i64toi32_i32$1 = 0;
          HEAP32[($0_1 + 24 | 0) >> 2] = 0;
          HEAP32[($0_1 + 28 | 0) >> 2] = i64toi32_i32$1;
          i64toi32_i32$1 = $2$hi;
          i64toi32_i32$1 = $36($2_1 | 0, i64toi32_i32$1 | 0, 67013 | 0, 4 | 0) | 0;
          i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
          $15_1 = i64toi32_i32$1;
          $15$hi = i64toi32_i32$2;
          i64toi32_i32$1 = $0_1;
          i64toi32_i32$2 = 0;
          HEAP32[($0_1 + 32 | 0) >> 2] = 0;
          HEAP32[($0_1 + 36 | 0) >> 2] = i64toi32_i32$2;
          i64toi32_i32$2 = $15$hi;
          i64toi32_i32$1 = $0_1;
          HEAP32[($0_1 + 24 | 0) >> 2] = $15_1;
          HEAP32[($0_1 + 28 | 0) >> 2] = i64toi32_i32$2;
          i64toi32_i32$2 = $2$hi;
          i64toi32_i32$2 = $36($2_1 | 0, i64toi32_i32$2 | 0, 67017 | 0, 4 | 0) | 0;
          i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
          $16_1 = i64toi32_i32$2;
          $16$hi = i64toi32_i32$1;
          i64toi32_i32$2 = $0_1;
          HEAP32[($0_1 + 32 | 0) >> 2] = $16_1;
          HEAP32[($0_1 + 36 | 0) >> 2] = i64toi32_i32$1;
          HEAP32[($0_1 + 120 | 0) >> 2] = $0_1 + 56 | 0;
          i64toi32_i32$2 = $0_1;
          HEAP32[($0_1 + 56 | 0) >> 2] = $16_1;
          HEAP32[($0_1 + 60 | 0) >> 2] = i64toi32_i32$1;
          $3_1 = $64($16_1 | 0, i64toi32_i32$1 | 0) | 0;
          if (($3_1 | 1 | 0 | 0) != (7 | 0)) {
           break label$6
          }
          i64toi32_i32$1 = $16$hi;
          i64toi32_i32$2 = $0_1;
          HEAP32[($0_1 + 64 | 0) >> 2] = $16_1;
          HEAP32[($0_1 + 68 | 0) >> 2] = i64toi32_i32$1;
          $3_1 = 0;
          $6_1 = fimport$1($0_1 + 64 | 0 | 0, $0_1 | 0, $0_1 | 0) | 0;
          if (($6_1 | 0) < (0 | 0)) {
           break label$4
          }
          $14_1 = $8($6_1 << 3 | 0 | 0) | 0;
          HEAP32[($0_1 + 144 | 0) >> 2] = $14_1;
          HEAP32[($0_1 + 148 | 0) >> 2] = $0_1 + 48 | 0;
          $5_1 = $14_1;
          label$20 : {
           label$21 : while (1) {
            if (($6_1 | 0) == ($3_1 | 0)) {
             break label$20
            }
            i64toi32_i32$1 = $16$hi;
            i64toi32_i32$2 = $0_1;
            HEAP32[($0_1 + 48 | 0) >> 2] = $16_1;
            HEAP32[($0_1 + 52 | 0) >> 2] = i64toi32_i32$1;
            $4_1 = $64($16_1 | 0, i64toi32_i32$1 | 0) | 0;
            if (($4_1 | 1 | 0 | 0) != (7 | 0)) {
             break label$3
            }
            i64toi32_i32$1 = $16$hi;
            i64toi32_i32$2 = $0_1;
            HEAP32[($0_1 + 56 | 0) >> 2] = $16_1;
            HEAP32[($0_1 + 60 | 0) >> 2] = i64toi32_i32$1;
            fimport$2($0_1 + 64 | 0 | 0, $0_1 + 56 | 0 | 0, $3_1 | 0, $0_1 | 0, $0_1 | 0);
            i64toi32_i32$1 = HEAP32[($0_1 + 64 | 0) >> 2] | 0;
            i64toi32_i32$2 = HEAP32[($0_1 + 68 | 0) >> 2] | 0;
            i64toi32_i32$2 = $65(i64toi32_i32$1 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $259 = i64toi32_i32$2;
            i64toi32_i32$2 = $5_1;
            HEAP32[i64toi32_i32$2 >> 2] = $259;
            HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$1;
            $5_1 = i64toi32_i32$2 + 8 | 0;
            $3_1 = $3_1 + 1 | 0;
            continue label$21;
           };
          }
          HEAP32[($0_1 + 168 | 0) >> 2] = $12_1;
          HEAP32[($0_1 + 164 | 0) >> 2] = $12_1;
          HEAP32[($0_1 + 160 | 0) >> 2] = $0_1 + 64 | 0;
          HEAP32[($0_1 + 68 | 0) >> 2] = $12_1;
          HEAP32[($0_1 + 64 | 0) >> 2] = $13_1;
          if (!$12_1) {
           break label$8
          }
          $3_1 = HEAP32[$12_1 >> 2] | 0;
          if (!$3_1) {
           break label$8
          }
          i64toi32_i32$1 = $15$hi;
          FUNCTION_TABLE[$3_1]($0_1 + 8 | 0, $15_1, i64toi32_i32$1, $14_1, $6_1, $6_1, $13_1, $0_1);
          $3_1 = HEAP32[($0_1 + 12 | 0) >> 2] | 0;
          HEAP32[($0_1 + 172 | 0) >> 2] = $3_1;
          i64toi32_i32$1 = $2$hi;
          $63($2_1 | 0, i64toi32_i32$1 | 0, 67021 | 0, 6 | 0, HEAP32[($0_1 + 8 | 0) >> 2] | 0 | 0, $3_1 | 0);
          $40($0_1 | 0);
          break label$1;
         }
         $3_1 = $8(8 | 0) | 0;
         HEAP32[($0_1 + 92 | 0) >> 2] = $3_1;
         HEAP32[($0_1 + 96 | 0) >> 2] = $3_1;
         HEAP32[($3_1 + 4 | 0) >> 2] = 27;
         HEAP32[$3_1 >> 2] = 67312;
         $9(34 | 0, $3_1 | 0);
         abort();
        }
        $14();
        abort();
       }
       $3_1 = $8(8 | 0) | 0;
       HEAP32[($0_1 + 104 | 0) >> 2] = $3_1;
       HEAP32[($0_1 + 108 | 0) >> 2] = $3_1;
       HEAP32[($3_1 + 4 | 0) >> 2] = 30;
       HEAP32[$3_1 >> 2] = 67344;
       $9(34 | 0, $3_1 | 0);
       abort();
      }
      $5_1 = $8(12 | 0) | 0;
      HEAP32[($0_1 + 124 | 0) >> 2] = $5_1;
      HEAP32[($0_1 + 128 | 0) >> 2] = $5_1;
      HEAP32[($5_1 + 8 | 0) >> 2] = $3_1;
      HEAP32[($5_1 + 4 | 0) >> 2] = 14;
      HEAP32[$5_1 >> 2] = 66884;
      $9(3045 | 0, $5_1 | 0);
      abort();
     }
     i64toi32_i32$1 = 2146959360;
     i64toi32_i32$1 = $36(5 | 0, i64toi32_i32$1 | 0, 67027 | 0, 7 | 0) | 0;
     i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
     $16_1 = i64toi32_i32$1;
     $16$hi = i64toi32_i32$2;
     i64toi32_i32$1 = $0_1;
     i64toi32_i32$2 = 0;
     HEAP32[($0_1 + 40 | 0) >> 2] = 0;
     HEAP32[($0_1 + 44 | 0) >> 2] = i64toi32_i32$2;
     $3_1 = $8(8 | 0) | 0;
     HEAP32[($0_1 + 136 | 0) >> 2] = $3_1;
     HEAP32[($0_1 + 140 | 0) >> 2] = $3_1;
     HEAP32[($3_1 + 4 | 0) >> 2] = 25;
     HEAP32[$3_1 >> 2] = 67040;
     HEAP32[($0_1 + 44 | 0) >> 2] = $3_1;
     HEAP32[($0_1 + 40 | 0) >> 2] = 34;
     i64toi32_i32$2 = $16$hi;
     i64toi32_i32$2 = $66($16_1 | 0, i64toi32_i32$2 | 0, 67065 | 0, 5 | 0, $0_1 + 40 | 0 | 0, 1 | 0) | 0;
     i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
     $40($0_1 | 0);
     break label$1;
    }
    $67();
    abort();
   }
   $3_1 = $8(12 | 0) | 0;
   HEAP32[($0_1 + 152 | 0) >> 2] = $3_1;
   HEAP32[($0_1 + 156 | 0) >> 2] = $3_1;
   HEAP32[($3_1 + 8 | 0) >> 2] = $4_1;
   HEAP32[($3_1 + 4 | 0) >> 2] = 11;
   HEAP32[$3_1 >> 2] = 66843;
   $9(3045 | 0, $3_1 | 0);
   abort();
  }
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1;
  global$0 = $0_1 + 176 | 0;
 }
 
 function $63($0_1, $0$hi, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, $6_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $7_1 = 0, $43_1 = 0;
  $5_1 = global$0 - 48 | 0;
  global$0 = $5_1;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 36 | 0) >> 2] = 0;
  HEAP32[($5_1 + 40 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($5_1 + 28 | 0) >> 2] = 3;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $5_1;
  HEAP32[$5_1 >> 2] = $0_1;
  HEAP32[($5_1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $6_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $5_1 + 24 | 0;
  HEAP32[($5_1 + 24 | 0) >> 2] = $6_1;
  HEAP32[($5_1 + 32 | 0) >> 2] = $5_1;
  label$1 : {
   $7_1 = $64($0_1 | 0, i64toi32_i32$0 | 0) | 0;
   if (($7_1 | 1 | 0 | 0) == (7 | 0)) {
    break label$1
   }
   $6_1 = $8(12 | 0) | 0;
   HEAP32[(($5_1 + 24 | 0) + 12 | 0) >> 2] = $6_1;
   HEAP32[($5_1 + 40 | 0) >> 2] = $6_1;
   HEAP32[($6_1 + 8 | 0) >> 2] = $7_1;
   HEAP32[($6_1 + 4 | 0) >> 2] = 9;
   HEAP32[$6_1 >> 2] = 66875;
   $9(3045 | 0, $6_1 | 0);
   abort();
  }
  i64toi32_i32$0 = $83($3_1 | 0, $4_1 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $43_1 = i64toi32_i32$0;
  i64toi32_i32$0 = $5_1;
  HEAP32[($5_1 + 8 | 0) >> 2] = $43_1;
  HEAP32[($5_1 + 12 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = $0$hi;
  i64toi32_i32$0 = $5_1;
  HEAP32[($5_1 + 16 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 20 | 0) >> 2] = i64toi32_i32$1;
  fimport$8($5_1 + 16 | 0 | 0, $1_1 | 0, $2_1 | 0, $5_1 + 8 | 0 | 0, $5_1 | 0, $5_1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
  global$0 = $5_1 + 48 | 0;
 }
 
 function $64($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, i64toi32_i32$5 = 0, $2_1 = 0, i64toi32_i32$4 = 0, $1_1 = 0, $10_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $1_1;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  label$1 : {
   label$2 : {
    if (!!($0_1 | i64toi32_i32$0 | 0)) {
     break label$2
    }
    $2_1 = 0;
    break label$1;
   }
   label$3 : {
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = 2146959360;
    i64toi32_i32$3 = 2;
    if ((i64toi32_i32$2 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$1 | 0) | 0) {
     break label$3
    }
    $2_1 = 1;
    break label$1;
   }
   $2_1 = 2;
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$3 = $0_1;
   i64toi32_i32$0 = -2146959361;
   i64toi32_i32$1 = -3;
   i64toi32_i32$4 = i64toi32_i32$3 + i64toi32_i32$1 | 0;
   i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$0 | 0;
   if (i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0) {
    i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
   }
   i64toi32_i32$2 = i64toi32_i32$4;
   i64toi32_i32$3 = 0;
   i64toi32_i32$1 = 2;
   if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 < i64toi32_i32$1 >>> 0 | 0) | 0) {
    break label$1
   }
   $2_1 = 3;
   i64toi32_i32$2 = $0$hi;
   if (($80($0_1 | 0, i64toi32_i32$2 | 0) | 0) & 1 | 0) {
    break label$1
   }
   label$4 : {
    label$5 : {
     label$6 : {
      i64toi32_i32$2 = $0$hi;
      i64toi32_i32$1 = $0_1;
      i64toi32_i32$5 = 0;
      i64toi32_i32$3 = 32;
      i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
       i64toi32_i32$5 = 0;
       $10_1 = i64toi32_i32$2 >>> i64toi32_i32$0 | 0;
      } else {
       i64toi32_i32$5 = i64toi32_i32$2 >>> i64toi32_i32$0 | 0;
       $10_1 = (((1 << i64toi32_i32$0 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$0 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$0 | 0) | 0;
      }
      i64toi32_i32$2 = $10_1;
      i64toi32_i32$1 = 0;
      i64toi32_i32$3 = 3;
      i64toi32_i32$1 = i64toi32_i32$5 & i64toi32_i32$1 | 0;
      i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
      i64toi32_i32$2 = -1;
      i64toi32_i32$3 = -1;
      i64toi32_i32$0 = i64toi32_i32$5 + i64toi32_i32$3 | 0;
      i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$2 | 0;
      if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
       i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
      }
      $0_1 = i64toi32_i32$0;
      $0$hi = i64toi32_i32$4;
      i64toi32_i32$1 = i64toi32_i32$0;
      i64toi32_i32$5 = 0;
      i64toi32_i32$3 = 2;
      if (i64toi32_i32$4 >>> 0 > i64toi32_i32$5 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$5 | 0) & i64toi32_i32$0 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0) {
       break label$6
      }
      $2_1 = 4;
      i64toi32_i32$1 = $0$hi;
      switch ($0_1 | 0) {
      case 1:
       break label$4;
      case 2:
       break label$5;
      default:
       break label$1;
      };
     }
     $2_1 = 6;
     break label$1;
    }
    $2_1 = 7;
    break label$1;
   }
   $2_1 = 5;
  }
  global$0 = $1_1 + 16 | 0;
  return $2_1 | 0;
 }
 
 function $65($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = global$0 - 16 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $66($0_1, $0$hi, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $6_1 = 0, $7_1 = 0, $7$hi = 0;
  $5_1 = global$0 - 144 | 0;
  global$0 = $5_1;
  HEAP32[($5_1 + 140 | 0) >> 2] = 0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 132 | 0) >> 2] = 0;
  HEAP32[($5_1 + 136 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 124 | 0) >> 2] = 0;
  HEAP32[($5_1 + 128 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 116 | 0) >> 2] = 0;
  HEAP32[($5_1 + 120 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 108 | 0) >> 2] = 0;
  HEAP32[($5_1 + 112 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($5_1 + 100 | 0) >> 2] = 10;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $5_1;
  HEAP32[($5_1 + 72 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 76 | 0) >> 2] = i64toi32_i32$0;
  $6_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $5_1 + 96 | 0;
  HEAP32[($5_1 + 96 | 0) >> 2] = $6_1;
  HEAP32[($5_1 + 104 | 0) >> 2] = $5_1 + 72 | 0;
  $79($5_1 + 56 | 0 | 0, $3_1 | 0, $4_1 | 0);
  i64toi32_i32$1 = $5_1;
  HEAP32[($5_1 + 88 | 0) >> 2] = $0_1;
  HEAP32[($5_1 + 92 | 0) >> 2] = i64toi32_i32$0;
  $3_1 = HEAP32[($5_1 + 56 | 0) >> 2] | 0;
  HEAP32[($5_1 + 108 | 0) >> 2] = $3_1;
  fimport$5($5_1 + 40 | 0 | 0, $5_1 + 88 | 0 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0, HEAP32[($5_1 + 60 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 64 | 0) >> 2] | 0 | 0, $5_1 | 0, $5_1 | 0);
  i64toi32_i32$0 = HEAP32[($5_1 + 40 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($5_1 + 44 | 0) >> 2] | 0;
  $7_1 = i64toi32_i32$0;
  $7$hi = i64toi32_i32$1;
  label$1 : {
   if (!(HEAPU8[($5_1 + 48 | 0) >> 0] | 0)) {
    break label$1
   }
   i64toi32_i32$1 = $7$hi;
   i64toi32_i32$1 = $65($7_1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $0_1 = i64toi32_i32$1;
   $0$hi = i64toi32_i32$0;
   HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
   global$0 = $5_1 + 144 | 0;
   i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
   return i64toi32_i32$1 | 0;
  }
  label$2 : {
   label$3 : {
    i64toi32_i32$1 = $0$hi;
    $3_1 = $64($0_1 | 0, i64toi32_i32$1 | 0) | 0;
    if (($3_1 | 1 | 0 | 0) != (7 | 0)) {
     break label$3
    }
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$1 = $36($0_1 | 0, i64toi32_i32$1 | 0, $1_1 | 0, $2_1 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $6_1 = $64(i64toi32_i32$1 | 0, i64toi32_i32$0 | 0) | 0;
    if (($6_1 | 0) == (7 | 0)) {
     break label$2
    }
    $58($5_1 + 32 | 0 | 0, 66752 | 0, 33 | 0, $1_1 | 0, $2_1 | 0);
    $58($5_1 + 24 | 0 | 0, HEAP32[($5_1 + 32 | 0) >> 2] | 0 | 0, HEAP32[($5_1 + 36 | 0) >> 2] | 0 | 0, 66800 | 0, 24 | 0);
    $1_1 = HEAP32[($5_1 + 28 | 0) >> 2] | 0;
    $2_1 = HEAP32[($5_1 + 24 | 0) >> 2] | 0;
    $59($5_1 + 16 | 0 | 0, $6_1 | 0);
    $6_1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
    HEAP32[($5_1 + 112 | 0) >> 2] = $6_1;
    $58($5_1 + 8 | 0 | 0, $2_1 | 0, $1_1 | 0, $6_1 | 0, HEAP32[($5_1 + 20 | 0) >> 2] | 0 | 0);
    i64toi32_i32$0 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
    $0_1 = i64toi32_i32$0;
    $0$hi = i64toi32_i32$1;
    $6_1 = $8(8 | 0) | 0;
    HEAP32[($5_1 + 116 | 0) >> 2] = $6_1;
    HEAP32[(($5_1 + 96 | 0) + 24 | 0) >> 2] = $6_1;
    i64toi32_i32$0 = $6_1;
    HEAP32[i64toi32_i32$0 >> 2] = $0_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    $9(34 | 0, i64toi32_i32$0 | 0);
    abort();
   }
   $6_1 = $8(12 | 0) | 0;
   HEAP32[($5_1 + 136 | 0) >> 2] = $6_1;
   HEAP32[($5_1 + 140 | 0) >> 2] = $6_1;
   HEAP32[($6_1 + 8 | 0) >> 2] = $3_1;
   HEAP32[($6_1 + 4 | 0) >> 2] = 10;
   HEAP32[$6_1 >> 2] = 66824;
   $9(3045 | 0, $6_1 | 0);
   abort();
  }
  i64toi32_i32$0 = $5_1;
  i64toi32_i32$1 = 0;
  HEAP32[($5_1 + 80 | 0) >> 2] = 0;
  HEAP32[($5_1 + 84 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($5_1 + 124 | 0) >> 2] = $5_1 + 80 | 0;
  i64toi32_i32$1 = $7$hi;
  i64toi32_i32$1 = $65($7_1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $0_1 = i64toi32_i32$1;
  $0$hi = i64toi32_i32$0;
  $6_1 = $8(8 | 0) | 0;
  HEAP32[($5_1 + 128 | 0) >> 2] = $6_1;
  HEAP32[($5_1 + 132 | 0) >> 2] = $6_1;
  i64toi32_i32$1 = $6_1;
  HEAP32[i64toi32_i32$1 >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $9(63 | 0, i64toi32_i32$1 | 0);
  abort();
 }
 
 function $67() {
  $46(66096 | 0, 18 | 0);
  abort();
 }
 
 function $68($0_1) {
  $0_1 = $0_1 | 0;
  return $0_1 + 8 | 0 | 0;
 }
 
 function $69($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var $9_1 = 0, $6_1 = 0, $8_1 = 0, $7_1 = 0;
  $6_1 = global$0 - 16 | 0;
  global$0 = $6_1;
  HEAP32[($6_1 + 4 | 0) >> 2] = 1;
  HEAP32[($6_1 + 8 | 0) >> 2] = 0;
  $7_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
  HEAP32[$6_1 >> 2] = $7_1;
  label$1 : {
   label$2 : {
    $8_1 = $5_1 + $3_1 | 0;
    if ($8_1 >>> 0 > $4_1 >>> 0) {
     break label$2
    }
    $9_1 = $1_1;
    break label$1;
   }
   $4_1 = $4_1 << 1 | 0;
   $9_1 = $4_1 ? $4_1 : 1;
   label$3 : while (1) {
    $4_1 = $9_1;
    $9_1 = $4_1 << 1 | 0;
    if ($8_1 >>> 0 > $4_1 >>> 0) {
     continue label$3
    }
    break label$3;
   };
   $9_1 = $8($4_1 | 0) | 0;
   HEAP32[($6_1 + 8 | 0) >> 2] = $9_1;
   if (!$3_1) {
    break label$1
   }
   $50($9_1 | 0, $1_1 | 0, $3_1 | 0);
  }
  $50($9_1 + $3_1 | 0 | 0, $2_1 | 0, $5_1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
  HEAP32[($0_1 + 8 | 0) >> 2] = $4_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $8_1;
  HEAP32[$0_1 >> 2] = $9_1;
  global$0 = $6_1 + 16 | 0;
 }
 
 function $70($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, i64toi32_i32$0 = 0, $6_1 = 0, $5_1 = 0;
  $4_1 = global$0 - 64 | 0;
  global$0 = $4_1;
  i64toi32_i32$0 = 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = 0;
  HEAP32[($4_1 + 56 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($4_1 + 44 | 0) >> 2] = 0;
  HEAP32[($4_1 + 48 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($4_1 + 36 | 0) >> 2] = 5;
  HEAP32[($4_1 + 16 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($4_1 + 8 | 0) >> 2] = 0;
  HEAP32[($4_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $5_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $4_1 + 32 | 0;
  HEAP32[($4_1 + 32 | 0) >> 2] = $5_1;
  HEAP32[($4_1 + 40 | 0) >> 2] = $4_1 + 8 | 0;
  $6_1 = $8($2_1 | 0) | 0;
  HEAP32[($4_1 + 52 | 0) >> 2] = $6_1;
  HEAP32[($4_1 + 56 | 0) >> 2] = $6_1;
  HEAP32[($4_1 + 44 | 0) >> 2] = $6_1;
  $30($6_1 | 0, $1_1 | 0, $2_1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($4_1 + 24 | 0) >> 2] = 0;
  HEAP32[($4_1 + 28 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($4_1 + 48 | 0) >> 2] = $4_1 + 24 | 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = $6_1;
  global$0 = $4_1 + 64 | 0;
 }
 
 function $71($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, $5_1 = 0, $4_1 = 0;
  $3_1 = global$0 - 64 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 56 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 48 | 0) >> 2] = 0;
  HEAP32[($3_1 + 52 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3_1 + 36 | 0) >> 2] = 5;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 8 | 0) >> 2] = 0;
  HEAP32[($3_1 + 12 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3_1 + 24 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 16 | 0) >> 2] = 0;
  HEAP32[($3_1 + 20 | 0) >> 2] = i64toi32_i32$0;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1 + 32 | 0;
  HEAP32[($3_1 + 32 | 0) >> 2] = $4_1;
  HEAP32[($3_1 + 40 | 0) >> 2] = $3_1 + 8 | 0;
  HEAP32[($3_1 + 44 | 0) >> 2] = $3_1 + 16 | 0;
  $5_1 = $8($2_1 | 0) | 0;
  HEAP32[($3_1 + 52 | 0) >> 2] = $5_1;
  HEAP32[($3_1 + 56 | 0) >> 2] = $5_1;
  HEAP32[($3_1 + 48 | 0) >> 2] = $5_1;
  $30($5_1 | 0, $1_1 | 0, $2_1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
  HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = $5_1;
  global$0 = $3_1 + 64 | 0;
 }
 
 function $72() {
  var $0_1 = 0, $1_1 = 0;
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 2;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  $1_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $0_1;
  HEAP32[$0_1 >> 2] = $1_1;
  $1_1 = $8(8 | 0) | 0;
  HEAP32[($1_1 + 4 | 0) >> 2] = 13;
  HEAP32[$1_1 >> 2] = 66114;
  HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
  $9(34 | 0, $1_1 | 0);
  abort();
 }
 
 function $73() {
  var $0_1 = 0, $1_1 = 0;
  $0_1 = global$0 - 16 | 0;
  global$0 = $0_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = 0;
  HEAP32[($0_1 + 4 | 0) >> 2] = 2;
  HEAP32[($0_1 + 8 | 0) >> 2] = 0;
  $1_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $0_1;
  HEAP32[$0_1 >> 2] = $1_1;
  $1_1 = $8(8 | 0) | 0;
  HEAP32[($1_1 + 4 | 0) >> 2] = 13;
  HEAP32[$1_1 >> 2] = 66114;
  HEAP32[($0_1 + 8 | 0) >> 2] = $1_1;
  HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
  $9(34 | 0, $1_1 | 0);
  abort();
 }
 
 function $74($0_1, $1_1, $2_1, $2$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $2$hi = $2$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $15_1 = 0, $16_1 = 0, $18_1 = 0, $19_1 = 0, $20_1 = 0, $21_1 = 0, $23_1 = 0, $7_1 = 0, $12_1 = 0, $17_1 = 0, $22_1 = 0, $27_1 = 0, $32_1 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if (!$1_1) {
      break label$3
     }
     if (!$0_1) {
      break label$2
     }
     $7_1 = $0_1;
     i64toi32_i32$0 = $2$hi;
     i64toi32_i32$2 = $2_1;
     i64toi32_i32$1 = 0;
     i64toi32_i32$3 = 56;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$1 = 0;
      $15_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     } else {
      i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
      $15_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
     }
     HEAP8[$7_1 >> 0] = $15_1;
     if ($1_1 >>> 0 <= 1 >>> 0) {
      break label$3
     }
     $12_1 = $0_1;
     i64toi32_i32$1 = $2$hi;
     i64toi32_i32$0 = $2_1;
     i64toi32_i32$2 = 0;
     i64toi32_i32$3 = 48;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$2 = 0;
      $16_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
     } else {
      i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
      $16_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
     }
     HEAP8[($12_1 + 1 | 0) >> 0] = $16_1;
     if (($1_1 | 0) == (2 | 0)) {
      break label$3
     }
     $17_1 = $0_1;
     i64toi32_i32$2 = $2$hi;
     i64toi32_i32$1 = $2_1;
     i64toi32_i32$0 = 0;
     i64toi32_i32$3 = 40;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$0 = 0;
      $18_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
     } else {
      i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      $18_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
     }
     HEAP8[($17_1 + 2 | 0) >> 0] = $18_1;
     if ($1_1 >>> 0 <= 3 >>> 0) {
      break label$3
     }
     $22_1 = $0_1;
     i64toi32_i32$0 = $2$hi;
     i64toi32_i32$2 = $2_1;
     i64toi32_i32$1 = 0;
     i64toi32_i32$3 = 32;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$1 = 0;
      $19_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
     } else {
      i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
      $19_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
     }
     HEAP8[($22_1 + 3 | 0) >> 0] = $19_1;
     if (($1_1 | 0) == (4 | 0)) {
      break label$3
     }
     $27_1 = $0_1;
     i64toi32_i32$1 = $2$hi;
     i64toi32_i32$0 = $2_1;
     i64toi32_i32$2 = 0;
     i64toi32_i32$3 = 24;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$2 = 0;
      $20_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
     } else {
      i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
      $20_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
     }
     HEAP8[($27_1 + 4 | 0) >> 0] = $20_1;
     if ($1_1 >>> 0 <= 5 >>> 0) {
      break label$3
     }
     $32_1 = $0_1;
     i64toi32_i32$2 = $2$hi;
     i64toi32_i32$1 = $2_1;
     i64toi32_i32$0 = 0;
     i64toi32_i32$3 = 16;
     i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
     if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
      i64toi32_i32$0 = 0;
      $21_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
     } else {
      i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
     }
     HEAP8[($32_1 + 5 | 0) >> 0] = $21_1;
     if (($1_1 | 0) != (6 | 0)) {
      break label$1
     }
    }
    $49();
    abort();
   }
   $14();
   abort();
  }
  i64toi32_i32$0 = $2$hi;
  $1_1 = $2_1;
  $23_1 = ($1_1 << 24 | 0 | (($1_1 << 8 | 0) & 16711680 | 0) | 0) >>> 16 | 0;
  HEAP8[($0_1 + 6 | 0) >> 0] = $23_1;
  HEAP8[($0_1 + 7 | 0) >> 0] = $23_1 >>> 8 | 0;
 }
 
 function $75($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $3_1 = 0, $2_1 = 0;
  $1_1 = global$0 - 16 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = 0;
  HEAP32[($1_1 + 4 | 0) >> 2] = 2;
  HEAP32[($1_1 + 8 | 0) >> 2] = 0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1;
  HEAP32[$1_1 >> 2] = $2_1;
  $3_1 = $8(216 | 0) | 0;
  HEAP32[($3_1 + 208 | 0) >> 2] = 7;
  HEAP32[($1_1 + 8 | 0) >> 2] = $3_1;
  HEAP32[($1_1 + 12 | 0) >> 2] = $3_1;
  $76($3_1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $3_1;
  HEAP32[$0_1 >> 2] = 8165;
  global$0 = $1_1 + 16 | 0;
 }
 
 function $76($0_1) {
  $0_1 = $0_1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $3_1 = 0, $3$hi = 0, $4_1 = 0, $4$hi = 0, $5_1 = 0, $5$hi = 0, $6_1 = 0, $6$hi = 0, $7_1 = 0, $7$hi = 0, $8_1 = 0, $8$hi = 0, $9_1 = 0, $9$hi = 0, $10_1 = 0, $10$hi = 0, $1_1 = 0, $2_1 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if (!$0_1) {
      break label$3
     }
     $1_1 = HEAP32[($0_1 + 208 | 0) >> 2] | 0;
     $2_1 = $1_1 + -14 | 0;
     if ($2_1 >>> 0 <= 1 >>> 0) {
      break label$2
     }
     label$4 : {
      if (($1_1 | 0) != (6 | 0)) {
       break label$4
      }
      i64toi32_i32$0 = 1203062813;
      $3_1 = -1090891868;
      $3$hi = i64toi32_i32$0;
      i64toi32_i32$0 = -619958771;
      $4_1 = 1694076839;
      $4$hi = i64toi32_i32$0;
      i64toi32_i32$0 = -1900787065;
      $5_1 = 1750603025;
      $5$hi = i64toi32_i32$0;
      i64toi32_i32$0 = 1731405415;
      $6_1 = -4191439;
      $6$hi = i64toi32_i32$0;
      i64toi32_i32$0 = 355462360;
      $7_1 = -150054599;
      $7$hi = i64toi32_i32$0;
      i64toi32_i32$0 = -1856437926;
      $8_1 = 812702999;
      $8$hi = i64toi32_i32$0;
      i64toi32_i32$0 = 1654270250;
      $9_1 = 914150663;
      $9$hi = i64toi32_i32$0;
      i64toi32_i32$0 = -876896931;
      $10_1 = -1056596264;
      $10$hi = i64toi32_i32$0;
      break label$1;
     }
     i64toi32_i32$0 = 1541459225;
     $3_1 = 327033209;
     $3$hi = i64toi32_i32$0;
     i64toi32_i32$0 = 528734635;
     $4_1 = -79577749;
     $4$hi = i64toi32_i32$0;
     i64toi32_i32$0 = -1694144372;
     $5_1 = 725511199;
     $5$hi = i64toi32_i32$0;
     i64toi32_i32$0 = 1359893119;
     $6_1 = -1377402159;
     $6$hi = i64toi32_i32$0;
     i64toi32_i32$0 = -1521486534;
     $7_1 = 1595750129;
     $7$hi = i64toi32_i32$0;
     i64toi32_i32$0 = 1013904242;
     $8_1 = -23791573;
     $8$hi = i64toi32_i32$0;
     i64toi32_i32$0 = -1150833019;
     $9_1 = -2067093701;
     $9$hi = i64toi32_i32$0;
     i64toi32_i32$0 = 1779033703;
     $10_1 = -205731576;
     $10$hi = i64toi32_i32$0;
     break label$1;
    }
    $14();
    abort();
   }
   i64toi32_i32$0 = 286451373;
   $3_1 = -1848208735;
   $3$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 1067287976;
   $4_1 = 1780299464;
   $4$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 2011393907;
   $5_1 = 79989058;
   $5$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 258812777;
   $6_1 = 2077511080;
   $6$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 1738396948;
   $7_1 = 1479516111;
   $7$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 502970286;
   $8_1 = 855612546;
   $8$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 1944164710;
   $9_1 = -1982016298;
   $9$hi = i64toi32_i32$0;
   i64toi32_i32$0 = -1942145080;
   $10_1 = 424955298;
   $10$hi = i64toi32_i32$0;
   label$5 : {
    switch ($2_1 | 0) {
    case 1:
     break label$5;
    default:
     break label$1;
    };
   }
   i64toi32_i32$0 = 246885852;
   $3_1 = -2117784414;
   $3$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 721525244;
   $4_1 = 746961066;
   $4$hi = i64toi32_i32$0;
   i64toi32_i32$0 = -1101128155;
   $5_1 = 1401305490;
   $5$hi = i64toi32_i32$0;
   i64toi32_i32$0 = -1775747358;
   $6_1 = -1467023389;
   $6$hi = i64toi32_i32$0;
   i64toi32_i32$0 = -1774684391;
   $7_1 = 1497426621;
   $7$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 596883563;
   $8_1 = 1867755857;
   $8$hi = i64toi32_i32$0;
   i64toi32_i32$0 = -1621794909;
   $9_1 = -934517566;
   $9$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 573645204;
   $10_1 = -64227540;
   $10$hi = i64toi32_i32$0;
  }
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 200 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 204 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(i64toi32_i32$1 + 192 | 0) >> 2] = 0;
  i64toi32_i32$0 = $3$hi;
  HEAP32[(i64toi32_i32$1 + 56 | 0) >> 2] = $3_1;
  HEAP32[(i64toi32_i32$1 + 60 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $4$hi;
  HEAP32[(i64toi32_i32$1 + 48 | 0) >> 2] = $4_1;
  HEAP32[(i64toi32_i32$1 + 52 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $5$hi;
  HEAP32[(i64toi32_i32$1 + 40 | 0) >> 2] = $5_1;
  HEAP32[(i64toi32_i32$1 + 44 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $6$hi;
  HEAP32[(i64toi32_i32$1 + 32 | 0) >> 2] = $6_1;
  HEAP32[(i64toi32_i32$1 + 36 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $7$hi;
  HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] = $7_1;
  HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $8$hi;
  HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = $8_1;
  HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $9$hi;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $9_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $10$hi;
  HEAP32[i64toi32_i32$1 >> 2] = $10_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function $77($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, $4_1 = 0, $20_1 = 0, $20$hi = 0, $14_1 = 0, $16$hi = 0, $17$hi = 0, $16_1 = 0, $24$hi = 0, $19$hi = 0, $21$hi = 0, $6$hi = 0, $7$hi = 0, $8$hi = 0, $9$hi = 0, $10$hi = 0, $11$hi = 0, $12$hi = 0, $13$hi = 0, $17_1 = 0, $18$hi = 0, $22$hi = 0, $23$hi = 0, $5_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $10_1 = 0, $11_1 = 0, $12_1 = 0, $13_1 = 0, $19_1 = 0, $21_1 = 0, $24_1 = 0, $18_1 = 0, $22_1 = 0, $23_1 = 0, $15_1 = 0, $15$hi = 0, $141 = 0, $143 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $151 = 0, $152 = 0, $154 = 0, $72$hi = 0, $74_1 = 0, $74$hi = 0, $77_1 = 0, $77$hi = 0, $78_1 = 0, $78$hi = 0, $80_1 = 0, $80$hi = 0, $82_1 = 0, $82$hi = 0, $83_1 = 0, $83$hi = 0, $85_1 = 0, $85$hi = 0, $86_1 = 0, $86$hi = 0, $87_1 = 0, $87$hi = 0, $89_1 = 0, $89$hi = 0, $91_1 = 0, $91$hi = 0, $92_1 = 0, $92$hi = 0, $94_1 = 0, $94$hi = 0, $95$hi = 0, $97$hi = 0, $100_1 = 0, $100$hi = 0, $101 = 0, $101$hi = 0, $104 = 0, $104$hi = 0, $105 = 0, $105$hi = 0, $106$hi = 0, $109 = 0, $109$hi = 0, $110$hi = 0, $114 = 0, $114$hi = 0, $134 = 0, $139 = 0, $139$hi = 0, $141$hi = 0, $142 = 0, $142$hi = 0, $144 = 0, $144$hi = 0, $145 = 0, $145$hi = 0, $150 = 0, $150$hi = 0, $152$hi = 0, $153 = 0, $153$hi = 0, $155 = 0, $155$hi = 0, $156 = 0, $156$hi = 0, $157$hi = 0, $160 = 0, $160$hi = 0, $161$hi = 0, $163 = 0, $163$hi = 0, $236 = 0, $240 = 0, $240$hi = 0, $244$hi = 0, $245 = 0, $245$hi = 0, $249$hi = 0, $250 = 0, $250$hi = 0, $254$hi = 0, $255 = 0, $255$hi = 0, $259$hi = 0, $260 = 0, $260$hi = 0, $264$hi = 0, $265 = 0, $265$hi = 0, $269$hi = 0, $270 = 0, $270$hi = 0, $272 = 0, $272$hi = 0, $273 = 0;
  $4_1 = global$0 - 640 | 0;
  global$0 = $4_1;
  $5_1 = $1($4_1 | 0, 0 | 0, 640 | 0) | 0;
  label$1 : {
   label$2 : {
    if (!$0_1) {
     break label$2
    }
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 56 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 60 | 0) >> 2] | 0;
    $6_1 = i64toi32_i32$0;
    $6$hi = i64toi32_i32$1;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 48 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 52 | 0) >> 2] | 0;
    $7_1 = i64toi32_i32$1;
    $7$hi = i64toi32_i32$0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 40 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 44 | 0) >> 2] | 0;
    $8_1 = i64toi32_i32$0;
    $8$hi = i64toi32_i32$1;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 32 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 36 | 0) >> 2] | 0;
    $9_1 = i64toi32_i32$1;
    $9$hi = i64toi32_i32$0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 24 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 28 | 0) >> 2] | 0;
    $10_1 = i64toi32_i32$0;
    $10$hi = i64toi32_i32$1;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 16 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 20 | 0) >> 2] | 0;
    $11_1 = i64toi32_i32$1;
    $11$hi = i64toi32_i32$0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
    $12_1 = i64toi32_i32$0;
    $12$hi = i64toi32_i32$1;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $13_1 = i64toi32_i32$1;
    $13$hi = i64toi32_i32$0;
    label$3 : while (1) {
     if (($2_1 | 0) < (128 | 0)) {
      break label$1
     }
     $4_1 = 7;
     label$4 : while (1) {
      label$5 : {
       if (($4_1 | 0) != (135 | 0)) {
        break label$5
       }
       $14_1 = 0;
       label$6 : {
        label$7 : while (1) {
         label$8 : {
          if (($14_1 | 0) != (512 | 0)) {
           break label$8
          }
          $4_1 = 0;
          i64toi32_i32$0 = $13$hi;
          $15_1 = $13_1;
          $15$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $12$hi;
          $16_1 = $12_1;
          $16$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $11$hi;
          $17_1 = $11_1;
          $17$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $10$hi;
          $18_1 = $10_1;
          $18$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $9$hi;
          $19_1 = $9_1;
          $19$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $8$hi;
          $20_1 = $8_1;
          $20$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $7$hi;
          $21_1 = $7_1;
          $21$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $6$hi;
          $22_1 = $6_1;
          $22$hi = i64toi32_i32$0;
          label$9 : {
           label$10 : while (1) {
            i64toi32_i32$0 = $21$hi;
            $23_1 = $21_1;
            $23$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $20$hi;
            $21_1 = $20_1;
            $21$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $19$hi;
            $20_1 = $19_1;
            $20$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $17$hi;
            $24_1 = $17_1;
            $24$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $16$hi;
            $17_1 = $16_1;
            $17$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $15$hi;
            $16_1 = $15_1;
            $16$hi = i64toi32_i32$0;
            if (($4_1 | 0) == (640 | 0)) {
             break label$9
            }
            i64toi32_i32$0 = $24$hi;
            i64toi32_i32$0 = $17$hi;
            i64toi32_i32$0 = $24$hi;
            i64toi32_i32$2 = $24_1;
            i64toi32_i32$1 = $17$hi;
            i64toi32_i32$3 = $17_1;
            i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$1 | 0;
            $72$hi = i64toi32_i32$1;
            i64toi32_i32$1 = $16$hi;
            i64toi32_i32$1 = $72$hi;
            i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
            i64toi32_i32$2 = $16$hi;
            i64toi32_i32$3 = $16_1;
            i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$2 | 0;
            $74_1 = i64toi32_i32$0 & i64toi32_i32$3 | 0;
            $74$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $24$hi;
            i64toi32_i32$2 = $17$hi;
            i64toi32_i32$2 = $24$hi;
            i64toi32_i32$1 = $24_1;
            i64toi32_i32$0 = $17$hi;
            i64toi32_i32$3 = $17_1;
            i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
            $77_1 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
            $77$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $74$hi;
            i64toi32_i32$2 = $74_1;
            i64toi32_i32$1 = $77$hi;
            i64toi32_i32$3 = $77_1;
            i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$1 | 0;
            $78_1 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
            $78$hi = i64toi32_i32$1;
            i64toi32_i32$1 = $16$hi;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_rotl_i64($16_1 | 0, i64toi32_i32$1 | 0, 36 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $80_1 = i64toi32_i32$2;
            $80$hi = i64toi32_i32$1;
            i64toi32_i32$1 = $16$hi;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_rotl_i64($16_1 | 0, i64toi32_i32$1 | 0, 30 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
            $82_1 = i64toi32_i32$2;
            $82$hi = i64toi32_i32$1;
            i64toi32_i32$1 = $80$hi;
            i64toi32_i32$0 = $80_1;
            i64toi32_i32$2 = $82$hi;
            i64toi32_i32$3 = $82_1;
            i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
            $83_1 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
            $83$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $16$hi;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_rotl_i64($16_1 | 0, i64toi32_i32$2 | 0, 25 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $85_1 = i64toi32_i32$0;
            $85$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $83$hi;
            i64toi32_i32$1 = $83_1;
            i64toi32_i32$0 = $85$hi;
            i64toi32_i32$3 = $85_1;
            i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
            $86_1 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
            $86$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $78$hi;
            i64toi32_i32$2 = $78_1;
            i64toi32_i32$1 = $86$hi;
            i64toi32_i32$3 = $86_1;
            i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
            i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
             i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
            }
            $87_1 = i64toi32_i32$4;
            $87$hi = i64toi32_i32$5;
            i64toi32_i32$5 = $20$hi;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_rotl_i64($20_1 | 0, i64toi32_i32$5 | 0, 50 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $89_1 = i64toi32_i32$2;
            $89$hi = i64toi32_i32$5;
            i64toi32_i32$5 = $20$hi;
            i64toi32_i32$2 = 0;
            i64toi32_i32$2 = __wasm_rotl_i64($20_1 | 0, i64toi32_i32$5 | 0, 46 | 0, i64toi32_i32$2 | 0) | 0;
            i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
            $91_1 = i64toi32_i32$2;
            $91$hi = i64toi32_i32$5;
            i64toi32_i32$5 = $89$hi;
            i64toi32_i32$0 = $89_1;
            i64toi32_i32$2 = $91$hi;
            i64toi32_i32$3 = $91_1;
            i64toi32_i32$2 = i64toi32_i32$5 ^ i64toi32_i32$2 | 0;
            $92_1 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
            $92$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $20$hi;
            i64toi32_i32$0 = 0;
            i64toi32_i32$0 = __wasm_rotl_i64($20_1 | 0, i64toi32_i32$2 | 0, 23 | 0, i64toi32_i32$0 | 0) | 0;
            i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
            $94_1 = i64toi32_i32$0;
            $94$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $92$hi;
            i64toi32_i32$5 = $92_1;
            i64toi32_i32$0 = $94$hi;
            i64toi32_i32$3 = $94_1;
            i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
            $95$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $22$hi;
            i64toi32_i32$0 = $95$hi;
            i64toi32_i32$2 = i64toi32_i32$5 ^ i64toi32_i32$3 | 0;
            i64toi32_i32$5 = $22$hi;
            i64toi32_i32$3 = $22_1;
            i64toi32_i32$1 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
            i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$5 | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
             i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
            }
            $97$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $23$hi;
            i64toi32_i32$4 = $20$hi;
            i64toi32_i32$0 = $20_1;
            i64toi32_i32$2 = -1;
            i64toi32_i32$3 = -1;
            i64toi32_i32$2 = i64toi32_i32$4 ^ i64toi32_i32$2 | 0;
            $100_1 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
            $100$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $23$hi;
            i64toi32_i32$4 = $23_1;
            i64toi32_i32$0 = $100$hi;
            i64toi32_i32$3 = $100_1;
            i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
            $101 = i64toi32_i32$4 & i64toi32_i32$3 | 0;
            $101$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $21$hi;
            i64toi32_i32$0 = $20$hi;
            i64toi32_i32$0 = $21$hi;
            i64toi32_i32$2 = $21_1;
            i64toi32_i32$4 = $20$hi;
            i64toi32_i32$3 = $20_1;
            i64toi32_i32$4 = i64toi32_i32$0 & i64toi32_i32$4 | 0;
            $104 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
            $104$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $101$hi;
            i64toi32_i32$0 = $101;
            i64toi32_i32$2 = $104$hi;
            i64toi32_i32$3 = $104;
            i64toi32_i32$2 = i64toi32_i32$4 | i64toi32_i32$2 | 0;
            $105 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
            $105$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $97$hi;
            i64toi32_i32$4 = i64toi32_i32$1;
            i64toi32_i32$0 = $105$hi;
            i64toi32_i32$3 = $105;
            i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
            i64toi32_i32$1 = i64toi32_i32$2 + i64toi32_i32$0 | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
             i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
            }
            $106$hi = i64toi32_i32$1;
            i64toi32_i32$2 = $4_1 + 67792 | 0;
            i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $109 = i64toi32_i32$1;
            $109$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $106$hi;
            i64toi32_i32$2 = i64toi32_i32$5;
            i64toi32_i32$1 = $109$hi;
            i64toi32_i32$3 = $109;
            i64toi32_i32$0 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
            i64toi32_i32$5 = i64toi32_i32$4 + i64toi32_i32$1 | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
             i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
            }
            $110$hi = i64toi32_i32$5;
            i64toi32_i32$4 = $5_1 + $4_1 | 0;
            i64toi32_i32$5 = HEAP32[i64toi32_i32$4 >> 2] | 0;
            i64toi32_i32$2 = HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] | 0;
            $114 = i64toi32_i32$5;
            $114$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $110$hi;
            i64toi32_i32$4 = i64toi32_i32$0;
            i64toi32_i32$5 = $114$hi;
            i64toi32_i32$3 = $114;
            i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
            i64toi32_i32$0 = i64toi32_i32$2 + i64toi32_i32$5 | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
             i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
            }
            $19_1 = i64toi32_i32$1;
            $19$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $87$hi;
            i64toi32_i32$2 = $87_1;
            i64toi32_i32$4 = $19$hi;
            i64toi32_i32$3 = i64toi32_i32$1;
            i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$1 | 0;
            i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$4 | 0;
            if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
             i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
            }
            $15_1 = i64toi32_i32$5;
            $15$hi = i64toi32_i32$1;
            i64toi32_i32$1 = $19$hi;
            i64toi32_i32$1 = $18$hi;
            i64toi32_i32$1 = $19$hi;
            i64toi32_i32$0 = $19_1;
            i64toi32_i32$2 = $18$hi;
            i64toi32_i32$3 = $18_1;
            i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
            i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$2 | 0;
            if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
             i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
            }
            $19_1 = i64toi32_i32$4;
            $19$hi = i64toi32_i32$5;
            $4_1 = $4_1 + 8 | 0;
            i64toi32_i32$5 = $24$hi;
            $18_1 = $24_1;
            $18$hi = i64toi32_i32$5;
            i64toi32_i32$5 = $23$hi;
            $22_1 = $23_1;
            $22$hi = i64toi32_i32$5;
            continue label$10;
           };
          }
          label$11 : {
           if ($2_1 >>> 0 < 128 >>> 0) {
            break label$11
           }
           if ($2_1 >>> 0 <= $3_1 >>> 0) {
            break label$6
           }
          }
          $67();
          abort();
         }
         $4_1 = $5_1 + $14_1 | 0;
         $134 = $4_1 + 128 | 0;
         i64toi32_i32$1 = $4_1 + 8 | 0;
         i64toi32_i32$5 = HEAP32[i64toi32_i32$1 >> 2] | 0;
         i64toi32_i32$0 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
         $20_1 = i64toi32_i32$5;
         $20$hi = i64toi32_i32$0;
         i64toi32_i32$5 = 0;
         i64toi32_i32$5 = __wasm_rotl_i64($20_1 | 0, i64toi32_i32$0 | 0, 56 | 0, i64toi32_i32$5 | 0) | 0;
         i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
         $139 = i64toi32_i32$5;
         $139$hi = i64toi32_i32$0;
         i64toi32_i32$0 = $20$hi;
         i64toi32_i32$1 = $20_1;
         i64toi32_i32$5 = 0;
         i64toi32_i32$3 = 7;
         i64toi32_i32$2 = i64toi32_i32$3 & 31 | 0;
         if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
          i64toi32_i32$5 = 0;
          $141 = i64toi32_i32$0 >>> i64toi32_i32$2 | 0;
         } else {
          i64toi32_i32$5 = i64toi32_i32$0 >>> i64toi32_i32$2 | 0;
          $141 = (((1 << i64toi32_i32$2 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$2 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$2 | 0) | 0;
         }
         $141$hi = i64toi32_i32$5;
         i64toi32_i32$5 = $139$hi;
         i64toi32_i32$0 = $139;
         i64toi32_i32$1 = $141$hi;
         i64toi32_i32$3 = $141;
         i64toi32_i32$1 = i64toi32_i32$5 ^ i64toi32_i32$1 | 0;
         $142 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
         $142$hi = i64toi32_i32$1;
         i64toi32_i32$1 = $20$hi;
         i64toi32_i32$0 = 0;
         i64toi32_i32$0 = __wasm_rotl_i64($20_1 | 0, i64toi32_i32$1 | 0, 63 | 0, i64toi32_i32$0 | 0) | 0;
         i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
         $144 = i64toi32_i32$0;
         $144$hi = i64toi32_i32$1;
         i64toi32_i32$1 = $142$hi;
         i64toi32_i32$5 = $142;
         i64toi32_i32$0 = $144$hi;
         i64toi32_i32$3 = $144;
         i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
         $145 = i64toi32_i32$5 ^ i64toi32_i32$3 | 0;
         $145$hi = i64toi32_i32$0;
         i64toi32_i32$1 = $4_1 + 112 | 0;
         i64toi32_i32$0 = HEAP32[i64toi32_i32$1 >> 2] | 0;
         i64toi32_i32$5 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
         $20_1 = i64toi32_i32$0;
         $20$hi = i64toi32_i32$5;
         i64toi32_i32$0 = 0;
         i64toi32_i32$0 = __wasm_rotl_i64($20_1 | 0, i64toi32_i32$5 | 0, 3 | 0, i64toi32_i32$0 | 0) | 0;
         i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
         $150 = i64toi32_i32$0;
         $150$hi = i64toi32_i32$5;
         i64toi32_i32$5 = $20$hi;
         i64toi32_i32$1 = $20_1;
         i64toi32_i32$0 = 0;
         i64toi32_i32$3 = 6;
         i64toi32_i32$2 = i64toi32_i32$3 & 31 | 0;
         if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
          i64toi32_i32$0 = 0;
          $143 = i64toi32_i32$5 >>> i64toi32_i32$2 | 0;
         } else {
          i64toi32_i32$0 = i64toi32_i32$5 >>> i64toi32_i32$2 | 0;
          $143 = (((1 << i64toi32_i32$2 | 0) - 1 | 0) & i64toi32_i32$5 | 0) << (32 - i64toi32_i32$2 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$2 | 0) | 0;
         }
         $152$hi = i64toi32_i32$0;
         i64toi32_i32$0 = $150$hi;
         i64toi32_i32$5 = $150;
         i64toi32_i32$1 = $152$hi;
         i64toi32_i32$3 = $143;
         i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$1 | 0;
         $153 = i64toi32_i32$5 ^ i64toi32_i32$3 | 0;
         $153$hi = i64toi32_i32$1;
         i64toi32_i32$1 = $20$hi;
         i64toi32_i32$5 = 0;
         i64toi32_i32$5 = __wasm_rotl_i64($20_1 | 0, i64toi32_i32$1 | 0, 45 | 0, i64toi32_i32$5 | 0) | 0;
         i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
         $155 = i64toi32_i32$5;
         $155$hi = i64toi32_i32$1;
         i64toi32_i32$1 = $153$hi;
         i64toi32_i32$0 = $153;
         i64toi32_i32$5 = $155$hi;
         i64toi32_i32$3 = $155;
         i64toi32_i32$5 = i64toi32_i32$1 ^ i64toi32_i32$5 | 0;
         $156 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
         $156$hi = i64toi32_i32$5;
         i64toi32_i32$5 = $145$hi;
         i64toi32_i32$1 = $145;
         i64toi32_i32$0 = $156$hi;
         i64toi32_i32$3 = $156;
         i64toi32_i32$2 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
         i64toi32_i32$4 = i64toi32_i32$5 + i64toi32_i32$0 | 0;
         if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
          i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
         }
         $157$hi = i64toi32_i32$4;
         i64toi32_i32$5 = $4_1 + 72 | 0;
         i64toi32_i32$4 = HEAP32[i64toi32_i32$5 >> 2] | 0;
         i64toi32_i32$1 = HEAP32[(i64toi32_i32$5 + 4 | 0) >> 2] | 0;
         $160 = i64toi32_i32$4;
         $160$hi = i64toi32_i32$1;
         i64toi32_i32$1 = $157$hi;
         i64toi32_i32$5 = i64toi32_i32$2;
         i64toi32_i32$4 = $160$hi;
         i64toi32_i32$3 = $160;
         i64toi32_i32$0 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
         i64toi32_i32$2 = i64toi32_i32$1 + i64toi32_i32$4 | 0;
         if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
          i64toi32_i32$2 = i64toi32_i32$2 + 1 | 0
         }
         $161$hi = i64toi32_i32$2;
         i64toi32_i32$1 = $4_1;
         i64toi32_i32$2 = HEAP32[i64toi32_i32$1 >> 2] | 0;
         i64toi32_i32$5 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
         $163 = i64toi32_i32$2;
         $163$hi = i64toi32_i32$5;
         i64toi32_i32$5 = $161$hi;
         i64toi32_i32$1 = i64toi32_i32$0;
         i64toi32_i32$2 = $163$hi;
         i64toi32_i32$3 = $163;
         i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
         i64toi32_i32$0 = i64toi32_i32$5 + i64toi32_i32$2 | 0;
         if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
          i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
         }
         i64toi32_i32$1 = $134;
         HEAP32[i64toi32_i32$1 >> 2] = i64toi32_i32$4;
         HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
         $14_1 = $14_1 + 8 | 0;
         continue label$7;
        };
       }
       $3_1 = $3_1 + -128 | 0;
       $2_1 = $2_1 + -128 | 0;
       $1_1 = $1_1 + 128 | 0;
       i64toi32_i32$0 = $16$hi;
       i64toi32_i32$0 = $13$hi;
       i64toi32_i32$0 = $16$hi;
       i64toi32_i32$5 = $16_1;
       i64toi32_i32$1 = $13$hi;
       i64toi32_i32$3 = $13_1;
       i64toi32_i32$2 = i64toi32_i32$5 + i64toi32_i32$3 | 0;
       i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
       if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
        i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
       }
       $13_1 = i64toi32_i32$2;
       $13$hi = i64toi32_i32$4;
       i64toi32_i32$4 = $17$hi;
       i64toi32_i32$4 = $12$hi;
       i64toi32_i32$4 = $17$hi;
       i64toi32_i32$0 = $17_1;
       i64toi32_i32$5 = $12$hi;
       i64toi32_i32$3 = $12_1;
       i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
       i64toi32_i32$2 = i64toi32_i32$4 + i64toi32_i32$5 | 0;
       if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$2 + 1 | 0
       }
       $12_1 = i64toi32_i32$1;
       $12$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $24$hi;
       i64toi32_i32$2 = $11$hi;
       i64toi32_i32$2 = $24$hi;
       i64toi32_i32$4 = $24_1;
       i64toi32_i32$0 = $11$hi;
       i64toi32_i32$3 = $11_1;
       i64toi32_i32$5 = i64toi32_i32$4 + i64toi32_i32$3 | 0;
       i64toi32_i32$1 = i64toi32_i32$2 + i64toi32_i32$0 | 0;
       if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
       }
       $11_1 = i64toi32_i32$5;
       $11$hi = i64toi32_i32$1;
       i64toi32_i32$1 = $18$hi;
       i64toi32_i32$1 = $10$hi;
       i64toi32_i32$1 = $18$hi;
       i64toi32_i32$2 = $18_1;
       i64toi32_i32$4 = $10$hi;
       i64toi32_i32$3 = $10_1;
       i64toi32_i32$0 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
       i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$4 | 0;
       if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
        i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
       }
       $10_1 = i64toi32_i32$0;
       $10$hi = i64toi32_i32$5;
       i64toi32_i32$5 = $20$hi;
       i64toi32_i32$5 = $9$hi;
       i64toi32_i32$5 = $20$hi;
       i64toi32_i32$1 = $20_1;
       i64toi32_i32$2 = $9$hi;
       i64toi32_i32$3 = $9_1;
       i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
       i64toi32_i32$0 = i64toi32_i32$5 + i64toi32_i32$2 | 0;
       if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
        i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
       }
       $9_1 = i64toi32_i32$4;
       $9$hi = i64toi32_i32$0;
       i64toi32_i32$0 = $21$hi;
       i64toi32_i32$0 = $8$hi;
       i64toi32_i32$0 = $21$hi;
       i64toi32_i32$5 = $21_1;
       i64toi32_i32$1 = $8$hi;
       i64toi32_i32$3 = $8_1;
       i64toi32_i32$2 = i64toi32_i32$5 + i64toi32_i32$3 | 0;
       i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
       if (i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0) {
        i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
       }
       $8_1 = i64toi32_i32$2;
       $8$hi = i64toi32_i32$4;
       i64toi32_i32$4 = $23$hi;
       i64toi32_i32$4 = $7$hi;
       i64toi32_i32$4 = $23$hi;
       i64toi32_i32$0 = $23_1;
       i64toi32_i32$5 = $7$hi;
       i64toi32_i32$3 = $7_1;
       i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
       i64toi32_i32$2 = i64toi32_i32$4 + i64toi32_i32$5 | 0;
       if (i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0) {
        i64toi32_i32$2 = i64toi32_i32$2 + 1 | 0
       }
       $7_1 = i64toi32_i32$1;
       $7$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $22$hi;
       i64toi32_i32$2 = $6$hi;
       i64toi32_i32$2 = $22$hi;
       i64toi32_i32$4 = $22_1;
       i64toi32_i32$0 = $6$hi;
       i64toi32_i32$3 = $6_1;
       i64toi32_i32$5 = i64toi32_i32$4 + i64toi32_i32$3 | 0;
       i64toi32_i32$1 = i64toi32_i32$2 + i64toi32_i32$0 | 0;
       if (i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
       }
       $6_1 = i64toi32_i32$5;
       $6$hi = i64toi32_i32$1;
       continue label$3;
      }
      label$12 : {
       if (($4_1 + -7 | 0) >>> 0 >= $2_1 >>> 0) {
        break label$12
       }
       $14_1 = $1_1 + $4_1 | 0;
       if (($14_1 | 0) == (7 | 0)) {
        break label$2
       }
       if (($4_1 + -6 | 0) >>> 0 >= $2_1 >>> 0) {
        break label$12
       }
       if (($4_1 + -5 | 0) >>> 0 >= $2_1 >>> 0) {
        break label$12
       }
       if (($4_1 + -4 | 0) >>> 0 >= $2_1 >>> 0) {
        break label$12
       }
       if (($4_1 + -3 | 0) >>> 0 >= $2_1 >>> 0) {
        break label$12
       }
       if (($4_1 + -2 | 0) >>> 0 >= $2_1 >>> 0) {
        break label$12
       }
       if (($4_1 + -1 | 0) >>> 0 >= $2_1 >>> 0) {
        break label$12
       }
       if ($4_1 >>> 0 >= $2_1 >>> 0) {
        break label$12
       }
       $236 = ($5_1 + $4_1 | 0) + -7 | 0;
       i64toi32_i32$2 = $14_1 + -6 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0;
       i64toi32_i32$4 = 0;
       i64toi32_i32$2 = i64toi32_i32$1;
       i64toi32_i32$1 = 0;
       i64toi32_i32$3 = 48;
       i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$0 | 0;
        $146 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$4 << i64toi32_i32$0 | 0) | 0;
        $146 = i64toi32_i32$2 << i64toi32_i32$0 | 0;
       }
       $240 = $146;
       $240$hi = i64toi32_i32$1;
       i64toi32_i32$4 = $14_1 + -7 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$4 >> 0] | 0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$4 = i64toi32_i32$1;
       i64toi32_i32$1 = 0;
       i64toi32_i32$3 = 56;
       i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$4 << i64toi32_i32$0 | 0;
        $147 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$4 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$0 | 0) | 0;
        $147 = i64toi32_i32$4 << i64toi32_i32$0 | 0;
       }
       $244$hi = i64toi32_i32$1;
       i64toi32_i32$1 = $240$hi;
       i64toi32_i32$2 = $240;
       i64toi32_i32$4 = $244$hi;
       i64toi32_i32$3 = $147;
       i64toi32_i32$4 = i64toi32_i32$1 | i64toi32_i32$4 | 0;
       $245 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
       $245$hi = i64toi32_i32$4;
       i64toi32_i32$1 = $14_1 + -5 | 0;
       i64toi32_i32$4 = HEAPU8[i64toi32_i32$1 >> 0] | 0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$1 = i64toi32_i32$4;
       i64toi32_i32$4 = 0;
       i64toi32_i32$3 = 40;
       i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
        i64toi32_i32$4 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
        $148 = 0;
       } else {
        i64toi32_i32$4 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$0 | 0) | 0;
        $148 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
       }
       $249$hi = i64toi32_i32$4;
       i64toi32_i32$4 = $245$hi;
       i64toi32_i32$2 = $245;
       i64toi32_i32$1 = $249$hi;
       i64toi32_i32$3 = $148;
       i64toi32_i32$1 = i64toi32_i32$4 | i64toi32_i32$1 | 0;
       $250 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
       $250$hi = i64toi32_i32$1;
       i64toi32_i32$4 = $14_1 + -4 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$4 >> 0] | 0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$4 = i64toi32_i32$1;
       i64toi32_i32$1 = 0;
       i64toi32_i32$3 = 32;
       i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$4 << i64toi32_i32$0 | 0;
        $149 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$4 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$0 | 0) | 0;
        $149 = i64toi32_i32$4 << i64toi32_i32$0 | 0;
       }
       $254$hi = i64toi32_i32$1;
       i64toi32_i32$1 = $250$hi;
       i64toi32_i32$2 = $250;
       i64toi32_i32$4 = $254$hi;
       i64toi32_i32$3 = $149;
       i64toi32_i32$4 = i64toi32_i32$1 | i64toi32_i32$4 | 0;
       $255 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
       $255$hi = i64toi32_i32$4;
       i64toi32_i32$1 = $14_1 + -3 | 0;
       i64toi32_i32$4 = HEAPU8[i64toi32_i32$1 >> 0] | 0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$1 = i64toi32_i32$4;
       i64toi32_i32$4 = 0;
       i64toi32_i32$3 = 24;
       i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
        i64toi32_i32$4 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
        $151 = 0;
       } else {
        i64toi32_i32$4 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$0 | 0) | 0;
        $151 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
       }
       $259$hi = i64toi32_i32$4;
       i64toi32_i32$4 = $255$hi;
       i64toi32_i32$2 = $255;
       i64toi32_i32$1 = $259$hi;
       i64toi32_i32$3 = $151;
       i64toi32_i32$1 = i64toi32_i32$4 | i64toi32_i32$1 | 0;
       $260 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
       $260$hi = i64toi32_i32$1;
       i64toi32_i32$4 = $14_1 + -2 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$4 >> 0] | 0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$4 = i64toi32_i32$1;
       i64toi32_i32$1 = 0;
       i64toi32_i32$3 = 16;
       i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
        i64toi32_i32$1 = i64toi32_i32$4 << i64toi32_i32$0 | 0;
        $152 = 0;
       } else {
        i64toi32_i32$1 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$4 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$0 | 0) | 0;
        $152 = i64toi32_i32$4 << i64toi32_i32$0 | 0;
       }
       $264$hi = i64toi32_i32$1;
       i64toi32_i32$1 = $260$hi;
       i64toi32_i32$2 = $260;
       i64toi32_i32$4 = $264$hi;
       i64toi32_i32$3 = $152;
       i64toi32_i32$4 = i64toi32_i32$1 | i64toi32_i32$4 | 0;
       $265 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
       $265$hi = i64toi32_i32$4;
       i64toi32_i32$1 = $14_1 + -1 | 0;
       i64toi32_i32$4 = HEAPU8[i64toi32_i32$1 >> 0] | 0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$1 = i64toi32_i32$4;
       i64toi32_i32$4 = 0;
       i64toi32_i32$3 = 8;
       i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
       if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
        i64toi32_i32$4 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
        $154 = 0;
       } else {
        i64toi32_i32$4 = ((1 << i64toi32_i32$0 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$0 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$0 | 0) | 0;
        $154 = i64toi32_i32$1 << i64toi32_i32$0 | 0;
       }
       $269$hi = i64toi32_i32$4;
       i64toi32_i32$4 = $265$hi;
       i64toi32_i32$2 = $265;
       i64toi32_i32$1 = $269$hi;
       i64toi32_i32$3 = $154;
       i64toi32_i32$1 = i64toi32_i32$4 | i64toi32_i32$1 | 0;
       $270 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
       $270$hi = i64toi32_i32$1;
       i64toi32_i32$4 = $14_1;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$4 >> 0] | 0;
       i64toi32_i32$2 = 0;
       $272 = i64toi32_i32$1;
       $272$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $270$hi;
       i64toi32_i32$4 = $270;
       i64toi32_i32$1 = $272$hi;
       i64toi32_i32$3 = $272;
       i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
       $273 = i64toi32_i32$4 | i64toi32_i32$3 | 0;
       i64toi32_i32$4 = $236;
       HEAP32[i64toi32_i32$4 >> 2] = $273;
       HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$1;
       $4_1 = $4_1 + 8 | 0;
       continue label$4;
      }
      break label$4;
     };
     break label$3;
    };
    $49();
    abort();
   }
   $14();
   abort();
  }
  i64toi32_i32$1 = $6$hi;
  i64toi32_i32$4 = $0_1;
  HEAP32[(i64toi32_i32$4 + 56 | 0) >> 2] = $6_1;
  HEAP32[(i64toi32_i32$4 + 60 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = $7$hi;
  HEAP32[(i64toi32_i32$4 + 48 | 0) >> 2] = $7_1;
  HEAP32[(i64toi32_i32$4 + 52 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = $8$hi;
  HEAP32[(i64toi32_i32$4 + 40 | 0) >> 2] = $8_1;
  HEAP32[(i64toi32_i32$4 + 44 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = $9$hi;
  HEAP32[(i64toi32_i32$4 + 32 | 0) >> 2] = $9_1;
  HEAP32[(i64toi32_i32$4 + 36 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = $10$hi;
  HEAP32[(i64toi32_i32$4 + 24 | 0) >> 2] = $10_1;
  HEAP32[(i64toi32_i32$4 + 28 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = $11$hi;
  HEAP32[(i64toi32_i32$4 + 16 | 0) >> 2] = $11_1;
  HEAP32[(i64toi32_i32$4 + 20 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = $12$hi;
  HEAP32[(i64toi32_i32$4 + 8 | 0) >> 2] = $12_1;
  HEAP32[(i64toi32_i32$4 + 12 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = $13$hi;
  HEAP32[i64toi32_i32$4 >> 2] = $13_1;
  HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$1;
  global$0 = $5_1 + 640 | 0;
 }
 
 function $78($0_1, $1_1, $1$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  var $2_1 = 0, i64toi32_i32$0 = 0, $3_1 = 0, i64toi32_i32$1 = 0, $5_1 = 0, $6_1 = 0, $4_1 = 0, $83_1 = 0, $108 = 0;
  $2_1 = global$0 - 96 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 92 | 0) >> 2] = 0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 84 | 0) >> 2] = 0;
  HEAP32[($2_1 + 88 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 76 | 0) >> 2] = 0;
  HEAP32[($2_1 + 80 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($2_1 + 68 | 0) >> 2] = 6;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 56 | 0) >> 2] = $1_1;
  HEAP32[($2_1 + 60 | 0) >> 2] = i64toi32_i32$0;
  $3_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1 + 64 | 0;
  HEAP32[($2_1 + 64 | 0) >> 2] = $3_1;
  HEAP32[($2_1 + 72 | 0) >> 2] = $2_1 + 56 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      $4_1 = $64($1_1 | 0, i64toi32_i32$0 | 0) | 0;
      if ($4_1 >>> 0 > 7 >>> 0) {
       break label$4
      }
      $5_1 = 11;
      $6_1 = 66898;
      label$5 : {
       label$6 : {
        switch ($4_1 | 0) {
        case 1:
         $5_1 = 6;
         $6_1 = 66909;
         break label$5;
        case 5:
         $5_1 = 8;
         $6_1 = 66935;
         break label$5;
        case 6:
         $5_1 = 8;
         $6_1 = 66943;
         break label$5;
        case 3:
         break label$1;
        case 2:
         break label$2;
        case 4:
         break label$3;
        case 7:
         break label$6;
        default:
         break label$5;
        };
       }
       $5_1 = 10;
       $6_1 = 66951;
      }
      HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
      HEAP32[($0_1 + 4 | 0) >> 2] = $5_1;
      HEAP32[$0_1 >> 2] = $6_1;
      global$0 = $2_1 + 96 | 0;
      return;
     }
     $3_1 = $8(8 | 0) | 0;
     HEAP32[($2_1 + 76 | 0) >> 2] = $3_1;
     HEAP32[($2_1 + 80 | 0) >> 2] = $3_1;
     HEAP32[($3_1 + 4 | 0) >> 2] = 8;
     HEAP32[$3_1 >> 2] = 66961;
     $9(34 | 0, $3_1 | 0);
     abort();
    }
    i64toi32_i32$0 = $1$hi;
    $84($2_1 | 0, $1_1 | 0, i64toi32_i32$0 | 0);
    HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
    $3_1 = HEAP32[$2_1 >> 2] | 0;
    HEAP32[($2_1 + 84 | 0) >> 2] = $3_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($2_1 + 4 | 0) >> 2] | 0;
    HEAP32[$0_1 >> 2] = $3_1;
    global$0 = $2_1 + 96 | 0;
    return;
   }
   i64toi32_i32$0 = $1$hi;
   $84($2_1 + 24 | 0 | 0, $1_1 | 0, i64toi32_i32$0 | 0);
   $5_1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
   HEAP32[($2_1 + 88 | 0) >> 2] = $5_1;
   $58($2_1 + 16 | 0 | 0, 66915 | 0, 10 | 0, $5_1 | 0, HEAP32[($2_1 + 28 | 0) >> 2] | 0 | 0);
   $58($2_1 + 8 | 0 | 0, HEAP32[($2_1 + 16 | 0) >> 2] | 0 | 0, HEAP32[($2_1 + 20 | 0) >> 2] | 0 | 0, 66934 | 0, 1 | 0);
   HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
   i64toi32_i32$0 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
   $83_1 = i64toi32_i32$0;
   i64toi32_i32$0 = $0_1;
   HEAP32[i64toi32_i32$0 >> 2] = $83_1;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   global$0 = $2_1 + 96 | 0;
   return;
  }
  i64toi32_i32$1 = $1$hi;
  $84($2_1 + 48 | 0 | 0, $1_1 | 0, i64toi32_i32$1 | 0);
  $5_1 = HEAP32[($2_1 + 48 | 0) >> 2] | 0;
  HEAP32[($2_1 + 92 | 0) >> 2] = $5_1;
  $58($2_1 + 40 | 0 | 0, 66925 | 0, 9 | 0, $5_1 | 0, HEAP32[($2_1 + 52 | 0) >> 2] | 0 | 0);
  $58($2_1 + 32 | 0 | 0, HEAP32[($2_1 + 40 | 0) >> 2] | 0 | 0, HEAP32[($2_1 + 44 | 0) >> 2] | 0 | 0, 66934 | 0, 1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
  i64toi32_i32$1 = HEAP32[($2_1 + 32 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2_1 + 36 | 0) >> 2] | 0;
  $108 = i64toi32_i32$1;
  i64toi32_i32$1 = $0_1;
  HEAP32[i64toi32_i32$1 >> 2] = $108;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  global$0 = $2_1 + 96 | 0;
 }
 
 function $79($0_1, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$0 = 0, $5_1 = 0, $8_1 = 0, i64toi32_i32$1 = 0, $4_1 = 0, $7_1 = 0, $10_1 = 0, $6_1 = 0, $9_1 = 0, $46_1 = 0;
  $3_1 = global$0 - 16 | 0;
  global$0 = $3_1;
  HEAP32[($3_1 + 12 | 0) >> 2] = 0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 4 | 0) >> 2] = 2;
  HEAP32[($3_1 + 8 | 0) >> 2] = i64toi32_i32$0;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
  HEAP32[$3_1 >> 2] = $4_1;
  label$1 : {
   label$2 : {
    label$3 : {
     if (($2_1 | 0) < (0 | 0)) {
      break label$3
     }
     $5_1 = $8($2_1 << 3 | 0 | 0) | 0;
     HEAP32[($3_1 + 8 | 0) >> 2] = $5_1;
     $6_1 = $3_1 + 12 | 0;
     $7_1 = $5_1;
     $8_1 = $2_1;
     label$4 : while (1) {
      if (!$8_1) {
       break label$2
      }
      if (!$1_1) {
       break label$1
      }
      $9_1 = HEAP32[$1_1 >> 2] | 0;
      $10_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
      HEAP32[$6_1 >> 2] = $10_1;
      i64toi32_i32$0 = $83($9_1 | 0, $10_1 | 0) | 0;
      i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
      $46_1 = i64toi32_i32$0;
      i64toi32_i32$0 = $7_1;
      HEAP32[i64toi32_i32$0 >> 2] = $46_1;
      HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
      $7_1 = i64toi32_i32$0 + 8 | 0;
      $1_1 = $1_1 + 8 | 0;
      $8_1 = $8_1 + -1 | 0;
      continue label$4;
     };
    }
    $67();
    abort();
   }
   HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
   HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
   HEAP32[$0_1 >> 2] = $5_1;
   HEAP32[($0_1 + 8 | 0) >> 2] = $2_1;
   global$0 = $3_1 + 16 | 0;
   return;
  }
  $14();
  abort();
 }
 
 function $80($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$1 = 0, $1_1 = 0, i64toi32_i32$4 = 0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = global$0 - 16 | 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $1_1 = 1;
  label$1 : {
   label$2 : {
    i64toi32_i32$2 = $0_1;
    i64toi32_i32$1 = -2146959360;
    i64toi32_i32$3 = 0;
    i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
    i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
    if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    i64toi32_i32$0 = i64toi32_i32$4;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 2;
    if (i64toi32_i32$5 >>> 0 < i64toi32_i32$2 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0) {
     break label$2
    }
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$3 = $0_1;
    i64toi32_i32$5 = 0;
    i64toi32_i32$2 = 0;
    if ((i64toi32_i32$3 | 0) != (i64toi32_i32$2 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$5 | 0) | 0) {
     break label$1
    }
    $1_1 = 0;
   }
   return $1_1 | 0;
  }
  i64toi32_i32$3 = $0$hi;
  i64toi32_i32$2 = $0_1;
  i64toi32_i32$0 = 2146959360;
  i64toi32_i32$5 = 0;
  i64toi32_i32$0 = i64toi32_i32$3 & i64toi32_i32$0 | 0;
  i64toi32_i32$3 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
  i64toi32_i32$2 = 2146959360;
  i64toi32_i32$5 = 0;
  return (i64toi32_i32$3 | 0) != (i64toi32_i32$5 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$2 | 0) | 0 | 0;
 }
 
 function $81($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  i64toi32_i32$1 = global$0 - 16 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $0_1;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $82($0_1, $0$hi, $1_1, $2_1) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  var $3_1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, $5_1 = 0, $5$hi = 0;
  $3_1 = global$0 - 96 | 0;
  global$0 = $3_1;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 84 | 0) >> 2] = 0;
  HEAP32[($3_1 + 88 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 76 | 0) >> 2] = 0;
  HEAP32[($3_1 + 80 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $3_1;
  i64toi32_i32$0 = 0;
  HEAP32[($3_1 + 68 | 0) >> 2] = 0;
  HEAP32[($3_1 + 72 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3_1 + 60 | 0) >> 2] = 7;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 32 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 36 | 0) >> 2] = i64toi32_i32$0;
  $4_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1 + 56 | 0;
  HEAP32[($3_1 + 56 | 0) >> 2] = $4_1;
  HEAP32[($3_1 + 64 | 0) >> 2] = $3_1 + 32 | 0;
  $79($3_1 + 16 | 0 | 0, $1_1 | 0, $2_1 | 0);
  i64toi32_i32$1 = $3_1;
  HEAP32[($3_1 + 48 | 0) >> 2] = $0_1;
  HEAP32[($3_1 + 52 | 0) >> 2] = i64toi32_i32$0;
  $1_1 = HEAP32[($3_1 + 16 | 0) >> 2] | 0;
  HEAP32[($3_1 + 68 | 0) >> 2] = $1_1;
  fimport$7($3_1 | 0, $3_1 + 48 | 0 | 0, $1_1 | 0, HEAP32[($3_1 + 20 | 0) >> 2] | 0 | 0, HEAP32[($3_1 + 24 | 0) >> 2] | 0 | 0, $3_1 | 0, $3_1 | 0);
  i64toi32_i32$0 = HEAP32[$3_1 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3_1 + 4 | 0) >> 2] | 0;
  $5_1 = i64toi32_i32$0;
  $5$hi = i64toi32_i32$1;
  label$1 : {
   if (!(HEAPU8[($3_1 + 8 | 0) >> 0] | 0)) {
    break label$1
   }
   i64toi32_i32$1 = $5$hi;
   i64toi32_i32$1 = $65($5_1 | 0, i64toi32_i32$1 | 0) | 0;
   i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
   $0_1 = i64toi32_i32$1;
   $0$hi = i64toi32_i32$0;
   HEAP32[(0 + 67736 | 0) >> 2] = $4_1;
   global$0 = $3_1 + 96 | 0;
   i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
   return i64toi32_i32$1 | 0;
  }
  label$2 : {
   i64toi32_i32$1 = $0$hi;
   $1_1 = $64($0_1 | 0, i64toi32_i32$1 | 0) | 0;
   if (($1_1 | 0) == (7 | 0)) {
    break label$2
   }
   $4_1 = $8(12 | 0) | 0;
   HEAP32[($3_1 + 72 | 0) >> 2] = $4_1;
   HEAP32[($3_1 + 76 | 0) >> 2] = $4_1;
   HEAP32[($4_1 + 8 | 0) >> 2] = $1_1;
   HEAP32[($4_1 + 4 | 0) >> 2] = 12;
   HEAP32[$4_1 >> 2] = 66863;
   $9(3045 | 0, $4_1 | 0);
   abort();
  }
  i64toi32_i32$0 = $3_1;
  i64toi32_i32$1 = 0;
  HEAP32[($3_1 + 40 | 0) >> 2] = 0;
  HEAP32[($3_1 + 44 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($3_1 + 80 | 0) >> 2] = $3_1 + 40 | 0;
  i64toi32_i32$1 = $5$hi;
  i64toi32_i32$1 = $65($5_1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $0_1 = i64toi32_i32$1;
  $0$hi = i64toi32_i32$0;
  $4_1 = $8(8 | 0) | 0;
  HEAP32[($3_1 + 84 | 0) >> 2] = $4_1;
  HEAP32[($3_1 + 88 | 0) >> 2] = $4_1;
  i64toi32_i32$1 = $4_1;
  HEAP32[i64toi32_i32$1 >> 2] = $0_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $9(63 | 0, i64toi32_i32$1 | 0);
  abort();
 }
 
 function $83($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, $5_1 = 0, i64toi32_i32$0 = 0, $4_1 = 0, $4$hi = 0, i64toi32_i32$1 = 0, $3_1 = 0, $6_1 = 0, i64toi32_i32$4 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $11_1 = 0, $150 = 0, $10_1 = 0, $12_1 = 0;
  $2_1 = global$0 - 160 | 0;
  global$0 = $2_1;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 16;
  HEAP32[($2_1 + 88 | 0) >> 2] = 0;
  HEAP32[($2_1 + 92 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 152 | 0) >> 2] = 0;
  HEAP32[($2_1 + 156 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 144 | 0) >> 2] = 0;
  HEAP32[($2_1 + 148 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 136 | 0) >> 2] = 0;
  HEAP32[($2_1 + 140 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 128 | 0) >> 2] = 0;
  HEAP32[($2_1 + 132 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 120 | 0) >> 2] = 0;
  HEAP32[($2_1 + 124 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 112 | 0) >> 2] = 0;
  HEAP32[($2_1 + 116 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 104 | 0) >> 2] = 0;
  HEAP32[($2_1 + 108 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 96 | 0) >> 2] = 0;
  HEAP32[($2_1 + 100 | 0) >> 2] = i64toi32_i32$0;
  $3_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1 + 88 | 0;
  HEAP32[($2_1 + 88 | 0) >> 2] = $3_1;
  label$1 : {
   label$2 : {
    label$3 : {
     if (($0_1 | 0) == (63 | 0)) {
      break label$3
     }
     if (($0_1 | 0) != (31 | 0)) {
      break label$2
     }
     HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
     i64toi32_i32$1 = $2_1;
     i64toi32_i32$0 = 0;
     HEAP32[($2_1 + 24 | 0) >> 2] = 0;
     HEAP32[($2_1 + 28 | 0) >> 2] = i64toi32_i32$0;
     HEAP32[($2_1 + 96 | 0) >> 2] = $2_1 + 24 | 0;
     i64toi32_i32$2 = $1_1;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $4_1 = i64toi32_i32$0;
     $4$hi = i64toi32_i32$1;
     global$0 = $2_1 + 160 | 0;
     i64toi32_i32$1 = $4$hi;
     i64toi32_i32$1 = $4$hi;
     i64toi32_i32$0 = $4_1;
     i64toi32_i32$HIGH_BITS = $4$hi;
     return $4_1 | 0;
    }
    HEAP32[($2_1 + 100 | 0) >> 2] = $2_1 + 80 | 0;
    i64toi32_i32$2 = $1_1;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $4_1 = i64toi32_i32$0;
    $4$hi = i64toi32_i32$1;
    i64toi32_i32$0 = $2_1;
    i64toi32_i32$1 = 0;
    HEAP32[($2_1 + 80 | 0) >> 2] = 0;
    HEAP32[($2_1 + 84 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = $4$hi;
    i64toi32_i32$1 = $4$hi;
    i64toi32_i32$1 = $81($4_1 | 0, $4$hi | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $4_1 = i64toi32_i32$1;
    $4$hi = i64toi32_i32$0;
    break label$1;
   }
   $29($2_1 + 16 | 0 | 0, $0_1 | 0, $1_1 | 0);
   $5_1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
   HEAP32[($2_1 + 104 | 0) >> 2] = $5_1;
   $6_1 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
   $29($2_1 + 8 | 0 | 0, 0 | 0, 0 | 0);
   $7_1 = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
   HEAP32[($2_1 + 108 | 0) >> 2] = $7_1;
   i64toi32_i32$0 = 2146959360;
   $4_1 = 2;
   $4$hi = i64toi32_i32$0;
   if (($61($6_1 | 0, $5_1 | 0, 2 | 0, HEAP32[($2_1 + 8 | 0) >> 2] | 0 | 0, $7_1 | 0, 2 | 0) | 0) & 1 | 0) {
    break label$1
   }
   label$4 : {
    if (($0_1 | 0) != (2 | 0)) {
     break label$4
    }
    i64toi32_i32$4 = $1_1 & 1 | 0;
    i64toi32_i32$0 = 2146959360;
    i64toi32_i32$1 = 2146959360;
    i64toi32_i32$3 = i64toi32_i32$4 ? 3 : 4;
    i64toi32_i32$2 = i64toi32_i32$4 ? i64toi32_i32$0 : i64toi32_i32$1;
    $4_1 = i64toi32_i32$3;
    $4$hi = i64toi32_i32$2;
    break label$1;
   }
   label$5 : {
    label$6 : {
     label$7 : {
      label$8 : {
       label$9 : {
        label$10 : {
         if (($0_1 | 0) == (4 | 0)) {
          break label$10
         }
         if (($0_1 | 0) == (6 | 0)) {
          break label$9
         }
         $5_1 = $0_1 + -8 | 0;
         if ($5_1 >>> 0 <= 28 >>> 0) {
          break label$7
         }
         if (($0_1 | 0) != (1127 | 0)) {
          break label$6
         }
         $6_1 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
         HEAP32[($2_1 + 120 | 0) >> 2] = $6_1;
         i64toi32_i32$3 = $2_1;
         i64toi32_i32$2 = 0;
         HEAP32[($2_1 + 56 | 0) >> 2] = 4;
         HEAP32[($2_1 + 60 | 0) >> 2] = i64toi32_i32$2;
         i64toi32_i32$3 = $2_1;
         i64toi32_i32$2 = 0;
         HEAP32[($2_1 + 32 | 0) >> 2] = 0;
         HEAP32[($2_1 + 36 | 0) >> 2] = i64toi32_i32$2;
         HEAP32[($2_1 + 112 | 0) >> 2] = $2_1 + 32 | 0;
         HEAP32[($2_1 + 60 | 0) >> 2] = $6_1;
         HEAP32[($2_1 + 116 | 0) >> 2] = $2_1 + 56 | 0;
         $0_1 = HEAP32[$1_1 >> 2] | 0;
         $5_1 = 0;
         i64toi32_i32$4 = 0;
         i64toi32_i32$2 = HEAP32[(i64toi32_i32$4 + 67744 | 0) >> 2] | 0;
         i64toi32_i32$3 = HEAP32[(i64toi32_i32$4 + 67748 | 0) >> 2] | 0;
         i64toi32_i32$3 = $82(i64toi32_i32$2 | 0, i64toi32_i32$3 | 0, $2_1 + 56 | 0 | 0, 1 | 0) | 0;
         i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
         $4_1 = i64toi32_i32$3;
         $4$hi = i64toi32_i32$2;
         HEAP32[($2_1 + 148 | 0) >> 2] = $2_1 + 64 | 0;
         i64toi32_i32$3 = $2_1;
         HEAP32[($2_1 + 32 | 0) >> 2] = $4_1;
         HEAP32[($2_1 + 36 | 0) >> 2] = i64toi32_i32$2;
         $8_1 = $2_1 + 144 | 0;
         label$11 : while (1) {
          if (($5_1 | 0) >= ($6_1 | 0)) {
           break label$1
          }
          label$12 : {
           if (($6_1 | 0) != ($5_1 | 0)) {
            break label$12
           }
           $49();
           abort();
          }
          if (!$0_1) {
           break label$5
          }
          $1_1 = HEAP32[$0_1 >> 2] | 0;
          $7_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
          HEAP32[$8_1 >> 2] = $7_1;
          i64toi32_i32$2 = $4$hi;
          i64toi32_i32$3 = $2_1;
          HEAP32[($2_1 + 64 | 0) >> 2] = $4_1;
          HEAP32[($2_1 + 68 | 0) >> 2] = i64toi32_i32$2;
          $9_1 = $64($4_1 | 0, i64toi32_i32$2 | 0) | 0;
          if (($9_1 | 1 | 0 | 0) != (7 | 0)) {
           break label$8
          }
          i64toi32_i32$2 = $83($1_1 | 0, $7_1 | 0) | 0;
          i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
          $150 = i64toi32_i32$2;
          i64toi32_i32$2 = $2_1;
          HEAP32[($2_1 + 72 | 0) >> 2] = $150;
          HEAP32[($2_1 + 76 | 0) >> 2] = i64toi32_i32$3;
          i64toi32_i32$3 = $4$hi;
          i64toi32_i32$2 = $2_1;
          HEAP32[($2_1 + 80 | 0) >> 2] = $4_1;
          HEAP32[($2_1 + 84 | 0) >> 2] = i64toi32_i32$3;
          fimport$9($2_1 + 80 | 0 | 0, $5_1 | 0, $2_1 + 72 | 0 | 0, $2_1 | 0, $2_1 | 0);
          $0_1 = $0_1 + 8 | 0;
          $5_1 = $5_1 + 1 | 0;
          continue label$11;
         };
        }
        i64toi32_i32$3 = $85(+(+($1_1 | 0))) | 0;
        i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
        $4_1 = i64toi32_i32$3;
        $4$hi = i64toi32_i32$2;
        HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
        global$0 = $2_1 + 160 | 0;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
        return i64toi32_i32$3 | 0;
       }
       i64toi32_i32$3 = $85(+(+(($1_1 << 24 | 0) >> 24 | 0 | 0))) | 0;
       i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$3;
       $4$hi = i64toi32_i32$2;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
       return i64toi32_i32$3 | 0;
      }
      $5_1 = $8(12 | 0) | 0;
      HEAP32[($2_1 + 152 | 0) >> 2] = $5_1;
      HEAP32[($2_1 + 156 | 0) >> 2] = $5_1;
      HEAP32[($5_1 + 8 | 0) >> 2] = $9_1;
      HEAP32[($5_1 + 4 | 0) >> 2] = 14;
      HEAP32[$5_1 >> 2] = 66884;
      $9(3045 | 0, $5_1 | 0);
      abort();
     }
     label$13 : {
      switch ($5_1 | 0) {
      default:
       i64toi32_i32$3 = $85(+(+(($1_1 << 16 | 0) >> 16 | 0 | 0))) | 0;
       i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$3;
       $4$hi = i64toi32_i32$2;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
       return i64toi32_i32$3 | 0;
      case 2:
       i64toi32_i32$3 = $85(+(+($1_1 | 0))) | 0;
       i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$3;
       $4$hi = i64toi32_i32$2;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
       return i64toi32_i32$3 | 0;
      case 4:
       i64toi32_i32$4 = $1_1;
       i64toi32_i32$3 = HEAP32[$1_1 >> 2] | 0;
       i64toi32_i32$2 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
       i64toi32_i32$4 = 0;
       i64toi32_i32$2 = $85(+(+(i64toi32_i32$3 >>> 0) + 4294967296.0 * +(i64toi32_i32$2 | 0))) | 0;
       i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$2;
       $4$hi = i64toi32_i32$3;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
       return i64toi32_i32$2 | 0;
      case 6:
       i64toi32_i32$2 = $85(+(+($1_1 >>> 0))) | 0;
       i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$2;
       $4$hi = i64toi32_i32$3;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
       return i64toi32_i32$2 | 0;
      case 8:
       i64toi32_i32$2 = $85(+(+(($1_1 & 255 | 0) >>> 0))) | 0;
       i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$2;
       $4$hi = i64toi32_i32$3;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
       return i64toi32_i32$2 | 0;
      case 10:
       i64toi32_i32$2 = $85(+(+(($1_1 & 65535 | 0) >>> 0))) | 0;
       i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$2;
       $4$hi = i64toi32_i32$3;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
       return i64toi32_i32$2 | 0;
      case 12:
       i64toi32_i32$2 = $85(+(+($1_1 >>> 0))) | 0;
       i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$2;
       $4$hi = i64toi32_i32$3;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
       return i64toi32_i32$2 | 0;
      case 14:
       i64toi32_i32$4 = $1_1;
       i64toi32_i32$2 = HEAP32[$1_1 >> 2] | 0;
       i64toi32_i32$3 = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
       i64toi32_i32$4 = 0;
       i64toi32_i32$3 = $85(+(+(i64toi32_i32$2 >>> 0) + 4294967296.0 * +(i64toi32_i32$3 >>> 0))) | 0;
       i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$3;
       $4$hi = i64toi32_i32$2;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
       return i64toi32_i32$3 | 0;
      case 16:
       i64toi32_i32$3 = $85(+(+($1_1 >>> 0))) | 0;
       i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$3;
       $4$hi = i64toi32_i32$2;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
       return i64toi32_i32$3 | 0;
      case 28:
       i64toi32_i32$3 = $85(+(+($1_1 >>> 0))) | 0;
       i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$3;
       $4$hi = i64toi32_i32$2;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
       return i64toi32_i32$3 | 0;
      case 18:
       i64toi32_i32$3 = $85(+(+(wasm2js_scratch_store_i32(0, $1_1), wasm2js_scratch_load_f32()))) | 0;
       i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$3;
       $4$hi = i64toi32_i32$2;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
       return i64toi32_i32$3 | 0;
      case 20:
       i64toi32_i32$3 = $85(+(+HEAPF64[$1_1 >> 3])) | 0;
       i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
       $4_1 = i64toi32_i32$3;
       $4$hi = i64toi32_i32$2;
       HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
       global$0 = $2_1 + 160 | 0;
       i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
       return i64toi32_i32$3 | 0;
      case 26:
       break label$13;
      case 1:
      case 3:
      case 5:
      case 7:
      case 9:
      case 11:
      case 13:
      case 15:
      case 17:
      case 19:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 27:
       break label$6;
      };
     }
     fimport$10($2_1 + 48 | 0 | 0, HEAP32[$1_1 >> 2] | 0 | 0, HEAP32[($1_1 + 4 | 0) >> 2] | 0 | 0, $2_1 | 0, $2_1 | 0);
     i64toi32_i32$4 = $2_1;
     i64toi32_i32$3 = HEAP32[($2_1 + 48 | 0) >> 2] | 0;
     i64toi32_i32$2 = HEAP32[($2_1 + 52 | 0) >> 2] | 0;
     i64toi32_i32$2 = $65(i64toi32_i32$3 | 0, i64toi32_i32$2 | 0) | 0;
     i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
     $4_1 = i64toi32_i32$2;
     $4$hi = i64toi32_i32$3;
     HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
     global$0 = $2_1 + 160 | 0;
     i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
     return i64toi32_i32$2 | 0;
    }
    label$26 : {
     if (($0_1 | 0) != (77 | 0)) {
      break label$26
     }
     $5_1 = 0;
     $6_1 = ($0_1 | 0) == (77 | 0) ? $1_1 : 0;
     i64toi32_i32$3 = $2_1;
     i64toi32_i32$2 = 0;
     HEAP32[($2_1 + 40 | 0) >> 2] = 0;
     HEAP32[($2_1 + 44 | 0) >> 2] = i64toi32_i32$2;
     HEAP32[($2_1 + 124 | 0) >> 2] = $2_1 + 40 | 0;
     i64toi32_i32$4 = 0;
     i64toi32_i32$2 = HEAP32[(i64toi32_i32$4 + 67752 | 0) >> 2] | 0;
     i64toi32_i32$3 = HEAP32[(i64toi32_i32$4 + 67756 | 0) >> 2] | 0;
     i64toi32_i32$3 = $82(i64toi32_i32$2 | 0, i64toi32_i32$3 | 0, 0 | 0, 0 | 0) | 0;
     i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
     $4_1 = i64toi32_i32$3;
     $4$hi = i64toi32_i32$2;
     i64toi32_i32$3 = $2_1;
     HEAP32[($2_1 + 40 | 0) >> 2] = $4_1;
     HEAP32[($2_1 + 44 | 0) >> 2] = i64toi32_i32$2;
     $9_1 = $2_1 + 128 | 0;
     $10_1 = $2_1 + 132 | 0;
     $0_1 = 0;
     $1_1 = 0;
     label$27 : while (1) {
      if (!$6_1) {
       break label$5
      }
      $8_1 = HEAPU8[($6_1 + 14 | 0) >> 0] | 0;
      label$28 : {
       label$29 : while (1) {
        label$30 : {
         if (($5_1 & 255 | 0) >>> 0 <= 7 >>> 0) {
          break label$30
         }
         if (!$0_1) {
          break label$5
         }
         $0_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
         $5_1 = 0;
        }
        label$31 : {
         if ($0_1) {
          break label$31
         }
         label$32 : {
          if (!($1_1 >>> $8_1 | 0)) {
           break label$32
          }
          $0_1 = 0;
          $7_1 = 0;
          break label$28;
         }
         $0_1 = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
         HEAP32[$9_1 >> 2] = $0_1;
         $0_1 = $0_1 + Math_imul((((HEAPU8[($6_1 + 13 | 0) >> 0] | 0) + (HEAPU8[($6_1 + 12 | 0) >> 0] | 0) | 0) << 3 | 0) + 12 | 0, $1_1) | 0;
         if (!$0_1) {
          break label$5
         }
         $1_1 = $1_1 + 1 | 0;
        }
        label$33 : {
         $7_1 = $5_1 & 255 | 0;
         if (HEAPU8[($0_1 + $7_1 | 0) >> 0] | 0) {
          break label$33
         }
         $5_1 = $5_1 + 1 | 0;
         continue label$29;
        }
        break label$29;
       };
       $11_1 = HEAPU8[($6_1 + 13 | 0) >> 0] | 0;
       $8_1 = HEAPU8[($6_1 + 12 | 0) >> 0] | 0;
       $30($2_1 + 72 | 0 | 0, (Math_imul($8_1, $7_1) + $0_1 | 0) + 12 | 0 | 0, $8_1 | 0);
       $30($2_1 + 80 | 0 | 0, ((($8_1 << 3 | 0) + Math_imul($11_1, $7_1) | 0) + $0_1 | 0) + 12 | 0 | 0, HEAPU8[($6_1 + 13 | 0) >> 0] | 0 | 0);
       $7_1 = 1;
       $5_1 = $5_1 + 1 | 0;
       $11_1 = HEAP32[($2_1 + 80 | 0) >> 2] | 0;
       $12_1 = HEAP32[($2_1 + 72 | 0) >> 2] | 0;
      }
      $8_1 = HEAP32[($2_1 + 84 | 0) >> 2] | 0;
      HEAP32[$10_1 >> 2] = $8_1;
      if (!$7_1) {
       break label$1
      }
      i64toi32_i32$2 = $4$hi;
      $63($4_1 | 0, i64toi32_i32$2 | 0, $12_1 | 0, HEAP32[($2_1 + 76 | 0) >> 2] | 0 | 0, $11_1 | 0, $8_1 | 0);
      continue label$27;
     };
    }
    $5_1 = $8(8 | 0) | 0;
    HEAP32[($2_1 + 136 | 0) >> 2] = $5_1;
    HEAP32[($2_1 + 140 | 0) >> 2] = $5_1;
    HEAP32[($5_1 + 4 | 0) >> 2] = 22;
    HEAP32[$5_1 >> 2] = 66976;
    $9(34 | 0, $5_1 | 0);
    abort();
   }
   $14();
   abort();
  }
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
  global$0 = $2_1 + 160 | 0;
  i64toi32_i32$2 = $4$hi;
  i64toi32_i32$3 = $4_1;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$3 | 0;
 }
 
 function $84($0_1, $1_1, $1$hi) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $1$hi = $1$hi | 0;
  var $2_1 = 0, $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $5_1 = 0, $3_1 = 0;
  $2_1 = global$0 - 64 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 60 | 0) >> 2] = 0;
  i64toi32_i32$1 = $2_1;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 52 | 0) >> 2] = 2;
  HEAP32[($2_1 + 56 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$1 = $2_1;
  HEAP32[($2_1 + 40 | 0) >> 2] = $1_1;
  HEAP32[($2_1 + 44 | 0) >> 2] = i64toi32_i32$0;
  $3_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1 + 48 | 0;
  HEAP32[($2_1 + 48 | 0) >> 2] = $3_1;
  fimport$11($2_1 + 16 | 0 | 0, $2_1 + 40 | 0 | 0, $2_1 | 0, $2_1 | 0);
  label$1 : {
   $4_1 = HEAP32[($2_1 + 24 | 0) >> 2] | 0;
   if (($4_1 | 0) > (-1 | 0)) {
    break label$1
   }
   $67();
   abort();
  }
  i64toi32_i32$0 = HEAP32[($2_1 + 16 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($2_1 + 20 | 0) >> 2] | 0;
  $1_1 = i64toi32_i32$0;
  $1$hi = i64toi32_i32$1;
  $5_1 = $8($4_1 | 0) | 0;
  HEAP32[($2_1 + 56 | 0) >> 2] = $5_1;
  i64toi32_i32$0 = $2_1;
  HEAP32[($2_1 + 32 | 0) >> 2] = $1_1;
  HEAP32[($2_1 + 36 | 0) >> 2] = i64toi32_i32$1;
  fimport$12($2_1 + 32 | 0 | 0, $5_1 | 0, $4_1 | 0, $4_1 | 0, $2_1 | 0, $2_1 | 0);
  $70($2_1 + 8 | 0 | 0, $5_1 | 0, $4_1 | 0, $4_1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
  $4_1 = HEAP32[($2_1 + 8 | 0) >> 2] | 0;
  HEAP32[($2_1 + 60 | 0) >> 2] = $4_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($2_1 + 12 | 0) >> 2] | 0;
  HEAP32[$0_1 >> 2] = $4_1;
  global$0 = $2_1 + 64 | 0;
 }
 
 function $85($0_1) {
  $0_1 = +$0_1;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $1_1 = 0;
  $1_1 = global$0 - 16 | 0;
  HEAPF64[($1_1 + 8 | 0) >> 3] = $0_1;
  label$1 : {
   if ($0_1 != 0.0 & $0_1 == $0_1 | 0) {
    break label$1
   }
   i64toi32_i32$0 = 2146959360;
   i64toi32_i32$1 = 1;
   i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
   return i64toi32_i32$1 | 0;
  }
  label$2 : {
   if ($0_1 == $0_1) {
    break label$2
   }
   i64toi32_i32$1 = 2146959360;
   i64toi32_i32$0 = 0;
   i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
   return i64toi32_i32$0 | 0;
  }
  HEAPF64[$1_1 >> 3] = $0_1;
  wasm2js_scratch_store_f64(+$0_1);
  i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
  i64toi32_i32$1 = wasm2js_scratch_load_i32(0 | 0) | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $86($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $4_1 = 0, $5_1 = 0, $6_1 = 0;
  $4_1 = 0;
  label$1 : {
   label$2 : {
    if (($1_1 | 0) < ($3_1 | 0)) {
     break label$2
    }
    if ($3_1 >>> 0 > $1_1 >>> 0) {
     break label$1
    }
    $1_1 = 0;
    $4_1 = 1;
    label$3 : while (1) {
     if (($1_1 | 0) >= ($3_1 | 0)) {
      break label$2
     }
     $5_1 = $2_1 + $1_1 | 0;
     $6_1 = $0_1 + $1_1 | 0;
     $1_1 = $1_1 + 1 | 0;
     if ((HEAPU8[$6_1 >> 0] | 0 | 0) == (HEAPU8[$5_1 >> 0] | 0 | 0)) {
      continue label$3
     }
     break label$3;
    };
    $4_1 = 0;
   }
   return $4_1 | 0;
  }
  $67();
  abort();
 }
 
 function $87($0_1, $1_1, $2_1, $3_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  var $5_1 = 0, $4_1 = 0, $6_1 = 0, $7_1 = 0, $8_1 = 0, $9_1 = 0, $10_1 = 0, $13_1 = 0, $15_1 = 0, $16_1 = 0, $12_1 = 0, $14_1 = 0, $11_1 = 0;
  $4_1 = $3_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         if ($4_1 >>> 0 > 1 >>> 0) {
          break label$7
         }
         switch ($3_1 | 0) {
         case 1:
          break label$6;
         default:
          break label$3;
         };
        }
        label$8 : {
         if (($1_1 | 0) != ($3_1 | 0)) {
          break label$8
         }
         $4_1 = 0;
         $1_1 = 0;
         label$9 : while (1) {
          if (($1_1 | 0) >= ($3_1 | 0)) {
           break label$3
          }
          $5_1 = $0_1 + $1_1 | 0;
          $6_1 = $2_1 + $1_1 | 0;
          $1_1 = $1_1 + 1 | 0;
          if ((HEAPU8[$6_1 >> 0] | 0 | 0) == (HEAPU8[$5_1 >> 0] | 0 | 0)) {
           continue label$9
          }
          break label$1;
         };
        }
        if (($1_1 | 0) < ($3_1 | 0)) {
         break label$1
        }
        $7_1 = 0;
        label$10 : {
         label$11 : {
          label$12 : {
           label$13 : {
            label$14 : {
             label$15 : {
              if (($3_1 | 0) > (0 | 0)) {
               break label$15
              }
              if (($1_1 | 0) <= (0 | 0)) {
               break label$14
              }
              $5_1 = ($1_1 - $3_1 | 0) + 1 | 0;
              if (($5_1 | 0) <= (0 | 0)) {
               break label$1
              }
              $8_1 = HEAPU8[($2_1 + 1 | 0) >> 0] | 0;
              $4_1 = 0;
              $6_1 = HEAPU8[$2_1 >> 0] | 0;
              if ((HEAPU8[$0_1 >> 0] | 0 | 0) == ($6_1 & 255 | 0 | 0)) {
               break label$11
              }
              if ($5_1 >>> 0 > $1_1 >>> 0) {
               break label$2
              }
              $4_1 = 0;
              $6_1 = $6_1 & 255 | 0;
              label$16 : while (1) {
               if (($5_1 | 0) == ($4_1 | 0)) {
                break label$1
               }
               if ((HEAPU8[($0_1 + $4_1 | 0) >> 0] | 0 | 0) == ($6_1 | 0)) {
                break label$11
               }
               $4_1 = $4_1 + 1 | 0;
               continue label$16;
              };
             }
             $9_1 = ($1_1 - $3_1 | 0) + 1 | 0;
             $10_1 = (HEAPU8[$2_1 >> 0] | 0) & 255 | 0;
             $11_1 = (HEAPU8[($2_1 + 1 | 0) >> 0] | 0) & 255 | 0;
             $12_1 = 0;
             label$17 : while (1) {
              if (($9_1 | 0) <= ($7_1 | 0)) {
               break label$1
              }
              if ($7_1 >>> 0 >= $1_1 >>> 0) {
               break label$10
              }
              label$18 : {
               label$19 : {
                $6_1 = $0_1 + $7_1 | 0;
                if ((HEAPU8[$6_1 >> 0] | 0 | 0) == ($10_1 | 0)) {
                 break label$19
                }
                if ($9_1 >>> 0 > $1_1 >>> 0) {
                 break label$2
                }
                if ($9_1 >>> 0 < $7_1 >>> 0) {
                 break label$2
                }
                $8_1 = $9_1 - $7_1 | 0;
                $5_1 = 0;
                label$20 : while (1) {
                 if (($5_1 | 0) >= ($8_1 | 0)) {
                  break label$1
                 }
                 label$21 : {
                  if ((HEAPU8[($6_1 + $5_1 | 0) >> 0] | 0 | 0) != ($10_1 | 0)) {
                   break label$21
                  }
                  $13_1 = $7_1 + $5_1 | 0;
                  break label$18;
                 }
                 $5_1 = $5_1 + 1 | 0;
                 continue label$20;
                };
               }
               $13_1 = $7_1;
              }
              $7_1 = $13_1 + 1 | 0;
              if ($7_1 >>> 0 >= $1_1 >>> 0) {
               break label$10
              }
              label$22 : {
               $14_1 = $0_1 + $7_1 | 0;
               if ((HEAPU8[$14_1 >> 0] | 0 | 0) != ($11_1 | 0)) {
                break label$22
               }
               $5_1 = $13_1 + $3_1 | 0;
               if ($5_1 >>> 0 < $13_1 >>> 0) {
                break label$2
               }
               if ($5_1 >>> 0 > $1_1 >>> 0) {
                break label$2
               }
               $6_1 = $0_1 + $13_1 | 0;
               $8_1 = $2_1;
               $5_1 = $4_1;
               label$23 : while (1) {
                label$24 : {
                 if ($5_1) {
                  break label$24
                 }
                 return $13_1 | 0;
                }
                $5_1 = $5_1 + -1 | 0;
                $15_1 = HEAPU8[$8_1 >> 0] | 0;
                $16_1 = HEAPU8[$6_1 >> 0] | 0;
                $6_1 = $6_1 + 1 | 0;
                $8_1 = $8_1 + 1 | 0;
                if (($16_1 | 0) == ($15_1 | 0)) {
                 continue label$23
                }
                break label$23;
               };
              }
              $12_1 = $12_1 + 1 | 0;
              if (($7_1 | 0) >= ($9_1 | 0)) {
               continue label$17
              }
              if (($12_1 | 0) < (($7_1 >> 4 | 0) + 4 | 0 | 0)) {
               continue label$17
              }
              break label$17;
             };
             if ($7_1 >>> 0 > $1_1 >>> 0) {
              break label$2
             }
             $6_1 = 0;
             $5_1 = 0;
             label$25 : {
              label$26 : while (1) {
               if (($3_1 | 0) == ($5_1 | 0)) {
                break label$25
               }
               $6_1 = Math_imul($6_1, 16777619) + (HEAPU8[($2_1 + $5_1 | 0) >> 0] | 0) | 0;
               $5_1 = $5_1 + 1 | 0;
               continue label$26;
              };
             }
             $16_1 = $1_1 - $7_1 | 0;
             $5_1 = 16777619;
             $8_1 = 1;
             $1_1 = $4_1;
             label$27 : while (1) {
              label$28 : {
               if (($1_1 | 0) > (0 | 0)) {
                break label$28
               }
               $5_1 = 0;
               $1_1 = 0;
               label$29 : {
                label$30 : while (1) {
                 if (($3_1 | 0) == ($1_1 | 0)) {
                  break label$29
                 }
                 if (($16_1 | 0) == ($1_1 | 0)) {
                  break label$10
                 }
                 $5_1 = Math_imul($5_1, 16777619) + (HEAPU8[($14_1 + $1_1 | 0) >> 0] | 0) | 0;
                 $1_1 = $1_1 + 1 | 0;
                 continue label$30;
                };
               }
               if (($5_1 | 0) != ($6_1 | 0)) {
                break label$13
               }
               if ($16_1 >>> 0 < $3_1 >>> 0) {
                break label$2
               }
               $15_1 = $14_1;
               $10_1 = $2_1;
               $1_1 = $4_1;
               label$31 : while (1) {
                label$32 : {
                 if ($1_1) {
                  break label$32
                 }
                 $9_1 = 0;
                 break label$12;
                }
                $1_1 = $1_1 + -1 | 0;
                $9_1 = HEAPU8[$10_1 >> 0] | 0;
                $12_1 = HEAPU8[$15_1 >> 0] | 0;
                $15_1 = $15_1 + 1 | 0;
                $10_1 = $10_1 + 1 | 0;
                if (($12_1 | 0) != ($9_1 | 0)) {
                 break label$13
                }
                continue label$31;
               };
              }
              $8_1 = Math_imul($1_1 & 1 | 0 ? $5_1 : 1, $8_1);
              $5_1 = Math_imul($5_1, $5_1);
              $1_1 = $1_1 >>> 1 | 0;
              continue label$27;
             };
            }
            $73();
            abort();
           }
           $10_1 = ($0_1 + $13_1 | 0) + 2 | 0;
           label$33 : while (1) {
            if (($4_1 | 0) >= ($16_1 | 0)) {
             break label$1
            }
            if ($4_1 >>> 0 >= $16_1 >>> 0) {
             break label$10
            }
            $1_1 = $4_1 - $3_1 | 0;
            if ($1_1 >>> 0 >= $16_1 >>> 0) {
             break label$10
            }
            $0_1 = $14_1 + $4_1 | 0;
            $4_1 = $4_1 + 1 | 0;
            label$34 : {
             $5_1 = (Math_imul($5_1, 16777619) + (HEAPU8[$0_1 >> 0] | 0) | 0) - Math_imul($8_1, HEAPU8[($14_1 + $1_1 | 0) >> 0] | 0) | 0;
             if (($5_1 | 0) != ($6_1 | 0)) {
              break label$34
             }
             if ($4_1 >>> 0 < $3_1 >>> 0) {
              break label$2
             }
             $9_1 = $4_1 - $3_1 | 0;
             $1_1 = 0;
             label$35 : {
              label$36 : while (1) {
               if (($1_1 | 0) >= ($3_1 | 0)) {
                break label$35
               }
               $0_1 = $2_1 + $1_1 | 0;
               $15_1 = $10_1 + $1_1 | 0;
               $1_1 = $1_1 + 1 | 0;
               if ((HEAPU8[$15_1 >> 0] | 0 | 0) != (HEAPU8[$0_1 >> 0] | 0 | 0)) {
                break label$34
               }
               continue label$36;
              };
             }
             $4_1 = -1;
             if (($9_1 | 0) >= (0 | 0)) {
              break label$12
             }
             break label$3;
            }
            $10_1 = $10_1 + 1 | 0;
            continue label$33;
           };
          }
          return $9_1 + $7_1 | 0 | 0;
         }
         $5_1 = $4_1 + 1 | 0;
         if ($5_1 >>> 0 >= $1_1 >>> 0) {
          break label$10
         }
         if ((HEAPU8[($0_1 + $5_1 | 0) >> 0] | 0 | 0) == ($8_1 & 255 | 0 | 0)) {
          break label$5
         }
         break label$4;
        }
        $49();
        abort();
       }
       $4_1 = 0;
       $3_1 = (HEAPU8[$2_1 >> 0] | 0) & 255 | 0;
       label$37 : while (1) {
        if (($4_1 | 0) >= ($1_1 | 0)) {
         break label$1
        }
        if ((HEAPU8[($0_1 + $4_1 | 0) >> 0] | 0 | 0) == ($3_1 | 0)) {
         break label$3
        }
        $4_1 = $4_1 + 1 | 0;
        continue label$37;
       };
      }
      $5_1 = $4_1 + $3_1 | 0;
      if ($5_1 >>> 0 < $4_1 >>> 0) {
       break label$2
      }
      if ($5_1 >>> 0 > $1_1 >>> 0) {
       break label$2
      }
      $6_1 = $0_1 + $4_1 | 0;
      $1_1 = 0;
      label$38 : while (1) {
       if (($1_1 | 0) >= ($3_1 | 0)) {
        break label$3
       }
       $0_1 = $2_1 + $1_1 | 0;
       $5_1 = $6_1 + $1_1 | 0;
       $1_1 = $1_1 + 1 | 0;
       if ((HEAPU8[$5_1 >> 0] | 0 | 0) == (HEAPU8[$0_1 >> 0] | 0 | 0)) {
        continue label$38
       }
       break label$38;
      };
     }
     $72();
     abort();
    }
    return $4_1 | 0;
   }
   $67();
   abort();
  }
  return -1 | 0;
 }
 
 function $88($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $6_1 = 0, $13_1 = 0, $9_1 = 0, $12_1 = 0, $8_1 = 0, $5_1 = 0, $14_1 = 0, $10_1 = 0, $16_1 = 0, $15_1 = 0, i64toi32_i32$0 = 0, $7_1 = 0, $11_1 = 0;
  $5_1 = global$0 - 32 | 0;
  global$0 = $5_1;
  $6_1 = 0;
  HEAP32[($5_1 + 28 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 20 | 0) >> 2] = 0;
  HEAP32[($5_1 + 24 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 12 | 0) >> 2] = 4;
  HEAP32[($5_1 + 16 | 0) >> 2] = i64toi32_i32$0;
  $7_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $5_1 + 8 | 0;
  HEAP32[($5_1 + 8 | 0) >> 2] = $7_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       if ($4_1 >>> 0 > 1 >>> 0) {
        break label$5
       }
       label$6 : {
        switch ($4_1 | 0) {
        default:
         $3_1 = 0;
         $8_1 = 0;
         $6_1 = 0;
         label$8 : while (1) {
          label$9 : {
           label$10 : {
            label$11 : {
             label$12 : {
              if (($6_1 | 0) >= ($2_1 | 0)) {
               break label$12
              }
              if ($6_1 >>> 0 >= $2_1 >>> 0) {
               break label$1
              }
              $4_1 = HEAP8[($1_1 + $6_1 | 0) >> 0] | 0;
              if (($4_1 | 0) > (-1 | 0)) {
               break label$10
              }
              $9_1 = $4_1 & 255 | 0;
              $4_1 = HEAPU8[($9_1 + 66128 | 0) >> 0] | 0;
              if (($4_1 | 0) != (241 | 0)) {
               break label$11
              }
              break label$10;
             }
             $9_1 = 0;
             if (($8_1 | 0) < (0 | 0)) {
              break label$2
             }
             $10_1 = $8($3_1 | 0) | 0;
             HEAP32[(($5_1 + 8 | 0) + 8 | 0) >> 2] = $10_1;
             HEAP32[(($5_1 + 8 | 0) + 12 | 0) >> 2] = $10_1;
             $11_1 = $8_1 + -1 | 0;
             $4_1 = $10_1;
             label$13 : while (1) {
              label$14 : {
               label$15 : {
                label$16 : {
                 if (($9_1 | 0) >= ($11_1 | 0)) {
                  break label$16
                 }
                 $12_1 = 65533;
                 label$17 : {
                  if (($2_1 | 0) >= (1 | 0)) {
                   break label$17
                  }
                  $6_1 = 0;
                  break label$14;
                 }
                 $13_1 = HEAPU8[$1_1 >> 0] | 0;
                 $14_1 = HEAPU8[($13_1 + 66128 | 0) >> 0] | 0;
                 if (($13_1 + -194 | 0) >>> 0 <= 50 >>> 0) {
                  break label$15
                 }
                 $6_1 = 1;
                 $12_1 = $14_1 & 1 | 0 ? 65533 : $13_1;
                 break label$14;
                }
                label$18 : {
                 if (($8_1 | 0) <= (0 | 0)) {
                  break label$18
                 }
                 $6_1 = $10_1 + $3_1 | 0;
                 HEAP32[($6_1 + -4 | 0) >> 2] = $2_1;
                 HEAP32[($6_1 + -8 | 0) >> 2] = $1_1;
                }
                $13_1 = $8_1;
                break label$3;
               }
               $6_1 = ($14_1 >>> 3 | 0) & 30 | 0;
               $15_1 = HEAPU8[($6_1 + 66385 | 0) >> 0] | 0;
               HEAP8[($5_1 + 1 | 0) >> 0] = $15_1;
               $16_1 = HEAPU8[($6_1 + 66384 | 0) >> 0] | 0;
               HEAP8[$5_1 >> 0] = $16_1;
               $6_1 = 1;
               if (($2_1 | 0) < ($14_1 & 7 | 0 | 0)) {
                break label$14
               }
               if ($2_1 >>> 0 < 2 >>> 0) {
                break label$1
               }
               $14_1 = HEAPU8[($1_1 + 1 | 0) >> 0] | 0;
               if ($14_1 >>> 0 < ($16_1 & 255 | 0) >>> 0) {
                break label$14
               }
               if (($15_1 & 255 | 0) >>> 0 < $14_1 >>> 0) {
                break label$14
               }
               label$19 : {
                if (($13_1 + -224 | 0) >>> 0 < 21 >>> 0) {
                 break label$19
                }
                $12_1 = ($13_1 & 31 | 0) << 6 | 0 | ($14_1 & 63 | 0) | 0;
                $6_1 = 2;
                break label$14;
               }
               if ($2_1 >>> 0 < 3 >>> 0) {
                break label$1
               }
               $16_1 = HEAP8[($1_1 + 2 | 0) >> 0] | 0;
               if (($16_1 | 0) > (-1 | 0)) {
                break label$14
               }
               if (($16_1 & 255 | 0) >>> 0 > 191 >>> 0) {
                break label$14
               }
               label$20 : {
                if (($13_1 + -240 | 0) >>> 0 < 5 >>> 0) {
                 break label$20
                }
                $12_1 = ($14_1 & 63 | 0) << 6 | 0 | (($13_1 & 15 | 0) << 12 | 0) | 0 | ($16_1 & 63 | 0) | 0;
                $6_1 = 3;
                break label$14;
               }
               if ($2_1 >>> 0 < 4 >>> 0) {
                break label$1
               }
               $15_1 = HEAP8[($1_1 + 3 | 0) >> 0] | 0;
               if (($15_1 | 0) > (-1 | 0)) {
                break label$14
               }
               if (($15_1 & 255 | 0) >>> 0 >= 192 >>> 0) {
                break label$14
               }
               $12_1 = ($14_1 & 63 | 0) << 12 | 0 | (($13_1 & 7 | 0) << 18 | 0) | 0 | (($16_1 & 63 | 0) << 6 | 0) | 0 | ($15_1 & 63 | 0) | 0;
               $6_1 = 4;
              }
              if (($8_1 | 0) == ($9_1 | 0)) {
               break label$1
              }
              if ($2_1 >>> 0 < $6_1 >>> 0) {
               break label$2
              }
              HEAP32[$4_1 >> 2] = $1_1;
              $13_1 = $4_1 + 4 | 0;
              HEAP32[$13_1 >> 2] = $6_1;
              label$21 : {
               if (($12_1 | 0) != (65533 | 0)) {
                break label$21
               }
               HEAP32[$4_1 >> 2] = 67151;
               HEAP32[$13_1 >> 2] = 3;
              }
              $2_1 = $2_1 - $6_1 | 0;
              $1_1 = $1_1 + $6_1 | 0;
              $4_1 = $4_1 + 8 | 0;
              $9_1 = $9_1 + 1 | 0;
              continue label$13;
             };
            }
            $12_1 = $4_1 & 7 | 0;
            if (($6_1 + $12_1 | 0 | 0) > ($2_1 | 0)) {
             break label$10
            }
            $4_1 = ($4_1 >>> 3 | 0) & 30 | 0;
            $14_1 = HEAPU8[($4_1 + 66385 | 0) >> 0] | 0;
            HEAP8[($5_1 + 1 | 0) >> 0] = $14_1;
            $4_1 = HEAPU8[($4_1 + 66384 | 0) >> 0] | 0;
            HEAP8[$5_1 >> 0] = $4_1;
            $13_1 = $6_1 + 1 | 0;
            if ($13_1 >>> 0 >= $2_1 >>> 0) {
             break label$1
            }
            label$22 : {
             label$23 : {
              $13_1 = HEAPU8[($1_1 + $13_1 | 0) >> 0] | 0;
              if ($13_1 >>> 0 < ($4_1 & 255 | 0) >>> 0) {
               break label$23
              }
              if (($14_1 & 255 | 0) >>> 0 < $13_1 >>> 0) {
               break label$23
              }
              $4_1 = 2;
              if (($9_1 + -194 | 0) >>> 0 < 30 >>> 0) {
               break label$22
              }
              $4_1 = $6_1 + 2 | 0;
              if ($4_1 >>> 0 >= $2_1 >>> 0) {
               break label$1
              }
              $13_1 = HEAP8[($1_1 + $4_1 | 0) >> 0] | 0;
              if (($13_1 | 0) > (-1 | 0)) {
               break label$23
              }
              $4_1 = 1;
              if (($13_1 & 255 | 0) >>> 0 > 191 >>> 0) {
               break label$22
              }
              $4_1 = 3;
              if (($9_1 & 240 | 0 | 0) == (224 | 0)) {
               break label$22
              }
              $4_1 = $6_1 + 3 | 0;
              if ($4_1 >>> 0 >= $2_1 >>> 0) {
               break label$1
              }
              $4_1 = HEAPU8[($1_1 + $4_1 | 0) >> 0] | 0;
              $4_1 = (($4_1 << 24 | 0) >> 24 | 0 | 0) > (-1 | 0) ? 1 : $4_1 >>> 0 > 191 >>> 0 ? 1 : $12_1;
              break label$22;
             }
             $4_1 = 1;
            }
            $6_1 = $4_1 + $6_1 | 0;
            break label$9;
           }
           $6_1 = $6_1 + 1 | 0;
          }
          $3_1 = $3_1 + 8 | 0;
          $8_1 = $8_1 + 1 | 0;
          continue label$8;
         };
        case 1:
         break label$6;
        };
       }
       $6_1 = 0;
       $8_1 = (HEAPU8[$3_1 >> 0] | 0) & 255 | 0;
       $9_1 = 0;
       label$24 : while (1) {
        if (($9_1 | 0) >= ($2_1 | 0)) {
         break label$4
        }
        $6_1 = $6_1 + ((HEAPU8[($1_1 + $9_1 | 0) >> 0] | 0 | 0) == ($8_1 | 0)) | 0;
        $9_1 = $9_1 + 1 | 0;
        continue label$24;
       };
      }
      $8_1 = $1_1;
      $9_1 = $2_1;
      label$25 : while (1) {
       $12_1 = $87($8_1 | 0, $9_1 | 0, $3_1 | 0, $4_1 | 0) | 0;
       if (($12_1 | 0) == (-1 | 0)) {
        break label$4
       }
       $12_1 = $12_1 + $4_1 | 0;
       if ($9_1 >>> 0 < $12_1 >>> 0) {
        break label$2
       }
       $9_1 = $9_1 - $12_1 | 0;
       $8_1 = $8_1 + $12_1 | 0;
       $6_1 = $6_1 + 1 | 0;
       continue label$25;
      };
     }
     $13_1 = $6_1 + 1 | 0;
     if (($13_1 | 0) < (0 | 0)) {
      break label$2
     }
     $10_1 = $8($13_1 << 3 | 0 | 0) | 0;
     HEAP32[($5_1 + 24 | 0) >> 2] = $10_1;
     $8_1 = $10_1;
     $9_1 = 0;
     label$26 : {
      label$27 : while (1) {
       if (($9_1 | 0) >= ($6_1 | 0)) {
        break label$26
       }
       $12_1 = $87($1_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0) | 0;
       if (($12_1 | 0) < (0 | 0)) {
        break label$26
       }
       if (($13_1 | 0) == ($9_1 | 0)) {
        break label$1
       }
       if ($12_1 >>> 0 > $2_1 >>> 0) {
        break label$2
       }
       HEAP32[$8_1 >> 2] = $1_1;
       HEAP32[($8_1 + 4 | 0) >> 2] = $12_1;
       $12_1 = $12_1 + $4_1 | 0;
       if ($2_1 >>> 0 < $12_1 >>> 0) {
        break label$2
       }
       $2_1 = $2_1 - $12_1 | 0;
       $1_1 = $1_1 + $12_1 | 0;
       $8_1 = $8_1 + 8 | 0;
       $9_1 = $9_1 + 1 | 0;
       continue label$27;
      };
     }
     if ($9_1 >>> 0 >= $13_1 >>> 0) {
      break label$1
     }
     HEAP32[$8_1 >> 2] = $1_1;
     HEAP32[($8_1 + 4 | 0) >> 2] = $2_1;
     $8_1 = $9_1 + 1 | 0;
    }
    HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
    HEAP32[($5_1 + 28 | 0) >> 2] = $10_1;
    HEAP32[($0_1 + 8 | 0) >> 2] = $13_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = $8_1;
    HEAP32[$0_1 >> 2] = $10_1;
    global$0 = $5_1 + 32 | 0;
    return;
   }
   $67();
   abort();
  }
  $49();
  abort();
 }
 
 function $89($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function $90($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $4_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, $5_1 = 0, $19_1 = 0, i64toi32_i32$3 = 0, $20_1 = 0, i64toi32_i32$6 = 0, i64toi32_i32$5 = 0, $22_1 = 0, $21_1 = 0, $17_1 = 0, $9_1 = 0, $9$hi = 0, $18_1 = 0, $15_1 = 0, $16_1 = 0, $2_1 = 0, $10_1 = 0, $10$hi = 0, $6_1 = 0, $37_1 = 0, i64toi32_i32$2 = 0.0, $11_1 = 0, $11$hi = 0, $14_1 = 0, $28_1 = 0, $13_1 = 0, $8_1 = 0.0, $63_1 = 0, $64_1 = 0, $65_1 = 0, $66_1 = 0, $67_1 = 0, $68_1 = 0, $69_1 = 0, $70_1 = 0, $71_1 = 0, $72_1 = 0, $73_1 = 0, $74_1 = 0, $75_1 = 0, $76_1 = 0, $77_1 = 0, $78_1 = 0, $3_1 = 0, $24_1 = 0, $25_1 = 0, $26_1 = 0, $7_1 = 0, $79_1 = 0, $80_1 = 0, $81_1 = 0, $82_1 = 0, $83_1 = 0, $84_1 = 0, $85_1 = 0, $86_1 = 0, $87_1 = 0, $88_1 = 0, $89_1 = 0, $90_1 = 0, $91_1 = 0, $92_1 = 0, $93_1 = 0, $94_1 = 0, $95_1 = 0, $96_1 = 0, $97_1 = 0, $98_1 = 0, $99_1 = 0, $23_1 = 0, $27_1 = 0, $100_1 = 0, $154$hi = 0, $12_1 = 0, $12$hi = 0, $177 = 0, $177$hi = 0, $180$hi = 0, $205 = 0, $205$hi = 0, $207 = 0, $207$hi = 0, $229 = 0, $229$hi = 0, $230 = 0, $230$hi = 0, $244$hi = 0, $382 = 0, $29_1 = 0, $30_1 = 0, $31_1 = 0, $32_1 = 0, $33_1 = 0, $34_1 = 0, $35_1 = 0, $36_1 = 0;
  $1_1 = global$0 - 976 | 0;
  global$0 = $1_1;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 680 | 0) >> 2] = 0;
  HEAP32[($1_1 + 684 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 672 | 0) >> 2] = 0;
  HEAP32[($1_1 + 676 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 664 | 0) >> 2] = 0;
  HEAP32[($1_1 + 668 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 656 | 0) >> 2] = 0;
  HEAP32[($1_1 + 660 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 648 | 0) >> 2] = 0;
  HEAP32[($1_1 + 652 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 640 | 0) >> 2] = 0;
  HEAP32[($1_1 + 644 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 632 | 0) >> 2] = 0;
  HEAP32[($1_1 + 636 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 624 | 0) >> 2] = 0;
  HEAP32[($1_1 + 628 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 616 | 0) >> 2] = 0;
  HEAP32[($1_1 + 620 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 608 | 0) >> 2] = 0;
  HEAP32[($1_1 + 612 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 600 | 0) >> 2] = 0;
  HEAP32[($1_1 + 604 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 592 | 0) >> 2] = 0;
  HEAP32[($1_1 + 596 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 584 | 0) >> 2] = 0;
  HEAP32[($1_1 + 588 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 576 | 0) >> 2] = 0;
  HEAP32[($1_1 + 580 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 568 | 0) >> 2] = 0;
  HEAP32[($1_1 + 572 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 560 | 0) >> 2] = 0;
  HEAP32[($1_1 + 564 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 552 | 0) >> 2] = 0;
  HEAP32[($1_1 + 556 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 544 | 0) >> 2] = 0;
  HEAP32[($1_1 + 548 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 536 | 0) >> 2] = 0;
  HEAP32[($1_1 + 540 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 528 | 0) >> 2] = 0;
  HEAP32[($1_1 + 532 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 520 | 0) >> 2] = 0;
  HEAP32[($1_1 + 524 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 512 | 0) >> 2] = 0;
  HEAP32[($1_1 + 516 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 504 | 0) >> 2] = 0;
  HEAP32[($1_1 + 508 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 496 | 0) >> 2] = 0;
  HEAP32[($1_1 + 500 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 488 | 0) >> 2] = 0;
  HEAP32[($1_1 + 492 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 480 | 0) >> 2] = 0;
  HEAP32[($1_1 + 484 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 472 | 0) >> 2] = 0;
  HEAP32[($1_1 + 476 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 464 | 0) >> 2] = 0;
  HEAP32[($1_1 + 468 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 456 | 0) >> 2] = 0;
  HEAP32[($1_1 + 460 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 448 | 0) >> 2] = 0;
  HEAP32[($1_1 + 452 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 440 | 0) >> 2] = 0;
  HEAP32[($1_1 + 444 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 133;
  HEAP32[($1_1 + 432 | 0) >> 2] = 0;
  HEAP32[($1_1 + 436 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 936 | 0) >> 2] = 0;
  HEAP32[($1_1 + 940 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 928 | 0) >> 2] = 0;
  HEAP32[($1_1 + 932 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 920 | 0) >> 2] = 0;
  HEAP32[($1_1 + 924 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 912 | 0) >> 2] = 0;
  HEAP32[($1_1 + 916 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 904 | 0) >> 2] = 0;
  HEAP32[($1_1 + 908 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 896 | 0) >> 2] = 0;
  HEAP32[($1_1 + 900 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 888 | 0) >> 2] = 0;
  HEAP32[($1_1 + 892 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 880 | 0) >> 2] = 0;
  HEAP32[($1_1 + 884 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 872 | 0) >> 2] = 0;
  HEAP32[($1_1 + 876 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 864 | 0) >> 2] = 0;
  HEAP32[($1_1 + 868 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 856 | 0) >> 2] = 0;
  HEAP32[($1_1 + 860 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 848 | 0) >> 2] = 0;
  HEAP32[($1_1 + 852 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 840 | 0) >> 2] = 0;
  HEAP32[($1_1 + 844 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 832 | 0) >> 2] = 0;
  HEAP32[($1_1 + 836 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 824 | 0) >> 2] = 0;
  HEAP32[($1_1 + 828 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 816 | 0) >> 2] = 0;
  HEAP32[($1_1 + 820 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 808 | 0) >> 2] = 0;
  HEAP32[($1_1 + 812 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 800 | 0) >> 2] = 0;
  HEAP32[($1_1 + 804 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 792 | 0) >> 2] = 0;
  HEAP32[($1_1 + 796 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 784 | 0) >> 2] = 0;
  HEAP32[($1_1 + 788 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 776 | 0) >> 2] = 0;
  HEAP32[($1_1 + 780 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 768 | 0) >> 2] = 0;
  HEAP32[($1_1 + 772 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 760 | 0) >> 2] = 0;
  HEAP32[($1_1 + 764 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 752 | 0) >> 2] = 0;
  HEAP32[($1_1 + 756 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 744 | 0) >> 2] = 0;
  HEAP32[($1_1 + 748 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 736 | 0) >> 2] = 0;
  HEAP32[($1_1 + 740 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 728 | 0) >> 2] = 0;
  HEAP32[($1_1 + 732 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 720 | 0) >> 2] = 0;
  HEAP32[($1_1 + 724 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 712 | 0) >> 2] = 0;
  HEAP32[($1_1 + 716 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 704 | 0) >> 2] = 0;
  HEAP32[($1_1 + 708 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 696 | 0) >> 2] = 0;
  HEAP32[($1_1 + 700 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 688 | 0) >> 2] = 0;
  HEAP32[($1_1 + 692 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 968 | 0) >> 2] = 0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 960 | 0) >> 2] = 0;
  HEAP32[($1_1 + 964 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 952 | 0) >> 2] = 0;
  HEAP32[($1_1 + 956 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1_1;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 944 | 0) >> 2] = 0;
  HEAP32[($1_1 + 948 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 900 | 0) >> 2] = $0_1;
  $2_1 = $0_1 + 152 | 0;
  HEAP32[($1_1 + 536 | 0) >> 2] = $2_1;
  HEAP32[($1_1 + 480 | 0) >> 2] = $0_1 + 160 | 0;
  $3_1 = $0_1 + 168 | 0;
  HEAP32[($1_1 + 464 | 0) >> 2] = $3_1;
  $4_1 = $0_1 + 96 | 0;
  HEAP32[($1_1 + 448 | 0) >> 2] = $4_1;
  $5_1 = $0_1 + 120 | 0;
  HEAP32[($1_1 + 444 | 0) >> 2] = $5_1;
  $6_1 = $0_1 + 144 | 0;
  HEAP32[($1_1 + 496 | 0) >> 2] = $6_1;
  HEAP32[($1_1 + 440 | 0) >> 2] = $0_1 + 24 | 0;
  $7_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 432 | 0;
  HEAP32[($1_1 + 432 | 0) >> 2] = $7_1;
  label$1 : {
   label$2 : {
    $8_1 = +fimport$3();
    if (!(Math_abs($8_1) < 9223372036854775808.0)) {
     break label$2
    }
    i64toi32_i32$2 = $8_1;
    if (Math_abs(i64toi32_i32$2) >= 1.0) {
     if (i64toi32_i32$2 > 0.0) {
      $79_1 = ~~Math_min(Math_floor(i64toi32_i32$2 / 4294967296.0), 4294967296.0 - 1.0) >>> 0
     } else {
      $79_1 = ~~Math_ceil((i64toi32_i32$2 - +(~~i64toi32_i32$2 >>> 0 >>> 0)) / 4294967296.0) >>> 0
     }
     $80_1 = $79_1;
    } else {
     $80_1 = 0
    }
    i64toi32_i32$0 = $80_1;
    $9_1 = ~~i64toi32_i32$2 >>> 0;
    $9$hi = i64toi32_i32$0;
    break label$1;
   }
   i64toi32_i32$0 = -2147483648;
   $9_1 = 0;
   $9$hi = i64toi32_i32$0;
  }
  i64toi32_i32$0 = $9$hi;
  i64toi32_i32$1 = 0;
  i64toi32_i32$1 = __wasm_i64_mul($9_1 | 0, i64toi32_i32$0 | 0, 1e6 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $10_1 = i64toi32_i32$1;
  $10$hi = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$1 = __wasm_i64_sdiv($10_1 | 0, i64toi32_i32$0 | 0, 1e9 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $9_1 = i64toi32_i32$1;
  $9$hi = i64toi32_i32$0;
  i64toi32_i32$1 = -1;
  i64toi32_i32$1 = __wasm_i64_mul($9_1 | 0, i64toi32_i32$0 | 0, -1e9 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $154$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $10$hi;
  i64toi32_i32$0 = $154$hi;
  i64toi32_i32$3 = i64toi32_i32$1;
  i64toi32_i32$1 = $10$hi;
  i64toi32_i32$4 = $10_1;
  i64toi32_i32$5 = i64toi32_i32$3 + i64toi32_i32$4 | 0;
  i64toi32_i32$6 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
  if (i64toi32_i32$5 >>> 0 < i64toi32_i32$4 >>> 0) {
   i64toi32_i32$6 = i64toi32_i32$6 + 1 | 0
  }
  $11_1 = i64toi32_i32$5;
  $11$hi = i64toi32_i32$6;
  label$3 : {
   label$4 : {
    i64toi32_i32$6 = $9$hi;
    i64toi32_i32$0 = $9_1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$4 = -1612679296;
    i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$4 | 0;
    i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$3 | 0;
    if (i64toi32_i32$1 >>> 0 < i64toi32_i32$4 >>> 0) {
     i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
    }
    $12_1 = i64toi32_i32$1;
    $12$hi = i64toi32_i32$5;
    i64toi32_i32$6 = i64toi32_i32$1;
    i64toi32_i32$0 = 2;
    i64toi32_i32$4 = 0;
    if (i64toi32_i32$5 >>> 0 < i64toi32_i32$0 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 < i64toi32_i32$4 >>> 0 | 0) | 0) {
     break label$4
    }
    i64toi32_i32$5 = $5_1;
    i64toi32_i32$6 = 0;
    HEAP32[$5_1 >> 2] = 0;
    HEAP32[($5_1 + 4 | 0) >> 2] = i64toi32_i32$6;
    HEAP32[($5_1 + 16 | 0) >> 2] = 0;
    i64toi32_i32$5 = $5_1 + 8 | 0;
    i64toi32_i32$6 = 0;
    HEAP32[i64toi32_i32$5 >> 2] = 0;
    HEAP32[(i64toi32_i32$5 + 4 | 0) >> 2] = i64toi32_i32$6;
    i64toi32_i32$6 = $9$hi;
    i64toi32_i32$4 = $9_1;
    i64toi32_i32$5 = 14;
    i64toi32_i32$0 = 2006054656;
    i64toi32_i32$3 = i64toi32_i32$4 + i64toi32_i32$0 | 0;
    i64toi32_i32$1 = i64toi32_i32$6 + i64toi32_i32$5 | 0;
    if (i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0) {
     i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
    }
    $10_1 = i64toi32_i32$3;
    $10$hi = i64toi32_i32$1;
    i64toi32_i32$1 = $11$hi;
    i64toi32_i32$6 = $11_1;
    i64toi32_i32$4 = 0;
    i64toi32_i32$0 = 32;
    i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$4 = i64toi32_i32$6 << i64toi32_i32$5 | 0;
     $81_1 = 0;
    } else {
     i64toi32_i32$4 = ((1 << i64toi32_i32$5 | 0) - 1 | 0) & (i64toi32_i32$6 >>> (32 - i64toi32_i32$5 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$5 | 0) | 0;
     $81_1 = i64toi32_i32$6 << i64toi32_i32$5 | 0;
    }
    i64toi32_i32$1 = $81_1;
    i64toi32_i32$6 = 0;
    i64toi32_i32$0 = 32;
    i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$6 = i64toi32_i32$4 >> 31 | 0;
     $82_1 = i64toi32_i32$4 >> i64toi32_i32$5 | 0;
    } else {
     i64toi32_i32$6 = i64toi32_i32$4 >> i64toi32_i32$5 | 0;
     $82_1 = (((1 << i64toi32_i32$5 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$5 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$5 | 0) | 0;
    }
    $9_1 = $82_1;
    $9$hi = i64toi32_i32$6;
    break label$3;
   }
   i64toi32_i32$1 = $4_1;
   i64toi32_i32$6 = 0;
   HEAP32[$4_1 >> 2] = 0;
   HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$6;
   HEAP32[($4_1 + 16 | 0) >> 2] = 0;
   i64toi32_i32$1 = $4_1 + 8 | 0;
   i64toi32_i32$6 = 0;
   HEAP32[i64toi32_i32$1 >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$6;
   i64toi32_i32$6 = $12$hi;
   i64toi32_i32$4 = $12_1;
   i64toi32_i32$1 = 0;
   i64toi32_i32$0 = 30;
   i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = i64toi32_i32$4 << i64toi32_i32$5 | 0;
    $83_1 = 0;
   } else {
    i64toi32_i32$1 = ((1 << i64toi32_i32$5 | 0) - 1 | 0) & (i64toi32_i32$4 >>> (32 - i64toi32_i32$5 | 0) | 0) | 0 | (i64toi32_i32$6 << i64toi32_i32$5 | 0) | 0;
    $83_1 = i64toi32_i32$4 << i64toi32_i32$5 | 0;
   }
   $177 = $83_1;
   $177$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $11$hi;
   i64toi32_i32$6 = $11_1;
   i64toi32_i32$4 = 0;
   i64toi32_i32$0 = 32;
   i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
    i64toi32_i32$4 = i64toi32_i32$6 << i64toi32_i32$5 | 0;
    $84_1 = 0;
   } else {
    i64toi32_i32$4 = ((1 << i64toi32_i32$5 | 0) - 1 | 0) & (i64toi32_i32$6 >>> (32 - i64toi32_i32$5 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$5 | 0) | 0;
    $84_1 = i64toi32_i32$6 << i64toi32_i32$5 | 0;
   }
   i64toi32_i32$1 = $84_1;
   i64toi32_i32$6 = 0;
   i64toi32_i32$0 = 32;
   i64toi32_i32$5 = i64toi32_i32$0 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
    i64toi32_i32$6 = i64toi32_i32$4 >> 31 | 0;
    $85_1 = i64toi32_i32$4 >> i64toi32_i32$5 | 0;
   } else {
    i64toi32_i32$6 = i64toi32_i32$4 >> i64toi32_i32$5 | 0;
    $85_1 = (((1 << i64toi32_i32$5 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$5 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$5 | 0) | 0;
   }
   $180$hi = i64toi32_i32$6;
   i64toi32_i32$6 = $177$hi;
   i64toi32_i32$4 = $177;
   i64toi32_i32$1 = $180$hi;
   i64toi32_i32$0 = $85_1;
   i64toi32_i32$1 = i64toi32_i32$6 | i64toi32_i32$1 | 0;
   i64toi32_i32$6 = i64toi32_i32$4 | i64toi32_i32$0 | 0;
   i64toi32_i32$4 = -2147483648;
   i64toi32_i32$0 = 0;
   i64toi32_i32$4 = i64toi32_i32$1 | i64toi32_i32$4 | 0;
   $9_1 = i64toi32_i32$6 | i64toi32_i32$0 | 0;
   $9$hi = i64toi32_i32$4;
   i64toi32_i32$4 = $10$hi;
   i64toi32_i32$1 = $10_1;
   i64toi32_i32$6 = 0;
   i64toi32_i32$0 = 1;
   i64toi32_i32$6 = i64toi32_i32$4 | i64toi32_i32$6 | 0;
   $10_1 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
   $10$hi = i64toi32_i32$6;
  }
  $4_1 = $0_1 + 88 | 0;
  i64toi32_i32$1 = $4_1;
  i64toi32_i32$6 = 0;
  HEAP32[$4_1 >> 2] = 0;
  HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$6;
  i64toi32_i32$6 = $9$hi;
  i64toi32_i32$1 = $0_1;
  HEAP32[(i64toi32_i32$1 + 72 | 0) >> 2] = $9_1;
  HEAP32[(i64toi32_i32$1 + 76 | 0) >> 2] = i64toi32_i32$6;
  HEAP32[($1_1 + 452 | 0) >> 2] = i64toi32_i32$1 + 72 | 0;
  i64toi32_i32$6 = $10$hi;
  i64toi32_i32$1 = i64toi32_i32$1 + 80 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $10_1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$6;
  HEAP32[$4_1 >> 2] = 68504;
  label$5 : {
   i64toi32_i32$6 = $9$hi;
   i64toi32_i32$4 = $9_1;
   i64toi32_i32$1 = -1;
   i64toi32_i32$0 = -1;
   if ((i64toi32_i32$6 | 0) > (i64toi32_i32$1 | 0)) {
    $86_1 = 1
   } else {
    if ((i64toi32_i32$6 | 0) >= (i64toi32_i32$1 | 0)) {
     if (i64toi32_i32$4 >>> 0 <= i64toi32_i32$0 >>> 0) {
      $87_1 = 0
     } else {
      $87_1 = 1
     }
     $88_1 = $87_1;
    } else {
     $88_1 = 0
    }
    $86_1 = $88_1;
   }
   if ($86_1) {
    break label$5
   }
   i64toi32_i32$4 = $9$hi;
   i64toi32_i32$0 = $9_1;
   i64toi32_i32$6 = 0;
   i64toi32_i32$1 = 30;
   i64toi32_i32$5 = i64toi32_i32$1 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$1 & 63 | 0) >>> 0) {
    i64toi32_i32$6 = 0;
    $89_1 = i64toi32_i32$4 >>> i64toi32_i32$5 | 0;
   } else {
    i64toi32_i32$6 = i64toi32_i32$4 >>> i64toi32_i32$5 | 0;
    $89_1 = (((1 << i64toi32_i32$5 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$5 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$5 | 0) | 0;
   }
   i64toi32_i32$4 = $89_1;
   i64toi32_i32$0 = 1;
   i64toi32_i32$1 = -1;
   i64toi32_i32$0 = i64toi32_i32$6 & i64toi32_i32$0 | 0;
   i64toi32_i32$6 = i64toi32_i32$4 & i64toi32_i32$1 | 0;
   i64toi32_i32$4 = 13;
   i64toi32_i32$1 = -676233344;
   i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
   i64toi32_i32$3 = i64toi32_i32$0 + i64toi32_i32$4 | 0;
   if (i64toi32_i32$5 >>> 0 < i64toi32_i32$1 >>> 0) {
    i64toi32_i32$3 = i64toi32_i32$3 + 1 | 0
   }
   $10_1 = i64toi32_i32$5;
   $10$hi = i64toi32_i32$3;
  }
  label$6 : {
   label$7 : {
    label$8 : {
     label$9 : {
      label$10 : {
       label$11 : {
        label$12 : {
         i64toi32_i32$3 = $9$hi;
         i64toi32_i32$0 = $9_1;
         i64toi32_i32$6 = 0;
         i64toi32_i32$1 = 1073741823;
         i64toi32_i32$6 = i64toi32_i32$3 & i64toi32_i32$6 | 0;
         $205 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
         $205$hi = i64toi32_i32$6;
         i64toi32_i32$6 = $10$hi;
         i64toi32_i32$0 = 0;
         i64toi32_i32$0 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$6 | 0, 1e9 | 0, i64toi32_i32$0 | 0) | 0;
         i64toi32_i32$6 = i64toi32_i32$HIGH_BITS;
         $207 = i64toi32_i32$0;
         $207$hi = i64toi32_i32$6;
         i64toi32_i32$6 = $205$hi;
         i64toi32_i32$3 = $205;
         i64toi32_i32$0 = $207$hi;
         i64toi32_i32$1 = $207;
         i64toi32_i32$4 = i64toi32_i32$3 + i64toi32_i32$1 | 0;
         i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
         if (i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0) {
          i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
         }
         i64toi32_i32$6 = i64toi32_i32$4;
         i64toi32_i32$3 = -1582169109;
         i64toi32_i32$1 = 1025114112;
         i64toi32_i32$0 = i64toi32_i32$4 + i64toi32_i32$1 | 0;
         i64toi32_i32$4 = i64toi32_i32$5 + i64toi32_i32$3 | 0;
         if (i64toi32_i32$0 >>> 0 < i64toi32_i32$1 >>> 0) {
          i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
         }
         $11_1 = i64toi32_i32$0;
         $11$hi = i64toi32_i32$4;
         i64toi32_i32$6 = 0;
         i64toi32_i32$6 = __wasm_i64_sdiv(i64toi32_i32$0 | 0, i64toi32_i32$4 | 0, 1e9 | 0, i64toi32_i32$6 | 0) | 0;
         i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
         $9_1 = i64toi32_i32$6;
         $9$hi = i64toi32_i32$4;
         i64toi32_i32$5 = i64toi32_i32$6;
         i64toi32_i32$6 = 0;
         i64toi32_i32$1 = 99;
         if (i64toi32_i32$4 >>> 0 > i64toi32_i32$6 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$6 | 0) & i64toi32_i32$5 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0) {
          break label$12
         }
         i64toi32_i32$5 = $9$hi;
         $4_1 = $9_1;
         if (($4_1 | 0) < (10 | 0)) {
          break label$11
         }
         $4_1 = $4_1 << 1 | 0;
         if ($4_1 >>> 0 > 198 >>> 0) {
          break label$8
         }
         $13_1 = $4_1 + 66464 | 0;
         $14_1 = 2;
         break label$9;
        }
        $15_1 = $8(65 | 0) | 0;
        HEAP32[($1_1 + 456 | 0) >> 2] = $15_1;
        i64toi32_i32$5 = $9$hi;
        i64toi32_i32$5 = 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$4 = $9$hi;
        i64toi32_i32$6 = $9_1;
        i64toi32_i32$3 = i64toi32_i32$1 - i64toi32_i32$6 | 0;
        i64toi32_i32$0 = (i64toi32_i32$1 >>> 0 < i64toi32_i32$6 >>> 0) + i64toi32_i32$4 | 0;
        i64toi32_i32$0 = i64toi32_i32$5 - i64toi32_i32$0 | 0;
        $229 = i64toi32_i32$3;
        $229$hi = i64toi32_i32$0;
        i64toi32_i32$0 = i64toi32_i32$4;
        $230 = i64toi32_i32$6;
        $230$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $11$hi;
        i64toi32_i32$5 = $11_1;
        i64toi32_i32$1 = -1;
        i64toi32_i32$6 = -999999999;
        if ((i64toi32_i32$0 | 0) < (i64toi32_i32$1 | 0)) {
         $90_1 = 1
        } else {
         if ((i64toi32_i32$0 | 0) <= (i64toi32_i32$1 | 0)) {
          if (i64toi32_i32$5 >>> 0 >= i64toi32_i32$6 >>> 0) {
           $91_1 = 0
          } else {
           $91_1 = 1
          }
          $92_1 = $91_1;
         } else {
          $92_1 = 0
         }
         $90_1 = $92_1;
        }
        i64toi32_i32$4 = $90_1;
        i64toi32_i32$5 = $229$hi;
        i64toi32_i32$0 = $230$hi;
        i64toi32_i32$1 = i64toi32_i32$4 ? $229 : $230;
        i64toi32_i32$6 = i64toi32_i32$4 ? i64toi32_i32$5 : i64toi32_i32$0;
        $9_1 = i64toi32_i32$1;
        $9$hi = i64toi32_i32$6;
        $16_1 = $15_1 + -2 | 0;
        $17_1 = 65;
        label$13 : while (1) {
         i64toi32_i32$6 = $9$hi;
         i64toi32_i32$4 = $9_1;
         i64toi32_i32$1 = 0;
         i64toi32_i32$0 = 1e9;
         if (i64toi32_i32$6 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$6 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0 | 0) | 0) {
          break label$10
         }
         $18_1 = $16_1 + $17_1 | 0;
         i64toi32_i32$4 = $9$hi;
         i64toi32_i32$6 = 0;
         i64toi32_i32$6 = __wasm_i64_udiv($9_1 | 0, i64toi32_i32$4 | 0, 1e9 | 0, i64toi32_i32$6 | 0) | 0;
         i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
         $10_1 = i64toi32_i32$6;
         $10$hi = i64toi32_i32$4;
         i64toi32_i32$6 = -1;
         i64toi32_i32$6 = __wasm_i64_mul($10_1 | 0, i64toi32_i32$4 | 0, -1e9 | 0, i64toi32_i32$6 | 0) | 0;
         i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
         $244$hi = i64toi32_i32$4;
         i64toi32_i32$4 = $9$hi;
         i64toi32_i32$4 = $244$hi;
         i64toi32_i32$0 = i64toi32_i32$6;
         i64toi32_i32$6 = $9$hi;
         i64toi32_i32$1 = $9_1;
         i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
         i64toi32_i32$3 = i64toi32_i32$4 + i64toi32_i32$6 | 0;
         if (i64toi32_i32$5 >>> 0 < i64toi32_i32$1 >>> 0) {
          i64toi32_i32$3 = i64toi32_i32$3 + 1 | 0
         }
         $5_1 = i64toi32_i32$5;
         $4_1 = 0;
         label$14 : {
          label$15 : while (1) {
           if (($4_1 | 0) == (-8 | 0)) {
            break label$14
           }
           $19_1 = ($5_1 >>> 0) / (100 >>> 0) | 0;
           $20_1 = $17_1 + $4_1 | 0;
           if (($20_1 + -1 | 0) >>> 0 > 64 >>> 0) {
            break label$6
           }
           $5_1 = ($5_1 - Math_imul($19_1, 100) | 0) << 1 | 0;
           $21_1 = $5_1 | 1 | 0;
           if ($21_1 >>> 0 >= 200 >>> 0) {
            break label$6
           }
           $22_1 = $18_1 + $4_1 | 0;
           HEAP8[($22_1 + 1 | 0) >> 0] = HEAPU8[($21_1 + 66464 | 0) >> 0] | 0;
           if (($20_1 + -2 | 0) >>> 0 >= 65 >>> 0) {
            break label$6
           }
           HEAP8[$22_1 >> 0] = HEAPU8[($5_1 + 66464 | 0) >> 0] | 0;
           $4_1 = $4_1 + -2 | 0;
           $5_1 = $19_1;
           continue label$15;
          };
         }
         $17_1 = ($17_1 + $4_1 | 0) + -1 | 0;
         if ($17_1 >>> 0 > 64 >>> 0) {
          break label$6
         }
         $5_1 = $5_1 << 1 | 0 | 1 | 0;
         if ($5_1 >>> 0 >= 200 >>> 0) {
          break label$6
         }
         HEAP8[(($18_1 + $4_1 | 0) + 1 | 0) >> 0] = HEAPU8[($5_1 + 66464 | 0) >> 0] | 0;
         i64toi32_i32$3 = $10$hi;
         $9_1 = $10_1;
         $9$hi = i64toi32_i32$3;
         continue label$13;
        };
       }
       $13_1 = $4_1 + 66416 | 0;
       $14_1 = 1;
       break label$9;
      }
      $4_1 = $17_1 + -1 | 0;
      i64toi32_i32$3 = $9$hi;
      $5_1 = $9_1;
      label$16 : {
       label$17 : while (1) {
        if ($5_1 >>> 0 < 100 >>> 0) {
         break label$16
        }
        $19_1 = ($5_1 >>> 0) / (100 >>> 0) | 0;
        if ($4_1 >>> 0 > 64 >>> 0) {
         break label$6
        }
        $5_1 = ($5_1 - Math_imul($19_1, 100) | 0) << 1 | 0;
        $20_1 = $5_1 | 1 | 0;
        if ($20_1 >>> 0 >= 200 >>> 0) {
         break label$6
        }
        $21_1 = $15_1 + $4_1 | 0;
        HEAP8[$21_1 >> 0] = HEAPU8[($20_1 + 66464 | 0) >> 0] | 0;
        if (($4_1 + -1 | 0) >>> 0 >= 65 >>> 0) {
         break label$6
        }
        HEAP8[($21_1 + -1 | 0) >> 0] = HEAPU8[($5_1 + 66464 | 0) >> 0] | 0;
        $4_1 = $4_1 + -2 | 0;
        $5_1 = $19_1;
        continue label$17;
       };
      }
      if ($4_1 >>> 0 > 64 >>> 0) {
       break label$6
      }
      $20_1 = $5_1 << 1 | 0;
      $19_1 = $20_1 | 1 | 0;
      if ($19_1 >>> 0 >= 200 >>> 0) {
       break label$6
      }
      $21_1 = $15_1 + $4_1 | 0;
      HEAP8[$21_1 >> 0] = HEAPU8[($19_1 + 66464 | 0) >> 0] | 0;
      label$18 : {
       if ($5_1 >>> 0 <= 9 >>> 0) {
        break label$18
       }
       $4_1 = $4_1 + -1 | 0;
       if ($4_1 >>> 0 > 64 >>> 0) {
        break label$6
       }
       HEAP8[($21_1 + -1 | 0) >> 0] = HEAPU8[($20_1 + 66464 | 0) >> 0] | 0;
      }
      label$19 : {
       i64toi32_i32$3 = $11$hi;
       i64toi32_i32$4 = $11_1;
       i64toi32_i32$0 = -1;
       i64toi32_i32$1 = -1e9;
       if ((i64toi32_i32$3 | 0) > (i64toi32_i32$0 | 0)) {
        $93_1 = 1
       } else {
        if ((i64toi32_i32$3 | 0) >= (i64toi32_i32$0 | 0)) {
         if (i64toi32_i32$4 >>> 0 <= i64toi32_i32$1 >>> 0) {
          $94_1 = 0
         } else {
          $94_1 = 1
         }
         $95_1 = $94_1;
        } else {
         $95_1 = 0
        }
        $93_1 = $95_1;
       }
       if ($93_1) {
        break label$19
       }
       $4_1 = $4_1 + -1 | 0;
       if ($4_1 >>> 0 > 64 >>> 0) {
        break label$6
       }
       HEAP8[($15_1 + $4_1 | 0) >> 0] = 45;
      }
      $382 = $15_1 + $4_1 | 0;
      $4_1 = 65 - $4_1 | 0;
      $70($1_1 + 424 | 0 | 0, $382 | 0, $4_1 | 0, $4_1 | 0);
      $13_1 = HEAP32[($1_1 + 424 | 0) >> 2] | 0;
      HEAP32[($1_1 + 460 | 0) >> 2] = $13_1;
      $14_1 = HEAP32[($1_1 + 428 | 0) >> 2] | 0;
     }
     i64toi32_i32$3 = $0_1;
     i64toi32_i32$4 = 0;
     HEAP32[(i64toi32_i32$3 + 168 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$3 + 172 | 0) >> 2] = i64toi32_i32$4;
     $4_1 = $8(8 | 0) | 0;
     i64toi32_i32$3 = $4_1;
     i64toi32_i32$4 = 1953391981;
     $63_1 = 1969450852;
     HEAP8[$4_1 >> 0] = $63_1;
     HEAP8[($4_1 + 1 | 0) >> 0] = $63_1 >>> 8 | 0;
     HEAP8[($4_1 + 2 | 0) >> 0] = $63_1 >>> 16 | 0;
     HEAP8[($4_1 + 3 | 0) >> 0] = $63_1 >>> 24 | 0;
     HEAP8[($4_1 + 4 | 0) >> 0] = i64toi32_i32$4;
     HEAP8[($4_1 + 5 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
     HEAP8[($4_1 + 6 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
     HEAP8[($4_1 + 7 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
     HEAP32[($1_1 + 468 | 0) >> 2] = $4_1;
     $70($1_1 + 416 | 0 | 0, $4_1 | 0, 8 | 0, 8 | 0);
     $4_1 = HEAP32[($1_1 + 416 | 0) >> 2] | 0;
     HEAP32[($1_1 + 476 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 472 | 0) >> 2] = $4_1;
     i64toi32_i32$4 = 2146959360;
     i64toi32_i32$4 = $36(5 | 0, i64toi32_i32$4 | 0, $4_1 | 0, HEAP32[($1_1 + 420 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
     $9_1 = i64toi32_i32$4;
     $9$hi = i64toi32_i32$3;
     i64toi32_i32$4 = $0_1;
     i64toi32_i32$3 = 0;
     HEAP32[(i64toi32_i32$4 + 160 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$4 + 164 | 0) >> 2] = i64toi32_i32$3;
     i64toi32_i32$3 = $9$hi;
     HEAP32[(i64toi32_i32$4 + 168 | 0) >> 2] = $9_1;
     HEAP32[(i64toi32_i32$4 + 172 | 0) >> 2] = i64toi32_i32$3;
     $4_1 = $8(10 | 0) | 0;
     $96_1 = 31073;
     HEAP8[($4_1 + 8 | 0) >> 0] = $96_1;
     HEAP8[($4_1 + 9 | 0) >> 0] = $96_1 >>> 8 | 0;
     i64toi32_i32$4 = $4_1;
     i64toi32_i32$3 = 1920090424;
     $64_1 = 1953392981;
     HEAP8[$4_1 >> 0] = $64_1;
     HEAP8[($4_1 + 1 | 0) >> 0] = $64_1 >>> 8 | 0;
     HEAP8[($4_1 + 2 | 0) >> 0] = $64_1 >>> 16 | 0;
     HEAP8[($4_1 + 3 | 0) >> 0] = $64_1 >>> 24 | 0;
     HEAP8[($4_1 + 4 | 0) >> 0] = i64toi32_i32$3;
     HEAP8[($4_1 + 5 | 0) >> 0] = i64toi32_i32$3 >>> 8 | 0;
     HEAP8[($4_1 + 6 | 0) >> 0] = i64toi32_i32$3 >>> 16 | 0;
     HEAP8[($4_1 + 7 | 0) >> 0] = i64toi32_i32$3 >>> 24 | 0;
     HEAP32[($1_1 + 484 | 0) >> 2] = $4_1;
     $70($1_1 + 408 | 0 | 0, $4_1 | 0, 10 | 0, 10 | 0);
     $4_1 = HEAP32[($1_1 + 408 | 0) >> 2] | 0;
     HEAP32[($1_1 + 492 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 488 | 0) >> 2] = $4_1;
     i64toi32_i32$3 = 2146959360;
     i64toi32_i32$3 = $36(5 | 0, i64toi32_i32$3 | 0, $4_1 | 0, HEAP32[($1_1 + 412 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     $9_1 = i64toi32_i32$3;
     $9$hi = i64toi32_i32$4;
     i64toi32_i32$3 = $0_1;
     i64toi32_i32$4 = 32;
     HEAP32[(i64toi32_i32$3 + 144 | 0) >> 2] = 4;
     HEAP32[(i64toi32_i32$3 + 148 | 0) >> 2] = i64toi32_i32$4;
     i64toi32_i32$4 = $9$hi;
     i64toi32_i32$4 = $82($9_1 | 0, i64toi32_i32$4 | 0, $6_1 | 0, 1 | 0) | 0;
     i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
     $9_1 = i64toi32_i32$4;
     $9$hi = i64toi32_i32$3;
     i64toi32_i32$4 = $0_1;
     HEAP32[(i64toi32_i32$4 + 160 | 0) >> 2] = $9_1;
     HEAP32[(i64toi32_i32$4 + 164 | 0) >> 2] = i64toi32_i32$3;
     $4_1 = $8(6 | 0) | 0;
     $97_1 = 30575;
     HEAP8[($4_1 + 4 | 0) >> 0] = $97_1;
     HEAP8[($4_1 + 5 | 0) >> 0] = $97_1 >>> 8 | 0;
     $65_1 = 1684957559;
     HEAP8[$4_1 >> 0] = $65_1;
     HEAP8[($4_1 + 1 | 0) >> 0] = $65_1 >>> 8 | 0;
     HEAP8[($4_1 + 2 | 0) >> 0] = $65_1 >>> 16 | 0;
     HEAP8[($4_1 + 3 | 0) >> 0] = $65_1 >>> 24 | 0;
     HEAP32[($1_1 + 500 | 0) >> 2] = $4_1;
     $70($1_1 + 400 | 0 | 0, $4_1 | 0, 6 | 0, 6 | 0);
     $4_1 = HEAP32[($1_1 + 400 | 0) >> 2] | 0;
     HEAP32[($1_1 + 508 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 504 | 0) >> 2] = $4_1;
     i64toi32_i32$3 = 2146959360;
     i64toi32_i32$3 = $36(5 | 0, i64toi32_i32$3 | 0, $4_1 | 0, HEAP32[($1_1 + 404 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     $10_1 = i64toi32_i32$3;
     $10$hi = i64toi32_i32$4;
     $4_1 = $8(6 | 0) | 0;
     $98_1 = 28532;
     HEAP8[($4_1 + 4 | 0) >> 0] = $98_1;
     HEAP8[($4_1 + 5 | 0) >> 0] = $98_1 >>> 8 | 0;
     $66_1 = 1887007331;
     HEAP8[$4_1 >> 0] = $66_1;
     HEAP8[($4_1 + 1 | 0) >> 0] = $66_1 >>> 8 | 0;
     HEAP8[($4_1 + 2 | 0) >> 0] = $66_1 >>> 16 | 0;
     HEAP8[($4_1 + 3 | 0) >> 0] = $66_1 >>> 24 | 0;
     HEAP32[($1_1 + 512 | 0) >> 2] = $4_1;
     $70($1_1 + 392 | 0 | 0, $4_1 | 0, 6 | 0, 6 | 0);
     $4_1 = HEAP32[($1_1 + 392 | 0) >> 2] | 0;
     HEAP32[($1_1 + 520 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 516 | 0) >> 2] = $4_1;
     i64toi32_i32$4 = $36(i64toi32_i32$3 | 0, i64toi32_i32$4 | 0, $4_1 | 0, HEAP32[($1_1 + 396 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
     $10_1 = i64toi32_i32$4;
     $10$hi = i64toi32_i32$3;
     $4_1 = $8(15 | 0) | 0;
     HEAP8[($4_1 + 14 | 0) >> 0] = 115;
     $99_1 = 25973;
     HEAP8[($4_1 + 12 | 0) >> 0] = $99_1;
     HEAP8[($4_1 + 13 | 0) >> 0] = $99_1 >>> 8 | 0;
     $67_1 = 1818318445;
     HEAP8[($4_1 + 8 | 0) >> 0] = $67_1;
     HEAP8[($4_1 + 9 | 0) >> 0] = $67_1 >>> 8 | 0;
     HEAP8[($4_1 + 10 | 0) >> 0] = $67_1 >>> 16 | 0;
     HEAP8[($4_1 + 11 | 0) >> 0] = $67_1 >>> 24 | 0;
     i64toi32_i32$4 = $4_1;
     i64toi32_i32$3 = 1868852833;
     $68_1 = 1383359847;
     HEAP8[$4_1 >> 0] = $68_1;
     HEAP8[($4_1 + 1 | 0) >> 0] = $68_1 >>> 8 | 0;
     HEAP8[($4_1 + 2 | 0) >> 0] = $68_1 >>> 16 | 0;
     HEAP8[($4_1 + 3 | 0) >> 0] = $68_1 >>> 24 | 0;
     HEAP8[($4_1 + 4 | 0) >> 0] = i64toi32_i32$3;
     HEAP8[($4_1 + 5 | 0) >> 0] = i64toi32_i32$3 >>> 8 | 0;
     HEAP8[($4_1 + 6 | 0) >> 0] = i64toi32_i32$3 >>> 16 | 0;
     HEAP8[($4_1 + 7 | 0) >> 0] = i64toi32_i32$3 >>> 24 | 0;
     HEAP32[($1_1 + 524 | 0) >> 2] = $4_1;
     $70($1_1 + 384 | 0 | 0, $4_1 | 0, 15 | 0, 15 | 0);
     $5_1 = HEAP32[($1_1 + 384 | 0) >> 2] | 0;
     HEAP32[($1_1 + 532 | 0) >> 2] = $5_1;
     HEAP32[($1_1 + 528 | 0) >> 2] = $5_1;
     $19_1 = HEAP32[($1_1 + 388 | 0) >> 2] | 0;
     i64toi32_i32$4 = $0_1;
     i64toi32_i32$3 = 0;
     HEAP32[(i64toi32_i32$4 + 152 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$4 + 156 | 0) >> 2] = i64toi32_i32$3;
     $4_1 = $8(8 | 0) | 0;
     HEAP32[($1_1 + 540 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 544 | 0) >> 2] = $4_1;
     i64toi32_i32$3 = $9$hi;
     i64toi32_i32$4 = $4_1;
     HEAP32[$4_1 >> 2] = $9_1;
     HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$3;
     HEAP32[($0_1 + 156 | 0) >> 2] = $4_1;
     HEAP32[($0_1 + 152 | 0) >> 2] = 31;
     i64toi32_i32$3 = $10$hi;
     i64toi32_i32$3 = $66($10_1 | 0, i64toi32_i32$3 | 0, $5_1 | 0, $19_1 | 0, $2_1 | 0, 1 | 0) | 0;
     i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     $4_1 = $8(8 | 0) | 0;
     i64toi32_i32$3 = $4_1;
     i64toi32_i32$4 = 1735289202;
     $69_1 = 1951625076;
     HEAP8[$4_1 >> 0] = $69_1;
     HEAP8[($4_1 + 1 | 0) >> 0] = $69_1 >>> 8 | 0;
     HEAP8[($4_1 + 2 | 0) >> 0] = $69_1 >>> 16 | 0;
     HEAP8[($4_1 + 3 | 0) >> 0] = $69_1 >>> 24 | 0;
     HEAP8[($4_1 + 4 | 0) >> 0] = i64toi32_i32$4;
     HEAP8[($4_1 + 5 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
     HEAP8[($4_1 + 6 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
     HEAP8[($4_1 + 7 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
     HEAP32[($1_1 + 548 | 0) >> 2] = $4_1;
     $70($1_1 + 376 | 0 | 0, $4_1 | 0, 8 | 0, 8 | 0);
     $4_1 = HEAP32[($1_1 + 376 | 0) >> 2] | 0;
     HEAP32[($1_1 + 556 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 552 | 0) >> 2] = $4_1;
     i64toi32_i32$4 = $9$hi;
     i64toi32_i32$4 = $66($9_1 | 0, i64toi32_i32$4 | 0, $4_1 | 0, HEAP32[($1_1 + 380 | 0) >> 2] | 0 | 0, 0 | 0, 0 | 0) | 0;
     i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
     $78($1_1 + 368 | 0 | 0, i64toi32_i32$4 | 0, i64toi32_i32$3 | 0);
     $4_1 = HEAP32[($1_1 + 368 | 0) >> 2] | 0;
     HEAP32[($1_1 + 768 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 560 | 0) >> 2] = $4_1;
     $5_1 = HEAP32[($1_1 + 372 | 0) >> 2] | 0;
     $91($1_1 + 360 | 0 | 0);
     $19_1 = HEAP32[($1_1 + 360 | 0) >> 2] | 0;
     HEAP32[($1_1 + 564 | 0) >> 2] = $19_1;
     $88($1_1 + 344 | 0 | 0, $4_1 | 0, $5_1 | 0, $19_1 | 0, HEAP32[($1_1 + 364 | 0) >> 2] | 0 | 0);
     HEAP32[($1_1 + 568 | 0) >> 2] = HEAP32[($1_1 + 344 | 0) >> 2] | 0;
     label$20 : {
      if ((HEAP32[($1_1 + 348 | 0) >> 2] | 0 | 0) != (37 | 0)) {
       break label$20
      }
      i64toi32_i32$3 = $9$hi;
      i64toi32_i32$3 = $66($9_1 | 0, i64toi32_i32$3 | 0, 67170 | 0, 16 | 0, 0 | 0, 0 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     }
     $91($1_1 + 336 | 0 | 0);
     $19_1 = HEAP32[($1_1 + 336 | 0) >> 2] | 0;
     HEAP32[($1_1 + 572 | 0) >> 2] = $19_1;
     $88($1_1 + 320 | 0 | 0, $4_1 | 0, $5_1 | 0, $19_1 | 0, HEAP32[($1_1 + 340 | 0) >> 2] | 0 | 0);
     HEAP32[($1_1 + 576 | 0) >> 2] = HEAP32[($1_1 + 320 | 0) >> 2] | 0;
     label$21 : {
      label$22 : {
       if ((HEAP32[($1_1 + 324 | 0) >> 2] | 0 | 0) == (32 | 0)) {
        break label$22
       }
       HEAP32[($1_1 + 604 | 0) >> 2] = $0_1 + 64 | 0;
       $17_1 = $0_1 + 44 | 0;
       HEAP32[($1_1 + 600 | 0) >> 2] = $17_1;
       $22_1 = $0_1 + 48 | 0;
       HEAP32[($1_1 + 596 | 0) >> 2] = $22_1;
       $21_1 = $0_1 + 52 | 0;
       HEAP32[($1_1 + 592 | 0) >> 2] = $21_1;
       $19_1 = $0_1 + 56 | 0;
       HEAP32[($1_1 + 588 | 0) >> 2] = $19_1;
       $20_1 = $0_1 + 60 | 0;
       HEAP32[($1_1 + 584 | 0) >> 2] = $20_1;
       $4_1 = $8(4 | 0) | 0;
       HEAP32[($1_1 + 620 | 0) >> 2] = $4_1;
       HEAP32[($1_1 + 624 | 0) >> 2] = $4_1;
       HEAP32[($1_1 + 616 | 0) >> 2] = $4_1;
       HEAP32[($1_1 + 612 | 0) >> 2] = $4_1;
       HEAP32[($1_1 + 608 | 0) >> 2] = $4_1;
       HEAP32[($1_1 + 580 | 0) >> 2] = $4_1;
       label$23 : {
        label$24 : {
         i64toi32_i32$4 = $11$hi;
         $5_1 = $11_1;
         if (($5_1 | 0) > (127 | 0)) {
          break label$24
         }
         $19_1 = 0;
         HEAP32[$20_1 >> 2] = 0;
         $20_1 = 1;
         $21_1 = 0;
         $22_1 = 0;
         break label$23;
        }
        label$25 : {
         if (($5_1 | 0) > (2047 | 0)) {
          break label$25
         }
         $21_1 = 0;
         HEAP32[$19_1 >> 2] = 0;
         $19_1 = $5_1 & 63 | 0 | -128 | 0;
         $20_1 = 2;
         $5_1 = $5_1 >>> 6 | 0 | -64 | 0;
         $22_1 = 0;
         break label$23;
        }
        label$26 : {
         if (($5_1 | 0) > (65535 | 0)) {
          break label$26
         }
         $22_1 = 0;
         HEAP32[$21_1 >> 2] = 0;
         $21_1 = $5_1 & 63 | 0 | -128 | 0;
         $19_1 = ($5_1 >>> 6 | 0) & 63 | 0 | -128 | 0;
         $20_1 = 3;
         $5_1 = $5_1 >>> 12 | 0 | -32 | 0;
         break label$23;
        }
        label$27 : {
         if (($5_1 | 0) > (1114111 | 0)) {
          break label$27
         }
         HEAP32[$22_1 >> 2] = 0;
         $22_1 = $5_1 & 63 | 0 | -128 | 0;
         $21_1 = ($5_1 >>> 6 | 0) & 63 | 0 | -128 | 0;
         $19_1 = ($5_1 >>> 12 | 0) & 63 | 0 | -128 | 0;
         $20_1 = 4;
         $5_1 = $5_1 >>> 18 | 0 | -16 | 0;
         break label$23;
        }
        $22_1 = 0;
        HEAP32[$17_1 >> 2] = 0;
        $20_1 = 3;
        $21_1 = 189;
        $19_1 = 191;
        $5_1 = 239;
       }
       HEAP8[$4_1 >> 0] = $5_1;
       i64toi32_i32$3 = $0_1;
       i64toi32_i32$4 = 0;
       HEAP32[(i64toi32_i32$3 + 64 | 0) >> 2] = 0;
       HEAP32[(i64toi32_i32$3 + 68 | 0) >> 2] = i64toi32_i32$4;
       HEAP8[($4_1 + 1 | 0) >> 0] = $19_1;
       HEAP8[($4_1 + 2 | 0) >> 0] = $21_1;
       HEAP8[($4_1 + 3 | 0) >> 0] = $22_1;
       $71($1_1 + 304 | 0 | 0, $4_1 | 0, $20_1 | 0);
       $23_1 = 1;
       $24_1 = HEAP32[($1_1 + 312 | 0) >> 2] | 0;
       $25_1 = HEAP32[($1_1 + 308 | 0) >> 2] | 0;
       $26_1 = HEAP32[($1_1 + 304 | 0) >> 2] | 0;
       break label$21;
      }
      $71($1_1 + 288 | 0 | 0, $4_1 | 0, $5_1 | 0);
      $23_1 = 0;
      $24_1 = HEAP32[($1_1 + 296 | 0) >> 2] | 0;
      $25_1 = HEAP32[($1_1 + 292 | 0) >> 2] | 0;
      $26_1 = HEAP32[($1_1 + 288 | 0) >> 2] | 0;
     }
     i64toi32_i32$1 = $3_1;
     i64toi32_i32$4 = HEAP32[i64toi32_i32$1 >> 2] | 0;
     i64toi32_i32$3 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
     $9_1 = i64toi32_i32$4;
     $9$hi = i64toi32_i32$3;
     $92($1_1 + 280 | 0 | 0);
     $4_1 = HEAP32[($1_1 + 280 | 0) >> 2] | 0;
     HEAP32[($1_1 + 772 | 0) >> 2] = $4_1;
     i64toi32_i32$3 = $36(i64toi32_i32$4 | 0, i64toi32_i32$3 | 0, $4_1 | 0, HEAP32[($1_1 + 284 | 0) >> 2] | 0 | 0) | 0;
     i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
     $78($1_1 + 272 | 0 | 0, i64toi32_i32$3 | 0, i64toi32_i32$4 | 0);
     $27_1 = HEAP32[($1_1 + 272 | 0) >> 2] | 0;
     HEAP32[($1_1 + 776 | 0) >> 2] = $27_1;
     $6_1 = HEAP32[($1_1 + 276 | 0) >> 2] | 0;
     $5_1 = $8(16 | 0) | 0;
     HEAP32[($1_1 + 780 | 0) >> 2] = $5_1;
     $93($5_1 | 0);
     label$28 : {
      label$29 : {
       label$30 : {
        if (($6_1 | 0) <= (-1 | 0)) {
         break label$30
        }
        $4_1 = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
        HEAP32[($1_1 + 792 | 0) >> 2] = $4_1;
        HEAP32[($1_1 + 796 | 0) >> 2] = $4_1;
        label$31 : {
         if (((HEAP32[($5_1 + 12 | 0) >> 2] | 0) - (HEAP32[($5_1 + 8 | 0) >> 2] | 0) | 0 | 0) >= ($6_1 | 0)) {
          break label$31
         }
         $94($5_1 | 0, $6_1 | 0);
        }
        $28_1 = $0_1 + 24 | 0;
        HEAP32[($1_1 + 816 | 0) >> 2] = $28_1;
        HEAP32[($1_1 + 804 | 0) >> 2] = $0_1 + 32 | 0;
        $29_1 = $1_1 + 824 | 0;
        $30_1 = $1_1 + 812 | 0;
        $31_1 = $1_1 + 820 | 0;
        $32_1 = $1_1 + 828 | 0;
        $33_1 = $1_1 + 832 | 0;
        $34_1 = $1_1 + 836 | 0;
        $35_1 = $1_1 + 800 | 0;
        $36_1 = $1_1 + 808 | 0;
        $15_1 = 0;
        label$32 : while (1) {
         label$33 : {
          label$34 : {
           if (($6_1 | 0) > ($15_1 | 0)) {
            break label$34
           }
           $19_1 = 0;
           $4_1 = 0;
           break label$33;
          }
          label$35 : {
           label$36 : {
            $21_1 = $27_1 + $15_1 | 0;
            $4_1 = HEAPU8[$21_1 >> 0] | 0;
            $20_1 = ($4_1 << 24 | 0) >> 24 | 0;
            if (($20_1 | 0) < (0 | 0)) {
             break label$36
            }
            $19_1 = 1;
            break label$35;
           }
           $22_1 = $6_1 - $15_1 | 0;
           label$37 : {
            label$38 : {
             if (($20_1 & -32 | 0 | 0) != (-64 | 0)) {
              break label$38
             }
             if ($22_1 >>> 0 < 2 >>> 0) {
              break label$37
             }
             $4_1 = ($20_1 & 31 | 0) << 6 | 0 | ((HEAPU8[($21_1 + 1 | 0) >> 0] | 0) & 63 | 0) | 0;
             $19_1 = 2;
             break label$35;
            }
            label$39 : {
             if (($20_1 & -16 | 0 | 0) != (-32 | 0)) {
              break label$39
             }
             if ($22_1 >>> 0 < 3 >>> 0) {
              break label$37
             }
             $4_1 = ((HEAPU8[($21_1 + 1 | 0) >> 0] | 0) & 63 | 0) << 6 | 0 | (($20_1 & 15 | 0) << 12 | 0) | 0 | ((HEAPU8[($21_1 + 2 | 0) >> 0] | 0) & 63 | 0) | 0;
             $19_1 = 3;
             break label$35;
            }
            $19_1 = 1;
            $4_1 = 65533;
            if ($22_1 >>> 0 < 4 >>> 0) {
             break label$35
            }
            if (($20_1 & 248 | 0 | 0) != (240 | 0)) {
             break label$35
            }
            $4_1 = ((HEAPU8[($21_1 + 1 | 0) >> 0] | 0) & 63 | 0) << 12 | 0 | (($20_1 & 7 | 0) << 18 | 0) | 0 | (((HEAPU8[($21_1 + 2 | 0) >> 0] | 0) & 63 | 0) << 6 | 0) | 0 | ((HEAPU8[($21_1 + 3 | 0) >> 0] | 0) & 63 | 0) | 0;
            $19_1 = 4;
            break label$35;
           }
           $19_1 = 1;
           $4_1 = 65533;
          }
          $15_1 = $19_1 + $15_1 | 0;
          $19_1 = 1;
         }
         label$40 : {
          label$41 : {
           label$42 : {
            label$43 : {
             label$44 : {
              label$45 : {
               if (!($19_1 & 1 | 0)) {
                break label$45
               }
               label$46 : {
                if ($4_1 >>> 0 > 255 >>> 0) {
                 break label$46
                }
                $19_1 = $4_1 + -9 | 0;
                if ($19_1 >>> 0 <= 23 >>> 0) {
                 break label$44
                }
                break label$41;
               }
               $21_1 = HEAP32[(0 + 68576 | 0) >> 2] | 0;
               HEAP32[$35_1 >> 2] = $21_1;
               label$47 : {
                $19_1 = HEAP32[(0 + 68580 | 0) >> 2] | 0;
                $20_1 = HEAP32[(0 + 68600 | 0) >> 2] | 0;
                if (($19_1 | 0) <= ($20_1 | 0)) {
                 break label$47
                }
                if (!$19_1) {
                 break label$6
                }
                $22_1 = $21_1 + Math_imul($19_1 + -1 | 0, 6) | 0;
                if (!$22_1) {
                 break label$7
                }
                if (($4_1 | 0) > (HEAPU16[($22_1 + 2 | 0) >> 1] | 0 | 0)) {
                 break label$47
                }
                if ($19_1 >>> 0 > (HEAP32[(0 + 68584 | 0) >> 2] | 0) >>> 0) {
                 break label$8
                }
                if ($19_1 >>> 0 < $20_1 >>> 0) {
                 break label$8
                }
                $16_1 = $19_1 - $20_1 | 0;
                $2_1 = $21_1 + Math_imul($20_1, 6) | 0;
                $17_1 = $4_1 & 65535 | 0;
                if ($17_1 >>> 0 < 256 >>> 0) {
                 break label$43
                }
                if (($16_1 | 0) < (19 | 0)) {
                 break label$43
                }
                $19_1 = 0;
                $20_1 = $16_1;
                label$48 : while (1) {
                 if (($20_1 | 0) <= ($19_1 | 0)) {
                  break label$40
                 }
                 $21_1 = (($20_1 - $19_1 | 0 | 0) / (2 | 0) | 0) + $19_1 | 0;
                 if ($21_1 >>> 0 >= $16_1 >>> 0) {
                  break label$6
                 }
                 $18_1 = $2_1 + Math_imul($21_1, 6) | 0;
                 if (!$18_1) {
                  break label$7
                 }
                 label$49 : {
                  $37_1 = HEAPU16[$18_1 >> 1] | 0;
                  $22_1 = $37_1 >>> 0 > $17_1 >>> 0;
                  if ($22_1) {
                   break label$49
                  }
                  if ((HEAPU16[($18_1 + 2 | 0) >> 1] | 0) >>> 0 < $17_1 >>> 0) {
                   break label$49
                  }
                  $19_1 = HEAPU16[($18_1 + 4 | 0) >> 1] | 0;
                  if (($19_1 | 0) == (1 | 0)) {
                   continue label$32
                  }
                  if (!(((($4_1 - $37_1 | 0) & 65535 | 0) >>> 0) % ($19_1 >>> 0) | 0)) {
                   continue label$32
                  }
                  break label$40;
                 }
                 $19_1 = $22_1 ? $19_1 : $21_1 + 1 | 0;
                 $20_1 = $22_1 ? $21_1 : $20_1;
                 continue label$48;
                };
               }
               $16_1 = HEAP32[(0 + 68588 | 0) >> 2] | 0;
               HEAP32[$36_1 >> 2] = $16_1;
               $2_1 = HEAP32[(0 + 68592 | 0) >> 2] | 0;
               if (($2_1 | 0) < (1 | 0)) {
                break label$40
               }
               if (!$16_1) {
                break label$7
               }
               if ((HEAP32[$16_1 >> 2] | 0 | 0) <= ($4_1 | 0)) {
                break label$42
               }
               break label$40;
              }
              $4_1 = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
              HEAP32[($1_1 + 844 | 0) >> 2] = $4_1;
              HEAP32[($1_1 + 840 | 0) >> 2] = $4_1;
              $19_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
              $5_1 = $8(1 | 0) | 0;
              HEAP8[$5_1 >> 0] = 59;
              HEAP32[($1_1 + 848 | 0) >> 2] = $5_1;
              $70($1_1 + 264 | 0 | 0, $5_1 | 0, 1 | 0, 1 | 0);
              $5_1 = HEAP32[($1_1 + 264 | 0) >> 2] | 0;
              HEAP32[($1_1 + 856 | 0) >> 2] = $5_1;
              HEAP32[($1_1 + 852 | 0) >> 2] = $5_1;
              $88($1_1 + 248 | 0 | 0, $4_1 | 0, $19_1 | 0, $5_1 | 0, HEAP32[($1_1 + 268 | 0) >> 2] | 0 | 0);
              $4_1 = HEAP32[($1_1 + 248 | 0) >> 2] | 0;
              HEAP32[($1_1 + 860 | 0) >> 2] = $4_1;
              $15_1 = $4_1 + 8 | 0;
              $21_1 = HEAP32[($1_1 + 252 | 0) >> 2] | 0;
              $17_1 = $1_1 + 864 | 0;
              $18_1 = $1_1 + 868 | 0;
              $16_1 = $1_1 + 628 | 0;
              $5_1 = -1;
              label$50 : while (1) {
               $4_1 = $15_1 + ($5_1 << 3 | 0) | 0;
               label$51 : {
                label$52 : while (1) {
                 $5_1 = $5_1 + 1 | 0;
                 if (($5_1 | 0) >= ($21_1 | 0)) {
                  break label$51
                 }
                 if ($5_1 >>> 0 >= $21_1 >>> 0) {
                  break label$6
                 }
                 if (!$4_1) {
                  break label$7
                 }
                 $20_1 = HEAP32[$4_1 >> 2] | 0;
                 HEAP32[$17_1 >> 2] = $20_1;
                 $19_1 = HEAP32[($4_1 + 4 | 0) >> 2] | 0;
                 $95($1_1 + 40 | 0 | 0);
                 $22_1 = HEAP32[($1_1 + 40 | 0) >> 2] | 0;
                 HEAP32[$18_1 >> 2] = $22_1;
                 $4_1 = $4_1 + 8 | 0;
                 if (($23_1 | (($86($20_1 | 0, $19_1 | 0, $22_1 | 0, HEAP32[($1_1 + 44 | 0) >> 2] | 0 | 0) | 0) ^ -1 | 0) | 0) & 1 | 0) {
                  continue label$52
                 }
                 break label$52;
                };
                $95($1_1 + 32 | 0 | 0);
                $22_1 = HEAP32[($1_1 + 32 | 0) >> 2] | 0;
                HEAP32[$16_1 >> 2] = $22_1;
                label$53 : {
                 $4_1 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
                 if (!(($86($20_1 | 0, $19_1 | 0, $22_1 | 0, $4_1 | 0) | 0) & 1 | 0)) {
                  break label$53
                 }
                 if ($19_1 >>> 0 < $4_1 >>> 0) {
                  break label$8
                 }
                 $19_1 = $19_1 - $4_1 | 0;
                 $20_1 = $20_1 + $4_1 | 0;
                }
                $71($1_1 + 16 | 0 | 0, $20_1 | 0, $19_1 | 0);
                $24_1 = HEAP32[($1_1 + 24 | 0) >> 2] | 0;
                $25_1 = HEAP32[($1_1 + 20 | 0) >> 2] | 0;
                $26_1 = HEAP32[($1_1 + 16 | 0) >> 2] | 0;
                continue label$50;
               }
               break label$50;
              };
              $15_1 = 64;
              $4_1 = $8(64 | 0) | 0;
              HEAP32[($1_1 + 632 | 0) >> 2] = $4_1;
              HEAP32[($1_1 + 636 | 0) >> 2] = $4_1;
              i64toi32_i32$3 = $4_1;
              i64toi32_i32$4 = 892944710;
              $70_1 = 959989057;
              HEAP8[($4_1 + 56 | 0) >> 0] = $70_1;
              HEAP8[($4_1 + 57 | 0) >> 0] = $70_1 >>> 8 | 0;
              HEAP8[($4_1 + 58 | 0) >> 0] = $70_1 >>> 16 | 0;
              HEAP8[($4_1 + 59 | 0) >> 0] = $70_1 >>> 24 | 0;
              HEAP8[($4_1 + 60 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($4_1 + 61 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($4_1 + 62 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($4_1 + 63 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $4_1;
              i64toi32_i32$4 = 825770549;
              $71_1 = 1160787763;
              HEAP8[($4_1 + 48 | 0) >> 0] = $71_1;
              HEAP8[($4_1 + 49 | 0) >> 0] = $71_1 >>> 8 | 0;
              HEAP8[($4_1 + 50 | 0) >> 0] = $71_1 >>> 16 | 0;
              HEAP8[($4_1 + 51 | 0) >> 0] = $71_1 >>> 24 | 0;
              HEAP8[($4_1 + 52 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($4_1 + 53 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($4_1 + 54 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($4_1 + 55 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $4_1;
              i64toi32_i32$4 = 1145385522;
              $72_1 = 1160855861;
              HEAP8[($4_1 + 40 | 0) >> 0] = $72_1;
              HEAP8[($4_1 + 41 | 0) >> 0] = $72_1 >>> 8 | 0;
              HEAP8[($4_1 + 42 | 0) >> 0] = $72_1 >>> 16 | 0;
              HEAP8[($4_1 + 43 | 0) >> 0] = $72_1 >>> 24 | 0;
              HEAP8[($4_1 + 44 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($4_1 + 45 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($4_1 + 46 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($4_1 + 47 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $4_1;
              i64toi32_i32$4 = 1111639603;
              $73_1 = 1161967681;
              HEAP8[($4_1 + 32 | 0) >> 0] = $73_1;
              HEAP8[($4_1 + 33 | 0) >> 0] = $73_1 >>> 8 | 0;
              HEAP8[($4_1 + 34 | 0) >> 0] = $73_1 >>> 16 | 0;
              HEAP8[($4_1 + 35 | 0) >> 0] = $73_1 >>> 24 | 0;
              HEAP8[($4_1 + 36 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($4_1 + 37 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($4_1 + 38 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($4_1 + 39 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $4_1;
              i64toi32_i32$4 = 1145190209;
              $74_1 = 1127757381;
              HEAP8[($4_1 + 24 | 0) >> 0] = $74_1;
              HEAP8[($4_1 + 25 | 0) >> 0] = $74_1 >>> 8 | 0;
              HEAP8[($4_1 + 26 | 0) >> 0] = $74_1 >>> 16 | 0;
              HEAP8[($4_1 + 27 | 0) >> 0] = $74_1 >>> 24 | 0;
              HEAP8[($4_1 + 28 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($4_1 + 29 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($4_1 + 30 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($4_1 + 31 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $4_1;
              i64toi32_i32$4 = 893530935;
              $75_1 = 1094206017;
              HEAP8[($4_1 + 16 | 0) >> 0] = $75_1;
              HEAP8[($4_1 + 17 | 0) >> 0] = $75_1 >>> 8 | 0;
              HEAP8[($4_1 + 18 | 0) >> 0] = $75_1 >>> 16 | 0;
              HEAP8[($4_1 + 19 | 0) >> 0] = $75_1 >>> 24 | 0;
              HEAP8[($4_1 + 20 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($4_1 + 21 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($4_1 + 22 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($4_1 + 23 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $4_1;
              i64toi32_i32$4 = 875968821;
              $76_1 = 842086209;
              HEAP8[($4_1 + 8 | 0) >> 0] = $76_1;
              HEAP8[($4_1 + 9 | 0) >> 0] = $76_1 >>> 8 | 0;
              HEAP8[($4_1 + 10 | 0) >> 0] = $76_1 >>> 16 | 0;
              HEAP8[($4_1 + 11 | 0) >> 0] = $76_1 >>> 24 | 0;
              HEAP8[($4_1 + 12 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($4_1 + 13 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($4_1 + 14 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($4_1 + 15 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              i64toi32_i32$3 = $4_1;
              i64toi32_i32$4 = 892612921;
              $77_1 = 825573957;
              HEAP8[$4_1 >> 0] = $77_1;
              HEAP8[($4_1 + 1 | 0) >> 0] = $77_1 >>> 8 | 0;
              HEAP8[($4_1 + 2 | 0) >> 0] = $77_1 >>> 16 | 0;
              HEAP8[($4_1 + 3 | 0) >> 0] = $77_1 >>> 24 | 0;
              HEAP8[($4_1 + 4 | 0) >> 0] = i64toi32_i32$4;
              HEAP8[($4_1 + 5 | 0) >> 0] = i64toi32_i32$4 >>> 8 | 0;
              HEAP8[($4_1 + 6 | 0) >> 0] = i64toi32_i32$4 >>> 16 | 0;
              HEAP8[($4_1 + 7 | 0) >> 0] = i64toi32_i32$4 >>> 24 | 0;
              $22_1 = $8(48 | 0) | 0;
              HEAP32[($1_1 + 720 | 0) >> 2] = $22_1;
              HEAP32[($1_1 + 724 | 0) >> 2] = $22_1;
              HEAP32[($1_1 + 640 | 0) >> 2] = $22_1;
              $75($1_1 + 240 | 0 | 0);
              $19_1 = HEAP32[($1_1 + 244 | 0) >> 2] | 0;
              HEAP32[($1_1 + 676 | 0) >> 2] = $19_1;
              HEAP32[($1_1 + 668 | 0) >> 2] = $19_1;
              HEAP32[($1_1 + 644 | 0) >> 2] = $19_1;
              $16_1 = HEAP32[($1_1 + 240 | 0) >> 2] | 0;
              HEAP32[($22_1 + 36 | 0) >> 2] = $19_1;
              HEAP32[($22_1 + 32 | 0) >> 2] = $16_1;
              $75($1_1 + 232 | 0 | 0);
              $17_1 = HEAP32[($1_1 + 236 | 0) >> 2] | 0;
              HEAP32[($1_1 + 708 | 0) >> 2] = $17_1;
              HEAP32[($1_1 + 656 | 0) >> 2] = $17_1;
              HEAP32[($1_1 + 652 | 0) >> 2] = $17_1;
              HEAP32[($1_1 + 648 | 0) >> 2] = $17_1;
              $18_1 = HEAP32[($1_1 + 232 | 0) >> 2] | 0;
              HEAP32[($22_1 + 44 | 0) >> 2] = $17_1;
              HEAP32[($22_1 + 40 | 0) >> 2] = $18_1;
              if (!$17_1) {
               break label$7
              }
              label$54 : {
               $5_1 = HEAP32[($17_1 + 208 | 0) >> 2] | 0;
               $20_1 = $5_1 + -14 | 0;
               if ($20_1 >>> 0 <= 1 >>> 0) {
                break label$54
               }
               if (($5_1 | 0) != (6 | 0)) {
                break label$29
               }
               $5_1 = 48;
               break label$28;
              }
              $5_1 = 32;
              label$55 : {
               switch ($20_1 | 0) {
               case 1:
                break label$28;
               default:
                break label$55;
               };
              }
              $5_1 = 28;
              break label$28;
             }
             if ((1 << $19_1 | 0) & 8388639 | 0) {
              continue label$32
             }
             break label$41;
            }
            $22_1 = ($19_1 - $20_1 | 0) + 1 | 0;
            $19_1 = $2_1 + 2 | 0;
            $20_1 = 0;
            label$56 : while (1) {
             if (($20_1 | 0) >= ($16_1 | 0)) {
              break label$40
             }
             $20_1 = $20_1 + 1 | 0;
             if (($22_1 | 0) == ($20_1 | 0)) {
              break label$6
             }
             if (($19_1 | 0) == (2 | 0)) {
              break label$7
             }
             $18_1 = HEAPU16[($19_1 + -2 | 0) >> 1] | 0;
             if ($18_1 >>> 0 > $17_1 >>> 0) {
              break label$40
             }
             $21_1 = HEAPU16[$19_1 >> 1] | 0;
             $2_1 = $19_1 + 6 | 0;
             $19_1 = $2_1;
             if ($21_1 >>> 0 < $17_1 >>> 0) {
              continue label$56
             }
             break label$56;
            };
            $19_1 = HEAPU16[($2_1 + -4 | 0) >> 1] | 0;
            if (($19_1 | 0) == (1 | 0)) {
             continue label$32
            }
            if (!(((($4_1 - $18_1 | 0) & 65535 | 0) >>> 0) % ($19_1 >>> 0) | 0)) {
             continue label$32
            }
            break label$40;
           }
           label$57 : {
            if (($2_1 | 0) < (19 | 0)) {
             break label$57
            }
            $19_1 = 0;
            $20_1 = $2_1;
            label$58 : while (1) {
             if (($20_1 | 0) <= ($19_1 | 0)) {
              break label$40
             }
             HEAP32[($0_1 + 40 | 0) >> 2] = 0;
             i64toi32_i32$3 = $0_1;
             i64toi32_i32$4 = 0;
             HEAP32[(i64toi32_i32$3 + 32 | 0) >> 2] = 0;
             HEAP32[(i64toi32_i32$3 + 36 | 0) >> 2] = i64toi32_i32$4;
             $21_1 = (($20_1 - $19_1 | 0 | 0) / (2 | 0) | 0) + $19_1 | 0;
             if ($21_1 >>> 0 >= $2_1 >>> 0) {
              break label$6
             }
             $17_1 = $16_1 + Math_imul($21_1, 12) | 0;
             $22_1 = HEAP32[$17_1 >> 2] | 0;
             $18_1 = HEAP32[($17_1 + 4 | 0) >> 2] | 0;
             $37_1 = HEAP32[($17_1 + 8 | 0) >> 2] | 0;
             HEAP32[($0_1 + 40 | 0) >> 2] = $37_1;
             HEAP32[($0_1 + 36 | 0) >> 2] = $18_1;
             HEAP32[($0_1 + 32 | 0) >> 2] = $22_1;
             label$59 : {
              $17_1 = $4_1 >>> 0 < $22_1 >>> 0;
              if ($17_1) {
               break label$59
              }
              if ($18_1 >>> 0 < $4_1 >>> 0) {
               break label$59
              }
              if (($37_1 | 0) == (1 | 0)) {
               continue label$32
              }
              if (!((($4_1 - $22_1 | 0) >>> 0) % ($37_1 >>> 0) | 0)) {
               continue label$32
              }
              break label$40;
             }
             $19_1 = $17_1 ? $19_1 : $21_1 + 1 | 0;
             $20_1 = $17_1 ? $21_1 : $20_1;
             continue label$58;
            };
           }
           $19_1 = $16_1 + -4 | 0;
           $20_1 = $2_1 + 1 | 0;
           label$60 : while (1) {
            $20_1 = $20_1 + -1 | 0;
            if (!$20_1) {
             break label$40
            }
            $22_1 = HEAP32[($19_1 + 4 | 0) >> 2] | 0;
            if ($4_1 >>> 0 < $22_1 >>> 0) {
             break label$40
            }
            $21_1 = $19_1 + 8 | 0;
            $17_1 = $19_1 + 12 | 0;
            $19_1 = $17_1;
            if ((HEAP32[$21_1 >> 2] | 0) >>> 0 < $4_1 >>> 0) {
             continue label$60
            }
            break label$60;
           };
           $19_1 = HEAP32[$17_1 >> 2] | 0;
           if (($19_1 | 0) == (1 | 0)) {
            continue label$32
           }
           if (!((($4_1 - $22_1 | 0) >>> 0) % ($19_1 >>> 0) | 0)) {
            continue label$32
           }
           break label$40;
          }
          if (($4_1 | 0) == (133 | 0)) {
           continue label$32
          }
          if (($4_1 | 0) == (160 | 0)) {
           continue label$32
          }
         }
         $93($5_1 | 0);
         $20_1 = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
         HEAP32[$29_1 >> 2] = $20_1;
         HEAP32[$30_1 >> 2] = $20_1;
         $19_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
         label$61 : {
          label$62 : {
           if (($4_1 | 0) > (127 | 0)) {
            break label$62
           }
           HEAP32[$28_1 >> 2] = 0;
           HEAP8[$28_1 >> 0] = $4_1;
           $69($1_1 | 0, $20_1 | 0, $28_1 | 0, $19_1 | 0, HEAP32[($5_1 + 12 | 0) >> 2] | 0 | 0, 1 | 0);
           $19_1 = HEAP32[$1_1 >> 2] | 0;
           HEAP32[$31_1 >> 2] = $19_1;
           $4_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
           HEAP32[($5_1 + 8 | 0) >> 2] = HEAP32[($1_1 + 4 | 0) >> 2] | 0;
           HEAP32[($5_1 + 4 | 0) >> 2] = $19_1;
           break label$61;
          }
          HEAP32[$32_1 >> 2] = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
          label$63 : {
           if (((HEAP32[($5_1 + 12 | 0) >> 2] | 0) - $19_1 | 0 | 0) > (3 | 0)) {
            break label$63
           }
           $94($5_1 | 0, 4 | 0);
          }
          $20_1 = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
          HEAP32[$33_1 >> 2] = $20_1;
          if ($19_1 >>> 0 > -5 >>> 0) {
           break label$8
          }
          if (($19_1 + 4 | 0) >>> 0 > (HEAP32[($5_1 + 12 | 0) >> 2] | 0) >>> 0) {
           break label$8
          }
          $20_1 = $20_1 + $19_1 | 0;
          label$64 : {
           label$65 : {
            label$66 : {
             if ($4_1 >>> 0 < 2048 >>> 0) {
              break label$66
             }
             $22_1 = 65533;
             label$67 : {
              if ($4_1 >>> 0 > 1114111 >>> 0) {
               break label$67
              }
              if (($4_1 & -2048 | 0 | 0) == (55296 | 0)) {
               break label$67
              }
              if ($4_1 >>> 0 >= 65536 >>> 0) {
               break label$65
              }
              $22_1 = $4_1;
             }
             if (!$20_1) {
              break label$7
             }
             HEAP8[$20_1 >> 0] = $22_1 >>> 12 | 0 | 224 | 0;
             HEAP8[($20_1 + 1 | 0) >> 0] = ($22_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
             $20_1 = $20_1 + 2 | 0;
             $21_1 = 3;
             $4_1 = $22_1;
             break label$64;
            }
            if (!$20_1) {
             break label$7
            }
            HEAP8[$20_1 >> 0] = $4_1 >>> 6 | 0 | 192 | 0;
            $20_1 = $20_1 + 1 | 0;
            $21_1 = 2;
            break label$64;
           }
           if (!$20_1) {
            break label$7
           }
           HEAP8[$20_1 >> 0] = $4_1 >>> 18 | 0 | 240 | 0;
           HEAP8[($20_1 + 2 | 0) >> 0] = ($4_1 >>> 6 | 0) & 63 | 0 | 128 | 0;
           HEAP8[($20_1 + 1 | 0) >> 0] = ($4_1 >>> 12 | 0) & 63 | 0 | 128 | 0;
           $20_1 = $20_1 + 3 | 0;
           $21_1 = 4;
          }
          HEAP8[$20_1 >> 0] = $4_1 & 63 | 0 | 128 | 0;
          $20_1 = HEAP32[($5_1 + 4 | 0) >> 2] | 0;
          HEAP32[$34_1 >> 2] = $20_1;
          $19_1 = $21_1 + $19_1 | 0;
          $4_1 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
          if ($19_1 >>> 0 > $4_1 >>> 0) {
           break label$8
          }
          HEAP32[($5_1 + 8 | 0) >> 2] = $19_1;
          HEAP32[($5_1 + 4 | 0) >> 2] = $20_1;
         }
         HEAP32[($5_1 + 12 | 0) >> 2] = $4_1;
         continue label$32;
        };
       }
       $4_1 = $8(8 | 0) | 0;
       HEAP32[($1_1 + 784 | 0) >> 2] = $4_1;
       HEAP32[($1_1 + 788 | 0) >> 2] = $4_1;
       HEAP32[($4_1 + 4 | 0) >> 2] = 36;
       HEAP32[$4_1 >> 2] = 67392;
       $9(34 | 0, $4_1 | 0);
       abort();
      }
      $5_1 = 64;
     }
     HEAP32[$22_1 >> 2] = $5_1;
     label$68 : {
      label$69 : {
       if (($18_1 | 0) == (9189 | 0)) {
        break label$69
       }
       $5_1 = 128;
       HEAP32[($22_1 + 4 | 0) >> 2] = 128;
       break label$68;
      }
      $5_1 = HEAP32[($17_1 + 4 | 0) >> 2] | 0;
      HEAP32[($22_1 + 4 | 0) >> 2] = $5_1;
      if (($5_1 | 0) < (0 | 0)) {
       break label$8
      }
     }
     $20_1 = $8($5_1 | 0) | 0;
     HEAP32[($1_1 + 696 | 0) >> 2] = $20_1;
     HEAP32[($1_1 + 712 | 0) >> 2] = $20_1;
     HEAP32[($1_1 + 692 | 0) >> 2] = $20_1;
     HEAP32[($1_1 + 684 | 0) >> 2] = $20_1;
     HEAP32[($1_1 + 660 | 0) >> 2] = $20_1;
     HEAP32[($22_1 + 28 | 0) >> 2] = $5_1;
     HEAP32[($22_1 + 24 | 0) >> 2] = $5_1;
     HEAP32[($22_1 + 20 | 0) >> 2] = $20_1;
     $21_1 = $8($5_1 | 0) | 0;
     HEAP32[($1_1 + 700 | 0) >> 2] = $21_1;
     HEAP32[($1_1 + 704 | 0) >> 2] = $21_1;
     HEAP32[($1_1 + 688 | 0) >> 2] = $21_1;
     HEAP32[($1_1 + 664 | 0) >> 2] = $21_1;
     HEAP32[($22_1 + 16 | 0) >> 2] = $5_1;
     HEAP32[($22_1 + 12 | 0) >> 2] = $5_1;
     HEAP32[($22_1 + 8 | 0) >> 2] = $21_1;
     label$70 : {
      if (($5_1 | 0) > (63 | 0)) {
       break label$70
      }
      $96($1_1 + 216 | 0 | 0, $19_1 | 0, $4_1 | 0, 64 | 0, 64 | 0, $16_1 | 0);
      HEAP32[($1_1 + 672 | 0) >> 2] = HEAP32[($1_1 + 224 | 0) >> 2] | 0;
      $97($1_1 + 200 | 0 | 0, $19_1 | 0, 0 | 0, 0 | 0, $16_1 | 0);
      $4_1 = HEAP32[($1_1 + 200 | 0) >> 2] | 0;
      HEAP32[($1_1 + 680 | 0) >> 2] = $4_1;
      $15_1 = HEAP32[($1_1 + 204 | 0) >> 2] | 0;
     }
     $19_1 = $15_1 >>> 0 > $5_1 >>> 0 ? $5_1 : $15_1;
     $50($20_1 | 0, $4_1 | 0, $19_1 | 0);
     $50($21_1 | 0, $4_1 | 0, $19_1 | 0);
     $4_1 = 0;
     label$71 : {
      label$72 : while (1) {
       if (($4_1 | 0) >= ($5_1 | 0)) {
        break label$71
       }
       if (($5_1 | 0) == ($4_1 | 0)) {
        break label$6
       }
       $19_1 = $20_1 + $4_1 | 0;
       HEAP8[$19_1 >> 0] = (HEAPU8[$19_1 >> 0] | 0) ^ 54 | 0;
       $4_1 = $4_1 + 1 | 0;
       continue label$72;
      };
     }
     $4_1 = 0;
     label$73 : {
      label$74 : while (1) {
       if (($4_1 | 0) >= ($5_1 | 0)) {
        break label$73
       }
       if (($5_1 | 0) == ($4_1 | 0)) {
        break label$6
       }
       $19_1 = $21_1 + $4_1 | 0;
       HEAP8[$19_1 >> 0] = (HEAPU8[$19_1 >> 0] | 0) ^ 92 | 0;
       $4_1 = $4_1 + 1 | 0;
       continue label$74;
      };
     }
     $96($1_1 + 184 | 0 | 0, $17_1 | 0, $20_1 | 0, $5_1 | 0, $5_1 | 0, $18_1 | 0);
     HEAP32[($1_1 + 716 | 0) >> 2] = HEAP32[($1_1 + 192 | 0) >> 2] | 0;
     $96($1_1 + 168 | 0 | 0, $22_1 | 0, $26_1 | 0, $25_1 | 0, $24_1 | 0, 9189 | 0);
     HEAP32[($1_1 + 728 | 0) >> 2] = HEAP32[($1_1 + 176 | 0) >> 2] | 0;
     $71($1_1 + 152 | 0 | 0, $13_1 | 0, $14_1 | 0);
     $4_1 = HEAP32[($1_1 + 152 | 0) >> 2] | 0;
     HEAP32[($1_1 + 732 | 0) >> 2] = $4_1;
     $96($1_1 + 136 | 0 | 0, $22_1 | 0, $4_1 | 0, $14_1 | 0, $14_1 | 0, 9189 | 0);
     HEAP32[($1_1 + 736 | 0) >> 2] = HEAP32[($1_1 + 144 | 0) >> 2] | 0;
     i64toi32_i32$1 = $3_1;
     i64toi32_i32$4 = HEAP32[i64toi32_i32$1 >> 2] | 0;
     i64toi32_i32$3 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
     $9_1 = i64toi32_i32$4;
     $9$hi = i64toi32_i32$3;
     $92($1_1 + 128 | 0 | 0);
     $2_1 = HEAP32[($1_1 + 128 | 0) >> 2] | 0;
     HEAP32[($1_1 + 740 | 0) >> 2] = $2_1;
     $6_1 = HEAP32[($1_1 + 132 | 0) >> 2] | 0;
     $4_1 = $8(1 | 0) | 0;
     HEAP8[$4_1 >> 0] = 95;
     HEAP32[($1_1 + 744 | 0) >> 2] = $4_1;
     $70($1_1 + 120 | 0 | 0, $4_1 | 0, 1 | 0, 1 | 0);
     $4_1 = HEAP32[($1_1 + 120 | 0) >> 2] | 0;
     HEAP32[($1_1 + 752 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 748 | 0) >> 2] = $4_1;
     $5_1 = HEAP32[($1_1 + 124 | 0) >> 2] | 0;
     $95($1_1 + 112 | 0 | 0);
     $19_1 = HEAP32[($1_1 + 112 | 0) >> 2] | 0;
     HEAP32[($1_1 + 756 | 0) >> 2] = $19_1;
     $58($1_1 + 104 | 0 | 0, $4_1 | 0, $5_1 | 0, $19_1 | 0, HEAP32[($1_1 + 116 | 0) >> 2] | 0 | 0);
     $37_1 = HEAP32[($1_1 + 108 | 0) >> 2] | 0;
     $28_1 = HEAP32[($1_1 + 104 | 0) >> 2] | 0;
     $4_1 = 0;
     $97($1_1 + 88 | 0 | 0, $22_1 | 0, 0 | 0, 0 | 0, 9189 | 0);
     $17_1 = HEAP32[($1_1 + 88 | 0) >> 2] | 0;
     HEAP32[($1_1 + 760 | 0) >> 2] = $17_1;
     $19_1 = HEAP32[($1_1 + 92 | 0) >> 2] | 0;
     $22_1 = $19_1 << 1 | 0;
     if (($22_1 | 0) <= (-1 | 0)) {
      break label$8
     }
     $18_1 = $8($22_1 | 0) | 0;
     HEAP32[($1_1 + 764 | 0) >> 2] = $18_1;
     $15_1 = 0 - $17_1 | 0;
     $16_1 = $19_1 & 2147483647 | 0;
     $5_1 = 0;
     label$75 : {
      label$76 : while (1) {
       if (($4_1 | 0) >= ($19_1 | 0)) {
        break label$75
       }
       if (($19_1 | 0) == ($4_1 | 0)) {
        break label$6
       }
       if (($15_1 | 0) == ($4_1 | 0)) {
        break label$7
       }
       if (($16_1 | 0) == ($4_1 | 0)) {
        break label$6
       }
       $20_1 = $18_1 + $5_1 | 0;
       $21_1 = HEAPU8[($17_1 + $4_1 | 0) >> 0] | 0;
       HEAP8[$20_1 >> 0] = HEAPU8[(($21_1 >>> 4 | 0) + 67154 | 0) >> 0] | 0;
       if (($5_1 + 1 | 0) >>> 0 >= $22_1 >>> 0) {
        break label$6
       }
       HEAP8[($20_1 + 1 | 0) >> 0] = HEAPU8[(($21_1 & 15 | 0) + 67154 | 0) >> 0] | 0;
       $4_1 = $4_1 + 1 | 0;
       $5_1 = $5_1 + 2 | 0;
       continue label$76;
      };
     }
     $70($1_1 + 80 | 0 | 0, $18_1 | 0, $22_1 | 0, $22_1 | 0);
     $4_1 = HEAP32[($1_1 + 80 | 0) >> 2] | 0;
     HEAP32[($1_1 + 876 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 872 | 0) >> 2] = $4_1;
     $58($1_1 + 72 | 0 | 0, $28_1 | 0, $37_1 | 0, $4_1 | 0, HEAP32[($1_1 + 84 | 0) >> 2] | 0 | 0);
     $58($1_1 + 64 | 0 | 0, HEAP32[($1_1 + 72 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 76 | 0) >> 2] | 0 | 0, $13_1 | 0, $14_1 | 0);
     $5_1 = HEAP32[($1_1 + 68 | 0) >> 2] | 0;
     $19_1 = HEAP32[($1_1 + 64 | 0) >> 2] | 0;
     $4_1 = $8(7 | 0) | 0;
     HEAP8[($4_1 + 6 | 0) >> 0] = 47;
     $100_1 = 15720;
     HEAP8[($4_1 + 4 | 0) >> 0] = $100_1;
     HEAP8[($4_1 + 5 | 0) >> 0] = $100_1 >>> 8 | 0;
     $78_1 = 1952542779;
     HEAP8[$4_1 >> 0] = $78_1;
     HEAP8[($4_1 + 1 | 0) >> 0] = $78_1 >>> 8 | 0;
     HEAP8[($4_1 + 2 | 0) >> 0] = $78_1 >>> 16 | 0;
     HEAP8[($4_1 + 3 | 0) >> 0] = $78_1 >>> 24 | 0;
     HEAP32[($1_1 + 880 | 0) >> 2] = $4_1;
     $70($1_1 + 56 | 0 | 0, $4_1 | 0, 7 | 0, 7 | 0);
     $4_1 = HEAP32[($1_1 + 56 | 0) >> 2] | 0;
     HEAP32[($1_1 + 888 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 884 | 0) >> 2] = $4_1;
     $58($1_1 + 48 | 0 | 0, $19_1 | 0, $5_1 | 0, $4_1 | 0, HEAP32[($1_1 + 60 | 0) >> 2] | 0 | 0);
     i64toi32_i32$1 = $1_1;
     i64toi32_i32$3 = HEAP32[($1_1 + 48 | 0) >> 2] | 0;
     i64toi32_i32$4 = HEAP32[($1_1 + 52 | 0) >> 2] | 0;
     $10_1 = i64toi32_i32$3;
     $10$hi = i64toi32_i32$4;
     $4_1 = $8(8 | 0) | 0;
     HEAP32[($1_1 + 892 | 0) >> 2] = $4_1;
     HEAP32[($1_1 + 896 | 0) >> 2] = $4_1;
     i64toi32_i32$3 = $4_1;
     HEAP32[$4_1 >> 2] = $10_1;
     HEAP32[($4_1 + 4 | 0) >> 2] = i64toi32_i32$4;
     i64toi32_i32$4 = $9$hi;
     $63($9_1 | 0, i64toi32_i32$4 | 0, $2_1 | 0, $6_1 | 0, 34 | 0, $4_1 | 0);
     $4_1 = $68($0_1 | 0) | 0;
     HEAP32[($1_1 + 904 | 0) >> 2] = $4_1;
     HEAP32[($4_1 + 8 | 0) >> 2] = 1e3;
     $8_1 = +fimport$3();
     $4_1 = HEAP32[(0 + 68480 | 0) >> 2] | 0;
     HEAP32[($1_1 + 908 | 0) >> 2] = $4_1;
     label$77 : {
      if ($4_1) {
       break label$77
      }
      HEAPF64[(0 + 67704 | 0) >> 3] = $8_1;
     }
     $4_1 = 68480;
     $20_1 = $1_1 + 912 | 0;
     $21_1 = $1_1 + 916 | 0;
     $22_1 = $1_1 + 920 | 0;
     $17_1 = $1_1 + 924 | 0;
     $18_1 = $1_1 + 928 | 0;
     $15_1 = $1_1 + 932 | 0;
     $16_1 = $1_1 + 936 | 0;
     $2_1 = $1_1 + 940 | 0;
     $6_1 = $1_1 + 944 | 0;
     label$78 : {
      label$79 : while (1) {
       $5_1 = HEAP32[$4_1 >> 2] | 0;
       HEAP32[$20_1 >> 2] = $5_1;
       if (!$5_1) {
        break label$78
       }
       $5_1 = $68($0_1 | 0) | 0;
       HEAP32[$21_1 >> 2] = $5_1;
       $5_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
       $19_1 = HEAP32[$4_1 >> 2] | 0;
       HEAP32[$22_1 >> 2] = $19_1;
       $19_1 = $68($19_1 | 0) | 0;
       HEAP32[$17_1 >> 2] = $19_1;
       if ($5_1 >>> 0 < (HEAP32[($19_1 + 8 | 0) >> 2] | 0) >>> 0) {
        break label$78
       }
       $5_1 = $68($0_1 | 0) | 0;
       HEAP32[$18_1 >> 2] = $5_1;
       $19_1 = HEAP32[$4_1 >> 2] | 0;
       HEAP32[$15_1 >> 2] = $19_1;
       $19_1 = $68($19_1 | 0) | 0;
       HEAP32[$16_1 >> 2] = $19_1;
       HEAP32[($5_1 + 8 | 0) >> 2] = (HEAP32[($5_1 + 8 | 0) >> 2] | 0) - (HEAP32[($19_1 + 8 | 0) >> 2] | 0) | 0;
       $4_1 = HEAP32[$4_1 >> 2] | 0;
       HEAP32[$2_1 >> 2] = $4_1;
       $4_1 = $68($4_1 | 0) | 0;
       HEAP32[$6_1 >> 2] = $4_1;
       continue label$79;
      };
     }
     $5_1 = HEAP32[$4_1 >> 2] | 0;
     HEAP32[($1_1 + 948 | 0) >> 2] = $5_1;
     label$80 : {
      if (!$5_1) {
       break label$80
      }
      $5_1 = HEAP32[$4_1 >> 2] | 0;
      HEAP32[($1_1 + 952 | 0) >> 2] = $5_1;
      $5_1 = $68($5_1 | 0) | 0;
      HEAP32[($1_1 + 956 | 0) >> 2] = $5_1;
      $19_1 = $68($0_1 | 0) | 0;
      HEAP32[($1_1 + 960 | 0) >> 2] = $19_1;
      HEAP32[($5_1 + 8 | 0) >> 2] = (HEAP32[($5_1 + 8 | 0) >> 2] | 0) - (HEAP32[($19_1 + 8 | 0) >> 2] | 0) | 0;
     }
     $5_1 = $68($0_1 | 0) | 0;
     HEAP32[($1_1 + 964 | 0) >> 2] = $5_1;
     $19_1 = HEAP32[$4_1 >> 2] | 0;
     HEAP32[($1_1 + 968 | 0) >> 2] = $19_1;
     HEAP32[$5_1 >> 2] = $19_1;
     HEAP32[$4_1 >> 2] = $0_1;
     HEAP32[(0 + 67736 | 0) >> 2] = $7_1;
     HEAP8[($0_1 + 20 | 0) >> 0] = 0;
     global$0 = $1_1 + 976 | 0;
     return;
    }
    $67();
    abort();
   }
   $14();
   abort();
  }
  $49();
  abort();
 }
 
 function $91($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_1 = 0, $3_1 = 0;
  $1_1 = global$0 - 32 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 28 | 0) >> 2] = 0;
  HEAP32[($1_1 + 20 | 0) >> 2] = 2;
  HEAP32[($1_1 + 24 | 0) >> 2] = 0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 16 | 0;
  HEAP32[($1_1 + 16 | 0) >> 2] = $2_1;
  $3_1 = $8(1 | 0) | 0;
  HEAP8[$3_1 >> 0] = 44;
  HEAP32[($1_1 + 24 | 0) >> 2] = $3_1;
  $70($1_1 + 8 | 0 | 0, $3_1 | 0, 1 | 0, 1 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  $2_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  HEAP32[($1_1 + 28 | 0) >> 2] = $2_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  HEAP32[$0_1 >> 2] = $2_1;
  global$0 = $1_1 + 32 | 0;
 }
 
 function $92($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $3_1 = 0, $4_1 = 0, $2_1 = 0, $5_1 = 0;
  $1_1 = global$0 - 32 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 28 | 0) >> 2] = 0;
  HEAP32[($1_1 + 20 | 0) >> 2] = 2;
  HEAP32[($1_1 + 24 | 0) >> 2] = 0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 16 | 0;
  HEAP32[($1_1 + 16 | 0) >> 2] = $2_1;
  $3_1 = $8(6 | 0) | 0;
  $5_1 = 25961;
  HEAP8[($3_1 + 4 | 0) >> 0] = $5_1;
  HEAP8[($3_1 + 5 | 0) >> 0] = $5_1 >>> 8 | 0;
  $4_1 = 1802465123;
  HEAP8[$3_1 >> 0] = $4_1;
  HEAP8[($3_1 + 1 | 0) >> 0] = $4_1 >>> 8 | 0;
  HEAP8[($3_1 + 2 | 0) >> 0] = $4_1 >>> 16 | 0;
  HEAP8[($3_1 + 3 | 0) >> 0] = $4_1 >>> 24 | 0;
  HEAP32[($1_1 + 24 | 0) >> 2] = $3_1;
  $70($1_1 + 8 | 0 | 0, $3_1 | 0, 6 | 0, 6 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  $3_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  HEAP32[($1_1 + 28 | 0) >> 2] = $3_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  HEAP32[$0_1 >> 2] = $3_1;
  global$0 = $1_1 + 32 | 0;
 }
 
 function $93($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $3_1 = 0, i64toi32_i32$0 = 0, $2_1 = 0;
  $1_1 = global$0 - 48 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 44 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 20 | 0) >> 2] = 0;
  HEAP32[($1_1 + 24 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($1_1 + 12 | 0) >> 2] = 8;
  HEAP32[($1_1 + 16 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($1_1 + 40 | 0) >> 2] = $0_1;
  HEAP32[($1_1 + 36 | 0) >> 2] = $0_1;
  HEAP32[($1_1 + 32 | 0) >> 2] = $0_1;
  HEAP32[($1_1 + 28 | 0) >> 2] = $0_1;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 8 | 0;
  HEAP32[($1_1 + 8 | 0) >> 2] = $2_1;
  label$1 : {
   label$2 : {
    if (!$0_1) {
     break label$2
    }
    $3_1 = HEAP32[$0_1 >> 2] | 0;
    HEAP32[($1_1 + 24 | 0) >> 2] = $3_1;
    label$3 : {
     if ($3_1) {
      break label$3
     }
     HEAP32[$0_1 >> 2] = $0_1;
     break label$1;
    }
    $3_1 = HEAP32[$0_1 >> 2] | 0;
    HEAP32[($1_1 + 44 | 0) >> 2] = $3_1;
    if (($3_1 | 0) == ($0_1 | 0)) {
     break label$1
    }
    $0_1 = $8(8 | 0) | 0;
    HEAP32[(($1_1 + 8 | 0) + 8 | 0) >> 2] = $0_1;
    HEAP32[($1_1 + 20 | 0) >> 2] = $0_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = 56;
    HEAP32[$0_1 >> 2] = 67440;
    $9(34 | 0, $0_1 | 0);
    abort();
   }
   $14();
   abort();
  }
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  global$0 = $1_1 + 48 | 0;
 }
 
 function $94($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0, $4_1 = 0, i64toi32_i32$0 = 0, $5_1 = 0, $3_1 = 0, $6_1 = 0, $7_1 = 0;
  $2_1 = global$0 - 32 | 0;
  global$0 = $2_1;
  HEAP32[($2_1 + 28 | 0) >> 2] = 0;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 20 | 0) >> 2] = 0;
  HEAP32[($2_1 + 24 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($2_1 + 12 | 0) >> 2] = 4;
  HEAP32[($2_1 + 16 | 0) >> 2] = i64toi32_i32$0;
  $3_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1 + 8 | 0;
  HEAP32[($2_1 + 8 | 0) >> 2] = $3_1;
  label$1 : {
   label$2 : {
    if (!$0_1) {
     break label$2
    }
    $4_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    HEAP32[(($2_1 + 8 | 0) + 8 | 0) >> 2] = $4_1;
    HEAP32[(($2_1 + 8 | 0) + 12 | 0) >> 2] = $4_1;
    $4_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    $1_1 = ((HEAP32[($0_1 + 12 | 0) >> 2] | 0) << 1 | 0) + $1_1 | 0;
    if ($4_1 >>> 0 > $1_1 >>> 0) {
     break label$1
    }
    if (($1_1 | 0) <= (-1 | 0)) {
     break label$1
    }
    $5_1 = $8($1_1 | 0) | 0;
    HEAP32[($2_1 + 24 | 0) >> 2] = $5_1;
    $6_1 = HEAP32[($0_1 + 4 | 0) >> 2] | 0;
    HEAP32[($2_1 + 28 | 0) >> 2] = $6_1;
    $7_1 = HEAP32[($0_1 + 8 | 0) >> 2] | 0;
    $50($5_1 | 0, $6_1 | 0, ($7_1 >>> 0 > $4_1 >>> 0 ? $4_1 : $7_1) | 0);
    HEAP32[($0_1 + 12 | 0) >> 2] = $1_1;
    HEAP32[($0_1 + 8 | 0) >> 2] = $4_1;
    HEAP32[($0_1 + 4 | 0) >> 2] = $5_1;
    HEAP32[(0 + 67736 | 0) >> 2] = $3_1;
    global$0 = $2_1 + 32 | 0;
    return;
   }
   $14();
   abort();
  }
  $67();
  abort();
 }
 
 function $95($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $3_1 = 0, $4_1 = 0, $2_1 = 0, $5_1 = 0;
  $1_1 = global$0 - 32 | 0;
  global$0 = $1_1;
  HEAP32[($1_1 + 28 | 0) >> 2] = 0;
  HEAP32[($1_1 + 20 | 0) >> 2] = 2;
  HEAP32[($1_1 + 24 | 0) >> 2] = 0;
  $2_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $1_1 + 16 | 0;
  HEAP32[($1_1 + 16 | 0) >> 2] = $2_1;
  $3_1 = $8(7 | 0) | 0;
  HEAP8[($3_1 + 6 | 0) >> 0] = 61;
  $5_1 = 29797;
  HEAP8[($3_1 + 4 | 0) >> 0] = $5_1;
  HEAP8[($3_1 + 5 | 0) >> 0] = $5_1 >>> 8 | 0;
  $4_1 = 1801677172;
  HEAP8[$3_1 >> 0] = $4_1;
  HEAP8[($3_1 + 1 | 0) >> 0] = $4_1 >>> 8 | 0;
  HEAP8[($3_1 + 2 | 0) >> 0] = $4_1 >>> 16 | 0;
  HEAP8[($3_1 + 3 | 0) >> 0] = $4_1 >>> 24 | 0;
  HEAP32[($1_1 + 24 | 0) >> 2] = $3_1;
  $70($1_1 + 8 | 0 | 0, $3_1 | 0, 7 | 0, 7 | 0);
  HEAP32[(0 + 67736 | 0) >> 2] = $2_1;
  $3_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
  HEAP32[($1_1 + 28 | 0) >> 2] = $3_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = HEAP32[($1_1 + 12 | 0) >> 2] | 0;
  HEAP32[$0_1 >> 2] = $3_1;
  global$0 = $1_1 + 32 | 0;
 }
 
 function $96($0_1, $1_1, $2_1, $3_1, $4_1, $5_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  $5_1 = $5_1 | 0;
  var $6_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $26_1 = 0, $41_1 = 0;
  $6_1 = global$0 - 32 | 0;
  global$0 = $6_1;
  label$1 : {
   label$2 : {
    if (($5_1 | 0) != (9189 | 0)) {
     break label$2
    }
    if (!$1_1) {
     break label$1
    }
    $96($6_1 | 0, HEAP32[($1_1 + 44 | 0) >> 2] | 0 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0, HEAP32[($1_1 + 40 | 0) >> 2] | 0 | 0);
    $1_1 = HEAP32[($6_1 + 8 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[$6_1 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($6_1 + 4 | 0) >> 2] | 0;
    $26_1 = i64toi32_i32$0;
    i64toi32_i32$0 = $0_1;
    HEAP32[i64toi32_i32$0 >> 2] = $26_1;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $1_1;
    global$0 = $6_1 + 32 | 0;
    return;
   }
   $98($6_1 + 16 | 0 | 0, $1_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0);
   $1_1 = HEAP32[($6_1 + 24 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($6_1 + 16 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($6_1 + 20 | 0) >> 2] | 0;
   $41_1 = i64toi32_i32$1;
   i64toi32_i32$1 = $0_1;
   HEAP32[i64toi32_i32$1 >> 2] = $41_1;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $1_1;
   global$0 = $6_1 + 32 | 0;
   return;
  }
  $14();
  abort();
 }
 
 function $97($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7_1 = 0, $10_1 = 0, $10$hi = 0, $27_1 = 0, $6_1 = 0, $9_1 = 0, $8_1 = 0, $9$hi = 0, $28_1 = 0, $184 = 0, $245 = 0, $248 = 0, $251 = 0, $254 = 0, $257 = 0, $260 = 0, $263 = 0, $266 = 0;
  $5_1 = global$0 - 384 | 0;
  global$0 = $5_1;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 19;
  HEAP32[($5_1 + 296 | 0) >> 2] = 0;
  HEAP32[($5_1 + 300 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($5_1 + 376 | 0) >> 2] = 0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 368 | 0) >> 2] = 0;
  HEAP32[($5_1 + 372 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 360 | 0) >> 2] = 0;
  HEAP32[($5_1 + 364 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 352 | 0) >> 2] = 0;
  HEAP32[($5_1 + 356 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 344 | 0) >> 2] = 0;
  HEAP32[($5_1 + 348 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 336 | 0) >> 2] = 0;
  HEAP32[($5_1 + 340 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 328 | 0) >> 2] = 0;
  HEAP32[($5_1 + 332 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 320 | 0) >> 2] = 0;
  HEAP32[($5_1 + 324 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 312 | 0) >> 2] = 0;
  HEAP32[($5_1 + 316 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $5_1;
  i64toi32_i32$0 = 0;
  HEAP32[($5_1 + 304 | 0) >> 2] = 0;
  HEAP32[($5_1 + 308 | 0) >> 2] = i64toi32_i32$0;
  $6_1 = HEAP32[(0 + 67736 | 0) >> 2] | 0;
  HEAP32[(0 + 67736 | 0) >> 2] = $5_1 + 296 | 0;
  HEAP32[($5_1 + 296 | 0) >> 2] = $6_1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       if (($4_1 | 0) != (9189 | 0)) {
        break label$5
       }
       if (!$1_1) {
        break label$4
       }
       $4_1 = HEAP32[($1_1 + 44 | 0) >> 2] | 0;
       HEAP32[($5_1 + 304 | 0) >> 2] = $4_1;
       $97($5_1 + 56 | 0 | 0, $4_1 | 0, $2_1 | 0, $3_1 | 0, HEAP32[($1_1 + 40 | 0) >> 2] | 0 | 0);
       $2_1 = HEAP32[($5_1 + 56 | 0) >> 2] | 0;
       HEAP32[($5_1 + 308 | 0) >> 2] = $2_1;
       $7_1 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
       HEAP32[($5_1 + 312 | 0) >> 2] = $7_1;
       $4_1 = HEAP32[($5_1 + 64 | 0) >> 2] | 0;
       $3_1 = HEAP32[($5_1 + 60 | 0) >> 2] | 0;
       $99($7_1 | 0, HEAP32[($1_1 + 32 | 0) >> 2] | 0 | 0);
       $7_1 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
       HEAP32[($5_1 + 316 | 0) >> 2] = $7_1;
       $8_1 = HEAP32[($1_1 + 8 | 0) >> 2] | 0;
       HEAP32[($5_1 + 320 | 0) >> 2] = $8_1;
       $96($5_1 + 40 | 0 | 0, $7_1 | 0, $8_1 | 0, HEAP32[($1_1 + 12 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 16 | 0) >> 2] | 0 | 0, HEAP32[($1_1 + 32 | 0) >> 2] | 0 | 0);
       HEAP32[($5_1 + 324 | 0) >> 2] = HEAP32[($5_1 + 48 | 0) >> 2] | 0;
       $7_1 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
       HEAP32[($5_1 + 328 | 0) >> 2] = $7_1;
       if ($3_1 >>> 0 > $4_1 >>> 0) {
        break label$3
       }
       $96($5_1 + 24 | 0 | 0, $7_1 | 0, $2_1 | 0, $3_1 | 0, $4_1 | 0, HEAP32[($1_1 + 32 | 0) >> 2] | 0 | 0);
       HEAP32[($5_1 + 332 | 0) >> 2] = HEAP32[($5_1 + 32 | 0) >> 2] | 0;
       $3_1 = HEAP32[($1_1 + 36 | 0) >> 2] | 0;
       HEAP32[($5_1 + 336 | 0) >> 2] = $3_1;
       $97($5_1 + 8 | 0 | 0, $3_1 | 0, $2_1 | 0, $4_1 | 0, HEAP32[($1_1 + 32 | 0) >> 2] | 0 | 0);
       HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
       $1_1 = HEAP32[($5_1 + 8 | 0) >> 2] | 0;
       HEAP32[($5_1 + 340 | 0) >> 2] = $1_1;
       i64toi32_i32$2 = $5_1;
       i64toi32_i32$0 = HEAP32[($5_1 + 12 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($5_1 + 16 | 0) >> 2] | 0;
       $9_1 = i64toi32_i32$0;
       $9$hi = i64toi32_i32$1;
       HEAP32[$0_1 >> 2] = $1_1;
       i64toi32_i32$0 = $0_1;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $9_1;
       HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$1;
       global$0 = $5_1 + 384 | 0;
       return;
      }
      HEAP32[($5_1 + 348 | 0) >> 2] = $5_1 + 168 | 0;
      $4_1 = $8(216 | 0) | 0;
      HEAP32[($5_1 + 344 | 0) >> 2] = $4_1;
      if (!$1_1) {
       break label$4
      }
      $1_1 = $2($4_1 | 0, $1_1 | 0, 216 | 0) | 0;
      $1($5_1 + 168 | 0 | 0, 0 | 0, 64 | 0) | 0;
      HEAP32[($5_1 + 372 | 0) >> 2] = $5_1 + 232 | 0;
      i64toi32_i32$2 = $1_1;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 200 | 0) >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 204 | 0) >> 2] | 0;
      $9_1 = i64toi32_i32$1;
      $9$hi = i64toi32_i32$0;
      $4_1 = $8(128 | 0) | 0;
      HEAP8[$4_1 >> 0] = 128;
      HEAP32[($5_1 + 352 | 0) >> 2] = $4_1;
      i64toi32_i32$2 = i64toi32_i32$1;
      i64toi32_i32$1 = 0;
      i64toi32_i32$3 = 127;
      i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
      $10_1 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
      $10$hi = i64toi32_i32$1;
      i64toi32_i32$0 = $10_1;
      i64toi32_i32$2 = 0;
      i64toi32_i32$3 = 111;
      if (i64toi32_i32$1 >>> 0 > i64toi32_i32$2 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$0 >>> 0 > i64toi32_i32$3 >>> 0 | 0) | 0) {
       break label$2
      }
      i64toi32_i32$0 = $10$hi;
      i64toi32_i32$0 = 0;
      i64toi32_i32$3 = 112;
      i64toi32_i32$1 = $10$hi;
      i64toi32_i32$2 = $10_1;
      i64toi32_i32$5 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$2 >>> 0) + i64toi32_i32$1 | 0;
      i64toi32_i32$5 = i64toi32_i32$0 - i64toi32_i32$5 | 0;
      $10_1 = i64toi32_i32$3 - i64toi32_i32$2 | 0;
      $10$hi = i64toi32_i32$5;
      i64toi32_i32$0 = $10_1;
      i64toi32_i32$3 = 0;
      i64toi32_i32$2 = 128;
      if (i64toi32_i32$5 >>> 0 > i64toi32_i32$3 >>> 0 | ((i64toi32_i32$5 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$0 >>> 0 > i64toi32_i32$2 >>> 0 | 0) | 0) {
       break label$3
      }
      i64toi32_i32$0 = $10$hi;
      $7_1 = $10_1;
      break label$1;
     }
     $14();
     abort();
    }
    $67();
    abort();
   }
   i64toi32_i32$0 = $10$hi;
   $7_1 = 240 - $10_1 | 0;
  }
  $98($5_1 + 152 | 0 | 0, $1_1 | 0, $4_1 | 0, $7_1 | 0, 128 | 0);
  HEAP32[($5_1 + 356 | 0) >> 2] = HEAP32[($5_1 + 160 | 0) >> 2] | 0;
  i64toi32_i32$5 = $4_1;
  i64toi32_i32$0 = 0;
  $27_1 = 0;
  HEAP8[i64toi32_i32$5 >> 0] = $27_1;
  HEAP8[(i64toi32_i32$5 + 1 | 0) >> 0] = $27_1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$5 + 2 | 0) >> 0] = $27_1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$5 + 3 | 0) >> 0] = $27_1 >>> 24 | 0;
  HEAP8[(i64toi32_i32$5 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$5 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$5 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$5 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  $184 = i64toi32_i32$5 + 8 | 0;
  i64toi32_i32$0 = $9$hi;
  i64toi32_i32$2 = $9_1;
  i64toi32_i32$5 = 0;
  i64toi32_i32$3 = 3;
  i64toi32_i32$1 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$5 = i64toi32_i32$2 << i64toi32_i32$1 | 0;
   $28_1 = 0;
  } else {
   i64toi32_i32$5 = ((1 << i64toi32_i32$1 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$1 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$1 | 0) | 0;
   $28_1 = i64toi32_i32$2 << i64toi32_i32$1 | 0;
  }
  $74($184 | 0, 120 | 0, $28_1 | 0, i64toi32_i32$5 | 0);
  $98($5_1 + 136 | 0 | 0, $1_1 | 0, $4_1 | 0, 16 | 0, 128 | 0);
  HEAP32[(($5_1 + 296 | 0) + 64 | 0) >> 2] = HEAP32[($5_1 + 144 | 0) >> 2] | 0;
  label$6 : {
   label$7 : {
    label$8 : {
     if (HEAP32[($1_1 + 192 | 0) >> 2] | 0) {
      break label$8
     }
     $1($5_1 + 232 | 0 | 0, 0 | 0, 64 | 0) | 0;
     i64toi32_i32$0 = $1_1;
     i64toi32_i32$5 = HEAP32[i64toi32_i32$0 >> 2] | 0;
     i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
     $74($5_1 + 232 | 0 | 0, 64 | 0, i64toi32_i32$5 | 0, i64toi32_i32$2 | 0);
     i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] | 0;
     i64toi32_i32$5 = HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] | 0;
     $74(($5_1 + 232 | 0) + 8 | 0 | 0, 56 | 0, i64toi32_i32$2 | 0, i64toi32_i32$5 | 0);
     i64toi32_i32$5 = HEAP32[(i64toi32_i32$0 + 16 | 0) >> 2] | 0;
     i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 20 | 0) >> 2] | 0;
     $74(($5_1 + 232 | 0) + 16 | 0 | 0, 48 | 0, i64toi32_i32$5 | 0, i64toi32_i32$2 | 0);
     i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] | 0;
     i64toi32_i32$5 = HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] | 0;
     $74(($5_1 + 232 | 0) + 24 | 0 | 0, 40 | 0, i64toi32_i32$2 | 0, i64toi32_i32$5 | 0);
     i64toi32_i32$5 = HEAP32[(i64toi32_i32$0 + 32 | 0) >> 2] | 0;
     i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 36 | 0) >> 2] | 0;
     $74(($5_1 + 232 | 0) + 32 | 0 | 0, 32 | 0, i64toi32_i32$5 | 0, i64toi32_i32$2 | 0);
     i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 40 | 0) >> 2] | 0;
     i64toi32_i32$5 = HEAP32[(i64toi32_i32$0 + 44 | 0) >> 2] | 0;
     $74(($5_1 + 232 | 0) + 40 | 0 | 0, 24 | 0, i64toi32_i32$2 | 0, i64toi32_i32$5 | 0);
     label$9 : {
      if ((HEAP32[(i64toi32_i32$0 + 208 | 0) >> 2] | 0 | 0) == (6 | 0)) {
       break label$9
      }
      i64toi32_i32$0 = $1_1;
      i64toi32_i32$5 = HEAP32[(i64toi32_i32$0 + 48 | 0) >> 2] | 0;
      i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 52 | 0) >> 2] | 0;
      $74(($5_1 + 232 | 0) + 48 | 0 | 0, 16 | 0, i64toi32_i32$5 | 0, i64toi32_i32$2 | 0);
      i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 56 | 0) >> 2] | 0;
      i64toi32_i32$5 = HEAP32[(i64toi32_i32$0 + 60 | 0) >> 2] | 0;
      $74(($5_1 + 232 | 0) + 56 | 0 | 0, 8 | 0, i64toi32_i32$2 | 0, i64toi32_i32$5 | 0);
     }
     i64toi32_i32$0 = $5_1;
     i64toi32_i32$5 = HEAP32[($5_1 + 232 | 0) >> 2] | 0;
     i64toi32_i32$2 = HEAP32[($5_1 + 236 | 0) >> 2] | 0;
     $245 = i64toi32_i32$5;
     i64toi32_i32$5 = $5_1;
     HEAP32[($5_1 + 168 | 0) >> 2] = $245;
     HEAP32[($5_1 + 172 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5_1;
     i64toi32_i32$2 = HEAP32[($5_1 + 240 | 0) >> 2] | 0;
     i64toi32_i32$5 = HEAP32[($5_1 + 244 | 0) >> 2] | 0;
     $248 = i64toi32_i32$2;
     i64toi32_i32$2 = $5_1;
     HEAP32[($5_1 + 176 | 0) >> 2] = $248;
     HEAP32[($5_1 + 180 | 0) >> 2] = i64toi32_i32$5;
     i64toi32_i32$0 = $5_1;
     i64toi32_i32$5 = HEAP32[($5_1 + 248 | 0) >> 2] | 0;
     i64toi32_i32$2 = HEAP32[($5_1 + 252 | 0) >> 2] | 0;
     $251 = i64toi32_i32$5;
     i64toi32_i32$5 = $5_1;
     HEAP32[($5_1 + 184 | 0) >> 2] = $251;
     HEAP32[($5_1 + 188 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5_1;
     i64toi32_i32$2 = HEAP32[($5_1 + 256 | 0) >> 2] | 0;
     i64toi32_i32$5 = HEAP32[($5_1 + 260 | 0) >> 2] | 0;
     $254 = i64toi32_i32$2;
     i64toi32_i32$2 = $5_1;
     HEAP32[($5_1 + 192 | 0) >> 2] = $254;
     HEAP32[($5_1 + 196 | 0) >> 2] = i64toi32_i32$5;
     i64toi32_i32$0 = $5_1;
     i64toi32_i32$5 = HEAP32[($5_1 + 264 | 0) >> 2] | 0;
     i64toi32_i32$2 = HEAP32[($5_1 + 268 | 0) >> 2] | 0;
     $257 = i64toi32_i32$5;
     i64toi32_i32$5 = $5_1;
     HEAP32[($5_1 + 200 | 0) >> 2] = $257;
     HEAP32[($5_1 + 204 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5_1;
     i64toi32_i32$2 = HEAP32[($5_1 + 272 | 0) >> 2] | 0;
     i64toi32_i32$5 = HEAP32[($5_1 + 276 | 0) >> 2] | 0;
     $260 = i64toi32_i32$2;
     i64toi32_i32$2 = $5_1;
     HEAP32[($5_1 + 208 | 0) >> 2] = $260;
     HEAP32[($5_1 + 212 | 0) >> 2] = i64toi32_i32$5;
     i64toi32_i32$0 = $5_1;
     i64toi32_i32$5 = HEAP32[($5_1 + 280 | 0) >> 2] | 0;
     i64toi32_i32$2 = HEAP32[($5_1 + 284 | 0) >> 2] | 0;
     $263 = i64toi32_i32$5;
     i64toi32_i32$5 = $5_1;
     HEAP32[($5_1 + 216 | 0) >> 2] = $263;
     HEAP32[($5_1 + 220 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5_1;
     i64toi32_i32$2 = HEAP32[($5_1 + 288 | 0) >> 2] | 0;
     i64toi32_i32$5 = HEAP32[($5_1 + 292 | 0) >> 2] | 0;
     $266 = i64toi32_i32$2;
     i64toi32_i32$2 = $5_1;
     HEAP32[($5_1 + 224 | 0) >> 2] = $266;
     HEAP32[($5_1 + 228 | 0) >> 2] = i64toi32_i32$5;
     $1_1 = HEAP32[($1_1 + 208 | 0) >> 2] | 0;
     $4_1 = $1_1 + -14 | 0;
     if ($4_1 >>> 0 <= 1 >>> 0) {
      break label$7
     }
     label$10 : {
      if (($1_1 | 0) != (6 | 0)) {
       break label$10
      }
      $69($5_1 + 88 | 0 | 0, $2_1 | 0, $5_1 + 168 | 0 | 0, 0 | 0, $3_1 | 0, 48 | 0);
      $4_1 = HEAP32[($5_1 + 96 | 0) >> 2] | 0;
      $2_1 = HEAP32[($5_1 + 92 | 0) >> 2] | 0;
      $1_1 = HEAP32[($5_1 + 88 | 0) >> 2] | 0;
      break label$6;
     }
     $69($5_1 + 72 | 0 | 0, $2_1 | 0, $5_1 + 168 | 0 | 0, 0 | 0, $3_1 | 0, 64 | 0);
     $4_1 = HEAP32[($5_1 + 80 | 0) >> 2] | 0;
     $2_1 = HEAP32[($5_1 + 76 | 0) >> 2] | 0;
     $1_1 = HEAP32[($5_1 + 72 | 0) >> 2] | 0;
     break label$6;
    }
    $1_1 = $8(8 | 0) | 0;
    HEAP32[($5_1 + 364 | 0) >> 2] = $1_1;
    HEAP32[($5_1 + 368 | 0) >> 2] = $1_1;
    HEAP32[($1_1 + 4 | 0) >> 2] = 9;
    HEAP32[$1_1 >> 2] = 67374;
    $9(34 | 0, $1_1 | 0);
    abort();
   }
   label$11 : {
    switch ($4_1 | 0) {
    case 1:
     $69($5_1 + 120 | 0 | 0, $2_1 | 0, $5_1 + 168 | 0 | 0, 0 | 0, $3_1 | 0, 32 | 0);
     $4_1 = HEAP32[($5_1 + 128 | 0) >> 2] | 0;
     $2_1 = HEAP32[($5_1 + 124 | 0) >> 2] | 0;
     $1_1 = HEAP32[($5_1 + 120 | 0) >> 2] | 0;
     break label$6;
    default:
     break label$11;
    };
   }
   $69($5_1 + 104 | 0 | 0, $2_1 | 0, $5_1 + 168 | 0 | 0, 0 | 0, $3_1 | 0, 28 | 0);
   $4_1 = HEAP32[($5_1 + 112 | 0) >> 2] | 0;
   $2_1 = HEAP32[($5_1 + 108 | 0) >> 2] | 0;
   $1_1 = HEAP32[($5_1 + 104 | 0) >> 2] | 0;
  }
  HEAP32[($5_1 + 376 | 0) >> 2] = $1_1;
  HEAP32[(0 + 67736 | 0) >> 2] = $6_1;
  HEAP32[($0_1 + 8 | 0) >> 2] = $4_1;
  HEAP32[($0_1 + 4 | 0) >> 2] = $2_1;
  HEAP32[$0_1 >> 2] = $1_1;
  global$0 = $5_1 + 384 | 0;
 }
 
 function $98($0_1, $1_1, $2_1, $3_1, $4_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3_1 = $3_1 | 0;
  $4_1 = $4_1 | 0;
  var $5_1 = 0, $6_1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, $8_1 = 0, $10_1 = 0, $10$hi = 0, $12$hi = 0, $24_1 = 0;
  label$1 : {
   if ($1_1) {
    break label$1
   }
   $14();
   abort();
  }
  $8_1 = $1_1;
  i64toi32_i32$2 = $1_1;
  i64toi32_i32$0 = HEAP32[($1_1 + 200 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1_1 + 204 | 0) >> 2] | 0;
  $10_1 = i64toi32_i32$0;
  $10$hi = i64toi32_i32$1;
  i64toi32_i32$0 = $3_1;
  i64toi32_i32$1 = $3_1 >> 31 | 0;
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $10$hi;
  i64toi32_i32$2 = $10_1;
  i64toi32_i32$0 = $12$hi;
  i64toi32_i32$4 = i64toi32_i32$2 + $3_1 | 0;
  i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
  if (i64toi32_i32$4 >>> 0 < $3_1 >>> 0) {
   i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
  }
  i64toi32_i32$2 = $8_1;
  HEAP32[(i64toi32_i32$2 + 200 | 0) >> 2] = i64toi32_i32$4;
  HEAP32[(i64toi32_i32$2 + 204 | 0) >> 2] = i64toi32_i32$5;
  label$2 : {
   label$3 : {
    label$4 : {
     $5_1 = HEAP32[($1_1 + 192 | 0) >> 2] | 0;
     if (($5_1 | 0) >= (1 | 0)) {
      break label$4
     }
     $5_1 = $3_1;
     break label$3;
    }
    if ($5_1 >>> 0 >= 129 >>> 0) {
     break label$2
    }
    $24_1 = ($1_1 + $5_1 | 0) + 64 | 0;
    $5_1 = 128 - $5_1 | 0;
    $6_1 = $5_1 >>> 0 < $3_1 >>> 0 ? $5_1 : $3_1;
    $50($24_1 | 0, $2_1 | 0, $6_1 | 0);
    $5_1 = (HEAP32[($1_1 + 192 | 0) >> 2] | 0) + $6_1 | 0;
    HEAP32[($1_1 + 192 | 0) >> 2] = $5_1;
    label$5 : {
     if (($5_1 | 0) != (128 | 0)) {
      break label$5
     }
     $77($1_1 | 0, $1_1 + 64 | 0 | 0, 128 | 0, 128 | 0);
     HEAP32[($1_1 + 192 | 0) >> 2] = 0;
    }
    if ($3_1 >>> 0 > $4_1 >>> 0) {
     break label$2
    }
    $4_1 = $4_1 - $6_1 | 0;
    $5_1 = $3_1 - $6_1 | 0;
    $2_1 = $2_1 + $6_1 | 0;
   }
   label$6 : {
    if (($5_1 | 0) < (128 | 0)) {
     break label$6
    }
    $6_1 = $5_1 & -128 | 0;
    if ($4_1 >>> 0 < $6_1 >>> 0) {
     break label$2
    }
    $77($1_1 | 0, $2_1 | 0, $6_1 | 0, $4_1 | 0);
    if ($5_1 >>> 0 > $4_1 >>> 0) {
     break label$2
    }
    $5_1 = $5_1 - $6_1 | 0;
    $2_1 = $2_1 + $6_1 | 0;
   }
   label$7 : {
    if (($5_1 | 0) <= (0 | 0)) {
     break label$7
    }
    $5_1 = $5_1 >>> 0 < 128 >>> 0 ? $5_1 : 128;
    $50($1_1 + 64 | 0 | 0, $2_1 | 0, $5_1 | 0);
    HEAP32[($1_1 + 192 | 0) >> 2] = $5_1;
   }
   i64toi32_i32$2 = $0_1;
   i64toi32_i32$5 = 0;
   HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = 0;
   HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] = i64toi32_i32$5;
   HEAP32[i64toi32_i32$2 >> 2] = $3_1;
   return;
  }
  $67();
  abort();
 }
 
 function $99($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_1 = 0;
  $2_1 = global$0 - 16 | 0;
  global$0 = $2_1;
  label$1 : {
   label$2 : {
    if (($1_1 | 0) != (9189 | 0)) {
     break label$2
    }
    if (!$0_1) {
     break label$1
    }
    $99(HEAP32[($0_1 + 44 | 0) >> 2] | 0 | 0, HEAP32[($0_1 + 40 | 0) >> 2] | 0 | 0);
    $96($2_1 | 0, HEAP32[($0_1 + 44 | 0) >> 2] | 0 | 0, HEAP32[($0_1 + 20 | 0) >> 2] | 0 | 0, HEAP32[($0_1 + 24 | 0) >> 2] | 0 | 0, HEAP32[($0_1 + 28 | 0) >> 2] | 0 | 0, HEAP32[($0_1 + 40 | 0) >> 2] | 0 | 0);
    global$0 = $2_1 + 16 | 0;
    return;
   }
   $76($0_1 | 0);
   global$0 = $2_1 + 16 | 0;
   return;
  }
  $14();
  abort();
 }
 
 function $100($0_1) {
  $0_1 = $0_1 | 0;
 }
 
 function legalfunc$wasm2js_scratch_load_i64() {
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $8_1 = 0, $1_1 = 0, $1$hi = 0, $4$hi = 0;
  i64toi32_i32$0 = 0;
  $1_1 = legalimport$wasm2js_scratch_load_i64() | 0;
  $1$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = getTempRet0() | 0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $8_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $8_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $4$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$0 = $1_1;
  i64toi32_i32$2 = $4$hi;
  i64toi32_i32$3 = $8_1;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$0 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$0 | 0;
 }
 
 function legalfunc$wasm2js_scratch_store_i64($0_1, $0$hi) {
  $0_1 = $0_1 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $8_1 = 0, $2_1 = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = $0$hi;
  $2_1 = $0_1;
  i64toi32_i32$2 = $0_1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $8_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $8_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  legalimport$wasm2js_scratch_store_i64($2_1 | 0, $8_1 | 0);
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21_1 = 0, $22_1 = 0, var$6 = 0, $24_1 = 0, $17_1 = 0, $18_1 = 0, $23_1 = 0, $29_1 = 0, $45_1 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17_1 = Math_imul(var$4, var$5);
  $18_1 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23_1 = $17_1 + Math_imul($18_1, $21_1) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29_1 = $23_1 + Math_imul($22_1, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45_1 = $29_1 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45_1 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24_1 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24_1 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24_1;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4sdiv3Div3div17he78fc483e41d7ec7E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$2$hi = 0, i64toi32_i32$6 = 0, $21_1 = 0, $22_1 = 0, $23_1 = 0, $7$hi = 0, $9_1 = 0, $9$hi = 0, $14$hi = 0, $16$hi = 0, $17_1 = 0, $17$hi = 0, $23$hi = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$2 = var$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$0 >> 31 | 0;
   $21_1 = i64toi32_i32$0 >> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >> i64toi32_i32$4 | 0;
   $21_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  var$2 = $21_1;
  var$2$hi = i64toi32_i32$1;
  i64toi32_i32$1 = var$0$hi;
  i64toi32_i32$1 = var$2$hi;
  i64toi32_i32$0 = var$2;
  i64toi32_i32$2 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $7$hi = i64toi32_i32$2;
  i64toi32_i32$2 = i64toi32_i32$1;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
  i64toi32_i32$0 = var$2$hi;
  i64toi32_i32$3 = var$2;
  i64toi32_i32$4 = i64toi32_i32$1 - i64toi32_i32$3 | 0;
  i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0;
  i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
  i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
  $9_1 = i64toi32_i32$4;
  $9$hi = i64toi32_i32$5;
  i64toi32_i32$5 = var$1$hi;
  i64toi32_i32$2 = var$1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$0 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$5 >> 31 | 0;
   $22_1 = i64toi32_i32$5 >> i64toi32_i32$0 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$5 >> i64toi32_i32$0 | 0;
   $22_1 = (((1 << i64toi32_i32$0 | 0) - 1 | 0) & i64toi32_i32$5 | 0) << (32 - i64toi32_i32$0 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$0 | 0) | 0;
  }
  var$2 = $22_1;
  var$2$hi = i64toi32_i32$1;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = var$2$hi;
  i64toi32_i32$5 = var$2;
  i64toi32_i32$2 = var$1$hi;
  i64toi32_i32$3 = var$1;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $14$hi = i64toi32_i32$2;
  i64toi32_i32$2 = i64toi32_i32$1;
  i64toi32_i32$2 = $14$hi;
  i64toi32_i32$1 = i64toi32_i32$5 ^ i64toi32_i32$3 | 0;
  i64toi32_i32$5 = var$2$hi;
  i64toi32_i32$3 = var$2;
  i64toi32_i32$0 = i64toi32_i32$1 - i64toi32_i32$3 | 0;
  i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0;
  i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$5 | 0;
  i64toi32_i32$4 = i64toi32_i32$2 - i64toi32_i32$4 | 0;
  $16$hi = i64toi32_i32$4;
  i64toi32_i32$4 = $9$hi;
  i64toi32_i32$1 = $16$hi;
  i64toi32_i32$1 = __wasm_i64_udiv($9_1 | 0, i64toi32_i32$4 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$4 = i64toi32_i32$HIGH_BITS;
  $17_1 = i64toi32_i32$1;
  $17$hi = i64toi32_i32$4;
  i64toi32_i32$4 = var$1$hi;
  i64toi32_i32$4 = var$0$hi;
  i64toi32_i32$4 = var$1$hi;
  i64toi32_i32$2 = var$1;
  i64toi32_i32$1 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$1 = i64toi32_i32$4 ^ i64toi32_i32$1 | 0;
  i64toi32_i32$4 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$5 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = i64toi32_i32$1 >> 31 | 0;
   $23_1 = i64toi32_i32$1 >> i64toi32_i32$5 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >> i64toi32_i32$5 | 0;
   $23_1 = (((1 << i64toi32_i32$5 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$5 | 0) | 0 | (i64toi32_i32$4 >>> i64toi32_i32$5 | 0) | 0;
  }
  var$0 = $23_1;
  var$0$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $17$hi;
  i64toi32_i32$1 = $17_1;
  i64toi32_i32$4 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$4 = i64toi32_i32$2 ^ i64toi32_i32$4 | 0;
  $23$hi = i64toi32_i32$4;
  i64toi32_i32$4 = var$0$hi;
  i64toi32_i32$4 = $23$hi;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
  i64toi32_i32$1 = var$0$hi;
  i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$3 | 0;
  i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0;
  i64toi32_i32$0 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
  i64toi32_i32$0 = i64toi32_i32$4 - i64toi32_i32$0 | 0;
  i64toi32_i32$2 = i64toi32_i32$5;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $37_1 = 0, $38_1 = 0, $39_1 = 0, $40_1 = 0, $41_1 = 0, $42_1 = 0, $43_1 = 0, $44_1 = 0, var$8$hi = 0, $45_1 = 0, $46_1 = 0, $47_1 = 0, $48_1 = 0, var$7$hi = 0, $49_1 = 0, $63$hi = 0, $65_1 = 0, $65$hi = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140 = 0, $140$hi = 0, $142$hi = 0, $144 = 0, $144$hi = 0, $151 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $37_1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $37_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $37_1;
             if (var$2) {
              block : {
               i64toi32_i32$1 = var$1$hi;
               var$3 = var$1;
               if (!var$3) {
                break label$11
               }
               i64toi32_i32$1 = var$1$hi;
               i64toi32_i32$0 = var$1;
               i64toi32_i32$2 = 0;
               i64toi32_i32$3 = 32;
               i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
               if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
                i64toi32_i32$2 = 0;
                $38_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               } else {
                i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
                $38_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
               }
               var$4 = $38_1;
               if (!var$4) {
                break label$9
               }
               var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
               if (var$2 >>> 0 <= 31 >>> 0) {
                break label$8
               }
               break label$2;
              }
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = var$1$hi;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             legalfunc$wasm2js_scratch_store_i64(var$0 - Math_imul(var$2, var$3) | 0 | 0, i64toi32_i32$1 | 0);
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $39_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $39_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $39_1;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $40_1 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $40_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65_1 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $40_1;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65_1;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            legalfunc$wasm2js_scratch_store_i64(i64toi32_i32$3 | i64toi32_i32$0 | 0 | 0, i64toi32_i32$1 | 0);
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> ((__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0) | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $41_1 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $41_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        legalfunc$wasm2js_scratch_store_i64($41_1 | 0, i64toi32_i32$1 | 0);
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      legalfunc$wasm2js_scratch_store_i64(var$4 & var$0 | 0 | 0, i64toi32_i32$2 | 0);
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $42_1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $42_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $42_1;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $43_1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $43_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $43_1;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $44_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $44_1 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $44_1;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      block3 : {
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$1 = var$1;
       i64toi32_i32$3 = -1;
       i64toi32_i32$0 = -1;
       i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
       i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
       if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
        i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
       }
       var$8 = i64toi32_i32$4;
       var$8$hi = i64toi32_i32$5;
       label$15 : while (1) {
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$2 = var$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
         $45_1 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
         $45_1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        }
        $140 = $45_1;
        $140$hi = i64toi32_i32$1;
        i64toi32_i32$1 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = 0;
         $46_1 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
         $46_1 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
        }
        $142$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $140$hi;
        i64toi32_i32$1 = $140;
        i64toi32_i32$5 = $142$hi;
        i64toi32_i32$0 = $46_1;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
        var$5$hi = i64toi32_i32$5;
        $144 = var$5;
        $144$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$2 = var$8;
        i64toi32_i32$1 = var$5$hi;
        i64toi32_i32$0 = var$5;
        i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
        i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
        i64toi32_i32$5 = i64toi32_i32$3;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
         $47_1 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
         $47_1 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
        }
        var$6 = $47_1;
        var$6$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$1$hi;
        i64toi32_i32$2 = var$6$hi;
        i64toi32_i32$4 = var$6;
        i64toi32_i32$5 = var$1$hi;
        i64toi32_i32$0 = var$1;
        i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
        $151 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
        $151$hi = i64toi32_i32$5;
        i64toi32_i32$5 = $144$hi;
        i64toi32_i32$2 = $144;
        i64toi32_i32$4 = $151$hi;
        i64toi32_i32$0 = $151;
        i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
        i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
        var$5 = i64toi32_i32$1;
        var$5$hi = i64toi32_i32$3;
        i64toi32_i32$3 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
         $48_1 = 0;
        } else {
         i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $48_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        }
        $154$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$7$hi;
        i64toi32_i32$2 = $154$hi;
        i64toi32_i32$3 = $48_1;
        i64toi32_i32$5 = var$7$hi;
        i64toi32_i32$0 = var$7;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
        var$0$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$6$hi;
        i64toi32_i32$2 = var$6;
        i64toi32_i32$3 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
        var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
        var$6$hi = i64toi32_i32$3;
        var$7 = var$6;
        var$7$hi = i64toi32_i32$3;
        var$2 = var$2 + -1 | 0;
        if (var$2) {
         continue label$15
        }
        break label$15;
       };
       break label$13;
      }
     }
    }
    i64toi32_i32$3 = var$5$hi;
    legalfunc$wasm2js_scratch_store_i64(var$5 | 0, i64toi32_i32$3 | 0);
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $49_1 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $49_1 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $49_1;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   legalfunc$wasm2js_scratch_store_i64(var$0 | 0, i64toi32_i32$3 | 0);
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_sdiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4sdiv3Div3div17he78fc483e41d7ec7E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_urem(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$0 = legalfunc$wasm2js_scratch_load_i64() | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
 }
 
 function __wasm_rotl_i64(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, i64toi32_i32$4 = 0, var$2$hi = 0, var$2 = 0, $19_1 = 0, $20_1 = 0, $21_1 = 0, $22_1 = 0, $6$hi = 0, $8$hi = 0, $10_1 = 0, $10$hi = 0, $15$hi = 0, $17$hi = 0, $19$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$2 = var$1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$1 | 0;
  var$2 = i64toi32_i32$2 & i64toi32_i32$3 | 0;
  var$2$hi = i64toi32_i32$1;
  i64toi32_i32$1 = -1;
  i64toi32_i32$0 = -1;
  i64toi32_i32$2 = var$2$hi;
  i64toi32_i32$3 = var$2;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $19_1 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $19_1 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $6$hi = i64toi32_i32$2;
  i64toi32_i32$2 = var$0$hi;
  i64toi32_i32$2 = $6$hi;
  i64toi32_i32$1 = $19_1;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$0 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
  $8$hi = i64toi32_i32$0;
  i64toi32_i32$0 = var$2$hi;
  i64toi32_i32$0 = $8$hi;
  i64toi32_i32$2 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
  i64toi32_i32$1 = var$2$hi;
  i64toi32_i32$3 = var$2;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $20_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $20_1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $10_1 = $20_1;
  $10$hi = i64toi32_i32$1;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = var$1$hi;
  i64toi32_i32$3 = var$1;
  i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
  i64toi32_i32$5 = (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) + i64toi32_i32$2 | 0;
  i64toi32_i32$5 = i64toi32_i32$1 - i64toi32_i32$5 | 0;
  i64toi32_i32$1 = i64toi32_i32$4;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 63;
  i64toi32_i32$0 = i64toi32_i32$5 & i64toi32_i32$0 | 0;
  var$1 = i64toi32_i32$1 & i64toi32_i32$3 | 0;
  var$1$hi = i64toi32_i32$0;
  i64toi32_i32$0 = -1;
  i64toi32_i32$5 = -1;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$3 = var$1;
  i64toi32_i32$2 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$5 << i64toi32_i32$2 | 0;
   $21_1 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$2 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$2 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$2 | 0) | 0;
   $21_1 = i64toi32_i32$5 << i64toi32_i32$2 | 0;
  }
  $15$hi = i64toi32_i32$1;
  i64toi32_i32$1 = var$0$hi;
  i64toi32_i32$1 = $15$hi;
  i64toi32_i32$0 = $21_1;
  i64toi32_i32$5 = var$0$hi;
  i64toi32_i32$3 = var$0;
  i64toi32_i32$5 = i64toi32_i32$1 & i64toi32_i32$5 | 0;
  $17$hi = i64toi32_i32$5;
  i64toi32_i32$5 = var$1$hi;
  i64toi32_i32$5 = $17$hi;
  i64toi32_i32$1 = i64toi32_i32$0 & i64toi32_i32$3 | 0;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$3 = var$1;
  i64toi32_i32$2 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = 0;
   $22_1 = i64toi32_i32$5 >>> i64toi32_i32$2 | 0;
  } else {
   i64toi32_i32$0 = i64toi32_i32$5 >>> i64toi32_i32$2 | 0;
   $22_1 = (((1 << i64toi32_i32$2 | 0) - 1 | 0) & i64toi32_i32$5 | 0) << (32 - i64toi32_i32$2 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$2 | 0) | 0;
  }
  $19$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $10$hi;
  i64toi32_i32$5 = $10_1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$3 = $22_1;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$5 = i64toi32_i32$5 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 var FUNCTION_TABLE = [null, $89, $90, $100];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP8 = new global.Int8Array(newBuffer);
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__wasm_call_ctors": $0, 
  "memcpy": $2, 
  "memset": $1, 
  "_start": $34, 
  "go_scheduler": $48, 
  "resume": $62
 };
}

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
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },fd_write,syscall_js_valueLength,syscall_js_valueIndex,runtime_ticks,runtime_sleepTicks,syscall_js_valueCall,syscall_js_valueGet,syscall_js_valueNew,syscall_js_valueSet,syscall_js_valueSetIndex,syscall_js_stringVal,syscall_js_valuePrepareString,syscall_js_valueLoadString,getTempRet0},memasmFunc);
export var memory = retasmFunc.memory;
export var __wasm_call_ctors = retasmFunc.__wasm_call_ctors;
export var memcpy = retasmFunc.memcpy;
export var memset = retasmFunc.memset;
export var _start = retasmFunc._start;
export var go_scheduler = retasmFunc.go_scheduler;
export var resume = retasmFunc.resume;
