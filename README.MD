# B8A1  TypeScript Problem Solving & OOP

This repo has my solutions for **Assignment 1 (B8A1)**. All functions are in `solutions.ts`.

## Functions in `solutions.ts`

### 1. `multiplyValue(value, multiplier?)`
Takes a number and an **optional** multiplier.
- If `multiplier` is `0`, it returns `0`.
- If `multiplier` is given, it returns `value * multiplier`.
- If `multiplier` is not given, it returns `value * 2`.

### 2. `processInput(value)`
Takes a value of type `number | string | boolean` (a **union type**) and uses `typeof` to **narrow** the type:
- `string` → removes extra spaces and converts it to lowercase.
- `number` → multiplies it by `10`.
- `boolean` → returns `"Active"` for `true` and `"Inactive"` for `false`.

### 3. `formatCoordinate(coordinate)`
Takes a **readonly tuple** `[latitude, longitude, locationName]`, so the values cannot be changed. It unpacks the three values and returns a string like:
`Location: Dhaka (23.8, 90.4)`

### 4. `concatenateArrays(...arrays)`
A **generic** function that takes any number of arrays (rest parameter) of the same type `T`. It loops through every array, pushes each item into one new array and returns the combined array.

### 5. `getPopularCourses(courses, minStudents)`
Uses the `Course` **interface** (`title`, `students`, `isPublished`). It filters the list and returns only the courses that are **published** and have **at least `minStudents`** students.

### 6. `pluckValues(items, key)`
A **generic** function with `K extends keyof T`, so the key must be a real property of the objects. It returns an array with the value of that property from each object.

### 7. `Employee` and `Manager` classes
- `Employee` has a `protected name` and a `private baseSalary`. Its `getDetails()` method returns the name and base salary.
- `Manager` **extends** `Employee` and adds a `private department`. Its `getRoleInfo()` method returns the department and name. It can use `name` because `name` is `protected`, but it cannot access `baseSalary` because that is `private`.

### 8. `validateAgeAsync(age)`
Returns a **Promise** of a string.
- If `age` is less than `18`, it rejects right away with the error `"Access Denied: Must be 18 or older"`.
- Otherwise it waits 1 second and resolves with `"Access Granted"`.

## My Blogs

- [What's the Difference between Type and Interface in TypeScript?](type-vs-interface.md)
- [How does the tsc command work?](tsc-and-tsconfig.md)
