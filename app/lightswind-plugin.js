const plugin = require("tailwindcss/plugin");
const lightswind = require("lightswind/plugin");

function stripAtProperty(input) {
  if (!input || typeof input !== "object") return input;
  if (Array.isArray(input)) return input.map(stripAtProperty);

  const output = {};
  for (const [key, value] of Object.entries(input)) {
    if (key.startsWith("@property ")) continue;
    output[key] = stripAtProperty(value);
  }
  return output;
}

module.exports = plugin(function (api) {
  const { addBase, addComponents, addUtilities } = api;

  const wrapped = {
    ...api,
    addBase(base) {
      return addBase(stripAtProperty(base));
    },
    addComponents(components, options) {
      return addComponents(stripAtProperty(components), options);
    },
    addUtilities(utilities, options) {
      return addUtilities(stripAtProperty(utilities), options);
    },
  };

  if (typeof lightswind === "function") {
    return lightswind(wrapped);
  }

  if (lightswind && typeof lightswind.handler === "function") {
    return lightswind.handler(wrapped);
  }
});
