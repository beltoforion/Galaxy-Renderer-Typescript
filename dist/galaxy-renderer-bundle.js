var GalaxyRenderer;GalaxyRenderer =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => /* binding */ EPSILON,
/* harmony export */   "ARRAY_TYPE": () => /* binding */ ARRAY_TYPE,
/* harmony export */   "RANDOM": () => /* binding */ RANDOM,
/* harmony export */   "setMatrixArrayType": () => /* binding */ setMatrixArrayType,
/* harmony export */   "toRadian": () => /* binding */ toRadian,
/* harmony export */   "equals": () => /* binding */ equals
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "clone": () => /* binding */ clone,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "fromValues": () => /* binding */ fromValues,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "identity": () => /* binding */ identity,
/* harmony export */   "transpose": () => /* binding */ transpose,
/* harmony export */   "invert": () => /* binding */ invert,
/* harmony export */   "adjoint": () => /* binding */ adjoint,
/* harmony export */   "determinant": () => /* binding */ determinant,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "translate": () => /* binding */ translate,
/* harmony export */   "scale": () => /* binding */ scale,
/* harmony export */   "rotate": () => /* binding */ rotate,
/* harmony export */   "rotateX": () => /* binding */ rotateX,
/* harmony export */   "rotateY": () => /* binding */ rotateY,
/* harmony export */   "rotateZ": () => /* binding */ rotateZ,
/* harmony export */   "fromTranslation": () => /* binding */ fromTranslation,
/* harmony export */   "fromScaling": () => /* binding */ fromScaling,
/* harmony export */   "fromRotation": () => /* binding */ fromRotation,
/* harmony export */   "fromXRotation": () => /* binding */ fromXRotation,
/* harmony export */   "fromYRotation": () => /* binding */ fromYRotation,
/* harmony export */   "fromZRotation": () => /* binding */ fromZRotation,
/* harmony export */   "fromRotationTranslation": () => /* binding */ fromRotationTranslation,
/* harmony export */   "fromQuat2": () => /* binding */ fromQuat2,
/* harmony export */   "getTranslation": () => /* binding */ getTranslation,
/* harmony export */   "getScaling": () => /* binding */ getScaling,
/* harmony export */   "getRotation": () => /* binding */ getRotation,
/* harmony export */   "fromRotationTranslationScale": () => /* binding */ fromRotationTranslationScale,
/* harmony export */   "fromRotationTranslationScaleOrigin": () => /* binding */ fromRotationTranslationScaleOrigin,
/* harmony export */   "fromQuat": () => /* binding */ fromQuat,
/* harmony export */   "frustum": () => /* binding */ frustum,
/* harmony export */   "perspective": () => /* binding */ perspective,
/* harmony export */   "perspectiveFromFieldOfView": () => /* binding */ perspectiveFromFieldOfView,
/* harmony export */   "ortho": () => /* binding */ ortho,
/* harmony export */   "lookAt": () => /* binding */ lookAt,
/* harmony export */   "targetTo": () => /* binding */ targetTo,
/* harmony export */   "str": () => /* binding */ str,
/* harmony export */   "frob": () => /* binding */ frob,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiplyScalar": () => /* binding */ multiplyScalar,
/* harmony export */   "multiplyScalarAndAdd": () => /* binding */ multiplyScalarAndAdd,
/* harmony export */   "exactEquals": () => /* binding */ exactEquals,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "mul": () => /* binding */ mul,
/* harmony export */   "sub": () => /* binding */ sub
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "clone": () => /* binding */ clone,
/* harmony export */   "length": () => /* binding */ length,
/* harmony export */   "fromValues": () => /* binding */ fromValues,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "divide": () => /* binding */ divide,
/* harmony export */   "ceil": () => /* binding */ ceil,
/* harmony export */   "floor": () => /* binding */ floor,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "round": () => /* binding */ round,
/* harmony export */   "scale": () => /* binding */ scale,
/* harmony export */   "scaleAndAdd": () => /* binding */ scaleAndAdd,
/* harmony export */   "distance": () => /* binding */ distance,
/* harmony export */   "squaredDistance": () => /* binding */ squaredDistance,
/* harmony export */   "squaredLength": () => /* binding */ squaredLength,
/* harmony export */   "negate": () => /* binding */ negate,
/* harmony export */   "inverse": () => /* binding */ inverse,
/* harmony export */   "normalize": () => /* binding */ normalize,
/* harmony export */   "dot": () => /* binding */ dot,
/* harmony export */   "cross": () => /* binding */ cross,
/* harmony export */   "lerp": () => /* binding */ lerp,
/* harmony export */   "hermite": () => /* binding */ hermite,
/* harmony export */   "bezier": () => /* binding */ bezier,
/* harmony export */   "random": () => /* binding */ random,
/* harmony export */   "transformMat4": () => /* binding */ transformMat4,
/* harmony export */   "transformMat3": () => /* binding */ transformMat3,
/* harmony export */   "transformQuat": () => /* binding */ transformQuat,
/* harmony export */   "rotateX": () => /* binding */ rotateX,
/* harmony export */   "rotateY": () => /* binding */ rotateY,
/* harmony export */   "rotateZ": () => /* binding */ rotateZ,
/* harmony export */   "angle": () => /* binding */ angle,
/* harmony export */   "zero": () => /* binding */ zero,
/* harmony export */   "str": () => /* binding */ str,
/* harmony export */   "exactEquals": () => /* binding */ exactEquals,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "sub": () => /* binding */ sub,
/* harmony export */   "mul": () => /* binding */ mul,
/* harmony export */   "div": () => /* binding */ div,
/* harmony export */   "dist": () => /* binding */ dist,
/* harmony export */   "sqrDist": () => /* binding */ sqrDist,
/* harmony export */   "len": () => /* binding */ len,
/* harmony export */   "sqrLen": () => /* binding */ sqrLen,
/* harmony export */   "forEach": () => /* binding */ forEach
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./src/CumulativeDistributionFunction.ts":
/*!***********************************************!*\
  !*** ./src/CumulativeDistributionFunction.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CumulativeDistributionFunction": () => /* binding */ CumulativeDistributionFunction
/* harmony export */ });
class CumulativeDistributionFunction {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.width = 0;
        this.steps = 0;
        this.i0 = 0;
        this.k = 0;
        this.a = 0;
        this.r_bulge = 0;
        this.m1 = [];
        this.y1 = [];
        this.x1 = [];
        this.m2 = [];
        this.y2 = [];
        this.x2 = [];
    }
    probFromVal(fVal) {
        if (fVal < this.min || fVal > this.max)
            throw new Error("out of range");
        let h = 2 * ((this.max - this.min) / this.steps);
        let i = ((fVal - this.min) / h);
        let remainder = fVal - i * h;
        return (this.y1[i] + this.m1[i] * remainder);
    }
    valFromProb(fVal) {
        if (fVal < 0 || fVal > 1)
            throw new Error("out of range");
        let h = 1.0 / (this.y2.length - 1);
        let i = Math.floor(fVal / h);
        let remainder = fVal - i * h;
        return (this.y2[i] + this.m2[i] * remainder);
    }
    setupRealistic(i0, k, a, rad_bulge, min, max, nsteps) {
        this.min = min;
        this.max = max;
        this.steps = nsteps;
        this.i0 = i0;
        this.k = k;
        this.a = a;
        this.r_bulge = rad_bulge;
        this.buildCdf(nsteps);
    }
    buildCdf(nsteps) {
        let h = (this.max - this.min) / this.steps;
        let x = 0;
        let y = 0;
        this.x1 = [];
        this.y1 = [];
        this.x2 = [];
        this.y2 = [];
        this.m1 = [];
        this.m2 = [];
        // Simpson rule for integration of the distribution function
        this.y1.push(0.0);
        this.x1.push(0.0);
        for (let i = 0; i < this.steps; i += 2) {
            x = h * (i + 2);
            y += h / 3 * (this.intensity(this.min + i * h) + 4 * this.intensity(this.min + (i + 1) * h) + this.intensity(this.min + (i + 2) * h));
            this.m1.push((y - this.y1[this.y1.length - 1]) / (2 * h));
            this.x1.push(x);
            this.y1.push(y);
            //    printf("%2.2f, %2.2f, %2.2f\n", m_fMin + (i+2) * h, v, h);
        }
        this.m1.push(0.0);
        // all arrays must have the same length
        if (this.m1.length != this.x1.length || this.m1.length != this.y1.length)
            throw new Error("CumulativeDistributionFunction::BuildCDF: array size mismatch (1)!");
        // normieren
        for (let i = 0; i < this.y1.length; ++i) {
            this.y1[i] /= this.y1[this.y1.length - 1];
            this.m1[i] /= this.y1[this.y1.length - 1];
        }
        this.x2.push(0.0);
        this.y2.push(0.0);
        let p = 0;
        h = 1.0 / nsteps;
        for (let i = 1, k = 0; i < nsteps; ++i) {
            p = i * h;
            for (; this.y1[k + 1] <= p; ++k) {
            }
            y = this.x1[k] + (p - this.y1[k]) / this.m1[k];
            //    printf("%2.4f, %2.4f, k=%d, %2.4f, %2.4f\n", p, y, k, m_vY1[k], m_vM1[k]);
            this.m2.push((y - this.y2[this.y2.length - 1]) / h);
            this.x2.push(p);
            this.y2.push(y);
        }
        this.m2.push(0.0);
        // all arrays must have the same length
        if (this.m2.length != this.x2.length || this.m2.length != this.y2.length)
            throw new Error("CumulativeDistributionFunction::BuildCDF: array size mismatch (1)!");
    }
    intensityBulge(r, i0, k) {
        return i0 * Math.exp(-k * Math.pow(r, 0.25));
    }
    intensityDisc(r, i0, a) {
        return i0 * Math.exp(-r / a);
    }
    intensity(x) {
        return (x < this.r_bulge)
            ? this.intensityBulge(x, this.i0, this.k)
            : this.intensityDisc(x - this.r_bulge, this.intensityBulge(this.r_bulge, this.i0, this.k), this.a);
    }
}
;


/***/ }),

/***/ "./src/Galaxy.ts":
/*!***********************!*\
  !*** ./src/Galaxy.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Galaxy": () => /* binding */ Galaxy
/* harmony export */ });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./src/Types.ts");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helper */ "./src/Helper.ts");
/* harmony import */ var _CumulativeDistributionFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CumulativeDistributionFunction */ "./src/CumulativeDistributionFunction.ts");



class Galaxy {
    constructor(rad = 15000, radCore = 6000, deltaAng = 0.019, ex1 = 0.8, ex2 = 1, numStars = 60000) {
        this._stars = [];
        this._elEx1 = 0;
        this._elEx2 = 0;
        this._angleOffset = 0;
        this._radCore = 0;
        this._radGalaxy = 0;
        this._radFarField = 0;
        this._dustRenderSize = 0;
        this._numStars = 0;
        this._numH2 = 0;
        this._pertN = 0;
        this._pertAmp = 0;
        this._hasDarkMatter = true;
        this._baseTemp = 0;
        this._elEx1 = ex1;
        this._elEx2 = ex2;
        this._angleOffset = deltaAng;
        this._radCore = radCore;
        this._radGalaxy = rad;
        this._radFarField = rad * 2;
        this._numStars = numStars;
        this._numH2 = 400;
        this._pertN = 0;
        this._pertAmp = 0;
        this._hasDarkMatter = true;
        this._baseTemp = 4000;
        this._stars = [];
        this._dustRenderSize = 70;
    }
    initStarsAndDust() {
        this._stars = [];
        // First star ist the black hole at the centre
        let star = {
            "a": 0,
            "b": 0,
            "tiltAngle": 0,
            "theta0": 0,
            "velTheta": 0,
            "type": 0,
            "temp": 6000,
            "mag": 1
        };
        this._stars.push(star);
        //
        // 1.) Initialize the stars
        //
        let cdf = new _CumulativeDistributionFunction__WEBPACK_IMPORTED_MODULE_2__.CumulativeDistributionFunction();
        cdf.setupRealistic(1.0, // maximum intensity
        0.02, // k (bulge)
        this._radGalaxy / 3.0, // disc scale length
        this._radCore, // bulge radius
        0, // start  of the intnesity curve
        this._radFarField, // end of the intensity curve
        1000); // number of supporting points
        for (let i = 1; i < this._numStars; ++i) {
            let rad = cdf.valFromProb(_Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum());
            let star = new _Types__WEBPACK_IMPORTED_MODULE_0__.Star();
            star.a = rad;
            star.b = rad * this.getExcentricity(rad);
            star.tiltAngle = this.getAngularOffset(rad);
            star.theta0 = 360.0 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
            star.velTheta = this.getOrbitalVelocity(rad);
            star.temp = 6000 + (4000 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum() - 2000);
            star.mag = 0.1 + 0.4 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
            star.type = 0;
            // Make a small portion of the stars brighter
            if (i < this._numStars / 60) {
                star.mag = Math.min(star.mag + 0.1 + _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum() * 0.4, 1.0);
            }
            this._stars.push(star);
        }
        //
        // 2.) Initialise Dust:
        //
        //	The galaxy gets as many dust clouds as stars
        let x = 0;
        let y = 0;
        let rad = 0;
        for (let i = 0; i < this._numStars; ++i) {
            if (i % 2 == 0) {
                rad = cdf.valFromProb(_Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum());
            }
            else {
                x = 2 * this._radGalaxy * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum() - this._radGalaxy;
                y = 2 * this._radGalaxy * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum() - this._radGalaxy;
                rad = Math.sqrt(x * x + y * y);
            }
            let dustParticle = new _Types__WEBPACK_IMPORTED_MODULE_0__.Star();
            dustParticle.a = rad;
            dustParticle.b = rad * this.getExcentricity(rad);
            dustParticle.tiltAngle = this.getAngularOffset(rad);
            dustParticle.theta0 = 360.0 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
            dustParticle.velTheta = this.getOrbitalVelocity((dustParticle.a + dustParticle.b) / 2.0);
            dustParticle.type = 1;
            // I want the outer parts to appear blue, the inner parts yellow. I'm imposing
            // the following temperature distribution (no science here it just looks right)
            dustParticle.temp = this._baseTemp + rad / 4.5;
            dustParticle.mag = 0.02 + 0.15 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
            this._stars.push(dustParticle);
        }
        //
        // 3.) Initialize additional dust filaments
        //
        for (let i = 0; i < this._numStars / 100; ++i) {
            rad = cdf.valFromProb(_Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum());
            x = 2 * this._radGalaxy * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum() - this._radGalaxy;
            y = 2 * this._radGalaxy * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum() - this._radGalaxy;
            rad = Math.sqrt(x * x + y * y);
            let theta = 360.0 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
            let mag = 0.1 + 0.05 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
            let a = rad;
            let b = rad * this.getExcentricity(rad);
            let num = 100 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
            let temp = this._baseTemp + rad / 4.5 - 2000;
            for (let i = 0; i < num; ++i) {
                rad = rad + 200 - 400 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
                let dustParticle = new _Types__WEBPACK_IMPORTED_MODULE_0__.Star();
                dustParticle.a = rad;
                dustParticle.b = rad * this.getExcentricity(rad);
                dustParticle.tiltAngle = this.getAngularOffset(rad);
                dustParticle.theta0 = theta + 10 - 20 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
                dustParticle.velTheta = this.getOrbitalVelocity((dustParticle.a + dustParticle.b) / 2.0);
                // I want the outer parts to appear blue, the inner parts yellow. I'm imposing
                // the following temperature distribution (no science here it just looks right)
                dustParticle.temp = this._baseTemp + rad / 4.5 - 1000;
                ;
                dustParticle.mag = mag + 0.025 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
                dustParticle.type = 2;
                this._stars.push(dustParticle);
            }
        }
        //
        // 4.) Initialise H2 regions
        // 
        for (let i = 0; i < this._numH2; ++i) {
            x = 2 * this._radGalaxy * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum() - this._radGalaxy;
            y = 2 * this._radGalaxy * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum() - this._radGalaxy;
            rad = Math.sqrt(x * x + y * y);
            let particleH2 = new _Types__WEBPACK_IMPORTED_MODULE_0__.Star();
            particleH2.a = rad;
            particleH2.b = rad * this.getExcentricity(rad);
            particleH2.tiltAngle = this.getAngularOffset(rad);
            particleH2.theta0 = 360.0 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
            particleH2.velTheta = this.getOrbitalVelocity((particleH2.a + particleH2.b) / 2.0);
            particleH2.temp = 6000 + (6000 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum()) - 3000;
            particleH2.mag = 0.1 + 0.05 * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.rnum();
            particleH2.type = 3;
            this._stars.push(particleH2);
            // Push particle again with type 4 (bright red core of an h2 region)
            let particleH2Highlight = new _Types__WEBPACK_IMPORTED_MODULE_0__.Star();
            particleH2Highlight.a = particleH2.a;
            particleH2Highlight.b = particleH2.b;
            particleH2Highlight.tiltAngle = particleH2.tiltAngle;
            particleH2Highlight.theta0 = particleH2.theta0;
            particleH2Highlight.velTheta = particleH2.velTheta;
            particleH2Highlight.temp = particleH2.temp;
            particleH2Highlight.mag = particleH2.mag;
            particleH2Highlight.type = 4;
            this._stars.push(particleH2Highlight);
        }
    }
    reset(param) {
        this._baseTemp = param.baseTemp;
        this._elEx1 = param.ex1;
        this._elEx2 = param.ex2;
        this._elEx2 = param.ex2;
        this._angleOffset = param.deltaAng;
        this._radCore = param.radCore;
        this._radGalaxy = param.rad;
        this._radFarField = param.rad * 2; // there is no science behind this threshold it just looks nice
        this._numStars = param.numStars;
        this._dustRenderSize = param.dustRenderSize;
        this._hasDarkMatter = param.hasDarkMatter;
        this._pertN = param.pertN;
        this._pertAmp = param.pertAmp;
        this.initStarsAndDust();
    }
    get stars() {
        return this._stars;
    }
    get rad() {
        return this._radGalaxy;
    }
    set rad(value) {
        this._radGalaxy = value;
        this._radFarField = value * 2;
    }
    get coreRad() {
        return this._radCore;
    }
    set coreRad(value) {
        this._radCore = value;
    }
    get farFieldRad() {
        return this._radFarField;
    }
    getExcentricity(r) {
        if (r < this._radCore) {
            // Core region of the galaxy. Innermost part is round
            // excentricity increasing linear to the border of the core.
            return 1 + (r / this._radCore) * (this._elEx1 - 1);
        }
        else if (r > this._radCore && r <= this._radGalaxy) {
            return this._elEx1 + (r - this._radCore) / (this._radGalaxy - this._radCore) * (this._elEx2 - this._elEx1);
        }
        else if (r > this._radGalaxy && r < this._radFarField) {
            // excentricity is slowly reduced to 1.
            return this._elEx2 + (r - this._radGalaxy) / (this._radFarField - this._radGalaxy) * (1 - this._elEx2);
        }
        else
            return 1;
    }
    getOrbitalVelocity(rad) {
        let vel_kms = 0; // velovity in kilometer per seconds
        if (this._hasDarkMatter) {
            vel_kms = _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.velocityWithDarkMatter(rad);
        }
        else {
            vel_kms = _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.velocityWithoutDarkMatter(rad);
        }
        // Calculate velocity in degree per year
        let u = 2.0 * Math.PI * rad * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.PC_TO_KM;
        let time = u / (vel_kms * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.SEC_PER_YEAR);
        return 360.0 / time;
    }
    getAngularOffset(rad) {
        return rad * this._angleOffset;
    }
    get angleOffset() {
        return this._angleOffset;
    }
    set angleOffset(angle) {
        this._angleOffset = angle;
    }
    get exInner() {
        return this._elEx1;
    }
    set exInner(ex) {
        this._elEx1 = ex;
    }
    get exOuter() {
        return this._elEx2;
    }
    set exOuter(ex) {
        this._elEx2 = ex;
    }
    get dustRenderSize() {
        return this._dustRenderSize;
    }
    set dustRenderSize(value) {
        this._dustRenderSize = value;
    }
    get pertN() {
        return this._pertN;
    }
    set pertN(pertN) {
        this._pertN = pertN;
    }
    get pertAmp() {
        return this._pertAmp;
    }
    get baseTemp() {
        return this._baseTemp;
    }
    get hasDarkMatter() {
        return this._hasDarkMatter;
    }
    set hasDarkMatter(hasDarkMatter) {
        this._hasDarkMatter = hasDarkMatter;
        this.initStarsAndDust();
    }
}


/***/ }),

/***/ "./src/GalaxyRenderer.ts":
/*!*******************************!*\
  !*** ./src/GalaxyRenderer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderUpdateHint": () => /* binding */ RenderUpdateHint,
/* harmony export */   "GalaxyRenderer": () => /* binding */ GalaxyRenderer
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./src/Types.ts");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helper */ "./src/Helper.ts");
/* harmony import */ var _VertexBufferLines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VertexBufferLines */ "./src/VertexBufferLines.ts");
/* harmony import */ var _VertexBufferStars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VertexBufferStars */ "./src/VertexBufferStars.ts");
/* harmony import */ var _Galaxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Galaxy */ "./src/Galaxy.ts");






var DisplayItem;
(function (DisplayItem) {
    DisplayItem[DisplayItem["NONE"] = 0] = "NONE";
    DisplayItem[DisplayItem["AXIS"] = 1] = "AXIS";
    DisplayItem[DisplayItem["STARS"] = 2] = "STARS";
    DisplayItem[DisplayItem["DENSITY_WAVES"] = 4] = "DENSITY_WAVES";
    DisplayItem[DisplayItem["VELOCITY"] = 8] = "VELOCITY";
    DisplayItem[DisplayItem["DUST"] = 16] = "DUST";
    DisplayItem[DisplayItem["H2"] = 32] = "H2";
    DisplayItem[DisplayItem["FILAMENTS"] = 64] = "FILAMENTS";
})(DisplayItem || (DisplayItem = {}));
var RenderUpdateHint;
(function (RenderUpdateHint) {
    RenderUpdateHint[RenderUpdateHint["NONE"] = 0] = "NONE";
    RenderUpdateHint[RenderUpdateHint["DENSITY_WAVES"] = 2] = "DENSITY_WAVES";
    RenderUpdateHint[RenderUpdateHint["AXIS"] = 4] = "AXIS";
    RenderUpdateHint[RenderUpdateHint["STARS"] = 8] = "STARS";
    RenderUpdateHint[RenderUpdateHint["CREATE_VELOCITY_CURVE"] = 16] = "CREATE_VELOCITY_CURVE";
})(RenderUpdateHint || (RenderUpdateHint = {}));
class GalaxyRenderer {
    constructor(canvas) {
        this.vertDensityWaves = null;
        this.vertAxis = null;
        this.vertVelocityCurve = null;
        this.vertStars = null;
        this._fov = 0;
        this.matProjection = gl_matrix__WEBPACK_IMPORTED_MODULE_5__.create();
        this.matView = gl_matrix__WEBPACK_IMPORTED_MODULE_5__.create();
        this.camPos = gl_matrix__WEBPACK_IMPORTED_MODULE_6__.create();
        this.camLookAt = gl_matrix__WEBPACK_IMPORTED_MODULE_6__.create();
        this.camOrient = gl_matrix__WEBPACK_IMPORTED_MODULE_6__.create();
        this.time = 0;
        this.flags = DisplayItem.STARS | DisplayItem.AXIS | DisplayItem.DUST | DisplayItem.H2 | DisplayItem.FILAMENTS;
        this._renderUpdateHint = RenderUpdateHint.STARS | RenderUpdateHint.DENSITY_WAVES | RenderUpdateHint.AXIS | RenderUpdateHint.CREATE_VELOCITY_CURVE;
        this._galaxy = new _Galaxy__WEBPACK_IMPORTED_MODULE_4__.Galaxy();
        this.preset = [];
        this.TimeStepSize = 100000.0;
        this.dustRenderSizeBase = 187;
        this.canvas = canvas;
        this.gl = this.canvas.getContext("webgl2");
        if (this.gl === null)
            throw new Error("Unable to initialize WebGL2. Your browser may not support it.");
        this.vertDensityWaves = new _VertexBufferLines__WEBPACK_IMPORTED_MODULE_2__.VertexBufferLines(this.gl, 2, this.gl.STATIC_DRAW);
        this.vertAxis = new _VertexBufferLines__WEBPACK_IMPORTED_MODULE_2__.VertexBufferLines(this.gl, 1, this.gl.STATIC_DRAW);
        this.vertVelocityCurve = new _VertexBufferLines__WEBPACK_IMPORTED_MODULE_2__.VertexBufferLines(this.gl, 1, this.gl.DYNAMIC_DRAW);
        this.vertStars = new _VertexBufferStars__WEBPACK_IMPORTED_MODULE_3__.VertexBufferStars(this.gl);
        document.addEventListener('keydown', (event) => this.onKeydown(event));
        this.initGL(this.gl);
        this.initSimulation();
        // Start the main loop
        window.requestAnimationFrame((timeStamp) => this.mainLoop(timeStamp));
    }
    set renderUpdateHint(hint) {
        this._renderUpdateHint = hint;
    }
    get renderUpdateHint() {
        return this._renderUpdateHint;
    }
    get galaxy() {
        return this._galaxy;
    }
    onKeydown(event) {
        /*
                const keyName = event.key;
                console.log("Key " + keyName + " pressed")
        
                switch(keyName)
                {
                    case '+':
                        this.galaxy.exInner = Math.max(this.galaxy.exInner - 0.05, 0.0)
                        this.renderUpdateHint |= RenderUpdateHint.DENSITY_WAVES
                        break;
        
                    case '-':
                        this.galaxy.exInner = this.galaxy.exInner + 0.05
                        this.renderUpdateHint |= RenderUpdateHint.DENSITY_WAVES
                        break;
                }
        */
    }
    set fov(value) {
        this._fov = value;
        this.galaxy.dustRenderSize = Math.max(this.dustRenderSizeBase - 0.0026 * this._fov, 0);
        this.adjustCamera();
        this.renderUpdateHint |= RenderUpdateHint.AXIS | RenderUpdateHint.DENSITY_WAVES;
    }
    get fov() {
        return this._fov;
    }
    set dustRenderSize(value) {
        this.dustRenderSizeBase = value;
        this.galaxy.dustRenderSize = Math.max(this.dustRenderSizeBase - 0.0026 * this._fov, 0);
        //        this.galaxy.dustRenderSize = value;
    }
    get dustRenderSize() {
        //        return this.galaxy.dustRenderSize;
        return this.dustRenderSizeBase;
    }
    hasFlag(flag) {
        return (this.flags & flag) != 0;
    }
    setFlag(flag, stat) {
        if (stat)
            this.flags |= flag;
        else
            this.flags &= ~flag;
    }
    get showAxis() {
        return this.hasFlag(DisplayItem.AXIS);
    }
    set showAxis(value) {
        this.setFlag(DisplayItem.AXIS, value);
    }
    get showDensityWaves() {
        return this.hasFlag(DisplayItem.DENSITY_WAVES);
    }
    set showDensityWaves(value) {
        this.setFlag(DisplayItem.DENSITY_WAVES, value);
    }
    get showDust() {
        return this.hasFlag(DisplayItem.DUST);
    }
    set showDust(value) {
        this.setFlag(DisplayItem.DUST, value);
    }
    get showDustFilaments() {
        return this.hasFlag(DisplayItem.FILAMENTS);
    }
    set showDustFilaments(value) {
        this.setFlag(DisplayItem.FILAMENTS, value);
    }
    get showStars() {
        return this.hasFlag(DisplayItem.STARS);
    }
    set showStars(value) {
        this.setFlag(DisplayItem.STARS, value);
    }
    get showH2() {
        return this.hasFlag(DisplayItem.H2);
    }
    set showH2(value) {
        this.setFlag(DisplayItem.H2, value);
    }
    get showVelocity() {
        return this.hasFlag(DisplayItem.VELOCITY);
    }
    set showVelocity(value) {
        this.setFlag(DisplayItem.VELOCITY, value);
    }
    get hasDarkMatter() {
        return this.galaxy.hasDarkMatter;
    }
    set hasDarkMatter(hasDarkMatter) {
        this.galaxy.hasDarkMatter = hasDarkMatter;
        this.renderUpdateHint |= RenderUpdateHint.STARS | RenderUpdateHint.CREATE_VELOCITY_CURVE;
    }
    selectPreset(idx) {
        this.galaxy.reset(this.preset[idx]);
        this.fov = this.galaxy.rad * 3;
        this.renderUpdateHint |= RenderUpdateHint.DENSITY_WAVES | RenderUpdateHint.STARS | RenderUpdateHint.CREATE_VELOCITY_CURVE;
    }
    updateDensityWaveParam(coreRad, rad, angularOffset, innerEx, outterEx, pertN) {
        this.galaxy.coreRad = coreRad;
        this.galaxy.rad = rad;
        this.galaxy.exInner = innerEx;
        this.galaxy.exOuter = outterEx;
        this.galaxy.angleOffset = angularOffset;
        this.galaxy.pertN = pertN;
        this.renderUpdateHint |= RenderUpdateHint.DENSITY_WAVES;
    }
    initSimulation() {
        this.preset.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.GalaxyParam(13000, 4000, 0.0004, 0.85, 0.95, 40000, true, 2, 40, 70, 4000));
        this.preset.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.GalaxyParam(16000, 4000, .0003, .8, .85, 40000, true, 0, 40, 58, 4500));
        this.preset.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.GalaxyParam(13000, 4000, .00064, .9, .9, 40000, true, 0, 0, 75, 4100));
        this.preset.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.GalaxyParam(13000, 4000, .0004, 1.35, 1.05, 40000, true, 0, 0, 70, 4500));
        this.preset.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.GalaxyParam(13000, 4500, .0002, .65, .95, 40000, true, 3, 72, 80, 4000));
        this.preset.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.GalaxyParam(15000, 4000, .0003, 1.45, 1.0, 40000, true, 0, 0, 80, 4500));
        this.preset.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.GalaxyParam(14000, 12500, .0002, 0.65, 0.95, 40000, true, 3, 72, 85, 2200));
        this.preset.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.GalaxyParam(13000, 1500, .0004, 1.1, 1.0, 40000, true, 1, 20, 80, 2800));
        this.preset.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.GalaxyParam(13000, 4000, .0004, .85, .95, 40000, true, 1, 20, 80, 4500));
        this.galaxy.reset(this.preset[0]);
        this.fov = this.galaxy.rad * 3;
    }
    initGL(gl) {
        if (this.vertAxis == null)
            throw new Error("initGL(): vertAxis is null!");
        if (this.vertDensityWaves == null)
            throw new Error("initGL(): vertDensityWaves is null!");
        if (this.vertVelocityCurve == null)
            throw new Error("initGL(): vertVelocityCurve is null!");
        if (this.vertStars == null)
            throw new Error("initGL(): vertStars is null!");
        this.vertAxis.initialize();
        this.vertDensityWaves.initialize();
        this.vertVelocityCurve.initialize();
        this.vertStars.initialize();
        // GL initialization
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.disable(gl.DEPTH_TEST);
        this.setCameraOrientation(gl_matrix__WEBPACK_IMPORTED_MODULE_6__.fromValues(0, 1, 0));
    }
    setCameraOrientation(orient) {
        this.camOrient = orient;
        this.adjustCamera();
    }
    adjustCamera() {
        let l = this.fov / 2.0;
        let aspect = this.canvas.width / this.canvas.height;
        gl_matrix__WEBPACK_IMPORTED_MODULE_5__.ortho(this.matProjection, -l * aspect, l * aspect, -l, l, -l, l);
        gl_matrix__WEBPACK_IMPORTED_MODULE_5__.lookAt(this.matView, this.camPos, this.camLookAt, this.camOrient);
    }
    updateAxis() {
        if (this.vertAxis == null)
            throw new Error("Galaxyrenderer.updateAxis(): this.vertAxis is null!");
        //        console.log("updating axis data.");
        let vert = [];
        let idx = [];
        let s = Math.pow(10, Math.floor((Math.log10(this.fov / 2))));
        let l = this.fov / 100;
        let p = 0;
        let r = 0.3;
        let g = 0.3;
        let b = 0.3;
        let a = 0.8;
        for (let i = 0; p < this.fov; ++i) {
            p += s;
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(p, -l, 0, r, g, b, a));
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(p, l, 0, r, g, b, a));
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(-p, -l, 0, r, g, b, a));
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(-p, 0, 0, r, g, b, a));
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(-l, p, 0, r, g, b, a));
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(0, p, 0, r, g, b, a));
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(-l, -p, 0, r, g, b, a));
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(0, -p, 0, r, g, b, a));
        }
        idx.push(vert.length);
        vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(-this.fov, 0, 0, r, g, b, a));
        idx.push(vert.length);
        vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(this.fov, 0, 0, r, g, b, a));
        idx.push(vert.length);
        vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(0, -this.fov, 0, r, g, b, a));
        idx.push(vert.length);
        vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(0, this.fov, 0, r, g, b, a));
        this.vertAxis.createBuffer(vert, idx, this.gl.LINES);
        this.renderUpdateHint &= ~RenderUpdateHint.AXIS;
    }
    updateDensityWaves() {
        if (this.vertDensityWaves == null)
            throw new Error("GalaxyRenderer.updateDensityWaves(): this.vertDensityWaves is null!");
        //        console.log("updating density waves.");
        let vert = [];
        let idx = [];
        //
        // First add the density waves
        //
        const num = 100;
        let dr = this.galaxy.farFieldRad / num;
        for (let i = 0; i <= num; ++i) {
            let r = dr * (i + 1);
            this.addEllipsisVertices(vert, idx, r, r * this.galaxy.getExcentricity(r), _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.RAD_TO_DEG * this.galaxy.getAngularOffset(r), this.galaxy.pertN, this.galaxy.pertAmp, new _Types__WEBPACK_IMPORTED_MODULE_0__.Color(1, 1, 1, 0.2));
        }
        //
        // Add three circles at the boundaries of core, galaxy and galactic medium
        //
        const pertNum = 0;
        const pertAmp = 0;
        let r = this.galaxy.coreRad;
        this.addEllipsisVertices(vert, idx, r, r, 0, pertNum, pertAmp, new _Types__WEBPACK_IMPORTED_MODULE_0__.Color(1, 1, 0, 0.5));
        r = this.galaxy.rad;
        this.addEllipsisVertices(vert, idx, r, r, 0, pertNum, pertAmp, new _Types__WEBPACK_IMPORTED_MODULE_0__.Color(0, 1, 0, 0.5));
        r = this.galaxy.farFieldRad;
        this.addEllipsisVertices(vert, idx, r, r, 0, pertNum, pertAmp, new _Types__WEBPACK_IMPORTED_MODULE_0__.Color(1, 0, 0, 0.5));
        this.vertDensityWaves.createBuffer(vert, idx, this.gl.LINE_STRIP);
        this.renderUpdateHint &= ~RenderUpdateHint.DENSITY_WAVES;
    }
    addEllipsisVertices(vert, vertIdx, a, b, angle, pertNum, pertAmp, col) {
        const steps = 100;
        const x = 0;
        const y = 0;
        // Angle is given by Degree Value
        let beta = -angle * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.DEG_TO_RAD;
        let sinbeta = Math.sin(beta);
        let cosbeta = Math.cos(beta);
        let firstPointIdx = vert.length;
        for (let i = 0; i < 360; i += 360 / steps) {
            let alpha = i * _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.DEG_TO_RAD;
            let sinalpha = Math.sin(alpha);
            let cosalpha = Math.cos(alpha);
            let fx = x + (a * cosalpha * cosbeta - b * sinalpha * sinbeta);
            let fy = y + (a * cosalpha * sinbeta + b * sinalpha * cosbeta);
            if (pertNum > 0) {
                fx += ((a / pertAmp) * Math.sin(alpha * 2 * pertNum));
                fy += ((a / pertAmp) * Math.cos(alpha * 2 * pertNum));
            }
            vertIdx.push(vert.length);
            let vc = new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(fx, fy, 0, col.r, col.g, col.b, col.a);
            vert.push(vc);
        }
        // Close the loop and reset the element index array
        vertIdx.push(firstPointIdx);
        vertIdx.push(4294967295);
    }
    updateStars() {
        if (this.vertStars == null)
            throw new Error("GalaxyRenderer.updateStars(): this.vertStars is null!");
        //        console.log("updating stars.");
        let vert = [];
        let idx = [];
        let stars = this.galaxy.stars;
        let a = 1;
        for (let i = 1; i < stars.length; ++i) {
            let col = _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.colorFromTemperature(stars[i].temp);
            col.a = a;
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexStar(stars[i], col));
        }
        this.vertStars.createBuffer(vert, idx, this.gl.POINTS);
        this.renderUpdateHint &= ~RenderUpdateHint.STARS;
    }
    updateVelocityCurve() {
        if (this.vertVelocityCurve == null)
            throw new Error("GalaxyRenderer.updateVelocityCurve(): this.vertVelocityCurve is null!");
        //        console.log("updating velocity curves.");
        let vert = [];
        let idx = [];
        let cr = 0.5, cg = 1, cb = 1, ca = 1;
        for (let r = 0; r < this.galaxy.farFieldRad; r += 100) {
            let v = (this.galaxy.hasDarkMatter)
                ? _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.velocityWithDarkMatter(r)
                : _Helper__WEBPACK_IMPORTED_MODULE_1__.Helper.velocityWithoutDarkMatter(r);
            idx.push(vert.length);
            vert.push(new _Types__WEBPACK_IMPORTED_MODULE_0__.VertexColor(r, v * 10, 0, cr, cg, cb, ca));
        }
        this.vertVelocityCurve.createBuffer(vert, idx, this.gl.POINTS);
        this.renderUpdateHint &= ~RenderUpdateHint.CREATE_VELOCITY_CURVE;
    }
    update() {
        this.time += this.TimeStepSize;
        if ((this.renderUpdateHint & RenderUpdateHint.AXIS) != 0)
            this.updateAxis();
        if ((this.renderUpdateHint & RenderUpdateHint.DENSITY_WAVES) != 0)
            this.updateDensityWaves();
        if ((this.renderUpdateHint & RenderUpdateHint.STARS) != 0)
            this.updateStars();
        if ((this.renderUpdateHint & RenderUpdateHint.CREATE_VELOCITY_CURVE) != 0)
            this.updateVelocityCurve();
        this.camOrient = gl_matrix__WEBPACK_IMPORTED_MODULE_6__.fromValues(0, 1, 0);
        this.camPos = gl_matrix__WEBPACK_IMPORTED_MODULE_6__.fromValues(0, 0, 5000);
        this.camLookAt = gl_matrix__WEBPACK_IMPORTED_MODULE_6__.fromValues(0, 0, 0);
    }
    render() {
        this.gl.clearColor(0.0, 0.0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.adjustCamera();
        if (this.vertAxis != null && this.flags & DisplayItem.AXIS)
            this.vertAxis.draw(this.matView, this.matProjection);
        let features = 0;
        if (this.flags & DisplayItem.STARS)
            features |= 1 << 0;
        if (this.flags & DisplayItem.DUST)
            features |= 1 << 1;
        if (this.flags & DisplayItem.FILAMENTS)
            features |= 1 << 2;
        if (this.flags & DisplayItem.H2)
            features |= 1 << 3;
        if (this.vertStars != null && features != 0) {
            this.vertStars.updateShaderVariables(this.time, this.galaxy.pertN, this.galaxy.pertAmp, this.galaxy.dustRenderSize, features);
            this.vertStars.draw(this.matView, this.matProjection);
        }
        if (this.vertDensityWaves != null && this.flags & DisplayItem.DENSITY_WAVES)
            this.vertDensityWaves.draw(this.matView, this.matProjection);
        if (this.vertVelocityCurve != null && this.flags & DisplayItem.VELOCITY)
            this.vertVelocityCurve.draw(this.matView, this.matProjection);
    }
    mainLoop(timestamp) {
        let error = false;
        try {
            this.update();
            this.render();
        }
        catch (Error) {
            console.log(Error.message);
            error = true;
        }
        finally {
            if (!error)
                window.requestAnimationFrame((timestamp) => this.mainLoop(timestamp));
        }
    }
}


/***/ }),

/***/ "./src/Helper.ts":
/*!***********************!*\
  !*** ./src/Helper.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helper": () => /* binding */ Helper
/* harmony export */ });
class Helper {
    static powerTwoFloor(val) {
        let power = 2;
        let nextVal = power * 2;
        while ((nextVal *= 2) <= val) {
            power = power << 1;
        }
        return power << 1;
    }
    static rnum() {
        return Math.random();
    }
    static colorFromTemperature(temp) {
        let MinTemp = 1000;
        let MaxTemp = 10000;
        let colNum = 200;
        let col = [
            { "r": 1, "g": -0.00987248, "b": -0.0166818, "a": 1 },
            { "r": 1, "g": 0.000671682, "b": -0.0173831, "a": 1 },
            { "r": 1, "g": 0.0113477, "b": -0.0179839, "a": 1 },
            { "r": 1, "g": 0.0221357, "b": -0.0184684, "a": 1 },
            { "r": 1, "g": 0.0330177, "b": -0.0188214, "a": 1 },
            { "r": 1, "g": 0.0439771, "b": -0.0190283, "a": 1 },
            { "r": 1, "g": 0.0549989, "b": -0.0190754, "a": 1 },
            { "r": 1, "g": 0.0660696, "b": -0.0189496, "a": 1 },
            { "r": 1, "g": 0.0771766, "b": -0.0186391, "a": 1 },
            { "r": 1, "g": 0.0883086, "b": -0.0181329, "a": 1 },
            { "r": 1, "g": 0.0994553, "b": -0.017421, "a": 1 },
            { "r": 1, "g": 0.110607, "b": -0.0164945, "a": 1 },
            { "r": 1, "g": 0.121756, "b": -0.0153455, "a": 1 },
            { "r": 1, "g": 0.132894, "b": -0.0139671, "a": 1 },
            { "r": 1, "g": 0.144013, "b": -0.0123534, "a": 1 },
            { "r": 1, "g": 0.155107, "b": -0.0104993, "a": 1 },
            { "r": 1, "g": 0.166171, "b": -0.0084008, "a": 1 },
            { "r": 1, "g": 0.177198, "b": -0.00605465, "a": 1 },
            { "r": 1, "g": 0.188184, "b": -0.00345843, "a": 1 },
            { "r": 1, "g": 0.199125, "b": -0.000610485, "a": 1 },
            { "r": 1, "g": 0.210015, "b": 0.00249014, "a": 1 },
            { "r": 1, "g": 0.220853, "b": 0.00584373, "a": 1 },
            { "r": 1, "g": 0.231633, "b": 0.00944995, "a": 1 },
            { "r": 1, "g": 0.242353, "b": 0.0133079, "a": 1 },
            { "r": 1, "g": 0.25301, "b": 0.0174162, "a": 1 },
            { "r": 1, "g": 0.263601, "b": 0.021773, "a": 1 },
            { "r": 1, "g": 0.274125, "b": 0.0263759, "a": 1 },
            { "r": 1, "g": 0.284579, "b": 0.0312223, "a": 1 },
            { "r": 1, "g": 0.294962, "b": 0.0363091, "a": 1 },
            { "r": 1, "g": 0.305271, "b": 0.0416328, "a": 1 },
            { "r": 1, "g": 0.315505, "b": 0.0471899, "a": 1 },
            { "r": 1, "g": 0.325662, "b": 0.0529765, "a": 1 },
            { "r": 1, "g": 0.335742, "b": 0.0589884, "a": 1 },
            { "r": 1, "g": 0.345744, "b": 0.0652213, "a": 1 },
            { "r": 1, "g": 0.355666, "b": 0.0716707, "a": 1 },
            { "r": 1, "g": 0.365508, "b": 0.078332, "a": 1 },
            { "r": 1, "g": 0.375268, "b": 0.0852003, "a": 1 },
            { "r": 1, "g": 0.384948, "b": 0.0922709, "a": 1 },
            { "r": 1, "g": 0.394544, "b": 0.0995389, "a": 1 },
            { "r": 1, "g": 0.404059, "b": 0.106999, "a": 1 },
            { "r": 1, "g": 0.41349, "b": 0.114646, "a": 1 },
            { "r": 1, "g": 0.422838, "b": 0.122476, "a": 1 },
            { "r": 1, "g": 0.432103, "b": 0.130482, "a": 1 },
            { "r": 1, "g": 0.441284, "b": 0.138661, "a": 1 },
            { "r": 1, "g": 0.450381, "b": 0.147005, "a": 1 },
            { "r": 1, "g": 0.459395, "b": 0.155512, "a": 1 },
            { "r": 1, "g": 0.468325, "b": 0.164175, "a": 1 },
            { "r": 1, "g": 0.477172, "b": 0.172989, "a": 1 },
            { "r": 1, "g": 0.485935, "b": 0.181949, "a": 1 },
            { "r": 1, "g": 0.494614, "b": 0.19105, "a": 1 },
            { "r": 1, "g": 0.503211, "b": 0.200288, "a": 1 },
            { "r": 1, "g": 0.511724, "b": 0.209657, "a": 1 },
            { "r": 1, "g": 0.520155, "b": 0.219152, "a": 1 },
            { "r": 1, "g": 0.528504, "b": 0.228769, "a": 1 },
            { "r": 1, "g": 0.536771, "b": 0.238502, "a": 1 },
            { "r": 1, "g": 0.544955, "b": 0.248347, "a": 1 },
            { "r": 1, "g": 0.553059, "b": 0.2583, "a": 1 },
            { "r": 1, "g": 0.561082, "b": 0.268356, "a": 1 },
            { "r": 1, "g": 0.569024, "b": 0.27851, "a": 1 },
            { "r": 1, "g": 0.576886, "b": 0.288758, "a": 1 },
            { "r": 1, "g": 0.584668, "b": 0.299095, "a": 1 },
            { "r": 1, "g": 0.592372, "b": 0.309518, "a": 1 },
            { "r": 1, "g": 0.599996, "b": 0.320022, "a": 1 },
            { "r": 1, "g": 0.607543, "b": 0.330603, "a": 1 },
            { "r": 1, "g": 0.615012, "b": 0.341257, "a": 1 },
            { "r": 1, "g": 0.622403, "b": 0.35198, "a": 1 },
            { "r": 1, "g": 0.629719, "b": 0.362768, "a": 1 },
            { "r": 1, "g": 0.636958, "b": 0.373617, "a": 1 },
            { "r": 1, "g": 0.644122, "b": 0.384524, "a": 1 },
            { "r": 1, "g": 0.65121, "b": 0.395486, "a": 1 },
            { "r": 1, "g": 0.658225, "b": 0.406497, "a": 1 },
            { "r": 1, "g": 0.665166, "b": 0.417556, "a": 1 },
            { "r": 1, "g": 0.672034, "b": 0.428659, "a": 1 },
            { "r": 1, "g": 0.678829, "b": 0.439802, "a": 1 },
            { "r": 1, "g": 0.685552, "b": 0.450982, "a": 1 },
            { "r": 1, "g": 0.692204, "b": 0.462196, "a": 1 },
            { "r": 1, "g": 0.698786, "b": 0.473441, "a": 1 },
            { "r": 1, "g": 0.705297, "b": 0.484714, "a": 1 },
            { "r": 1, "g": 0.711739, "b": 0.496013, "a": 1 },
            { "r": 1, "g": 0.718112, "b": 0.507333, "a": 1 },
            { "r": 1, "g": 0.724417, "b": 0.518673, "a": 1 },
            { "r": 1, "g": 0.730654, "b": 0.53003, "a": 1 },
            { "r": 1, "g": 0.736825, "b": 0.541402, "a": 1 },
            { "r": 1, "g": 0.742929, "b": 0.552785, "a": 1 },
            { "r": 1, "g": 0.748968, "b": 0.564177, "a": 1 },
            { "r": 1, "g": 0.754942, "b": 0.575576, "a": 1 },
            { "r": 1, "g": 0.760851, "b": 0.586979, "a": 1 },
            { "r": 1, "g": 0.766696, "b": 0.598385, "a": 1 },
            { "r": 1, "g": 0.772479, "b": 0.609791, "a": 1 },
            { "r": 1, "g": 0.778199, "b": 0.621195, "a": 1 },
            { "r": 1, "g": 0.783858, "b": 0.632595, "a": 1 },
            { "r": 1, "g": 0.789455, "b": 0.643989, "a": 1 },
            { "r": 1, "g": 0.794991, "b": 0.655375, "a": 1 },
            { "r": 1, "g": 0.800468, "b": 0.666751, "a": 1 },
            { "r": 1, "g": 0.805886, "b": 0.678116, "a": 1 },
            { "r": 1, "g": 0.811245, "b": 0.689467, "a": 1 },
            { "r": 1, "g": 0.816546, "b": 0.700803, "a": 1 },
            { "r": 1, "g": 0.82179, "b": 0.712122, "a": 1 },
            { "r": 1, "g": 0.826976, "b": 0.723423, "a": 1 },
            { "r": 1, "g": 0.832107, "b": 0.734704, "a": 1 },
            { "r": 1, "g": 0.837183, "b": 0.745964, "a": 1 },
            { "r": 1, "g": 0.842203, "b": 0.757201, "a": 1 },
            { "r": 1, "g": 0.847169, "b": 0.768414, "a": 1 },
            { "r": 1, "g": 0.852082, "b": 0.779601, "a": 1 },
            { "r": 1, "g": 0.856941, "b": 0.790762, "a": 1 },
            { "r": 1, "g": 0.861748, "b": 0.801895, "a": 1 },
            { "r": 1, "g": 0.866503, "b": 0.812999, "a": 1 },
            { "r": 1, "g": 0.871207, "b": 0.824073, "a": 1 },
            { "r": 1, "g": 0.87586, "b": 0.835115, "a": 1 },
            { "r": 1, "g": 0.880463, "b": 0.846125, "a": 1 },
            { "r": 1, "g": 0.885017, "b": 0.857102, "a": 1 },
            { "r": 1, "g": 0.889521, "b": 0.868044, "a": 1 },
            { "r": 1, "g": 0.893977, "b": 0.878951, "a": 1 },
            { "r": 1, "g": 0.898386, "b": 0.889822, "a": 1 },
            { "r": 1, "g": 0.902747, "b": 0.900657, "a": 1 },
            { "r": 1, "g": 0.907061, "b": 0.911453, "a": 1 },
            { "r": 1, "g": 0.91133, "b": 0.922211, "a": 1 },
            { "r": 1, "g": 0.915552, "b": 0.932929, "a": 1 },
            { "r": 1, "g": 0.91973, "b": 0.943608, "a": 1 },
            { "r": 1, "g": 0.923863, "b": 0.954246, "a": 1 },
            { "r": 1, "g": 0.927952, "b": 0.964842, "a": 1 },
            { "r": 1, "g": 0.931998, "b": 0.975397, "a": 1 },
            { "r": 1, "g": 0.936001, "b": 0.985909, "a": 1 },
            { "r": 1, "g": 0.939961, "b": 0.996379, "a": 1 },
            { "r": 0.993241, "g": 0.9375, "b": 1, "a": 1 },
            { "r": 0.983104, "g": 0.931743, "b": 1, "a": 1 },
            { "r": 0.973213, "g": 0.926103, "b": 1, "a": 1 },
            { "r": 0.963562, "g": 0.920576, "b": 1, "a": 1 },
            { "r": 0.954141, "g": 0.915159, "b": 1, "a": 1 },
            { "r": 0.944943, "g": 0.909849, "b": 1, "a": 1 },
            { "r": 0.935961, "g": 0.904643, "b": 1, "a": 1 },
            { "r": 0.927189, "g": 0.899538, "b": 1, "a": 1 },
            { "r": 0.918618, "g": 0.894531, "b": 1, "a": 1 },
            { "r": 0.910244, "g": 0.88962, "b": 1, "a": 1 },
            { "r": 0.902059, "g": 0.884801, "b": 1, "a": 1 },
            { "r": 0.894058, "g": 0.880074, "b": 1, "a": 1 },
            { "r": 0.886236, "g": 0.875434, "b": 1, "a": 1 },
            { "r": 0.878586, "g": 0.87088, "b": 1, "a": 1 },
            { "r": 0.871103, "g": 0.86641, "b": 1, "a": 1 },
            { "r": 0.863783, "g": 0.862021, "b": 1, "a": 1 },
            { "r": 0.856621, "g": 0.857712, "b": 1, "a": 1 },
            { "r": 0.849611, "g": 0.853479, "b": 1, "a": 1 },
            { "r": 0.84275, "g": 0.849322, "b": 1, "a": 1 },
            { "r": 0.836033, "g": 0.845239, "b": 1, "a": 1 },
            { "r": 0.829456, "g": 0.841227, "b": 1, "a": 1 },
            { "r": 0.823014, "g": 0.837285, "b": 1, "a": 1 },
            { "r": 0.816705, "g": 0.83341, "b": 1, "a": 1 },
            { "r": 0.810524, "g": 0.829602, "b": 1, "a": 1 },
            { "r": 0.804468, "g": 0.825859, "b": 1, "a": 1 },
            { "r": 0.798532, "g": 0.82218, "b": 1, "a": 1 },
            { "r": 0.792715, "g": 0.818562, "b": 1, "a": 1 },
            { "r": 0.787012, "g": 0.815004, "b": 1, "a": 1 },
            { "r": 0.781421, "g": 0.811505, "b": 1, "a": 1 },
            { "r": 0.775939, "g": 0.808063, "b": 1, "a": 1 },
            { "r": 0.770561, "g": 0.804678, "b": 1, "a": 1 },
            { "r": 0.765287, "g": 0.801348, "b": 1, "a": 1 },
            { "r": 0.760112, "g": 0.798071, "b": 1, "a": 1 },
            { "r": 0.755035, "g": 0.794846, "b": 1, "a": 1 },
            { "r": 0.750053, "g": 0.791672, "b": 1, "a": 1 },
            { "r": 0.745164, "g": 0.788549, "b": 1, "a": 1 },
            { "r": 0.740364, "g": 0.785474, "b": 1, "a": 1 },
            { "r": 0.735652, "g": 0.782448, "b": 1, "a": 1 },
            { "r": 0.731026, "g": 0.779468, "b": 1, "a": 1 },
            { "r": 0.726482, "g": 0.776534, "b": 1, "a": 1 },
            { "r": 0.722021, "g": 0.773644, "b": 1, "a": 1 },
            { "r": 0.717638, "g": 0.770798, "b": 1, "a": 1 },
            { "r": 0.713333, "g": 0.767996, "b": 1, "a": 1 },
            { "r": 0.709103, "g": 0.765235, "b": 1, "a": 1 },
            { "r": 0.704947, "g": 0.762515, "b": 1, "a": 1 },
            { "r": 0.700862, "g": 0.759835, "b": 1, "a": 1 },
            { "r": 0.696848, "g": 0.757195, "b": 1, "a": 1 },
            { "r": 0.692902, "g": 0.754593, "b": 1, "a": 1 },
            { "r": 0.689023, "g": 0.752029, "b": 1, "a": 1 },
            { "r": 0.685208, "g": 0.749502, "b": 1, "a": 1 },
            { "r": 0.681458, "g": 0.747011, "b": 1, "a": 1 },
            { "r": 0.67777, "g": 0.744555, "b": 1, "a": 1 },
            { "r": 0.674143, "g": 0.742134, "b": 1, "a": 1 },
            { "r": 0.670574, "g": 0.739747, "b": 1, "a": 1 },
            { "r": 0.667064, "g": 0.737394, "b": 1, "a": 1 },
            { "r": 0.663611, "g": 0.735073, "b": 1, "a": 1 },
            { "r": 0.660213, "g": 0.732785, "b": 1, "a": 1 },
            { "r": 0.656869, "g": 0.730528, "b": 1, "a": 1 },
            { "r": 0.653579, "g": 0.728301, "b": 1, "a": 1 },
            { "r": 0.65034, "g": 0.726105, "b": 1, "a": 1 },
            { "r": 0.647151, "g": 0.723939, "b": 1, "a": 1 },
            { "r": 0.644013, "g": 0.721801, "b": 1, "a": 1 },
            { "r": 0.640922, "g": 0.719692, "b": 1, "a": 1 },
            { "r": 0.637879, "g": 0.717611, "b": 1, "a": 1 },
            { "r": 0.634883, "g": 0.715558, "b": 1, "a": 1 },
            { "r": 0.631932, "g": 0.713531, "b": 1, "a": 1 },
            { "r": 0.629025, "g": 0.711531, "b": 1, "a": 1 },
            { "r": 0.626162, "g": 0.709557, "b": 1, "a": 1 },
            { "r": 0.623342, "g": 0.707609, "b": 1, "a": 1 },
            { "r": 0.620563, "g": 0.705685, "b": 1, "a": 1 },
            { "r": 0.617825, "g": 0.703786, "b": 1, "a": 1 },
            { "r": 0.615127, "g": 0.701911, "b": 1, "a": 1 },
            { "r": 0.612469, "g": 0.70006, "b": 1, "a": 1 },
            { "r": 0.609848, "g": 0.698231, "b": 1, "a": 1 },
            { "r": 0.607266, "g": 0.696426, "b": 1, "a": 1 },
            { "r": 0.60472, "g": 0.694643, "b": 1, "a": 1 }
        ];
        let idx = Math.floor((temp - MinTemp) / (MaxTemp - MinTemp) * colNum);
        idx = Math.min(colNum - 1, idx);
        idx = Math.max(0, idx);
        return col[idx];
    }
    // Velocity curve with dark matter
    static velocityWithDarkMatter(r) {
        if (r == 0)
            return 0;
        let MZ = 100;
        let massHalo = Helper.massHalo(r);
        let massDisc = Helper.massDisc(r);
        let v = 20000.0 * Math.sqrt(Helper.CONTANT_OF_GRAVITY * (massHalo + massDisc + MZ) / r);
        return v;
    }
    // velocity curve without dark matter
    static velocityWithoutDarkMatter(r) {
        if (r == 0)
            return 0;
        let MZ = 100;
        return 20000.0 * Math.sqrt(Helper.CONTANT_OF_GRAVITY * (Helper.massDisc(r) + MZ) / r);
    }
    static massDisc(r) {
        let d = 2000; // Dicke der Scheibe
        let rho_so = 1; // Dichte im Mittelpunkt
        let rH = 2000; // Radius auf dem die Dichte um die Hälfte gefallen ist
        return rho_so * Math.exp(-r / rH) * (r * r) * Math.PI * d;
    }
    static massHalo(r) {
        let rho_h0 = 0.15;
        let rC = 2500;
        return rho_h0 * 1 / (1 + Math.pow(r / rC, 2)) * (4 * Math.PI * Math.pow(r, 3) / 3);
    }
}
Helper.PC_TO_KM = 3.08567758129e13;
Helper.SEC_PER_YEAR = 365.25 * 86400;
Helper.DEG_TO_RAD = Math.PI / 180.0;
Helper.RAD_TO_DEG = 180.0 / Math.PI;
Helper.CONTANT_OF_GRAVITY = 6.672e-11;
;


/***/ }),

/***/ "./src/Types.ts":
/*!**********************!*\
  !*** ./src/Types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vec2": () => /* binding */ Vec2,
/* harmony export */   "Vec3": () => /* binding */ Vec3,
/* harmony export */   "Color": () => /* binding */ Color,
/* harmony export */   "Star": () => /* binding */ Star,
/* harmony export */   "GalaxyParam": () => /* binding */ GalaxyParam,
/* harmony export */   "VertexBase": () => /* binding */ VertexBase,
/* harmony export */   "VertexColor": () => /* binding */ VertexColor,
/* harmony export */   "VertexStar": () => /* binding */ VertexStar
/* harmony export */ });
class Vec2 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
class Color {
    constructor(r = 1, g = 1, b = 1, a = 0) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}
class Star {
    constructor() {
        this.theta0 = 0; // initial angular position on the ellipse
        this.velTheta = 0; // angular velocity
        this.tiltAngle = 0; // tilt angle of the ellipse
        this.a = 0; // kleine halbachse
        this.b = 0; // große halbachse
        this.temp = 0; // star temperature
        this.mag = 0; // brightness;
        this.type = 0; // Type 0:star, 1:dust, 2 and 3: h2 regions	
    }
}
class GalaxyParam {
    constructor(rad, radCore, deltaAng, ex1, ex2, numStars, hasDarkMatter, pertN, pertAmp, dustRenderSize, baseTemp) {
        this.rad = 0;
        this.radCore = 0;
        this.deltaAng = 0;
        this.ex1 = 0;
        this.ex2 = 0;
        this.numStars = 0;
        this.hasDarkMatter = true;
        this.pertN = 0;
        this.pertAmp = 0;
        this.dustRenderSize = 0;
        this.baseTemp = 0;
        this.rad = rad;
        this.radCore = radCore;
        this.deltaAng = deltaAng;
        this.ex1 = ex1;
        this.ex2 = ex2;
        this.numStars = numStars;
        this.hasDarkMatter = hasDarkMatter;
        this.pertN = pertN;
        this.pertAmp = pertAmp;
        this.dustRenderSize = dustRenderSize;
        this.baseTemp = baseTemp;
    }
}
class VertexBase {
    constructor() { }
}
class VertexColor extends VertexBase {
    constructor(x, y, z, r, g, b, a) {
        super();
        this.pos = new Vec3();
        this.col = new Color(0, 0, 0, 0);
        this.pos.x = x;
        this.pos.y = y;
        this.pos.z = z;
        this.col.r = r;
        this.col.g = g;
        this.col.b = b;
        this.col.a = a;
    }
    numberOfFloats() {
        return 7;
    }
    writeTo(array, offset) {
        array[offset + 0] = this.pos.x;
        array[offset + 1] = this.pos.y;
        array[offset + 2] = this.pos.z;
        array[offset + 3] = this.col.r;
        array[offset + 4] = this.col.g;
        array[offset + 5] = this.col.b;
        array[offset + 6] = this.col.a;
    }
}
;
class VertexStar extends VertexBase {
    constructor(star, col) {
        super();
        this.star = new Star();
        this.col = new Color();
        this.star = star;
        this.col = col;
    }
    numberOfFloats() {
        return 8 + 4;
    }
    writeTo(array, offset) {
        array[offset + 0] = this.star.theta0;
        array[offset + 1] = this.star.velTheta;
        array[offset + 2] = this.star.tiltAngle;
        array[offset + 3] = this.star.a;
        array[offset + 4] = this.star.b;
        array[offset + 5] = this.star.temp;
        array[offset + 6] = this.star.mag;
        array[offset + 7] = this.star.type;
        array[offset + 8] = this.col.r;
        array[offset + 9] = this.col.g;
        array[offset + 10] = this.col.b;
        array[offset + 11] = this.col.a;
    }
}
;


/***/ }),

/***/ "./src/UiController.ts":
/*!*****************************!*\
  !*** ./src/UiController.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiController": () => /* binding */ UiController
/* harmony export */ });
/* harmony import */ var _GalaxyRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalaxyRenderer */ "./src/GalaxyRenderer.ts");

class UiController {
    constructor(renderer) {
        this.rad = 0;
        this.coreRad = 0;
        this.exInner = 0;
        this.exOuter = 0;
        this.angleOffset = 0;
        this.pertN = 0;
        this._isEditMode = false;
        this.renderState = [];
        this.renderer = renderer;
        this.rad = this.galaxy.rad;
        this.coreRad = this.galaxy.coreRad / this.galaxy.rad;
        this.exInner = this.galaxy.exInner;
        this.exOuter = this.galaxy.exOuter;
        this.angleOffset = this.galaxy.angleOffset;
        this.pertN = this.galaxy.pertN;
    }
    set isEditMode(mode) {
        if (this._isEditMode == mode)
            return;
        if (this._isEditMode == false)
            this.enterEditMode();
        else if (this._isEditMode == true)
            this.leaveEditMode();
    }
    get galaxy() {
        return this.renderer.galaxy;
    }
    leaveEditMode() {
        if (!this._isEditMode)
            return;
        console.log("leaving edit mode");
        try {
            this.renderer.showDensityWaves = this.renderState[0];
            this.renderer.showH2 = this.renderState[1];
            this.renderer.showDust = this.renderState[2];
            this.renderer.showStars = this.renderState[3];
            this.renderer.showVelocity = this.renderState[4];
            this.renderer.showDustFilaments = this.renderState[5];
            this.renderState = [];
        }
        finally {
            this._isEditMode = false;
            this.renderer.renderUpdateHint = _GalaxyRenderer__WEBPACK_IMPORTED_MODULE_0__.RenderUpdateHint.STARS;
        }
    }
    enterEditMode() {
        if (this._isEditMode)
            return;
        console.log("entering edit mode");
        try {
            this.renderState = [];
            this.renderState.push(this.renderer.showDensityWaves);
            this.renderState.push(this.renderer.showH2);
            this.renderState.push(this.renderer.showDust);
            this.renderState.push(this.renderer.showStars);
            this.renderState.push(this.renderer.showVelocity);
            this.renderState.push(this.renderer.showDustFilaments);
            this.renderer.showDensityWaves = true;
            this.renderer.showH2 = false;
            this.renderer.showDust = false;
            this.renderer.showStars = false;
            this.renderer.showVelocity = false;
            this.renderer.showDustFilaments = false;
        }
        finally {
            this._isEditMode = true;
        }
    }
    initilializeSlider(id, idLabel, prop) {
        let slider = document.getElementById(id);
        if (slider == null)
            throw new Error("UiController.initilializeSlider(): Ther is no input element with that id!");
        slider.value = this[prop];
        let label = document.getElementById(idLabel);
        label.innerHTML = slider.value;
        let obj = this.renderer;
        slider.oninput = function () {
            obj[prop] = parseFloat(slider.value);
            label.innerHTML = slider.value;
        };
    }
    initilializeEditModeSlider(id, idLabel, prop) {
        let slider = document.getElementById(id);
        if (slider == null)
            throw new Error("UiController.initilializeSlider(): Ther is no input element with that id!");
        slider.value = this[prop];
        let label = document.getElementById(idLabel);
        label.innerHTML = slider.value;
        let self = this;
        slider.oninput = function () {
            self[prop] = parseFloat(slider.value);
            self.isEditMode = true;
            label.innerHTML = slider.value;
            self.update();
        };
        slider.onmouseup = function () {
            self.isEditMode = false;
        };
    }
    update() {
        this.renderer.updateDensityWaveParam(this.coreRad * this.rad, this.rad, this.angleOffset, this.exInner, this.exOuter, this.pertN);
    }
}


/***/ }),

/***/ "./src/VertexBufferBase.ts":
/*!*********************************!*\
  !*** ./src/VertexBufferBase.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeDefinition": () => /* binding */ AttributeDefinition,
/* harmony export */   "VertexBufferBase": () => /* binding */ VertexBufferBase
/* harmony export */ });
class AttributeDefinition {
    constructor(attribIdx = 0, size = 0, offset = 0) {
        this.attribIdx = 0;
        this.size = 0;
        this.offset = 0;
        this.attribIdx = attribIdx;
        this.size = size;
        this.offset = offset;
    }
}
class VertexBufferBase {
    constructor(gl, bufferMode) {
        this.vbo = null;
        this.ibo = null;
        this.vao = null;
        this.vert = [];
        this.idx = [];
        this.shaderProgram = null;
        this._primitiveType = 0;
        this.bufferMode = 0;
        this.attributes = [];
        this.gl = gl;
        this.bufferMode = bufferMode;
    }
    defineAttributes(attribList) {
        this.attributes = [];
        for (let i = 0; i < attribList.length; ++i) {
            this.attributes.push(attribList[i]);
        }
    }
    get primitiveType() {
        return this._primitiveType;
    }
    set primitiveType(value) {
        this._primitiveType = value;
    }
    get arrayElementCount() {
        return this.idx.length;
    }
    get vertexArrayObject() {
        if (this.vao == null)
            throw Error("VertexBufferBase.vertexArrayObject(): vertex array object is null!");
        return this.vao;
    }
    createShader(shaderType, shaderSource) {
        let shader = this.gl.createShader(shaderType);
        this.gl.shaderSource(shader, shaderSource);
        this.gl.compileShader(shader);
        let isCompiled = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (!isCompiled) {
            let msg = this.gl.getShaderInfoLog(shader);
            // We don't need the shader anymore.
            this.gl.deleteShader(shader);
            if (shaderType == this.gl.VERTEX_SHADER)
                throw new Error("VertexBuffer: Vertex shader compilation failed: " + msg);
            else
                throw new Error("VertexBuffer: Fragment shader compilation failed: " + msg);
        }
        return shader;
    }
    initialize() {
        //
        // 1.) Create Vertex buffer
        //
        this.vbo = this.gl.createBuffer();
        this.ibo = this.gl.createBuffer();
        this.vao = this.gl.createVertexArray();
        //
        // Initialize WebGL
        // 
        let srcVertex = this.getVertexShaderSource();
        let vertexShader = this.createShader(this.gl.VERTEX_SHADER, srcVertex);
        let srcFragment = this.getFragmentShaderSource();
        let fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, srcFragment);
        this.shaderProgram = this.gl.createProgram();
        if (this.shaderProgram == null)
            throw new Error("VertexBufferBase.initialize(): shaderProgram cannot be created!");
        this.gl.attachShader(this.shaderProgram, vertexShader);
        this.gl.attachShader(this.shaderProgram, fragmentShader);
        this.gl.linkProgram(this.shaderProgram);
        var linked = this.gl.getProgramParameter(this.shaderProgram, this.gl.LINK_STATUS);
        if (!linked) {
            let infoLog = this.gl.getProgramInfoLog(this.shaderProgram);
            this.gl.deleteProgram(this.shaderProgram);
            this.gl.deleteShader(vertexShader);
            this.gl.deleteShader(fragmentShader);
            throw new Error("VertexBufferBase.initialize():: shader program linking failed!\r\n" + infoLog);
        }
        // Always detach shaders after a successful link.
        this.gl.detachShader(this.shaderProgram, vertexShader);
        this.gl.detachShader(this.shaderProgram, fragmentShader);
    }
    releaseAttribArray() {
        for (let i = 0; i < this.attributes.length; ++i) {
            let attribIdx = this.attributes[i].attribIdx;
            this.gl.disableVertexAttribArray(attribIdx);
        }
    }
    release() {
        this.releaseAttribArray();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, 0);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, 0);
        this.gl.bindVertexArray(null);
        if (this.vbo != null)
            this.gl.deleteBuffer(this.vbo);
        if (this.ibo != null)
            this.gl.deleteBuffer(this.ibo);
        if (this.vao != null)
            this.gl.deleteVertexArray(this.vao);
    }
    onSetCustomShaderVariables() {
    }
    onBeforeDraw() {
    }
    draw(matView, matProjection) {
        if (this.shaderProgram == null)
            throw new Error("VertexBufferBase.draw(): shader program is null!");
        this.gl.useProgram(this.shaderProgram);
        let viewMatIdx = this.gl.getUniformLocation(this.shaderProgram, "viewMat");
        this.gl.uniformMatrix4fv(viewMatIdx, false, matView);
        let projMatIdx = this.gl.getUniformLocation(this.shaderProgram, "projMat");
        this.gl.uniformMatrix4fv(projMatIdx, false, matProjection);
        this.onSetCustomShaderVariables();
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
        this.gl.blendEquation(this.gl.FUNC_ADD);
        this.onBeforeDraw();
        this.gl.bindVertexArray(this.vao);
        this.gl.drawElements(this.primitiveType, this.idx.length, this.gl.UNSIGNED_INT, 0);
        this.gl.bindVertexArray(null);
        this.gl.disable(this.gl.BLEND);
        this.gl.useProgram(null);
    }
    createBuffer(vert, idx, type) {
        if (vert.length == 0)
            throw Error("VertexBufferBase.createBuffer: vertex array size is 0!");
        if (idx.length == 0)
            throw Error("VertexBufferBase.createBuffer: index array size is 0!");
        this.vert = vert;
        this.idx = idx;
        this.primitiveType = type;
        // Copy vertex data into a Float32Array
        let numberOfFloats = vert[0].numberOfFloats();
        let floatArray = new Float32Array(vert.length * numberOfFloats);
        for (let i = 0; i < vert.length; ++i) {
            vert[i].writeTo(floatArray, i * numberOfFloats);
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, this.bufferMode);
        this.gl.bindVertexArray(this.vao);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.ibo);
        // Set up vertex buffer array
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo);
        // Set up vertex buffer attributes
        this.attributes.forEach((attrib) => {
            this.gl.enableVertexAttribArray(attrib.attribIdx);
            this.gl.vertexAttribPointer(attrib.attribIdx, attrib.size, this.gl.FLOAT, false, numberOfFloats * 4, attrib.offset);
        });
        // Set up index buffer array
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.ibo);
        let intArray = new Uint32Array(idx.length);
        for (let i = 0; i < idx.length; ++i) {
            intArray[i] = idx[i];
        }
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, intArray, this.gl.STATIC_DRAW);
        let errc = this.gl.getError();
        if (errc != this.gl.NO_ERROR)
            throw Error("VertexBufferBase: Cannot create vbo! (Error " + errc + ")");
        this.gl.bindVertexArray(null);
    }
}


/***/ }),

/***/ "./src/VertexBufferLines.ts":
/*!**********************************!*\
  !*** ./src/VertexBufferLines.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexBufferLines": () => /* binding */ VertexBufferLines
/* harmony export */ });
/* harmony import */ var _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VertexBufferBase */ "./src/VertexBufferBase.ts");

class VertexBufferLines extends _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.VertexBufferBase {
    constructor(gl, lineWidth, bufferMode) {
        super(gl, bufferMode);
        this.lineWidth = 1;
        this.attPosition = 0;
        this.attColor = 1;
        this.lineWidth = lineWidth;
        this.defineAttributes([
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attPosition, 3, 0),
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attColor, 4, 3 * 4)
        ]);
    }
    onBeforeDraw() {
        this.gl.lineWidth(this.lineWidth);
    }
    getVertexShaderSource() {
        return `#version 300 es

precision mediump float;

uniform mat4 projMat;
uniform mat4 viewMat;

layout(location = 0) in vec3 position;
layout(location = 1) in vec4 color;

out vec4 vertexColor;

void main()
{
	gl_Position =  projMat * vec4(position, 1);
	gl_PointSize = 2.0;
	vertexColor = color;
}`;
    }
    getFragmentShaderSource() {
        return `#version 300 es 

precision mediump float;

out vec4 FragColor;

in vec4 vertexColor;

void main()
{
	FragColor = vertexColor;
}`;
    }
}


/***/ }),

/***/ "./src/VertexBufferStars.ts":
/*!**********************************!*\
  !*** ./src/VertexBufferStars.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexBufferStars": () => /* binding */ VertexBufferStars
/* harmony export */ });
/* harmony import */ var _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VertexBufferBase */ "./src/VertexBufferBase.ts");

class VertexBufferStars extends _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.VertexBufferBase {
    constructor(gl) {
        super(gl, gl.STATIC_DRAW);
        this.pertN = 0;
        this.dustSize = 0;
        this.pertAmp = 0;
        this.time = 0;
        this.blendFunc = 0;
        this.blendEquation = 0;
        this.displayFeatures = 0;
        this.attTheta0 = 0;
        this.attVelTheta = 1;
        this.attTiltAngle = 2;
        this.attSemiMajorAxis = 3;
        this.attSemiMinorAxis = 4;
        this.attTemperature = 5;
        this.attMagnitude = 6;
        this.attType = 7;
        this.attColor = 8;
        this.blendFunc = this.gl.ONE;
        this.blendEquation = this.gl.FUNC_ADD;
        this.defineAttributes([
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attTheta0, 1, 0),
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attVelTheta, 1, 4),
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attTiltAngle, 1, 8),
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attSemiMajorAxis, 1, 12),
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attSemiMinorAxis, 1, 16),
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attTemperature, 1, 20),
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attMagnitude, 1, 24),
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attType, 1, 28),
            new _VertexBufferBase__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition(this.attColor, 4, 32)
        ]);
    }
    updateShaderVariables(time, num, amp, dustSize, displayFeatures) {
        this.pertN = num;
        this.pertAmp = amp;
        this.time = time;
        this.dustSize = dustSize;
        this.displayFeatures = displayFeatures;
    }
    getVertexShaderSource() {
        return `#version 300 es

#define DEG_TO_RAD 0.01745329251

uniform mat4 projMat;
uniform mat4 viewMat;

uniform int pertN;
uniform int dustSize;
uniform int displayFeatures;
uniform float pertAmp;
uniform float time;

layout(location = 0) in float theta0;
layout(location = 1) in float velTheta;
layout(location = 2) in float tiltAngle;
layout(location = 3) in float a;
layout(location = 4) in float b;
layout(location = 5) in float temp;
layout(location = 6) in float mag;
layout(location = 7) in float type;
layout(location = 8) in vec4 color;

out vec4 vertexColor;

out float vertexType;
flat out int features;

vec2 calcPos(float a, float b, float theta, float velTheta, float time, float tiltAngle) {
    float thetaActual = theta + velTheta * time;
    float beta = -tiltAngle;
    float alpha = thetaActual * DEG_TO_RAD;
    float cosalpha = cos(alpha);
    float sinalpha = sin(alpha);
    float cosbeta = cos(beta);
    float sinbeta = sin(beta);
    vec2 center = vec2(0,0);
    vec2 ps = vec2(center.x + (a * cosalpha * cosbeta - b * sinalpha * sinbeta),
                   center.y + (a * cosalpha * sinbeta + b * sinalpha * cosbeta));
    if (pertAmp > 0.0 && pertN > 0) {
        ps.x += (a / pertAmp) * sin(alpha * 2.0 * float(pertN));
        ps.y += (a / pertAmp) * cos(alpha * 2.0 * float(pertN));
    }
return ps;
}

void main()
{
    vec2 ps = calcPos(a, b, theta0, velTheta, time, tiltAngle);

    if (type==0.0) {
        gl_PointSize = mag * 4.0;
        vertexColor = color * mag;
    } else if (type==1.0) {	
        gl_PointSize = mag * 5.0 * float(dustSize);
        vertexColor = color * mag;
    } else if (type==2.0) {
        gl_PointSize = mag * 2.0 * float(dustSize);
        vertexColor = color * mag;
    } else if (type==3.0) {
        vec2 ps2 = calcPos(a + 1000.0, b, theta0, velTheta, time, tiltAngle);
        float dst = distance(ps, ps2);
        float size = ((1000.0 - dst) / 10.0) - 50.0;
        gl_PointSize = size;
        vertexColor = color * mag * vec4(2.0, 0.5, 0.5, 1.0);
    } else if (type==4.0) {
        vec2 ps2 = calcPos(a + 1000.0, b, theta0, velTheta, time, tiltAngle);
        float dst = distance(ps, ps2);
        float size = ((1000.0 - dst) / 10.0) - 50.0;
        gl_PointSize = size/10.0;
        vertexColor = vec4(1.0,1.0,1.0,1.0);
    }
    gl_Position =  projMat * vec4(ps, 0.0, 1.0);
    vertexType = type;
    features = displayFeatures;
}`;
    }
    getFragmentShaderSource() {
        return `#version 300 es

precision mediump float;

in vec4 vertexColor;

in float vertexType;
flat in int features;

out vec4 FragColor;

void main()
{
    if (vertexType==0.0) {
        if ( (features & 1) ==0)
            discard;
        FragColor = vertexColor;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 1.0 - length(circCoord);
        FragColor = vec4(vertexColor.xyz, alpha);
    } else if (vertexType==1.0) {
        if ( (features & 2) ==0)
            discard;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 0.05 * (1.0 - length(circCoord));
        FragColor = vec4(vertexColor.xyz, alpha);
    } else if (vertexType==2.0) {
        if ( (features & 4) ==0)
            discard;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 0.07 * (1.0 - length(circCoord));
        FragColor = vec4(vertexColor.xyz, alpha);
    } else if (vertexType==3.0) {
        if ((features & 8) == 0)
            discard;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 1.0 - length(circCoord);
        FragColor = vec4(vertexColor.xyz, alpha);
    } else if (vertexType==4.0) {
        if ((features & 8)== 0)
            discard;
        vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
        float alpha = 1.0 - length(circCoord);
        FragColor = vec4(vertexColor.xyz, alpha);
    }
}`;
    }
    onSetCustomShaderVariables() {
        if (this.shaderProgram == null)
            throw new Error("onSetCustomShaderVariables(): Shader program is null!");
        let varDustSize = this.gl.getUniformLocation(this.shaderProgram, "dustSize");
        this.gl.uniform1i(varDustSize, this.dustSize);
        let varPertN = this.gl.getUniformLocation(this.shaderProgram, "pertN");
        this.gl.uniform1i(varPertN, this.pertN);
        let varPertAmp = this.gl.getUniformLocation(this.shaderProgram, "pertAmp");
        this.gl.uniform1f(varPertAmp, this.pertAmp);
        let varTime = this.gl.getUniformLocation(this.shaderProgram, "time");
        this.gl.uniform1f(varTime, this.time);
        let varDisplayFeatures = this.gl.getUniformLocation(this.shaderProgram, "displayFeatures");
        this.gl.uniform1i(varDisplayFeatures, this.displayFeatures);
    }
    draw(matView, matProjection) {
        if (this.shaderProgram == null)
            throw new Error("draw(...): Shader program is null!");
        this.gl.useProgram(this.shaderProgram);
        let viewMatIdx = this.gl.getUniformLocation(this.shaderProgram, "viewMat");
        this.gl.uniformMatrix4fv(viewMatIdx, false, matView);
        let projMatIdx = this.gl.getUniformLocation(this.shaderProgram, "projMat");
        this.gl.uniformMatrix4fv(projMatIdx, false, matProjection);
        this.onSetCustomShaderVariables();
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.blendFunc);
        this.gl.blendEquation(this.blendEquation);
        this.onBeforeDraw();
        this.gl.bindVertexArray(this.vertexArrayObject);
        this.gl.drawElements(this.primitiveType, this.arrayElementCount, this.gl.UNSIGNED_INT, 0);
        this.gl.bindVertexArray(null);
        this.gl.disable(this.gl.BLEND);
        this.gl.blendEquation(this.gl.FUNC_ADD);
        this.gl.useProgram(null);
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "galaxy": () => /* binding */ galaxy,
/* harmony export */   "uiController": () => /* binding */ uiController
/* harmony export */ });
/* harmony import */ var _GalaxyRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalaxyRenderer */ "./src/GalaxyRenderer.ts");
/* harmony import */ var _UiController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UiController */ "./src/UiController.ts");


var galaxy = null;
var uiController = null;
try {
    // The html code must contain a canvas named "cvGalaxy"
    var canvas = document.getElementById('cvGalaxy');
    if (canvas == null) {
        throw Error('"The galaxy renderer needs a canvas object with id "cvGalaxy"');
    }
    galaxy = new _GalaxyRenderer__WEBPACK_IMPORTED_MODULE_0__.GalaxyRenderer(canvas);
    uiController = new _UiController__WEBPACK_IMPORTED_MODULE_1__.UiController(galaxy);
}
catch (Error) {
    alert(Error.message);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
//# sourceMappingURL=galaxy-renderer-bundle.js.map