## What's the Difference between Type and Interface in TypeScript? 
### Introduction

In TypeScript, we can define the structure of an object using either type aliases or interfaces. Both are quite similar, which can make choosing between them confusing. However, each has some different features, and understanding those differences helps us decide which one to use. 

### Differences

We use interface to describe the structure of an object. We can also extend an existing interface to build a new structure based on it. 

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

A type alias can also describe the structure of an object, but we can also use it to define unions, intersections, primitive types, tuples, and more. 

```ts
type Status = "pending" | "approved" | "rejected";

type User = {
  id: number;
  name: string;
};

type Admin = User & {
  permissions: string[];
};
```

We can declare the same interface more than once, and TypeScript will automatically combine those declarations. we cannot declare the same type alias more than once.

### Which One Should We Choose?

We can use interface when defining an object that may be extended or merged, and choose type when we need unions, tuples, or more flexible combinations. 

### Conclusion

There isn't one option that is always better. use the one that makes our code easier to understand, and stay consistent. 

