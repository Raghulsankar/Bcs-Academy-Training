# Day6 Assignments

- Order of key need to be maintained (Data type?)
- Check 4 ways to check a value is NaN and compare & reason which is best way?

- Nested Destructing

## 1. Order of key need to be maintained (Data type?)

- Use Array and Map methods
- Use when order matters and data is sequential.
- order guarnteed
- index based

> If key order needs to be maintained, use Map. If element order matters, use Array. Objects are not ideal for order-dependent data.

## 2. Check 4 ways to check a value is NaN and compare & reason which is best way?

Method Accurate No Coercion Readable Recommended

- Number.isNaN() ✅ ✅ ✅ ⭐⭐⭐⭐⭐
- isNaN() ❌ ❌ ⚠️ ❌
- value !== value ✅ ✅ ❌ ⚠️
- Object.is(value, NaN) ✅ ✅ ✅ ⭐⭐⭐⭐

## Nested Destructing

refer mdn and chatgpt for nested array destructing and nested object destructing
