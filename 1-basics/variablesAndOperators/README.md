# Relation between `integer` and `string`

A string can be converted into number as:
let intNum = parseInt("7");

And similarly, we can convert number into string as:
let stringNum = intNum.toString()

# Difference Between `Number()` and `parseInt()`

When converting strings to numbers in JavaScript, there are two common methods: `Number()` and `parseInt()`. Both serve different purposes:

- **`Number()`**: Converts a string into a valid number, including decimals.
  - **Example:** `"10.5"` → `10.5`
- **`parseInt()`**: Converts a string into an integer by **removing** any decimal part.
  - **Example:** `"10.5"` → `10`

## Comparison Table

| Input (`firstNum`) | `Number()` Output | `parseInt()` Output |
| ------------------ | ----------------- | ------------------- |
| `"10"`             | `10`              | `10`                |
| `"10.5"`           | `10.5`            | `10`                |
| `"abc"`            | `NaN`             | `NaN`               |
| `"10abc"`          | `NaN`             | `10`                |
| `""` (empty)       | `0`               | `NaN`               |

## Key Differences:

1. `Number()` can handle both integers and floating-point numbers, while `parseInt()` only returns integers.
2. `Number()` returns `NaN` for strings that cannot be converted, while `parseInt()` tries to extract numbers from the beginning of the string.
3. `Number("")` returns `0`, but `parseInt("")` returns `NaN`.
