import murmur128 from "murmur-128";

String.prototype.PadLeft = function (len, charStr) {
  var s = this + "";
  return new Array(len - s.length + 1).join(charStr, "") + s;
};
const ArrayBufferToString = (str) => {
  const buffer = murmur128(str);

  let _string = "";

  new Uint8Array(buffer).map((item) => {
    _string += item.toString(16).PadLeft(2, "0");
  });

  return _string;
};

export default ArrayBufferToString;
